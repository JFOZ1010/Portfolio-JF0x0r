"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Blog from "@/components/ui/blog"; 
const progresoP = '/progress-portswigger.png';
const pentesterL = '/pentesterlab.png';
const hackerOne = '/1stReportHackerOne.png'
const bugcrowd = '/reportNasa.png'




export function ExperienceInfo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-5xl font-bold w-fit  py-2 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 px-6 font-bold")}>{item.title}</p>

            <div className="text-2-1 prose prose-sm dark:prose-invert">
              {item.description}
            </div>

            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit py-2 mb-4 mx-auto text-center">
              {item.subtitleH}
            </h2>
            {item.image3 && (
              <img
                src={hackerOne}
                alt={item.title}
                className="w-full h-auto rounded-lg outline outline-offset-4 outline-2 outline-green-100 hover:scale-110  my-6 transition ease-in-out duration-300 m-auto"
              />
            )}
            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit py-2 mb-4 mx-auto text-center">
              {item.subtitleB}
            </h2>
            {item.image5 && (
              <img
                src={bugcrowd}
                alt={item.title}
                className="w-full h-auto rounded-lg outline outline-offset-4 outline-2 outline-green-100 hover:scale-110  my-6 transition ease-in-out duration-300 m-auto"
              />
            )}
            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit py-2 mb-4 mx-auto text-center">
              {item.subtitleP}
            </h2>
            {item.image4 && (
              <img
                src={progresoP}
                alt={item.title}
                className="w-full h-auto rounded-lg outline outline-offset-4 outline-2 outline-green-100 hover:scale-110  my-6 transition ease-in-out duration-300 m-auto"
              />
            )}
            <h2 className="bg-black text-white rounded-full text-4xl font-bold w-fit py-2 mb-4 mx-auto text-center">
              {item.subtitle2}
            </h2>
            {item.image2 && (
              <img
                src={pentesterL}
                alt={item.title}
                className="w-full h-auto rounded-lg outline outline-offset-4 outline-2 outline-green-100 hover:scale-110  my-6 transition ease-in-out duration-300 m-auto"
              />
            )}
          </div>
        ))}
        <Blog/>
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
          <h3 className="font-bold">Security Researcher - HackerOne/BugCrowd</h3>
          <ul className="list-disc ml-6">
            <li>
              Specialized in identifying critical vulnerabilities in systems and applications 
              using the PTES methodology and lateral thinking to solve complex problems with technical creativity.
            </li>
            <li>
              Identified and mitigated vulnerabilities, reducing attack surfaces by 60% and improving system resilience by 40%.
            </li>
            <li>
              Reported <strong>Open Redirect</strong>, <strong>Subdomain Takeover</strong>, and <strong>Info Disclosure</strong>,
              in <a href="https://hackerone.com/jf0x0r?type=user" target="_blank" className="text-blue-500 underline">Adobe</a>, <a href="https://bugcrowd.com/jf0x0r" target="_blank" className="text-blue-500 underline">NASA VDP</a>, 
              and private programs. Strengthened security for major organizations through detailed 
              vulnerability reports. Specialized in asset enumeration and web exploitation for high-impact findings.
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold">Analyst Software/Ethical Hacker Internship - Siesa</h3>
          <ul className="list-disc ml-6">
            <li>
              Conducted comprehensive analysis of enterprise software solutions, including ERP and CRM systems.
              Tested functionality across various versions before production deployment.
            </li>
            <li>
              Performed pentesting on two applications, uncovering security vulnerabilities.
              Proposed improvements to mitigate <strong>SQL Boolean Injection</strong> and <strong>XSS Reflected</strong> attacks.
            </li>
            <li>
              Contributed to software security analysis and optimization efforts, enhancing operational efficiency and data protection.
            </li>
          </ul>
        </div>
      </>
    ),
    badge: "💻 Experience",
    image: "",
  },
  {
    title: "DiceCTF 2024 Quals",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Successfully participate in DiceCTF 2024 Quals, a prestigious 48-hour
          online Capture The Flag, in the ESPower_ team.
        </li>
      </ul>
    ),
    badge: "🏅 Achievements",
    image: "",
  },
  {
    title: "Reports in Hacker0ne",
    description: (
      <ul className="list-disc ml-6">
        <li>
        I was able to successfully report a disclosure vulnerability in Hackerone for the Adobe Security Response program. 
        </li>
      </ul>
    ),
    subtitleH: "Adobe",
    image3: "/1stReportHackerOne",
    //image2: "",
  },
  {
    title: "Reports in BugCrowd",
    description: (
      <ul className="list-disc ml-6">
        <li>
        Among the vulnerabilities I have reported to the NASA VDP, my most critical and impactful finding was 
        an information disclosure affecting the supply chain, compromising both NASA and its associated customers.        
        </li>
      </ul>
    ),
    subtitleB: "Nasa 🚀",
    image5: "/reportNasa",
    //image2: "",
  },
  {
    title: "Platforms Web Academy",
    description: (
      <ul className="list-disc ml-6">
        <li>
          I have been able to solve over 356 labs on the Portswigger and Pentesterlab platform covering topics such as:
          SSRF, SQLi, No-SQLi, Disclosure Information, LLM Attacks, ClickJacking, Server Side Template Injection, OS Command Injection, Path Traversal, File Upload, File Include,
          Access Control, Authentication/Authorization, Web Sockets, UNIX Systems, XSS, Business Logic Vulnerabilities, Caché Web Deception, HTTP Request Smuggling, 
          Prototype Pollution, Insecure Deserialization, Race Conditions, XXE, CORS, DOM Based Vulnerabilities, GraphQL API Attacks, HOST Header Attacks, Web Cache Poisoning, and more.
        </li>
      </ul>
    ),
    subtitleP: "PortSwigger",
    image4: "/progress-portswigger", 
    subtitle2: "PentesterLab",
    image2: "/pentesterlab",
  },
  {
    title: "My Blog in Medium :)",
    description: (
      <ul className="list-disc ml-6">
        <li>
          In my spare time, I write on my personal blog about various topics related to computer security and software,
          from how AES hashing and Keccak states work in cryptography to how to set up dynamic routing between two LANs.
        </li>
        <li>
          Passionate about learning every day, every new topic is a great opportunity to expose it to the public,
          to teach it, to give the opportunity to someone who is in the same process as me to learn and not give up.
        </li>
      </ul>
    ),
    badge: "💡 Security Chronicles",
    image: "",
    blog:"",
  },
];
