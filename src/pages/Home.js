/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Guilherme Lima</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <Profile />
        <div className={styles.welcomeArea}>
          <section className={styles.welcome}>
            <h1>Bem-vindo(a), Guilherme</h1>
            <h5>
              Sorte de hoje:
              <span> O melhor profeta do futuro é o passado</span>
            </h5>
            <div className={styles.itemsGroup}>
              <div className={styles.item}>
                <p>Recados</p>
                <a href="/">
                  <img src="/icons/book.svg" alt="Recados" />
                  0
                </a>
              </div>
              <div className={styles.item}>
                <p>Fotos</p>
                <a href="/">
                  <img src="/icons/camera.svg" alt="Fotos" />
                  0
                </a>
              </div>
              <div className={styles.item}>
                <p>Vídeos</p>
                <a href="/">
                  <img src="/icons/video.svg" alt="Vídeos" />
                  0
                </a>
              </div>
              <div className={styles.item}>
                <p>Fãs</p>
                <a href="/">
                  <img src="/icons/star.svg" alt="Fãs" />
                  0
                </a>
              </div>
              <div className={styles.item}>
                <p>Mensagens</p>
                <a href="/">
                  <img src="/icons/email.svg" alt="Mensagens" />
                  0
                </a>
              </div>
              <div className={styles.item}>
                <p>Confiável</p>
                <a href="/">
                  <img src="/icons/smile.svg" alt="Confiável" />
                  <img src="/icons/smile.svg" alt="Confiável" />
                  <img src="/icons/smile.svg" alt="Confiável" />
                </a>
              </div>
              <div className={styles.item}>
                <p>Legal</p>
                <a href="/">
                  <img src="/icons/cube.svg" alt="Legal" />
                  <img src="/icons/cube.svg" alt="Legal" />
                  <img src="/icons/cube.svg" alt="Legal" />
                </a>
              </div>
              <div className={styles.item}>
                <p>Sexy</p>
                <a href="/">
                  <img src="/icons/heart.svg" alt="Sexy" />
                  <img src="/icons/heart.svg" alt="Sexy" />
                  <img src="/icons/heart.svg" alt="Sexy" />
                </a>
              </div>
            </div>
          </section>
          <section className={styles.actions}>
            <h2>O que você deseja fazer?</h2>
            <div className={styles.toDo}>
              <a href="/">Criar comunidade</a>
              <a href="/">Escrever depoimento</a>
              <a href="/">Deixar recado</a>
            </div>
            <input type="text" placeholder="Qual vai ser o nome da sua comunidade?" />
          </section>
        </div>
        <div className={styles.relationsArea}>

        </div>
      </div>
    </>
  );
};