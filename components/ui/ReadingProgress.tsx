// components/ReadingProgress.tsx
"use client";

import React from "react";
import useReadingProgress from "@/hooks/useReadingProgress";

const ReadingProgress = () => {
  const readingProgress = useReadingProgress();
  return (
    <span
      style={{ transform: `translateX(${readingProgress - 100}%)` }}
      className="z-50 fixed top-0 bg-gradient-to-r from-orange-300 to-orange-500 h-1 w-full bottom-0"
    />
  );
};

export default ReadingProgress;
