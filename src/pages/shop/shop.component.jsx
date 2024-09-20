import { React, Component } from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, Routes } from 'react-router';
import CollectionPageWrapper from '../../components/collection-wrapper/collection-wrapper.component';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

class Shop extends Component {
  unsubscribeFromSnapshot= null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = collection(db,'collections');
    // console.log(collectionRef,'collectRef');
    onSnapshot(collectionRef, snaphot =>{
      // console.log(snaphot,'snap');
      const collectionsMap = convertCollectionsSnapshotToMap(snaphot);
      // console.log('collectionMap', collectionsMap);
      updateCollections(collectionsMap);
    })
  }

  render() {
    return (
      <div className='shop-page'>
      <Routes>
        <Route path='' Component={CollectionsOverview} />
        <Route path=':collectionId' Component={CollectionPageWrapper} />
      </Routes>
    </div>
    )
  }
}

const mapDispatchToPops = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToPops)(Shop);