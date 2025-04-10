import { Component } from "react";
import {RegsiterContainer,ErrorPara,
    RegisterForm,RegImg,Form,Label,Input,Button,Input1} from './styledComponents'
import { Link } from 'react-router-dom';

class Register extends Component{

    state = {
        name:'',
        email:'',
        password:'',
        textMesg:''
    }

    successReg = (msg) => {
        this.setState({textMesg:msg})
         this.props.history.replace('/login')
    }

    failureReg = (msg) => {
        this.setState({textMesg:msg})
    }

    onSubmitClick = async (event) => {
        event.preventDefault()
        const {name,email,password} = this.state
        const apiUrl = `http://localhost:5000/register`
        const option = {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({name,email,password})

        }

        try{
            const response = await fetch(apiUrl,option)
            console.log(response)
            const data = await response.json()
            console.log(data)
            if(response.ok===true){
                this.successReg(data.message)
            }
            else{
                this.failureReg(data.error)
            }
        }catch(error){
            console.log(error)
        }
    }

    onChangeName = (event) =>{
        this.setState({name:event.target.value})
    }

    onChangeEmail = (event) =>{
        this.setState({email:event.target.value})
    }

    onChangePswd = (event) =>{
        this.setState({password:event.target.value})
    }

render(){
    const {name,email,password,textMesg} = this.state
    console.log(textMesg)
    console.log(this.props.history)
    return(
        <RegsiterContainer>
          <RegisterForm>
            <RegisterForm centervenum = 'true'>
            <RegImg src='https://i.postimg.cc/MH2gHrcG/Chat-GPT-Image-Apr-7-2025-04-01-07-PM.png'
             alt='Reg logo'
            />
            </RegisterForm>
            <Form onSubmit={this.onSubmitClick}>
              <Label>Enter Name :</Label>
              <Input type='text' placeholder='Enter Name' 
              required onChange={this.onChangeName}
               value={name}
              />
              <Label>Enter Email :</Label>
              <Input type='email' placeholder='Enter Email'
               required
                onChange={this.onChangeEmail}
                value={email}
               />
              <Label>Enter Password :</Label>
              <Input type='password' placeholder='Enter Password' required
               onChange={this.onChangePswd}
               value={password}
              />
              <div>
                <Input1 type='checkbox' required id='check'/>
                <Label htmlFor='check' pad='true'>i agree to the <Link to='/register'>terms & conditions</Link></Label>
              </div>
              <Button type='submit'>Register</Button>
              <ErrorPara>{textMesg}</ErrorPara>   
            </Form>
          </RegisterForm>
        </RegsiterContainer>
    )
}

}
export default Register;