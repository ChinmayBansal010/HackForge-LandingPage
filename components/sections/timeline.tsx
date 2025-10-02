import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const day1Schedule = [
  { time: "8:00 - 9:00 AM", event: "Registrations" },
  { time: "10:00 AM", event: "Session 01 (Intro)" },
  { time: "12:00 PM", event: "Challenges Released" },
  { time: "1:00 - 3:00 PM", event: "Idea Formation" },
  { time: "3:00 - 5:00 PM", event: "Pitching to Panel / Evaluation" },
  { time: "6:00 PM", event: "Results: Top 30 Teams" },
  { time: "7:00 PM", event: "Departure" },
];

const day2Schedule = [
  { time: "9:00 - 10:00 AM", event: "Mentorship" },
  { time: "11:00 AM", event: "Submission" },
  { time: "12:00 PM", event: "Top 15 Announcement" },
  { time: "2:00 PM", event: "Lunch" },
  { time: "2:30 PM", event: "Sponsors' Address" },
  { time: "3:00 - 5:00 PM", event: "Final Presentations (PPT + Demo)" },
  { time: "5:00 - 6:00 PM", event: "About Sponsors" },
  { time: "6:00 - 7:00 PM", event: "Prize Distribution & Closing" },
];

function DayColumn({ title, levels }: { title: string; levels: { name: string; items: { time: string; event: string }[] }[] }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">{title}</h3>
      <div className="relative">
        <div className="absolute left-4 top-2 h-full w-0.5 bg-primary/20" />
        {levels.map((level) => (
          <div key={level.name} className="mb-8">
            <h4 className="text-lg font-medium text-accent mb-4 pl-12">{level.name}</h4>
            <ol className="space-y-8">
              {level.items.map(({ time, event }) => (
                <li key={event} className="relative pl-12">
                  <div className="absolute left-4 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <p className="text-sm font-semibold text-primary">{time}</p>
                  <p className="mt-1 text-base text-muted-foreground">{event}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  const day1Levels = [
    { name: "Level 02 - Hackathon Begins", items: day1Schedule }
  ];

  const day2Levels = [
    { name: "Level 03 - Hackathon Resumes", items: [day2Schedule[0]] },
    { name: "Level 04 - Submissions & Finals", items: day2Schedule.slice(1) }
  ];

  return (
    <section id="schedule" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Event <span className="text-primary">Timeline</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Level 01 - Team Selection: Top 60 Teams Shortlisted
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-12">
          <DayColumn title="Day 01" levels={day1Levels} />
          <DayColumn title="Day 02" levels={day2Levels} />
        </div>
      </div>
    </section>
  );
}