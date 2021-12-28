import React from 'react';
import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

import Text from './Text';

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required'),
  password: yup
  .string()
  .required('Password is required'),
})

const styles = StyleSheet.create({
  button: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#1b4ae6',
  },
  text: {
    color: '#fff'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 300,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    marginTop: 10,
    marginBottom: 10
  }
})

const SignInForm = ({ onSubmit }) => {
  
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name="username" placeholder="Username" />
      <FormikTextInput style={styles.input} name="password" placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>
          Sign In
        </Text>
      </Pressable>
    </View>
  )
}


const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;