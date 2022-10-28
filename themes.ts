interface Theme {
    id: number;
    name: string;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

let themes: Theme[] = [
    {
        id: 0,
        name: 'Default',
        rarity: 'common'
    },
    {
        id: 1,
        name: 'Dark Dunes',
        rarity: 'uncommon'
    },
    {
        id: 2,
        name: 'Keyboard',
        rarity: 'epic'
    },
    {
        id: 3,
        name: 'Lush Mountains',
        rarity: 'epic'
    },
    {
        id: 4,
        name: 'Purple Swirl',
        rarity: 'legendary'
    },
    {
        id: 5,
        name: 'Roses',
        rarity: 'epic'
    },
    {
        id: 6,
        name: 'Snowy Alpine',
        rarity: 'rare'
    },
    {
        id: 7,
        name: 'Snowy City',
        rarity: 'rare'
    },
    {
        id: 8,
        name: 'Snowy Night',
        rarity: 'legendary'
    },
    {
        id: 9,
        name: 'Stone Cliff',
        rarity: 'uncommon'
    },
    {
        id: 10,
        name: 'Teal Curves',
        rarity: 'common'
    },
    {
        id: 11,
        name: 'Forest Waterfall',
        rarity: 'legendary' 
    },
    {
        id: 12,
        name: 'Green Layers',
        rarity: 'common' 
    }
];

export default themes;