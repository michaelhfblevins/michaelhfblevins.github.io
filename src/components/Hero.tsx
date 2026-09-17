import Image from "next/image";
import { wrap, heading1, tags } from "@/lib/data";

/* Define Hero classes */
const hero_wrap = "relative z-10 mx-auto flex flex-col items-center gap-7 px-7 text-center"
const hero_section = "relative overflow-hidden flex items-center justify-center size-full min-h-dvh"
const hero_bg = "absolute inset-0 z-0 bg-cover bg-center opacity-50"
const hero_profile = "-mt-24 h-40 w-40 flex-shrink-0 rounded-full border-[3px] border-accent object-cover"
const eyebrow = "text-[0.85rem] leading-[1.75] uppercase tracking-[0.2em] text-eyebrow"
const dek = "mb-8 max-w-[60ch] text-[1.4rem] leading-[1.75] text-ink"
const tag_row = "flex flex-wrap justify-center gap-4"
const tag_button = "animate-pulse-pop rounded-full border-[1.5px] border-accent px-4 py-2 text-[1rem] leading-[1.75] text-ink"

export default function Hero() {
  return (
    <section
      id="top"
      className={hero_section}
    >
      <div
        className={hero_bg}
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className={`${hero_wrap} max-w-[1024px]`}>
        <Image
          src="/images/profile.jpg"
          alt="Photo of Michael"
          width={200}
          height={200}
          className={hero_profile}
        />
        <p className={eyebrow}>
          Columbus, OH
        </p>
        <h1 className={heading1}>
            Michael Blevins
        </h1>
        <div className="min-w-0 flex-1">
          <p className={dek}>
            Aspiring astrophysicist, software developer, and data scientist
            applying computational tools and emerging technologies to
            develop novel, innovative solutions to complex problems.
          </p>
          <div className={tag_row}>
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={tag_button}
                style={{ animationDelay: `${index * 1.5}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}