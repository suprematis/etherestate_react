import React from 'react';
import Dashboard from "./Dashboard"
import Header from "./Header";
import Inventory from "./Inventory";
import sampleProperties from "../sample-properties"
// import Request from "./Request";
import Property from "./Property";
// import Order from "./Order"

class App extends React.Component {
  state = {
    properties: {},
    request: {}
  };
  addProperty = property => {
    // 1. Take a copy
    const properties = { ...this.state.properties };
    // 2. Add our new property to the properties variable
    properties[`property${Date.now()}`] = property;
    // 3. Set the new properties object to state
    this.setState({properties})
  };
  loadSampleProperties = () => {
    this.setState({ properties: sampleProperties });
  };
  render() {
    return (
      <div className="container">
        <div className="row indigo darken-2 outer">
          <div className="col s2 sidenav">
            <Dashboard />
          </div>
          <div className="col s6 indigo lighten-5 left">
            <Header tagline="City of Palo Alto" />
            <ul className="properties">
              {Object.keys(this.state.properties).map(key => (
                <Property key={key} details={this.state.properties[key]} />
              ))}
            </ul>
          </div>
          {/* Commenting Request Section */}
          {/* <Request /> */}
          <div className="col s4">
            <Inventory
              addProperty={this.addProperty}
              loadSampleProperties={this.loadSampleProperties}
            />
          </div>
        </div>
      </div>
        );
        }
        }

export default App;
