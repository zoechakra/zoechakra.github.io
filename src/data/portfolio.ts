export const profile = {
  name: "Zoe Chakraborty",
  subtitle: "Computer Science @ Johns Hopkins University",
};

export const about = [
  "I'm Zoe, it's nice to meet you! I'm studying Computer Science at Johns Hopkins University. I've been working full time every summer (except one) since my freshman year of high school. In my very first \"big girl\" job as a research assistant, I was learning how to build ML models on enormously gigantic climate datasets. The next summer, Google Colab released Codey, and I had the opportunity to try out AI code generation for the very first time. This is where my interest in the ML/AI field started.",
  "I love exploring new technical areas, especially ones that make me feel like I'm living in the far future. I'm also always looking for new opportunities, whether internships or research or anything else, so please feel free to reach out to me!",
];

export const aboutFacts: Array<[string, string]> = [
  ["technical interests", "full stack development, agentic AI"],
  ["currently studying", "C, C++, ASP.NET Core"],
  ["hobbies", "reading, driving, hiking"],
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
    name: "WeatherBench_tutorials",
    dates: "2022",
    tags: ["python", "ml","data science","climate science "],
    bullets: [
      "Authored 2 tutorials on climate data analysis (Xarray, pandas, sckitlearn and numpy) and geospatial visualization (Matplotlib, Basemap, Seaborn and CliMetLab), adopted as course material for 150+ third-year students.",
    ],
    link: "hhttps://github.com/zoechakra/Climate-Dataset-Tutorials",
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
