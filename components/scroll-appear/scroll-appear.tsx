"use client"

import React, { useEffect, useState, useRef, ReactNode } from "react";
import styles from "@/components/scroll-appear/scroll-appear.module.css";

interface ScrollAppearProps {
  children: ReactNode;
}

const ScrollAppear: React.FC<ScrollAppearProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: .1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.scrollAppear} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAppear;
