import React, { Component } from 'react';
import loginImg from '../../assets/images/login.svg'
import '../../assets/css/Auth.css'
import { startSignup, signup } from '../../action/admin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AdminSignUp extends Component {
    constructor(props){
        super(props)
            this.state = {
                email: '',
                password: '',
                name: '',
                
              };
        }
    

 handleInputChange = (field, value) => {
     
        this.setState({
          [field]: value,
        });
      };
    
onFormSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = this.state;
    
        if (email && password && name) {
          this.props.dispatch(startSignup());
          this.props.dispatch(signup(email, password, name));
        }
      };
    render() {
        const { inProgress, isLoggedin } = this.props.admin;
        if (isLoggedin) {
          return <Redirect to="/" />;
        }
        return (
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Admin Register</div>
            <div className="content">
              <div className="image">
                <img src={loginImg}  alt=""/>
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="username"
                    required
                    onChange={(e) => this.handleInputChange('name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder="email"
                     required
                     onChange={(e) => this.handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name="password" placeholder="password"
                    required
                    onChange={(e) => this.handleInputChange('password', e.target.value)} 
                  />
                </div>
              </div>
            </div>
            <div className="footer">
            <button type="button" className="btn"
             onClick={this.onFormSubmit}
             disabled={inProgress}
            >
                Register
              </button>
            </div>
          </div>
        );
    }

}

const mapStateToProps = ({ admin }) => ({
    admin,
  });
export default connect(mapStateToProps)(AdminSignUp);

