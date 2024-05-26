// components/Loader.jsx
"use client";
import React from "react";
import Lottie from "lottie-react";
import loader from "@/public/LoaderLottie.json"; // Assuming your Lottie JSON file is placed in the public folder

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <Lottie
        loop
        animationData={loader}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default Loader;
