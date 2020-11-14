
import React, { Component } from 'react';
import '../../assets/css/Auth.css';
import {login,clearAuthState} from '../../action/admin'
import loginImg from "../../assets/images/login.svg";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class AdminLogin extends Component {
    constructor(){
        super();        
        this.state = {
            email:'',
            password: '',
       }
    }

    componentWillUnmount() {
        this.props.dispatch(clearAuthState());
    }
      
      handleEmailChange = (e) => {
          // console.log(e.target.value);
          this.setState({
            email: e.target.value,
          });
        };
        handlePasswordChange = (e) => {
          // console.log(e.target.value);
          this.setState({
            password: e.target.value,
          });
        };
        handleFormSubmit = (e) => {
          e.preventDefault();
          console.log('this.state', this.state);
          const { email, password } = this.state;
      
          if (email && password) {
            this.props.dispatch(login(email, password));
          }
        };
   
    render() {
        const {inProgress,isLoggedin} = this.props.admin;
        
        if (isLoggedin) {
            return <Redirect to='/' />;
          }
        return (
    <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Admin Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg}  alt=""/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="email" 
              name="email" 
              placeholder="email" 
              onChange={this.handleEmailChange}
              value={this.state.email}
              
               />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password"
               name="password" 
               placeholder="password"
               onChange={this.handlePasswordChange}
               value={this.state.password}
                />
            </div>
          </div>
        </div>
        <div className="footer">
           {inProgress ?( <button type="button" className="btn"
           onClick={this.handleFormSubmit}
           disabled={inProgress}
           
          >
            Loging in ...
          </button>):( <button type="button" className="btn"
           onClick={this.handleFormSubmit}
           disabled={inProgress}
           
          >
            Login
          </button>)}
        </div>
      </div>
        );
    }
}


function mapStateToProps(state){
    return {
        admin: state.admin,
    }
}
export default connect(mapStateToProps)(AdminLogin);