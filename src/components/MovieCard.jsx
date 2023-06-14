const MovieCard = (props) => {
  return (
    <article className="movie-card">
      <h2>{props.title}</h2>
      <h2>{props.director}</h2>
      <h2>{props.duration}</h2>
      <div>
        {props.genre.map((elm, index) => (
          <h2 key={index}>{elm}</h2>
        ))}
      </div>
      <h2>{props.rate}</h2>
      <h2>{props.year}</h2>
    </article>
  );
};

export default MovieCard;
