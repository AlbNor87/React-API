import React from 'react';
import './index.css';

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
const Movie = (props) => (

<div className="resultContainer">

    <img className="moviePoster" src={imageBaseUrl+props.movie.poster_path} alt="poster"/>

    <div className="content">

        <h1>{props.movie.original_title}</h1>
        <h4>Release Date: {props.movie.release_date}</h4>
        <h3>Rating: {props.movie.vote_average}</h3>
        <h4>({props.movie.vote_count} votes)</h4>
        <div className="summary">
            <h3>{props.movie.overview}</h3>
        </div>

    </div>
</div>

)

export default Movie;