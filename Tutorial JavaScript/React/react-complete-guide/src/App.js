import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        // return (
        //     <div className="App">
        //         <h1>Hi, I'm a React app</h1>
        //     </div>
        // );

        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app'))

        return (
            <div className="App">
                <h1>Hi, I'm a React app</h1>
                <p>This is working!</p>
            </div>
        );
    }
}

export default App;