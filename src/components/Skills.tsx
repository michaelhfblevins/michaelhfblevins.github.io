import { wrap, section, heading2, skills, skill_variants } from "@/lib/data";

/* Define Skills classes */
const skill_grid = "mb-20 list-none flex flex-wrap gap-[14px]"
const skill_grid_li = "inline-flex items-center gap-[10px] border-[1.5px] rounded-full px-[22px] py-[12px] bg-paper font-bold text-[0.95rem] transition duration-[180ms] ease before:content-[''] before:h-[9px] before:w-[9px] before:rounded-full before:shrink-0 hover:-translate-y-[3px] hover:before:bg-white hover:text-white"
const react_skill = "border-[#087EA4] before:bg-[#087EA4] hover:bg-[#087EA4] hover:shadow-[0_10px_24px_rgba(8,126,164,0.25)]"
const nextjs_skill = "border-white before:bg-white hover:border-black hover:bg-black hover:shadow-[0_10px_18px_rgba(200,200,200,0.20)]"
const tailwind_skill = "border-accent-2 before:bg-accent-2 hover:bg-accent-2 hover:shadow-[0_10px_24px_rgba(103,188,214,0.25)]"

export default function Skills() {
  return (
    <section
      id="skills"
      className={`${section} bg-surface`}
    >
      <div className={`${wrap} max-w-[1024px]`}>
        <div className="min-w-0 flex-1">
          <h2 className={heading2}>
            Data Analysis & <span className="text-[#16386b]">Machine Learning</span>
          </h2>
          <ul className={skill_grid}>
            {skills.map((skill) => (
              <li
                key={skill.name}
                className={`${skill_grid_li} ${skill_variants[skill.variant]}`}
              >
                {skill.name}
              </li>
            ))}
          </ul>
          <h2 className={heading2}>
            Web Development
          </h2>
          <ul className={skill_grid}>
            <li className={`${skill_grid_li} ${react_skill}`}>React</li>
            <li className={`${skill_grid_li} ${nextjs_skill}`}>Next.js</li>
            <li className={`${skill_grid_li} ${tailwind_skill}`}>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}