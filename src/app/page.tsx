import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { ExperienceInfo } from "@/components/ExperienceInfo";

// Below-the-fold components — lazy loaded, client-only
const Projects = dynamic(() => import("@/components/Projects").then(m => ({ default: m.Projects })), { ssr: false });
const ProjectsCards = dynamic(() => import("@/components/ProjectsCards").then(m => ({ default: m.ProjectsCards })), { ssr: false });
const HeroScrollDemo = dynamic(() => import("@/components/ContainerScrollDemo").then(m => ({ default: m.HeroScrollDemo })), { ssr: false });
const QuoteWithBackground = dynamic(() => import("@/components/QuoteWithBackground").then(m => ({ default: m.QuoteWithBackground })), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop").then(m => ({ default: m.ScrollToTop })), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceInfo />
      <Projects />
      <ProjectsCards />
      <HeroScrollDemo />
      <QuoteWithBackground />
      <Footer />
      <ScrollToTop />
    </>
  );
}
