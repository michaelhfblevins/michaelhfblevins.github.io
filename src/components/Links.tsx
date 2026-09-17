import Image from "next/image";
import { wrap, section, heading2, } from "@/lib/data";

/* Define Links classes */
const cta_note = "mb-2 text-[1.2rem] text-ink"
const icon_row = "flex flex-wrap items-center gap-[26px]"
const icon_link = "group inline-flex"
const github_icon = "h-[84px] w-[84px] object-contain transition duration-[180ms] ease-out group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.85)]"
const linkedin_icon = "h-[84px] w-[84px] object-contain transition duration-[180ms] ease-out group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_0_5px_rgba(10,102,194,0.85)]"

export default function Links() {
  return (
    <section
      id="links"
      className={`${section} bg-canvas`}
    >
      <div className={`${wrap} max-w-[1024px]`}>
        <div className="min-w-0 flex-1">
          <h2 className={heading2}>
            Links
          </h2>
          <p className={cta_note}>
            Check out my GitHub and connect with me on LinkedIn!
          </p>
          <div className={icon_row}>
            <a href="https://github.com/michaelhfblevins" className={icon_link} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Image
              src="/images/GitHub_Lockup_White.png"
              alt="GitHub"
              width={84}
              height={84}
              className={github_icon}
              />
            </a>
            <a href="https://www.linkedin.com/in/michaelhfblevins" className={icon_link} aria-label="LinkedIn" rel="noopener noreferrer">
              <Image
              src="/images/LI-Logo.png"
              alt="LinkedIn"
              width={84}
              height={84}
              className={linkedin_icon}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}