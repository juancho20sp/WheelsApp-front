import React, { useState } from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Components
import { PageTitle, FormField, FilledButton, Loader } from '../components/';

// Hooks
import { useLogin } from '../utils';

// Redux
import { useSelector } from 'react-redux';

const Login = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleLoginButtonClick,
    handleRegisterHereClick,
    email,
    password
  } = useLogin();

  const isLoading = useSelector((state) => state.common.isLoading);

  return (
    <>
    {isLoading && <Loader />}
    <div className='login'>
      <div className='login__background'>
        <div className='login__container'>
          <div className='login__content'>
            <PageTitle title={'Ingresa tus datos'} borderColor={colors?.darkMustard} />
            <form className='login__form'>
              <FormField label='Nombre de Usuario' helper='Escribe tu correo institucional' changeHandler={handleEmailChange} value={email} />
              <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} value={password} />
            </form>
            <hr className='login__section-divider' />
            <div className='login__cta-list'>
              <FilledButton text='Ingresar' color={colors?.lightPink} clickHandler={handleLoginButtonClick} />
            </div>

            <div className='login__footer'>
              <p className='login__footer--text'>¿No eres un usuario de Wheels?</p>
              <a className='login__footer--link' onClick={handleRegisterHereClick}>Regístrate aquí</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
