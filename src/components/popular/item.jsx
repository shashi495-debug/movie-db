/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@mui/material';

import { formatRating } from '../../utils';

import style from './popular.scss';

const PopularMovie = ({ item }) => {
  const {
    poster_path, title, name, vote_average,
  } = item;

  return (
    <Container className={style.popularMovie}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
          alt={title} />
      </div>
      <div>
        <Typography variant="body1">
          {formatRating(vote_average)}
          ⭐
        </Typography>
        <Typography variant="h6">{title || name}</Typography>
      </div>
    </Container>
  );
};

PopularMovie.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

export default PopularMovie;
