import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Josh Console</title>
                <meta name="description" content="Josh Console" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Josh Console</h1>
                <p className={styles.description}>Workin&apos; on it</p>
            </main>
        </div>
    );
};

export default Home;
