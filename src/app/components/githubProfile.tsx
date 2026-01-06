"use client";

import React, { useEffect, useState } from "react";

interface ContributionDay {
  color: string;
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

const GithubProfile = () => {
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [weekContribution, setWeekContribution] = useState<Week[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("/api/github");
    const data = await res.json();
    const githubdata =
      data.data.user.contributionsCollection.contributionCalendar;
    console.log(githubdata.weeks);
    setTotalContributions(githubdata.totalContributions);
    setWeekContribution(githubdata.weeks);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex gap-1 mb-2 text-xs justify-center">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month) => (
              <div key={month} className="w-16 text-center">
                {month}
              </div>
            ))}
          </div>

          <div className="flex gap-1 justify-center">
            {weekContribution.map((week, w) => (
              <div key={w} className="flex flex-col gap-1">
                {week.contributionDays.map((day, d) => (
                  <div
                    key={d}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: day.color }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm">
        {totalContributions} contributions in the last year
      </p>
    </div>
  );
};

export default GithubProfile;
