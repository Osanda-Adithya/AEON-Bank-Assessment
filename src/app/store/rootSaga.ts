import { watchPDFSaga } from "@/core/pdf-generator/saga/pdfGeneratorSaga";
import { watchTransactionsSaga } from "@/features/transactions/sagas/transactionSaga";
import { all, fork } from "redux-saga/effects"

const rootSaga = function* () {
    yield all([
        fork(watchTransactionsSaga),
        fork(watchPDFSaga)
    ])
}

export default rootSaga;