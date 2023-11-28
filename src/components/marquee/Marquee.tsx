import s from "./Marquee.module.scss";

interface MarqueeTypes {
  children: React.ReactNode;
}
const Marquee = ({ children }: MarqueeTypes) => {
  return <article className={s.textOnMotion}>{children}</article>;
};
export default Marquee;

export const customText =
  " hello i am giovani and these are my skills: html + css + scss + typescript + reactjs + nextjs + prisma + express...";
