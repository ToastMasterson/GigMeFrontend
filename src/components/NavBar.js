import React from 'react'
import { Link } from 'react-router-dom'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import CssBaseLine from '@material-ui/core/CssBaseline'
import useScrollTrigger  from '@material-ui/core/useScrollTrigger'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import SettingsIcon from '@material-ui/icons/Settings'
import ListItemText from '@material-ui/core/ListItemText'
import ChatIcon from '@material-ui/icons/Chat'
import EventIcon from '@material-ui/icons/Event'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import {Link as NavLink, Grid, Hidden, Divider} from '@material-ui/core' 


import '../style_sheets/NavBar.css'
import { ListItemIcon } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  colorPrimary: {
    color: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuLink: {
    color: 'black',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  link: {
    color: "#5397c7"
  }
}))

function ElevationScroll(props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
}

const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
}))(MenuItem)

export default function PrimarySearchAppBar(props) {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link className={classes.menuLink} to="/profile">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
      </Link>
      <Link className={classes.menuLink} to="/settings">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </StyledMenuItem>
      </Link>
      <Link className={classes.menuLink} to="/requests">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Requests" />
        </StyledMenuItem>
      </Link>
      <Link className={classes.menuLink} to="/calendar">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </StyledMenuItem>
      </Link>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className={classes.menuLink} to="/profile">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
      </Link>
      <Link className={classes.menuLink} to="/messages">
        <StyledMenuItem onClick={handleMenuClose}>
            <ListItemIcon>
                <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
        </StyledMenuItem>
      </Link>
      <Link className={classes.menuLink} to="/requests">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Requests" />
        </StyledMenuItem>
      </Link>
      <Divider />
      <Link className={classes.menuLink} to="/settings">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </StyledMenuItem>
      </Link>
      <Link className={classes.menuLink} to="/requests">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Requests" />
        </StyledMenuItem>
      </Link>
      <Link className={classes.menuLink} to="/calendar">
        <StyledMenuItem onClick={handleMenuClose}>
          <ListItemIcon>
              <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </StyledMenuItem>
      </Link>
    </Menu>
  )

  return (
    <div className={classes.grow}>
        <CssBaseLine />
        <ElevationScroll {...props}>
          <AppBar position="static" style={{ color: '#5497c7', backgroundColor: '#2a2a2d'}}>
            <Toolbar>
              <Typography className={classes.title}>
                <Link to="/">
                  <img className="navbar-logo" src="https://i.imgur.com/mQWWPgC.png" alt="main-logo"/>
                </Link>
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Hidden xsDown>
                <Grid container spacing={2}>
                  <Grid item>
                    <NavLink className={classes.link} component={Link} to="/dashboard" >Dashboard</NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink className={classes.link} component={Link} to="/discover_artists">Artists</NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink className={classes.link}>Venues</NavLink>
                  </Grid>
                </Grid>
              </Hidden>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={0} color="secondary">
                      <ChatIcon />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        {renderMobileMenu}
        {renderMenu}
    </div>
  )
}
