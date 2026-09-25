import { combineReducers } from "@reduxjs/toolkit";
import transactionReducer from "@/features/transactions/slices/transactionSlice"
import pdfReducer from "@/core/pdf-generator/slices/pdfGeneratorSlice"

const rootReducer = combineReducers({
    transaction: transactionReducer,
    pdf: pdfReducer
});

export default rootReducer;