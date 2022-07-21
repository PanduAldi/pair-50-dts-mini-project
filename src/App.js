import Navigasi from "./components/Navigasi";
import Container from "react-bootstrap/esm/Container";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Footer from "./components/Footer";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailContainer from "./containers/DetailContainer";
//import ProtectedComponent from "./components/ProtectedComponent";

function App() {
  return (
    <>
      <Navigasi />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />}>
            <Route path=":page" element={<Trending />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail-film/:idFilm" element={<DetailContainer />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
