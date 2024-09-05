import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/header.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createNewUserInDB } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await createNewUserInDB(user);
        // If a user is signed in, proceed with accessing user data
        this.props.setCurrentUser(user);
        console.log('User has signed In', user);
      } else {
        this.props.setCurrentUser(null)
        console.log("No user is signed in");
      }
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' Component={HomePage} errorElement={ErrorPage}/>
          <Route path='shop' Component={ShopPage} errorElement={ErrorPage} /> 
          <Route path='/signin' element={this.props.currentUser ? (<Navigate to='/' replace /> ): (<SignInAndSignUpPage />) } errorElement={ErrorPage} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  currentUser: state.user.currentUser
});

const mapsDispatchToProp = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapsDispatchToProp )(App);
