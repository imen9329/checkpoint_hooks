import React from "react";
import { Route, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import MovieDescription from "../MovieDescription/MovieDescription";

function MovieCard({ title, posterUrl, rating, id }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                style={{ height: "450px" }}
                variant="top"
                src={posterUrl}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Button>
                        <Link
                            to={`/MovieDescription/${id}`}
                            style={{ color: "#fff" }}
                        >
                            See Description
                        </Link>
                    </Button>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <h3>{"⭐".repeat(rating)}</h3>
            </Card.Footer>
        </Card>
    );
}
export default MovieCard;
