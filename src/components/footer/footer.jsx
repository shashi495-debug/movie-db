/* eslint-disable linebreak-style */
import React from 'react';
import { Container, Typography } from '@mui/material';

import style from './footer.scss';

export default function Footer() {
  return (
    <Container className={style.footer}>
      <Typography variant="caption">upGrad Frontend Hackathon</Typography>
    </Container>
  );
}
