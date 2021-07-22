import React, { useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [addMovie, setAddMovie] = useState([
    { title: "sss", year: 222 },
    { title: "sss", year: 222 },
  ]);

  const handleValueChange = (e) => {
    e.preventDefault();
    if (e.target.name === "movieYear") {
      setMovieYear(e.target.value);
    } else if (e.target.name === "movieName") {
      setMovieName(e.target.value);
    }
  };

  const renderMovies = addMovie.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // setAddMovie({ title: movieName, year: movieYear });
    // console.log(addMovie);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieName"
          value={movieName}
          onChange={handleValueChange}
          placeholder="영화제목"
        />
        <br />
        <input
          type="text"
          name="movieYear"
          value={movieYear}
          onChange={handleValueChange}
          placeholder="개봉년도"
        />
        <br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}{" "}
    </div>
  );
}

export default App;
