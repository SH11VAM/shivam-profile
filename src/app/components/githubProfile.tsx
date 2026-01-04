"use client";

import React, { useEffect, useState } from "react";

const COLORS = ["#ebedf0", "#c6b3f5", "#9b7df5", "#6b4bf5"];

const GithubProfile = () => {
  const [contributionData, setContributionData] = useState<number[][]>([]);

  useEffect(() => {
    const data = Array.from({ length: 53 }, () =>
      Array.from({ length: 7 }, () => {
        const random = Math.random();
        if (random > 0.7) return 3;
        if (random > 0.5) return 2;
        if (random > 0.3) return 1;
        return 0;
      })
    );

    setContributionData(data);
  }, []);

  if (!contributionData.length) return null; // prevents mismatch

  return (
    <div className="inline-block min-w-full">
      <div className="flex gap-1 mb-2 text-xs">
        {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(
          (month) => (
            <div key={month} className="w-16 text-center">
              {month}
            </div>
          )
        )}
      </div>

      <div className="flex gap-1">
        {contributionData.map((week, w) => (
          <div key={w} className="flex flex-col gap-1">
            {week.map((day, d) => (
              <div
                key={d}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: COLORS[day] }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubProfile;
