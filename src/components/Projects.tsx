import { wrap, section, heading2, text_p, projects, type Project } from "@/lib/data";

/* Define Project classes */
const project_grid = "mb-2 grid gap-5"
const project_card = "rounded-[12px] border-[1px] border-[#00471b] bg-paper py-[26px] px-7 transition translate-y-0 duration-250 ease hover:-translate-y-[2px] hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.4)] hover:border-accent"
const project_card_p = "mb-2 text-[1.15rem] text-ink"
const project_card_h3 = "mb-[14px] font-heading text-[1.3rem] font-bold text-[#28a175] text-center"

/* Define ProjectCard function */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={project_card}>
      <h3 className={project_card_h3}>
        {project.title}
      </h3>
      <ul className="space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet} className={project_card_p}>
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className={`${section} bg-canvas`}
    >
      <div className={`${wrap} max-w-[1024px]`}>
        <div className="min-w-0 flex-1">
          <h2 className={heading2}>
            Projects
          </h2>
          <p className={text_p}>
            I have worked on two main projects:{" "}
            <strong>"Unsupervised Discovery of Galactic Substructures and Anomalies in the JWST COSMOS-Web Survey"</strong> and {" "}
            <strong>"Machine Learning for Dwarf Satellite Detection"</strong>.
            These are both independent/course-based projects that I worked on during my time as a student at The Ohio State University.
          </p>
        </div>
      </div>
      <div className={`${wrap} max-w-[1380px] mt-8`}>
        <div className="min-w-0 flex-1">
          <div className={project_grid}>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}