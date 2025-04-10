import React from 'react'
import {useNavigate} from 'react-router-dom'
import Register from '../Register'

const RegisterWrapper = (props) => {
    const navigate = useNavigate()

    const history = {
      replace: (path) => navigate(path),
    }
    
    return <Register {...props} history={history} />;
}
export default RegisterWrapper;