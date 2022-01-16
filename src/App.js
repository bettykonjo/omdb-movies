
import "./App.css";

import { getMovieDetailsById, getMoviesBySearchTerm } from "./utils/utils";

function App() {
  let movieData = {};
  let movieDataa = {};
  let isMovieData = false;
  let isMovieDataa = false;

  window.onload = async () => {
    const movieAPI = await getMovieDetailsById("tt2975590");
    sessionStorage.setItem("movieData", JSON.stringify(movieAPI));
  };
  if (sessionStorage.getItem("movieData")) {
    movieData = JSON.parse(sessionStorage.getItem("movieData"));
    isMovieData = true;
  }
  console.log(movieData)
    window.onload = async () => {
    const movieAPITerm = await getMoviesBySearchTerm("spiderman");
    sessionStorage.setItem("movieDataa", JSON.stringify(movieAPITerm));
  };
  if (sessionStorage.getItem("movieDataa")) {
    movieDataa = JSON.parse(sessionStorage.getItem("movieDataa"));
    isMovieDataa = true;
  }

  console.log(movieData);
  return(
   <div className="App">

    </div>
  );
}

export default App;
