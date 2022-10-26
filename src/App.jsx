import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserRoutes } from './utils/';

// Views
import { Test, SignUp, Login, HomePassenger, Profile } from './views';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path={UserRoutes.home.path} element={<HomePassenger />}></Route>
          <Route exact path={UserRoutes.signUp.path} element={<SignUp />}></Route>
          <Route exact path={UserRoutes.login.path} element={<Login />}></Route>
          <Route exact path={UserRoutes.profile.path} element={<Profile />}></Route>
          <Route exact path='/test' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
