import React from "react";

function Movie(props) {
  return (
    <div key={props.movie.id}>
      <div>{props.movie.title}</div>
      <div>{props.movie.yaer}</div>
    </div>
  );
}

export default Movie;
