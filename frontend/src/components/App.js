import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import SideNav from './SideNav'
import PostList from './PostList'

import styled from 'styled-components'

const drawerWidth = '240px'

const Root = styled.div`
  width: 100%;
  min-height: 768px;
  z-index: 1;
  overflow: hidden;
`
const AppFrame = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 768px;
  background-color: #fafafa;
`
const OverrideAppBar = styled(AppBar)`
  position: absolute !important;
  width: calc(100% - ${drawerWidth}) !important;
  margin-left: ${drawerWidth} !important;
  order: 1 !important;
`

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  titleHeader: {
    marginTop: '10px',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
    paddingLeft: theme.spacing.unit * 15,
    paddingRight: theme.spacing.unit * 15,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
})

type Props = {
  classes: any,
}

const App = (props: Props) => {
  const { classes } = props

  return (
    <Root>
      <AppFrame>
        <OverrideAppBar>
          <Toolbar>
            <Link to='/' className='no-decor'>
              <Typography type='title' noWrap className='app-bar-title'>
                READABLE
              </Typography>
            </Link>
          </Toolbar>
        </OverrideAppBar>
        <Drawer type='permanent' classes={{ paper: classes.drawerPaper }}>
          <div className={classes.drawerHeader} />
          <Divider />
          <SideNav />
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route exact path='/' component={PostList} />
            <Route exact path='/:category' component={PostList} />
          </Switch>
        </main>
      </AppFrame>
    </Root>
  )
}

export default withStyles(styles)(App);
