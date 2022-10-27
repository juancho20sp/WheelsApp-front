import React, { useState } from 'react';

// SCSS colors
import colors from '../scss/utils/_variables.scss';

// Components
import { PageTitle, FormField, OutlinedButton, FilledButton, Modal, Loader } from '../components';
import { AiFillCloseCircle } from 'react-icons/ai';

// Hooks
import { useSignUp } from '../utils';

// Redux
import { useSelector } from 'react-redux';

const SignUp = () => {
  const {
    email,
    handleCloseModal,
    handleCloseVehicleModal,
    handleDriverButtonClick,
    handleDriverContinueClick,
    handleEmailChange,
    handleLastnameChange,
    handleLicensePlateChange,
    handleLoginHereClick,
    handleModelChange,
    handleNameChange,
    handleOrganizationChange,
    handlePassengerButtonClick,
    handlePasswordChange,
    handlePhoneChange,
    handleRegisterDriverButtonClick,
    handleRegisterPassengerButtonClick,
    handleSeatsChange,
    handleVehicleDescriptionChange,
    isDriver,
    isModalOpen,
    isVehicleModal,
    lastname,
    licensePlate,
    model,
    name,
    password,
    phone,
    seats,
    vehicleDescription,
  } = useSignUp();

  const isLoading = useSelector((state) => state.common.isLoading);

  const dummyUniversities = [
    {
      name: 'Escuela Colombiana de Ingeniería',
      value: '631feea0ae8ca16cd15a5b12'
    }
  ];

  const [universities, setUniversities] = useState(dummyUniversities);


  return (
    <>
      {isLoading && <Loader />}
      <div className='signUp'>
        <div className='signUp__background'>
          <div className='signUp__container'>
            <div className='signUp__content'>
              <PageTitle title={'Regístrate para ingresar '} borderColor={colors?.lightPink} />
              <form className='signUp__form'>
                <FormField label='Nombre de Usuario' helper='Escribe tu correo institucional' changeHandler={handleEmailChange} value={email} />
                <FormField label='Contraseña' type='password' changeHandler={handlePasswordChange} value={password} />

                <FormField label='Universidad'>
                  <select name='' id='' defaultValue={'Seleccione una opción'} onChange={handleOrganizationChange}>
                    <option value=''>Seleccione una opción</option>
                    {universities.map((university, idx) =>
                      <option key={idx} value={university.value}>{university.name}</option>
                    )}
                  </select>
                </FormField>

              </form>
              <hr className='signUp__section-divider' />
              <div className='signUp__cta-list'>
                <OutlinedButton text='Registrar como conductor' color={colors.darkMustard} clickHandler={handleDriverButtonClick} />
                <OutlinedButton text='Registrar como pasajero' color='#dAdAdA' clickHandler={handlePassengerButtonClick} />
              </div>

              <div className='signUp__footer'>
                <p className='signUp__footer--text'>¿Ya estás registrado en Wheels?</p>
                <a className='signUp__footer--link' onClick={handleLoginHereClick}>Ingresa aquí</a>
              </div>
            </div>
          </div>
        </div>

        {/* Passenger modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel='Example Modal'>

          <div className='signUp__content--modal'>
            <form className='signUp__form--modal'>
              <AiFillCloseCircle className='signUp__form--modal__close' onClick={handleCloseModal} />

              <FormField label='Nombre' type='text' changeHandler={handleNameChange} value={name} />
              <FormField label='Apellido' type='text' changeHandler={handleLastnameChange} value={lastname} />
              <FormField label='Teléfono' type='number' changeHandler={handlePhoneChange} value={phone} />
            </form>

            <hr className='signUp__section-divider' />
            <div className='signUp__cta-list'>
              {isDriver ?
                <FilledButton text='Continuar' color={colors?.lightPink} clickHandler={handleDriverContinueClick} />
                :
                <FilledButton text='Registrar como pasajero' color={colors?.lightPink} clickHandler={handleRegisterPassengerButtonClick} />}
            </div>
          </div>
        </Modal>

        {/* Vehicle modal */}
        <Modal
          isOpen={isVehicleModal}
          onRequestClose={handleCloseVehicleModal}
          contentLabel='Example Modal'>

          <div className='signUp__content--modal'>
            <form className='signUp__form--modal'>
              <AiFillCloseCircle className='signUp__form--modal__close' onClick={handleCloseVehicleModal} />

              <FormField label='Total de asientos disponibles' helper='¿Cuántas personas puedes llevar?' type='number' changeHandler={handleSeatsChange} value={seats} />
              <FormField label='Descripción del vehículo' helper='Nissan March Azul' type='text' changeHandler={handleVehicleDescriptionChange} value={vehicleDescription} />
              <FormField label='Placa del vehículo' helper='ABC 123' type='text' changeHandler={handleLicensePlateChange} value={licensePlate} />
              <FormField label='Modelo del vehículo' helper='2022' type='number' changeHandler={handleModelChange} value={model} />
            </form>

            <hr className='signUp__section-divider' />
            <div className='signUp__cta-list'>
              <FilledButton text='Registrar conductor' color={colors?.lightPink} clickHandler={handleRegisterDriverButtonClick} />
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SignUp;
