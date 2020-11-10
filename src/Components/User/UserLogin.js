
import React, { Component } from 'react';
import '../../assets/css/Auth.css'
import loginImg from "../../assets/images/login.svg";
class UserLogin extends Component {
   
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
        <div className="header">User Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg}  alt=""/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
        );
    }
}

export default UserLogin;