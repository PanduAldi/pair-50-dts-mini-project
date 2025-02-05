import React, { useEffect, useState } from "react";
//import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import CardMovie from "../components/CardMovie";
import Row from "react-bootstrap/esm/Row";
import LinearProgress from "@mui/material/LinearProgress";

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const respMovie = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
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
      <section>
        <Row>
          {loading ? (
            <LinearProgress />
          ) : (
            movies.map((movie) => {
              return <CardMovie key={movie.id} data={movie} />;
            })
          )}
        </Row>
      </section>
    </>
  );
};

export default TrendingMovie;
