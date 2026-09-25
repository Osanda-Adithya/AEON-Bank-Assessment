import { MainStackParamList } from "@/app/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useCallback, useState } from "react";
import {
    ActivityIndicator,
    RefreshControl,
    SectionList,
    SectionListRenderItem,
    StyleSheet,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedView from "@/shared/components/animated/AnimatedView";
import EmptyState from "@/shared/components/feedback/EmptyState";
import SearchInput from "@/shared/components/inputs/SearchInput";
import SegmentedControl from "@/shared/components/segmented/SegmentedControl";
import { colors } from "@/shared/theme/colors";
import { TransactionHistory } from "../domain/entity/TransactionEntity";
import { useTransactions } from "../hooks/useTransactions";
import { getItemAnimationDelay, getTransactionKey, TransactionSection } from "../utils/transactionUtils";
import {
    ACCOUNT_NAME,
    ACCOUNT_NUMBER_LAST4,
    FILTER_OPTIONS,
    LIST_ANIMATION_DELAY,
} from "../constants/transactionConstants";
import TransactionListItem from "../components/TransactionListItem";
import TransactionSectionHeader from "../components/TransactionSectionHeader";
import TransactionsHeader from "../components/TransactionsHeader";

type TransactionsScreenProps = NativeStackScreenProps<MainStackParamList, "Transactions">

const TransactionsScreen: FC<TransactionsScreenProps> = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const {
        sections,
        periodLabel,
        transactionSummary,
        hasTransactions,
        isLoading,
        error,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        reload,
    } = useTransactions();

    const onTransactionPress = useCallback((refId: string) => {
        navigation.navigate("TransactionDetail", { refId });
    }, [navigation]);

    const onSearchToggle = useCallback(() => {
        setIsSearchVisible((visible) => {
            if (visible) {
                setSearchQuery("");
            }
            return !visible;
        });
    }, [setSearchQuery]);

    const renderItem: SectionListRenderItem<TransactionHistory, TransactionSection> = useCallback(
        ({ item, index, section }) => (
            <AnimatedView animatedType="fadeInUp" delay={getItemAnimationDelay(index + 1)}>
                <TransactionListItem
                    transaction={item}
                    onPress={onTransactionPress}
                    isFirst={index === 0}
                    isLast={index === section.data.length - 1}
                />
            </AnimatedView>
        ),
        [onTransactionPress],
    );

    const renderSectionHeader = useCallback(
        ({ section }: { section: TransactionSection }) => (
            <AnimatedView animatedType="fadeInUp" delay={LIST_ANIMATION_DELAY}>
                <TransactionSectionHeader title={section.title} count={section.data.length} />
            </AnimatedView>
        ),
        [],
    );

    const renderEmptyState = () => {
        if (isLoading && !hasTransactions) {
            return <ActivityIndicator style={styles.loader} color={colors.navy} />;
        }
        if (error && !hasTransactions) {
            return (
                <AnimatedView animatedType="fadeInUp">
                    <EmptyState
                        title="Couldn't load transactions"
                        message="Please check your connection and try again."
                        actionTitle="Try again"
                        onActionPress={reload}
                    />
                </AnimatedView>
            );
        }
        return (
            <AnimatedView animatedType="fadeInUp">
                <EmptyState
                    title="No transactions found"
                    message={searchQuery ? "Try a different name or reference." : "Transactions will appear here."}
                />
            </AnimatedView>
        );
    };

    return (
        <View style={styles.container}>
            <TransactionsHeader
                accountName={ACCOUNT_NAME}
                accountNumberLast4={ACCOUNT_NUMBER_LAST4}
                periodLabel={periodLabel}
                summary={transactionSummary}
                isSearchVisible={isSearchVisible}
                onBackPress={navigation.canGoBack() ? navigation.goBack : undefined}
                onSearchToggle={onSearchToggle}
            />

            <View style={styles.filters}>
                {isSearchVisible && (
                    <AnimatedView animatedType="fadeInDown" duration={250} style={styles.search}>
                        <SearchInput
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholder="Search name or reference"
                            autoFocus
                        />
                    </AnimatedView>
                )}
                <AnimatedView animatedType="fadeInUp" delay={250}>
                    <SegmentedControl options={FILTER_OPTIONS} value={filter} onChange={setFilter} />
                </AnimatedView>
            </View>

            <SectionList
                sections={sections}
                keyExtractor={getTransactionKey}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ListEmptyComponent={renderEmptyState()}
                stickySectionHeadersEnabled={false}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
                contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
                refreshControl={
                    <RefreshControl refreshing={isLoading && hasTransactions} onRefresh={reload} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    filters: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    search: {
        marginBottom: 12,
    },
    loader: {
        marginTop: 48,
    },
});

export default TransactionsScreen;
