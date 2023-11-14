/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@mui/material';

import { formatRating } from '../../utils';

import style from './new-releases.scss';

const NewRelease = ({ item }) => {
  const {
    backdrop_path, overview, poster_path, title, vote_average,
  } = item;

  return (
    <Paper>
      <img
        className="d-block w-100 carousel-img"
        src={`https://image.tmdb.org/t/p/w780${backdrop_path || poster_path}`}
        alt={title} />
      <div className={style.info}>
        <img
          className="d-block w-100 carousel-img poster-img"
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title} />
        <div className={style.details}>
          <Typography variant="h4">{title}</Typography>
          <div className="rating">
            <Typography variant="caption">
              {formatRating(vote_average)}
              ⭐
            </Typography>
          </div>
          <Typography variant="body1">{overview}</Typography>
        </div>
      </div>
    </Paper>
  );
};

NewRelease.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

export default NewRelease;
