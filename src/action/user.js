import { getFormBody} from '../helper/util'
import {
    USER_LOGIN_START,
    USER_CLEAR_AUTH_STATE,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_SIGNUP_FAILED,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_START

} from './actionTypes';

export function clearAuthState() {
    return {
      type: USER_CLEAR_AUTH_STATE,
    };
  }
export function startLogin() {
    return {
      type: USER_LOGIN_START,
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
      type: USER_LOGIN_FAILED,
      error,
    };
  }
  
  export function loginSuccessful(user) {
    return {
      type: USER_LOGIN_SUCCESS,
      user,
    };
  }

//   signup
export function startSignup() {
    return {
      type: USER_SIGNUP_START,
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
      type: USER_SIGNUP_FAILED,
      error,
    };
  }
  
  export function signupSuccessful(user) {
    return {
      type: USER_SIGNUP_SUCCESS,
      user,
    };
  }
