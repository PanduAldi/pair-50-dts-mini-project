import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Logo from "../logo.svg";

const Footer = () => {
  return (
    <>
      <section
        style={{
          marginTop: 100,
          width: "100%",
          height: "11rem",
          padding: 12,
          backgroundColor: "#012",
        }}
      >
        <Container>
          <Row>
            <Col mx={12} md={2}>
              <img src={Logo} width={150} height={150} alt="movie-in" />
            </Col>
            <Col mx={12} md={6}>
              <Typography
                variant="body2"
                sx={{ color: "#fff", mt: 6, mb: 4 }}
                gutterBottom
              >
                Website ini dibuat untuk memenuhi tugas mini Project DTS React
                Developer. Tugas ini dikerjakan oleh pair-50-DTS-mini-project
                dev. Pandu Aldi Pratama
              </Typography>
            </Col>
            <Col mx={12} md={4}>
              {/* <Typography variant="caption" sx={{ color: "#fff" }} gutterBottom>
                Hello
              </Typography> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
