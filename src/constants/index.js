import { c } from "maath/dist/index-43782085.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  google,
  microsoft,
  freelance,
  carrent,
  jobit,
  tripguide,
  threejs,
  amazon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Full Stack Development",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [  
{
  title: "Azure Machine Learning Workshop (SWE + ML)",
  company_name: "Microsoft Azure",
  icon: azure,
  iconBg: "#2563EB",
  date: "Aug 2025 – Nov 2025",
  points: [
    "Built an end-to-end MLOps pipeline on Azure ML for data ingestion, experiment tracking, model training, and deployment to Azure App Service/AKS.",
    "Containerized inference with Docker and implemented autoscaling and health probes, reducing p95 latency by 40%.",
    "Created CI/CD workflows with GitHub Actions to automate model retraining, testing, and blue-green deployments.",
    "Integrated PostgreSQL and Azure Blob Storage for scalable data handling and used Application Insights for monitoring and performance analytics."
  ],
},



  {
    {
  title: "Software Engineering & AI Workshop",
  company_name: "Google LLC",
  icon: google,
  iconBg: "#E6DEDD",
  date: "Nov 2025 - Dec 2025",
  points: [
    "Participated in Google’s 5-Day AI Agents Intensive Course, collaborating with engineers and researchers to design AI-driven solutions using Python, TypeScript, and machine learning frameworks.",
    "Developed intelligent agent prototypes leveraging the Google Cloud ecosystem, integrating APIs, real-time data pipelines, and LLM-based reasoning models.",
    "Optimized backend infrastructure and search pipelines on Kaggle’s platform, improving data processing efficiency by 35%.",
    "Contributed to code reviews, debugging, and iterative model deployment under agile workflows, aligning with Google SWE best practices for scalable AI systems.",
  ],
},

  {
    title: "Machine Learning Engineering Intern",
    company_name: "Echo Mind AI",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "Improved ultrasound model accuracy 27% using scikit-learn and TensorFlow.",
      "Built a Docker Machine Learning pipeline for shoulder scans; cut prep time 40%.",
      "Analyzed telemetry data and ran simple stats tests; found trends that guided product tweaks.",
      "Partnered with engineers/PMs on A/B tests; increased user engagement 15%.",
    ],
  },

   {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Evertte proved me wrong.",
    name: "Lincoln Appiah",
    designation: "CEO",
    company: "Become Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Evertte does.",
    name: "Edmund Adem",
    designation: "CEO",
    company: "Adamfopa Psychiatry LLC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Evertte optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Freda Nyarko",
    designation: "SWE",
    company: "Jobscan AI",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Website for Clothing Brand",
    description:
      "A full-stack e-commerce web application for a clothing brand that allows users to browse products, add items to their cart, and securely checkout using Stripe payment gateway.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/evertte",
  },
  {
    name: "Campus Life Assistant Chatbot",
    description:
      "An AI-powered chatbot designed to assist university students with campus-related inquiries, including event information, campus navigation, and academic resources.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/evertte",
  },
  {
    name: "Pneumonia Detection Web App",
    description:
      "A web application that utilizes machine learning to detect pneumonia from chest X-ray images. Users can upload an X-ray image, and the app will analyze it and provide a diagnosis.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/evertte",
  },
];

export { services, technologies, experiences, testimonials, projects };
