import { useState } from 'react'
import { addUser } from "../../redux/actions/Actions";
import { useDispatch,useSelector } from "react-redux";

const UseUserDetail = () => {
    const dispatch = useDispatch();
    const storeData = useSelector((store)=> store.Reducer.userData);
    console.log(storeData,"store data");
    
    const [inputs, setInputs] = useState({
        country: '',
        city: '',
        zipCode: '',
        address: '',
        additionalInfo: '',
    });
    const onChangeHandler = (text, input) => {
        setInputs(preState => ({ ...preState, [input]: text }))
    }
    // Add Data
    const addUserHandler = () => {
        if (!inputs.additionalInfo || !inputs.address || !inputs.city || !inputs.country || !inputs.zipCode) {
            alert("Please fill all Fields");
            return;
        }
        let singleUser = {
            country: inputs.country,
            city: inputs.city,
            zipCode: inputs.zipCode,
            address: inputs.address,
            additionalInfo: inputs.additionalInfo,
        }
        dispatch(addUser(singleUser))
        setInputs({
            country: '',
            city: '',
            zipCode: '',
            address: '',
            additionalInfo: '',
        })
    }
    return {
        inputs,
        onChangeHandler,
        addUserHandler,
    }
}

export default UseUserDetail