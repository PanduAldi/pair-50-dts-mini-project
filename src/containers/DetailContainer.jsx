import React, { useEffect, useState } from "react";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import DetailComponent from "../components/DetailComponent";

const DetailContainer = () => {
  const [user, loading] = useAuthState(auth);
  const params = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: "Peringatan!!",
        text: "Anda harus login dulu",
        icon: "error",
      });

      navigate("/login");
    } else {
      const detailMovie = async () => {
        try {
          const respMovie = await axios.get(
            `https://api.themoviedb.org/3/movie/${params.idFilm}?api_key=${process.env.REACT_APP_API_KEY}`
          );

          setMovie(respMovie.data);
        } catch (err) {
          console.log(err);
        }
      };

      detailMovie();
    }
  }, []);

  return (
    <>
      <DetailComponent data={movie} />
    </>
  );
};

export default DetailContainer;
