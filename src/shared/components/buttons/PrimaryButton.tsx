import React, { FC } from "react";
import { colors } from "@/shared/theme/colors";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewStyle,
} from "react-native";

interface PrimaryButtonProps extends Omit<TouchableOpacityProps, "style"> {
    title: string;
    onPress?: () => void;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
    title,
    onPress,
    prefixIcon,
    suffixIcon,
    style,
    titleStyle,
    disabled,
    ...rest
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel={title}
            onPress={onPress}
            disabled={disabled}
            style={[styles.container, disabled && styles.disabled, style]}
            {...rest}
        >
            {prefixIcon && <View style={styles.prefixIcon}>{prefixIcon}</View>}
            <Text style={[styles.title, titleStyle]} numberOfLines={1}>
                {title}
            </Text>
            {suffixIcon && <View style={styles.suffixIcon}>{suffixIcon}</View>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 56,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 16,
        backgroundColor: colors.navy,
    },
    disabled: {
        opacity: 0.5,
    },
    title: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "700",
    },
    prefixIcon: {
        marginRight: 12,
    },
    suffixIcon: {
        marginLeft: 12,
    },
});

export default React.memo(PrimaryButton);
