import { USER_LOGIN_START,USER_CLEAR_AUTH_STATE,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED,
    USER_SIGNUP_FAILED,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_START,
} from '../action/actionTypes'
const initialState = {
     user: {},
     error: null,
     isLoggedin: false,
     inProgress: false,
}
export default function auth(state = initialState,action){    
      switch(action.type){
          case  USER_LOGIN_START:
            return {
              ...state,
              inProgress: true,
            };
            case USER_CLEAR_AUTH_STATE:
                return {
                  ...state,
                  error: null,
                };
                case USER_LOGIN_SUCCESS:
                    return {
                      ...state,
                      user: action.user,
                      isLoggedin: true,
                    //   inProgress: false,
                      error: null,
                    };
                  case USER_LOGIN_FAILED:
                    return {
                      ...state,
                      inProgress: false,
                      error: action.error,
                    };
                    case USER_SIGNUP_START:
                        return {
                          ...state,
                          inProgress: true,
                        };
                    case USER_SIGNUP_SUCCESS:
                        return {
                          ...state,
                          user: action.user,
                          isLoggedin: true,
                          error: null,
                        };
                      case USER_SIGNUP_FAILED:
                        return {
                          ...state,
                          inProgress: false,
                          error: action.error,
                        };
          default:
              return state;
      }
}