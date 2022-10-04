import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './modules/Home'
import AddUser from './modules/AddUser';
import EditUser from './modules/EditUser';
import Pagination from './modules/Pagination'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addUser" element={<AddUser/>}/>
      <Route path="/editUser/:id" element={<EditUser/>}/>
      <Route path="/pagination" element={<Pagination/>}/>
    </Routes>
    </>
  );
}

export default App;
