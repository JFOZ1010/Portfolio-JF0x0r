"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Blog from "@/components/ui/blog"; 
const portS = '/progressPortSwigger.png';
const pentesterL = '/pentesterlab.png';
const hackerOne = '/1stReportHackerOne.png'




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
              {item.subtitle1}
            </h2>
            {item.image && (
              <img
                src={portS}
                alt={item.title}
                className="w-full h-auto rounded-lg outline outline-offset-4 outline-2 outline-green-100 hover:scale-110 my-6 transition ease-in-out duration-300 m-auto"
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
    title: "Analyst Software/Ethical Hacker Trainee - Siesa",
    description: (
      <ul className="list-disc ml-6">
        <li>
          Software Analysis and Testing: Conducted comprehensive analysis of enterprise software solutions
          including ERP, CRM systems, AGP (Supplier Management Support), and AGR (Revenue Management Support).
          Tested software functionality across various versions prior to production deployment.
        </li>
        <li>
          Security Testing and Improvement: Performed pentesting and testing on 2 applications,
          uncovering significant opportunities for enhancing information security. Proposed improvements
          to enhance confidentiality disclosure and input sanitization to mitigate SQL Boolean Injection and XSS Reflected attacks.
        </li>
        <li>
          Gained practical experience in knowledge management at Siesa during internship,
          contributing to critical software analysis and security testing initiatives aimed at optimizing operational efficiency and data protection.
        </li>
      </ul>
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
    title: "Platforms Web Academy",
    description: (
      <ul className="list-disc ml-6">
        <li>
          I have been able to solve over 260 labs on the Portswigger and Pentesterlab platform covering topics such as:
          SSRF, SQLi, Disclosure Information, LLM Attacks, ClickJacking, Server Side Template Injection, OS Command Injection, Path Traversal, File Upload, File Include,
          Access Control, Authentication/Authorization, Web Sockets, UNIX Systems, XSS, Business Logic Vulnerabilities, Caché Web Deception (In Progress).

        </li>
      </ul>
    ),
    subtitle1: "PortSwigger",
    image: "/ProgressPortSwigger",
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
