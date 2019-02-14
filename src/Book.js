import React, { Component } from 'react';



class Book extends Component {
    state = {
        hide:true
    }
    hideMeme=() => 
        { this.setState({hide:!this.state.hide })
    
    }
  render() {
    let Hide='';

    if(this.state.hide === true){
      Hide = <p>{this.props.bookData.subtitle}</p>
      
      
    }
    if(this.state.hide === true){
        return (
            <div>
                <h1 onClick={this.hideMeme}>{this.props.bookData.title} </h1>
                <h1>Nothing to show...</h1>
            </div>
        );
    } else {
        return (
            <div className>
             <p> {this.props.bookData.isbn}</p>
             <h1 onClick={this.hideMeme}>{this.props.bookData.title} </h1>
             <p>{this.props.bookData.subtitle}</p>
             <p>{this.props.bookData.author}</p>
             <p>{this.props.bookData.published}</p>
             <p>{this.props.bookData.publisher}</p>
             <p>{this.props.bookData.pages}</p>
             <p>{this.props.bookData.description}</p>
             <a href={this.props.bookData.website}> website </a> 
             
              {Hide}
            </div>
          );
    }

    }
  }
  
  export default Book;