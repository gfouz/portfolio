import s from './page.module.scss';

import { pages } from 'data/common';
import { about_eslint, about_typescript } from 'data/aboutData';
import { navbarVariant, paragraph_1 } from 'data/aboutData';
import Navbar from 'components/navbar/Navbar';
import MotionOnScroll from 'components/motiononscroll/MotionOnScroll';

export default function About() {
  return (
    <div className={s.about}>
      <header className={s.about__header}>
        <Navbar />
      </header>
      <main className={s.about__main}>
        <article className={s.about__main_article}>
          <img
            className={s.about__image}
            src="images/cat.png"
            alt="typescript"
          />
        </article>
      </main>
      <aside className={s.about__aside}>
        <article className={s.about__aside_article}>
          <h3 className={s.about__title}>Overview</h3>
          <p className={s.about__paragraph}>{paragraph_1}</p>
        </article>
      </aside>

      <article className={s.about__details}>
        <details open className={s.details}>
          <summary className={s.details__title}>
            {' '}
            Why do i love typescript?{' '}
          </summary>
          <p className={s.details__paragraph}>{about_typescript}</p>
        </details>
        <details open className={s.details}>
          <summary className={s.details__title}>Two powerful tools.</summary>
          <p className={s.details__paragraph}>{about_eslint}</p>
        </details>
      </article>
      <footer className={s.about__footer}>
        <h4>gfouz &copy; {new Date().getFullYear()}</h4>
      </footer>
    </div>
  );
}
//#dc4c64
