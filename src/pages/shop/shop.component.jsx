import { React, Component } from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, Routes } from 'react-router';
import CollectionPageWrapper from '../../components/collection-wrapper/collection-wrapper.component';

class Shop extends Component {
  unsubscribeFromSnapshot= null;

  // componentDidMount() {
  //   const 
  // }

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

export default Shop;