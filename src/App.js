import React, {Component} from "react";
import API from "./utils/API.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  state = {
    employees: []
  }

    handleSort = (key, asc) => {

      let empSorted = [...this.state.employees];
      empSorted.sort( (a, b) => {
        return a.name.last > b.name.last ? asc * 1 : asc * -1;
      });

      this.setState({ employees: empSorted });
    }

  handleAPI = event => {

    API.getEmployees()
    .then( data => {
        let employees = [...data.data.results];
        console.log(employees);
        this.setState({employees: employees});
    });
  }


  render() {
    return (
      <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Employee Directory</a>
            </div>
          </nav>
          <button className="btn btn-primary mr-2" onClick={() => this.handleSort("name", 1)}>Sort By Last Name</button>
          <button className="btn btn-primary mr-2" onClick={() => this.handleSort("name", -1)}>Reverse Sort by Last Name</button>
          
          <button className="btn btn-success" onClick={() => this.handleAPI()}>Push to Get Employees</button>
          
          <table className="table table-striped mt-3">
            <tbody>
              {this.state.employees.map((employee, index) => (
                  <tr key={"Employee" + index}>
                    <td >
                      {employee.name.first}
                    </td>
                    <td >
                      {employee.name.last}
                    </td>
                    <td >
                      {employee.gender === 'male' ? <FontAwesomeIcon icon={faMars} /> : <FontAwesomeIcon icon={faVenus} />}
                    </td>
                  </tr>
              ))}
              </tbody>
          </table> 
        
      </div>
    );
  }
}

export default App;
