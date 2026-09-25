import { RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectTransactionState = (state: RootState) => state.transaction

export const selectTransactions = createSelector(
    [selectTransactionState],
    (state) => state.transactions
);

export const selectTransactionByRefId = createSelector(
    [selectTransactions, (_state: RootState, refId: string) => refId],
    (transactions, refId) => transactions.find((transaction) => transaction.refId === refId) ?? null
);

export const selectTransactionIsLoading = createSelector(
    [selectTransactionState],
    (state) => state.isLoading
);

export const selectTransactionError = createSelector(
    [selectTransactionState],
    (state) => state.error
);

export const selectTransactionSummary = createSelector(
    [selectTransactionState],
    (state) => state.transactionSummary
);

export const selectTransactionSummaryIsLoading = createSelector(
    [selectTransactionState],
    (state) => state.isSummaryLoaded
);