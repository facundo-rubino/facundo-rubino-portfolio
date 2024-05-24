import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Hero from "@/components/Hero";

import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {

  return (
    <>
    <FloatingNav navItems={navItems}/>
    <div className="relative dark:bg-black-100 flex justify-center items-centered
    flex-col overflow-hidden mx-auto sm:px:10 px-5">
     <Hero/>
     <WorkProcess/>
     <RecentProjects/>
    </div>
    </>
  );
}
