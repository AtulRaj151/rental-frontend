import React, { Component } from 'react';
import loginImg from '../../assets/images/login.svg'
import '../../assets/css/Auth.css'


class UserSignUp extends Component {
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">User Register</div>
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
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name="password" placeholder="password" />
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn">
                Register
              </button>
            </div>
          </div>
        );
    }
}

export default UserSignUp;