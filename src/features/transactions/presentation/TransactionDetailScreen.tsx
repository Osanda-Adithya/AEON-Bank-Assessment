import { MainStackParamList } from "@/app/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Copy, Share as ShareIcon } from "lucide-react-native";
import AnimatedView from "@/shared/components/animated/AnimatedView";
import IconButton from "@/shared/components/buttons/IconButton";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import Card from "@/shared/components/cards/Card";
import EmptyState from "@/shared/components/feedback/EmptyState";
import DetailRow from "@/shared/components/list/DetailRow";
import { colors } from "@/shared/theme/colors";
import { formatDayMonthYearUTC, formatSignedCurrency, formatTimeUTC } from "@/shared/utils/formatters";
import { useTransactionDetail } from "../hooks/useTransactionDetail";
import { isIncomingTransaction } from "../utils/transactionUtils";
import TransactionDetailHeader from "../components/TransactionDetailHeader";

type TransactionDetailScreenProps = NativeStackScreenProps<MainStackParamList, "TransactionDetail">

const TransactionDetailScreen: FC<TransactionDetailScreenProps> = ({ navigation, route }) => {
    const insets = useSafeAreaInsets();
    const { transaction, shareReceipt, shareReference } = useTransactionDetail(route.params.refId);

    return (
        <View style={styles.container}>
            <TransactionDetailHeader
                transaction={transaction}
                onBackPress={navigation.canGoBack() ? navigation.goBack : undefined}
            />

            {transaction ? (
                <>
                    <ScrollView contentContainerStyle={styles.content}>
                        <AnimatedView animatedType="fadeInUp" delay={200}>
                            <Card>
                                <DetailRow label="Recipient" value={transaction.recipientName} />
                                <DetailRow label="Transfer" value={transaction.transferName} />
                                <DetailRow label="Date" value={formatDayMonthYearUTC(transaction.transferDate)} />
                                <DetailRow label="Time" value={formatTimeUTC(transaction.transferDate)} />
                                <DetailRow
                                    label="Reference ID"
                                    value={transaction.refId}
                                    trailing={
                                        <IconButton
                                            size={28}
                                            accessibilityLabel="Share reference ID"
                                            onPress={shareReference}
                                            icon={<Copy size={16} color={colors.incomingIcon} />}
                                        />
                                    }
                                />
                                <DetailRow
                                    label="Amount"
                                    value={formatSignedCurrency(transaction.amount)}
                                    valueStyle={isIncomingTransaction(transaction) && styles.amountIncoming}
                                    showDivider={false}
                                />
                            </Card>
                        </AnimatedView>
                    </ScrollView>

                    <AnimatedView
                        animatedType="fadeInUp"
                        delay={300}
                        style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}
                    >
                        <PrimaryButton
                            title="Share receipt"
                            onPress={shareReceipt}
                            prefixIcon={<ShareIcon size={20} color={colors.white} />}
                        />
                    </AnimatedView>
                </>
            ) : (
                <AnimatedView animatedType="fadeInUp">
                    <EmptyState
                        title="Transaction not found"
                        message="This transaction is no longer available."
                        actionTitle="Back to transactions"
                        onActionPress={navigation.goBack}
                    />
                </AnimatedView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.surface,
    },
    content: {
        padding: 20,
    },
    amountIncoming: {
        color: colors.success,
    },
    footer: {
        paddingHorizontal: 20,
        paddingTop: 12,
    },
});

export default TransactionDetailScreen;
