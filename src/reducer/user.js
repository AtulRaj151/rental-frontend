import { LOGIN_START,CLEAR_AUTH_STATE,LOGIN_SUCCESS,LOGIN_FAILED,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    SIGNUP_START


} from '../action/actionTypes'
const initialState = {
     user: {},
     error: null,
     isLoggedin: false,
     inProgress: false,
}
export default function auth(state = initialState,action){
    console.log("action initiated",action)
      switch(action.type){
          case  LOGIN_START:
            return {
              ...state,
              inProgress: true,
            };
            case CLEAR_AUTH_STATE:
                return {
                  ...state,
                  error: null,
                };
                case LOGIN_SUCCESS:
                    return {
                      ...state,
                      user: action.user,
                      isLoggedin: true,
                    //   inProgress: false,
                      error: null,
                    };
                  case LOGIN_FAILED:
                    return {
                      ...state,
                      inProgress: false,
                      error: action.error,
                    };
                    case SIGNUP_START:
                        return {
                          ...state,
                          inProgress: true,
                        };
                    case SIGNUP_SUCCESS:
                        return {
                          ...state,
                          user: action.user,
                          isLoggedin: true,
                          error: null,
                        };
                      case SIGNUP_FAILED:
                        return {
                          ...state,
                          inProgress: false,
                          error: action.error,
                        };
          default:
              return state;
      }
}