import React, {Component} from 'react';
import FormInput from "../components/forms/FormInput";
import Button from "../components/buttons/Button";
import styled from "styled-components";

import firebase from "../firebase/firebaseConfig";

// const db = firebase.ref("/employee-manager-next");

const RegisterPageStyles = styled.aside`
  width: 480px;
  margin: 1rem auto 0;

  header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  .create-account {
    margin-top: 2rem;
  }
`

class AddNewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            dob: '',
            phone: '',
            disabled: true
        }
    }

    onHandleSubmit = () => {
        console.log(this.state);
        // db.push(this.state).then(() => {
        //     console.log('success');
        // }).catch((e) => {
        //     console.log(e);
        // });
    }

    handleChange = (key, value) => {
        let phoneno =  /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        this.setState({[key]: value}, () => {
            const {email, disabled, ...rest} = this.state;
            this.setState({
                disabled: Object.keys(rest).find((k) => {
                    return rest[k] === '' || (this.state.phone && !this.state.phone.match(phoneno))
                })
            })
        })
    }

    render() {
        const {name, email, address, dob, phone, disabled} = this.state;

        return (
            <RegisterPageStyles>
                <header>
                    <h4><b>Add New Employee Data</b></h4>
                </header>
                <FormInput required label="Full Name" type="text" value={name}
                           onChange={(val) => this.handleChange('name', val)}/>

                <FormInput required label="Date Of Birth" type="date" value={dob}
                           onChange={(val) => this.handleChange('dob', val)}/>

                <FormInput required label="Address" type="text" value={address}
                           onChange={(val) => this.handleChange('address', val)}/>

                <FormInput label="Email address" type="email" value={email}
                           onChange={(val) => this.handleChange('email', val)}/>

                <FormInput required label="Phone Number (xx xxxx xxxx format)" type="tel" value={phone}
                           onChange={(val) => this.handleChange('phone', val)}/>

                <Button className="create-account" uiStyle="login" label="Add Employee"
                        onClick={() => this.onHandleSubmit()}
                disabled={disabled}/>
            </RegisterPageStyles>
        )
    }
}

export default AddNewEmployee;