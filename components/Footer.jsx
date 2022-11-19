import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { customLoader } from "../utils";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <Image
          src="img/logob.png"
          loader={customLoader}
          width="250px"
          height="60px"
          alt=""
        />
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <span className={styles.linkText}>WORK WITH US</span>
          </Link>
        </h1>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          2955 GOFF AVENUE <br /> GRAND RAPIDS, MICHIGAN
        </div>
        <div className={styles.cardItem}>
          CONTACT@DIGITALHAUSS.COM <br /> 269 591 9059
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          FOLLOW US: <br />
          <Link href="https://facebook.com" passHref target="_blank">
            <a target="_blank" className={styles.linkText}>
              <Image
                src="img/fb.svg"
                loader={customLoader}
                width="25px"
                height="25px"
                right="10px"
              />
            </a>
          </Link>
          <Link href="https://instagram.com" passHref target="_blank" >
            <a target="_blank" className={styles.linkText}>
              <Image
                src="img/ig.svg"
                loader={customLoader}
                width="25px"
                height="25px"
              />
            </a>
          </Link>
          <Link href="https://twitter.com" passHref target="_blank" >
            <a target="_blank" className={styles.linkText}>
              <Image
                src="img/tw.svg"
                loader={customLoader}
                width="25px"
                height="25px"
              />
            </a>
          </Link>
        </div>
        <div className={styles.cardItem}>
          © 2022 DIGITAL HAUSS, <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
