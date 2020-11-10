import { getFormBody} from '../helper/util'
import {
    LOGIN_START,
    CLEAR_AUTH_STATE,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    SIGNUP_START

} from './actionTypes';

export function clearAuthState() {
    return {
      type: CLEAR_AUTH_STATE,
    };
  }
export function startLogin() {
    return {
      type: LOGIN_START,
    };
  }
export function login(email,password) {
  
     return (dispatch) => {
          dispatch(startLogin());
          const url = 'http://localhost:8001/signin';
          fetch(url,{
              method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: getFormBody({ email, password }),
          })
          .then((response) => response.json())
          .then((data)=> {
                 
                 if(data.message ==='success') {
                       localStorage.setItem('token',data.token);
                       dispatch(loginSuccessful(data.user));
                       return;
                 }
                 dispatch(loginFailed(data.message));
          })
    
     
     }
}
export function loginFailed(error) {
    return {
      type: LOGIN_FAILED,
      error,
    };
  }
  
  export function loginSuccessful(user) {
    return {
      type: LOGIN_SUCCESS,
      user,
    };
  }

//   signup
export function startSignup() {
    return {
      type: SIGNUP_START,
    };
  }
export function signup(email, password, name) {
    return (dispatch) => {
      const url = 'http://localhost:8001/signup';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: getFormBody({
          email,
          password,
          name,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
          if (data.message ==='success') {
            // do something
            localStorage.setItem('token', data.token);
            dispatch(signupSuccessful(data.user));
            return;
          }
          dispatch(signupFailed(data.message));
        });
    };
  }

  export function signupFailed(error) {
    return {
      type: SIGNUP_FAILED,
      error,
    };
  }
  
  export function signupSuccessful(user) {
    return {
      type: SIGNUP_SUCCESS,
      user,
    };
  }
