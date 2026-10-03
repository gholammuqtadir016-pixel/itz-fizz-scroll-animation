"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVisual() {
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(visualRef.current, {
        y: 420,
        x: -80,
        rotation: 18,
        scale: 0.72,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, visualRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={visualRef}
      className="relative flex h-[340px] w-[260px] items-center justify-center md:h-[430px] md:w-[330px]"
    >
      {/* Outer ring */}
      <div className="absolute h-[300px] w-[300px] rounded-full border border-orange-400/20 md:h-[390px] md:w-[390px]" />

      <div className="absolute h-[240px] w-[240px] rounded-full border border-orange-400/20 md:h-[310px] md:w-[310px]" />

      {/* Main object */}
      <div className="relative h-[230px] w-[190px] rotate-[-8deg] rounded-[55px] border border-white/20 bg-gradient-to-br from-orange-400 via-orange-600 to-red-700 shadow-[0_35px_100px_rgba(249,115,22,0.35)] md:h-[310px] md:w-[250px]">
        {/* Highlight */}
        <div className="absolute left-6 top-6 h-24 w-12 rounded-full bg-white/20 blur-md" />

        {/* Inner glass */}
        <div className="absolute inset-8 rounded-[40px] border border-white/20 bg-black/10" />

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rotate-[-90deg] text-4xl font-black tracking-widest text-white/90 md:text-5xl">
            FIZZ
          </span>
        </div>

        {/* Bottom shine */}
        <div className="absolute bottom-5 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full bg-white/30 blur-sm" />
      </div>

      {/* Floating particles */}
      <div className="absolute left-0 top-16 h-3 w-3 rounded-full bg-orange-400" />

      <div className="absolute right-0 top-28 h-2 w-2 rounded-full bg-orange-300" />

      <div className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-red-400" />
    </div>
  );
}