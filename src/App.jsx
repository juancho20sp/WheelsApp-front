import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserRoutes } from './utils/';

// Views
import { Test, SignIn, Login, HomePassenger } from './views';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path={UserRoutes.home.path} element={<HomePassenger />}></Route>
          <Route exact path={UserRoutes.signIn.path} element={<SignIn />}></Route>
          <Route exact path={UserRoutes.login.path} element={<Login />}></Route>
          <Route exact path='/test' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
