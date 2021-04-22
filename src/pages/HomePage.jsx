import React, {Component} from 'react';
import styled from 'styled-components'
import AppBar from './../components/appbar/AppBar'
import Logo from './../components/icons/Logo'

const HomePageStyles = styled.header ` 
  text-align:center;
  margin: 6rem auto 0;
    svg{
      width: 80px;
    }
    h1{
      font-size: 2.25rem;
    }
    p{
      color:#767484;
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <HomePageStyles>
                    <Logo/>
                    <h1>Employee Manager</h1>
                    <p>focus on people and we'll focus on the papperwork</p>
                </HomePageStyles>
            </div>
        );
    }
}
 
export default HomePage;