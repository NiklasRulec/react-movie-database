import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { useState } from "react";
import { ThemeContext } from "./context/Context";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <section className={theme ? "dark" : "light"}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:movie" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
