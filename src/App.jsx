import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserRoutes } from './utils/';

// Components
import { ProtectedRoute, UnprotectedRoute } from './components';

// Views
import { 
  Test, 
  SignUp, 
  Login, 
  HomePassenger, 
  Profile, 
  PageNotFound, 
  HomeDriver,
  Record
 } from './views';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<UnprotectedRoute />}>
            <Route exact path={UserRoutes.login.path} element={<Login />}></Route>
            <Route exact path={UserRoutes.signUp.path} element={<SignUp />}></Route>
          </Route>

          {/* ONLY FOR DRIVERS */}
          <Route element={<ProtectedRoute onlyForDrivers={true} />}>
            <Route exact path={UserRoutes.homeDriver.path} element={<HomeDriver />}></Route>
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route exact path={UserRoutes.home.path} element={<HomePassenger />}></Route>
            <Route exact path={UserRoutes.record.path} element={<Record />}></Route>
            <Route exact path={UserRoutes.profile.path} element={<Profile />}></Route>
          </Route>

          <Route exact path='/test' element={<Test />}></Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
