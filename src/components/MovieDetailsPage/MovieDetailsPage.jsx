import { useEffect, useState } from "react";
import { useParams, NavLink, useRouteMatch, Route } from "react-router-dom";
import {fetchMovieIdSearch} from '../../services/moviesApi';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsPage () {
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();
    const {url} = useRouteMatch();
    console.log(url);

    useEffect(() => {
        fetchMovieIdSearch(movieId)
            .then(result => {
                setMovie(result);
                console.log(result);
            });
        
    }, [movieId]);

    return (
        <>
        {movie &&  
        <div>
            <h2>{movie.title + ' (' + movie.release_date.substr(0, 4) + ')'}</h2>
            <p>User Score: {movie.vote_average * 10 + '%'}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <ul>
                {movie.genres.map( (genre) => <li>{genre.name}</li> ) }
            </ul>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width='200px'></img>}
        </div>
        }
        <div>
            <p>Additional information</p>
            <NavLink to={`${url}/cast`}><p>Cast</p></NavLink>
            <NavLink to={`${url}/reviews`}><p>Reviews</p></NavLink>
        </div>
        <div>
            <Route path="/movies/:movieId/cast">
                <Cast/>
            </Route>
            
            <Route path="/movies/:movieId/reviews">
                <Reviews/>
            </Route>
        </div>
        </>
    );
}