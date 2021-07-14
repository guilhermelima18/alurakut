/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2021 Alurakut.br - 
        <a href="/"> Sobre o Alurakut.br</a> - 
        <a href="/"> Centro de segurança</a> - 
        <a href="/"> Privacidade</a> - 
        <a href="/"> Termos</a> - 
        <a href="/"> Contato</a>
      </p>
    </footer>
  );
};