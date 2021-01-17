
import { BrowserRouter as Router,Redirect,Route,Switch } from "react-router-dom";

import SearchPage from './SearchPage'
import Home from './Home'
import Footer from './Footer';
import Header from './Header'
import { Admin} from './Admin';
import {  User, UserAccount} from './User'
import React from 'react'
import { connect } from "react-redux";


class App extends React.Component {
  render() {
    const {isLoggedin}  = this.props.user;
    console.log(this.props)
    return (
      <div className="App">
      <Router>
        <Header/>
        <Switch>
           {/* Login Page Routes */}

           

           <Route path="/admin/auth">
             <Admin />
          </Route>      

           <Route path="/users/auth">
             <User isLoggedin={isLoggedin}/>
          </Route>
          <Route path="/users/account">
             <UserAccount/>
          </Route>
         
          {/* searchPage */}
          <Route path="/search">
            <SearchPage isLoggedInUser={isLoggedin}/>
          </Route>
          {/* home */}
         
         <Route to="/">
            <Home/>
         </Route>
      
          
        </Switch>
        <Footer/>
      </Router>

    </div>
    );
  }
}



function mapStateToProps(state){
  return {
      admin: state.admin,
      user: state.user

  }
}
export default connect(mapStateToProps)(App);