import fetch from 'node-fetch';
import themes from './themes.js';
import store from './store.js';

export interface Theme {
    id: number;
    name: string;
    source: URL;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

async function clear(database: string, collection: string) {
    await fetch(`${process.env.mongo}/action/deleteMany`, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.key!
        },
        method: 'POST',
        body: JSON.stringify({
            database: database,
            collection: collection,
            dataSource: 'diswordle', 
            filter: {}
        })
    });
}

async function insert(database: string, collection: string, documents) {
    await fetch(`${process.env.mongo}/action/insertMany`, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.key!
        },
        method: 'POST',
        body: JSON.stringify({
            database: database,
            collection: collection,
            dataSource: 'diswordle',
            documents: documents
        }),
    });
}

async function update() {
    await clear('items', 'themes');
    await insert('items', 'themes', themes);
    await clear('store', 'themes');
    await insert('store', 'themes', store.themes);
}

update();