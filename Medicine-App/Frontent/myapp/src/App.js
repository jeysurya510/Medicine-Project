import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import NotFound from './components/NotFound';
import {Routes, Route , Navigate} from 'react-router-dom';
import LoginWrapper from './components/Login/LoginWrapper';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginWrapper />} />
      <Route path="/register" element={<Register />} />
      <Route path="not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
