export interface TransactionHistory {
    refId: string;
    transferDate: string;
    recipientName: string;
    transferName: string;
    amount: number;
}

export interface TransactionSummary {
    moneyIn: number;
    moneyOut: number;
}