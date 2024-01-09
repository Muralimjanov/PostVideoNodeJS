import React from 'react';
import { Link } from "react-router-dom";
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h2>Logo</h2>
          <ul>
            <li><Link className={styles.link} to="/">Home</Link></li>
            <li><Link className={styles.link} to="/post-image">Post-Image</Link></li>
            <li><Link className={styles.link} to="/post-video">Post-Video</Link></li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;