import styles from "../styles/Contact.module.css"
import Circle from "../components/Circle"
import { Head } from "next/dist/pages/_document";

const contact = () => {
    return (
        <>
            <Head>
                <title>{`Digital Hauss - ${product.title}`}</title>
                <meta name="description" content="Digital Hauss - Contact" />
            </Head>
            <div className={styles.container}>
                <Circle backgroundColor="gray" left="-40vh" top="-60vh"/>
                <Circle backgroundColor="lightblue" right="-30vh" bottom="-60vh"/>
                <h1 className={styles.title}>GET IT TOUCH</h1>
                <form className={styles.form}>
                    <input className={styles.inputS} placeholder="Username"/>
                    <input className={styles.inputS} placeholder="Phone"/>
                    <input className={styles.inputL} placeholder="Email"/>
                    <input className={styles.inputL} placeholder="Subject"/>
                    <textarea className={styles.textArea} placeholder="Message" rows={6}/>
                    <button className={styles.buttonF}>SUBMIT</button>
                </form>
            </div>
        </>
    )
}

export default contact