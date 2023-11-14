import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar, Box, IconButton, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import style from './header.scss';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={style.header}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className={style.title}>Movie DB</span>
          </Typography>
          <Link to="/new" className={style.link}>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              New Releases
            </Typography>
          </Link>
          <Link to="/hot" className={style.link}>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              What&#39;s Hot
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
