import React, { useState, Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar/MyNavBar";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {
    const [movies, setMovies] = useState([
        {
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            rating: 4,
            trailer: "https://youtu.be/kVrqfYjkTdQ",
        },
        {
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            rating: 5,
            trailer: "https://youtu.be/6hB3S9bIaco",
        },

        {
            title: "The Godfather",
            description:
                "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
            rating: 1,
            trailer: "https://youtu.be/sY1S34973zA",
        },
        {
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rating: 4,
            trailer: "https://youtu.be/EXeTwQWrcwY",
        },
        {
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            rating: 3,
            trailer: "https://youtu.be/_13J_9B5jEk",
        },
        {
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rating: 2,
            trailer: "https://youtu.be/gG22XNhtnoY",
        },
        {
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
            rating: 4,
            trailer: "https://youtu.be/s7EdQ4FqbhY",
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            rating: 5,
            trailer: "https://youtu.be/r5X-hFf6Bwo",
        },
    ]);

    const [searching, setSearching] = useState("");

    const [rateValue, setRateValue] = useState(0);

    const getRateValue = (input) => {
        setRateValue(input);
    };

    const getNewMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    return (
        <div className="App">
            <MyNavBar setSearching={setSearching} getRateValue={getRateValue} />
            <div className="addMovieBtn">
                <AddMovie getNewMovie={getNewMovie} />
            </div>
            <MovieList
                movies={movies}
                searchedValue={searching}
                rateValue={rateValue}
            />
            <footer className="Footer">
                <h6
                    style={{
                        fontStyle: "italic",
                        color: "#fff",
                    }}
                >
                    ©️ CopyRights are reserved 2021/2022
                </h6>
            </footer>
        </div>
    );
}

export default App;
