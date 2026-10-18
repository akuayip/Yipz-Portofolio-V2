import type { Project, ProjectCategory, ProjectStatus } from "./types";

const pending =
  "This section is ready for verified project context, decisions, implementation details, and personal contributions.";
const dummyMedia = "/dummy.jpeg";

type ProjectSeed = {
  slug: string;
  title: string;
  tagline: string;
  domain: string;
  categories: ProjectCategory[];
  technologies: string[];
  status?: ProjectStatus;
  projectType?: Project["projectType"];
  featured?: boolean;
};

const seeds: ProjectSeed[] = [
  { slug: "game-tebak-aku", title: "Game Tebak Aku", tagline: "An early game project centered on playful guessing interactions.", domain: "Game Development", categories: ["Games"], technologies: ["Game Development", "Interaction Design"] },
  { slug: "game-tetap-hidup", title: "Game Tetap Hidup — Interactive Game", tagline: "An interactive game experiment built around responsive player actions.", domain: "Game Development", categories: ["Games"], technologies: ["Game Development", "Interactive Systems"] },
  { slug: "capital-bike-analysis", title: "Capital Bike Analysis", tagline: "An exploratory analysis of bicycle usage data and its underlying patterns.", domain: "Data Analytics", categories: ["Data"], technologies: ["Data Analysis", "Data Visualization"], status: "research" },
  { slug: "website-pplk-2024", title: "Website PPLK 2024", tagline: "A web experience created to support the PPLK 2024 program.", domain: "Web Development", categories: ["Web"], technologies: ["Web Development", "Responsive Design"], status: "deployed", projectType: "group" },
  { slug: "website-pemasaran", title: "Website Pemasaran", tagline: "A marketing website focused on presenting information and guiding visitors clearly.", domain: "Web Development", categories: ["Web"], technologies: ["Web Development", "UI Design"], status: "deployed" },
  { slug: "loan-credit-detection", title: "Loan Credit Detection", tagline: "A machine learning project exploring credit-related prediction from structured data.", domain: "Machine Learning", categories: ["AI / ML", "Data"], technologies: ["Machine Learning", "Classification", "Python"], status: "research" },
  { slug: "lstm-vs-gru-stock-prediction", title: "LSTM vs GRU — Stock Prediction", tagline: "A comparative time-series study of LSTM and GRU approaches for stock prediction.", domain: "Machine Learning", categories: ["AI / ML", "Data"], technologies: ["LSTM", "GRU", "Time Series", "Python"], status: "research" },
  { slug: "website-smart-brin", title: "Website SMART BRIN", tagline: "A website project developed for the SMART BRIN context and its information needs.", domain: "Web Development", categories: ["Web"], technologies: ["Web Development", "Responsive Design"], status: "deployed", projectType: "group" },
  { slug: "imputing-missing-weather-data", title: "Imputing Missing Weather Data", tagline: "A data science study exploring methods for estimating missing weather observations.", domain: "Data Science", categories: ["AI / ML", "Data"], technologies: ["Data Imputation", "Weather Data", "Python"], status: "research" },
  { slug: "peta-investasi-indonesia-2017-2024", title: "Peta Investasi Indonesia 2017–2024", tagline: "A geographic data visualization of investment patterns across Indonesia from 2017 to 2024.", domain: "Data Visualization", categories: ["Data"], technologies: ["Data Visualization", "Geospatial Data", "Data Analysis"], status: "research" },
  { slug: "image-shadow-removal-comparison", title: "Conventional vs Deep Learning for Image Shadow Removal", tagline: "A comparative study of conventional and deep learning methods for removing image shadows.", domain: "Computer Vision", categories: ["AI / ML", "Computer Vision"], technologies: ["Deep Learning", "Image Processing", "Computer Vision"], status: "research", featured: true },
  { slug: "camfu-pose-detection-game", title: "CamFu — Real-Time Pose Detection Game", tagline: "An interactive game controlled through real-time human pose detection.", domain: "Computer Vision", categories: ["AI / ML", "Computer Vision", "Games"], technologies: ["Pose Detection", "Real-Time Vision", "Interactive Game"], status: "prototype", featured: true },
  { slug: "vision-mamba-vs-mamba-yolo-head-detection", title: "Vision Mamba vs Mamba-YOLO for Head Detection", tagline: "A comparative head-detection study using Vision Mamba and Mamba-YOLO approaches.", domain: "Computer Vision", categories: ["AI / ML", "Computer Vision"], technologies: ["Vision Mamba", "Mamba-YOLO", "Head Detection", "PyTorch"], status: "research", featured: true },
  { slug: "journease-document-classification", title: "Journease — Document Classification", tagline: "A document classification experience for organizing travel information more clearly.", domain: "Document AI", categories: ["AI / ML"], technologies: ["Document Classification", "OCR", "Information Extraction"], status: "prototype", projectType: "group", featured: true },
  { slug: "fisharee-fish-segmentation-classification", title: "FiSharee — Fish Segmentation and Classification", tagline: "A computer vision project for segmenting and classifying fish imagery.", domain: "Computer Vision", categories: ["AI / ML", "Computer Vision"], technologies: ["Image Segmentation", "Classification", "Computer Vision"], status: "prototype", projectType: "group", featured: true },
  { slug: "foammy-skincare-product-comparison", title: "Foammy — Skincare Product Comparison", tagline: "A skincare decision-support app that combines product comparison with a photo-based progress journal.", domain: "iOS Product", categories: ["Mobile"], technologies: ["SwiftUI", "UIKit", "Clean Architecture"], status: "prototype", featured: true },
  { slug: "heltek-stretch-reminder", title: "Heltek", tagline: "A wellbeing app that reminds users to stretch after long periods of focused computer work.", domain: "Digital Wellbeing", categories: ["Mobile"], technologies: [], status: "prototype" },
  { slug: "vitalcam", title: "VitalCam", tagline: "A project record awaiting verified scope, implementation details, and supporting evidence.", domain: "Computer Vision", categories: ["AI / ML", "Computer Vision"], technologies: [], status: "research" },
  { slug: "traditional-building-segmentation-yolo", title: "Traditional Building Segmentation using YOLO", tagline: "A YOLO-based computer vision project for segmenting traditional buildings.", domain: "Computer Vision", categories: ["AI / ML", "Computer Vision"], technologies: ["YOLO", "Image Segmentation", "Computer Vision"], status: "research", featured: true },
];

