import React, { useState } from 'react';

// Components
import { Header, ProfileHeader, FormField } from '../components';

// Views
import { Layout } from './';

const Profile = () => {
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <Layout>
            <main className='profile profile__container'>
                <Header text='Perfil' />

                <div className='profile__content'>
                    <ProfileHeader />

                    <form className='profile__form'>
                        <FormField label='Institución' value='Escuela Colombiana de Ingeniería' isDisabled={isDisabled} />
                        <FormField label='Correo electrónico' value='test@mail.escuelaing.edu.co' isDisabled={isDisabled} />
                        <FormField label='Contacto' value='300 230 6844' isDisabled={isDisabled} />
                        <FormField label='Género' value='Masculino' isDisabled={isDisabled} />
                        <FormField label='Vehículos'>
                            <select name='' id=''>
                                <option value=''>holi</option>
                            </select>
                        </FormField>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export default Profile;