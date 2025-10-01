const day1 = [
  "9:00 AM – Inauguration & Orientation",
  "10:00 AM – Hackathon Begins",
  "1:00 PM – Lunch Break",
  "2:00 PM – Coding & Mentorship",
  "7:00 PM – Dinner",
  "8:00 PM – Night Hacking",
]

const day2 = [
  "8:00 AM – Breakfast",
  "9:00 AM – Coding Resumes",
  "12:00 PM – Submission Deadline",
  "1:00 PM – Lunch",
  "2:00 PM – Final Presentations & Judging",
  "5:00 PM – Prize Distribution & Closing Ceremony",
]

function Day({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <ol className="mt-4 space-y-4">
        {items.map((t) => (
          <li key={t} className="relative pl-6">
            <span className="absolute left-0 top-1.5 size-3 rounded-full bg-accent ring-2 ring-accent/40" />
            <span className="text-sm md:text-base text-muted-foreground">{t}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="schedule" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Event <span className="text-primary">Schedule</span>
        </h2>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-8">
          <Day title="Day 1 (15th Oct)" items={day1} />
          <Day title="Day 2 (16th Oct)" items={day2} />
        </div>
      </div>
    </section>
  )
}
