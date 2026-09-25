import { TransactionUseCase } from "../application/TransactionUseCase";
import { TransactionRepositoryImpl } from "../data/repositories/TransactionRepositoryImpl";

const transactionRepository = new TransactionRepositoryImpl();
const transactionUseCase = new TransactionUseCase(transactionRepository);

export {
    transactionUseCase
}