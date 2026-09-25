import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { colors } from "@/shared/theme/colors";

interface DetailRowProps {
    label: string;
    value: string;
    /** Optional element rendered after the value, e.g. a copy button. */
    trailing?: React.ReactNode;
    showDivider?: boolean;
    valueStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}

const DetailRow: FC<DetailRowProps> = ({ label, value, trailing, showDivider = true, valueStyle, style }) => {
    return (
        <View
            style={[styles.container, showDivider && styles.divider, style]}
            accessible={!trailing}
            accessibilityLabel={`${label}, ${value}`}
        >
            <Text style={styles.label} numberOfLines={1}>{label}</Text>
            <View style={styles.valueContainer}>
                <Text style={[styles.value, valueStyle]} numberOfLines={1}>{value}</Text>
                {trailing && <View style={styles.trailing}>{trailing}</View>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 64,
        paddingVertical: 16,
    },
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border,
    },
    label: {
        marginRight: 16,
        color: colors.textSecondary,
        fontSize: 16,
    },
    valueContainer: {
        flexShrink: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    value: {
        flexShrink: 1,
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: "700",
        textAlign: "right",
    },
    trailing: {
        marginLeft: 12,
    },
});

export default React.memo(DetailRow);
