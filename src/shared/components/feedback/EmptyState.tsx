import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import { colors } from "@/shared/theme/colors";

interface EmptyStateProps {
    title: string;
    message?: string;
    actionTitle?: string;
    onActionPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

const EmptyState: FC<EmptyStateProps> = ({ title, message, actionTitle, onActionPress, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            {message && <Text style={styles.message}>{message}</Text>}
            {actionTitle && onActionPress && (
                <PrimaryButton title={actionTitle} onPress={onActionPress} style={styles.action} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: 32,
        paddingVertical: 48,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 17,
        fontWeight: "700",
        textAlign: "center",
    },
    message: {
        marginTop: 8,
        color: colors.textMuted,
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
    },
    action: {
        marginTop: 20,
        alignSelf: "stretch",
    },
});

export default React.memo(EmptyState);
