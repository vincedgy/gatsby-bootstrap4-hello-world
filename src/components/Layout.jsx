import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import styles from "./layout.module.scss"

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}
