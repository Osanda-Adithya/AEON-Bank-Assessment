import React, { FC, useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/shared/theme/colors";
import { fonts } from "@/shared/theme/typography";
import { formatDayMonthTime, formatSignedCurrency } from "@/shared/utils/formatters";
import { TransactionHistory } from "../domain/entity/TransactionEntity";
import { isIncomingTransaction } from "../utils/transactionUtils";
import TransactionDirectionIcon from "./TransactionDirectionIcon";

interface TransactionListItemProps {
    transaction: TransactionHistory;
    onPress?: (refId: string) => void;
    isFirst?: boolean;
    isLast?: boolean;
}

const TransactionListItem: FC<TransactionListItemProps> = ({ transaction, onPress, isFirst, isLast }) => {
    const isIncoming = isIncomingTransaction(transaction);
    const counterparty = `${isIncoming ? "From" : "To"} ${transaction.recipientName}`;
    const subtitle = `${counterparty} · ${formatDayMonthTime(transaction.transferDate)}`;
    const amount = formatSignedCurrency(transaction.amount);

    const handlePress = useCallback(() => onPress?.(transaction.refId), [onPress, transaction.refId]);

    return (
        <Pressable
            onPress={handlePress}
            disabled={!onPress}
            accessibilityRole="button"
            accessibilityLabel={`${transaction.transferName}, ${amount}, ${subtitle}`}
            style={({ pressed }) => [
                styles.container,
                isFirst && styles.first,
                isLast ? styles.last : styles.divider,
                pressed && styles.pressed,
            ]}
        >
            <TransactionDirectionIcon isIncoming={isIncoming} />

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{transaction.transferName}</Text>
                <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>
            </View>

            <View style={styles.trailing}>
                <Text style={[styles.amount, isIncoming && styles.amountIncoming]} numberOfLines={1}>
                    {amount}
                </Text>
                <Text style={styles.reference} numberOfLines={1}>{transaction.refId}</Text>
            </View>
        </Pressable>
    );
};

const RADIUS = 14;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: colors.white,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.border,
    },
    first: {
        borderTopWidth: 1,
        borderTopLeftRadius: RADIUS,
        borderTopRightRadius: RADIUS,
    },
    last: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: RADIUS,
        borderBottomRightRadius: RADIUS,
    },
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.divider,
    },
    pressed: {
        backgroundColor: colors.surface,
    },
    details: {
        flex: 1,
        marginLeft: 16,
        marginRight: 12,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: "600",
    },
    subtitle: {
        marginTop: 4,
        color: colors.textMuted,
        fontSize: 14,
    },
    trailing: {
        alignItems: "flex-end",
    },
    amount: {
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: "700",
    },
    amountIncoming: {
        color: colors.success,
    },
    reference: {
        marginTop: 4,
        color: colors.textMuted,
        fontSize: 12,
        fontFamily: fonts.mono,
    },
});

export default React.memo(TransactionListItem);
