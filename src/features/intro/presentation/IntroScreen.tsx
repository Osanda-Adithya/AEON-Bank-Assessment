import { MainStackParamList } from "@/app/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useCallback } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedView from "@/shared/components/animated/AnimatedView";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import BrandLogo from "@/shared/components/brand/BrandLogo";
import CardIllustration from "@/features/intro/components/CardIllustration";
import { colors } from "@/shared/theme/colors";
import { ArrowRight } from "lucide-react-native";

type IntroScreenProps = NativeStackScreenProps<MainStackParamList, "Intro">

const IntroScreen: FC<IntroScreenProps> = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    const onGetStarted = useCallback(() => {
        navigation.navigate("Transactions");
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={[styles.hero, { paddingTop: insets.top + 16 }]}>
                <AnimatedView animatedType="fadeInDown">
                    <BrandLogo badge="BUSINESS" />
                </AnimatedView>
                <View style={styles.illustration}>
                    <CardIllustration />
                </View>
            </View>

            <View style={[styles.content, { paddingBottom: insets.bottom + 16 }]}>
                <AnimatedView animatedType="fadeInUp" delay={200}>
                    <Text style={styles.title}>Complete control over every transaction.</Text>
                </AnimatedView>

                <AnimatedView animatedType="fadeInUp" delay={300}>
                    <Text style={styles.subtitle}>
                        Monitor balances, approve payments and reconcile activity across all
                        your business accounts in real time.
                    </Text>
                </AnimatedView>

                <AnimatedView animatedType="fadeInUp" delay={400} style={styles.buttonWrapper}>
                    <PrimaryButton
                        title="Get started"
                        onPress={onGetStarted}
                        suffixIcon={<ArrowRight size={20} color={colors.white} />}
                    />
                </AnimatedView>

                <AnimatedView animatedType="fadeInUp" delay={500}>
                    <Text style={styles.disclaimer}>
                        AEON Bank is authorised and regulated by Government. All the Deposits
                        are fully secure.
                    </Text>
                </AnimatedView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    hero: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: colors.navy,
    },
    illustration: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 28,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 30,
        fontWeight: "800",
        lineHeight: 34,
    },
    subtitle: {
        marginTop: 12,
        color: colors.textSecondary,
        fontSize: 16,
        lineHeight: 24,
    },
    buttonWrapper: {
        marginTop: 28,
    },
    arrow: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "600",
    },
    disclaimer: {
        marginTop: 16,
        color: colors.textMuted,
        fontSize: 12,
        lineHeight: 18,
        textAlign: "center",
    },
});

export default IntroScreen;
