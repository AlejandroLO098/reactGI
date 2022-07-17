import React from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: [
        {
          id: 1,
          name: "Alejandro",
          number: "555-550",
          dob: "April 16, 1990",
        },
        {
          id: 2,
          name: "Johnny",
          number: "551-550",
          dob: "May 02, 1999",
        },
        {
          id: 3,
          name: "Billy",
          number: "550-5523",
          dob: "December 02, 2001",
        },
        {
          id: 4,
          name: "Bobby",
          number: "521-350",
          dob: "October 20, 1999",
        },
      ],
    };
  }

  render() {
    const { person } = this.state;
    return (
      <div>
        {person.map((personinfo) => {
          return <BasicInfo people={personinfo} key={personinfo.id} />;
        })}
      </div>
    );
  }
}

// name, number, date of birth and etc
// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’
// in the constructor.  Then take the returned ‘div’ and create a component,
// pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)
