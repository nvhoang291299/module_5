import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateBook from './components/CreateBook';
import ListBook from './components/ListBook';
import UpdateBook from './components/UpdateBook';
function App() {
  return (
    <>
        <Routes>
          <Route path="" element={<ListBook />}/>
          <Route path="/createBook" element={<CreateBook />} />
          <Route path="/updateBook/:id" element={<UpdateBook />} />
        </Routes>
    </>
  );
}

export default App;
