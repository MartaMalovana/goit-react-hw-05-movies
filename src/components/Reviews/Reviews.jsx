import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {fetchMovieReviews} from '../../services/moviesApi';

export default function Reviews () {

    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        fetchMovieReviews(movieId).then(({results}) => setReviews(results));
    }, [movieId])
    
    return (<>
        {reviews.length === 0 ? <p>no reviews</p> 
        : <ul>{reviews.map(result => (
            <li key={result.author}>
                <p>Author: {result.author}</p>
                <p>{result.content}</p>
            </li>))}</ul>
        }</>)
}