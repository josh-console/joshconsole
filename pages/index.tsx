import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Console</title>
        <meta name="description" content="Josh Console" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Josh Console
        </h1>

        <p className={styles.description}>
          Workin' on it
        </p>
      </main>

      <footer className={styles.footer}>
      © 2022 Josh Console
      </footer>
    </div>
  )
}

export default Home
