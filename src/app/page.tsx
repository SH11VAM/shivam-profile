"use client";

import React, { useState } from "react";
import {
  Linkedin,
  Twitter,
  Github,
  Send,
  Mail,
  Book,
  Zap,
  Coffee,
  ContactRound,
} from "lucide-react";
import GithubProfile from "./components/githubProfile";
import Stack from "./components/stack";
import Project from "./components/project";
import WorkExp from "./components/workExp";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src="/ShivamYHPhoto.jpeg"
              alt="Profile"
              className="w-36 h-36 rounded-full mx-auto border-l-2 border-t-2 border-black border-b-[#000000] border-r-[#000000] border-b-[6px] border-r-[6px] object-cover"
            />
          </div>

          <h1 className="lg:text-6xl text-4xl font-bold mb-6 tracking-tight">
            SHIVAM JAIN
          </h1>

          <div
            className={`inline-block bg-pink-200 lg:px-8 lg:py-3 px-6 py-2 mb-8 shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)]`}
          >
            <div className="flex items-center justify-center gap-3 lg:text-lg  text-sm font-bold">
              <span>React</span>
              <span>|</span>
              <span>Next</span>
              <span>|</span>
              <span>MERN</span>
              <span>|</span>
              <span>AI</span>
            </div>
          </div>

          <div className="flex justify-center lg:gap-4 gap-2 mb-12">
            {[
              { icon: Linkedin, label: "LinkedIn",url:"https://www.linkedin.com/in/shivam-jain-dev/" },
              { icon: Twitter, label: "Twitter",url:"https://x.com/Shivam_2598" },
              { icon: Github, label: "GitHub", url:"https://github.com/SH11VAM" },
              { icon: Send, label: "Telegram",url:"https://t.me/shivamjainDev" },
              { icon: Mail, label: "Email",url:"mailto:jainshivam.dev@gmail.com" },
            ].map(({ icon: Icon, label,url }) => (
              <button
                key={label}
                className="px-3 py-2 border-2 border-b-4 border-r-4 border-black rounded-lg transition-color delay-150 duration-300 ease-in-out hover:shadow-[0_0_0_2px_rgb(0,0,0),6px_6px_0_0_rgb(204,153,255)] hover:scale-110 hover:border-0 "
                aria-label={label}
                onClick={() => window.open(url, "_blank")}
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>

        <hr className="border-2 border-black mb-8" />

        {/* Navigation Tabs */}
        <div className="flex justify-center lg:gap-4 gap-2 mb-12 flex-wrap">
          {["ABOUT", "STACK", "WORK", "PROJECT"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-8 py-3 border-l-2 border-t-2 border-black border-b-slate-900 border-r-slate-900 border-b-[4.5px] border-r-[4.5px]  font-bold transition-color delay-150 duration-300 ease-in-out hover:shadow-[0_0_0_2px_rgb(0,0,0),5px_5px_0_0_rgb(0,0,0)] rounded-lg hover:scale-110 hover:border-0  ${
                activeTab === tab.toLowerCase()
                  ? "bg-blue-200"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        {activeTab === "about" && (
          <div className="lg:space-y-8 space-y-4">
            {/* About Me */}
            <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)] bg-white p-8">
              <h2 className="lg:text-4xl text-2xl font-bold mb-6 text-center">
                Hi, I'm Shivam.
              </h2>
              <div className="lg:space-y-4 space-y-2 text-center lg:text-lg text-[16px]">
                <p>
                  I'm a Full-Stack Developer with a strong focus on{" "}
                  <span className="font-bold">
                    modern frontend development, performance optimization, and
                    scalable web applications.
                  </span>
                </p>

                <p>
                  I completed a{" "}
                  <span className="font-bold">
                    Full-Stack Developer Internship at Younglabs
                  </span>
                  , where I worked on production-grade platforms used by
                  teachers and students. I built and optimized applications
                  using{" "}
                  <span className="font-bold">
                    React, Next.js, TypeScript, and Node.js
                  </span>
                  , achieving strong Core Web Vitals and highly responsive user
                  interfaces.
                </p>

                <p>
                  With a backend-aware frontend mindset, I focus on building{" "}
                  <span className="font-bold">
                    maintainable, production-ready systems
                  </span>{" "}
                  with secure APIs, role-based access control, and
                  performance-driven architecture that solves real user
                  problems.
                </p>
              </div>
            </div>

            {/* Contributions */}
            <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)] bg-white p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Github size={28} />
                <h3 className="lg:text-2xl text-xl font-bold">Contributions</h3>
              </div>

              <GithubProfile />
            </div>

            {/* Learning & Interests */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)] bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={24} />
                  <h3 className="lg:text-2xl text-xl font-bold">Learning Now</h3>
                </div>
                <ul className="space-y-2 lg:text-lg text-sm">
                  <li>• Data Structures & Algorithms </li>
                  <li>• FastAPI & Flask</li>
                  <li>• Backend Development</li>
                </ul>
              </div>

              <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)] bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Book size={24} />
                  <h3 className="lg:text-2xl text-xl font-bold">Interests</h3>
                </div>
                <ul className="space-y-2 lg:text-lg text-sm">
                  <li>• Problem Solving</li>
                  <li>• Building Performant Systems</li>
                  <li>• Debugging Before Sleeping 😴</li>
                </ul>
              </div>
            </div>

            {/* contact */}
            <div className="text-center">
              <button className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)] bg-white lg:px-8 lg:py-4 px-6 py-2 lg:text-xl text-sm font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
                <ContactRound size={24} />
                jainshivam.dev@gmail.com
              </button>
            </div>
          </div>
        )}

        {activeTab === "stack" && <Stack />}

        {activeTab === "project" && <Project />}

        {activeTab === "work" && <WorkExp />}

        {/* {activeTab !== "about" && (
          <div className="shadow-[0_0_0_1px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)] bg-white p-12 text-center">
            <p className="text-2xl font-bold">
              {activeTab.toUpperCase()} section coming soon...
            </p>
          </div>
        )} */}

        {/* Footer */}
        <div className="text-center mt-12 lg:text-lg text-sm  text-gray-600">
          <p>© 2026 Shivam • Built with Next.js</p>
        </div>
      </div>
    </div>
  );
}
