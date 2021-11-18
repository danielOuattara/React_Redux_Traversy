import { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( response => response.json())
        .then( data => this.setState({ posts: data}))
        .catch(error => console.log(error.message));
    }
    
    render() {
        const postItems = this.state.posts.map( post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
               <h1>Posts</h1> 
               {postItems}
            </div>
        );
    }
}

export default Posts
