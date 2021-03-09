import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
// import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <li><NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{
                                color: "#fa923f",
                                textDecoration: "underline"
                            }}>Home</NavLink></li>
                            {/* <li><Link to="/new-post">New Post</Link></li> */}
                            <li><NavLink to={{
                                pathname: "/new-post",
                                // pathname: this.props.match.url + "/new-post",
                                // hash: "#submit",
                                // search: "?quick-submit = true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Route path="/" exact component={Posts} /> */}
                <Switch>
                    {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                    <Route path="/posts/" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from="/" to="/posts/" /> */}
                </Switch>
                {/* <Route path="/posts/" component={Posts} /> */}
                {/* <Route path="/" component={Posts} /> */}
            </div>
        );
    }
}

export default Blog;