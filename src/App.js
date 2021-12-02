import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const override = css`
  display: block;
  text-align: center;
  border-color: black;
`;

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ './pages/HomePage'),
);
const MovieDetailsPage = lazy(() =>
  import(/* webpackChunkName: "MovieDetailsPage" */ './pages/MovieDetailsPage'),
);
const MoviesPage = lazy(() =>
  import(/* webpackChunkName: "MoviesPage" */ './pages/MoviesPage'),
);
const NotFoundPage = lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ './pages/NotFoundPage'),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<PropagateLoader css={override} size={15} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies">
            <Route path="" element={<MoviesPage />} />
            <Route path=":filmId/*" element={<MovieDetailsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
