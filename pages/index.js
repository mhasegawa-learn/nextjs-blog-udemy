import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import {getPostData} from "../lib/post"

const inter = Inter({ subsets: ["latin"] });

//SSGの場合
export async function getStaticProps () {
  const allPostsData = getPostData();//id,title,date,thumbnail
  console.log(allPostsData);

  return {
    props:{
      allPostsData
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>私はエンジニアです。好きなフレームワークはnextjsです</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail}) => (
            <article id={id} className={utilStyle.headingMd}>
            <Link href={`/posts/${id}`}>
              <img src={thumbnail} className={styles.thumbnailImage}/>
            </Link>
            <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                {title}
            </Link>
            <br/>
            <small className={utilStyle.lightText}>
              {date}
            </small>
          </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
