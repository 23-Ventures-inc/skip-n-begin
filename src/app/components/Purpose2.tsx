"use client";

import { useRef } from "react";
import { TimelineContent } from "@/app/components/framer-timeline";

import type { Variants } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

const timelineItems = [
  {
    year: "2020",
    title: "Project Inception",
    description: "The beginning of our journey.",
  },
  {
    year: "2021",
    title: "First Milestone",
    description: "Reached our first major goal.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Extended our reach worldwide.",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for our contributions.",
  },
];
interface propsInterface {
  Text1: string | null;
  Text2: string | null;
}

function Purpose2(props: propsInterface) {
  const heroRef = useRef(null);

  // Subtle reveal animation
  const revealVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hidden: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <>
      {/* First section - Hero */}
      <section
        ref={heroRef}
        className="px-4 max-w-5xl  mx-auto my-10 flex flex-col justify-center items-center text-center"
      >
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={heroRef}
          variants={revealVariants}
          className="text-4xl md:text-4xl font-medium mb-4 max-w-2xl"
        >
          {props.Text1}
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={heroRef}
          variants={revealVariants}
          className="text-gray-600 mb-8 max-w-xl"
        >
          {props.Text2}
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={heroRef}
          variants={revealVariants}
        >
          <a
            href="https://www.linkedin.com/company/skip-n-begin/"
            target="_blank"
            className="text-xl px-6 py-2 bg-gray-900 text-white rounded-md inline-flex items-center hover:bg-gray-800 transition-colors"
          >
            Connect on linkedin <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </TimelineContent>
      </section>
    </>
  );
}

export default Purpose2;
