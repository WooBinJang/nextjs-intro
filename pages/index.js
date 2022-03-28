import { useEffect, useState } from "react/cjs/react.development";
import NavBar from "../component/NavBar";
import Seo from "../component/SEo";
const API_KEY = "c3ad70e7416b51752237a894f23ed60f";
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
      console.log(results);
    })();
  }, []);
  return (
    <div>
      <Seo title={"Home"} />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
