import axios from "axios";
// import HandleError from "../helpers/errorhandler";

const filmsUrl = "https://swapi.co/api/films";
// const charactersUrl = "https://swapi.co/api/people";
const header = { headers: { "Content-Type": "application/json" } };

export async function starWarMovies() {
  try {
    const films = await axios.get(filmsUrl, header);
    return films;
  } catch (e) {
    console.log(e.response.code);
  }
}

export async function starWarMoviesById(url) {
  try {
    const films = await axios.get(url, header);
    return films;
  } catch (e) {
    console.log(e.response.code);
  }
}

export async function starWarsCharacter(url) {
  try {
    const xters = await axios.get(url, header);
    return xters;
  } catch (e) {
    console.log(e.response.code);
  }
}
