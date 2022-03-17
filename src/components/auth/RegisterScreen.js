import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const {msgError} = useSelector(state => state.ui);

  const [formValues, handleChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password, password2} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch( startRegisterWithEmailPasswordName(email, password, name))
    }

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
    
      dispatch(setError('name is required'));
      return false;
      
    } else if (!validator.isEmail(email)) {
      
      dispatch(setError('Email is not valid'));
      return false;
      
    } else if (password !== password2 || password.length < 5) {
      
      dispatch(setError('Password should have more than 5 characters and match'));
      return false;
      
    }

    dispatch(removeError())
    return true;
  }
  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleSubmit}>

          {

            msgError &&
            (

            <div className='auth__alert-error'>
              {msgError}
            </div>
            )

          }

          <input
            type='text'
            placeholder='Name'
            name={'name'}
            className='auth__input'
            value={name}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Email'
            name='email'
            className='auth__input'
            value={email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='auth__input'
            value={password}
            onChange={handleChange}  
          />
          <input
            type='password'
            placeholder='Confirm password'
            name='password2'
            className='auth__input'
            value={password2}
            onChange={handleChange}  
          />

          <button type='submit' className='btn btn-primary btn-block mb-5'  > Register </button>
        

        <Link className='link' to='/auth/login'> Already registered? </Link>
      </form>
    
    </>
  )
}
