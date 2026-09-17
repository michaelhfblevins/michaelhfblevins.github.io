import { wrap, section, heading2, goalSteps } from "@/lib/data";

/* Define Goal classes */
const highlight = "mb-8 rounded-r-lg border-l-[3px] border-l-accent py-5 px-7"
const highlight_p = "mb-0 text-[1.2rem] text-ink"
const section_subtitle = "mb-4 font-heading text-[1.3rem] font-semibold tracking-[0.04em] text-accent-2 sm:text-[1.3rem]"
const step_list = "list-none grid gap-3"
const step_list_li = "relative pl-[26px] text-[1.2rem] text-ink before:content-['—'] before:absolute before:left-0 before:text-accent"

export default function Goal() {
  return (
    <section
      id="goal"
      className={`${section} bg-surface`}
    >
      <div className={`${wrap} max-w-[1024px]`}>
        <div className="min-w-0 flex-1">
          <h2 className={heading2}>
            My Goal
          </h2>
          <div className={highlight}>
            <p className={highlight_p}>
              My goal is to contribute to pushing the frontier of our understanding
              of the universe, whether through astronomical research, scientific
              communication and outreach, or supporting scientists in various ways,
              such as processing and archiving data, aiding in software pipeline
              development, or running observations with astronomical equipment.
            </p>
          </div>
          <div className={section_subtitle}>
            How I'm Working to Achieve My Goal
          </div>
          <ul className={step_list}>
            {goalSteps.map((step) => (
              <li
                key={step}
                className={step_list_li}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}