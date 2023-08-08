import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Sou um desenvolvedor web júnior apaixonado por criar experiências
          interativas na web. Atualmente, estou focado em estudar e aprimorar
          minhas habilidades em React e Next.js. <br />
          Tenho uma mente curiosa e sede de aprendizado, estou sempre em busca
          de novos desafios e oportunidades para expandir meus conhecimentos.{' '}
          <br />
          Estou entusiasmado em trabalhar em projetos que envolvam a criação de
          interfaces dinâmicas e responsivas, e estou empenhado em escrever
          código limpo e eficiente. Estou animado para fazer parte deste mundo
          em constante evolução da tecnologia web e contribuir para o sucesso de
          projetos inovadores.
        </p>
        <br />
        <p>
          (Este é apenas um simples website construído com a ajuda deste{' '}
          <a href="https://nextjs.org/learn">tutorial Next.js</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
