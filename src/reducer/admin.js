import { ADMIN_LOGIN_START,ADMIN_CLEAR_AUTH_STATE,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILED,
    ADMIN_SIGNUP_FAILED,
    ADMIN_SIGNUP_SUCCESS,
    ADMIN_SIGNUP_START,
} from '../action/actionTypes'
const initialState = {
     user: {},
     error: null,
     isLoggedin: false,
     inProgress: false,
}
export default function auth(state = initialState,action){    
      switch(action.type){
          case  ADMIN_LOGIN_START:
            return {
              ...state,
              inProgress: true,
            };
            case ADMIN_CLEAR_AUTH_STATE:
                return {
                  ...state,
                  error: null,
                };
                case ADMIN_LOGIN_SUCCESS:
                    return {
                      ...state,
                      user: action.user,
                      isLoggedin: true,
                    //   inProgress: false,
                      error: null,
                    };
                  case ADMIN_LOGIN_FAILED:
                    return {
                      ...state,
                      inProgress: false,
                      error: action.error,
                    };
                    case ADMIN_SIGNUP_START:
                        return {
                          ...state,
                          inProgress: true,
                        };
                    case ADMIN_SIGNUP_SUCCESS:
                        return {
                          ...state,
                          user: action.user,
                          isLoggedin: true,
                          error: null,
                        };
                      case ADMIN_SIGNUP_FAILED:
                        return {
                          ...state,
                          inProgress: false,
                          error: action.error,
                        };
          default:
              return state;
      }
}