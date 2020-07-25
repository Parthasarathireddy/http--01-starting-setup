import React, { Component } from 'react';
//here replacing with Axios instance;
//import axios from 'axios';
import axios from '../../Axios';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
class Blog extends Component {
    render () {
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to = '/posts' exact>Home</NavLink></li>
                            <li><NavLink to = {{
                                //below absolute Path
                                pathname : '/new-post',
                                //below relative Path
                               // pathname : this.props.match.url + '/new-post',
                                hash : '#submit',
                                search : '?quick-submit = true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = '/' exact render = {() => <Posts />}/> */}
                {/* Switch will help you to load one component at a time and while using Swith order also importent */}
                <Switch>
                    <Route path = '/new-post' component = {NewPost} />
                    <Route path = '/posts' component = {Posts} />
                    <Redirect from = '/' to = '/posts' />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;