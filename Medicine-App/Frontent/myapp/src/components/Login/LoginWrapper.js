import React from 'react'
import {useNavigate} from 'react-router-dom'
import Login from '../Login'

const LoginWrapper = (props) => {
    const navigate = useNavigate()

    const history = {
      push: (path) => navigate(path),
    }
    
    return <Login {...props} history={history} />;
}
export default LoginWrapper;