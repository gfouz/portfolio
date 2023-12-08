'use client';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';

const customFont = localFont({ src: '../../../public/fonts/artis.ttf' });

interface GradientTextProps {
  children: React.ReactNode;
  color1: string | undefined;
  color2: string | undefined;
  color3: string | undefined;
  className: string;
}
export function GradientText({
  children,
  color1,
  color2,
  color3,
  className,
}: GradientTextProps) {
  return (
    <>
      <svg
        height="100"
        width="100%"
        className={`${className}  ${customFont.className}`}
      >
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="10%" stopColor={color1} />
            <stop offset="30%" stopColor={color2} />
            <stop offset="90%" stopColor={color3} />
          </linearGradient>
        </defs>
        <pattern
          id="rainbow"
          patternUnits="userSpaceOnUse"
          width="200"
          height="200"
        >
          <motion.rect
            height="200"
            fill="url(#MyGradient)"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1 }}
          />
        </pattern>
        <text
          x="50%"
          y="50%"
          fontSize="10vw"
          textAnchor="middle"
          fill="url(#rainbow)"
          dominantBaseline="middle"
        >
          {children}
        </text>
      </svg>
    </>
  );
}
export default GradientText;
