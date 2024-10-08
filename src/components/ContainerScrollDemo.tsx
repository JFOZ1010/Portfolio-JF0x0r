"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="w-full dark:bg-black bg-green  dark:bg-dot-green/[0.2] bg-dot-green/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-green [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          // users={users}
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                Here are some
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Skills/Technologies
                </span>
              </h1>
            </>
          }
        />
      </div>
    </div>
  );
}
