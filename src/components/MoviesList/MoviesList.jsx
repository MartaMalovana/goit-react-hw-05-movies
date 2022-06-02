import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Title} from './Movies.styled';

export default function MoviesList ({results, url}) {
  return (
      <>
      <Title>Trending movies today</Title>
      <ul>
        {results && results.map(result => (
          <li key={result.id}>
            <Link to={`${url}/${result.id}`}>{result.original_title}</Link>
          </li>
        ))}
      </ul>
      </>
  );
}

MoviesList.propTypes ={
  results: PropTypes.array,
  url: PropTypes.string
}