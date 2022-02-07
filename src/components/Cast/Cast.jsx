import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {fetchMovieCast} from "../../services/moviesApi";

export default function Cast () {
    const [cast, setCast] = useState([]);

    const {movieId} = useParams();
    
    useEffect(() => {
        fetchMovieCast(movieId).then(({cast}) => setCast(cast));
    }, [movieId])

    return (<ul>
            {cast && cast.map(el => 
                (<li>
                    <p>{el.name}</p>
                    <p>{el.character}</p>
                    <img src={`https://image.tmdb.org/t/p/original/${el.profile_path}`} alt={el.name} width="100px"></img>
                </li>))}
            </ul>)
}