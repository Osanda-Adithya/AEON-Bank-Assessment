import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import IconButton from "@/shared/components/buttons/IconButton";
import { colors } from "@/shared/theme/colors";

interface ScreenHeaderProps {
    title: string;
    onBackPress?: () => void;
    rightAction?: React.ReactNode;
    variant?: "light" | "dark";
    style?: StyleProp<ViewStyle>;
}

const SLOT_SIZE = 40;

const ScreenHeader: FC<ScreenHeaderProps> = ({
    title,
    onBackPress,
    rightAction,
    variant = "light",
    style,
}) => {
    const tint = variant === "dark" ? colors.textOnDark : colors.textPrimary;

    return (
        <View style={[styles.container, style]}>
            <View style={styles.slot}>
                {onBackPress && (
                    <IconButton
                        accessibilityLabel="Go back"
                        onPress={onBackPress}
                        icon={<ChevronLeft size={26} color={tint} />}
                    />
                )}
            </View>
            <Text style={[styles.title, { color: tint }]} numberOfLines={1} accessibilityRole="header">
                {title}
            </Text>
            <View style={[styles.slot, styles.rightSlot]}>{rightAction}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        minHeight: 48,
    },
    slot: {
        width: SLOT_SIZE,
        alignItems: "flex-start",
    },
    rightSlot: {
        alignItems: "flex-end",
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
    },
});

export default React.memo(ScreenHeader);
