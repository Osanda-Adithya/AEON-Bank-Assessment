import { SegmentOption } from "@/shared/components/segmented/SegmentedControl";
import type { TransactionFilter } from "../utils/transactionUtils";

export const FILTER_OPTIONS: readonly SegmentOption<TransactionFilter>[] = [
    { label: "All", value: "all" },
    { label: "Incoming", value: "incoming" },
    { label: "Outgoing", value: "outgoing" },
];

export const ACCOUNT_NAME = "Operating account";
export const ACCOUNT_NUMBER_LAST4 = "4821";

export const LIST_ANIMATION_DELAY = 300;
export const ITEM_STAGGER_DELAY = 60;
export const MAX_STAGGERED_ITEMS = 8;
