import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const urlImage = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ data }) => {
  return (
    <>
      <Col xs={6} md={2}>
        <div className="image-container">
          <img
            style={{ marginBottom: 10 }}
            src={`${urlImage}${data.poster_path}`}
            alt={data.title}
          />
          <div className="overlay">
            <Link to={`/detail-film/${data.id}`}>Film Detail</Link>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MovieCard;
