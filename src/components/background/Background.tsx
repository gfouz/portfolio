"use client";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const customFont = localFont({ src: "../../../public/fonts/aureaultra.ttf" });
interface BackgroundProps {
  color1: string | undefined;
  color2: string | undefined;
  color3: string | undefined;
}
export function Background({ color1, color2, color3 }: BackgroundProps) {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        style={{ position: "absolute", top: "0", left: "0" }}
      >
        <defs>
          <linearGradient id="pattern">
            <stop offset="30%" stopColor={color1} />
            <stop offset="60%" stopColor={color2} />
            <stop offset="95%" stopColor={color3} />
          </linearGradient>
        </defs>
        <rect fill="url(#pattern)" width="100%" height="100%" />
      </svg>
    </>
  );
}
export default Background;
