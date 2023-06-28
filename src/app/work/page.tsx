import s from './page.module.scss';

export default function Work() {
  return (
    <div className={s.work__container}>
      <header className={s.work__header}>gfouz</header>
      <main className={s.work__main}>
        <img
          src="images/work.png"
          alt="work"
          className={s.work__main__picture}
        />
        <img
          src="images/work2.png"
          alt="work"
          className={s.work__main__picture}
        />
      </main>
      <article className={s.work__card1}>
        <div className={s.work__card__header}>
          <img
            src="images/centrum.png"
            alt="reddit"
            className={s.work__card__image}
          />
        </div>
        <h2 className={s.work__card_title}>pki-client</h2>
        <p className={s.work__card__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>
      <article className={s.work__card2}>
        <div className={s.work__card__header}>
          <img
            src="images/centrum.png"
            alt="reddit"
            className={s.work__card__image}
          />
        </div>
        <h2 className={s.work__card_title}>pki-server</h2>
        <p className={s.work__card__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>
      <article className={s.work__card3}>
        <div className={s.work__card__header}>
          <img
            src="images/centrum.png"
            alt="reddit"
            className={s.work__card__image}
          />
        </div>
        <h2 className={s.work__card_title}>portfolio@latest</h2>
        <p className={s.work__card__paragraph}>
          Portfolio made with next Js appDir, scss-modules and the latest react
          libraries such as framer-motion, react-query, react-hook-form, valtio
          and others. And this portfolio has been pushed to github using a ci cd
          workflow.
        </p>
      </article>
      <article className={s.work__card4}>
        <img src="images/school.jpg" alt="school" />
      </article>
      <nav className={s.work__navbar}>
        <div className={s.work__navbar__card}>
          <a href="/contact">
            <img
              className={s.work__navbar__gmail}
              src="images/gmail.png"
              alt="gmail"
            />
          </a>
        </div>
        <div className={s.work__navbar__card}>
          <a href="/contact">
            <img
              className={s.work__navbar__message}
              src="images/message.png"
              alt="gmail"
            />
          </a>
        </div>
      </nav>
      <footer className={s.work__footer}>
        gfouz &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

/*
Hex codes: ethereal ivory #E4E4DE, sophisticated sage #C4C5BA, timeless noir #1B1B1B,
muted moss #595f39
*/