const sectionTitles = [
  ["origin", "The spark"],
  ["problem", "Problem & context"],
  ["research", "Research & discovery"],
  ["goals", "Goals, scope & plan"],
  ["solution", "Solution concept & design"],
  ["implementation", "Technical implementation"],
  ["challenges", "Challenges & decisions"],
  ["validation", "Validation & results"],
  ["impact", "Final solution & impact"],
  ["reflection", "Reflection & next steps"],
] as const;

const projectOverrides: Record<string, Partial<Project>> = {
  "image-shadow-removal-comparison": { featured: false },
  "camfu-pose-detection-game": { featured: false },
  "traditional-building-segmentation-yolo": { featured: false },
  "website-smart-brin": {
    title: "SMART BRIN — Internship Project",
    tagline: "An integrated research-monitoring platform developed during an internship at BRIN.",
    summary:
      "SMART BRIN simplifies the management and monitoring of research activities while supporting LLM-powered workflows through an accessible dashboard and clear data insights.",
    year: "2025",
    contentStatus: "verified",
    projectType: "professional",
    role: "AI/ML Engineer — LLM Integration",
    technologies: ["Python", "LLM API", "Prompt Engineering", "REST API"],
    featured: true,
    published: true,
    media: [
      {
        src: "/projects/smart-brin.png",
        title: "SMART BRIN platform",
        caption: "Login, research-monitoring dashboard, publication analytics, and data visualization views.",
        alt: "SMART BRIN login page and research monitoring dashboard",
      },
    ],
    contributions: [
      "Focused on integrating LLM capabilities into the SMART BRIN workflow and connecting them with the platform's application services.",
    ],
    sections: {
      problem: {
        title: "Background / problem statement",
        body: [
          "BRIN needs a clear way to monitor research activities and publications while making complex information easier to access. SMART BRIN brings those workflows into a unified web dashboard and supports them with LLM-powered capabilities.",
        ],
      },
      solution: {
        title: "Key features",
        body: ["The platform combines research monitoring, publication insights, and AI-assisted workflows."],
        bullets: [
          "Research Activity Dashboard — presents key research and publication indicators in a centralized view.",
          "Publication Monitoring — organizes publication data, category distributions, and researcher activity for easier review.",
          "LLM Integration — connects language-model capabilities to the platform through structured prompts and application APIs.",
        ],
      },
      implementation: {
        title: "Tech stack",
        body: ["The AI integration layer uses Python-based services, language-model APIs, structured prompt engineering, and REST APIs."],
        bullets: ["Python", "LLM API", "Prompt Engineering", "REST API"],
      },
    },
  },
  "fisharee-fish-segmentation-classification": {
    title: "FiSharee",
    tagline: "Helping competitive anglers turn every catch into a detailed, shareable record.",
    summary:
      "An iOS app that identifies fish, estimates length and weight, records catch locations, and automatically generates detailed catch summaries for sharing across platforms.",
    year: "2026",
    contentStatus: "verified",
    categories: ["AI / ML", "Computer Vision", "Mobile"],
    role: "AI/ML Engineer",
    technologies: ["SwiftUI", "SwiftData", "Core ML", "ARKit", "MapKit"],
    published: true,
    media: [{ src: "/projects/fisharee.png", title: "FiSharee product experience", caption: "Fish capture, measurement, species identification, sharing templates, history, and catch map.", alt: "FiSharee iOS screens for fish capture, measurement, sharing, history, and map" }],
    contributions: ["Developed the machine-learning experience for fish identification and camera-based catch measurement within the iOS product."],
    sections: {
      problem: {
        title: "Background / problem statement",
        body: [
          "Competitive anglers want to proudly share their catches, but creating a complete catch record takes effort. They may need to identify the species, estimate its length and weight, remember the location, and prepare the information for social media.",
          "FiSharee brings those steps into one camera-based iOS experience, reducing manual work while keeping each catch organized and ready to share.",
        ],
      },
      solution: {
        title: "Key features",
        body: ["The product centers on capture, organization, and sharing."],
        bullets: [
          "Home — summarizes the user's top five catches and sorts them by latest, heaviest, or longest.",
          "Capture & Share — identifies the fish species, estimates length and weight, and generates a customizable sharing template.",
          "History & Map — stores recorded catches in one place and displays their locations on an interactive map.",
        ],
      },
      implementation: {
        title: "Tech stack",
        body: ["SwiftData manages catch records, Core ML supports on-device intelligence, ARKit supports camera-based measurement, and MapKit visualizes catch locations."],
        bullets: ["SwiftUI", "SwiftData", "Core ML", "ARKit", "MapKit"],
      },
    },
  },
  "journease-document-classification": {
    title: "JournEase",
    tagline: "AI-powered travel document organization with timely, location-aware access.",
    summary:
      "An AI-powered travel document manager that extracts essential information, automatically organizes documents, and helps travelers retrieve the right file at the right time and place.",
    year: "2026",
    contentStatus: "verified",
    categories: ["AI / ML", "Mobile"],
    role: "All Roles — AI/ML, iOS Developer, Designer",
    technologies: ["SwiftUI", "SwiftData", "PDFKit", "Vision", "Core Location", "Core ML"],
    published: true,
    media: [{ src: "/projects/journease.png", title: "JournEase product experience", caption: "Trip-based document organization, AI-assisted document intake, and time- and location-aware reminders.", alt: "JournEase iOS screens for travel document organization and reminders" }],
    contributions: ["Owned the product across AI/ML implementation, iOS development, and interface design."],
    sections: {
      problem: {
        title: "Background / problem statement",
        body: [
          "Travel documents are often scattered across booking platforms, emails, and storage locations. Manually organizing them and entering dates, times, and locations is time-consuming.",
          "The problem becomes more urgent during a trip, when a traveler must quickly find the correct document for a particular time or location. JournEase addresses this through AI-powered extraction, automatic categorization, timeline-based organization, and context-aware access.",
        ],
      },
      solution: {
        title: "Key features",
        body: ["JournEase reduces document-management friction before and during a trip."],
        bullets: [
          "AI-Powered Document Extraction — extracts essential information from uploaded documents and reduces manual data entry.",
          "Context-Aware Document Access — surfaces relevant documents through widgets and location-based reminders.",
          "Trip Timeline Organization — groups documents by trip and date so itineraries and important files remain easy to find.",
        ],
      },
      implementation: {
        title: "Tech stack",
        body: ["The iOS implementation combines native document handling, on-device vision, persistence, and location-aware services."],
        bullets: ["SwiftUI", "SwiftData", "PDFKit", "Vision", "Core Location", "Core ML"],
      },
    },
  },
  "foammy-skincare-product-comparison": {
    tagline: "Helping users compare skincare products and evaluate progress with greater confidence.",
    summary:
      "A skincare decision-support app that presents compact product information based on user priorities and tracks skin progress through regular facial photos and ingredient-based timelines.",
    year: "2026",
    contentStatus: "verified",
    categories: ["Mobile"],
    role: "iOS Developer",
    published: true,
    media: [{ src: "/projects/foammy.png", title: "Foammy product experience", caption: "Skin profiling, product analysis, comparison, and progress-journaling screens.", alt: "Foammy iOS screens for skin profiling and skincare product comparison" }],
    contributions: ["Rebuilt from a Challenge 4 project to improve code quality and apply Clean Architecture principles."],
    sections: {
      problem: {
        title: "Background / problem statement",
        body: [
          "People with facial skin concerns often struggle to determine which skincare product is most suitable for them. Product claims, reviews, ingredients, brand reputation, and prices are distributed across different sources and are difficult to compare or validate.",
          "This uncertainty can lead users to spend time, money, and effort on ineffective or unsuitable treatments. Foammy structures the relevant information and connects product selection with progress evaluation over time.",
        ],
      },
      solution: {
        title: "Key features",
        body: ["The experience connects personal context, product comparison, and longitudinal evaluation."],
        bullets: [
          "Skin Profiling — records concerns, oiliness, sensitivity, and previous reactions to help users understand their skin condition.",
          "Product Comparison — compares ingredients, benefits, potential risks, reviews, price, brand reputation, and compatibility with the user's profile.",
          "Skin Progress Journal — tracks changes through regular facial photos, milestone check-ins, and the expected result timeframe of key ingredients.",
        ],
      },
      implementation: {
        title: "Tech stack",
        body: ["The application combines SwiftUI and UIKit and was rebuilt around Clean Architecture to improve separation of concerns and maintainability."],
        bullets: ["SwiftUI", "UIKit", "Clean Architecture"],
      },
    },
  },
  "vision-mamba-vs-mamba-yolo-head-detection": {
    tagline: "Comparing accuracy, efficiency, and real-time viability for human-head detection.",
    summary:
      "A comparative computer vision study evaluating Vision Mamba and Mamba-YOLO for human-head detection at Institut Teknologi Sumatera.",
    year: "2026",
    contentStatus: "verified",
    projectType: "academic",
    role: "Author & AI/ML Researcher",
    technologies: ["Python", "PyTorch", "CUDA", "ONNX"],
    published: true,
    media: [{ src: "/projects/vision-mamba.png", title: "Model evaluation and detection playground", caption: "Training curves, comparative metrics, and deployed inference results for Vision Mamba and Mamba-YOLO.", alt: "Vision Mamba and Mamba-YOLO evaluation charts and head detection playground" }],
    contributions: ["Research design, model fine-tuning, OFAT hyperparameter experiments, evaluation, and comparative analysis."],
    metrics: [
      { label: "Mamba-YOLO mAP50", value: "97.43%", context: "Test-set head detection", verified: true },
      { label: "Mamba-YOLO mAP50:95", value: "66.68%", context: "Test-set head detection", verified: true },
      { label: "Mamba-YOLO speed", value: "52.8 FPS", context: "Reported inference environment", verified: true },
      { label: "Dataset", value: "1,589 images", context: "640 × 640; 80/10/10 split", verified: true },
    ],
    sections: {
      problem: {
        title: "Background / problem statement",
        body: [
          "Human-head detection can support room-density monitoring in smart buildings, smart rooms, intelligent surveillance, and edge-based monitoring systems.",
          "These scenarios require more than detection accuracy: a practical model must also offer manageable computational requirements and fast inference. The study therefore compares Vision Mamba and Mamba-YOLO across effectiveness, efficiency, and real-time performance.",
        ],
      },
      research: {
        title: "Dataset & evaluation design",
        body: [
          "The dataset contains 1,589 images at 640 × 640 resolution and is divided into training, validation, and testing sets using an 80%, 10%, and 10% split.",
          "Both models were fine-tuned and evaluated with mAP50, mAP50:95, precision, recall, F1-Score, parameter count, GFLOPs, and inference speed.",
        ],
      },
      implementation: {
        title: "Training & tech stack",
        body: ["Hyperparameters were tested using a One Factor at a Time approach."],
        bullets: [
          "Vision Mamba — learning rate 0.001, AdamW, 200 epochs, batch size 8.",
          "Mamba-YOLO — learning rate 0.01, SGD, 200 epochs, batch size 16.",
          "Python, PyTorch, CUDA, and ONNX.",
        ],
      },
      validation: {
        title: "Evaluation results",
        body: [
          "Vision Mamba achieved 16.02% mAP50, 6.21% mAP50:95, 26.18 million parameters, 2.62 GFLOPs, and 11.1 FPS.",
          "Mamba-YOLO achieved 97.43% mAP50, 66.68% mAP50:95, 5.98 million parameters, 13.59 GFLOPs, and 52.8 FPS.",
        ],
      },
      impact: {
        title: "Conclusion",
        body: [
          "Within this dataset, training configuration, and evaluation environment, Mamba-YOLO provided a substantially stronger balance of detection accuracy, parameter count, and inference speed. It was the more suitable model for real-time human-head detection in this study.",
        ],
      },
    },
  },
  "peta-investasi-indonesia-2017-2024": {
    title: "Peta Investasi Indonesia 2017–2024",
    tagline: "Making national investment patterns easier to explore through data storytelling.",
    summary:
      "This project presents a comprehensive data visualization of Foreign and Domestic Investment (PMA & PMDN) across Indonesia from 2017 to 2024. Using interactive dashboards and infographic design, the project highlights key trends such as sectoral comparisons, regional investment distribution, and yearly fluctuations. The goal is to provide clear insights for policymakers, investors, and researchers in understanding national investment dynamics.",
    year: "2025",
    contentStatus: "verified",
    projectType: "group",
    role: "Project Lead",
    technologies: ["Canva", "Tableau", "Python"],
    featured: true,
    published: true,
    media: [
      {
        src: "/projects/peta-investasi.png",
        title: "Investment visualization overview",
        caption: "The final infographic, interactive Tableau dashboard, and supporting presentation deck.",
        alt: "Peta Investasi Indonesia infographic and Tableau dashboard",
      },
    ],
    contributions: [
      "Led the project direction and coordinated the transformation of investment data into a clear infographic, interactive dashboard, and supporting presentation.",
    ],
    sections: {
      problem: {
        title: "Background / problem statement",
        body: [
          "Investment data across years, sectors, and regions can be difficult to interpret when presented only as raw tables. The project translates PMA and PMDN data into a visual narrative that makes major patterns and comparisons easier to understand.",
        ],
      },
      solution: {
        title: "Key features",
        body: ["The visual system connects a concise overview with deeper, interactive exploration."],
        bullets: [
          "Regional Investment Map — shows the distribution of investment across Indonesian provinces.",
          "Sector and Source Comparison — compares PMA and PMDN values across primary, secondary, and tertiary sectors.",
          "Annual Trend Analysis — highlights investment fluctuations from 2017 to 2024.",
          "Interactive Dashboard — lets viewers examine geographic distribution, leading investor countries, and yearly investment trends.",
        ],
      },
      implementation: {
        title: "Tech stack",
        body: ["Python supported data preparation, Tableau powered the interactive dashboard, and Canva was used for the infographic and presentation design."],
        bullets: ["Canva", "Tableau", "Python"],
      },
    },
  },
  "heltek-stretch-reminder": {
    summary:
      "An app that reminds users to take a stretching break after spending a long time focused in front of a laptop or computer.",
    contentStatus: "draft",
    sections: {
      problem: {
        title: "Background / problem statement",
        body: [
          "Long periods of focused screen work can make people lose track of time and postpone movement. Heltek is designed to provide timely stretch reminders so users can build healthier breaks into their computer routine.",
        ],
      },
    },
  },
  vitalcam: {
    summary:
      "A placeholder case study for VitalCam. Its description, problem statement, features, tech stack, personal contribution, and results still require verified project information.",
    contentStatus: "draft",
    contributions: ["Personal role and contribution details pending verification."],
    sections: {
      problem: {
        title: "Background / problem statement",
        body: ["Verified project context has not been added yet."],
      },
    },
  },
};

