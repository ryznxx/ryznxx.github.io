import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/skills' element={<p>skills pages</p>} />
        <Route path='*' element={<p>anda tersesat</p>} />
      </Routes>
    </>
  );
}

export default App;
