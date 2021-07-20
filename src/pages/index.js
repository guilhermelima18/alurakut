import Head from 'next/head';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import Header from "../components/Header";
import Profile from "../components/Profile";
import BoxWelcome from '../components/BoxWelcome';

import styles from '../styles/Home.module.css';

export default function Home(props) {
  const user = props.githubUser;

  return (
    <>
      <Head>
        <title>Alurakut | Página Inicial</title>
      </Head>
      <Header props={user} />
      <div className={styles.content}>
        <Profile props={user} />
        <BoxWelcome props={user} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { githubUser } = jwt.decode(token);

  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      'Authorization': `${token}`
    }
  })
    .then(response => response.json())

  console.log('Autenticado', isAuthenticated)

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      githubUser
    },
  }
};