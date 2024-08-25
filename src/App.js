import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createNewUserInDB } from './firebase/firebase.util';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) { 
        // If a user is signed in, proceed with accessing user data
        this.setState({ currentUser: user });
        console.log('User has signed In', user);
        createNewUserInDB(user);
      } else {
        // If no user is signed in, set currentUser to null
        this.setState({ currentUser: null });
        console.log("No user is signed in");
      }
    });

    console.log(this.state);
    
  }
  

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' Component={HomePage} errorElement={ErrorPage}/>
          <Route path='shop' Component={ShopPage} errorElement={ErrorPage} /> 
          <Route path='/signin' Component={SignInAndSignUpPage} errorElement={ErrorPage} />
        </Routes>
      </div>
    );
  }
}

export default App;
