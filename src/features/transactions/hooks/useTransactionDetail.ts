import { useCallback } from "react";
import { Share } from "react-native";
import { useAppSelector } from "@/app/store/hooks";
import { selectTransactionByRefId } from "../selectors/transactionSelector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { sharePDF } from "@/core/pdf-generator/slices/pdfGeneratorSlice";

export const useTransactionDetail = (refId: string) => {
    const transaction = useAppSelector((state) => selectTransactionByRefId(state, refId));
    const dispatch = useDispatch<AppDispatch>();

    const shareReceipt = useCallback(() => {
        if (transaction) {
            dispatch(sharePDF(transaction))
        }
    }, [transaction, dispatch]);

    const shareReference = useCallback(() => {
        Share.share({ message: refId });
    }, [refId]);

    return {
        transaction,
        shareReceipt,
        shareReference,
    };
};
