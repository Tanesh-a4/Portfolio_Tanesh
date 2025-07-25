import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu, socialIcons } from '../../data/data'

import { BsXLg, BsListNested } from 'react-icons/bs'
import { reducer } from '../../hooks/useReducer'
import './sidebar.scss'

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
}

const Sidebar = React.memo(() => {
  // dispatch reducer functionality
  const [state, dispatch] = useReducer(reducer, defaultOptions)
  return (
    <>
      <BsListNested
        onClick={() => dispatch({ type: 'OPEN_NAVBAR' })}
        className="menu-icon switch__color"
      />
      <aside
        className={`${state.openCloseNav1 ? 'aside open-sidebar' : 'aside'} ${
          state.showAside1 ? 'aside show-asideBar' : 'aside'
        }`}
      >
        <div className="aside-wrapper">
          <BsXLg
            onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
            className="close-btn switch__color"
          />
          <Link
            className="logo-section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: '4',
            }}
            to="/"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 240"
            className="sidebar__logo"
          >
            <path
              className="fill__color"
              d="M 14.426 77.326 C 54.426 24.718 179.602 36.68 219.602 71.752 C 206.268 95.134 188.509 98.589 155.176 86.899 C 121.842 75.209 74.129 82.511 20.796 100.047 L 14.426 77.326 Z"
            />

            <path
              className="fill__color"
              d="M 137.122 97.168 C 126.317 125.266 108.226 137.882 109.116 156.098 C 109.424 162.403 113.445 169.776 119.494 178.296 C 122.379 182.36 123.574 186.378 129.073 191.24 C 148.908 208.776 128.825 235.326 102.213 230.62 C 88.88 213.953 66.758 184.574 70.091 151.24 C 70.315 130.338 83.292 90.128 99.611 88.782 C 127.878 86.45 144.753 97.451 137.122 97.168 Z"
            />

            <path
              d="M 15.619 75.221 C 40.539 34.186 169.528 30.627 219.601 72.434 C 206.268 99.101 185.323 93.423 151.99 80.09 C 118.657 66.757 74.129 78.452 20.796 98.452 M 140.306 95.175 C 95.898 171.874 102.637 151.652 131.86 193.628 C 148.558 217.613 131.268 230.767 104.601 227.434 C 91.268 210.767 64.767 184.174 68.1 150.84 C 68.1 120.84 103.015 78.548 89.738 98.758"
              stroke="black"
              stroke-width="5"
              fill="none"
            />
          </svg>
            <span className="switch__color" style={{ fontSize: '1.2rem' }}>
             Tanesh
            </span>
          </Link>
          <ul className="side-link">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                    className={({ isActive }) => {
                      return isActive ? 'nav__links active-links' : 'nav__links'
                    }}
                    to={url}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className="social-icon">
            {socialIcons.map((icons, index) => {
              const { icon, url } = icons
              return (
                <a href={url} key={index}>
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
})

export default Sidebar
