import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateBook from './components/createBook';
import ListBook from './components/listBook';

function App() {
  return (
    <>
        <Routes>
          <Route path="" element={<ListBook />}/>
          <Route path="/createBook" element={<CreateBook />} />
        </Routes>
    </>
  );
}

export default App;
