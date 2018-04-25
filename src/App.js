import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';



class App extends Component {
  render() {
    return (
      <div className="App">

        <SearchForm/>

      </div>
    );
  }
}

// var start = 1900;
// var end = new Date().getFullYear();
// var options = "";
// for(var year = start ; year <=end; year++){
// options += "<option>"+ year +"</option>";
// }
// document.querySelector(".year").innerHTML = options;

export default App;
