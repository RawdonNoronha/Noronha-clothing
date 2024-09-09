import { React} from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, Routes } from 'react-router';
import CollectionPageWrapper from '../../components/collection-wrapper/collection-wrapper.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route path='' Component={CollectionsOverview} />
        <Route path=':collectionId' Component={CollectionPageWrapper} />
      </Routes>
    </div>
  )
}

export default ShopPage;