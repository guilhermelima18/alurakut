/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

export default function Header(user) {
  const userHeader = user.props;
  const [login, setLogin] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userHeader}`)
      .then(response => response.json())
      .then(data => setLogin(data))
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navegation}>
          <img src="/logo.svg" alt="Logo Alurakut" />
          <Link href="/">Início</Link>
          <Link href="/perfil">Perfil</Link>
          <Link href="/recados">Página de recados</Link>
          <Link href="/amigos">Amigos</Link>
          <Link href="/comunidades">Comunidades</Link>
        </div>
        <div className={styles.logOut}>
          <p><a href={`https://github.com/${login.login}`}>{login.login}</a></p>
          <Link href="/login">Sair</Link>
          <span>
            <img src="/search.svg" alt="Buscar no Orkut" />
            <input type="search" placeholder="Pesquisar no Orkut" />
          </span>
        </div>
      </nav>
    </header>
  );
};