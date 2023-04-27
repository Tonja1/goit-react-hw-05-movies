import { lazy, Suspense } from "react";
import { Spinner } from "./Spinner";
import { GlobalStyle } from "GlobalStyle";
import { Route, Routes } from "react-router-dom";

const NavBar = lazy(() => import('../components/NavBar/NavBar'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const SearchMovies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Pages/Cast/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews/Reviews'));
const PageNotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="error" element={<PageNotFound />}/>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<SearchMovies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};