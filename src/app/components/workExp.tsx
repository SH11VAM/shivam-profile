import React from "react";
import { Layers } from "lucide-react";
const WorkExp = () => {
  const frameworks = [
    "Delivered production-grade web pages optimized for Core Web Vitals, achieving <2s LCP and reducing bundle size by 35% through lazy loading, code splitting, and tree-shaking.",
    "Built a React-based teacher dashboard and student portal with Redux, JWT authentication, RBAC, and REST API integration.",
    "Developed a gamified Math Panel for Classes 1–8, serving 100+ students with interactive visualizations, progress tracking, and 95+ Lighthouse performance scores.",
    "Created a React Native Library Module with quiz-based and story-driven learning to enhance students’ mental math and vocabulary skills.",
    "Optimized a CRM dashboard by modularizing 20+ components, adding real-time analytics, and improving performance for large datasets—boosting teacher efficiency by ~25%.",
  ];
  return (
    <div>
      <div className="shadow-[0_0_0_2px_rgb(0,0,0),8px_8px_0_0_rgb(0,0,0)]  p-6">
        <div className="flex items-center justify-between lg:gap-2 gap-1 mb-4 flex-col lg:flex-row">
          <h3 className="lg:text-2xl text-sm font-bold">FULL STACK DEVELOPER(YOUNGLABS)</h3>
          <h3 className="lg:text-lg text-xs font-bold">MARCH 2025 - PRESENT</h3>
        </div>
        <hr className="border-2 border-gray-300 mb-4" />
        <ul className="space-y-2 lg:text-lg text-sm">
          {frameworks.map((framework) => (
            <li
              key={framework}
              className="lg:px-2 lg:py-1 px-1 py-1 border-black shadow-[0_0_0_2px_rgb(0,0,0),6px_6px_0_0_rgb(0,0,0)] m-4 lg:text-[16px] text-[12px] lg:font-bold font-medium bg-amber-200"
            >
              ⚬ {framework}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExp;
