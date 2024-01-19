import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";



 const Nav: React.FC = () => {


  return (
    <div className={styles.NavContainer}>
      <h1 className={styles.HOne}>
         Bandage
      </h1>
      <div className={styles.ListItems}>
        <div className={styles.LinkLists}>
          <Link href="https://www.instagram.com/" className={styles.linklist} passHref>Home</Link>
          <Link href="https://www.youtube.com/" className={styles.linklist} passHref>Shop</Link>
          <Link href="https://www.facebook.com/" className={styles.linklist} passHref>About</Link>
          <Link href="https://twitter.com/" className={styles.linklist} passHref>Blog</Link>
          <Link href="https://twitter.com/" className={styles.linklist} passHref>Contact</Link>
          <Link href="https://twitter.com/" className={styles.linklist} passHref>Pages</Link>
        </div>
        <div className={styles.RegisterForm}>
         <Link href="https://twitter.com/" className={styles.linklist} passHref>Login</Link>
           /
          <Link href="https://twitter.com/" className={styles.linklist} passHref>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;
