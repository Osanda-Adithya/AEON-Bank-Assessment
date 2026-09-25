import { TransactionHistory, TransactionSummary } from "../../domain/entity/TransactionEntity";
import { ITransactionRepository } from "../../domain/repositories/ITransactionRepository";
import { transactionAPI } from "../api/transactionAPI";

export class TransactionRepositoryImpl implements ITransactionRepository {

    fetchTransactionHistory(): Promise<TransactionHistory[]> {
        return transactionAPI.fetchTransactionHistory()
    }

    fetchTransactionSummary(): Promise<TransactionSummary> {
        return transactionAPI.fetchTransactionSummary()
    }

}