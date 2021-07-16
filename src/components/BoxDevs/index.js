/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import devs from '../../devs';
import styles from './styles.module.css';

export default function BoxDevs() {

  return (
    <div className={styles.content}>
      <h3>Meus Devs ({devs.length})</h3>
      <div className={styles.devs}>
        {
          devs.slice(0, 6).map((dev) => {
            return (
              <a href={`/users/${dev.name}`} key={dev.name} className={styles.dev}>
                <img src={dev.avatar} alt="" />
                <h4>{dev.name}</h4>
              </a>
            )
          })
        }
      </div>
      <a href="/">Ver todos</a>
    </div>
  );
};