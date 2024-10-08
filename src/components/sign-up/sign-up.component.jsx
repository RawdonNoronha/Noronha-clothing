import React, { Component } from 'react'
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { auth, createNewUserInDB } from '../../firebase/firebase.util';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export class SignUp extends Component {
    constructor(){
        super();

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {displayName})
                console.log('User authenticated using email and password...', user);
                createNewUserInDB(user);
            })
            
            // Clear the form fields
            this.setState({
                displayName: '', 
                email: '', 
                password: '', 
                confirmPassword: ''
            });
    
        } catch (error) {
            console.log(error);
        }
    }
    

    handleChange = event =>{
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

  render() {
    const {displayName, email, password, confirmPassword}= this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput type="text" name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
            <FormInput type="text" name='email' value={email} onChange={this.handleChange} label='Email' required />
            <FormInput type="password" name='password' value={password} onChange={this.handleChange} label='Password' required />
            <FormInput type="password" name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
            <CustomButton type='submit'> Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
