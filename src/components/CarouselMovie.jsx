import React from "react";
import Carousel from "react-bootstrap/Carousel";

const urlImage = "https://image.tmdb.org/t/p/w500";
const CarouselMovie = ({ data }) => {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`${urlImage}${data.backdrop_path}`}
        alt={data.title}
      />
      <Carousel.Caption>
        <h3>{data.title}</h3>
        <p>{`${data.overview.substr(0, 40)}...`}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default CarouselMovie;
