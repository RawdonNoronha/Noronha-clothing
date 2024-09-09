import React from "react";
import CollectionPage from '../../pages/collection/collection.component'
import { useParams } from "react-router";

const CollectionPageWrapper = (props) => {
    const { collectionId } = useParams(); // Get the collectionId from the URL
    return <CollectionPage {...props} collectionId={collectionId} />;
};

export default CollectionPageWrapper;