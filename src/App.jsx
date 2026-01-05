import React, { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Bio from "./pages/Bio.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactFloat from "./components/ContactFloat.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const logoRef = useRef(null);
  const contRef = useRef(null);
  const hideSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔵 Logo animation
      gsap.to(logoRef.current, {
        left: '20px',
        scale: 1,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "300px top",
          scrub: true,
        },
      });

      // 🔴 Contact button slide in
      gsap.fromTo(
        contRef.current,
        { right: "-1000px", scale: 0.9 },
        {
          right: "20px",
          scale: 1,
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "300px top",
            scrub: true,
          },
        }
      );

 


    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-white relative min-h-[200vh]" id="cover">

      {/* Logo */}
      <div
        ref={logoRef}
        className="fixed top-[30px] left-[-300px] scale-0 w-[60px] h-[60px] rounded-full overflow-hidden z-50"
      >
        <img
          src="/images/armanLogo.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Button */}
     
          {/* <ContactFloat ref={contRef} /> */}
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
};

export default App;
