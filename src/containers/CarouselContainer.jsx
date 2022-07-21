import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselParent from "react-bootstrap/Carousel";
import CarouselMovie from "../components/CarouselMovie";

const CarouselContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
        );

        setLoading(false);
        setMovies(responseData.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        "tunggu"
      ) : (
        <CarouselParent>
          {movies.slice(0, 4).map((movie) => {
            return <CarouselMovie key={movie.id} data={movie} />;
          })}
        </CarouselParent>
      )}
    </>
  );
};

export default CarouselContainer;
