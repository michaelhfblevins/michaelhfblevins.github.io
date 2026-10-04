/* Define CSS classes */
export const wrap = "relative z-10 mx-auto px-7"

export const section = "py-15 sm:py-24"

export const heading1 = "-my-2 sm:my-0 font-heading text-[2.4rem] font-bold leading-[1.1] tracking-[-0.3px] bg-gradient-to-r from-[#28a175] to-accent bg-clip-text text-transparent sm:text-[3.6rem]"

export const heading2 = "mb-7 font-heading text-[1.35rem] uppercase font-semibold tracking-[0.07em] text-accent"

export const text_p = "mb-4 max-w-[109ch] text-[1rem] sm:text-[1.2rem] leading-[1.75] text-ink-subtle"

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
  ml: "border-[#0c267a] before:bg-[#0c267a] hover:bg-[#061345] hover:border-[#061345] hover:shadow-[0_10px_24px_rgba(13,65,191,0.25)]",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#goal", label: "My Goal" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#links", label: "Links" },
];