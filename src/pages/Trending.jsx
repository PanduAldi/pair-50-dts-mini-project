import React, { useEffect } from "react";
import { Box, Typography, Skeleton } from "@mui/material";

import TrendingMovie from "../containers/TrendingMovie";
const Trending = () => {
  return (
    <>
      <Box sx={{ mt: 2, mb: 2, p: 2, border: "1px dashed grey" }}>
        <Typography variant="h5" sx={{ color: "#fff" }}>
          🔥Trending
        </Typography>

        <TrendingMovie />
      </Box>
    </>
  );
};

export default Trending;
