import Head from 'next/head';
import styles from'./styles.module.scss'

export default function Posts(){
  return (
    <>
    <Head>
      <title> Posts | Ignews </title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time>16 de maio de 2022</time>
          <strong>Na minha máquina funciona</strong>
          <p>Como não ser surpreendido por um mal funcionamento em outro ambiente.</p>
        </a>
        <a href="#">
          <time>16 de maio de 2022</time>
          <strong>Na minha máquina funciona</strong>
          <p>Como não ser surpreendido por um mal funcionamento em outro ambiente.</p>
        </a>
        <a href="#">
          <time>16 de maio de 2022</time>
          <strong>Na minha máquina funciona</strong>
          <p>Como não ser surpreendido por um mal funcionamento em outro ambiente.</p>
        </a>
      </div>
    </main>
    </>
  );
}