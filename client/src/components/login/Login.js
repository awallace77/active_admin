import React from 'react'
import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input, Heading } from '@chakra-ui/react'
import { useFormik } from "formik";
import * as yup from 'yup'

/* Use formik to create form */
const Login = () => {

  /* Formik */
  const formik = useFormik({
    initialValues: {username: "", password: ""},
    validationSchema: yup.object({
      username: yup.string()
        .required("Username required")
        .min(2, 'Username too short')
        .max(28, 'Username too long'),
      password: yup.string()
        .required("Password required")
        .min(2, 'Password too short')
        .max(28, 'Password too long'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    }
  })

  return (
    <VStack 
      as='form' 
      w={{base: '90%', md: "500px",}} 
      m='auto' 
      justify='center' 
      h='100vh' 
      spacing='1rem'
      onSubmit={formik.handleSubmit}>

      <Heading>Login</Heading> 
      {/* User name */}
      <FormControl isInvalid={formik.errors.username}>
        <FormLabel fontSize='lg'>Username</FormLabel>
        <Input 
          name='username' 
          placeholder='Enter user name'
          autoComplete='off'
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
        <FormErrorMessage>Invalid username</FormErrorMessage>
      </FormControl>

      {/* Password  */}
      <FormControl isInvalid={formik.errors.password}>
        <FormLabel fontSize='lg'>Password</FormLabel>
        <Input 
          name='password' 
          placeholder='Enter password'
          autoComplete='off'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
        <FormErrorMessage>Invalid password</FormErrorMessage>
      </FormControl>

      <ButtonGroup>
        <Button colorScheme='green' type='submit'>Log In</Button>
        <Button colorScheme='gray'>Sign Up</Button>
      </ButtonGroup>
    </VStack>
  )
}

export default Login