/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function BoxCommunities() {
  const [community, setCommunities] = useState([]);
  const tokenAPI = '644e00282a33c9f4b8c485cffc5336';

  useEffect(() => {
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${tokenAPI}`
      },
      body: JSON.stringify({
        query: `{
          allCommunities {
            id
            imageUrl
            title
            creatorSlug
          }
        }`
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Aconteceu um erro: " + response.status)
      })
      .then(dados => setCommunities(dados.data.allCommunities))
      .catch(error => console.error(error))
  }, []);

  return (
    <div className={styles.content}>
      <h3>Personagens da Série ({community.length})</h3>
      <div className={styles.communities}>
        {
          community
            .slice(0, 6)
            .map(({ id, imageUrl, title }) => {
              return (
                <a
                  key={id}
                  href={`/comunidades/${id}`}
                  className={styles.community}
                >
                  <img src={imageUrl} alt={title} />
                  <span>{title}</span>
                </a>
              )
            })
        }
      </div>
      <a href="">Ver todos</a>
    </div>
  );
};