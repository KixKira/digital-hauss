import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
import { customLoader } from "../utils";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#D0D0CE" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#d0d0ce" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>DIGITAL HAUSS</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
      </div>
      <div className={styles.card}>
        <Image
          loader={customLoader}
          src="img/card2.png"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
