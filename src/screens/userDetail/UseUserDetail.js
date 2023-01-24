import { useState } from 'react'
import { addUser } from "../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const UseUserDetail = () => {
    const dispatch = useDispatch();
    const storeData = useSelector((store) => store.Reducer.userData);

    const [inputs, setInputs] = useState({
        gender: 'Female',
        age: 13,
        height: 0,
        weight: 0,
        country: '',
        city: '',
        zipCode: '',
        address: '',
        additionalInfo: '',
    });
    const [gender, setGender] = useState('Female');
    const [bodyName, setBodyName] = useState('Ectomorph')
    const [bodyType, setBodyType] = useState([
        {
            id: Math.random() * 1000000,
            status: true,
            title: 'Ectomorph',
            disable: false,
        },
        {
            id: Math.random() * 1000000,
            status: false,
            title: 'Endomorph',
            disable: false,
        },
        {
            id: Math.random() * 1000000,
            status: false,
            title: 'Mesomorph',
            disable: false,
        },
    ]);
    const radioPress = (btnTitle, index) => {
        console.log('Index', index, 'Title: ', btnTitle);
        let array = [...bodyType];
        array.forEach((item, ind)=> {
            if(btnTitle !== item.title) {
                item.status = false;
            }else {
                item.status = true
                setBodyName(item)
            }
        })
        setBodyType(array);
    };
    const onChangeHandler = (prop) => (text) => {
        setInputs({ ...inputs, [prop]: text });
    };

    const genderPress = (value) => {
        setGender(value)

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
        gender,
        bodyName,
        genderPress,
        bodyType,
        radioPress,
        addUserHandler,
    }
}

export default UseUserDetail