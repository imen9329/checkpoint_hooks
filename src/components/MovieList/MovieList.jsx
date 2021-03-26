import React from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, searchedValue, rating, ratingValue }) => {
    return (
        <div className="movies">
            {movies
                .filter((movie) =>
                    movie.title
                        .toLowerCase()
                        .includes(searchedValue.toLowerCase())
                )
                .map((e, index) => (
                    <MovieCard
                        title={e.title}
                        description={e.description}
                        posterUrl={e.posterUrl}
                        rating={e.rating}
                        key={index}
                    />
                ))}
        </div>
    );
};

export default MovieList;
