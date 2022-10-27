import { useEffect, useState } from "react";
import Movie from "../componenets/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies()
    }, []);
    return (
      <div>
        <h1>The Movies! {loading ? "" : `(${movies.length})`}</h1>
        {loading? <strong>Loading...</strong> : null}
        <ul>
          {movies.map((movie, index) => (
            <Movie 
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.title}
              genres={movie.genres}
            />
          ))}
        </ul>
      </div>
    );
}

export default Home;