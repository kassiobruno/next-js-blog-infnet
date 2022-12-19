import Head from 'next/head';
import styles from '../styles/home.module.scss'
import Image from 'next/image';
import techsImage from '../../public/images/techs.svg';
import Link from 'next/link';
import {getPrismicClient} from '../services/prismic';
import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers'

type Content = {
    title: string;
    titleContent: string;
    linkAction: string;
    mobileTitle: string;
    mobileContent: string;
    mobileBanner: string;
    webTitle: string;
    webContent: string;
    webBanner: string;
}

interface ContentProps {
  content: Content
}


export default function Home({ content }: ContentProps) {
  //console.log(content)

  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>

          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>{content.titleContent}</span><br/>
            <a href="/account/signin">
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
            
          </section>

          <picture><img src={content.mobileBanner} alt='conteudo mobile'/></picture>

        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <section>
            <h2>{content.mobileTitle}</h2>
            <span>{content.mobileContent}</span>
          </section>

          

        </div>

        <hr className={styles.divisor}/>

        

        <div className={styles.sectionContent}>

        <picture><img src={content.webBanner} alt='conteudo web' style={{padding: "20px"}}/></picture>

          <section>
            <h2>{content.webTitle}</h2>
            <span>{content.webContent}</span>
          </section>


        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt='Tecnologias'></Image>
          <h2>Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nivel.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>

          <Link href="/account/signin">
            <button>COMEÇAR AGORA</button>
          </Link>
        </div>

      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {  
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  //console.log(response.results[0].data);
  const {
    title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data;

  const content = {
    title: prismicH.asText(title),
    titleContent: prismicH.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: prismicH.asText(mobile),
    mobileContent: prismicH.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: prismicH.asText(title_web),
    webContent: prismicH.asText(web_content),
    webBanner: web_banner.url
  };

  return {
    props: {
      content
    },
    revalidate: 60 * 2 // a cada 2 min
  }
}
