import { useState, useEffect } from "react";
import { useRouteMatch } from 'react-router-dom';
import {fetchKeyWordSearchMovie} from '../../services/moviesApi';
import MoviesList from "../MoviesList/MoviesList";

export default function MoviesPage () {

    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState('');
    
    const { url } = useRouteMatch();

    const searchMovie = (e) => {
        e.preventDefault();
       return fetchKeyWordSearchMovie(keyword)
            .then(({results}) => {
                setMovies(results);
            });
    };

    return (
        <>
        <form onSubmit={searchMovie}>
            <label>
                <input name="keyword" onChange={e => setKeyword(e.target.value)}/>
            </label>
            <button type="button">Search</button>
        </form>
        <MoviesList results={movies} url={url}/>
        </>
    );

}