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
                id: "medical",
                label: "Medical"
            },
            {
                id: "shopping",
                label: "Shopping"
            },
            {
                id: "transportation",
                label: "Transportation"
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
                categoryId: "electronics",
                subCategories: [
                    {
                        subCategoryId: "householdAppliances",
                        label: "Household appliances"
                    },
                    {
                        subCategoryId: "computer",
                        label: "Computer"
                    },
                    {
                        subCategoryId: "digitalApplications",
                        label: "Digital applications"
                    },
                    {
                        subCategoryId: "electronics",
                        label: "Electronics"
                    }
                ]
            },
            {
                categoryId: "entertainment",
                subCategories: [
                    {
                        subCategoryId: "games",
                        label: "Games"
                    }
                ]
            },
            {
                categoryId: "foodBeverage",
                subCategories: [
                    {
                        subCategoryId: "beverage",
                        label: "Beverage"
                    },
                    {
                        subCategoryId: "grocery",
                        label: "Grocery"
                    },
                    {
                        subCategoryId: "bakery",
                        label: "Bakery"
                    },
                    {
                        subCategoryId: "restaurants",
                        label: "Restaurants"
                    },
                    {
                        subCategoryId: "foodBeverage",
                        label: "Food & Beverage"
                    }
                ]
            },
            {
                categoryId: "medical",
                subCategories: [
                    {
                        subCategoryId: "dental",
                        label: "Dental"
                    },
                    {
                        subCategoryId: "pharmacy",
                        label: "Pharmacy"
                    },
                    {
                        subCategoryId: "optician",
                        label: "Optician"
                    },
                    {
                        subCategoryId: "medicalServices",
                        label: "Medical Services"
                    },
                    {
                        subCategoryId: "medical",
                        label: "Medical"
                    }
                ]
            },
            {
                categoryId: "shopping",
                subCategories: [
                    {
                        subCategoryId: "clothes",
                        label: "Clothes"
                    },
                    {
                        subCategoryId: "shoes",
                        label: "Shoes"
                    },
                    {
                        subCategoryId: "shopping",
                        label: "Shopping"
                    }
                ]
            },
            {
                categoryId: "transportation",
                subCategories: [
                    {
                        subCategoryId: "bus",
                        label: "Bus"
                    },
                    {
                        subCategoryId: "tolls",
                        label: "Tolls"
                    },
                    {
                        subCategoryId: "parking",
                        label: "Parking"
                    },
                    {
                        subCategoryId: "transport",
                        label: "Transport"
                    }
                ]
            },
            {
                categoryId: "utilities",
                subCategories: [
                    {
                        subCategoryId: "electricWaterGas",
                        label: "Electric, water & gas"
                    },
                    {
                        subCategoryId: "utilities",
                        label: "Utilities"
                    }
                ]
            },
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
};
