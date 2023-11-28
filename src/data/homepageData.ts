import * as React from "react";

export interface IRoutesProps {
  path: string;
  link: React.ReactNode;
  icon: React.ReactNode;
}

export interface TitleProps {
  color?: string;
}

//Function to download a pdf file.
export function fetchPdf() {
  fetch("fouzsummary.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "fouzsummary.pdf";
      alink.click();
    });
  });
}

export const mainTitleVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 2.5, duration: 2.5 } },
};
export const mainTitleAnimation = {
  opacity: 1,
  scale: [2, 1],
  y: [0, 0, 0, 0, 0, 0, 0, 0 - 10],
};
export const reactVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const primaryPictureVariants = {
  visible: {
    transition: { duration: 5 },
    x: "50px",
  },
  hidden: {
    x: 0,
  },
};
export const variantsForText = {
  visible: { transition: { duration: 0.5 }, translateY: 0 },
  hidden: { translateY: 20 },
};
export const spinning = {
  visible: { transition: { duration: 0.5 }, scale: 1 },
  hidden: { scale: 0 },
};
export const firstParagraphVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const secondParagraphVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const nodeJsLogoVariant = {
  visible: { transition: { duration: 2 }, rotateX: 0 },
  hidden: { rotateX: -90 },
};
export const navbarVariant = {
  visible: { transition: { duration: 1 }, width: "100%" },
  hidden: { width: 0 },
};
export const finalVariant = {
  visible: { transition: { duration: 0.4, delay: 0.5 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const blog_preface = `This blog is about latest web innovations. And this blog
itself is built with Next.Js using the app directory 
and server components, a new type of React components that 
run on the server and return compiled JSX that is sent to 
the client. Server Components are useful for rendering 
the skeleton of a page, fetching data from the server in parallel, 
and passing it to the "client components".`;

export const about_express = `I am also focused on Express Js, and related libraries to afford
security and functionality, besides very useful concepts to reuse
logic such as middlewares and i have had practical experience working
with ORM or ODM to abstract databases such as Sequelize or Mongoose. I
have also used libraries such as axios, bcrypt, jsonwebtoken, dotenv, joi and
others...`;

export const experience = `I worked in the first stage of a system to generate digital 
certificates. I used Sequelize (ORM) for this project even though i also created a 
Mongoose version just for trials. As well as i designed the Rest Api of routes and 
controllers with the help of Nest Js. I used NextJs for client side rendering, this system is important for the development 
of digital certification in Cuba.`;

export const attached_1_spanish = `Hola, mi nombre es Giovani, comencé a aprender C++ en 2017 y fue mi
Primera experiencia con placas Arduino. Pero era una especie de
hobby hasta el año 2019 que comencé a estudiar programación web con un
mejor propósito en mente. Así que Node js fue mi elección, he estado
estudiar marcos de back-end como Express y bibliotecas relacionadas para
brindar seguridad y funcionalidad, además de conceptos muy útiles para
reutilizar lógica como middlewares y he tenido experiencia trabajando con
ORM u ODM para bases de datos abstractas como Sequelize o Mongoose. Tengo
bases de datos diseñadas y resumidas para un sistema que permitirá PKI
servicios en Cuba. `;
