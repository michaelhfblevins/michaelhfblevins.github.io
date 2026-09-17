export const tags = [
  "Python",
  "Machine Learning",
  "Astronomical Data Analysis",
  "AI Engineering",
];

export const goalSteps = [
  "Working on projects to apply, enhance, and expand my skillset to increase my versatility as a scientist.",
  "Continuing my learning independently through lectures on modern astronomical research practices and working through interactive textbooks in Jupyter",
  "Getting involved. Attending science talks, participating in clubs/societies, reaching out and making connections with people in the field.",
];

export type Project = {
  title: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    title:
      "Unsupervised Discovery of Galactic Substructures and Anomalies in the JWST COSMOS-Web Survey",
    bullets: [
      "Developed an automated clustering pipeline using Python to analyze high-dimensional tabular data for over 80,000 galaxies, successfully identifying peculiar substructures without labeled training data",
      "Engineered a feature space combining photometric, structural, and physical parameters (e.g., stellar mass, metallicity) to characterize complex distributions in astronomical data",
      "Identified novel data anomalies, including metal-poor starbursts and rare dwarf galaxies, by interpreting cluster physical fingerprints via Z-score heatmaps",
      "Detected algorithmic bias, revealing that geometric features (orientation/inclination) were overpowering physical features in morphological classifications",
    ],
  },
  {
    title: "Machine Learning for Dwarf Satellite Detection",
    bullets: [
      "Developed a binary classifier to identify rare dwarf satellite galaxies in the SAGA Survey DR3, utilizing cross-modal embeddings and a training set of photometrically indistinguishable background sources to capture morphological features beyond standard photometric data",
      "Applied dimensionality reduction techniques and trained a logistic regression model, optimizing the decision threshold to achieve 95% recall to maximize the recovery of potential candidates for scientific follow-up",
    ],
  },
];

export const skills = [
  { name: "Bayesian Statistics", variant: "data"},
  { name: "Linear/Logistic Regression", variant: "data"},
  { name: "Dimensionality Reduction", variant: "data"},
  { name: "Neural Networks (MLP, Convolutional, Bayesian, Siamese)", variant: "ml"},
  { name: "Clustering Algorithms", variant: "ml"},
  { name: "Retrieval Augmented Generation (RAG)", variant: "ml"},
  { name: "Agentic LLMs", variant: "ml"}
] as const;

export const skill_variants = {
  data: "border-[#45a180] before:bg-[#45a180] hover:bg-[#45a180] hover:shadow-[0_10px_24px_rgba(76,175,140,0.25)]",
  ml: "border-[#16386b] before:bg-[#16386b] hover:bg-[#0c2340] hover:border-[#0c2340] hover:shadow-[0_10px_24px_rgba(26,85,173,0.25)]",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#goal", label: "My Goal" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#links", label: "Links" },
];

/* Define CSS classes */
export const wrap = "relative z-10 mx-auto px-7"

export const section = "py-15 sm:py-21"

export const heading1 = "font-heading text-[2.4rem] font-bold leading-[1.1] tracking-[-0.3px] bg-gradient-to-r from-[#28a175] to-accent bg-clip-text text-transparent sm:text-[3.6rem]"

export const heading2 = "mb-7 font-heading text-[1.35rem] uppercase font-semibold tracking-[0.07em] text-accent sm:text-[1.35rem]"

export const text_p = "mb-4 max-w-[109ch] text-[1.2rem] leading-[1.75] text-ink"