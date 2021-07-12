import React, { Component } from 'react'
import AddComment from './Components/addComment';
import Comment from './Components/Comment';
import './App.css';


export class App extends Component {

    state = {
      comments: [],
      commentValue: "",
      vote: 0,
    };
    
    handleChange = (e) => {
      this.setState({commentValue : e.target.value })
      // console.log(e.target.value);
    };

    handleRating = (event) => {
      this.setState({vote : event });
      // console.log(event);
    }

    handleClick = () => {
      
      if(this.state.vote === 0 ){
        alert("Yorum yapmadan önce oy vermelisiniz");
      }

      else if(this.state.commentValue.length === 0){
        alert("Yorum Boş olamaz");
      }

      else if(this.state.commentValue.length < 3){
        alert("Yorumunuz çok kısa");
      }
      
      else{ 
        const newState = this.state;

        newState.comments.push({ 
        text: this.state.commentValue, 
        vote: this.state.vote 
        })
        
        newState.commentValue = "";
        newState.vote = 0;

        this.setState({
          ...newState
        });
      }
    } 
  render() {
    return (
      <div>
        <h1>Yorumlar</h1>
        <Comment commentsList={this.state.comments} ></Comment>
        <AddComment handleRating={this.handleRating} handleChange={this.handleChange} handleClick={this.handleClick}></AddComment>
      </div>
    )
  }
}

export default App