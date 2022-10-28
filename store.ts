interface Purchasable {
    item: number;
    cost: number;
}

let store: { themes: Purchasable[] } = {
    themes: []
};

export default store;