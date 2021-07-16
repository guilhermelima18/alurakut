/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';

import styles from './styles.module.css';

export default function BoxDevs() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/guilhermelima18/followers')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Aconteceu algum erro " + response.status);
      })
      .then(usersData => {
        setFollowers(usersData);
      })
      .catch(error => {
        console.error(error)
      })
  }, []);

  return (
    <div className={styles.content}>
      <h3>Meus Seguidores ({followers.length})</h3>
      <div className={styles.devs}>
        {
          followers.slice(0, 6).map(({ id, avatar_url, login }) => {
            return (
              <a
                key={id}
                href={`https://github.com/${login}`}
                target="_blank"
                rel="noreferrer"
                className={styles.dev}
              >
                <img src={avatar_url} alt={login} />
                <h4>{login}</h4>
              </a>
            )
          })
        }
      </div>
      <a href="/">Ver todos</a>
    </div>
  );
};