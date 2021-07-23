import React, { useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movies, setMovies] = useState([
    { title: "the simson 1", year: 2020 },
    { title: "the simson 2", year: 2030 },
    { title: "the simson 3", year: 2040 },
  ]);

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
      },
    ]);

    setMovieTitle("");
    setMovieYear("");
  };
  return (
    <div>
      <form action="" onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="영화제목"
        />
        <br />
        <input
          type="text"
          value={movieYear}
          onChange={(e) => setMovieYear(e.target.value)}
          placeholder="개봉년도"
        />
        <br />
        <button type="submit">추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
