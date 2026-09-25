import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import BrandLogo from "@/shared/components/brand/BrandLogo";
import AnimatedView from "@/shared/components/animated/AnimatedView";
import { colors } from "@/shared/theme/colors";

const CardIllustration: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ring} />

            <AnimatedView animatedType="fadeInRight" delay={150} style={styles.backCardWrapper}>
                <View style={styles.backCard}>
                    <View style={styles.backCardStripe} />
                </View>
            </AnimatedView>

            <AnimatedView animatedType="fadeInUp" delay={300} style={styles.frontCardWrapper}>
                <View style={styles.frontCard}>
                    <View style={styles.frontCardHeader}>
                        <BrandLogo variant="dark" size={22} />
                        <Text style={styles.cardType}>BUSINESS</Text>
                    </View>

                    <View style={styles.chipRow}>
                        <View style={styles.chip}>
                            <View style={styles.chipLineHorizontal} />
                            <View style={styles.chipLineVertical} />
                        </View>
                        <Text style={styles.contactless}>{`)))`}</Text>
                    </View>

                    <Text style={styles.cardNumber} numberOfLines={1}>
                        ••••  ••••  ••••  4821
                    </Text>
                    <Text style={styles.bankName}>AEON BANK</Text>
                </View>
            </AnimatedView>

            <AnimatedView animatedType="fadeInUp" delay={550} style={styles.shieldWrapper}>
                <View style={styles.shieldBadge}>
                    <View style={styles.shield}>
                        <Text style={styles.shieldCheck}>✓</Text>
                    </View>
                </View>
            </AnimatedView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 300,
        alignItems: "center",
        justifyContent: "center",
    },
    ring: {
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: colors.ringOnDark,
    },
    backCardWrapper: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    backCard: {
        width: 260,
        height: 160,
        borderRadius: 14,
        backgroundColor: colors.navyLight,
        overflow: "hidden",
        transform: [{ rotate: "-9deg" }],
    },
    backCardStripe: {
        marginTop: 34,
        height: 36,
        backgroundColor: colors.navyStripe,
    },
    frontCardWrapper: {
        position: "absolute",
        top: 100,
        left: 30,
    },
    frontCard: {
        width: 250,
        height: 160,
        borderRadius: 14,
        padding: 18,
        backgroundColor: colors.surface,
        transform: [{ rotate: "3deg" }],
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },
    frontCardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardType: {
        color: colors.textMuted,
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginTop: 10,
    },
    chipRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
    },
    chip: {
        width: 40,
        height: 30,
        borderRadius: 6,
        backgroundColor: colors.chipGold,
        overflow: "hidden",
    },
    chipLineHorizontal: {
        position: "absolute",
        top: 14,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: colors.chipGoldDark,
    },
    chipLineVertical: {
        position: "absolute",
        left: 19,
        top: 0,
        bottom: 0,
        width: 1,
        backgroundColor: colors.chipGoldDark,
    },
    contactless: {
        marginLeft: 12,
        color: colors.textMuted,
        fontSize: 16,
        letterSpacing: -1,
    },
    cardNumber: {
        marginTop: 16,
        color: colors.textPrimary,
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 1,
    },
    bankName: {
        marginTop: 6,
        color: colors.textSecondary,
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.5,
    },
    shieldWrapper: {
        position: "absolute",
        top: 212,
        right: 30,
    },
    shieldBadge: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 6,
        borderColor: colors.navy,
        backgroundColor: colors.accentBlue,
        alignItems: "center",
        justifyContent: "center",
    },
    shield: {
        width: 26,
        height: 30,
        backgroundColor: colors.white,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
        alignItems: "center",
        justifyContent: "center",
    },
    shieldCheck: {
        color: colors.accentBlue,
        fontSize: 16,
        fontWeight: "900",
    },
});

export default React.memo(CardIllustration);
