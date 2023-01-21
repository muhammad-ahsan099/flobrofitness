// action type
import { ADD_USER_DATA } from "../types/Types";

// add data action
export const addUser = (data) => {
    return {
        type: ADD_USER_DATA,
        payload: data,
    }
}