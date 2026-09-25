import { formatMonthRange, formatMonthYear } from "@/shared/utils/formatters";
import { TransactionHistory } from "../domain/entity/TransactionEntity";
import { ITEM_STAGGER_DELAY, LIST_ANIMATION_DELAY, MAX_STAGGERED_ITEMS } from "../constants/transactionConstants";

export type TransactionFilter = "all" | "incoming" | "outgoing";

export interface TransactionSection {
    key: string;
    title: string;
    data: TransactionHistory[];
}

export const isIncomingTransaction = (transaction: TransactionHistory): boolean => transaction.amount >= 0;

const matchesFilter = (transaction: TransactionHistory, filter: TransactionFilter): boolean => {
    switch (filter) {
        case "incoming":
            return isIncomingTransaction(transaction);
        case "outgoing":
            return !isIncomingTransaction(transaction);
        default:
            return true;
    }
};

const matchesQuery = (transaction: TransactionHistory, query: string): boolean => {
    if (!query) {
        return true;
    }
    return [transaction.transferName, transaction.recipientName, transaction.refId]
        .some((field) => field.toLowerCase().includes(query));
};

export const filterTransactions = (
    transactions: TransactionHistory[],
    filter: TransactionFilter,
    query: string,
): TransactionHistory[] => {
    const normalizedQuery = query.trim().toLowerCase();
    return transactions.filter(
        (transaction) => matchesFilter(transaction, filter) && matchesQuery(transaction, normalizedQuery),
    );
};

const sortByDateDesc = (transactions: TransactionHistory[]): TransactionHistory[] =>
    [...transactions].sort(
        (a, b) => new Date(b.transferDate).getTime() - new Date(a.transferDate).getTime(),
    );

export const groupTransactionsByMonth = (transactions: TransactionHistory[]): TransactionSection[] => {
    const sections = new Map<string, TransactionSection>();

    sortByDateDesc(transactions).forEach((transaction) => {
        const date = new Date(transaction.transferDate);
        const key = `${date.getFullYear()}-${date.getMonth()}`;
        const section = sections.get(key);

        if (section) {
            section.data.push(transaction);
        } else {
            sections.set(key, { key, title: formatMonthYear(date), data: [transaction] });
        }
    });

    return Array.from(sections.values());
};

export const getTransactionPeriodLabel = (transactions: TransactionHistory[]): string | null => {
    if (transactions.length === 0) {
        return null;
    }
    const timestamps = transactions.map((transaction) => new Date(transaction.transferDate).getTime());
    return formatMonthRange(new Date(Math.min(...timestamps)), new Date(Math.max(...timestamps)));
};

export const getTransactionKey = (transaction: TransactionHistory): string => transaction.refId;

export const getItemAnimationDelay = (index: number): number =>
    LIST_ANIMATION_DELAY + Math.min(index, MAX_STAGGERED_ITEMS) * ITEM_STAGGER_DELAY;
