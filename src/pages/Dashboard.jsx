import React, {Component} from 'react';
import styled from 'styled-components'
import Button from '../components/buttons/Button'
import PrivateRoute from "../Utils/PrivateRoute";
import AddNewEmployee from "./AddNewEmployee";
import EmployeeList from "./EmployeeList";


const DashBoardStyles = styled.header`
  display: flex;
`

const SideBar = styled.aside`
  position: relative;
  z-index: 1;
  width: 256px;
  box-shadow: 0 0 5px 0 grey;
  height: calc(100vh - 64px);
  padding: 2rem;

  header {
    margin-bottom: 1rem;
    font-size: 13px;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: bold;

  }

  li {
    opacity: 0.7;
    font-size: 15px;
    margin: 5px 0;
    height: 50px;
    border-radius: 5px;
    background: #fbdeb8;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  li:hover {
    background: #f7bb6b;
  }
`

const Panels = styled.aside`
  flex: 1;
  background: #f3f3f3;
  height: calc(100vh - 64px);
`

class DashBoard extends Component {
    handleClick = () => {
        console.log('click');
        localStorage.removeItem('AuthToken');
        this.props.history.push('/login');
    }

    handleGoToAction = (path) => {
        this.props.history.push(`/dashboard/${path}`);
    }

    render() {
        return (
            <DashBoardStyles>
                <SideBar>
                    <header>
                        <Button label="Log Out" uiStyle="login" onClick={this.handleClick}/>
                        <h1>Firebase</h1>
                        <p>whats all the fuss about</p>
                    </header>
                    <ul>
                        <li onClick={() => this.handleGoToAction('view-all')}>View All</li>
                        <li onClick={() => this.handleGoToAction('add-emp')}>Add New Employee</li>
                    </ul>
                </SideBar>
                <Panels>
                    <PrivateRoute exact path="/dashboard/view-all" component={EmployeeList} />
                    <PrivateRoute exact path="/dashboard/add-emp" component={AddNewEmployee} />
                </Panels>
            </DashBoardStyles>
        )
    }
}

export default DashBoard;