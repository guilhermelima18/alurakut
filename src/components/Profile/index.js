/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';

import styles from './styles.module.css';

export default function Profile(user) {
  const userProfile = user.props;
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userProfile}`)
      .then(response => response.json())
      .then(data => setName(data))
  }, []);
  
  return (
    <div className={styles.cardProfile}>
      <div className={styles.header}>
        <img
          src={`https://github.com/${userProfile}.png`}
          alt="Imagem de perfil"
        />
        <h2>
          <a href={`https://github.com/${userProfile}`} target="_blank" rel="noreferrer">
            {name.name}
          </a>
        </h2>
        <span>
          Brasil
        </span>
      </div>
      <main className={styles.main}>
        <p>
          <a href="">
            <img src="/icons/user.svg" alt="Perfil" />
            Perfil
          </a>
          <a href="">editar</a>
        </p>
        <a href="">
          <img src="/icons/book.svg" alt="Recados" />
          Recados
        </a>
        <a href="">
          <img src="/icons/camera.svg" alt="Fotos" />
          Fotos
        </a>
        <a href="">
          <img src="/icons/video.svg" alt="Vídeos" />
          Vídeos
        </a>
        <a href="">
          <img src="/icons/sunny.svg" alt="Depoimentos" />
          Depoimentos
        </a>
      </main>
      <div className={styles.apps}>
        <span>Apps</span>
        <a href="">
          <img src="/icons/add.svg" alt="Adicionar Apps" />
          Adicionar apps
        </a><br />
        <a href="">
          <img src="/icons/list.svg" alt="Listas" />
          Listas
        </a>
        <a href="">
          <img src="/icons/update.svg" alt="Atualizações" />
          Atualizações
        </a>
        <a href="">
          <img src="/icons/wrench.svg" alt="Configurações" />
          Configurações
        </a>
      </div>
    </div>
  );
};