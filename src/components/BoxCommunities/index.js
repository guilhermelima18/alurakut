/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.css';

export default function BoxCommunities({ community }) {
  return (
    <div className={styles.content}>
      <h3>Minhas comunidades ({community.length})</h3>
      <div className={styles.communities}>
        {
          community.slice(0, 6).map(({ id, title, image }) => {
            return (
              <a href={`/users/${title}`} key={id} className={styles.community}>
                <img src={image} alt={title} />
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