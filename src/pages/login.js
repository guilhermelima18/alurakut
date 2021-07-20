/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import nookies from 'nookies';
import Footer from '../components/Footer';
import styles from '../styles/Login.module.css';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (user === '') {
      alert("Prencha o campo Usuário para continuar!!!")
    } else {
      fetch('https://alurakut.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          githubUser: user
        })
      })
        .then(async (response) => {
          const responseData = await response.json();
          const token = responseData.token;

          nookies.set(null, 'USER_TOKEN', token, {
            path: '/',
            maxAge: 86400 * 7 // Segundos de um dia multiplicado por 7
          })
          router.push('/');
        })
    }
  };

  return (
    <>
    <Head>
      <title>Alurakut | Login</title>
    </Head>
      <div className={styles.loginContainer}>
        <div className={styles.content}>
          <section className={styles.apresentation}>
            <img src="/logo.svg" alt="" />
            <h3>
              <span>Conecte-se </span>
              aos seus amigos e familiares usando recados e mensagens instantâneas
            </h3>
            <h3>
              <span>Conheça </span>
              novas pessoas através de amigos de seus amigos e comunidades
            </h3>
            <h3>
              <span>Compartilhe </span>
              seus vídeos, fotos e paixões em um só lugar
            </h3>
          </section>
          <section className={styles.login}>
            <form action="" onSubmit={handleSubmit}>
              <h2>
                Acesse o
                <span> alurakut.br</span><br />
                com a sua conta
              </h2>
              <input type="text" placeholder="Usuário" value={user} onChange={(event) => setUser(event.target.value)} />
              <button type="submit">Login</button>
            </form>
            <div className={styles.member}>
              <p>
                Ainda não é membro? <br />
                <a href="/">ENTRAR JÁ</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};