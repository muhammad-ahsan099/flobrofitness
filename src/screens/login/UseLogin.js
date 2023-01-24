import { useState } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/actions/AuthActions";

export const UseLogin = ()=> {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: '',
        remember: false
      });
    
      const handleChange = (prop) => (text) => {
        setValues({ ...values, [prop]: text });
      };

      const loginHandler = ()=> {
        dispatch(doLogin())
      }

      return [{
        values,
        handleChange,
        loginHandler
      }]
}