import { transactionHistoryResponse, transactionSummary } from "@/lib/mockTransactionData";
import { TransactionHistory, TransactionSummary } from "../../domain/entity/TransactionEntity";

export const transactionAPI = {

    async fetchTransactionHistory(): Promise<TransactionHistory[]> {
        return transactionHistoryResponse.data
    },

    async fetchTransactionSummary(): Promise<TransactionSummary> {
        return transactionSummary.data
    }

}