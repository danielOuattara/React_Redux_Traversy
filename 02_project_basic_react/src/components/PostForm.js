import { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => console.log(data));

        this.setState({
            title: "",
            body: ''
        })
    }
    
    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title :&nbsp; </label>
                    <input 
                      type="text" 
                      name="title" 
                      value={this.state.title} 
                      onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="body">Body : </label>
                    <textarea 
                      name="body" 
                      cols="20" 
                      rows="2" 
                      value={this.state.body}
                      onChange={this.handleChange}
                    ></textarea>

                    <br /><br />
                <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}
export default PostForm;
