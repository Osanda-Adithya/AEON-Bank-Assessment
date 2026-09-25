import { TransactionHistory } from "@/features/transactions/domain/entity/TransactionEntity";
import { isIncomingTransaction } from "@/features/transactions/utils/transactionUtils";
import { formatDayMonthYearUTC, formatSignedCurrency, formatTimeUTC } from "@/shared/utils/formatters";
import { generatePDF } from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import { Platform } from 'react-native';

class TransactionPdfService {
  async generateAndShare(
    transaction: TransactionHistory,
  ): Promise<void> {
    const html = this.buildHtml(transaction);

    const file = await generatePDF({
      html,
      fileName: `transaction-${transaction.refId}`,
      ...(Platform.OS === 'ios' && { directory: 'Documents' }),
    });

    if (!file.filePath) {
      throw new Error('Failed to generate transaction PDF');
    }

    await Share.open({
      title: 'Share Transaction',
      url: `file://${file.filePath}`,
      type: 'application/pdf',
      failOnCancel: false,
    });
  }

  private buildHtml(transaction: TransactionHistory): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />

          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 32px;
              color: #222;
            }

            .header {
              text-align: center;
              margin-bottom: 32px;
            }

            .title {
              font-size: 24px;
              font-weight: bold;
            }

            .subtitle {
              color: #777;
              margin-top: 8px;
            }

            .amount {
              font-size: 30px;
              font-weight: bold;
              text-align: center;
              margin: 24px 0;
            }

            .status {
              text-align: center;
              font-weight: bold;
              margin-bottom: 32px;
            }

            .row {
              display: flex;
              justify-content: space-between;
              padding: 14px 0;
              border-bottom: 1px solid #eeeeee;
            }

            .label {
              color: #777;
            }

            .value {
              font-weight: bold;
            }

            .footer {
              margin-top: 40px;
              text-align: center;
              color: #999;
              font-size: 12px;
            }
          </style>
        </head>

        <body>

          <div class="header">
            <div class="title">
              Transaction Details
            </div>

            <div class="subtitle">
              Transaction Receipt
            </div>
          </div>

          <div class="amount">
            ${formatSignedCurrency(transaction.amount)}
          </div>

          <div class="status">
            ${transaction.transferName}
          </div>

          <div class="row">
            <span class="label">Reference ID</span>
            <span class="value">${transaction.refId}</span>
          </div>

          <div class="row">
            <span class="label">Date</span>
            <span class="value">${formatDayMonthYearUTC(transaction.transferDate)}, ${formatTimeUTC(transaction.transferDate)}</span>
          </div>

          <div class="row">
            <span class="label">Type</span>
            <span class="value">${isIncomingTransaction(transaction) ? 'Incoming' : 'Outgoing'}</span>
          </div>

          <div class="row">
            <span class="label">Recipient</span>
            <span class="value">${transaction.recipientName}</span>
          </div>

          <div class="footer">
            This document was generated electronically.
          </div>

        </body>
      </html>
    `;
  }
}

export const transactionPdfService = new TransactionPdfService();