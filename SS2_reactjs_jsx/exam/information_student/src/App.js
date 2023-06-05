import './App.css';
import Table from 'react-bootstrap/Table';
import {students} from './data/data.js';
function App() {
  
  return (
    <div className="container">
      <h1 className='text-center'>Students</h1>
      <Table striped bordered hover>
      <thead>
        <tr key={students.map(student => (student.company))}>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      {students.map(student => (
          <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        ))}
      </tbody>
      </Table>
    </div>
  );
}

export default App;
