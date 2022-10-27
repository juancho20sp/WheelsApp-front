export { 
    login, 
    logout,
    setCurrentRole
} from './slices/loginSlice';

export { 
    startLoading,
    stopLoading
} from './slices/commonSlice'; 

export {
    setUserData,
    setSelectedVehicle,
    setRegisteredToRealTime
} from './slices/userSlice';