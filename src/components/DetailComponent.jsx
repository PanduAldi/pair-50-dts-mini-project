import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Rating, Typography } from "@mui/material";
const urlImage = "https://image.tmdb.org/t/p/w500";

const DetailComponent = ({ data }) => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col xs={12} lg={3}>
            <img
              src={`${urlImage}${data.poster_path}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col xs={12} lg={9}>
            <Box sx={{ mt: 2, mb: 1, p: 2, border: "1px dashed grey" }}>
              <Typography
                className="text-left"
                variant="h3"
                sx={{ color: "#fff", mb: 3 }}
              >
                🎥 {data.title}
              </Typography>
              <Typography
                className="text-left"
                variant="body1"
                sx={{ color: "#fff", mb: 3 }}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={data.vote_average / 2}
                  precision={0.1}
                  size="small"
                  readOnly
                />
              </Typography>
              <Typography
                className="text-left"
                variant="body1"
                sx={{ color: "#fff", mb: 3 }}
              >
                Overview
              </Typography>
              <Typography
                className="text-left"
                variant="body2"
                sx={{ color: "#fff", mb: 3 }}
              >
                {data.overview}
              </Typography>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailComponent;
