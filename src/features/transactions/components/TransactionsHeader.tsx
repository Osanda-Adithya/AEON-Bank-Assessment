import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Search, X } from "lucide-react-native";
import AnimatedView from "@/shared/components/animated/AnimatedView";
import IconButton from "@/shared/components/buttons/IconButton";
import ScreenHeader from "@/shared/components/header/ScreenHeader";
import { colors } from "@/shared/theme/colors";
import { TransactionSummary } from "../domain/entity/TransactionEntity";
import TransactionSummaryTile from "./TransactionSummaryTile";

interface TransactionsHeaderProps {
    accountName: string;
    accountNumberLast4: string;
    periodLabel?: string | null;
    summary: TransactionSummary | null;
    isSearchVisible: boolean;
    onBackPress?: () => void;
    onSearchToggle: () => void;
}

const TransactionsHeader: FC<TransactionsHeaderProps> = ({
    accountName,
    accountNumberLast4,
    periodLabel,
    summary,
    isSearchVisible,
    onBackPress,
    onSearchToggle,
}) => {
    const insets = useSafeAreaInsets();
    const SearchIcon = isSearchVisible ? X : Search;

    return (
        <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
            <AnimatedView animatedType="fadeInDown">
                <ScreenHeader
                    title="Transactions"
                    variant="dark"
                    onBackPress={onBackPress}
                    rightAction={
                        <IconButton
                            accessibilityLabel={isSearchVisible ? "Close search" : "Search transactions"}
                            onPress={onSearchToggle}
                            icon={<SearchIcon size={22} color={colors.textOnDark} />}
                        />
                    }
                />
            </AnimatedView>

            <AnimatedView animatedType="fadeInDown" delay={100} style={styles.accountRow}>
                <Text style={styles.accountText} numberOfLines={1}>
                    {`${accountName} ••••  ${accountNumberLast4}`}
                </Text>
                {periodLabel && <Text style={styles.accountText}>{periodLabel}</Text>}
            </AnimatedView>

            {summary && (
                <View style={styles.summaryRow}>
                    <AnimatedView animatedType="fadeInLeft" delay={200} style={styles.summaryTile}>
                        <TransactionSummaryTile direction="in" amount={summary.moneyIn} />
                    </AnimatedView>
                    <AnimatedView animatedType="fadeInRight" delay={200} style={[styles.summaryTile, styles.summaryGap]}>
                        <TransactionSummaryTile direction="out" amount={summary.moneyOut} />
                    </AnimatedView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 24,
        backgroundColor: colors.navy,
    },
    accountRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
    },
    accountText: {
        color: colors.textOnDarkMuted,
        fontSize: 15,
    },
    summaryRow: {
        flexDirection: "row",
        marginTop: 16,
    },
    summaryTile: {
        flex: 1,
    },
    summaryGap: {
        marginLeft: 12,
    },
});

export default React.memo(TransactionsHeader);
