import { LOGIN ,LOGOUT} from '../types/Types';
const initialState = {
    isUserLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isUserLoggedIn: true,
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