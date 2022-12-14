import Head from 'next/head';
import Styles from './Index.module.css';
import SwitchListeSuggestion from '../src/components/Menu/SwitchListeSuggestion';
import BodyBox from '../src/components/BodyBox';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ma liste de courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Styles.box}>
        <h1 className={Styles.Title}>Ma liste de couses</h1>
        <SwitchListeSuggestion />
        < BodyBox />
      </div>

    </div>
  )
}
