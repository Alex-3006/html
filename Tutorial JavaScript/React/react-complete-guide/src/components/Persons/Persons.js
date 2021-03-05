import React from "react";
// import React, { PureComponent } from "react";
import Person from './Person/Person';

// shouldComponentUpdate(nextProps, nextState) {
//     console.log('[App.js] shouldComponentUpdate');
//     if (nextProps.persons !== this.props.persons) {
//         return true;
//     } else {
//         return false;
//     }
// }

const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return (props.persons.map((person, index) => {
        return (
            <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => props.changed(event, person.id)}
            // isAuth={this.props.isAuthenticated}
            />
        );
    })
    );
}

export default persons;