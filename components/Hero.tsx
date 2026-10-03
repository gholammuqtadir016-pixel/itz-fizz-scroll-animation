"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Stats from "./Stats";
import ScrollVisual from "./ScrollVisual";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline();

      intro.from(".hero-letter", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.055,
        ease: "power3.out",
      });

      intro.from(
        ".hero-description",
        {
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.35"
      );

      intro.from(
        ".stat-item",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3"
      );

      gsap.to(".hero-glow", {
        scale: 1.2,
        opacity: 0.65,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero relative min-h-[180vh] overflow-hidden">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        {/* Background glow */}
        <div className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]" />

        {/* Background circles */}
        <div className="pointer-events-none absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-orange-400">
                Creative Digital Experience
              </p>

              <h1 className="hero-title mb-8 text-4xl font-bold uppercase leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {"WELCOME ITZ FIZZ".split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`hero-letter inline-block ${
                      letter === " " ? "mr-3" : "mr-[0.08em]"
                    }`}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>

              <p className="hero-description max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
                A smooth scroll-driven digital experience designed around
                motion, interaction and modern visual storytelling.
              </p>

              <Stats />
            </div>

            {/* RIGHT */}
            <div className="relative flex min-h-[450px] items-center justify-center lg:min-h-[600px]">
              <ScrollVisual />
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            Scroll
          </p>

          <div className="mx-auto h-10 w-[1px] overflow-hidden bg-zinc-800">
            <div className="h-4 w-full animate-bounce bg-orange-400" />
          </div>
        </div>
      </div>
    </section>
  );
}