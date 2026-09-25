import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionHistory, TransactionSummary } from "../domain/entity/TransactionEntity";

interface TransactionInitialState {
    isLoading: boolean;
    isSummaryLoaded: boolean;
    transactionSummary: TransactionSummary | null
    transactions: TransactionHistory[];
    error: string | null
}

const initialTransactionState: TransactionInitialState = {
    isLoading: false,
    isSummaryLoaded: false,
    transactionSummary: null,
    transactions: [],
    error: null
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState: initialTransactionState,
    reducers: {
        fetchTransactionHistoryRequest: (state) => {
            state.isLoading = true
            state.error = null
        },
        fetchTransactionHistorySuccess: (state, action: PayloadAction<TransactionHistory[]>) => {
            state.isLoading = false;
            state.transactions = action.payload
        },
        fetchTransactionHistoryFaliure: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        fetchTransactionSummaryRequest: (state) => {
            state.isSummaryLoaded = true
        },
        fetchTransactionSummarySuccess: (state, action: PayloadAction<TransactionSummary>) => {
            state.isSummaryLoaded = false;
            state.transactionSummary = action.payload
        },
        fetchTransactionSummaryFaliure: (state, action: PayloadAction<string>) => {
            state.isSummaryLoaded = false;
            state.error = action.payload
        }
    }
})

export const {
    fetchTransactionHistoryRequest,
    fetchTransactionHistorySuccess,
    fetchTransactionHistoryFaliure,

    fetchTransactionSummaryRequest,
    fetchTransactionSummarySuccess,
    fetchTransactionSummaryFaliure
} = transactionSlice.actions

export default transactionSlice.reducer