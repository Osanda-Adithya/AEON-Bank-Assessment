import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { fetchTransactionHistoryRequest, fetchTransactionSummaryRequest } from "../slices/transactionSlice";
import {
    filterTransactions,
    getTransactionPeriodLabel,
    groupTransactionsByMonth,
    TransactionFilter,
} from "../utils/transactionUtils";
import { useTransactionSelector } from "./useTransactionSelector";

export const useTransactions = () => {
    const dispatch = useAppDispatch();
    const { transactions, transactionSummary, isTransactionLoading, transactionError } = useTransactionSelector();

    const [filter, setFilter] = useState<TransactionFilter>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const loadTransactions = useCallback(() => {
        dispatch(fetchTransactionHistoryRequest());
        dispatch(fetchTransactionSummaryRequest());
    }, [dispatch]);

    useEffect(() => {
        loadTransactions();
    }, [loadTransactions]);

    const sections = useMemo(
        () => groupTransactionsByMonth(filterTransactions(transactions, filter, searchQuery)),
        [transactions, filter, searchQuery],
    );

    const periodLabel = useMemo(() => getTransactionPeriodLabel(transactions), [transactions]);

    return {
        sections,
        periodLabel,
        transactionSummary,
        hasTransactions: transactions.length > 0,
        isLoading: isTransactionLoading,
        error: transactionError,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        reload: loadTransactions,
    };
};
