import { useState } from 'react'

export const UseUserDetail = () => {
    const [inputs, setInputs] = useState({
        country: '',
        city: '',
        zipCode: '',
        address: '',
        additionalInfo: '',
    });

    const onChangeHandler = (prop) => (text) => {
        setInputs({ ...inputs, [prop]: text });
    };

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
        console.log(singleUser, 'data');
    }
    return [{
        inputs,
        onChangeHandler,
        addUserHandler,
    }]
}