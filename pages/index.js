import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reluctantly Cool</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6931734/6290612/css/fonts.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Reluctantly Cool</h1>

        <p className={styles.description}>
          Discovering things we want to keep from everyone else
        </p>
      </main>
    </div>
  );
}
