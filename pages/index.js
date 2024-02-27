import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.png" />

      </Head>
      <section className={`${utilStyles.headingMd}`}>
        <h2 className={utilStyles.headingLg}>About Me</h2>
        <ul>
        <li>MS Cybersecurity @ <a href="https://www.nyu.edu/"> New York University </a></li>
        <li>Ex Senior Software Engineer @ <a href="https://www.sentinelone.com/" >SentinelOne</a></li>
        <li>Ex Founder's Fellow @ <a href="https://www.tortoise.pro/">Tortoise</a></li>
        <li>New York</li>
        </ul>
        </section>
        <section className={`${utilStyles.headingMd}`}>
        <h2 className={utilStyles.headingLg}>Links</h2>
        <ul className={utilStyles.list}>
          <li>
            <a
              target="_blank"
              id="profile-link"
              href="https://mayankramnani.com"
              ><i className="fas fa-envelope"></i>
              <span>mayankr99 &lt;at&gt; gmail &lt;dot&gt; com</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              id="profile-link"
              href="https://github.com/mayank-ramnani/"
              ><i className="fab fa-github"></i
              ><span>mayank-ramnani</span></a
            >
          </li>
          <li>
            <a
              target="_blank"
              id="profile-link"
              href="https://www.linkedin.com/in/mayank-ramnani"
              ><i className="fab fa-linkedin"></i
              ><span>Mayank Ramnani</span></a
            >
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}