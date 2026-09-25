import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "@/shared/theme/colors";

interface BrandLogoProps {
    name?: string;
    badge?: string;
    variant?: "light" | "dark";
    size?: number;
    style?: StyleProp<ViewStyle>;
}

const BrandLogo: FC<BrandLogoProps> = ({
    name = "Tally",
    badge,
    variant = "light",
    size = 28,
    style,
}) => {
    const tint = variant === "light" ? colors.white : colors.textPrimary;

    return (
        <View style={[styles.container, style]}>
            <View
                style={[
                    styles.mark,
                    {
                        width: size,
                        height: size,
                        borderRadius: size * 0.25,
                        borderColor: tint,
                    },
                ]}
            >
                <Text style={[styles.markLetter, { color: tint, fontSize: size * 0.55 }]}>
                    {name.charAt(0)}
                </Text>
            </View>
            <Text style={[styles.name, { color: tint, fontSize: size * 0.72 }]}>{name}</Text>
            {badge && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badge}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    mark: {
        borderWidth: 1.5,
        alignItems: "center",
        justifyContent: "center",
    },
    markLetter: {
        fontWeight: "500",
    },
    name: {
        marginLeft: 10,
        fontWeight: "700",
    },
    badge: {
        marginLeft: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.borderOnDark,
        backgroundColor: colors.navyStripe,
    },
    badgeText: {
        color: colors.white,
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.2,
    },
});

export default React.memo(BrandLogo);
