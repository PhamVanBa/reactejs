import React from "react";
import Person from "./Person";

class PersonList22 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          firstName: "Nguyen Van",
          lastName: "A",
          age: 20,
        },
        {
          id: 2,
          firstName: "Nguyen Van",
          lastName: "B",
          age: 30,
        },
      ],
    };
  }

  render() {
    const personList = this.state.persons.map((person) => (
      <Person
        key={person.id}
        id={person.id}
        firstName={person.firstName}
        lastName={person.lastName}
        age={person.age}
      ></Person>
    ));

    return <div>{personList}</div>;
  }
}

export default PersonList22;
