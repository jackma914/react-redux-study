import React from "react";

function Movie(props) {
  return (
    <div>
      <div>{props.movie.title}</div>
      <div>{props.movie.year}</div>
    </div>
  );
}

export default Movie;
