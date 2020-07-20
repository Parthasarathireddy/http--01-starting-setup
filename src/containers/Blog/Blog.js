import React, { Component } from 'react';
//here replacing with Axios instance;
//import axios from 'axios';
import axios from '../../Axios';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route} from 'react-router-dom';
class Blog extends Component {
    render () {
        return (
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><a href = './'>Home</a></li>
                            <li><a href = './new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path = '/' exact render = {() => <Posts />}/>
            </div>
        );
    }
}

export default Blog;