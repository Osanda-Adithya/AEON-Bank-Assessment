import { TransactionHistory, TransactionSummary } from "../domain/entity/TransactionEntity";
import { ITransactionRepository } from "../domain/repositories/ITransactionRepository";

export class TransactionUseCase {

    constructor(private transactionRepository: ITransactionRepository) { }

    async fetchTransactionHistory(): Promise<TransactionHistory[]> {
        return this.transactionRepository.fetchTransactionHistory()
    }

    async fetchTransactionSummary(): Promise<TransactionSummary> {
        return this.transactionRepository.fetchTransactionSummary()
    }

}