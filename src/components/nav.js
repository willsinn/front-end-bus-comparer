import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  const handleLogoutClick = (e) => {
    localStorage.clear()
    document.location.reload()
    window.location.href = '/';
  }

  return (
    <div className="navigation">
      {loggedIn ? (
        <div className="navigation-wrapper">
          <div className="left-menu">
            <Menu.Item
              className="nav-menu-item"
              as={NavLink}
              to="/profile"
              name="Profile"
              active={pathname === '/profile'}
            />
            <Menu.Item
              className="nav-menu-item"
              as={NavLink}
              to="/search"
              name="Search"
              active={pathname === '/search'}
              />
          </div>
          <div className="right-menu">
            <button
              className="nav-menu-item"
              onClick={(e) => {handleLogoutClick(e)}}
            >
              Logout
            </button>
          </div>
        </div>
      ) : null }
    </div>
  );
}


const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
