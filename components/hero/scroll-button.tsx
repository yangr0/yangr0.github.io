"use client"

import React from "react";
import styles from '@/components/hero/scroll-button.module.css';

interface ScrollDownButtonProps {
  targetId: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ targetId }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection} className={styles.scrollButton}>
      <span className={styles.dot}></span>
    </button>
  );
};

export default ScrollDownButton;
