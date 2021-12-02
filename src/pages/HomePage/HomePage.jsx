import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as filmAPI from '../../services/themoviedb-api';

export default function HomePage() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    filmAPI.fetchTrending().then(response => setFilms(response.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {films && (
        <ul>
          {films.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>;
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
