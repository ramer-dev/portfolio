import Canvas from '../components/Canvas';
import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/Home.module.css';
import Box from './canvas/box';
import Floor from './canvas/floor';
import LightBulb from './canvas/lightBulb';
import OrbitControls from '../components/OrbitControls'
import Draggable from '../components/Draggable'
import Career from '../components/page/Career';
import Profile from '../components/page/Profile';
import Project from '../components/page/Project';
import Skill from '../components/page/Skill';
import Intro from '../components/page/intro/intro';
import TopNavigationBar from '../components/header/TopNavigationBar';


export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Siniz Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <TopNavigationBar/>
      </header>

      <main className={'bg-slate-100  min-h-screen flex-row'}>
        <Intro />
        <Career />
        <Profile />
        <Project />
        <Skill />
        {/*<div className={css.scene}>*/}
          {/* <Canvas/> */}
          {/*<Canvas shadows={true} className={css.canvas}*/}
          {/*camera={{position: [-6, 7, 7]}}>*/}

          {/*  <ambientLight color={'white'} intensity={0.3}/>*/}
          {/*  <LightBulb position={[0, 3, 0]} />*/}
          {/*  <Draggable>*/}
          {/*    <Box rotateX={3} rotateY={0.2} />*/}
          {/*  </Draggable>*/}
          {/*  <OrbitControls/>*/}
          {/*  <Floor position={[0, -1, 0]} />*/}
          {/*</Canvas>*/}
        {/*</div>*/}
      </main>
      {/*  <p className={styles.description}>*/}
      {/*    Get started by editing{' '}*/}
      {/*    <code className={styles.code}>pages/index.tsx</code>*/}
      {/*  </p>*/}

      {/*  <div className={styles.grid}>*/}
      {/*    <a href="https://nextjs.org/docs" className={styles.card}>*/}
      {/*      <h2>Documentation d&rarr;</h2>*/}
      {/*      <p>Find in-depth information about Next.js features and API.</p>*/}
      {/*    </a>*/}

      {/*    <a href="https://nextjs.org/learn" className={styles.card}>*/}
      {/*      <h2>Learn &rarr;</h2>*/}
      {/*      <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://github.com/vercel/next.js/tree/canary/examples"*/}
      {/*      className={styles.card}*/}
      {/*    >*/}
      {/*      <h2>Examples &rarr;</h2>*/}
      {/*      <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*      className={styles.card}*/}
      {/*    >*/}
      {/*      <h2>Deploy &rarr;</h2>*/}
      {/*      <p>*/}
      {/*        Instantly deploy your Next.js site to a public URL with Vercel.*/}
      {/*      </p>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</main>*/}

      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '}*/}
      {/*    <span className={styles.logo}>*/}
      {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  )
}
