import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="flex-space_between-center w-100per px-2 bg-white p-2 navbar">
      <Link to={"/"}>
        <h3 className="navbar bold">LightsOut</h3>
      </Link>

      <ul className="flex-space_between-center navbar">
          <li className="mx-2 flex-center-center navbar">
            <span className="material-icons icon-s3 navbar">
              account_circle
            </span>{" "}
            <h4 className="navbar">username</h4>
          </li>
          <li className="mx-2">
            <Link to={"/login"}>
              <button className="btn-primary-confirm">Login</button>
            </Link>
          </li>
      </ul>
    </nav>
  )
}

export {NavBar}