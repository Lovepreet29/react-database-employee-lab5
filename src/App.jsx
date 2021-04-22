 import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashBoardPage from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import AddNewEmployee from './pages/AddNewEmployee'
import PageNotFound from './pages/404'
import PublicRoute from './Utils/PublicRoute'
import PrivateRoute from './Utils/PrivateRoute'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/"> <HomePage/></Route>
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        {/*<PrivateRoute exact path="/dashboard/view-all" component={<>helloooooooo</>} />*/}
        {/*<PrivateRoute exact path="/dashboard/add-emp" component={AddNewEmployee} />*/}
        {/*<PrivateRoute exact path="/dashboard/edit-emp" component={DashBoardPage} />*/}
        {/*<PrivateRoute exact path="/dashboard/delete-emp" component={DashBoardPage} />*/}
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <Route path="*"><PageNotFound/></Route>
      </Switch>    
    </Router>
    </>
    
  );
}

export default App;

 
