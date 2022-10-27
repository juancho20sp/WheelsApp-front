import io from 'socket.io-client';

// Dirección del puerto
let socket = io(`${process.env.REACT_APP_REALTIME_URL}`);

export default socket;