import React from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Components
import { PageTitle, FormField, OutlinedButton } from '../components/';

const SignIn = () => {
  console.log(colors);

  return (
    <div className='signIn'>
      <div className='signIn__background'>
        <div className='signIn__container'>
          <div className='signIn__content'>
            <PageTitle title={'Regístrate para ingresar '} borderColor={colors?.lightPink} />
            <form className='signIn__form'>
              <FormField label='Nombre de Usuario' helper='Escribe tu correo institucional' />
              <FormField label='Contraseña' type='password' />
              <FormField label='Universidad'>
                <select name='' id=''>
                  <option value=''>holi</option>
                </select>
              </FormField>
            </form>
            <hr className='signIn__section-divider' />
            <div className='signIn__cta-list'>
              <OutlinedButton text='Registrar como conductor' color={colors.darkMustard} />
              <OutlinedButton text='Registrar como pasajero' color='#dAdAdA' />
            </div>

            <div className='signIn__footer'>
              <p className='signIn__footer--text'>¿Ya estás registrado en Wheels?</p>
              <a className='signIn__footer--link'>Ingresa aquí</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
