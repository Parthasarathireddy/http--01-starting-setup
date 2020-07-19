import React, { Component } from 'react';
//here replacing with Axios instance;
//import axios from 'axios';
import axios from '../../Axios';

class Blog extends Component {
    state = {
        posts : [],
        selectedPostId : null,
        error : false
    }
    componentDidMount(){
        //this Get method expects atleast one arg
        axios.get('/posts').then((response) =>{
            const posts = response.data.slice(0,4);
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Partha'
                }

            })
            this.setState({posts : updatePosts});
            console.log(this.state);
        }).catch(error =>{
            this.setState({error : true})
        })
    }

    postSelectHandler = (id) =>{
        this.setState({selectedPostId : id})
    }

    render () {
        let posts = <p style = {{textAlign : 'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key = {post.id} 
                title = {post.title} 
                author = {post.author}
                clicked = {() => this.postSelectHandler(post.id)}/>
             });
        }
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