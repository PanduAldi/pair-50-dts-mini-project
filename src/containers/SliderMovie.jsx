import React, { useEffect, useState } from "react";
//import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import Row from "react-bootstrap/esm/Row";
import LinearProgress from "@mui/material/LinearProgress";
import MovieCard from "../components/MovieCard";

const SliderMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const respMovie = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
        );

        setLoading(false);
        setMovies(respMovie.data.results);
      } catch (err) {
        console.log("Error ", err);
      }
    };

    fetchDataMovie();
  }, []);

  return (
    <>
      <div className="movie-app">
        <div className="row">
          {loading ? (
            <LinearProgress />
          ) : (
            movies.map((movie) => {
              return <MovieCard key={movie.id} data={movie} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default SliderMovie;
