import React, { useEffect, useRef, useContext } from 'react';
import 'C:/Users/alecn/projects/html/Tutorial JavaScript/React/react-complete-guide/src/containers/App.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // const timer = setTimeout(() => {
        //     alert('saved Data to cloud');
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work')
        }
        // }, [props.persons]);
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work')
        }
    })

    return (
        <div>
            {/* <h1>Hi, I'm a React app</h1> */}
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button ref={toggleButtonRef} onClick={props.clicked} className='button'> Toogle Persons</button >
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>} */}
            {/* </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

// export default Cockpit;
export default React.memo(Cockpit);