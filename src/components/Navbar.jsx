import React from "react"
import { Link } from "gatsby"
import styles from './navbar.module.scss'

export const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link title="Going back Home !" to="/" activeClassName={styles.activeItem}>Home</Link>
          </li>
          <li>
            <Link to="/hello" activeClassName={styles.activeItem}>Hello</Link>
          </li>
        </ul>
      </nav>
    
  )
}
