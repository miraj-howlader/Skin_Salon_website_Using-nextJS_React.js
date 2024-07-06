"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Socials from "./Socials";
const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatements",
    name: "Treatments",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  return (
    <nav className="  relative flex flex-col justify-between h-full p-8 ">
      <div className=" text-accent cursor-pointer" onClick={() => setMobileNav(false)}>
        <IoClose className=" text-4xl" />
      </div>

      <ul className=" flex flex-col gap-8 text-white text-xl">
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index}
            className={`${pathname===link.href && "border-b-2 border-accent"}
             uppercase max-w-max mx-auto`}>
              {link.name}
            </Link>
          );
        })}
      </ul>

      
        <Socials containerStyles='text-white text-lg flex gap-6
         justify-center'/>
      
    </nav>
  );
};

export default MobileNav;
