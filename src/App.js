import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProduct from './components/ViewProduct';
import Addheader from './components/Addheader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Routes>
      <Route path='' element={<AddProduct/>}/>
      <Route path='search' element={<SearchProduct/>}/>
     <Route path='delete' element={<DeleteProduct/>}/>
      <Route path='view' element={<ViewProduct/>}/>
    </Routes>
    </BrowserRouter>
      

    </div>
  );
}

export default App;
