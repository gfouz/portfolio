import localFont from 'next/font/local';
import Image from 'next/image';
import { spinning } from 'data/homepageData';
import { variantsForText } from 'data/homepageData';
import MotionOnScroll from 'components/motiononscroll/MotionOnScroll';
import GradientText from 'components/gradienttext/GradientText';
import HamburgerMenu from 'components/menu/HamburgerMenu';
import Toolbar from 'components/toolbar/Toolbar';
import Footer from 'components/footer/FooterWithForm';
import blog from '../../public/images/blog.jpg';
import computer from '../../public/images/computer.png';
import black_gradient from '../../public/images/purple-bg.jpg';
import fouz_link from '../../public/images/fouz-logo.png';
import finances from '../../public/images/finances.jpg';
import hello from '../../public/images/welcome.jpg';
const timesRoman = localFont({ src: '../../public/fonts/times-roman.ttf' });
import MarkdownToHtml from 'components/markdowntohtml/MarkdownToHtml';
//import NavbarNext from "components/navbar-next/Navbar";

export default async function Home() {
  return (
    <div className=" text-base-color bg-[#000000]">
      <header>
        <HamburgerMenu />
      </header>
      <main>
        <section className="">
          <Image alt="image" src={hello} className="h-auto max-w-[100%]" />
        </section>
        <section className="flex flex-1 items-center justify-center p-4 py-[4rem]">
          <MarkdownToHtml
            className="paragraph-w-600 markdown-heading text-left"
            title="welcome-words"
          />
        </section>
        <article className="py-12">
          <h2 className="text-purple-500">Projects and its Links</h2>
        </article>
        <article className="md:flex">
          <div className="flex-1 overflow-hidden">
            <Image
              className=" h-[100%] w-[100%] object-fill transition-all duration-500 hover:scale-[1.1] "
              src={blog}
              alt="blog-image"
            />
          </div>
          <section className="flex flex-1 flex-col items-center justify-center p-4 text-left">
            <MarkdownToHtml
              className="markdown-paragraph markdown-heading "
              title="blog-introduction"
            />
            <button
              type="button"
              className="mb-4 mt-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              see alive
            </button>
          </section>
        </article>
        <div className="relative">
          <Image
            className="responsive"
            src={black_gradient}
            alt="technical-stack"
          />
          <div className="absolute left-0 top-0 flex h-[100%] w-[100%] items-center justify-center ">
            <MotionOnScroll variants={spinning}>
              <a
                className="flex h-[auto] w-[300px] flex-col items-center justify-center bg-[#120225] py-7 shadow-gray-100"
                href="https://github.com/gfouz"
              >
                <h2 className="py-4 font-black text-[#E2CB5F]">
                  Follow me on Github.
                </h2>
                <Image
                  className="h-auto w-[90px] "
                  src={fouz_link}
                  alt="technical-stack"
                />
              </a>
            </MotionOnScroll>
          </div>
        </div>
        <article className="md:flex">
          <section className="flex flex-1 flex-col items-center justify-center p-4 text-left">
            <MarkdownToHtml
              className="markdown-paragraph markdown-heading"
              title="finances-tracker"
            />
            <button
              type="button"
              className="mb-4 mt-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              see alive
            </button>
          </section>
          <div className="flex-1">
            <Image
              className="h-[100%] w-[100%] object-fill"
              src={finances}
              alt="finances"
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

//Blue:    #535BF2

//https://github.com/gfouz/fouz-latest.git

//  npm i -D daisyui@latest

//https://protonvpn.com/download/ProtonVPN_v3.2.7.exe

//fouzlaura@gmail.com
//GTeN+(V@T5ErFgyN

//npm install -D prettier prettier-plugin-tailwindcss
//prettier --write  --plugin=prettier-plugin-tailwindcss
