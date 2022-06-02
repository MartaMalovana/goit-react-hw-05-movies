import { useState } from "react";
import { useRouteMatch } from 'react-router-dom';
import {fetchKeyWordSearchMovie} from '../../services/moviesApi';
import MoviesList from "../MoviesList/MoviesList";
import {Form, Button} from "./MoviesPage.styled";

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
        <Form onSubmit={searchMovie}>
            <label>
                <input name="keyword" onChange={e => setKeyword(e.target.value)}/>
            </label>
            <Button type="button" onClick={searchMovie}>Search</Button>
        </Form>
        <MoviesList results={movies} url={url}/>
        </>
    );

}