import { LOGIN ,LOGOUT, ACTIVE_USER, USER_ID} from '../types/Types';
const initialState = {
    isUserLoggedIn: false,
    userData: null,
    userId: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            // console.log('Payload: ', action.payload);
            return {
                ...state,
                userData: action.payload,
                isUserLoggedIn: true,
            }
        }
        case ACTIVE_USER: {
            console.log("Payload: ", typeof action.payload);
            return {
                ...state,
                userData: action.payload
            }
        }
        case USER_ID: {
            return {
                ...state,
                isUserLoggedIn: true,
                userId: action.payload,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isUserLoggedIn: false,
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;