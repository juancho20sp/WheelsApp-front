import React, { useState, useEffect } from 'react';

// Components
import { Header, ProfileHeader, FormField, Loader } from '../components';

// Views
import { Layout } from './';

// Hooks
import { useProfile } from '../utils';

// Redux
import { useSelector } from 'react-redux';

const Profile = () => {
    const {
        isDriver,
    } = useProfile();

    const userData = useSelector((state) => state.user.userData);
    const isLoading = useSelector((state) => state.common.isLoading);
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <>
            {isLoading && <Loader />}
            <Layout>
                <main className='profile profile__container'>
                    <Header text='Perfil' />

                    <div className='profile__content'>
                        <ProfileHeader userName={`${userData.name} ${userData.lastName }`} />

                        <form className='profile__form'>
                            <FormField label='Institución' value={userData.organization || ''} isDisabled={isDisabled} />
                            <FormField label='Correo electrónico' value={userData.email || ''} isDisabled={isDisabled} />
                            <FormField label='Contacto' value={userData.phoneNumber || ''} isDisabled={isDisabled} />

                            {isDriver && <FormField label='Vehículos'>
                                <select name='' id=''>
                                    <option value=''>holi</option>
                                </select>
                            </FormField>}
                        </form>
                    </div>
                </main>
            </Layout>
        </>
    );
};

export default Profile;