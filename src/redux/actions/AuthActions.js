
import axios from 'axios';
import { endPoint } from '../../config/EndPoint'
import { LOGIN, LOGOUT, ACTIVE_USER, USER_ID, USER_REWARD, REGISTER } from '../types/Types';
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
        const userCredential = await axios.post(`${endPoint}Account/Login?Email=${emailEncoded}&Password=${password}`, axiosConfig);

        if (userCredential.data?.Status) {
            let request = {
                method: 'get',
                url: `${endPoint}Account/Profile?userId=${userCredential.data?.Data.ID}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            let res = await axios(request);

            if (remember) {
                let user_id = userCredential.data?.Data.ID
                user_id = user_id.toString()
                storeToken(user_id)
            }
            let user_data = res.data;
            if (user_data?.Status) {
                setErr(false)
                const user = JSON.parse(user_data.Data);
                dispatch({
                    type: ACTIVE_USER,
                    payload: user,
                })
            }
            if (!user_data?.Status) {
                setErr(true)
            }
            if (user_data?.Status && userCredential.data?.Status) {
                dispatch({
                    type: USER_ID,
                    payload: userCredential.data?.Data.ID,
                })
            }

            // dispatch({
            //     type: LOGIN,
            //     payload: userCredential.data.Data,
            // });
            // if (userCredential.data?.Data) {
            //     dispatch({
            //         type: USER_ID,
            //         payload: userCredential.data?.Data.ID,
            //     })
            // }
        }
        if (!userCredential.data?.Status) {
            setErr(true)
        }

    } catch (error) {
        console.log("Error: ", error);
        alert(JSON.stringify('Please Try again Later...'))
    } finally {
        setLoading(false)
    }
};

export const getUserProfile = (userId) => async (dispatch) => {
    try {
        // setLoading(true)
        let request = {
            method: 'get',
            url: `${endPoint}Account/Profile?userId=${userId}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await axios(request);
        let user_data = res.data;
        if (user_data?.Status) {
            const user = JSON.parse(user_data.Data);
            dispatch({
                type: ACTIVE_USER,
                payload: user,
            })
        }
    } catch (error) {
        console.log('Error at Get User Profile...', error)
    }
    finally {
        // setLoading(false)
    }
}


export const doSignup = (data, setLoading, setSuccess, navigation) => async (dispatch) => {
    try {
        setLoading(true)
        let request = {
            method: 'post',
            url: `${endPoint}Account/Register`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
        let userCredential = await axios(request);
        if (userCredential.data?.Status) {
            // setSuccess(true)
            dispatch({
                type: REGISTER,
                payload: userCredential.data?.Data?.ID,
            })
            navigation.navigate('VeifyEmail')
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

export const emailVerify = (token, id, setLoading, setErr) => async (dispatch) => {
    try {
        setLoading(true)
        let newToken = token.toLowerCase()
        let request = {
            method: 'post',
            url: `${endPoint}Account/Verify?userId=${id}&code=${newToken}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await axios(request);
        if (!res.data.Status) {
            setErr({ status: true, msg: res.data.Message })
        }
        return res.data.Status
    }
    catch (error) {
        console.log("Error at Verify Email: ", error)
    } finally {
        setLoading(false)
    }
}

export const doGetLoggedInUser = (setLoader) => async (dispatch) => {
    try {
        setLoader(true)
        const { user_id } = await getToken()
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
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }
}


export const updateUserStatus = (userId, navigation, key, setLoading) => async (dispatch) => {
    try {
        if (setLoading) {
            setLoading(true)
        }
        let request = {
            method: 'post',
            url: `${endPoint}Account/TermsCondition?userId=${userId}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await axios(request);
        if (res.data?.Status) {
            if (navigation) {
                navigation.navigate(key)
            }
        }
    } catch (error) {
        console.log('Please Try again Later at Update User Status: ', error)
    } finally {
        if (setLoading) {
            setLoading(false)
        }
    }
}

export const updateUserDetail = (data, navigation, key, setLoading) => async (dispatch) => {
    try {
        if (setLoading) {
            setLoading(true)
        }
        let request = {
            method: 'post',
            url: `${endPoint}Account/PersonalDetail`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
        let res = await axios(request);
        if (res.data?.Status) {
            navigation.navigate(key)
        } else if (res.data?.Status) {
            alert(JSON.stringify('Please Try again Later...'))
        }
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        if (setLoading) {
            setLoading(false)
        }
    }
}

export const promoCodeReward = (uri, setLoading) => async (dispatch) => {
    try {
        setLoading(true)
        let request = {
            method: 'post',
            url: `${endPoint}Stripe/ApplyPromoCodeAndReward?${uri}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await axios(request);
        if (res.data.Status) {
            dispatch({ type: USER_REWARD, payload: res.data.Data })
        }

    } catch (error) {
        console.log('Error: ', error);
    } finally {
        setLoading(false)
    }
}

export const stripeToken = (uri, setLoading) => async (dispatch) => {

    try {
        setLoading(true)
        let request = {
            method: 'post',
            url: `${endPoint}Stripe/SetPlan?${uri}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await axios(request);
        return res.data.Status

    } catch (error) {
        console.log('Error: ', error);
    } finally {
        setLoading(false)
    }
}





