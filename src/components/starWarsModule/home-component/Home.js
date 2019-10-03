import React, { useEffect, useState } from "react";
import "../../starWarsModule/starWarsModule.css";
import {
  starWarMovies,
  starWarMoviesById,
  starWarsCharacter
} from "../../../services/starWarServices";
import Loader from "./loader";
import TableView from "./Table";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [singleFilm, setSingleFilm] = useState({
    isLoading: false,
    isLogo: true,
    film: []
  });
  //   const [error, setError] = useState("");
  const [character, setCharacter] = useState({ character: [], isReady: false });

  const getMovies = async () => {
    try {
      let data = await starWarMovies();
      setFilms(
        data["data"].results.sort(function(a, b) {
          return Date.parse(a.release_date) - Date.parse(b.release_date);
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getSingleMovie = async e => {
    let url = e.target.value;
    try {
      let data = await starWarMoviesById(url);
      setSingleFilm({ film: data["data"], isLoading: true, isLogo: false });
      getCharactersDetails(data["data"].characters);
    } catch (e) {
      console.log(e);
    }
  };

  const getCharactersDetails = async xters => {
    let characters = [];
    setCharacter({ isReady: false });
    for (let a = 0; a < xters.length; a++) {
      let userDetails = await starWarsCharacter(xters[a]);
      characters.push(userDetails.data);
    }
    setSingleFilm({ isLoading: false, isLogo: false });
    await setCharacter({ character: characters, isReady: true });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__header">
        <h2>For all Star wars fans</h2>
        <div className="homepage__header--select col-md-4">
          <select
            onChange={getSingleMovie}
            id="inputState"
            className="form-control"
          >
            <option>Movies...</option>
            <PopulateDropDown films={films} />
          </select>
          <p>
            Select the star wars movie of choice to see all you need to know
            about it
          </p>
        </div>
        <div></div>
      </div>
      <div className="homepage__body">
        {/* {error} */}
        <DefaultImage singleFilm={singleFilm} />
        <Loader singleFilm={singleFilm} />
        <IsTableReady character={character} singleFilm={singleFilm} />
      </div>
    </div>
  );
};

function PopulateDropDown(props) {
  const films = props.films;
  return films.map((films, index) => (
    <option key={index} value={films.url}>
      {films.title}
    </option>
  ));
}

function DefaultImage(props) {
  if (props.singleFilm.isLogo) {
    return <div className="homepage__body__logo"></div>;
  } else return null;
}

function IsTableReady(props) {
  if (props.character.isReady) {
    return (
      <TableView
        character={props.character.character}
        singleFilm={props.singleFilm}
      />
    );
  }
  return null;
}

export default HomePage;
