import React from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Components
import { PageTitle, FormField, OutlinedButton, FilledButton, Modal } from '../components';
import { AiFillCloseCircle } from 'react-icons/ai';
// import Modal from 'react-modal';

// Hooks
import { useSignUp } from '../utils';

const SignUp = () => {
  const {
    isModalOpen,
    handleCloseModal,
    handleEmailChange,
    handlePasswordChange,
    handleRegisterDriverButtonClick,
    handleRegisterPassengerButtonClick,
    handleLoginHereClick
  } = useSignUp();

  // Modal.setAppElement('#root');


  return (
    <div className='signUp'>
      <div className='signUp__background'>
        <div className='signUp__container'>
          <div className='signUp__content'>
            <PageTitle title={'Regístrate para ingresar '} borderColor={colors?.lightPink} />
            <form className='signUp__form'>
              <FormField label='Nombre de Usuario' helper='Escribe tu correo institucional' changeHandler={handleEmailChange} />
              <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
              <FormField label='Universidad'>
                <select name='' id=''>
                  <option value=''>holi</option>
                </select>
              </FormField>
            </form>
            <hr className='signUp__section-divider' />
            <div className='signUp__cta-list'>
              <OutlinedButton text='Registrar como conductor' color={colors.darkMustard} />
              <OutlinedButton text='Registrar como pasajero' color='#dAdAdA' clickHandler={handleRegisterPassengerButtonClick} />
            </div>

            <div className='signUp__footer'>
              <p className='signUp__footer--text'>¿Ya estás registrado en Wheels?</p>
              <a className='signUp__footer--link' onClick={handleLoginHereClick}>Ingresa aquí</a>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseModal}
        // style={customStyles}
        contentLabel='Example Modal'>

        <div className='signUp__content--modal'>
          <form className='signUp__form--modal'>
            <AiFillCloseCircle className='signUp__form--modal__close' onClick={handleCloseModal} />
            <FormField label='Nombre de Usuario' helper='Escribe tu correo institucional' changeHandler={handleEmailChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} />
            <FormField label='Universidad'>
              <select name='' id=''>
                <option value=''>holi</option>
              </select>
            </FormField>
          </form>

          <hr className='signUp__section-divider' />
          <div className='signUp__cta-list'>
            <FilledButton text='Registrar como pasajero' color={colors?.lightPink} clickHandler={handleRegisterPassengerButtonClick} />
          </div>
        </div>



      </Modal>

    </div>
  );
};

export default SignUp;
