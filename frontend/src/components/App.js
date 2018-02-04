import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { getAllCategories, getAllPostsAndComments } from '../actions'
import SideNav from './SideNav'
import Content from './Content'

import './App.css'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
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
  addButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
})

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPostsAndComments()
  }

  render() {
    const { classes } = this.props
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
            <Content />
          </main>
        </AppFrame>
      </Root>
    )
  }
}

App = withStyles(styles)(App)
export default withRouter(connect(undefined,
  { fetchCategories: getAllCategories, fetchPostsAndComments: getAllPostsAndComments }
)(App))
