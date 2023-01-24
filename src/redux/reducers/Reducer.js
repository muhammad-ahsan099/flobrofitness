import { ADD_USER_DATA } from "../types/Types";

// initial state 
const initialState = {
    userData: [],
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_DATA:
            let addData = [...state.userData, action.payload]
            return {
                ...state,
                userData: addData,
            }
        default:
            return state
    }
}

export default Reducer