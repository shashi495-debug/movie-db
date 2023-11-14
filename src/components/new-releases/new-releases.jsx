import React, { useEffect, useReducer } from 'react';
import { Container, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import NewRelease from './item';
import { getNewReleases } from '../../api';

import style from '../../App.scss';

const initState = {
  movies: [],
};

const ActionType = {
  SET_MOVIE_LIST: 'SET',
};

const NewReleases = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ActionType.SET_MOVIE_LIST:
        return {
          ...state,
          movies: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    getNewReleases('/movie/now_playing').then((response) => {
      dispatch({
        type: ActionType.SET_MOVIE_LIST,
        payload: response.data.results,
      });
    });
  });

  return (
    <div className="now-playing-container">
      <Container>
        <Typography variant="h3" className={style.pageTitle}>
          New Releases🍿
        </Typography>
        <Carousel indicators autoPlay cycleNavigation>
          {state.movies.map((movie) => (
            <NewRelease key={movie.id} item={movie} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default NewReleases;
