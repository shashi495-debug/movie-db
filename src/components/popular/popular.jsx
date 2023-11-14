/* eslint-disable linebreak-style */
import React, { useEffect, useReducer } from 'react';
import { Container, Grid, Typography } from '@mui/material';

import PopularMovie from './item';
import { getPopular } from '../../api';

import style from '../../App.scss';

const initState = {
  movies: [],
};

const ActionType = {
  SET_MOVIE_LIST: 'SET',
};

const Popular = () => {
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
    getPopular()
      .then((response) => {
        dispatch({
          type: ActionType.SET_MOVIE_LIST,
          payload: response.data.results,
        });
      });
  });

  return (
    <Container>
      <Typography variant="h3" className={style.pageTitle}>
        What&#39;s Hot🔥
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
        {state.movies.map((item) => (
          <Grid item xs={3} zeroMinWidth key={item.id}>
            <PopularMovie item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Popular;
