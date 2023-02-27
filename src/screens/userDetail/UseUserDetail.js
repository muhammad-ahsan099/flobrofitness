import { useState } from 'react'
import { addUser } from "../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { updateUserDetail, updateUserStatus } from '../../redux/actions/AuthActions';

const UseUserDetail = () => {
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.AuthReducer.userData);
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const [inputs, setInputs] = useState({
        gender: 'Female',
        age: 13,
        height: 36,
        weight: 25,
        country: '',
        city: '',
        zipCode: '',
        address: '',
        additionalInfo: '',
    });
    const [gender, setGender] = useState('Female');
    const [bodyName, setBodyName] = useState('Ectomorph')
    const [selectedCountry, setSelectedCountry] = useState({name: 'country', flag: null, code: null});
    const [bodyType, setBodyType] = useState([
        {
            id: Math.random() * 1000000,
            status: true,
            title: 'Ectomorph',
            value: 'ECT',
            disable: false,
        },
        {
            id: Math.random() * 1000000,
            status: false,
            title: 'Endomorph',
            value: 'END',
            disable: false,
        },
        {
            id: Math.random() * 1000000,
            status: false,
            title: 'Mesomorph',
            value: 'MES',
            disable: false,
        },
    ]);
    const radioPress = (btnTitle, index) => {
        let array = [...bodyType];
        array.forEach((item, ind) => {
            if (btnTitle !== item.title) {
                item.status = false;
            } else {
                item.status = true
                setBodyName(item)
            }
        })
        setBodyType(array);
    };
    const onChangeHandler = (prop) => (text) => {
        console.log("Prop: ", prop, "text: ", text);
        setInputs({ ...inputs, [prop]: text });
    };

    const genderPress = (value) => {
        setGender(value)

    }
    // Add Data
    const addUserDetailHandler = () => {

        const body = bodyType.find((item) => item.status === true)
        console.log("title bodyType: ", body);

        const data = {
            ID: 0,
            UserId: userData?.UserID,
            Gender: inputs.gender[0],
            Age: inputs.age.toString(),
            Height: inputs.height.toString(),
            BodyType: body ? body.value : '',
            CountryId: selectedCountry?.code,
            City: inputs.city,
            ZipCode: inputs.zipCode,
            Address: inputs.address,
            Additionalinfo: inputs.additionalInfo,
            BodyWait: inputs.weight,
        }

        console.log("final Data: ", data);
        dispatch(updateUserDetail(data, setLoading))
        // dispatch(updateUserStatus(userData?.UserID, navigation, 'Subscription', setLoading))
        // navigation.navigate('Subscription')
    }
    return {
        inputs,
        loading,
        onChangeHandler,
        gender,
        bodyName,
        genderPress,
        bodyType,
        radioPress,
        addUserDetailHandler,
        selectedCountry,
        setSelectedCountry
    }
}

export default UseUserDetail