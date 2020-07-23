import React, { Component } from 'react';
//here replacing with Axios instance;
//import axios from 'axios';
import axios from '../../Axios';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {
    render () {
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to = '/' exact>Home</NavLink></li>
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
                <Route path = '/' exact component = {Posts} />
                <Route path = '/new-post' component = {NewPost} />
                <Route path = '/:id' exact component = {FullPost} />
            </div>
        );
    }
}

export default Blog;