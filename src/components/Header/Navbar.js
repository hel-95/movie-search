import React, { useState } from 'react';
import {
  List,
  ListItem,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    justifyContent: 'space-between',
  },

  menuList: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  burgerMenu: {
    display: 'none',
    paddingRight: '16px',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },

  linkStyle: {
    justifyContent: 'center',
    color: '#fff',
    outline: 'none',
    fontSize: '20px',
    maxWidth: '175px',
    '&:hover': {
      color: '#c6ff00',
      opacity: 1,
      outline: 'none',
    },
  },
  activeLink: {
    color: '#c6ff00',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' color='primary'>
      <List component='nav'>
        <ListItem component='div' className={classes.container}>
          <ListItem component={NavLink} to='/' style={{ width: 'auto' }}>
            <img
              src={logo}
              alt='logo'
              style={{ width: '110px', padding: '5px 0 5px 15px' }}
            />
          </ListItem>

          <div className={classes.burgerMenu}>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
                component={NavLink}
                to={`/comingsoon/${1}`}
              >
                Coming soon
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={NavLink}
                to={`/nowplaying/${1}`}
              >
                Now playing
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={NavLink}
                to={`/genres`}
              >
                Genres
              </MenuItem>

              <MenuItem
                onClick={handleClose}
                component={NavLink}
                to={'/search'}
              >
                Search
              </MenuItem>
            </Menu>
          </div>

          <ListItem component='div' className={classes.menuList}>
            <ListItem
              component={NavLink}
              to={`/comingsoon/${1}`}
              className={classes.linkStyle}
              activeClassName={classes.activeLink}
            >
              Coming soon
            </ListItem>
            <ListItem
              component={NavLink}
              to={`/nowplaying/${1}`}
              className={classes.linkStyle}
              activeClassName={classes.activeLink}
            >
              Now playing
            </ListItem>
            <ListItem
              component={NavLink}
              to='/genres'
              className={classes.linkStyle}
              activeClassName={classes.activeLink}
            >
              Genres
            </ListItem>
            <ListItem
              component={NavLink}
              to='/search'
              className={classes.linkStyle}
              activeClassName={classes.activeLink}
            >
              <SearchRoundedIcon />
              &nbsp; Search
            </ListItem>
          </ListItem>
        </ListItem>
      </List>
    </AppBar>
  );
};

export default Navbar;
