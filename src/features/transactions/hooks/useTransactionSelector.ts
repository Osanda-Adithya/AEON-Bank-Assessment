import { useSelector } from "react-redux"
import { selectTransactionError, selectTransactionIsLoading, selectTransactions, selectTransactionSummary, selectTransactionSummaryIsLoading } from "../selectors/transactionSelector"

export const useTransactionSelector = () => {

    const transactionSummary = useSelector(selectTransactionSummary);
    const transactions = useSelector(selectTransactions);
    const isTransactionLoading = useSelector(selectTransactionIsLoading);
    const isTransactionSummaryLoading = useSelector(selectTransactionSummaryIsLoading);
    const transactionError = useSelector(selectTransactionError);

    return {
        transactionSummary,
        transactions,
        isTransactionLoading,
        isTransactionSummaryLoading,
        transactionError
    }

}