import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import { colors } from "@/shared/theme/colors";

interface TransactionDirectionIconProps {
    isIncoming: boolean;
    size?: number;
    variant?: "light" | "dark";
}

const getIconColors = (isIncoming: boolean, variant: "light" | "dark") => {
    if (variant === "dark") {
        return {
            background: colors.navyStripe,
            border: colors.borderOnDarkSubtle,
            icon: isIncoming ? colors.accentBlue : colors.textOnDarkMuted,
        };
    }
    return {
        background: isIncoming ? colors.incomingTint : colors.outgoingTint,
        border: "transparent",
        icon: isIncoming ? colors.incomingIcon : colors.textPrimary,
    };
};

const TransactionDirectionIcon: FC<TransactionDirectionIconProps> = ({ isIncoming, size = 44, variant = "light" }) => {
    const Icon = isIncoming ? ArrowDownLeft : ArrowUpRight;
    const iconColors = getIconColors(isIncoming, variant);

    return (
        <View
            style={[
                styles.container,
                {
                    width: size,
                    height: size,
                    borderRadius: size * 0.25,
                    backgroundColor: iconColors.background,
                    borderColor: iconColors.border,
                },
            ]}
        >
            <Icon size={size * 0.42} color={iconColors.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
});

export default React.memo(TransactionDirectionIcon);
