import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ getRateValue }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            onChange={getRateValue(rating)}
                        />
                        <FaStar
                            size="30"
                            className="star"
                            color={
                                ratingValue <= (rating || hover)
                                    ? "#ffc107"
                                    : "#e4e5e9"
                            }
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            key={i}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
