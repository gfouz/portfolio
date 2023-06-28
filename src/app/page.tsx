import s from './page.module.scss';
import { pages } from 'data/common';
import { about_react, experience } from 'data/homepageData';
import { variantsForText, navbarVariant } from 'data/homepageData';
import Navbar from 'components/navbar/Navbar';
import MotionOnScroll from 'components/motiononscroll/MotionOnScroll';

export default function Home() {
  return (
    <main className={s.homepage_main}>
      <img src="images/portfolio.png" alt="mainpicture" />
      <MotionOnScroll variants={navbarVariant}>
        <header className={s.header}>
          <Navbar color="#000000" bg="#aa87de" />
        </header>
      </MotionOnScroll>
      <article className={s.homepage_article}>
        <section className={s.homepage_article__image}>
          <img src="images/books.png" alt="colors" />
        </section>
        <section className={s.homepage_article__section1}>
          <MotionOnScroll variants={variantsForText}>
            <h2 className={s.homepage_article__title}>Technical profile.</h2>
            <p className={s.homepage_article__paragraph}>{about_react}</p>
          </MotionOnScroll>
        </section>
      </article>
      <img src="images/stack.png" alt="technical-stack" />
      <article className={s.homepage_article}>
        <section className={s.homepage_article__section2}>
          <MotionOnScroll variants={variantsForText}>
            <h2 className={s.homepage_article__title}>Expirience.</h2>
            <p className={s.homepage_article__paragraph}>{experience}</p>
          </MotionOnScroll>
        </section>
        <section className={s.homepage_article__section3}>
          <MotionOnScroll variants={variantsForText}>
            <h2 className={s.homepage_article__title}>Technical profile.</h2>
            <p className={s.homepage_article__paragraph}>{about_react}</p>
          </MotionOnScroll>
        </section>
      </article>
      <footer className={s.homepage__footer}>
        <h4>fouz Js &copy; {new Date().getFullYear()}</h4>
      </footer>
    </main>
  );
}
