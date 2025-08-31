import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Cases from "./Components/Cases";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Features/>
      <Cases/>
    </>
  );
}
