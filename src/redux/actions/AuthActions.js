
import axios from 'axios';
import { endPoint } from '../../config/EndPoint'
import { LOGIN, LOGOUT, ACTIVE_USER, USER_ID } from '../types/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { getToken, storeToken } from '../../constant/localStorage/LocalStorage';
// Login Function 
export const doLogin = (email, password, remember, setLoading, setErr) => async (dispatch) => {
    try {
        setLoading(true)
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        var emailEncoded = email.replace("@", "%40");
        const userCredential = await axios.post(`${endPoint}Login?Email=${emailEncoded}&Password=${password}`, axiosConfig);
        
        if (userCredential.data?.Status) {
            if(remember){
                let user_id = userCredential.data?.Data.ID
                user_id = user_id.toString()
                storeToken(user_id)
            }
            dispatch({
                type: LOGIN,
                payload: userCredential.data.Data,
            });
        }
        if (!userCredential.data?.Status) {
            setErr(true)
        }

    } catch (error) {
        console.log("Error: ", error.data);
        alert(JSON.stringify('Please Try again Later...'))
    } finally {
        setLoading(false)
    }
};

export const getUserProfile = (userId, setLoading) => async (dispatch)=> {
    try {
        console.log('User ID at Get User Profile: ',userId);
        setLoading(true)
        let request = {
            method: 'get',
            url: `${endPoint}Profile?userId=${userId}`,
            headers: {
              'Content-Type': 'application/json',
            },
          };
        let res = await axios(request);
          let user_data = res.data;
          console.log("Res of Get User Data: ", typeof user_data, user_data.Status);
        if (user_data?.Status) {
            const user = JSON.parse(user_data.Data); 
            // console.log("Type of user: ",  user);
            dispatch({
                type: ACTIVE_USER,
                payload: user,
            })
        }
    } catch (error) {
        console.log('Error at Get User Profile...', error)
    } 
    finally {
        setLoading(false)
    }
}


export const doSignup = (data, setLoading, setSuccess) => async (dispatch) => {
    try {
        setLoading(true)
        let request = {
            method: 'post',
            url: `${endPoint}Register`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: data
          };
        let userCredential = await axios(request);

        if (userCredential.data?.Status) {
            setSuccess(true)
        }
    } catch (error) {
        alert(JSON.stringify('Please Try again Later...'))
    } finally {
        setLoading(false)
    }
};




export const doLogout = () => async (dispatch) => {
    try {

        await AsyncStorage.removeItem('user_id')
        await AsyncStorage.removeItem('user_name')
        await AsyncStorage.removeItem('user')

        dispatch({
            type: LOGOUT,
            payload: null,
        })
    }
    catch (error) {
        Alert.alert("Please Try again later...")
    }
}

export const doGetLoggedInUser = (setLoader) => async (dispatch) => {
    console.log("TRIGERR DO GET LOGGED IN USER---------");
    try {
        setLoader(true)
        const {user_id} = await getToken()
        console.log("User Id.... : ", user_id);
        if (user_id) {
            dispatch({
                type: USER_ID,
                payload: user_id,
            })
        }
    }
    catch (error) {
        console.log("Get Logged In:", error)
    }
    finally {
        setTimeout(()=> {
            setLoader(false)
        }, 1000)
    }
}


export const updateUserStatus = (userId, navigation, key, setLoading) => async (dispatch) => {
    try {
        console.log('User ID: ',userId);
        setLoading(true)
        let request = {
            method: 'post',
            url: `${endPoint}TermsCondition?userId=${userId}`,
            headers: {
              'Content-Type': 'application/json',
            },
          };
        let res = await axios(request);
          console.log("Res: ", res.data);
        if (res.data?.Status) {
            navigation.navigate(key)
        }
    } catch (error) {
        console.log('Please Try again Later at Update User Status: ', error)
    } finally {
        setLoading(false)
    }
}

export const updateUserDetail = (data, navigation, key, setLoading) => async (dispatch) => {
    try {
        setLoading(true)
        let request = {
            method: 'post',
            url: `${endPoint}PersonalDetail`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: data
          };
        let res = await axios(request);
          console.log("Res of Update USer Detail: ", res.data);
        if (res.data?.Status) {
            navigation.navigate(key)
        } else if(res.data?.Status){
            alert(JSON.stringify('Please Try again Later...'))
        }
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        setLoading(false)
    }
}

