import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {fetchMovieCast} from "../../services/moviesApi";
import default_photo from '../../images/default_photo.jpg';

export default function Cast () {
    const [cast, setCast] = useState([]);

    const {movieId} = useParams();
    
    useEffect(() => {
        fetchMovieCast(movieId).then(({cast}) => setCast(cast));
    }, [movieId])

    return (<ul>
            {cast && cast.map(el => 
                (<li key={el.name}>
                    <p>{el.name}</p>
                    <p>{'Character: ' + el.character}</p>
                    <img src={el.profile_path ? `https://image.tmdb.org/t/p/original/${el.profile_path}` : default_photo} alt={el.name} width="100px"></img>
                </li>))}
            </ul>)
}

