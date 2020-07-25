import React, {Component} from 'react';
//import BrowserRouter from 'react-router-dom';
import axios from '../../../Axios';
import Post from '../../../components/Post/Post';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
// import {Link} from 'react-router-dom';
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
        this.props.history.push({pathname :'/posts/' + id});
       // this.props.history.push('/posts/' + id)
    }
    render(){
        let posts = <p style = {{textAlign : 'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                //return 
                //  <Link to = {'/' + post.id} key = {post.id}>
               return <Post key = {post.id} title = {post.title} 
                author = {post.author}
                clicked = {() => this.postSelectHandler(post.id)}/>
            //  </Link>
             });
        }
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <Route path = {this.props.match.url +'/:id'} exact component = {FullPost} />
            </div>
            
        );
    }
}
export default Posts;