// components/sections/timeline.tsx

const day1 = [
  { time: "9:00 AM", event: "Inauguration & Orientation" },
  { time: "10:00 AM", event: "Hackathon Begins" },
  { time: "1:00 PM", event: "Lunch Break" },
  { time: "2:00 PM", event: "Coding & Mentorship" },
  { time: "7:00 PM", event: "Dinner" },
  { time: "8:00 PM", event: "Night Hacking" },
]

const day2 = [
  { time: "8:00 AM", event: "Breakfast" },
  { time: "9:00 AM", event: "Coding Resumes" },
  { time: "12:00 PM", event: "Submission Deadline" },
  { time: "1:00 PM", event: "Lunch" },
  { time: "2:00 PM", event: "Final Presentations & Judging" },
  { time: "5:00 PM", event: "Prize Distribution & Closing Ceremony" },
]

function DayColumn({ title, items }: { title: string; items: { time: string; event: string }[] }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">{title}</h3>
      <div className="relative">
        {/* The vertical line */}
        <div className="absolute left-4 top-2 h-full w-0.5 bg-primary/20" />
        <ol className="space-y-8">
          {items.map(({ time, event }) => (
            <li key={event} className="relative pl-12">
              {/* The circle on the line */}
              <div className="absolute left-4 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <p className="text-sm font-semibold text-primary">{time}</p>
              <p className="mt-1 text-base text-muted-foreground">{event}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="schedule" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
          Event <span className="text-primary">Schedule</span>
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-12">
          <DayColumn title="Day 1 (15th Oct)" items={day1} />
          <DayColumn title="Day 2 (16th Oct)" items={day2} />
        </div>
      </div>
    </section>
  )
}