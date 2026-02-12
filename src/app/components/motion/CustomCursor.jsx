"use client";

import { Cursor } from "motion-plus/react";

const CustomCursor = () => {
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
