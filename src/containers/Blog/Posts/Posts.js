import React, {Component} from 'react';
//import BrowserRouter from 'react-router-dom';
import axios from '../../../Axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
class Posts extends Component {
    state = {
        posts : [],
        selectedPostId : null,
        error : false
    }
    componentDidMount(){
        console.log(this.props);
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
    render(){
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
            <section className="Posts">
                   {posts}
                </section>
        );
    }
}
export default Posts;