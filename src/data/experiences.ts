import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full Stack Developer",
    company: "Sisl Infotech Pvt Ltd (SISL)",
    startDate: "April 2025",
    endDate: "Present",
    isCurrentJob: true,
    location: "India",
    description: [
      "Developed and maintained Java and Spring Boot features for government applications, including E-Voucher and User Management.",
      "Improved RESTful API response times by 30% through SQL query optimization, lazy loading and server-side caching.",
      "Implemented Single Sign-On (SSO) using OpenID Connect (OIDC) and Spring Security OAuth2 across multiple government applications.",
      "Built responsive Angular modules and integrated them with backend RESTful APIs.",
      "Participated in peer code reviews and Agile development workflows, using Git for version control."
    ],
  },
  {
    designation: "Software Developer Intern",
    company: "North Star Metrics",
    startDate: "Jul 2024",
    endDate: "Jan 2025",
    isCurrentJob: false,
    location: "India",
    description: [
      "Developed responsive React.js and Node.js web applications that increased user engagement by 30%.",
      "Optimized Express.js REST APIs and MongoDB queries, reducing server response time by 20%.",
      "Implemented JWT authentication and reusable accessible UI components, improving security, consistency, and maintainability.",
    ],
  },
];

export default experiences;
