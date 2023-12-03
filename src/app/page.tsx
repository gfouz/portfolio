
import localFont from "next/font/local";
import Image from "next/image";
import { spinning } from "data/homepageData";
import { variantsForText } from "data/homepageData";
import MotionOnScroll from "components/motiononscroll/MotionOnScroll";
import GradientText from "components/gradienttext/GradientText";
import HamburgerMenu from "components/menu/HamburgerMenu";
import Toolbar from "components/toolbar/Toolbar";
import Footer from "components/footer/FooterWithForm";
import blog from "../../public/images/blog.jpg";
import computer from "../../public/images/computer.png";
import black_gradient from "../../public/images/purple-bg.jpg";
import fouz_link from "../../public/images/fouz-logo.png";
import finances from "../../public/images/finances.jpg";
import hello from "../../public/images/welcome.jpg";
const timesRoman = localFont({ src: "../../public/fonts/times-roman.ttf" });
import MarkdownToHtml from "components/markdowntohtml/MarkdownToHtml";
//import NavbarNext from "components/navbar-next/Navbar";

export default async function Home() {
  return (
    <div className='bg-[#000000] text-base-color'>
      <header>
        <HamburgerMenu />
      </header>
      <main>
        <section className="">
          <Image alt="image" src={hello} className="max-w-[100%] h-auto" />
        </section>
        <section className="flex flex-1 p-4 py-[4rem] justify-center items-center">
              <MarkdownToHtml
                className="paragraph-w-600 markdown-heading text-left"
                title="welcome-words"
              />

          </section>
          <article className='py-12'>
          <h2 className='text-purple-500'>Projects and its Links</h2>
          </article>
        <article className="md:flex">
         
          <div className="flex-1 overflow-hidden">
            <Image
              className=" transition-all duration-500 object-fill w-[100%] h-[100%] hover:scale-[1.1] "
              src={blog}
              alt="blog-image"
            />
          </div>
           <section className="flex flex-col flex-1 p-4 text-left justify-center items-center">
              <MarkdownToHtml
                className="markdown-paragraph markdown-heading "
                title="blog-introduction"
              />
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8 mb-4">see alive</button>
          </section>
        </article>
        <div className="relative">
          <Image
            className="responsive"
            src={black_gradient}
            alt="technical-stack"
          />
          <div className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-[#00000099]">
            <MotionOnScroll variants={spinning}>
              <a className='flex flex-col justify-center items-center' href="https://github.com/gfouz">
               <h2 className='font-black text-[#E2CB5F] py-4'>Follow me on Github.</h2>
                <Image
                  className="w-[120px] h-auto"
                  src={fouz_link}
                  alt="technical-stack"
                />
              </a>
            </MotionOnScroll>
          </div>
        </div>
        <article className="md:flex">
          <section className="flex flex-col flex-1 p-4 text-left justify-center items-center">
              <MarkdownToHtml
                className="markdown-paragraph markdown-heading"
                title="finances-tracker"
              />
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mt-8 mb-4">see alive</button>
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
