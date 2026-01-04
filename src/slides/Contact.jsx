import React, { useRef, useEffect } from "react";
import { MoveRight, Instagram, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const linIconRef = useRef(null);
  const instaIconRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "75% bottom",
          end: "95% bottom",
          scrub: true,
        },
      }).fromTo(
        [linIconRef.current, instaIconRef.current],
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:arman3ditz@gmail.com";
  };

  const goToInsta = () => {
    window.location.href = "https://www.instagram.com/arman3ditz/";
  };

  return (
    <div ref={containerRef} className="w-screen min-h-screen relative overflow-hidden">

      {/* ===== TEXT SECTION ===== */}
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center gap-4 px-4 text-center">
        <div className="boldText">
          <p className="text-lg sm:text-xl">NO NEED</p>
          <p className="text-3xl sm:text-5xl font-bold">TO BE SHY.</p>
        </div>

        <button
          onClick={handleEmailClick}
          className="talkBtn border-2 border-white flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base"
        >
          <MoveRight className="arr"/>
          <span>let's work together</span>
        </button>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="w-full min-h-[30vh] grid grid-cols-1 sm:grid-cols-2 border-t-2 relative px-4 py-6">

        {/* Center Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 pointer-events-none text-center">
          <p className="armanText text-sm sm:text-base">ARMAN EDITZ</p>
        </div>

        {/* Copyright */}
        <div className="flex justify-center sm:justify-start items-end text-xs sm:text-sm">
          © 2026 arman3ditz. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end items-end gap-6 mt-4 sm:mt-0">
          <Linkedin
            ref={linIconRef}
            className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7"
          />
          <Instagram
            ref={instaIconRef}
            onClick={goToInsta}
            className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7"
          />
        </div>
      </footer>
    </div>
  );
};

export default Contact;
