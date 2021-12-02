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

const HomeView = lazy(() =>
  import(/* webpackChunkName: "HomeView" */ './views/HomeView'),
);
const FilmView = lazy(() =>
  import(/* webpackChunkName: "FilmView" */ './views/FilmView'),
);
const SearchView = lazy(() =>
  import(/* webpackChunkName: "SearchView" */ './views/SearchView'),
);
const NotFoundView = lazy(() =>
  import(/* webpackChunkName: "NotFoundView" */ './views/NotFoundView'),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<PropagateLoader css={override} size={15} />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="movies">
            <Route path="" element={<SearchView />} />
            <Route path=":filmId/*" element={<FilmView />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
