'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const tabs = [
  {
    title: 'What does it mean to be an equity-based founder?',
    description: 'An equity-based founder is someone who joins a startup without a fixed salary but receives ownership (equity) in the company. This means they share both the risks and rewards of building the business from the ground up.',
  },
  {
    title: 'What types of startups do you build?',
    description: 'We focus on bootstrapped startups in Tech, Marketing, and Content-driven industries. Our goal is to take ideas from zero to scalable businesses without relying on external funding initially.',
  },
  {
    title: 'Who is the ideal founder for this opportunity?',
    description: 'We look for ambitious, entrepreneurial-minded individuals from majorly 5 fields, i.e - Tech, Marketing, Content, Operations & Talent Acquisition, who want to break free from the traditional 9-to-5, build something impactful, and have the patience to grow a business from scratch.',
  },
  {
    title: 'How does equity distribution work?',
    description: 'Equity is allocated based on the role, contribution, and commitment of the founder. The exact percentage is discussed during the onboarding process, ensuring fairness and alignment with the startup’s long-term vision.',
  },
  {
    title: 'Do I need to invest money to join as a founder?',
    description: 'No, we don’t require founders to invest money upfront. Instead, we expect them to contribute their skills, time, and expertise to build and grow the startup.',
  },
  {
    title: 'Do I need to find a co-founder?',
    description: 'Yes and no.\n\nYes, if you are alone, as we believe startups thrive with a strong foundational team.\n\nNo, if we find a group of three individuals with complementary skills and the same mindset, then you don’t need to find a co-founder.\n\nIf you already have someone you trust and want to work with, they can also join.\n\nWe prioritize building teams where co-founders know each other, but most of the time, individuals join solo. We identify their interests, match them with like-minded people, and form a well-balanced team. For each venture, we typically look for three people with different experiences but a shared vision, as having a solid core team is crucial. However, sometimes things evolve differently, and we adapt accordingly.',
  },
  {
    title: 'Do I need to have an idea when I apply?',
    description: 'No, you don’t need to have an idea.\n\nWe are a venture studio, meaning we create and validate startup ideas in-house. As a founder, you’ll work on a high-potential idea that we provide, ensuring it aligns with your skills and interests.\n\nHowever, we are always open to discussions. If you have an idea, we can evaluate it, explore different angles, and pivot if necessary. Once the team is fully formed, we can also talk about potential changes to ensure the best possible direction for the venture.',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container mx-auto my-26 pb-10 pt-2'>
      <h1 className='uppercase text-center text-4xl font-bold pt-2 pb-4'>
        FAQ
      </h1>
      <div className='h-fit p-2'>
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${
              index !== tabs.length - 1 ? 'border-b' : ''
            }`}
          >
            <button
              className='p-3 px-2 w-full cursor-pointer sm:text-base text-[0.6rem] whitespace-nowrap items-center transition-all font-semibold flex gap-2'
              onClick={() => handleClick(index)}
            >
              <Plus
                className={`${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                } transition-transform ease-in-out w-5 h-5 text-gray-200`}
              />
              {tab.title}
            </button>
            <AnimatePresence mode='sync'>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.1,
                  }}
                >
                  <p className='text-white p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]'>
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
