import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who can participate in HackForge?",
    answer: "HackForge is open to all university students, regardless of their major or year of study. We welcome everyone with a passion for creating and learning.",
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there is a nominal registration fee of ₹250 per team to cover event costs and ensure commitment. This provides your team with full access to the event, meals, and swag.",
  },
  {
    question: "What is the team size?",
    answer: "Teams can consist of 2 to 5 members. You can register as a team or as an individual.",
  },
  {
    question: "Do I need to have coding experience?",
    answer: "While coding experience is helpful, it's not a strict requirement. We encourage participants from all backgrounds to join. It's a great opportunity to learn from mentors and peers.",
  },
  {
    question: "What should I bring to the event?",
    answer: "You should bring your laptop, chargers, any necessary software pre-installed, and a valid student ID. Most importantly, bring your ideas and enthusiasm!",
  },
  {
    question: "Is offline payment available?",
    answer: "No, offline payment is not available. All payments must be made through the designated online portal.",
  },
  {
    question: "Will accommodation be provided?",
    answer: "Accommodation for stay will be provided exclusively to outstation attendees (those coming from outside Delhi). However, travel expenses will not be reimbursed for anyone. Participants requesting accommodation must inform the organizers at least 2 days prior to the event.",
  },
];


export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}