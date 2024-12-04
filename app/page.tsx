"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import mypic from "@/public/mypic.png"
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);
  useGSAP(()=>{
    gsap.from(".left",{
      scale : 10,
      duration: 1,
      opacity: 0,
    })
  })
  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["Programmer", "AI Engineer", "Fullstack Developer"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <>
    <header className="container">
      <div className="content">
        <h3>Hello, It&apos;s me</h3>
        <h3>Muhammad Arman</h3>
        <h4>& I m <span ref={typedElement}> </span></h4>
        <p>
          Hi, I am Muhammad Arman, a passionate AI engineer and full-stack
          developer with a passion for building intelligent systems and seamless
          digital solutions. Also I build web applications. With a strong
          background in Ai and software development, I have experience working
          with advanced technologies such as Python, Typescript, Node.js, and
          React. I am always eager to learn new technology, and work on exciting
          projects that push the boundaries of technology. Let's create
          something incredible together!
        </p>
        <button className="btn">Get Resume</button>
      </div>
      <div className="img">
        <Image src={mypic} alt="Logo" id="image" />
      </div>
    </header>
    </>
  )
}

export default Home;