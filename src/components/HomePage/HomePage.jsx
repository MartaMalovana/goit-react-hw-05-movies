import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList';
import {fetchTrendingMovies} from '../../services/moviesApi';

export default function HomePage () {
    
    const [results, setResults] = useState([]);  
    const { url } = useRouteMatch();

    useEffect(()=>{

        return fetchTrendingMovies()
            .then(({results}) => {
                setResults(results);
            });
    }, []);

    return (
        <MoviesList results={results} url={`${url}movies`}/>
    );
};