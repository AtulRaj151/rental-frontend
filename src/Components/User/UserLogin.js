
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/Auth.css'
import loginImg from "../../assets/images/login.svg";
import {login,clearAuthState} from '../../action/user'
import { Redirect } from 'react-router-dom';
class UserLogin extends Component {
    constructor(props){
         super(props);

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
        const {inProgress,error,isLoggedin} = this.props.user;
        if (isLoggedin) {
            return <Redirect to='/' />;
          }
        return (
            <div className="base-container" ref={this.props.containerRef}>
        <div className="header">User Login</div>
        {error && <div className=" header">{error}</div>}
        <div className="content">
          <div className="image">
            <img src={loginImg}  alt=""/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="email" name="email" 
              placeholder="email" 
              required
              onChange={this.handleEmailChange}  
              value={this.state.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"
                placeholder="password"
                required
                onChange={this.handlePasswordChange}
                value={this.state.password}
                />
            </div>
          </div>
        </div>
        <div className="footer">
          {inProgress ? (   <button type="button" className="btn"
           onClick={this.handleFormSubmit}
           disabled={inProgress}
          >
            Loging In...
          </button>):
           (   <button type="button" className="btn"
           onClick={this.handleFormSubmit}
           disabled={inProgress}
          >
            Login
          </button>)
          }
        </div>
      </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps)(UserLogin);