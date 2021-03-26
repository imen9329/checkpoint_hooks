import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ title, posterUrl, description, rating }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                style={{ height: "450px" }}
                variant="top"
                src={posterUrl}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <h3>{"⭐".repeat(rating)}</h3>
            </Card.Footer>
        </Card>
    );
}
export default MovieCard;
