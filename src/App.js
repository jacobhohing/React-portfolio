import React, {Component} from "react";
import ProjCard from './components/ProjCard';
import projects from './projects.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
 
  state = {
    projects: [...projects]
  }

  render() {
    return (
      <div className="container-fluid">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Jake Hohing</a>
            </div>
          </nav>
          {this.state.projects.map( project => (
          <ProjCard
              key={project.id}
              {...project}

            />
          ))}

          <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">My Links</a>
            </div>
          </nav>
        
      </div>
    );
  }
}

export default App;
