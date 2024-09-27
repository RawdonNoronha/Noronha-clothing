import { React, Component } from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, Routes } from 'react-router';
import CollectionPageWrapper from '../../components/collection-wrapper/collection-wrapper.component';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPageWrapper)

class Shop extends Component {
  state = {
    loading: true
  }
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
      this.setState({ loading: false });
    })
  }

  render() {
    const { loading } = this.state
    return (
      <div className='shop-page'>
      <Routes>
        <Route path='' element={<CollectionsOverviewWithSpinner isLoading={loading} />} />
        <Route path=':collectionId' element={<CollectionsPageWithSpinner isLoading={loading} />} />
      </Routes>
    </div>
    )
  }
}

const mapDispatchToPops = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToPops)(Shop);