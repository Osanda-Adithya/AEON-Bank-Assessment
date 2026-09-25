import { TransactionHistory } from "@/features/transactions/domain/entity/TransactionEntity";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pdfGeneratorSlice = createSlice({
    name: "pdf",
    initialState: {},
    reducers: {

        sharePDF: (_state, _: PayloadAction<TransactionHistory>) => { }

    }
})

export const { sharePDF } = pdfGeneratorSlice.actions
export default pdfGeneratorSlice.reducer