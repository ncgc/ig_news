import Head from 'next/head';
import styles from'./styles.module.scss'
import * as prismic from '@prismicio/client'
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';

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

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient()
  const response = await client.get({
    predicates: prismic.predicate.at('document.type', 'post' )
  })
  
  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}
