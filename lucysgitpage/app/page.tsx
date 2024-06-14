"use client";

import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Welcome"
    },
    {
      text: "to"
    },
    {
      text: "Lucy's",
    },
    {
      text: "Cloud",
      className: "text-blue-500 dark:text-blue-900",
    },
  ];

  return (
    <>
    <div className="overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={1080}
        particleCount={1000}
        baseHue={900}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="p-72 text-white text-2xl md:text-6xl font-bold text-center"><TypewriterEffect words={words} /></h2>
      </Vortex>
      <div className="p-32"></div>
      
      <div className="flex flex-row items-center space-x-5 justify-center">
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          About me
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Read about my hobbies
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/shootingrange.jpeg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Picture"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          My works
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          I&apos;ll be working on some projects
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/projects.jpeg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Picture"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/mnifaimsis"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            See on github →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
    
    </div>
    </>
  );
}
