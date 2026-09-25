import React, { FC } from "react";
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle,
} from "react-native";

interface IconButtonProps extends Omit<TouchableOpacityProps, "style" | "children"> {
    icon: React.ReactNode;
    accessibilityLabel: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
}

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

const IconButton: FC<IconButtonProps> = ({
    icon,
    accessibilityLabel,
    size = 40,
    style,
    ...rest
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
            hitSlop={HIT_SLOP}
            style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]}
            {...rest}
        >
            {icon}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default React.memo(IconButton);
