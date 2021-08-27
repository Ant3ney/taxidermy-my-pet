import React, { useContext } from 'react';
import globalConstants from '../utilities/globalConstants';
import { GlobalContext } from '../utilities/GlobalContex';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

export default function Header(){
    const size = useContext(GlobalContext).size;
    const setNav = useContext(GlobalContext).setNav;

    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
                <ListItem button>
                    <ListItemText 
                     primary={'Home'}
                     onClick={() => {navTo('home')}}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                     primary={'Pet Hub'}
                     onClick={() => {navTo('pethub')}}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                     primary={'Create Pet'}
                     onClick={() => {navTo('createpet')}}
                    />
                </ListItem>
                <ListItem button>
                    <ListItemText 
                     primary={'Add Friend'}
                     onClick={() => {navTo('addfriend')}}
                    />
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemText 
                 primary={'Sign up'}
                 onClick={() => {navTo('signup')}}
                />
              </ListItem>
              <ListItem button>
                <ListItemText 
                 primary={'Sign in'}
                 onClick={() => {navTo('signin')}}
                />
              </ListItem>
          </List>
        </div>
    );

    if(size === 'extrasmall' || size === 'small' ){
        return(['right'].map((anchor) => (
            <React.Fragment key={anchor}>
                <span
                 style={{
                     ...{
                        backgroundColor: '#469B63',
                        width: '100%',
                        display: 'flex'
                     }
                 }}
                >
                    <Button
                     style={{
                         ...{
                             fontSize: '20px',
                             color: 'white',
                             marginRight: 'auto'
                         }
                     }}
                     onClick={() => {navTo('landing')}}
                    >
                        {globalConstants.siteName}
                    </Button>
                    <Button onClick={toggleDrawer(anchor, true)} style={{
                        ...{
                            borderRadius: 0,
                            paddingLeft: '1.25rem', 
                            paddingTop: '1.25rem',
                            paddingBottom: '1.25rem',
                          }
                     }}
                    >
                        <i className="fas fa-bars"
                         style={{
                             ...{
                                 fontSize: '20px',
                                 color: 'white'
                             }
                         }}
                        >
                        
                        </i>
                    </Button>
                </span>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
        )));
    }
    else{
        return(<AppBar
         position="static"
         style={{
             ...{
                 backgroundColor: '#469B63'
             }
         }}
        >
            <Toolbar>
                <div
                 style={{
                     ...leftNav(size)
                 }}
                >
                    <Typography 
                     variant="h6" 
                     className='clickable'
                     onClick={() => {navTo('landing')}}
                    >
                      {globalConstants.siteName}
                    </Typography>
                    <Button 
                     color="inherit"
                     onClick={() => {navTo('home')}}
                    >
                        Home
                    </Button>
                    <Button 
                     color="inherit"
                     onClick={() => {navTo('pethub')}}
                    >
                        Pet Hub
                    </Button>
                    <Button 
                     color="inherit"
                     onClick={() => {navTo('createpet')}}
                    >
                        Create Pet
                    </Button>
                    <Button 
                     color="inherit"
                     onClick={() => {navTo('addfriend')}}
                    >
                        Add Friend
                    </Button>
                </div>
                <div>
                    <Button 
                     color="inherit"
                     onClick={() => {navTo('signup')}}
                    >
                        Sign up
                    </Button>
                    <Button 
                     color="inherit"
                     onClick={() => {navTo('signin')}}
                    >
                        Sign in
                    </Button>
                </div>
            </Toolbar>
        </AppBar>);
    }
    function navTo(nav){
        setNav(nav);
    }
}

let leftNav = size => {
    return({
        display: 'flex',
        marginRight: 'auto'
    });
}