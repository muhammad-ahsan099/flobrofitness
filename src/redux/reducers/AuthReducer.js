import { LOGIN, REGISTER ,LOGOUT, ACTIVE_USER, USER_ID, USER_REWARD} from '../types/Types';
const initialState = {
    isUserLoggedIn: false,
    userData: null,
    userId: null,
    promoReward: {
        discount: 0,
        reawardpoint: 0,
    }
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                userData: action.payload,
                isUserLoggedIn: true,
            }
        }
        case ACTIVE_USER: {
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
        case REGISTER: {
            return {
                ...state,
                userId: action.payload,
            }
        }
        case USER_REWARD: {
            return {
                ...state,
                promoReward: action.payload,
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