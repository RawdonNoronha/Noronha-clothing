import { React, Component } from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route, Routes } from 'react-router';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector';
import collectionComponent from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(collectionComponent)

class Shop extends Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync()
  }

  render() {
    const {isCollectionFetching}=this.props
    return (
      <div className='shop-page'>
      <Routes>
        <Route path='' element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />} />
        <Route path=':collectionId' element={<CollectionsPageWithSpinner isLoading={isCollectionFetching} />} />
      </Routes>
    </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching
})

const mapDispatchToPops = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToPops)(Shop);