import React from "react";
import { CodeXml, Layers, Pickaxe } from "lucide-react";
const Stack = () => {
  const languages = [
    "JavaScript",
    "TypeScript",
    "SQL",
    "Java",
    "C",
    "HTML",
    "CSS",
  ];
  const frameworks = [
    "React",
    "Next",
    "Node",
    "Express",
    "Zod",
    "Tailwind",
    "Shadcn",
    "NextAuth",
    "Prisma",
    "JWT",
    "RestAPI",
  ];
  const tools = [
    "Git",
    "GitHub",
    "VSCode",
    "Figma",
    "Canva",
    "Postman",
    "Vercel",
    "Netlify",
    "Render",
    "Cursor",
    "V0",
  ];
  const database = ["MongoDB", "PostgreSQL"];
  return (
    <div className="flex flex-col gap-7 justify-center">
      <h2 className="text-4xl font-bold mb-3 text-center underline">
        TECH-STACK
      </h2>
      <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)]  p-6">
        <div className="flex items-center gap-2 mb-4">
          <CodeXml size={24} />
          <h3 className="text-2xl font-bold">LANGUAGES</h3>
        </div>
        <hr className="border-2 border-gray-300 mb-4" />
        <ul className="space-y-2 text-lg flex flex-wrap">
          {languages.map((language) => (
            <li
              key={language}
              className="px-2 py-1  border-black shadow-[0_0_0_2px_rgb(0,0,0),6px_6px_0_0_rgb(0,0,0)] m-2 text-[16px] font-bold bg-emerald-200"
            >
              {language}
            </li>
          ))}
        </ul>
      </div>

      <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)]  p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers size={24} />
          <h3 className="text-2xl font-bold">FRAMEWORKS & LIBRARIES</h3>
        </div>
        <hr className="border-2 border-gray-300 mb-4" />
        <ul className="space-y-2 text-lg flex flex-wrap">
          {frameworks.map((framework) => (
            <li
              key={framework}
              className="px-2 py-1  border-black shadow-[0_0_0_2px_rgb(0,0,0),6px_6px_0_0_rgb(0,0,0)] m-2 text-[16px] font-bold bg-amber-200"
            >
              {framework}
            </li>
          ))}
        </ul>
      </div>

      <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)]  p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pickaxe size={24} />
          <h3 className="text-2xl font-bold">DEV-TOOLS</h3>
        </div>
        <hr className="border-2 border-gray-300 mb-4" />
        <ul className="space-y-2 text-lg flex flex-wrap">
          {tools.map((tool) => (
            <li
              key={tool}
              className="px-2 py-1  border-black shadow-[0_0_0_2px_rgb(0,0,0),6px_6px_0_0_rgb(0,0,0)] m-2 text-[16px] font-bold bg-fuchsia-200"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)]  p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pickaxe size={24} />
          <h3 className="text-2xl font-bold">DATABASES</h3>
        </div>
        <hr className="border-2 border-gray-300 mb-4" />
        <ul className="space-y-2 text-lg flex flex-wrap">
          {database.map((database) => (
            <li
              key={database}
              className="px-2 py-1  border-black shadow-[0_0_0_2px_rgb(0,0,0),6px_6px_0_0_rgb(0,0,0)] m-2 text-[16px] font-bold bg-rose-200"
            >
              {database}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
