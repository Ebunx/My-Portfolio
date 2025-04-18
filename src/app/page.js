import Image from "next/image";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Portfolio from "@/Portfolio/page";
import Stack from "./Stack/page";
import Footer from "./Footer.jsx/page";
import Navbar from "./Nav/Navbar";

export default function Home() {
  return (
     <>
     <Navbar/>
     <Hero/>
     <About/> 
     <Portfolio/>
     <Stack/>
     <Footer/>
     </>
  );
}
