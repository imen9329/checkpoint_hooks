import { Button } from "react-bootstrap";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDescription.css";
const MovieDescription = () => {
    const { MovieId } = useParams();
    const movies = [
        {
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            rating: 4,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kVrqfYjkTdQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 1,
        },
        {
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            rating: 5,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6hB3S9bIaco"
                    title="YouTube video player2"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 2,
        },

        {
            title: "The Godfather",
            description:
                "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
            rating: 1,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sY1S34973zA"
                    title="YouTube video player3"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 3,
        },
        {
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rating: 4,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/EXeTwQWrcwY"
                    title="YouTube video player4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 4,
        },
        {
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            rating: 3,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_13J_9B5jEk"
                    title="YouTube video player5"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 5,
        },
        {
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rating: 2,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gG22XNhtnoY"
                    title="YouTube video player6"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 6,
        },
        {
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
            rating: 4,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/s7EdQ4FqbhY"
                    title="YouTube video player7"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 7,
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            rating: 5,
            trailer: (
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/r5X-hFf6Bwo"
                    title="YouTube video player8"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            ),
            id: 8,
        },
    ];
    const movie = movies.find((movie) => movie.id === Number(MovieId));
    return (
        <div className="movieDescription">
            {movie.trailer}
            <br />
            <p>{movie.description}</p>
            <Button variant="light">
                <Link to="/"> Home </Link>
            </Button>
        </div>
    );
};

export default MovieDescription;
