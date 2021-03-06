import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components'
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'

// const StyledButton = styled.button`
//     background-color: green,
//     color: white,
//     font: inherit,
//     border: 1px solid blue,
//     padding: 8px,
//     cursor: pointer,

//     &:hover: {
//         background-color: lightgreen,
//         color: black
//     }
// `;

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
        // this.state = {
        //     persons: [
        //         { id: '1', name: 'Max', age: 28 },
        //         { id: '2', name: 'Manu', age: 29 },
        //         { id: '3', name: 'Stephanie', age: 27 }
        //     ],

        //     otherState: 'some other value',
        //     showPersons: false
        // }
    }

    state = {
        persons: [
            { id: '1', name: 'Max', age: 28 },
            { id: '2', name: 'Manu', age: 29 },
            { id: '3', name: 'Stephanie', age: 27 }
        ],

        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[App.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log('[App.js] componentWillUnmount');
    }

    // switchNameHandler = (newName) => {
    //     // console.log("Was clicked!")
    //     // this.state.persons[0].name = "Maximilian"
    //     this.setState({
    //         persons: [
    //             // { name: 'Maximilian', age: 28 },
    //             { name: newName, age: 28 },
    //             { name: 'Manu', age: 29 },
    //             { name: 'Stephanie', age: 27 },
    //         ]
    //     })
    // }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // const person = this.state.persons[personIndex];
        // const person = Object.assign({}, this.state.persons[personIndex])

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        person[personIndex] = person;

        // this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1})
        this.setState((prevState, props) => {
            return {
                persons: persons, changeCounter: this.state.changeCounter + 1
            }
        })

        // this.setState({
        //     persons: [
        //         { name: 'Max', age: 28 },
        //         { name: event.target.value, age: 29 },
        //         { name: 'Stephanie', age: 26 }
        //     ]
        // })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    loginHandler = () => {
        this.setState({ authenticated: true });
    };

    render() {
        console.log('[App.js] render');
        // return (
        //     <div className="App">
        //         <h1>Hi, I'm a React app</h1>
        //     </div>
        // );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app'))

        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer',
        //     ':hover': {
        //         backgroundColor: 'lightgreen',
        //         color: 'black'
        //     }
        // }

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                // <div>
                //     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                //     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Max!")} changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
                //     <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                // </div>
                <div>
                    {/* {this.state.persons.map((person, index) => {
                        return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })} */}
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                        isAuthenticated={this.state.authenticated} />
                </div>
            )
            // style.backgroundColor = 'red'
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            // <StyleRoot>
            <div className="App" >
                {/* <h1>Hi, I'm a React app</h1> */}
                {/* <p>This is really working!</p> */}
                {/* <p className={classes.join(' ')}>This is really working!</p> */}
                {/* <button onClick={this.switchNameHandler()}>Switch Name</button> */}
                {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
                {/* <button style={style} onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button> */}
                {/* <button style={style} onClick={() => this.togglePersonHandler()}> Toogle Persons</button > */}
                {/* <button onClick={() => this.togglePersonHandler()} className='button'> Toogle Persons</button > */}
                {/* <StyledButton onClick={() => this.togglePersonHandler()}> Toogle Persons</StyledButton> */}
                {/* <Person /> */}
                {/* <Person name="Max" age="28"/>
                <Person name="Manu" age="29">My Hobbies: Racing</Person>
                <Person name="Stephanie" age="26"/> */}
                {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /> */}
                {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Max!")}>My Hobbies: Racing</Person> */}
                {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Max!")} changed={this.nameChangedHandler}>My Hobbies: Racing</Person> */}
                {/* <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
                {/* {
                    this.state.showPersons === true ?
                        <div>
                            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Max!")} changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
                            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                        </div> : null
                } */}
                <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
                <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
                    {this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            persons={this.state.persons}
                            clicked={this.togglePersonHandler}
                        />
                    ) : null}
                    {persons}
                </AuthContext.Provider>
            </div >
            // </StyleRoot>
        );
    }
}

// const App = props => {
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             { name: 'Max', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stephanie', age: 26 },
//         ],

//         otherState: 'some other value'
//     });

//     // useState({ otherState: 'some other value' })
//     const [otherState, setOtherState] = useState('some other value')

//     console.log(personsState, otherState)

//     const switchNameHandler = () => {
//         setPersonsState({
//             persons: [
//                 { name: 'Maximilian', age: 28 },
//                 { name: 'Manu', age: 29 },
//                 { name: 'Stephanie', age: 27 },
//             ],

//             // otherState: personsState.otherState
//         })
//     }

//     return (
//         <div className="App">
//             <h1>Hi, I'm a React app</h1>
//             <p>This is really working!</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//         </div>
//     );
// }

// export default Radium(App);
export default App;