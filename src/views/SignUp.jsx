import React from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Components
import { PageTitle, FormField, OutlinedButton } from '../components';

const SignUp = () => {
  return (
    <div className='signUp'>
      <div className='signUp__background'>
        <div className='signUp__container'>
          <div className='signUp__content'>
            <PageTitle title={'Regístrate para ingresar '} borderColor={colors?.lightPink} />
            <form className='signUp__form'>
              <FormField label='Nombre de Usuario' helper='Escribe tu correo institucional' />
              <FormField label='Contraseña' type='password' />
              <FormField label='Universidad'>
                <select name='' id=''>
                  <option value=''>holi</option>
                </select>
              </FormField>
            </form>
            <hr className='signUp__section-divider' />
            <div className='signUp__cta-list'>
              <OutlinedButton text='Registrar como conductor' color={colors.darkMustard} />
              <OutlinedButton text='Registrar como pasajero' color='#dAdAdA' />
            </div>

            <div className='signUp__footer'>
              <p className='signUp__footer--text'>¿Ya estás registrado en Wheels?</p>
              <a className='signUp__footer--link'>Ingresa aquí</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
