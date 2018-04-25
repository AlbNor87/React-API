import React, { Component } from 'react';
import Movie from '../Movie/';
import './index.css';

const apiKey = "4c23bea64ae5a64d31067d88f814bd14";
const urlMovieTitle = (movieTitle, movieYear) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}&year=${movieYear}&year_optional=true`; 

class TMDB extends Component {

    constructor(props) {
        super(props)
        this.state = {
        tmdbData: "",
        requestFailed: false,
        movieTitle: props.movieTitle,
        movieYear: props.movieYear
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        
        if (this.state.movieTitle ==='')
            return;

        //Check if title and year is unchanged    
        if (prevState.movieTitle === this.state.movieTitle && prevState.movieYear === this.state.movieYear )
        {
            return false;
        }

        //Check if title or year has changed
        if (prevState.movieTitle !== this.state.movieTitle || prevState.movieYear !== this.state.movieYear) {
            
            fetch(urlMovieTitle(this.state.movieTitle, this.state.movieYear))
            .then(response => {
                if(!response.ok){
                    throw Error("Network request failed")
                }
                return response
            })
            .then(data => data.json())
            .then(data => {
                if(data.results.length === 0) {
                    this.setState({
                         tmdbData: {results:[]}
                    });
                    
                } else {
                    this.setState({
                        tmdbData: data
                    })
                }
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.movieTitle !== this.state.movieTitle) {
          this.setState({ movieTitle: nextProps.movieTitle});
        }

        if (nextProps.movieYear !== this.state.movieYear) {
            this.setState({ movieYear: nextProps.movieYear});
          }
        
        console.log("Received new props")
      }

    render() {

        if(this.state.requestFailed) return  <h1>Failed</h1>  
        if(!this.state.tmdbData) return  <h1>Go on, search for something!</h1>
        
        const movies = this.state.tmdbData.results.map( movie => {

            return <Movie movie={movie}/>

        } )
        
        if(movies.length){
            
            return(
            
            <div className="tmdbContainer">

            {movies}
        
            </div>
            
            )
            
        }else {

            return(

                <div className="tmdbContainer">

                <h1>No results were found... Sorry!</h1>
        
                </div>
             )
        }                          
    }
}

export default TMDB;
