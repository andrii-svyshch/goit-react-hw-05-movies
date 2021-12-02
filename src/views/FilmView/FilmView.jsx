import { useEffect, useState, lazy, Suspense } from 'react';
import {
  NavLink,
  useParams,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as filmAPI from '../../services/themoviedb-api';
import noImagePlaceholder from '../../images/noImagePlaceholder.svg';
import s from './FilmView.module.css';
import { css } from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const override = css`
  display: block;
  text-align: center;
  border-color: black;
`;

const CastView = lazy(() =>
  import(/* webpackChunkName: "CastView" */ '../CastView'),
);
const ReviewsView = lazy(() =>
  import(/* webpackChunkName: "ReviewsView" */ '../ReviewsView'),
);

export default function FilmView() {
  const { IMG_URL } = filmAPI;
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    filmAPI.fetchFilmDetails(filmId).then(setFilm);
  }, [filmId]);

  return (
    <>
      {film && (
        <>
          <button
            type="button"
            className={s.backButton}
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
          <article>
            <div className={s.filmCard}>
              <img
                src={
                  film.poster_path
                    ? `${IMG_URL('w300') + film.poster_path}`
                    : noImagePlaceholder
                }
                alt={film.original_title}
                width="300"
                height="450"
              />
              <div className={s.filmDetails}>
                <h2>{film.original_title}</h2>
                <p>User Score: {film.vote_average * 10}%</p>
                <h3>Overview</h3>
                <p>{film.overview}</p>
                <h4>Genres</h4>
                <p>
                  {film.genres[0] !== undefined ? film.genres[0].name : 'Other'}
                </p>
              </div>
            </div>
            <div className={s.addInfo}>
              <h3>Additional information</h3>
              <ul className={s.addInfoList}>
                <li>
                  <NavLink
                    to={`/movies/${filmId}/cast`}
                    className={({ isActive }) =>
                      isActive ? s.activeLink : s.link
                    }
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/movies/${filmId}/reviews`}
                    className={({ isActive }) =>
                      isActive ? s.activeLink : s.link
                    }
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={s.cast}>
              <Suspense fallback={<PropagateLoader css={override} size={15} />}>
                <Routes>
                  <Route path="cast" element={<CastView filmId={filmId} />} />
                  <Route
                    path="reviews"
                    element={<ReviewsView filmId={filmId} />}
                  />
                </Routes>
              </Suspense>
            </div>
          </article>
        </>
      )}
    </>
  );
}

FilmView.propTypes = {
  filmId: PropTypes.string.isRequired,
};
