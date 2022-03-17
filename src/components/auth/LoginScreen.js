import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);
  
  const [formValue, handleChange] = useForm({
    email: '',
    password: ''
  });

  const {email, password} = formValue;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword( email, password));
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleLogin}>

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

          <button type='submit' className='btn btn-primary btn-block' disabled={loading} > Login </button>
        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div className='btn-google' onClick={handleGoogleLogin}>
            <div className='google-icon-wrapper'>
              <img className='google-icon' alt='Google' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'/>
            </div>
            <p className='btn-text'><b>Sign in with Google</b></p>
          </div>
        </div>

        <Link className='link' to='/auth/register'>Create new account</Link>
      </form>
    
    </>
  )
}
