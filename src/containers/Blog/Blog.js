import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts : [],
        selectedPostId : null
    }
    componentDidMount(){
        //this Get method expects atleast one arg
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Partha'
                }

            })
            this.setState({posts : updatePosts});
            console.log(this.state);
        })
    }

    postSelectHandler = (id) =>{
        this.setState({selectedPostId : id})
    }

    render () {
        const posts = this.state.posts.map(post => {
           return <Post key = {post.id} 
           title = {post.title} 
           author = {post.author}
           clicked = {() => this.postSelectHandler(post.id)}/>
        });
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id = {this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;