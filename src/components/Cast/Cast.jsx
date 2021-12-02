import { useEffect, useState } from 'react';
import * as filmAPI from '../../services/themoviedb-api';
import noImagePlaceholder from '../../images/noImagePlaceholder.svg';
import s from './Cast.module.css';
import PropTypes from 'prop-types';

export default function Cast({ filmId }) {
  const { IMG_URL } = filmAPI;
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    filmAPI.fetchCredits(filmId).then(setCredits);
  }, [filmId]);

  return (
    <ul className={s.castList}>
      {credits &&
        credits.cast.map(({ profile_path, name, id, character }) => (
          <li className={s.castItem} key={id}>
            <img
              src={
                profile_path
                  ? `${IMG_URL('w185') + profile_path}`
                  : noImagePlaceholder
              }
              alt={name}
              width="185"
              height="278"
            />
            <div className={s.castInfo}>
              <h4>{name}</h4>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

Cast.propTypes = {
  filmId: PropTypes.string.isRequired,
};
