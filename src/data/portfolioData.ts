export interface Project {
  id: string;
  title: string;
  category: "Machine Learning" | "Data Analytics" | "Web Apps" | "SQL";
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
  image?: string;
  stats?: { label: string; value: string }[];
  isPredictiveDemo?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName: string; category: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: "Online Internship" | "Offline Internship" | "Academic" | "Hackathon";
  description: string;
  skills: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  grade: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
  skills: string[];
  credentialId?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const PERSONAL_INFO = {
  name: "Rohith Kandula",
  roles: [
    "Python Developer",
    "Data Analyst",
    "SQL Developer",
    "Machine Learning Enthusiast",
  ],
  title: "Python Developer | Data Analyst | SQL Developer | Machine Learning Enthusiast",
  location: "Andhra Pradesh, India",
  fullAddress: "S/o K. Nageswararao, D.No: 1-177/A near Anjaneya Swami Temple, Reddigudem Mandal, Patha Naguluru, N.T.R Dist, Andhra Pradesh 521230",
  email: "kandularohith899@gmail.com",
  phone: "+91 9100491162",
  github: "https://github.com/kandularohith899-dev",
  linkedin: "https://linkedin.com/in/rohith-kandula-741b1b294",
  aboutMe: `I am a final-year B.Tech student in Electronics and Communication Engineering at Sasi Institute of Technology & Engineering. I am passionate about Python, SQL, Data Analytics, Machine Learning, Artificial Intelligence, Power BI, Tableau, and Web Development. I enjoy solving complex real-world problems through data-driven software solutions and continuously exploring emerging AI technologies.`,
  careerObjective: "Seeking a position in a progressive organization that gives me scope to apply my knowledge and be a part of the team that dynamically works towards the growth of the organization, thus improving my skills and gaining valuable industry work experience.",
  stats: [
    { label: "Projects Completed", value: "12+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Coding Hours", value: "1500+" },
    { label: "Certifications", value: "8+" },
  ],
};

export const ABOUT_TABS = {
  whoIAm: `I'm Rohith Kandula, a tech-driven problem solver based in Andhra Pradesh, India. With a strong engineering foundation in Electronics & Communication and specialized expertise in Data Science and Full-Stack Python development, I transform raw data into actionable insights and build scalable software solutions.`,
  journey: `My journey began with mastering core programming concepts in C and Python, which quickly evolved into an obsession with Machine Learning and Data Engineering. Through virtual and hands-on offline internships at Huebits, SkillDzire, and EduSkills, I've honed my skills across the complete lifecycle of data analytics and machine learning applications.`,
  goals: `My goal is to join an innovation-driven organization as a Python Developer or Data Analyst where I can leverage machine learning models, cloud pipelines, and dynamic analytics dashboards to engineer intelligent systems that impact businesses globally.`,
  hobbies: `Outside of coding and analyzing datasets, I enjoy participating in competitive coding challenges, exploring prompt engineering techniques, time management optimization, quick skill learning, and collaborating on open-source community projects.`,
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 92, iconName: "Terminal", category: "Languages" },
      { name: "SQL (MySQL)", level: 88, iconName: "Database", category: "Languages" },
      { name: "C", level: 80, iconName: "Code", category: "Languages" },
      { name: "HTML5 & CSS3", level: 90, iconName: "Layout", category: "Languages" },
      { name: "JavaScript", level: 85, iconName: "FileCode", category: "Languages" },
      { name: "Java", level: 75, iconName: "Coffee", category: "Languages" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow & Keras", level: 85, iconName: "Cpu", category: "Machine Learning & AI" },
      { name: "Scikit-Learn", level: 88, iconName: "BrainCircuit", category: "Machine Learning & AI" },
      { name: "Deep Learning (CNN/LSTM)", level: 85, iconName: "Network", category: "Machine Learning & AI" },
      { name: "Transformers Architecture", level: 80, iconName: "Layers", category: "Machine Learning & AI" },
      { name: "Pandas & NumPy", level: 92, iconName: "Table", category: "Machine Learning & AI" },
      { name: "Matplotlib & Seaborn", level: 88, iconName: "BarChart3", category: "Machine Learning & AI" },
    ],
  },
  {
    title: "Frameworks & Web",
    skills: [
      { name: "Flask", level: 88, iconName: "Server", category: "Frameworks & Web" },
      { name: "React", level: 82, iconName: "Atom", category: "Frameworks & Web" },
      { name: "Next.js", level: 80, iconName: "Globe", category: "Frameworks & Web" },
      { name: "Prompt Engineering", level: 90, iconName: "Sparkles", category: "Frameworks & Web" },
    ],
  },
  {
    title: "BI & Tools",
    skills: [
      { name: "Power BI", level: 90, iconName: "PieChart", category: "BI & Tools" },
      { name: "Tableau", level: 85, iconName: "TrendingUp", category: "BI & Tools" },
      { name: "Git & GitHub", level: 88, iconName: "GitBranch", category: "BI & Tools" },
      { name: "VS Code", level: 95, iconName: "Sliders", category: "BI & Tools" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance using Deep Learning",
    category: "Machine Learning",
    description: "Remaining Useful Life (RUL) prediction for industrial turbofan engines using NASA C-MAPSS dataset.",
    fullDescription: "Engineered a hybrid CNN-Transformer-Ensemble deep learning architecture achieving an R² score of 0.93 for Remaining Useful Life (RUL) prediction. Deployed a full-stack interactive Flask dashboard to automate real-time multi-sensor telemetry analysis and categorize engine health into Critical vs Healthy states.",
    technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Transformer", "Flask", "Pandas", "Scikit-Learn"],
    features: [
      "NASA C-MAPSS Dataset Integration",
      "Sensor CSV File Upload & Processing",
      "Real-time RUL Estimation Calculator",
      "Hybrid CNN-Transformer Deep Learning Model (R² = 0.93)",
      "Interactive Health Monitoring Dashboard",
      "Critical vs Healthy Failure Risk Categorization",
    ],
    githubUrl: "https://github.com/kandularohith899-dev",
    liveUrl: "#",
    badge: "Featured AI Project",
    isPredictiveDemo: true,
    stats: [
      { label: "Accuracy R² Score", value: "0.93" },
      { label: "Model Architecture", value: "CNN-Transformer" },
      { label: "Dataset", value: "NASA C-MAPSS" },
    ],
  },
  {
    id: "ipl-analytics",
    title: "IPL Data Analytics Dashboard",
    category: "Data Analytics",
    description: "Interactive multi-dimensional Power BI & SQL dashboard analyzing Indian Premier League matches and player metrics.",
    fullDescription: "Built a comprehensive end-to-end IPL data analytics platform integrating SQL data extraction, Python data cleaning, and Power BI interactive visuals. Tracks team win percentages, venue performance trends, player head-to-head stats, and venue-wise toss decision outcomes.",
    technologies: ["Power BI", "SQL", "Python", "Pandas", "Matplotlib"],
    features: [
      "Season-by-Season Tournament Breakdown",
      "Top Performing Teams & Player Stats",
      "Toss Strategy & Win Percentage Impact",
      "Interactive Drill-down Visualizations",
      "Automated SQL Query Data Pipelines",
    ],
    githubUrl: "https://github.com/kandularohith899-dev",
    liveUrl: "#",
    badge: "Power BI Specialization",
    stats: [
      { label: "Seasons Analyzed", value: "2008 - 2023" },
      { label: "Visual Cards", value: "25+" },
      { label: "Query Speed", value: "< 100ms" },
    ],
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    category: "Web Apps",
    description: "Responsive full-stack Flask application for enterprise workforce tracking and role-based data administration.",
    fullDescription: "Designed and implemented a secure, responsive Flask web application for enterprise HR and department management. Supports CRUD operations for employee records, SQL database integration, authentication, department analytics, and CSV data exports.",
    technologies: ["Python", "Flask", "SQL", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Complete CRUD Record Operations",
      "Role-Based User Authentication",
      "Departmental Headcount & Salary Analytics",
      "Responsive Glassmorphism UI",
      "Automated SQL Transaction Management",
    ],
    githubUrl: "https://github.com/kandularohith899-dev",
    liveUrl: "#",
    badge: "Full Stack Flask",
    stats: [
      { label: "Architecture", value: "MVC Pattern" },
      { label: "Response Time", value: "Fast" },
      { label: "Database", value: "MySQL" },
    ],
  },
  {
    id: "sql-practice-platform",
    title: "SQL Practice & Query Testing Platform",
    category: "SQL",
    description: "Interactive browser-based SQL query execution and benchmarking environment for developer skill assessment.",
    fullDescription: "Created an interactive SQL practice and query execution platform powered by Python and MySQL. Enables developers to solve real-world relational database challenges, inspect query execution plans, and practice complex JOINs, CTEs, and window functions.",
    technologies: ["MySQL", "Python", "SQL", "Flask", "JavaScript"],
    features: [
      "Real-time SQL Query Execution & Validation",
      "Interactive Table Schema Viewer",
      "Custom SQL Problem Sets & Test Cases",
      "Query Performance Profiling",
      "Exportable Result Grids",
    ],
    githubUrl: "https://github.com/kandularohith899-dev",
    liveUrl: "#",
    badge: "Database Engineering",
    stats: [
      { label: "Supported Dialects", value: "MySQL / ANSI SQL" },
      { label: "Built-in Challenges", value: "30+" },
      { label: "Feedback", value: "Instant" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024",
    role: "Deep Learning Intern",
    company: "Huebits",
    type: "Offline Internship",
    description: "Worked on hands-on deep learning models using TensorFlow and PyTorch. Engineered neural network architectures for predictive diagnostics, sensor data preprocessing, and model deployment.",
    skills: ["Deep Learning", "TensorFlow", "Keras", "Python", "Computer Vision / Time Series"],
  },
  {
    period: "2024",
    role: "Data Engineering Virtual Intern",
    company: "EduSkills",
    type: "Online Internship",
    description: "Completed intensive virtual training on cloud data pipelines, ETL processes, relational database design, data warehousing, and big data transformations.",
    skills: ["Data Engineering", "SQL", "ETL Pipelines", "Data Analytics", "Cloud Concepts"],
  },
  {
    period: "2023",
    role: "Web Development Intern",
    company: "SkillDzire",
    type: "Online Internship",
    description: "Built responsive web applications, interactive user interfaces, client-side validation logic, and integrated backend REST APIs using Python & JavaScript.",
    skills: ["HTML5", "CSS3", "JavaScript", "Python", "Bootstrap/Tailwind"],
  },
  {
    period: "2022 - Present",
    role: "Academic AI & Engineering Projects Lead",
    company: "Sasi Institute of Technology & Engineering",
    type: "Academic",
    description: "Spearheaded B.Tech capstone and team projects in machine learning, industrial predictive maintenance, Power BI analytics, and SQL query automation platforms.",
    skills: ["Project Management", "Technical Leadership", "Python", "Power BI", "System Design"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: "2022 – 2026",
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Sasi Institute of Technology & Engineering",
    location: "Tadepalligudem, AP, India",
    grade: "Aggregate: 7.69 / 10 CGPA",
    details: "Specialization in Signal Processing, Embedded Systems, Python Programming, and Machine Learning. Active lead in technical workshops and project exhibitions.",
  },
  {
    period: "2020 – 2022",
    degree: "Intermediate (MPC)",
    institution: "Aditya Junior College",
    location: "Tadepalligudem, AP, India",
    grade: "Aggregate: 71.4%",
    details: "Focused on Mathematics, Physics, and Chemistry. Developed analytical thinking and foundational problem-solving skills.",
  },
  {
    period: "2019 – 2020",
    degree: "Secondary School Certificate (S.S.C.)",
    institution: "Gowtham E.M High School",
    location: "Mylavaram, AP, India",
    grade: "Aggregate: 81.16%",
    details: "Graduated with distinction. Excellence in Mathematics and Science competitions.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Python Programming Masterclass",
    issuer: "Coursera / Infosys Springboard",
    date: "2024",
    badgeColor: "from-blue-500 to-cyan-400",
    skills: ["Python", "OOP", "Data Structures", "Algorithms"],
  },
  {
    title: "SQL & Relational Database Design",
    issuer: "HackerRank / Udemy",
    date: "2024",
    badgeColor: "from-cyan-500 to-teal-400",
    skills: ["MySQL", "Joins", "Subqueries", "Database Normalization"],
  },
  {
    title: "Applied Machine Learning & Neural Networks",
    issuer: "Huebits / EduSkills",
    date: "2024",
    badgeColor: "from-purple-500 to-indigo-500",
    skills: ["TensorFlow", "Scikit-Learn", "CNN", "LSTM", "Model Evaluation"],
  },
  {
    title: "Power BI Data Analyst Associate",
    issuer: "Microsoft / EduSkills",
    date: "2023",
    badgeColor: "from-amber-500 to-yellow-400",
    skills: ["DAX", "Data Modeling", "Dashboard Creation", "Power Query"],
  },
  {
    title: "Tableau Desktop & Business Analytics",
    issuer: "Udemy",
    date: "2023",
    badgeColor: "from-emerald-500 to-green-400",
    skills: ["Data Visualization", "Calculated Fields", "Storytelling with Data"],
  },
  {
    title: "Full Stack Web Development with Python",
    issuer: "SkillDzire",
    date: "2023",
    badgeColor: "from-sky-500 to-blue-600",
    skills: ["Flask", "HTML/CSS", "JavaScript", "REST APIs"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "python-dev",
    title: "Python Application Development",
    description: "Custom Python software, back-end web services, CLI tools, RESTful APIs, and automation scripts tailored for scalability.",
    iconName: "Terminal",
    features: [
      "Flask / Fast-API RESTful Endpoints",
      "Data Scraping & Automated Processing",
      "Clean Modular Code & Refactoring",
      "Database & Third-party API Integration",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Insights",
    description: "Transform raw unstructured data into strategic business intelligence using Pandas, NumPy, statistical hypothesis testing, and EDA.",
    iconName: "BarChart3",
    features: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning & Feature Engineering",
      "Statistical Correlation Analysis",
      "Executive Reports & Summaries",
    ],
  },
  {
    id: "dashboard-dev",
    title: "Interactive Power BI & Tableau Dashboards",
    description: "Designing visually captivating, real-time interactive business intelligence dashboards with DAX calculations and dynamic filters.",
    iconName: "PieChart",
    features: [
      "Custom DAX & Calculated Columns",
      "Cross-filtering & Drill-down Views",
      "SQL Data Source Integration",
      "KPI & Trend Visualization",
    ],
  },
  {
    id: "ml-models",
    title: "Machine Learning & AI Modeling",
    description: "End-to-end Machine Learning pipelines, classification, regression, time-series forecasting, and Deep Learning (CNN/LSTM/Transformer) solutions.",
    iconName: "Cpu",
    features: [
      "Predictive Maintenance & RUL Forecasting",
      "Supervised & Unsupervised Learning",
      "Model Training, Tuning & Evaluation",
      "Flask Web Dashboard Deployment",
    ],
  },
  {
    id: "sql-db",
    title: "SQL Database Design & Optimization",
    description: "Relational database schema modeling, query optimization, indexing, stored procedures, and complex data retrieval in MySQL.",
    iconName: "Database",
    features: [
      "Schema Normalization & ER Diagrams",
      "High-Performance Query Tuning",
      "Complex Joins & Window Functions",
      "Data Migration & Cleaning Scripts",
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "Rohith demonstrated exceptional analytical skills during the deep learning predictive maintenance project. His hybrid CNN-Transformer model achieved an impressive 0.93 R² score!",
    name: "Project Lead",
    role: "AI & ML Supervisor",
    company: "Huebits Internship",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "2",
    quote: "Rohith's mastery of SQL and Power BI dashboard design allowed us to transform complex cricket dataset streams into clear, interactive executive summaries effortlessly.",
    name: "Analytics Mentor",
    role: "Senior Data Architect",
    company: "EduSkills Mentorship",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "3",
    quote: "A dedicated team player with quick learning capabilities and remarkable discipline in writing clean, well-documented Python and Flask code.",
    name: "Engineering Professor",
    role: "Department Head",
    company: "Sasi Institute of Tech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
  },
];
