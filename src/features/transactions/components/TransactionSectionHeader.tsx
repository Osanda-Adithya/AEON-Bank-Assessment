import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/shared/theme/colors";
import { pluralize } from "@/shared/utils/formatters";

interface TransactionSectionHeaderProps {
    title: string;
    count: number;
}

const TransactionSectionHeader: FC<TransactionSectionHeaderProps> = ({ title, count }) => (
    <View style={styles.container} accessibilityRole="header">
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <Text style={styles.count}>{pluralize(count, "transaction")}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 12,
    },
    title: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 1.2,
    },
    count: {
        color: colors.textMuted,
        fontSize: 14,
    },
});

export default React.memo(TransactionSectionHeader);
