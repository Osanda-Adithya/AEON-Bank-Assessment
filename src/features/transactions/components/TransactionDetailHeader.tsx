import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedView from "@/shared/components/animated/AnimatedView";
import ScreenHeader from "@/shared/components/header/ScreenHeader";
import { colors } from "@/shared/theme/colors";
import { formatSignedCurrency } from "@/shared/utils/formatters";
import { TransactionHistory } from "../domain/entity/TransactionEntity";
import { isIncomingTransaction } from "../utils/transactionUtils";
import TransactionDirectionIcon from "./TransactionDirectionIcon";

interface TransactionDetailHeaderProps {
    transaction: TransactionHistory | null;
    onBackPress?: () => void;
}

const TransactionDetailHeader: FC<TransactionDetailHeaderProps> = ({ transaction, onBackPress }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
            <AnimatedView animatedType="fadeInDown">
                <ScreenHeader title="Transaction details" variant="dark" onBackPress={onBackPress} />
            </AnimatedView>

            {transaction && (
                <AnimatedView animatedType="fadeInDown" delay={100} style={styles.summary}>
                    <TransactionDirectionIcon
                        isIncoming={isIncomingTransaction(transaction)}
                        size={56}
                        variant="dark"
                    />
                    <Text style={styles.transferName} numberOfLines={1}>{transaction.transferName}</Text>
                    <Text style={styles.amount} numberOfLines={1} adjustsFontSizeToFit>
                        {formatSignedCurrency(transaction.amount)}
                    </Text>
                </AnimatedView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 32,
        backgroundColor: colors.navy,
    },
    summary: {
        alignItems: "center",
        marginTop: 24,
    },
    transferName: {
        marginTop: 16,
        color: colors.textOnDarkMuted,
        fontSize: 17,
        fontWeight: "600",
    },
    amount: {
        marginTop: 4,
        color: colors.textOnDark,
        fontSize: 40,
        fontWeight: "800",
    },
});

export default React.memo(TransactionDetailHeader);
