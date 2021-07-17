import Head from 'next/head';
import Header from "../components/Header";
import Profile from "../components/Profile";
import BoxWelcome from '../components/BoxWelcome';

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
      </div>
    </>
  );
};