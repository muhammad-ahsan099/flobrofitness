import { endPoint } from '../../config/EndPoint';
import { LOGIN, LOGOUT } from '../types/Types';
export const doLogin = (email, password) => async (dispatch) => {
    try {
        // setLoading(true)
        // const user = await axios.post(`${endPoint}auth/login`, {
        //     email,
        //     password
        // });
        // await window.localStorage.setItem('token', user.data.data.token);
        dispatch({
            type: LOGIN,
            payload: true,
        })
    }
    catch (error) {
        console.log(error)
    }
    finally {
        // setLoading(false)
    }
}

export const doLogout = (Toast) => async (dispatch) => {
    try {
        // await window.localStorage.removeItem('token');
        dispatch({
            type: LOGOUT,
            payload: null,
        })
        console.log("Logout Successfully", "success", "colored")
    }
    catch (error) {
        console.log(error?.message)
    }
}
