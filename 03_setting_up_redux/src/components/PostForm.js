import { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createPost } from './../actions/postActions'

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
            body: this.state.body,
        }
        
        this.props.createPost(post) // Call action to create post
        
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
        )
    }
}


export default connect(null, { createPost} ) (PostForm);

PostForm.ProtoTypes =  {
    createPost: PropTypes.func.isRequired,
    post: PropTypes.array.isRequired
};