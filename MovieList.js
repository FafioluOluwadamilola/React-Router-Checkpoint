// src/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Card key={movie.title} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Link to={`/movie/${movie.title}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
