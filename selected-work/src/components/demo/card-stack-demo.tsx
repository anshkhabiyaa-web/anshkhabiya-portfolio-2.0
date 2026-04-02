"use client";

import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { X } from "lucide-react";
import { useState } from "react";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Khabiya Store",
    description:
      "Managed operations and digital marketing for family retail business in Ratlam. Grew customer footfall by 1000 through digital campaigns and handled daily sales operations and employee management.",
    imageSrc: "/khabiya_store.jpg",
  },
  {
    id: 2,
    title: "Jai Hind Digital Nexus",
    description:
      "VP of Marketing for Nexus, a 2-day digital-led cultural fest at Jai Hind College Mumbai. Secured sponsorships and partnerships and helped build the committee from the ground up.",
    imageSrc: "/nexus_thumbnail.jpg",
  },
  {
    id: 3,
    title: "Incubator & Accelerator Centre",
    description:
      "As VP of Marketing, secured sponsorship for Internship Fair and Startup Expo at Jai Hind College Mumbai.",
    imageSrc: "/incubator_centre.jpg",
  },
  {
    id: 4,
    title: "AI-Powered Builds & Automation",
    description:
      "Built websites and digital tools using AI and automation stacks like Google AI Studio, Zapier, N8N, Lovable, Antigravity, Cursor, Supabase, WordPress, Pomelio and Gemini.",
    imageSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Event Committees, Jai Hind College",
    description:
      "Handled External PR and networking, managed brand relations and stakeholder networking, and led marketing for multiple college events and committees.",
    imageSrc:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  },
];

export function CardStackDemo() {
  const [open, setOpen] = useState<CardStackItem | null>(null);

  return (
    <div className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-5xl p-6 md:p-8">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={2000}
          pauseOnHover
          showDots
          cardWidth={520}
          cardHeight={320}
          onActiveClick={(item) => setOpen(item)}
        />
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {open.imageSrc ? (
                <img
                  src={open.imageSrc}
                  alt={open.title}
                  className="h-64 w-full object-cover"
                  draggable={false}
                />
              ) : null}
              <button
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/65"
                onClick={() => setOpen(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="text-2xl font-semibold text-slate-900">
                {open.title}
              </div>
              {open.description ? (
                <div className="mt-3 whitespace-pre-line text-base leading-relaxed text-slate-700">
                  {open.description}
                </div>
              ) : null}

              {open.href ? (
                <a
                  href={open.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  {open.ctaLabel ?? "Open"}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

