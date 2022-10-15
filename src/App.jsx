import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Test } from './views';
// Redux
// import { useSelector } from 'react-redux';

function App() {
  // const state = useSelector((state) => state.login);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
