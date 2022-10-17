import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Routes as UserRoutes } from './utils';

// Views
import { Test, SignIn } from './views';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path={UserRoutes.home.path} element={<Test />}></Route>
          <Route exact path={UserRoutes.signIn.path} element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
