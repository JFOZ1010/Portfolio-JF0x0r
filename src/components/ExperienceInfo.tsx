"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { MediumPosts } from "./MediumPosts";

const lorNasa1 = '/LOR-Nasa-1.png';
const lorNasa2 = '/LOR-Nasa-2.jpg';
const ewptxv3 = '/ewptxv3-badge.png';
const bscp = '/bscp-badge.png';
const ejpt = '/ejpt-certification.png';
const acp = '/acp-certification.png';
const hackerOne = '/1stReportHackerOne.png';

export function ExperienceInfo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              {item.badge}
            </h2>
            {item.title && <p className={twMerge("text-xl mb-4 px-0 font-bold")}>{item.title}</p>}
            <div className="text-2-1 prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
{
  title: "",
  description: (
    <>
      <div className="mb-4">
        <h3 className="font-bold">Offensive Security Engineer, NTT Data</h3>
        <p className="text-sm text-neutral-400 mb-2">June 2026 - Present (Remote, Colombia)</p>
        <ul className="list-disc ml-6">
          <li>Adversarial testing across web, API, and mobile surfaces for enterprise clients throughout LATAM.</li>
          <li>Embedded in CI/CD - assessing what ships before it becomes someone else's incident.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">Offensive Security Consultant, KPMG</h3>
        <p className="text-sm text-neutral-400 mb-2">April 2025 - May 2026 (Bogotá, Colombia)</p>
        <ul className="list-disc ml-6">
          <li>Penetration testing across regulated, high-stakes environments - finance, healthcare, energy.</li>
          <li>Chained low-severity findings into critical impact, then translated it into risk executives act on.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold">Security Researcher, HackerOne / Bugcrowd</h3>
        <p className="text-sm text-neutral-400 mb-2">June 2023 – June 2026 (Remote)</p>
        <ul className="list-disc ml-6">
          <li>Independent research acknowledged by Adobe, NASA VDP, and private programs.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold">Ethical Hacker - Siesa</h3>
        <p className="text-sm text-neutral-400 mb-2">January 2024 – June 2024</p>
        <ul className="list-disc ml-6">
          <li>Security assessments on ERP and CRM platforms ahead of production release.</li>
        </ul>
      </div>
    </>
  ),
  badge: "Experience",
},
{
  title: "",
  description: (
    <div className="flex overflow-x-auto flex-nowrap gap-4 pb-4 snap-x">
      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-all duration-300 snap-start">
        <h3 className="font-mono text-green-500 font-bold mb-2">CVE-2026-14871</h3>
        <p className="mb-2 text-sm text-neutral-300">BOLA/IDOR in osTicket v1.18.3 and v1.17.7. Broken authorization let any authenticated user read tickets that weren&apos;t theirs to read.</p>
        <a href="https://fluidattacks.com/es/advisories/kyokai" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-medium text-sm">advisory →</a>
      </div>

      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-all duration-300 snap-start">
        <h3 className="font-mono text-green-500 font-bold mb-2">CVE-2026-35526</h3>
        <p className="mb-2 text-sm text-neutral-300">Denial of Service via unbounded WebSocket subscriptions in Strawberry GraphQL (+5M downloads/month on PyPI). An unauthenticated attacker can exhaust server resources by opening unlimited subscriptions without triggering any rate limit.</p>
        <a href="https://github.com/strawberry-graphql/strawberry/security/advisories/GHSA-hv3w-m4g2-5x77" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-medium text-sm">advisory →</a>
      </div>

      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-all duration-300 snap-start">
        <h3 className="font-mono text-green-500 font-bold mb-2">CVE-2026-34406</h3>
        <p className="mb-2 text-sm text-neutral-300">Privilege Escalation via mass assignment of is_superuser in APTRS&apos;s user edit endpoint. A low-privileged authenticated user can escalate to superuser by sending a crafted request that modifies protected fields.</p>
        <a href="https://github.com/APTRS/APTRS/security/advisories/GHSA-gv25-wp4h-9c35" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-medium text-sm">advisory →</a>
      </div>

      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-all duration-300 snap-start">
        <h3 className="font-mono text-green-500 font-bold mb-2">CVE-2026-34381</h3>
        <p className="mb-2 text-sm text-neutral-300">Unauthenticated access to role-restricted documents in Admidio via a neutralized .htaccess file. File access controls were bypassable without any authentication.</p>
        <a href="https://github.com/Admidio/admidio/security/advisories/GHSA-7fh7-8xqm-3g88" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-medium text-sm">advisory →</a>
      </div>

      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-all duration-300 snap-start">
        <h3 className="font-mono text-green-500 font-bold mb-2">CVE-2026-34382</h3>
        <p className="mb-2 text-sm text-neutral-300">Missing CSRF protection on custom list deletion in Admidio&apos;s mylist_function.php. Allows an attacker to trick authenticated users into deleting arbitrary lists via a forged request.</p>
        <a href="https://github.com/Admidio/admidio/security/advisories/GHSA-g3mx-8jm6-rc85" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-medium text-sm">advisory →</a>
      </div>

      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-all duration-300 snap-start">
        <h3 className="font-mono text-green-500 font-bold mb-2">CVE-2025-50578</h3>
        <p className="mb-2 text-sm text-neutral-300">Host Header Injection + Open Redirect in the official Heimdall Docker image (LinuxServer.io). Manipulation of the Host header allows arbitrary redirection of authenticated users.</p>
        <a href="https://www.cve.org/CVERecord?id=CVE-2025-50578" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-medium text-sm">advisory →</a>
      </div>

      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-all duration-300 snap-start">
        <h3 className="font-mono text-green-500 font-bold mb-2">CVE-2025-50579</h3>
        <p className="mb-2 text-sm text-neutral-300">Authentication bypass vulnerability in Nginx Proxy Manager v2.12.3. Reported via MITRE/NVD.</p>
        <a href="https://nvd.nist.gov/vuln/detail/cve-2025-50579" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline font-medium text-sm">advisory →</a>
      </div>

      <div className="w-72 shrink-0 p-4 rounded-lg border border-neutral-800 bg-neutral-900/40 flex flex-col items-center justify-center snap-start min-h-[160px]">
        <span className="text-3xl text-green-400 animate-pulse mb-3 mt-2">∞</span>
        <p className="text-neutral-400 text-sm text-center">More research in progress.</p>
        <p className="text-neutral-600 text-xs mt-1 text-center">Some findings are under coordinated disclosure.</p>
      </div>
    </div>
  ),
  badge: "CVEs • Vulnerability Research",
},
  {
    title: "",
    description: (
      <div className="flex flex-col gap-12">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <a href="https://bugcrowd.com/jf0x0r" target="_blank" rel="noopener noreferrer">
              <Image src="/bugcrowd-logo.png" alt="BugCrowd Logo" width={160} height={44} className="object-contain hover:scale-105 transition-transform duration-300" loading="lazy" />
            </a>
          </div>
          <p className="mb-6">Vulnerabilities reported and acknowledged in NASA&apos;s Vulnerability Disclosure Program.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <a href={lorNasa1} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <Image src={lorNasa1} alt="NASA Letter of Appreciation 1" width={600} height={800} className="w-full h-auto rounded-lg outline outline-offset-2 outline-1 outline-neutral-700 hover:outline-green-500 hover:scale-105 transition ease-in-out duration-300" loading="lazy" />
              </a>
              <p className="text-xs text-center text-neutral-400 mt-3 font-medium">Letter of Appreciation - NASA VDP · May 15, 2025</p>
            </div>
            <div>
              <a href={lorNasa2} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <Image src={lorNasa2} alt="NASA Letter of Appreciation 2" width={600} height={800} className="w-full h-auto rounded-lg outline outline-offset-2 outline-1 outline-neutral-700 hover:outline-green-500 hover:scale-105 transition ease-in-out duration-300" loading="lazy" />
              </a>
              <p className="text-xs text-center text-neutral-400 mt-3 font-medium">Letter of Appreciation - NASA VDP · May 29, 2025</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-neutral-800"></div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <a href="https://hackerone.com/jf0x0r" target="_blank" rel="noopener noreferrer">
              <Image src="/hackerone-logo.png" alt="HackerOne Logo" width={160} height={44} className="object-contain hover:scale-105 transition-transform duration-300" style={{ filter: 'invert(1)' }} loading="lazy" />
            </a>
          </div>
          <p className="mb-6">Adobe Security: Information disclosure of git metadata and Springboot actuator data, responsibly reported and resolved.</p>
          <div className="max-w-xl mx-auto">
            <a href={hackerOne} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
              <Image src={hackerOne} alt="HackerOne Report" width={700} height={450} className="w-full h-auto rounded-lg outline outline-offset-2 outline-1 outline-neutral-700 hover:outline-green-500 hover:scale-105 transition ease-in-out duration-300" loading="lazy" />
            </a>
            <p className="text-xs text-center text-neutral-400 mt-3 font-medium">Disclosure of git metadata &amp; Springboot actuator info · Adobe · HackerOne</p>
          </div>
        </div>
      </div>
    ),
    badge: "Achievements",
  },
  {
    title: "",
    description: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a href="https://portswigger.net/web-security/e/c/8eb5174d2f3a576e" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-colors duration-300">
          <h3 className="font-bold mb-4 text-center">BSCP [ PortSwigger ]</h3>
          <div className="h-36 flex items-center justify-center">
            <Image src={bscp} alt="BSCP Certification" width={144} height={144} className="max-h-full max-w-full object-contain mx-auto transition-transform hover:scale-105 duration-300" loading="lazy" />
          </div>
        </a>
        <a href="https://certs.ine.com/9ddf34db-9e51-4056-873f-0d80092a1099#acc.KJQ5eRzF" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-colors duration-300">
          <h3 className="font-bold mb-4 text-center">eWPTX [ INE ]</h3>
          <div className="h-36 flex items-center justify-center">
            <Image src={ewptxv3} alt="eWPTXv3 Certification" width={200} height={144} className="max-h-full max-w-full object-contain mx-auto transition-transform hover:scale-105 duration-300" loading="lazy" />
          </div>
        </a>
        <a href="https://certs.ine.com/f2ad21a7-8dd0-4fe8-8cf1-32a0c9fb1df1#acc.M93n6Nxb" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-colors duration-300">
          <h3 className="font-bold mb-4 text-center">eJPT [ INE ]</h3>
          <div className="h-36 flex items-center justify-center">
            <Image src={ejpt} alt="EJPT Certification" width={144} height={144} className="max-h-full max-w-full object-contain mx-auto transition-transform hover:scale-105 duration-300" loading="lazy" />
          </div>
        </a>
        <a href="https://www.credly.com/badges/7634801f-cd54-4d61-b15c-fbeaed199b2b/linked_in_profile" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-green-600/50 transition-colors duration-300">
          <h3 className="font-bold mb-4 text-center">ACP [ APISec University ]</h3>
          <div className="flex items-center justify-center">
            <Image src={acp} alt="ACP Certification" width={220} height={220} className="max-h-full max-w-full object-contain mx-auto transition-transform hover:scale-105 duration-300" loading="lazy" />
          </div>
        </a>
      </div>
    ),
    badge: "Certifications",
  },
  {
    title: "",
    description: (
      <MediumPosts />
    ),
    badge: "Security Chronicles",
  },
];
