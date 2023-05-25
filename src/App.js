import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import AddUser from './pages/users/AddUser';
import EditUser from './pages/users/EditUser';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/adduser' element={<AddUser />} />
        <Route exact path='/edituser/:id' element={<EditUser />} />
      </Routes>
    </Router>
    
  );
}

export default App;
