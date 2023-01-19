import { useState } from "react";

export const UseSignup = ()=> {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        userId: '',
        email: '',
        password: '',
      });
    
      const handleChange = (prop) => (text) => {
        setValues({ ...values, [prop]: text });
      };

      return [{
        values,
        handleChange
      }]
}