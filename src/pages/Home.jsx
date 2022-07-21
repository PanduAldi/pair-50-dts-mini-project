import React, { useEffect } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import axios from "axios";
import UpComingMovie from "../containers/UpComingMovie";
import Logo from "../logo.svg";
import TrendingMovie from "../containers/TrendingMovie";
import { Link } from "react-router-dom";
import SliderMovie from "../containers/SliderMovie";

const Home = () => {
  return (
    <>
      {/* Upcoming */}
      <Box sx={{ mt: 2, mb: 1, p: 2, border: "1px dashed grey" }}>
        <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>
          🍿 UPCOMING
        </Typography>

        <UpComingMovie />
        <Link to="/upcoming" className="text-right">
          See More
        </Link>
      </Box>
      <Box sx={{ mt: 2, mb: 1, p: 2, border: "1px dashed grey" }}>
        <Typography
          className="text-left"
          variant="body1"
          sx={{ color: "#fff", mb: 3 }}
        >
          🔥 TRENDING
        </Typography>

        <SliderMovie />
      </Box>
    </>
  );
};

export default Home;
