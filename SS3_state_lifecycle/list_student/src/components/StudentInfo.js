import { students } from "../data/data";
const { Component } = require("react");

class StudentInfo extends Component {
  constructor() {
    super();
    this.state = {
      listStudent: students,
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">List Student</h1>
        <table class="table table-striped border rounded-3">
          <thead>
            <tr className="bg-info">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listStudent.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentInfo;
