"use client";
import React from "react";

export function HeroScrollDemo() {
  const offensiveSecurity = [
    "Burp Suite Pro", "OWASP ZAP", "Metasploit", "SQLMap", "Nmap", "Nuclei",
    "Subfinder", "Amass", "ffuf", "Nikto", "Gobuster", "Caido", "Wireshark",
    "JWT attacks", "GraphQL exploitation", "Host Header Injection",
    "SSRF", "XXE", "IDOR", "Race Conditions", "Prototype Pollution",
    "HTTP Request Smuggling", "Web Cache Poisoning"
  ];
  const development = [
    "Python", "Django", "FastAPI", "TypeScript", "Next.js", "REST APIs",
    "Git", "Docker", "Linux", "Bash scripting", "GitHub Actions"
  ];
  const platforms = [
    "HackerOne", "BugCrowd", "PortSwigger Web Academy", "TryHackMe",
    "Hack The Box", "PentesterLab"
  ];

  return (
    <div className="w-full bg-black py-24 flex flex-col items-center justify-center relative z-20">
      <div className="max-w-5xl mx-auto px-8 w-full">
        <h2 className="text-3xl font-bold text-white mb-12 text-center md:text-left">Stack • Tools</h2>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-xl font-semibold text-neutral-300 mb-6">Offensive Security</h3>
            <div className="flex flex-wrap gap-2">
              {offensiveSecurity.map((skill) => (
                <span key={skill} className="border border-neutral-700 text-neutral-400 text-sm rounded-full px-4 py-2 hover:border-neutral-500 hover:text-neutral-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-300 mb-6">Development</h3>
            <div className="flex flex-wrap gap-2">
              {development.map((skill) => (
                <span key={skill} className="border border-neutral-700 text-neutral-400 text-sm rounded-full px-4 py-2 hover:border-neutral-500 hover:text-neutral-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-300 mb-6">Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {platforms.map((skill) => (
                <span key={skill} className="border border-neutral-700 text-neutral-400 text-sm rounded-full px-4 py-2 hover:border-neutral-500 hover:text-neutral-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
