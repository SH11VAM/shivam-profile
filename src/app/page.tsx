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
} from "lucide-react";
import GithubProfile from "./components/githubProfile";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src="/api/placeholder/150/150"
              alt="Profile"
              className="w-36 h-36 rounded-full mx-auto border-4 border-black object-cover"
            />
          </div>

          <h1 className="lg:text-6xl text-4xl font-bold mb-6 tracking-tight">
            SHIVAM JAIN
          </h1>

          <div className="inline-block border-4 border-black bg-pink-200 px-8 py-3 mb-8">
            <div className="flex items-center justify-center gap-3 text-lg font-bold">
              <span>React</span>
              <span>|</span>
              <span>Next</span>
              <span>|</span>
              <span>MERN</span>
              <span>|</span>
              <span>AI</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Github, label: "GitHub" },
              { icon: Send, label: "Telegram" },
              { icon: Mail, label: "Email" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="p-3 border-3 border-black rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>

        <hr className="border-2 border-black mb-8" />

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["ABOUT", "STACK", "PROJECTS", "ACHIEVEMENTS", "COMMUNITY"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-8 py-3 border-3 border-black rounded-lg font-bold transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? "bg-blue-200"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Content Section */}
        {activeTab === "about" && (
          <div className="space-y-8">
            {/* About Me */}
            <div className="border-4 border-black bg-white p-8">
              <h2 className="text-4xl font-bold mb-6 text-center">
                Hi, I'm Rashmin.
              </h2>
              <div className="space-y-4 text-center text-lg">
                <p>
                  I'm a 3rd-year Computer Science & Business Systems student
                  with a strong focus on{" "}
                  <span className="font-bold">
                    Rust, backend development, and Web3.
                  </span>
                </p>
                <p>
                  I've studied Rust and graduated from elite blockchain
                  fellowships like{" "}
                  <span className="font-bold">Ackee - School of Solana</span>{" "}
                  and <span className="font-bold">Turbin3 Builders</span>{" "}
                  Cohort. I actively build using the{" "}
                  <span className="font-bold">MERN stack</span> and have an
                  overview of <span className="font-bold">AI/ML concepts.</span>
                </p>
                <p>
                  I'm also a student at{" "}
                  <span className="font-bold">100xDevs</span>, learning to build
                  scalable, production-ready systems with a strong backend-first
                  mindset.
                </p>
              </div>
            </div>

            {/* Contributions */}
            <div className="border-4 border-black bg-white p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Github size={28} />
                <h3 className="text-2xl font-bold">Contributions</h3>
              </div>

              <div className="overflow-x-auto">
                <GithubProfile />
              </div>

              <p className="text-center mt-4 text-sm">
                304 contributions in the last year
              </p>
            </div>

            {/* Learning & Interests */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-4 border-black bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={24} />
                  <h3 className="text-2xl font-bold">Learning Now</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• Rust Lang Book</li>
                  <li>• Rust Atomics and Locks</li>
                  <li>• Rust for Rustaceans</li>
                </ul>
              </div>

              <div className="border-4 border-black bg-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Book size={24} />
                  <h3 className="text-2xl font-bold">Interests</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• Philosophies</li>
                  <li>• Organizing Cool Stuff</li>
                  <li>• Sleepinn..zzz</li>
                </ul>
              </div>
            </div>

            {/* Buy Coffee Button */}
            <div className="text-center">
              <button className="border-4 border-black bg-white px-8 py-4 text-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
                <Coffee size={24} />
                Buy me a cryptic coffee
              </button>
            </div>
          </div>
        )}

        {activeTab !== "about" && (
          <div className="border-4 border-black bg-white p-12 text-center">
            <p className="text-2xl font-bold">
              {activeTab.toUpperCase()} section coming soon...
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p>© 2026 Rashmin • Built with React + Vite</p>
        </div>
      </div>
    </div>
  );
}
