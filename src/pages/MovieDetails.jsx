import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import MovieData from "../assets/data";

const MovieDetails = () => {
  const params = useParams();
  const movie = MovieData.find((item) => item.title === params.movie);

  return (
    <section className="movie-details-section">
      <h2>Title : {movie.title}</h2>
      <h2>Duration : {movie.duration}</h2>
      <h2>Year : {movie.year}</h2>
      <h2>Director : {movie.director}</h2>
      <div>
        <h2>Genres :</h2>

        {movie.genre.map((elm, index) => (
          <h2 key={index}>{elm}</h2>
        ))}
      </div>

      <h2>Rate : {movie.rate}</h2>
      <BackButton />
    </section>
  );
};

export default MovieDetails;
