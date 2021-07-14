/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Footer from '../components/Footer';
import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <>
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
            <form action="">
              <h2>
                Acesse o
                <span> alurakut.br</span><br />
                com a sua conta
              </h2>
              <input type="text" placeholder="Usuário" />
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