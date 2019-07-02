import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import Search from './components/Search';
import './App.css'

const App = props => {
  console.log('%c APP Props: ', 'color: firebrick', props)
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route component={NotFound} />

      </Switch>
    </Fragment>
  )
}

export default withRouter(App)
//withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected
