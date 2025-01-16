import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import "./styles/style.css";
import { routes } from "./config";
import { useDispatch } from "react-redux";
import { fetchShows } from "./util/fetchShows";
import { addShows } from "./context/slices/allShowsSlice";
import { useCallback, useEffect } from "react";
import useDeviceChecker from "./util/deviceChecker";

function App() {
  useDeviceChecker();

  const dispatch = useDispatch();
  const getAllShows = useCallback(async () => {
    const shows = await fetchShows(); // Await the result here

    if (shows) {
      dispatch(addShows(shows));
    }
  }, [dispatch]);

  useEffect(() => {
    getAllShows();
  }, [getAllShows]);

  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* Main Content  */}
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </main>
    </>
  );
}

export default App;
