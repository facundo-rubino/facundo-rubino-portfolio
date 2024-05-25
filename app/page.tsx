"use client";

import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaLaptopCode, FaRegBuilding, FaRegFileAlt, FaRegUser } from "react-icons/fa";
import Hero from "@/components/Hero";

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import WorkProcess from "@/components/WorkProcess";
import Experience from "@/components/Experience";
import useReadingProgress from "@/hooks/useReadingProgress";
import Tools from "@/components/Tools";

export default function Home() {
  const readingProgress = useReadingProgress();

  return (
    <>
    <span
        style={{ transform: `translateX(${readingProgress - 100}%)` }}
        className="z-50 fixed top-0 bg-gradient-to-r from-orange-300 to-orange-500 h-1 w-full bottom-0"
      />
    <FloatingNav navItems={[
        { name: "Experiencia", link: "#experiencia",icon: <FaRegBuilding />      },
        { name: "Proyectos", link: "#proyectos" ,icon: <FaLaptopCode /> },
        { name: "Contacto", link: "#contacto", icon: <FaRegUser /> },
      ]
    } />
    <main className="relative dark:bg-black-100  overflow-hidden mx-auto sm:px:10 px-5">
     <Hero/>
    <div className="md:w-5/6 flex justify-center items-centered
    flex-col align-middle">
     <WorkProcess/>
     <Experience/>
     <Tools/>
     <RecentProjects/>
    </div>
    </main>
    </>

  );
}
