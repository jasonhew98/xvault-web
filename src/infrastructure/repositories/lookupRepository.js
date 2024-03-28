export default {
    getMainCategories() {
        return [null, [
            {
                id: "electronics",
                label: "Electronics"
            },
            {
                id: "entertainment",
                label: "Entertainment"
            },
            {
                id: "foodBeverage",
                label: "Food & Beverage"
            },
            {
                id: "healthBeauty",
                label: "Health & Beauty"
            },
            {
                id: "homeProperty",
                label: "Home & Property"
            },
            {
                id: "leisureSports",
                label: "Leisure & Sports"
            },
            {
                id: "medical",
                label: "Medical"
            },
            {
                id: "shopping",
                label: "Shopping"
            },
            {
                id: "telecommunications",
                label: "Telecommunications"
            },
            {
                id: "transportation",
                label: "Transportation"
            },
            {
                id: "travel",
                label: "Travel"
            },
            {
                id: "utilities",
                label: "Utilities"
            }
        ]];
    },
    getSubCategories() {
        return [null, [
            {
                id: "householdAppliances",
                label: "Household appliances"
            },
            {
                id: "computer",
                label: "Computer"
            },
            {
                id: "digitalApplications",
                label: "Digital applications"
            },
            {
                id: "electronics",
                label: "Electronics"
            }
        ]];
    },
    getPaymentMethods() {
        return [null, [
            {
                id: "cash",
                label: "Cash"
            },
            {
                id: "debitCard",
                label: "Debit Card"
            },
            {
                id: "creditCard",
                label: "Credit Card"
            },
            {
                id: "transfer",
                label: "Transfer"
            }
        ]];
    }
}