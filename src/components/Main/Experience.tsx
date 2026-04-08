import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center h-full w-full p-2.5 pl-4 md:p-8"
    >
      <div className="w-full mx-auto max-w-3xl text-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-4">
            EXPERIENCE
          </h2>
        </div>

        {/* Education */}
        <div className="w-full pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 mb-0 text-left">
          <h3 className="text-lg md:text-2xl font-semibold">
            Guru Gobind Singh College of Engineering
          </h3>
          <p className="text-[11px] sm:text-sm font-medium flex items-center justify-between">
            <span>B.Tech — Computer Science & Engineering · CGPA 7.5/10</span>
            <span>2024 – 2027</span>
          </p>
          <p className="text-xs mt-1 opacity-60">Nashik, Maharashtra</p>
        </div>

        {/* Certifications */}
        <div className="pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 text-left">
          <h3 className="text-lg md:text-2xl font-semibold mb-2">
            Certifications
          </h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <span className="opacity-40">→</span>
              <span>SQL (Advanced) — HackerRank</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-40">→</span>
              <span>Data Structures & Algorithms — Coursera</span>
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 text-left">
          <h3 className="text-lg md:text-2xl font-semibold mb-2">
            Achievements
          </h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <span className="opacity-40">→</span>
              <span>Solved 200+ DSA problems on LeetCode & GeeksforGeeks</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-40">→</span>
              <span>Participated & led multiple hackathons</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-40">→</span>
              <span>Built scalable Java backend systems with MySQL</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-40">→</span>
              <span>Deployed applications on AWS EC2 & Railway</span>
            </li>
          </ul>
        </div>

        {/* GitHub link */}
        <Link
          href="https://github.com/shivrajcodez"
          target="_blank"
          rel="noopener noreferrer"
          className="underline flex items-center justify-center gap-1 text-xs md:text-sm font-medium pt-2 md:pt-4 mt-2 md:mt-4 border-t border-current border-opacity-20 pb-2 md:pb-4 mb-2 md:mb-4"
        >
          GitHub
          <CiLocationArrow1 className="inline-block ml-0.5 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default Experience;
