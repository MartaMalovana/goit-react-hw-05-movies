import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Navigation from "./components/Navigation/Navigation";

const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const HomePage = lazy(() =>
  import("./components/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Suspense fallback={<ThreeDots color="#00BFFF" height={80} width={80} />}>
        <Switch>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
