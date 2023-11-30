const SET_AUTH = "SET_AUTH"
const LOGOUT = "LOGOUT"
const SET_USER = "SET_USER"

const defaultState = {
    currentUser: {},
    token: '',
    isAuth: false
}

export const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return{
                ...state,
                token: action.payload,
                isAuth: true,
            }

        case LOGOUT:
            return{
                ...state,
                token: '',
                isAuth: false
            }

        case SET_USER:
            return{
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export const SetAuth = data => ({type: SET_AUTH, payload: data})

export const Logout = data => ({type: LOGOUT, payload: data})

export const SetUser = data => ({type: SET_USER, payload: data})