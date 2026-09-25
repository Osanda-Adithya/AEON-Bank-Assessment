import { call, takeLatest } from "redux-saga/effects";
import { transactionPdfService } from "../service/TransactionPdfService";
import { PayloadAction } from "@reduxjs/toolkit";
import { TransactionHistory } from "@/features/transactions/domain/entity/TransactionEntity";
import { sharePDF } from "../slices/pdfGeneratorSlice";

function* sharePDFSaga(action: PayloadAction<TransactionHistory>): Generator {
    yield call([transactionPdfService, transactionPdfService.generateAndShare], action.payload)
}

export function* watchPDFSaga() {
    yield takeLatest(sharePDF.type, sharePDFSaga);
}