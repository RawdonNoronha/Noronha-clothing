import shopActionTypes from "./shop.types";
import { collection, getDocs } from "firebase/firestore";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = collection(db, "collections");
    dispatch(fetchCollectionsStart());
    getDocs(collectionRef)
      .then((snaphot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snaphot);
        console.log(collectionsMap, "data");

        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

export const fetchCollectionsSuccess = (collectionMaps) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMaps,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
