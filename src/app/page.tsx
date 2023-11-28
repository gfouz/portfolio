
import localFont from "next/font/local";
import Image from "next/image";
import { spinning } from "data/homepageData";
import { variantsForText } from "data/homepageData";
import MotionOnScroll from "components/motiononscroll/MotionOnScroll";
import GradientText from "components/gradienttext/GradientText";
import Menu from "components/menu/Menu";
import Toolbar from "components/toolbar/Toolbar";
import Footer from "components/footer/FooterWithForm";
import blog from "../../public/images/book-glasses.jpg";
import computer from "../../public/images/computer.png";
import black_gradient from "../../public/images/art_book.jpg";
import fouz_link from "../../public/images/fouz-link.png";
import finances from "../../public/images/money.jpg";
import hello from "../../public/images/home-main.jpg";
const timesRoman = localFont({ src: "../../public/fonts/times-roman.ttf" });
import MarkdownToHtml from "components/markdowntohtml/MarkdownToHtml";
//import NavbarNext from "components/navbar-next/Navbar";

export default async function Home() {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <section className="">
          <Image alt="image" src={hello} className="max-w-[100%] h-auto" />
        </section>

        <article className="md:flex">
          <section className="flex flex-1 p-4 text-left items-center text-amber-50 gradient-bg">
            <MotionOnScroll variants={variantsForText}>
              <MarkdownToHtml
                className="markdown-paragraph markdown-heading"
                title="blog-introduction"
              />
            </MotionOnScroll>
          </section>
          <div className="flex-1">
            <Image
              className="object-fill w-[100%] h-[100%]"
              src={blog}
              alt="blog-image"
            />
          </div>
        </article>
        <div className="relative">
          <Image
            className="responsive"
            src={black_gradient}
            alt="technical-stack"
          />
          <div className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-[#00000099]">
            <MotionOnScroll variants={spinning}>
              <a href="https://github.com/gfouz">
                <Image
                  className="w-[150px] h-auto md:w-[300px]"
                  src={fouz_link}
                  alt="technical-stack"
                />
              </a>
            </MotionOnScroll>
          </div>
        </div>
        <article className="md:flex">
          <section className="flex flex-1 p-4 text-left items-center text-amber-50 gradient-bg">
            <MotionOnScroll variants={variantsForText}>
              <MarkdownToHtml
                className="markdown-paragraph markdown-heading"
                title="finances-tracker"
              />
            </MotionOnScroll>
          </section>
          <div className="flex-1">
            <Image
              className="object-fill w-[100%] h-[100%]"
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
