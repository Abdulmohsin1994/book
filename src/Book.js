import React, { Component } from 'react';



class Book extends Component {
  render() {

    return (
        <div className>
         <p> {this.props.bookData.isbn}</p>
         <p>{this.props.bookData.title} </p>
         <p>{this.props.bookData.subtitle}</p>
         <p>{this.props.bookData.author}</p>
         <p>{this.props.bookData.published}</p>
         <p>{this.props.bookData.publisher}</p>
         <p>{this.props.bookData.pages}</p>
         <p>{this.props.bookData.description}</p>
         <a href={this.props.bookData.website}> website </a> 
         
          
        </div>
      );
    }
  }
  
  export default Book;