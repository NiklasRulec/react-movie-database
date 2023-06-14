import { useState } from "react";
import MovieData from "../assets/data";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(MovieData);
  console.log(data);

  const [searchInput, setsearchInput] = useState("");

  const yearSortUp = () => {
    const sortedData = [...data].sort((a, b) => a.year - b.year);
    setData(sortedData);
  };

  const yearSortDown = () => {
    const sortedData = [...data].sort((a, b) => b.year - a.year);
    setData(sortedData);
  };

  const rateSort = () => {
    const sortedData = [...data].sort((a, b) => b.rate - a.rate);
    setData(sortedData);
  };

  const azSort = () => {
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setData(sortedData);
  };

  const zaSort = () => {
    const sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
    setData(sortedData);
  };

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="home-section">
      <h1>MOVIE DATABASE</h1>
      <article className="search-field">
        <button onClick={yearSortUp}>Nach Datum aufsteigend</button>
        <button onClick={yearSortDown}>Nach Datum absteigend</button>
        <button onClick={rateSort}>Beste Bewertung</button>
        <button onClick={azSort}>A - Z</button>
        <button onClick={zaSort}>Z - A</button>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Film suchen"
        />
      </article>
      <article className="movie-cards-gallery">
        {filteredData.map((item, index) => (
          <div key={index}>
            <Link to={`/${item.title}`}>
              <MovieCard
                title={item.title}
                director={item.director}
                duration={item.duration}
                genre={item.genre}
                rate={item.rate}
                year={item.year}
              />
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Home;
