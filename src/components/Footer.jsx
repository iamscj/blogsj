import React from 'react'
import Logo from "../img/logo.png"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Link to="/">
          <div class="logo">
            <img src={Logo} alt='sj' />
          </div>
        </Link>
      <span>Copyright © {currentYear}</span>
      </footer>
  )
}

export default Footer
