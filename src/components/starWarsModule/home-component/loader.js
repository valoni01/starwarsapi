import React from "react";
import load from "../../../images/loader1.png";

function Loader(props) {
  if (props.singleFilm.isLoading) {
    return (
      <div>
        <marquee>{props.singleFilm.film.opening_crawl}</marquee>;
        <img
          className="homepage__body--loader"
          src={load}
          alt="Fetching Data..."
        />
      </div>
    );
  } else return null;
}

export default Loader;
