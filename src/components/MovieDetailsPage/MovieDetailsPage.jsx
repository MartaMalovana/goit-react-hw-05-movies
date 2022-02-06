import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {fetchMovieIdSearch} from '../../services/moviesApi';

export default function MovieDetailsPage () {
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        fetchMovieIdSearch(movieId)
            .then(result => {
                setMovie(result);
                console.log(result);
            });
        
    }, [movieId]);

    return (
        <>
       <h2>{movie.title}</h2>
        </>
    );
}