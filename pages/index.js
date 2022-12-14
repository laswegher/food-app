import Head from 'next/head';
import HeadlineFoods from '../components/HeadlineFoods';
import Hero from '../components/Hero';
import TopRelated from '../components/TopRelated';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Hero />

      <HeadlineFoods />

      <TopRelated />
    </div>
  );
}
