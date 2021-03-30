import React from "react";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, searchedValue, rateValue }) => {
    return (
        <div className="movies">
            {movies
                .filter(
                    (movie) =>
                        movie.title
                            .toLowerCase()
                            .includes(searchedValue.toLowerCase()) &&
                        movie.rating >= rateValue
                )
                .map((e, index) => (
                    <MovieCard
                        title={e.title}
                        description={e.description}
                        trailer={e.trailer}
                        posterUrl={e.posterUrl}
                        rating={e.rating}
                        id={e.id}
                        key={index}
                    />
                ))}
        </div>
    );
};

export default MovieList;
