import Head from "next/head";
import Link from "next/link";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={style.title}>Homepage</h1>
        <p className={style.text}>lorem</p>
        <p className={style.text}>lorem</p>
        <Link href="/ninjas">
          <a className={style.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
