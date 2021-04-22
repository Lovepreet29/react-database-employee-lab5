import React, { Component } from 'react';
import styled from 'styled-components'
import firebaseApp from './../firebase/firebaseConfig'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import AppBar from "../components/appbar/AppBar";
const RegisterPageStyles = styled.aside`
  width: 480px;
  margin: 6rem auto 0;
  header{
    text-align:center;
    margin-bottom: 3rem;
  }
  h2{
    font-size: 2rem;
    font-weight: 700;
  }
  .create-account{
    margin-top: 2rem;
  }
`

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onHandleSubmit = () => {
        const { email, password } = this.state
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if(userCredential.additionalUserInfo.isNewUser && userCredential.user) {
                    this.props.history.push('/login')
                }
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            });
    }

    render() {
        const {name, email, password} = this.state

        return (
            <div>
                <AppBar/>
                <RegisterPageStyles>
                    <header>
                        <h2>Unlimited Free Trial Sign Up</h2>
                        <p>no credit card required</p>
                    </header>
                    <FormInput label="Name on the account" type="text" value={name} onChange={(val) => this.setState({name: val})}/>
                    <FormInput label="Valid email address" type="email" value={email} onChange={(val) => this.setState({email: val})}/>
                    <FormInput label="Password (min 6 charachters)" type="password" value={password} onChange={(val) => this.setState({password: val})}/>
                    <Button className="create-account" uiStyle="login" label="Create a free account" onClick={() => this.onHandleSubmit()}/>
                </RegisterPageStyles>
            </div>
        )
    }
}

export default RegisterPage;