import React from "react";
import { ExternalLink } from "lucide-react";
const Project = () => {
    const project = [
   {
      name: "Assignly",
      description:
        "A real-time task and ticket assignment system that allows teams to create, assign, and track tasks with instant status updates and a streamlined user experience.",
      techStack:
        "Nextjs, TypeScript, Tailwind, JWT, ZOD ,Prisma, NeonDB, Websocket, Nodejs, Expressjs ",
      githubLink: "https://github.com/SH11VAM/task-Management",
    },
    {
      name: "Genisys",
      description:
        "Built a real-time AI platform using OpenAI APIs with conversational responses, code and image generation, dynamic intent-based rendering, and secure authentication—delivering faster responses and a polished user experience.",
      techStack: "Nextjs, TypeScript, Tailwind, Shadcn Ui, OpenAI, Clerk(Auth)",
      githubLink: "https://github.com/SH11VAM/Genisys",
    },
   
    { name: "FoodFlow", description: "A food delivery app showcasing role-based authentication and location-aware pricing, ensuring secure user access and accurate pricing across different regions.", techStack: "Nextjs, TypeScript, Tailwind, Shadcn Ui, JWT, Prisma, NeonDB, Nodejs, Expressjs", githubLink: "https://github.com/SH11VAM/Food_app" },

  ];

  return (
    <div className="flex flex-col lg:gap-7 gap-4 justify-center">
      {project.map((project, index) => (
        <div
          className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)] lg:p-6 p-4"
          key={index}
        >
          <div className="flex justify-between gap-2 mb-1">
            <h3 className="lg:text-xl text-lg font-bold">{project.name}</h3>
            <div className="p-1 border-2 border-b-4 border-r-4 border-black rounded-lg transition-color delay-150 duration-300 ease-in-out hover:shadow-[0_0_0_2px_rgb(0,0,0),6px_6px_0_0_rgb(204,153,255)] hover:scale-110 hover:border-0 ">
              <a href={project.githubLink} target="_blank">
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
          <p className="lg:text-xs text-[10px] border-2 p-1 bg-emerald-200 max-w-2xl">
            {project.techStack}
          </p>
          <p className="lg:text-sm text-xs mt-2">● {project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
