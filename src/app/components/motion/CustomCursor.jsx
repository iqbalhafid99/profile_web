"use client";

import { Cursor } from "motion-plus/react";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!isTouch);
  }, []);

  if (!enabled) return null;

  return (
    <Cursor
      style={{
        mixBlendMode: "difference",
        filter: "drop-shadow(0 0 5px #FD5956)",
      }}
    />
  );
};

export default CustomCursor;
