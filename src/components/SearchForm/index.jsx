import React, { Component } from 'react';
import './index.css';
import TMDB from '../TMDB';

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
            type="number"
            name="year"
            onChange={this.handleChangeYear}
            value={this.state.movieYear}
            placeholder="Type in a year... (only numbers)">
            <option selected value="">-</option>
            <option value="1999">1999</option>
            <option value="2012">2012</option>
            </select>
          </div>
          
        </div>        
        <TMDB movieTitle={this.state.movieTitle} movieYear={this.state.movieYear}/>

      </header>

    )
  }
}

export default SearchForm;
