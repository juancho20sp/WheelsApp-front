import React from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Components
import { PageTitle, FormField, FilledButton } from '../components/';

const Login = () => {
  return (
    <div className='login'>
      <div className='login__background'>
        <div className='login__container'>
          <div className='login__content'>
            <PageTitle title={'Ingresa tus datos'} borderColor={colors?.darkMustard} />
            <form className='login__form'>
              <FormField label='Nombre de Usuario' helper='Escribe tu correo institucional' />
              <FormField label='Contraseña' type='password' />
            </form>
            <hr className='login__section-divider' />
            <div className='login__cta-list'>
              <FilledButton text='Ingresar' color={colors?.lightPink} />
            </div>

            <div className='login__footer'>
              <p className='login__footer--text'>¿No eres un usuario de Wheels?</p>
              <a className='login__footer--link'>Ingresa aquí</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
