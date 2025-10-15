import MoviesList from "./MoviesList";

export default function Parent() {
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "Tenet", year: 2020 },
  ];

  return (
    <>
      <h1>Parent</h1>
      {movies.map((movie) => (
        <MoviesList key={movie.id} movie={movie} />
      ))}
    </>
  );
}
