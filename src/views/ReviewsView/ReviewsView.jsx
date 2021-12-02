import { useEffect, useState } from 'react';
import * as filmAPI from '../../services/themoviedb-api';
import PropTypes from 'prop-types';

export default function ReviewsView({ filmId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    filmAPI.fetchReviews(filmId).then(setReviews);
  }, [filmId]);

  return reviews && reviews.total_results !== 0 ? (
    <ul>
      {reviews.results.map(({ author, id, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this monie.</p>
  );
}

ReviewsView.propTypes = {
  filmId: PropTypes.string.isRequired,
};
