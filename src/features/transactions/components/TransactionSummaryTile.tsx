import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import { colors } from "@/shared/theme/colors";
import { formatSignedCurrency } from "@/shared/utils/formatters";

interface TransactionSummaryTileProps {
    direction: "in" | "out";
    amount: number;
    style?: StyleProp<ViewStyle>;
}

const TransactionSummaryTile: FC<TransactionSummaryTileProps> = ({ direction, amount, style }) => {
    const isIncoming = direction === "in";
    const Icon = isIncoming ? ArrowDownLeft : ArrowUpRight;
    const label = isIncoming ? "Money in" : "Money out";
    const signedAmount = formatSignedCurrency(isIncoming ? Math.abs(amount) : -Math.abs(amount));

    return (
        <View style={[styles.container, style]} accessible accessibilityLabel={`${label} ${signedAmount}`}>
            <View style={styles.labelRow}>
                <Icon size={14} color={isIncoming ? colors.accentBlue : colors.textOnDarkMuted} />
                <Text style={styles.label}>{label.toUpperCase()}</Text>
            </View>
            <Text style={styles.amount} numberOfLines={1} adjustsFontSizeToFit>
                {signedAmount}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.borderOnDarkSubtle,
        backgroundColor: colors.navyStripe,
    },
    labelRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        marginLeft: 8,
        color: colors.textOnDarkMuted,
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 1,
    },
    amount: {
        marginTop: 8,
        color: colors.textOnDark,
        fontSize: 22,
        fontWeight: "800",
    },
});

export default React.memo(TransactionSummaryTile);
