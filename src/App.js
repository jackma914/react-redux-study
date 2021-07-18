import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

function App() {
  const [movieTitle, setMovieTtitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movies, setMovies] = useState([
    { title: "simson 1", yaer: 2001 },
    { title: "simson 2", yaer: 2002 },
    { title: "simson 3", yaer: 2003 },
  ]);

  useEffect(() => {});

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title}></Movie>;
  });

  const addMovie = (event) => {
    event.preventDefault();
    setMovies([...movies, { title: movieTitle, year: movieYear }]);
    setMovieTtitle("");
    setMovieYear("");
  };
  return (
    <div>
      <h1>movie list</h1>
      <form action="" onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          name=""
          id=""
          placeholder="영화제목"
          onChange={(e) => setMovieTtitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={movieYear}
          name=""
          id=""
          placeholder="개봉년도"
          onChange={(e) => setMovieYear(e.target.value)}
        />
        <br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