export const projects: Project[] = seeds.map((seed, position) => {
  const base: Project = {
    slug: seed.slug,
    title: seed.title,
    index: String(position + 1).padStart(2, "0"),
    tagline: seed.tagline,
    summary: `A draft case study for ${seed.title}. Project details and evidence will be added after verification.`,
    year: "Year pending",
    status: seed.status ?? "prototype",
    contentStatus: "draft",
    projectType: seed.projectType ?? "personal",
    role: "Role details pending",
    contributions: ["Personal responsibilities to be confirmed"],
    technologies: seed.technologies,
    domain: seed.domain,
    categories: seed.categories,
    featured: seed.featured ?? false,
    metrics: [],
    accent: ["orange", "blue", "plum", "green"][position % 4],
    media: [
      { src: dummyMedia, title: "Project overview", caption: "Replace with the main project image." },
      { src: dummyMedia, title: "Process", caption: "Replace with process or development documentation." },
      { src: dummyMedia, title: "Key output", caption: "Replace with the primary result or interface." },
      { src: dummyMedia, title: "Evaluation", caption: "Replace with testing, evaluation, or reflection material." },
    ],
    demo: { mode: "unconfigured" },
    published: false,
    links: {},
    sections: Object.fromEntries(sectionTitles.map(([key, title]) => [key, { title, body: [pending] }])),
  };

  return { ...base, ...projectOverrides[seed.slug] };
});

export const portfolioProjects = projects.filter((project) => project.published).toReversed();
export const featuredProjects = portfolioProjects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
