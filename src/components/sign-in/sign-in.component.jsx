import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';
import './sign-in.styles.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';

export class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password }= event.target;
        try{
            await signInWithEmailAndPassword(auth, email.value, password.value);
            this.setState({email: '', password: ''});
        }
        catch(error)
        {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}> 
                <FormInput name='email' type='email' value={this.state.email} label="email" handleChange={this.handleChange} required></FormInput>
                <FormInput name='password' type='password' value={this.state.password} label="password" handleChange={this.handleChange} required></FormInput>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} $isGoogleSignIn>Google SignIn</CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default SignIn;
