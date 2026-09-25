import { call, CallEffect, put, PutEffect, takeLatest } from "redux-saga/effects";
import { TransactionHistory, TransactionSummary } from "../domain/entity/TransactionEntity";
import { transactionUseCase } from "../container";
import { fetchTransactionHistoryFaliure, fetchTransactionHistoryRequest, fetchTransactionHistorySuccess, fetchTransactionSummaryFaliure, fetchTransactionSummaryRequest, fetchTransactionSummarySuccess } from "../slices/transactionSlice";

function* fetchTransactionHistorySaga(): Generator<CallEffect | PutEffect, void, TransactionHistory[]> {
    try {
        const response = yield call([transactionUseCase, transactionUseCase.fetchTransactionHistory]);
        yield put(fetchTransactionHistorySuccess(response))
    } catch (error) {
        yield put(fetchTransactionHistoryFaliure(error as string))
    }
}

function* fetchTransactionSummarySaga(): Generator<CallEffect | PutEffect, void, TransactionSummary> {
    try {
        const response = yield call([transactionUseCase, transactionUseCase.fetchTransactionSummary]);
        yield put(fetchTransactionSummarySuccess(response))
    } catch (error) {
        yield put(fetchTransactionSummaryFaliure(error as string))
    }
}

export function* watchTransactionsSaga() {
    yield takeLatest(fetchTransactionHistoryRequest.type, fetchTransactionHistorySaga);
    yield takeLatest(fetchTransactionSummaryRequest.type, fetchTransactionSummarySaga);
}
