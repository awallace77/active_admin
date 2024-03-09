import React from 'react'
import { VStack, ButtonGroup, Button, Heading } from '@chakra-ui/react'
import { Form, Formik } from "formik";
import TextField from './TextField';
import {useNavigate} from "react-router"
import { formSchema } from '@active/common';

/* Use formik to create form */
const Login = () => {

  const navigate = useNavigate();

  const onLogin = (event) => {
    console.log('Clicked login')
  }

  return (
    <Formik
     initialValues= {{email: "", password: ""}}
      validationSchema= {formSchema}
      onSubmit= { (values, actions) => {
        const vals = {...values}
        actions.resetForm();
        fetch('http://localhost:5000/auth/login', {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(vals)

        }).then(res => {
          if(!res || !res.ok || res.status >= 400){
            console.log('failed')
            return; //failed
          }
          return res.json();
        }).then(data =>{
          if(!data) return;
          console.log(data);
        }).catch(err => console.log(err));
      }}
    >

      <VStack 
        as={Form} 
        w={{base: '90%', md: "500px",}} 
        m='auto' 
        justify='center' 
        h='100vh' 
        spacing='1rem'
      >

        <Heading>Login</Heading> 
        <TextField name="email" placeholder="Enter email" autoComplete="off" label="Email"/>
        <TextField name="password" placeholder="Enter password" autoComplete="off" label="Password"/>

        <ButtonGroup>
          <Button colorScheme='green' type='submit' onClick={ onLogin }>Log In</Button>
          <Button onClick={() => navigate("/register")} colorScheme='gray'>Sign Up</Button>
        </ButtonGroup>
      </VStack>
      
    </Formik>
  )
}

export default Login