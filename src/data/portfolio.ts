export const profile = {
  name: "Zoe Chakraborty",
  subtitle: "Computer Science @ Johns Hopkins University",
};

export const about = [
  "I'm Zoe, it's nice to meet you! I'm studying Computer Science at Johns Hopkins University. I've been working full-time during the summers since high school. At my first \"big girl\" job at the University of Toronto, I started building my own machine learning models on gigantic climate datasets. (After that, I must have built at least 100 different models with different datasets and different types). The next summer, I was at UofT again, and because Google released Codey in Google Colab, I was able to use AI code generation for the very first time. This is where my interest and excitement for this field began.",
  "I'm always interested in learning new things, and exploring different technical areas. I'm also always looking for new opportunities, whether research or internships, so please reach out to me!",
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
    tags: ["python", "ml","data science","climate science"],
    bullets: [
      "Built Linear Regression, Random Forest, XGBoost, SARIMAX, ARIMA, and NeuralProphet models on WeatherBench (191GB of ERA5 data), supervised by Professor Easterbrook.",
      "Applied temporal feature engineering, K-Fold cross-validation, GridSearchCV tuning and SHAP analysis with best performing model achieving 92% decrease in RMSE over baseline."
    ],
    link: "https://github.com/zoechakra/Climate-Dataset-Tutorials",
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
