export const transactionHistoryResponse = {
    data: [
        {
            refId: "123ABC",
            transferDate: "2024-10-15T12:34:56Z",
            recipientName: "John Doe",
            transferName: "Salary Payment",
            amount: 1500.00
        },
        {
            refId: "456DEF",
            transferDate: "2024-09-21T09:12:45Z",
            recipientName: "Jane Smith",
            transferName: "Invoice Payment",
            amount: 2300.75
        },
        {
            refId: "202MNO",
            transferDate: "2024-09-21T09:12:45Z",
            recipientName: "AEON Bank",
            transferName: "Fixed Deposit Maturity",
            amount: 5250.00
        },
        {
            refId: "303PQR",
            transferDate: "2024-09-21T09:12:45Z",
            recipientName: "AEON Bank",
            transferName: "Profit Distribution",
            amount: 86.40
        },
        {
            refId: "789GHI",
            transferDate: "2024-10-05T16:18:30Z",
            recipientName: "Robert Brown",
            transferName: "Refund",
            amount: -500.00
        },
        {
            refId: "101JKL",
            transferDate: "2024-08-30T11:47:22Z",
            recipientName: "Emily Davis",
            transferName: "Bonus Payment",
            amount: 1200.00
        },
        {
            refId: "404STU",
            transferDate: "2024-09-30T11:47:22Z",
            recipientName: "Michael Lee",
            transferName: "Transfer Out",
            amount: -750.00
        }
    ]
}

export const transactionSummary = {
    data: {
        moneyIn: 10337.15,
        moneyOut: 1250.00
    }
}