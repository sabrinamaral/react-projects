import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import Error from "./Error";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <Error error={error} />
      </div>
    );
  }

  const { Title: title, Year: year, Plot: plot, Poster: movie_url } = movie;
  return (
    <section className="single-movie">
      <img src={movie_url} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to={"/"} className="btn">
          back home
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
