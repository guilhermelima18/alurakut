/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Header from "../components/Header";
import Profile from "../components/Profile";
import BoxWelcome from '../components/BoxWelcome';
import BoxDevs from '../components/BoxDevs';
import BoxCommunities from '../components/BoxCommunities';
import Footer from '../components/Footer';

import devs from '../devs';

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
        <BoxWelcome />
        <div className={styles.relationsArea}>
          <div className={styles.boxDevs}>
            <h3>Meus Devs <span>({devs.length})</span></h3>
            <BoxDevs />
            <a href="/">Ver todos</a>
          </div>
          <div className={styles.boxCommunities}>
            <h3>Minhas comunidades <span>({devs.length})</span></h3>
            <BoxCommunities />
            <a href="/">Ver todos</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};