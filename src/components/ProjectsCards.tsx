"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I specialize in Web Pentesting, driven by curiosity and lateral thinking to find innovative solutions to complex problems. I apply Shoshin every day in my life product of it, my projects: you can explore my GitHub profile for more information :)`;

export function ProjectsCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
      <TextGenerateEffect words={words} />
      {/* <GoogleGeminiEffectDemo />*/}

      <div className="h-[20rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <a
            href="https://github.com/JFOZ1010"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/JFOZ1010
          </a>
        </p>
        <p className="text-sm text-center text-neutral-500 relative z-20 t-10">
          Give it a ⭐, if you like it :)
        </p>
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "TorIPGuard",
    description:
      "A REST API for managing malicious IPs in TOR networks, featuring IP retrieval, exclusion, filtering, and detailed logging with user and admin permissions.",
    link: "https://github.com/JFOZ1010/TorIPGuard",
  },
  {
    title: "CVEHunter",
    description:
      "A hacking tool designed to collect all NVD CVEs from 2018 onwards, storing them for integration with OWASP ZAP for web application analysis.",
    link: "https://github.com/JFOZ1010/CVEHunter",
  },
  {
    title: "CryptoHack",
    description:
      "A repository with the compilation of all my cryptographic knowledge converted to python code with the platform Cryptohack.",
    link: "https://github.com/JFOZ1010/CryptoHack",
  },
  {
    title: "GPU-Hunter",
    description:
      "GPU Hunter is a bot built in Python Selenium that allows to automate the whole process of finding the graphics card at the best price, alerting via emai in a nice hypertext message.",
    link: "https://github.com/JFOZ1010/GPU-HunterBot",
  },
];
