const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

const MINUS_SIGN = "−";
const EN_DASH = "–";

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LKR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const pad = (value: number) => value.toString().padStart(2, "0");

export const formatCurrency = (amount: number): string => currencyFormatter.format(Math.abs(amount));

export const formatSignedCurrency = (amount: number): string =>
    `${amount < 0 ? MINUS_SIGN : "+"}${formatCurrency(amount)}`;

export const formatDayMonthTime = (isoDate: string): string => {
    const date = new Date(isoDate);
    return `${date.getDate()} ${MONTHS_SHORT[date.getMonth()]}, ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

export const formatDayMonthYearUTC = (isoDate: string): string => {
    const date = new Date(isoDate);
    return `${date.getUTCDate()} ${MONTHS_SHORT[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
};

export const formatTimeUTC = (isoDate: string): string => {
    const date = new Date(isoDate);
    return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())} UTC`;
};

export const formatMonthYear = (date: Date): string => `${MONTHS_LONG[date.getMonth()]} ${date.getFullYear()}`;

export const formatMonthRange = (start: Date, end: Date): string => {
    const startMonth = MONTHS_SHORT[start.getMonth()];
    const endLabel = `${MONTHS_SHORT[end.getMonth()]} ${end.getFullYear()}`;

    if (start.getFullYear() === end.getFullYear()) {
        return start.getMonth() === end.getMonth() ? endLabel : `${startMonth} ${EN_DASH} ${endLabel}`;
    }
    return `${startMonth} ${start.getFullYear()} ${EN_DASH} ${endLabel}`;
};

export const pluralize = (count: number, singular: string, plural = `${singular}s`): string =>
    `${count} ${count === 1 ? singular : plural}`;
