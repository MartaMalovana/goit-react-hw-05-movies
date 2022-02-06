import {Link} from 'react-router-dom';

export default function MoviesList ({results, url}) {

  return (
      <>
      <h2>Trending today</h2>
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