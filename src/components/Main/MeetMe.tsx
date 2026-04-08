"use client";
import React from "react";
import Link from "next/link";

const MeetMe = () => {
  return (
    <section
      id="meet-me"
      className="flex items-center justify-center h-full w-full overflow-auto"
    >
      <div className="w-full h-full mx-auto max-w-4xl p-2.5 md:p-0 flex items-center md:justify-center">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              ABOUT ME
            </h2>
            <p className="text-sm lg:text-base xl:text-md leading-relaxed max-w-3xl mx-auto">
              Hi! I&apos;m{" "}
              <span className="[font-weight:700]">Shivraj Mohite</span>, a{" "}
              <span className="[font-weight:700]">Backend & DevOps Engineer</span>{" "}
              from{" "}
              <span className="[font-weight:700]">Nashik, Maharashtra</span> ッ
              I love building{" "}
              <span className="[font-weight:700]">scalable backend systems</span>{" "}
              with Java & Spring Boot, containerizing apps with{" "}
              <span className="[font-weight:700]">Docker & Kubernetes</span>, and
              deploying on{" "}
              <span className="[font-weight:700]">AWS</span>. Currently pursuing
              B.Tech in CS at{" "}
              <span className="[font-weight:700]">GGSIPU Nashik</span> and
              continuously sharpening my{" "}
              <span className="[font-weight:700]">DSA skills</span> with 200+
              problems solved.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              HIRE ME
            </h2>
            <p className="text-sm lg:text-base xl:text-md leading-relaxed max-w-3xl mx-auto">
              I&apos;m available for internship and freelance opportunities. If
              you need a committed backend developer to build or improve your
              product, feel free to connect.
              <Link
                href="https://mail.google.com/mail/u/0/?fs=1&to=shivrajmohite00zz@gmail.com&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 font-bold underline [text-decoration-thickness:1px]"
              >
                shivrajmohite00zz@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMe;
