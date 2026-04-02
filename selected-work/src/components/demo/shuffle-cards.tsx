import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    testimonial:
      "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
    author: "Jenn F. - Marketing Director @ Square",
  },
  {
    id: 2,
    testimonial:
      "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.",
    author: "Adrian Y. - Product Marketing @ Meta",
  },
  {
    id: 3,
    testimonial:
      "Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.",
    author: "Devin R. - Growth Marketing Lead @ OpenAI",
  },
];

export function ShuffleCards() {
  const [positions, setPositions] = useState<("front" | "middle" | "back")[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop()!);
    setPositions(newPositions);
  };

  return (
    <div className="grid h-full w-full place-content-center overflow-hidden bg-transparent px-8 py-12 text-slate-50">
      <div className="relative h-[450px] w-[350px]">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={t.id}
            {...t}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}

