import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Cloud Solutions Architect",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "DevOps / CI-CD",
    icon: mobile,
  },
  {
    title: "AI & ML Integration",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Node JS",
    icon: nodejs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
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

const experiences: TExperience[] = [
  {
    title: "Senior Software Engineer - Cloud Solutions Architect",
    companyName: "Sunware Technologies",
    icon: meta,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Designed and implemented AWS cloud-native solutions processing 10,000+ daily transactions with 99.9% reliability for enterprise clients.",
      "Developed AWS Lambda functions and RESTful APIs (Node.js, ASP.NET) achieving 40% performance improvement.",
      "Implemented automation with Python and PowerShell, reducing manual processes by 60%.",
      "Built monitoring and observability using CloudWatch and Azure App Insights with custom dashboards.",
    ],
  },
  {
    title: "Technical Lead - Full Stack Developer",
    companyName: "Westayclose Pvt Ltd",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "September 2024 - April 2025",
    points: [
      "Led development of a healthcare platform using React.js, Node.js and MongoDB; managed a team of 5 engineers.",
      "Architected cross-platform React Native mobile app with Laravel/MySQL backend.",
      "Delivered APIs and features improving uptime and delivery performance; delivered project 15% ahead of schedule.",
    ],
  },
  {
    title: "Project Coordinator – Technical Support",
    companyName: "Scope Knowledge Centre (Straive)",
    icon: tesla,
    iconBg: "#383E56",
    date: "November 2019 - September 2022",
    points: [
      "Architected automated data pipelines processing 10,000+ documents monthly using Python, C#, and PHP, improving efficiency by 50%.",
      "Developed tools for PDF extraction, XML/JSON transformation, and web scraping for digital publishing workflows.",
      "Applied Six Sigma to improve process quality and throughput.",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    companyName: "Tejas Solution",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "September 2018 - October 2019",
    points: [
      "Executed data-driven digital campaigns and performance marketing improving brand visibility and conversions.",
    ],
  },
  {
    title: "Executive - Web Analyst",
    companyName: "Scope Knowledge Centre (Straive)",
    icon: tesla,
    iconBg: "#383E56",
    date: "December 2014 - September 2018",
    points: [
      "Managed data and content projects; developed automation using VB macros to improve accuracy and reduce manual effort.",
    ],
  },
  {
    title: "Quality Controller",
    companyName: "RRD Donnelly",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "December 2013 - December 2014",
    points: [
      "Maintained high quality assurance standards and implemented process improvements reducing error rates.",
    ],
  },
  {
    title: "Hotel Business Owner & Operations Manager",
    companyName: "Hospitality Entrepreneur",
    icon: meta,
    iconBg: "#383E56",
    date: "2011 - 2013",
    points: [
      "Established and managed a hospitality business overseeing operations, staff management, and customer service.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Vinoth's AWS cloud architecture expertise transformed our infrastructure. His solutions are scalable, secure, and deliver measurable cost savings. Exceptional problem-solver!",
    name: "MasterCard Inc.",
    designation: "Enterprise Client",
    company: "Fortune 500 Financial Services",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His full-stack development skills and team leadership delivered our healthcare platform 15% ahead of schedule. Highly professional and results-oriented.",
    name: "Westayclose Pvt Ltd",
    designation: "Healthcare Platform",
    company: "Chennai, India",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Vinoth's automation workflows and Six Sigma optimization improved our processes by 50%. His technical expertise and attention to detail are outstanding.",
    name: "Sempra Energy",
    designation: "Enterprise Client",
    company: "Energy Solutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "TraceMaster - Network Diagnostic Tool",
    description:
      "Enterprise-grade network troubleshooting tool for MasterCard. Integrated Ping, Nslookup, and Traceroute functionalities with AWS Lambda backend and CloudWatch monitoring. Reduced network issue resolution time by 50%.",
    tags: [
      {
        name: "AWS Lambda",
        color: "blue-text-gradient",
      },
      {
        name: "CloudWatch",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/ladunjexa",
  },
  {
    name: "School 360 E-Learning Platform",
    description:
      "Scalable educational platform supporting 1,000+ concurrent users. Designed RESTful APIs and comprehensive dashboard for student, staff, and financial data management with real-time analytics and Firebase integration.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/ladunjexa",
  },
  {
    name: "Enterprise Data Analytics Solution",
    description:
      "Predictive analytics solution for Sempra Energy processing energy consumption data. Built with AWS S3, Athena, Python automation, and SNS notifications. Reduced data analysis time by 70% through intelligent automation.",
    tags: [
      {
        name: "AWS S3/Athena",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "SNS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/ladunjexa",
  },
];

export { services, technologies, experiences, testimonials, projects };
