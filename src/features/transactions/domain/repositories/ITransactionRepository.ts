import { TransactionHistory, TransactionSummary } from "../entity/TransactionEntity"

export interface ITransactionRepository {

    fetchTransactionHistory: () => Promise<TransactionHistory[]>

    fetchTransactionSummary: () => Promise<TransactionSummary>

}