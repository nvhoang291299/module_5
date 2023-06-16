import logo from './logo.svg';
import './App.css';
import ListProduct from './components/ListProduct';
import { Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListProduct />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/update/:id' element={<UpdateProduct />} />

      </Routes>
      
    </div>
  );
}

export default App;
