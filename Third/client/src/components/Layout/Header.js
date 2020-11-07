import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';

const styles = {
	root: {
		flexGrow: 1
	},
    logo:{
        color:'#fff',
        fontSize: 30,
        textTransform: 'uppercase'
    }
}

const Header= ({classes})=>{
  return (
    <div className={classes.root}>
    <AppBar position="static">
    <Toolbar>
    
    <Link to="/" className={classes.logo}>Twit</Link>
    </Toolbar>
    </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
