import React, { Component } from 'react';
import './Person.css';
// import Radium from 'radium';
// import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliaury'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

// const StyledDiv = styled.div`
//         width: 60%;
//         margin: 16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         padding: 16px;
//         text-align: center;

//         @media (min-width: 500px): {
//             width: '450px'
//         }
//     `;

// const person = (props) => {
//     console.log('[Person.js] rendering...');
//     // const style = {
//     //     '@media (min-width: 500px)': {
//     //         width: '450px'
//     //     }
//     // };
//     // return <p>I'm a Person</p>
//     // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
//     // return <p>I'm {props.name} and I am {props.age} years old!</p>

//     return (
//         //     <div className="Person" style={style}>
//         //     < p onClick = { props.click } > I'm {props.name} and I am {props.age} years old!</p>
//         //         < p > { props.children }</p >
//         //             <input type="text" onChange={props.changed} value={props.name} />
//         //     </div >

//         <StyledDiv>
//             < p onClick={props.click} > I'm {props.name} and I am {props.age} years old!</p>
//             < p > {props.children}</p >
//             <input type="text" onChange={props.changed} value={props.name} />
//         </StyledDiv>
//     )
// }

// // export default Radium(person);

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementref = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementref.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        // return [
        //     <p key="i1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="i2">{this.props.children}</p>,
        //     <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ];
        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Authendicated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer> */}
                    {this.context.authenticated ? <p>Authendicated!</p> : <p>Please log in</p>}
            {/* <React.Fragment> */}
                <p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3" 
                    // ref={(inputEl) => { this.inputElement = inputEl }} 
                    ref = {this.inputElementref}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
                </Aux>
            // </React.Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;