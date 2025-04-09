import { Component } from "react";
import {LoginContainer,ErrorPara,
        LoginForm,Form,Label,Input,Button,Input1,RegImg} from './styledComponents'

import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        email:'',
        password:'',
        textMesg:''
    }

    successReg = (token) => {
         Cookies.set('jwt_token',token,{expires:300})
        this.props.history.replace('/')

    }

    failureReg = (msg) => {
        this.setState({textMesg:msg})
    }

    onSubmitClick = async (event) => {
        event.preventDefault()
        const {email,password} = this.state
        const apiUrl = `http://localhost:5000/login`
        const option = {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({email,password})

        }

        try{
            const response = await fetch(apiUrl,option)
            console.log(response)
            const data = await response.json()
            console.log(data)
            if(response.ok===true){
                this.successReg(data.jwtToken)
            }
            else{
                this.failureReg(data)
            }
        }catch(error){
            console.log(error)
        }
    }


    onChangeEmail = (event) =>{
        this.setState({email:event.target.value})
    }

    onChangePswd = (event) =>{
        this.setState({password:event.target.value})
    }

render(){
    const {textMesg,email,password} = this.state
    return(
        <LoginContainer>
        <LoginForm>
        <LoginForm centervenum = 'true'>
        <RegImg src='https://i.postimg.cc/MH2gHrcG/Chat-GPT-Image-Apr-7-2025-04-01-07-PM.png'
            alt='Reg logo'
        />
        </LoginForm>
          <Form onSubmit={this.onSubmitClick}>
            <Label>Email</Label>
            <Input type='email' placeholder='Enter Email' 
            required onChange={this.onChangeEmail}
            value={email}
            />
            <Label>Password</Label>
            <Input type='password' placeholder='Enter Password'
             required
              onChange={this.onChangePswd}
              value={password}
             />

            <div>
              <Input1 type='checkbox'  id='check'/>
              <Label htmlFor='check' pad='true'>show password</Label>
            </div>
             <div>
             <Button type='submit'>Login</Button>
             <Link to='/register'>
             <Button type='submit' reg='true'>Create Account</Button>
             </Link>
             
             </div>
           
            <ErrorPara>{textMesg}</ErrorPara>   
          </Form>
        </LoginForm>
      </LoginContainer>
    )
}

}
export default (Login)