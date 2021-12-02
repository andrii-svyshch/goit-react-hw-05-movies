import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as filmAPI from '../../services/themoviedb-api';

export default function SearhView() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  const memorySearch = new URLSearchParams(location.search).get('query') ?? '';

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const onSubmit = query => {
    filmAPI.fetchMovies(query).then(response => setFilms(response.results));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return alert('What are you looking for?');
    }
    onSubmit(query);
    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    onSubmit(memorySearch);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search film"
          onChange={handleNameChange}
        />
        <button type="submit">Search</button>
      </form>
      {films && (
        <ul>
          {films.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
