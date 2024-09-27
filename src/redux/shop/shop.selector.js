import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []//creates an object in an array
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections  ? collections[collectionUrlParam] : null)
);