"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const TypeWriter = ({
  text,
  speed = 80,
  eraseSpeed = 40,
  delay = 1500,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    }

    if (!isDeleting && displayText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    }

    if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, eraseSpeed);
    }

    if (isDeleting && displayText.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, eraseSpeed, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {displayText}
      <span className="animate-pulse font-light">|</span>
    </motion.span>
  );
};

export default TypeWriter;
