import React, { FC } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "@/shared/theme/colors";

interface CardProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Card: FC<CardProps> = ({ children, style }) => {
    return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.white,
    },
});

export default React.memo(Card);
