"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSetInterval from "hooks/useSetInterval";
import s from "./Carousel.module.scss";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const counter = useSetInterval(2000);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1,
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={s.carousel}>
      <img
        key={currentIndex}
        src={images[counter]}
        className={s.carousel_image}
      />
    </div>
  );
};
export default Carousel;
