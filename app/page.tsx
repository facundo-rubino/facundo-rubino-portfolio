import Image from "next/image";
import Hero from "@/components/Hero";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {

  return (
    <>
    <ThemeSwitch/>
    <div className="relative dark:bg-black-100 flex justify-center items-centered
    flex-col overflow-hidden mx-auto sm:px:10 px-5">
     <Hero/>
    </div>
    </>
  );
}
