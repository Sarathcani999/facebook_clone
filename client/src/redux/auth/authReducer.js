import {
    USER_LOADED , USER_LOADING , AUTH_ERROR , LOGIN_SUCCESS , LOGIN_FAIL , LOGOUT_SUCCESS , REGISTER_SUCCESS , REGISTER_FAIL
} from './authTypes'

const initialState = {
    isLoading : false ,
    isAuthenticated : null ,
    token : localStorage.getItem('token') ,
    user : null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case USER_LOADING:
        return { ...state, 
            isLoading : true
        }
    case USER_LOADED:
        return { ...state, 
            isLoading : false ,
            isAuthenticated : true ,
            user : payload
        }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
        localStorage.setItem('token' , payload.token)
        return { ...state, 
            isLoading : false ,
            isAuthenticated : true ,
            user : payload.user ,
            token : payload.token
        }
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
    case AUTH_ERROR:
        localStorage.removeItem('token')
        return { ...state, 
            isLoading : false ,
            isAuthenticated : false ,
            user : null ,
            token : null
        }
    default:
        return state
    }
}
