export const profile = {
  name: "Zoe Chakraborty",
  subtitle: "Computer Science @ Johns Hopkins University",
};

export const about = [
  "Placeholder bio paragraph one. A couple of sentences about who you are, what you study, and the kinds of problems you like working on.",
  "Placeholder bio paragraph two. What you're currently exploring, tools you reach for, and what you're looking for next.",
];

export const aboutFacts: Array<[string, string]> = [
  ["technical interests", "Placeholder, Placeholder, Placeholder"],
  ["currently studying", "C, C++, .NET"],
  ["hobbies", "Placeholder, Placeholder, Placeholder"],
];

export type Internship = {
  company: string;
  team: string;
  dates: string;
};

export const internships: Internship[] = [
  {
    company: "Royal Bank of Canada",
    team: "Direct Investing",
    dates: "May–Aug 2026",
  },
  {
    company: "Royal Bank of Canada",
    team: "Advice Centre/Branch Technology",
    dates: "Jul–Aug 2025",
  },
  {
    company: "IBM",
    team: "ProjectMax Developer Productivity",
    dates: "Jun–Aug 2024",
  },
  {
    company: "University of Toronto",
    team: "Climate Informatics",
    dates: "Jul–Aug 2022",
  },
];

export type Project = {
  name: string;
  dates: string;
  tags: string[];
  bullets: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "air_pollutant_forecaster",
    dates: "2023–2025",
    tags: [
      "python",
      "ml",
      "three.js",
      "ar.js",
      "html",
      "css",
      "blender",
    ],
    bullets: [
      "Engineered an air quality forecasting platform for 3 cities, integrating real-time sensor feeds with 175K+ historical records, iterating through 6 time-series models to optimize pollutant predictions and deploying the most accurate.",
      "Launched an interactive augmented reality web app translating forecasts into 3D molecular visualizations and real-time health risk assessments, achieving 10K+ site visits, a 4.9/5 user score, and $3,000 in funding.",
    ],
  },
  {
    name: "project_two",
    dates: "2025",
    tags: ["typescript", "ml"],
    bullets: [
      "Placeholder description of a second project, one or two sentences long.",
    ],
    link: "https://github.com/zoechakra/project-two",
  },
  {
    name: "project_three",
    dates: "2024",
    tags: ["go", "cli"],
    bullets: [
      "Placeholder description of a third project worth showing off.",
    ],
    link: "https://github.com/zoechakra/project-three",
  },
];

export const resume = {
  fileName: "resume.pdf",
  viewUrl:
    "https://drive.google.com/file/d/1_1aZV7MccyxO0lCts8XaN8ngUVrDnqLM/view?usp=sharing",
  embedUrl:
    "https://drive.google.com/file/d/1_1aZV7MccyxO0lCts8XaN8ngUVrDnqLM/preview",
};

export const contact = {
  email: "ichakra4@jh.edu",
  linkedin: "https://www.linkedin.com/in/zoe-chakraborty/",
  linkedinLabel: "linkedin.com/in/zoe-chakraborty",
  github: "https://github.com/zoechakra",
  githubLabel: "github.com/zoechakra",
};
