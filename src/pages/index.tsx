import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.sass'

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <h1 className={styles.title}>Hello World</h1>
    </>
  )
}
