import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { customLoader } from "../utils";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="img/logob.png" loader={customLoader} width="250px" height="60px" alt="" href="/"/>
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/mktg">MARKETING</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/develop">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photo">PHOTOGRAPHY</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={() => setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
      <li className={styles.menuItem}>
          <Link href="/products/mktg">MARKETING</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/develop">DEVELOPMENT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/photo">PHOTOGRAPHY</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
