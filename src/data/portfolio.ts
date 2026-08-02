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
  blurb: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "project_one",
    blurb:
      "Placeholder description of a project: the problem it solves and what you built.",
    tags: ["python", "react", "postgres"],
  },
  {
    name: "project_two",
    blurb:
      "Placeholder description of a second project, one or two sentences long.",
    tags: ["typescript", "ml"],
  },
  {
    name: "project_three",
    blurb: "Placeholder description of a third project worth showing off.",
    tags: ["go", "cli"],
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
