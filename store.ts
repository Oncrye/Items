interface Purchasable {
    item: number;
    cost: number;
}

let store: { themes: Purchasable[] } = {
    themes: [
        {
            item: 1,
            cost: 3000
        },
        {
            item: 2,
            cost: 8000
        },
        {
            item: 3,
            cost: 12000
        },
        {
            item: 4,
            cost: 30000
        },
        {
            item: 8,
            cost: 50000
        },
        {
            item: 9,
            cost: 5000
        },
        {
            item: 10,
            cost: 1000
        },
        {
            item: 11,
            cost: 80000
        }
    ]
};

export default store;