/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

import styles from './styles.module.css';

export default function Header() {
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
          <p>seuemail@email.com.br</p>
          <Link href="/logout">Sair</Link>
          <span>
            <img src="/search.svg" alt="Buscar no Orkut" />
            <input type="search" placeholder="Pesquisar no Orkut" />
          </span>
        </div>
      </nav>
    </header>
  );
};