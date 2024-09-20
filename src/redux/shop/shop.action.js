import { type } from "@testing-library/user-event/dist/type";
import shopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap ) => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})