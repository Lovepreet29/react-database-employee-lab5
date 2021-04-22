import React, {Component} from 'react';
import styled from 'styled-components'
import firebaseApp from './../firebase/firebaseConfig'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import AppBar from "../components/appbar/AppBar";


const LoginPageStyles = styled.aside`

  max-width: 380px;
  margin: 6rem auto 0;

  h1 {
    font-size: 2.25rem;
  }

`

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'james@home.com',
            password: '123456',
            isValidEmail: true,
            isValidEmailPass: true
        }
    }

    handleClick = (e) => {
        const {email, password} = this.state
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(mailFormat)) {
            this.setState({isValidEmail: false})
            return;
        }
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                // email and password input
                if (userCredential.user && userCredential.user.refreshToken) {
                    localStorage.setItem('AuthToken', userCredential.user.refreshToken);
                    this.props.history.push('/dashboard')
                }
            })
            .catch(error => {
                this.setState({isValidEmailPass: false})
                console.log(error.code)
                console.log(error.message)
            })
    }

    onHandleEmail = (value) => {
        const {isValidEmailPass} = this.state
        if (!isValidEmailPass) this.setState({isValidEmailPass: true})
        this.setState({isValidEmail: true, email: value})
    }

    onHandlePassword = (value) => {
        const {isValidEmailPass} = this.state
        if (!isValidEmailPass) this.setState({isValidEmailPass: true})
        this.setState({password: value})
    }

    render() {
        const {isValidEmailPass, email, isValidEmail, password} = this.state
        return (
            <div>
                <AppBar/>
                <LoginPageStyles>
                    <header><h1>Login</h1></header>
                    {!isValidEmailPass &&
                    <div style={{margin: '10px 0', color: 'red'}}><label>Enter Valid Email and Password!!</label></div>}
                    <FormInput type="text" label="email" value={email} onChange={(val) => this.onHandleEmail(val)}/>
                    {!isValidEmail &&
                    <div style={{color: 'red', margin: '-12px 0 5px'}}><label>Enter Valid Email Address !!</label>
                    </div>}
                    <FormInput type="password" label="password" value={password}
                               onChange={(val) => this.onHandlePassword(val)}/>
                    <Button label="login" uiStyle="login" onClick={this.handleClick}/>
                </LoginPageStyles>
            </div>
        );
    }
}

export default LoginPage;