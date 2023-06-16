
import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './components/list';
import CreateProduct from './components/createProduct';
import UpdateProduct  from './components/updateProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/create' element={<CreateProduct/>} />
        <Route path='/update/:id' element={<UpdateProduct />} />
      </Routes>
      {/* <PaginatedItems itemsPerPage={4} /> */}
    </>
      
  )
}

export default App;
