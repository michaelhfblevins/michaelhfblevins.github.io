import Image from "next/image";
import { wrap, section, heading2 } from "@/lib/data";

/* Define Project classes */
const project_grid = "relative grid md:grid-cols-2 gap-0"
const project_card = "rounded-[1rem] border-[1px] border-[#00471b] bg-paper transition translate-y-0 duration-250 ease hover:-translate-y-[2px] hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.4)] hover:border-accent overflow-hidden"
const project_card_p = "text-[1.1rem] text-ink-subtle font-heading"
const project_card_h3 = "mb-4 font-heading text-[1.4rem] font-bold text-[#28a175]"
const img_preview = "block relative md:aspect-auto min-h-[420px] md:h-full"
const link_button = "mt-4 inline-flex w-fit items-center gap-2 rounded-full border-[1.5px] border-accent-2 bg-accent-2 px-5 py-2.5 font-heading font-bold text-[1.1rem] text-ink transition duration-[180ms] ease hover:-translate-y-[2px] hover:text-[#087EA4] hover:shadow-[0_10px_40px_-10px_rgba(103,188,214,0.25)]"

export default function Projects() {
  return (
    <section
      id="projects"
      className={`${section} bg-[linear-gradient(180deg,#050f0a_25%,#081711_70%,#081711_80%)]`}
    >
      <div className={`${wrap} max-w-[1024px]`}>
        <h2 className={heading2}>
          Projects
        </h2>
        <h1 className="mt-8 font-heading text-[2.4rem] sm:text-[3rem] font-bold leading-[1.1] tracking-[0.3px] text-center">
            Academic Research
        </h1>
      </div>
      <div className={`${wrap} max-w-[77rem] mt-16`}>
          <div className={`${project_card} mb-10`}>
            <div className={project_grid}>
              <div className={img_preview}>
                <Image
                  src="/images/cosmos-web-preview.jpg"
                  alt="COSMOS-Web Cluster Z-Score Heatmap"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className={project_card_h3}>
                  Unsupervised Discovery of Galactic Substructures and Anomalies in the JWST COSMOS-Web Survey
                </h3>
                <p className={`${project_card_p} mb-4`}>
                  I combed through James Webb Space Telescope galaxy catalogs to find anomalous sources
                  that potentially merit further scientific follow-up.
                </p>
                <p className={project_card_p}>
                  I developed an automated clustering pipeline in Python to analyze data for over 90,000 galaxies.
                  By interpreting cluster physical fingerprints through Z-score heatmaps,
                  the clustering model revealed novel data anomalies, including rare dwarf galaxies and metal-poor starbursts.
                </p>
              </div>
            </div>
          </div>
          <div className={`${project_card}`}>
            <div className={project_grid}>
              <div className="p-8 flex flex-col justify-center">
                <h3 className={project_card_h3}>
                  Machine Learning for Dwarf Satellite Detection
                </h3>
                <p className={`${project_card_p} mb-4`}>
                  We developed a binary classifier to identify rare dwarf satellite galaxies in the SAGA Survey DR3,
                  utilizing cross-modal embeddings and a training set of photometrically indistinguishable background
                  sources to capture morphological features beyond standard photometric data.
                </p>
                <p className={project_card_p}>
                  We further applied dimensionality reduction techniques and trained a logistic regression model,
                  optimizing the decision threshold to achieve 95% recall to maximize the recovery of potential
                  candidates for scientific follow-up.
                </p>
              </div>
              <div className={img_preview}>
                <Image
                  src="/images/dwarf-satellite-preview.jpg"
                  alt="Dwarf Satellite Detection Jupyter Notebook"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <h1 className="mt-32 font-heading text-[2.4rem] sm:text-[3rem] font-bold leading-[1.1] tracking-[0.3px] text-center">
            AI Engineering
          </h1>
          <div className={`${project_card} mt-16 mb-8 relative`}>
            <div className={project_grid}>
              <div className="relative group">
                <a href="https://blevins-ai-tutor.streamlit.app/" className={img_preview} aria-label="Blevins AI Tutor" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/ai-tutor-preview.png"
                    alt="Blevins AI Tutor"
                    fill
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </a>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="animate-dot-pulse w-[9px] h-[9px] rounded-full bg-[#00a130]" />
                  <span className="text-xs font-heading font-semibold text-accent tracking-[1.2px]">CURRENTLY DEVELOPING</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex justify-center">
                  <h3 className={project_card_h3}>
                    Blevins AI Tutor
                  </h3>
                </div>
                <p className={`${project_card_p} mb-4`}>
                  I'm currently working on a project to build my own personal AI tutor!
                </p>
                <p className={`${project_card_p} mb-4`}>
                  I utilize Retrieval Augmented Generation (RAG) to access all of my undergraduate course materials
                  including lectures, textbooks, tutorials, and assignments.
                  I'm building content-specific RAG Agents with LlamaIndex and storing text embeddings in a ChromaDB vector database.
                </p>
                <a href="https://blevins-ai-tutor.streamlit.app/" className={link_button}  aria-label="Blevins AI Tutor" target="_blank" rel="noopener noreferrer">
                  Check it out!
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}