import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import PagesIcon from '@material-ui/icons/Pages';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  },
  
}));







export default function TopAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [searchString, setSearchString] = useState(null);
  const [showMenu, setShowMenu] = useState(false);


  const handleChange = (event) => {
    
      const search_string = String(event.target.value);
      setSearchString(search_string.trim());
  } 

  const handleKeyPress = (event) => {
    
    //console.log(`Pressed keyCode ${event.key}`);

      if (event.key === 'Enter') {
          //console.log({'search string': searchString});         
          history.push(`/terms/search/${searchString}`);
          event.preventDefault();
      }
  } 

  const listMenuItems = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={()=>setShowMenu(false)}
      onKeyDown={()=>setShowMenu(false)}
    >
      <List>
        <ListItem button key="menu-item-home" component={RouterLink} to="/home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>

      </List>
      <Divider />
      <List>
      <ListItem button key="menu-item-works" component={RouterLink} to="/works">
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary="Maintain Works" />
        </ListItem>          
        <ListItem button key="menu-item-authors" component={RouterLink} to="/authors">
              <ListItemIcon><PeopleAltIcon /></ListItemIcon>
              <ListItemText primary="Maintain Authors" />
        </ListItem>   
        <ListItem button key="menu-item-genres" component={RouterLink} to="/genres">
              <ListItemIcon><PagesIcon /></ListItemIcon>
              <ListItemText primary="Maintain Genres" />
        </ListItem>         
        <ListItem button key="menu-item-topics" component={RouterLink} to="/topics">
              <ListItemIcon><CenterFocusStrongIcon /></ListItemIcon>
              <ListItemText primary="Maintain Topics" />
        </ListItem>   
      </List>
    </div>
  );
  

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick= {() => setShowMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Vietnamese Text Corpora
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

              onKeyPress={handleKeyPress}

              onChange={handleChange}

              
            />
          </div>
        
        </Toolbar>
        <Drawer anchor="left" open={showMenu} onClose = {()=>setShowMenu(false)}>
            {listMenuItems("left")}
        </Drawer>
      </AppBar>
                  
      </div>
  );
}
