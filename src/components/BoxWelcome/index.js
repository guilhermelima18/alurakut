/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import BoxCommunities from '../BoxCommunities';
import BoxDevs from '../BoxDevs';

import styles from './styles.module.css';

export default function BoxWelcome(user) {
  const userWelcome = user.props;

  const [community, setCommunities] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const dataForm = new FormData(event.target);

    const comunidade = {
      title: dataForm.get('title'),
      imageUrl: dataForm.get('image'),
      creatorSlug: userWelcome
    };

    fetch('/api/communities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comunidade)
    })
      .then(async (response) => {
        const dados = await response.json();
        setCommunities([...community, dados.record]);
      })

    setTitle('');
    setImage('');
  };

  return (
    <div className={styles.content}>
      <div className={styles.welcomeArea}>
        <section className={styles.welcome}>
          <h1>Bem-vindo(a), {userWelcome}</h1>
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
          </div>
        </section>
        <section className={styles.actions}>
          <h2>O que você deseja fazer?</h2>
          <div className={styles.toDo}>
            <a href="/">Criar comunidade</a>
            <a href="/">Escrever depoimento</a>
            <a href="/">Deixar recado</a>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Qual vai ser o nome da sua comunidade?"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              maxLength="20"
              required
            />
            <input
              type="url"
              name="image"
              placeholder="Coloque uma URL para sua capa"
              onChange={(event) => setImage(event.target.value)}
              value={image}
              required
            />
            <button type="submit">Criar comunidade</button>
          </form>
        </section>
      </div>
      <div className={styles.relations}>
        <BoxDevs user={userWelcome} />
        <BoxCommunities />
      </div>
    </div>
  );
};