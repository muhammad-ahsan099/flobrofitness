import { useState } from "react";

export const UseLogin = ()=> {
    const [values, setValues] = useState({
        email: '',
        password: '',
        remember: false
      });
    
      const handleChange = (prop) => (text) => {
        setValues({ ...values, [prop]: text });
      };

      return [{
        values,
        handleChange
      }]
}