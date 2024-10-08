import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  if(!collection){
    return <> </>
  }
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps; // Access collectionId from props passed via useParams
  return {
    collection: selectCollection(collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage)
