import React, { Component } from 'react';
import './index.css';
import TMDB from '../TMDB';
import Option from '../Option';

class SearchForm extends Component {
  state = {
    movieTitle: '',
    movieYear: ''
  }

  handleChangeTitle = (e) => {
    this.setState({
      movieTitle: e.target.value
    });
  }

  handleChangeYear = (e) => {
    this.setState({
      movieYear: e.target.value
    });
  }

  render() {
  
    var start = new Date().getFullYear();
    var end = 1900;
    var options = [];
    for(var year = start ; year >=end; year--){
    options.push(<Option key={year} year={year}/>)
    }

    console.log(options)

    return(
        
        <header className="Header">
        <div className="search-container">
          <h1>Search TMDb for a movie!</h1>
          
          <div className="row">
            <h2>Title:</h2>
            <input 
            type="text"
            name="title"
            onChange={this.handleChangeTitle}
            value={this.state.movieTitle}
            placeholder="Type in a movie title..."
            />

            <h2>Year:</h2>
            <select
            className="year"
            type="number"
            name="year"
            onChange={this.handleChangeYear}
            value={this.state.movieYear}
            placeholder="Type in a year... (only numbers)">

            {options}
  
            </select>
          </div>
          
        </div>        
        <TMDB movieTitle={this.state.movieTitle} movieYear={this.state.movieYear}/>

      </header>

    )
  }
}

export default SearchForm;
