import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import QuiSom from "./pages/QuiSom";
import FesteSoci from "./pages/FesteSoci";
import Comunitat from "./pages/Comunitat";
import Proveidors from "./pages/Proveidors";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/qui-som"
        element={
          <Layout>
            <QuiSom />
          </Layout>
        }
      />
      <Route
        path="/fer-se-soci"
        element={
          <Layout>
            <FesteSoci />
          </Layout>
        }
      />
      <Route
        path="/comunitat"
        element={
          <Layout>
            <Comunitat />
          </Layout>
        }
      />
      <Route
        path="/proveidors"
        element={
          <Layout>
            <Proveidors />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
