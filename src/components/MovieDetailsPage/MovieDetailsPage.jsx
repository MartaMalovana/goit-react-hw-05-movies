import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, NavLink, useRouteMatch, Route, useHistory } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';
import {BsArrowLeft} from "react-icons/bs";
import {fetchMovieIdSearch} from '../../services/moviesApi';
import {MovieInfo, Image, MovieBlock, AdditionalInfo, Genre, BackButton} from './MovieDetailsPage.styled';

const Cast = lazy(() => import('../Cast/Cast') /* webpackChunkName: "Cast" */);
const Reviews = lazy(() => import('../Reviews/Reviews') /* webpackChunkName: "Reviews" */);

export default function MovieDetailsPage () {
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();
    const {url} = useRouteMatch();
    const h = useHistory();

    useEffect(() => {
        fetchMovieIdSearch(movieId)
            .then(result => {
                setMovie(result);
            });
        
    }, [movieId]);

    return (
        <>
        <BackButton onClick={() => h.goBack()}>
            <BsArrowLeft />
            <div>Go back</div>
        </BackButton>
        
            <MovieBlock>
            {movie &&  
                <MovieInfo>
                    {movie.poster_path && <Image 
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                        alt={movie.title} 
                         
                    ></Image>}

                    <div>
                        <h2>{movie.title + ' (' + movie.release_date.substr(0, 4) + ')'}</h2>
                        <p>User Score: {movie.vote_average * 10 + '%'}</p>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h4>Genres</h4>
                        <div>
                            {movie.genres.map( (genre) => <Genre key={genre.id}>{genre.name}</Genre> ) }
                        </div>
                    </div>
                </MovieInfo>            
            }
            </MovieBlock>
            
            <AdditionalInfo>
                <p>Additional information</p>
                <ul>
                    <li><NavLink to={`${url}/cast`}><p>Cast</p></NavLink></li>
                    <li><NavLink to={`${url}/reviews`}><p>Reviews</p></NavLink></li>
                </ul>
            </AdditionalInfo>
        
        <div>
            <Suspense fallback={<ThreeDots color="#00BFFF" height={80} width={80} />}>
                <Route path="/movies/:movieId/cast">
                    <Cast/>
                </Route>
                
                <Route path="/movies/:movieId/reviews">
                    <Reviews/>
                </Route>
            </Suspense>
        </div>
        </>
    );
}