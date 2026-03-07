import type { Curriculum } from "./types";

export function useEnglishVersion() {
  const curriculum: Curriculum = {
    name: "Rafael Valério de Oliveira Ricardi",
    profession:
      "Senior Frontend Developer | React • Next.js • Vue • TypeScript",

    about: {
      title: "About",
      description:
        "Senior Frontend Developer with over 6 years of experience building scalable web applications. Specialized in React.js, Next.js, and Vue.js with TypeScript, focused on creating high-performance user interfaces and sustainable frontend architectures. Experienced in building design systems, reusable components, integrating complex APIs, and developing applications with data visualization and geospatial mapping. Also experienced in improving code quality, implementing automated tests, and supporting other developers through technical guidance.",
    },

    competences: {
      title: "Skills",
      items: [
        "React.js & Next.js",
        "Vue.js & Nuxt",
        "TypeScript",
        "React Hook Form",
        "Zod",
        "Zustand",
        "Vuex",
        "Pinia",
        "Frontend Architecture (Feature-based)",
        "Design Systems",
        "API Integration & Data Layer Architecture",
        "Geospatial Systems (OpenLayers, Leaflet)",
        "Highcharts",
        "Performance Optimization (Core Web Vitals, Lighthouse)",
        "Unit Testing (Jest)",
        "CI/CD",
        "Docker & WebSockets",
        "Static Analysis (ESLint/Prettier/Stylelint)",
        "Responsive Web Design",
        "Mobile-First Development",
        "Code Review",
        "AI-Assisted Development",
        "Secure Authentication with Next.js (Cookies, Server-side Proxy)",
        "Authentication & Session Management (Cookies, Vue.js)",
      ],
    },

    location: "São José do Rio Preto - SP, Brazil",

    contact: {
      title: "Contact",
      email: "rafaelvalerio1995@hotmail.com",
      whatsapp: {
        cleanNumber: "5517982082974",
        number: "+55 (17) 98208-2974",
      },
      linkedin: {
        title: "linkedin.com/in/rafvo",
        url: "https://www.linkedin.com/in/rafvo/",
      },
      github: {
        title: "github.com/rafvo",
        url: "https://github.com/rafvo",
      },
    },

    languages: {
      title: "Languages",
      items: [
        {
          id: 1,
          name: "Portuguese",
          level: "Native",
        },
        {
          id: 2,
          name: "English",
          level: "Intermediate (B1)",
        },
      ],
    },

    curriculumProject: {
      title: "Curriculum Project",
      url: "https://www.github.com/rafvo/curriculum",
      name: "github.com/rafvo/curriculum",
      description:
        "Curriculum project built using Vue.js, Nuxt, TypeScript and TailwindCSS.",
    },

    experiences: {
      title: "Professional Experience",
      items: [
        {
          id: 1,
          position: "Senior Frontend Developer",
          company: "Join Creative Tech",
          typeOfEmployment: "Full-time",
          startedIn: "Oct 2022",
          endedIn: "Present",
          duration: null,
          typeOfLocation: "Remote",

          description: [
            "• Frontend architecture and development of applications using Next.js, Vue.js, and TypeScript",
            "• Implementation of feature-based architecture to ensure modularity and scalability",
            "• Development of interactive geospatial interfaces using OpenLayers and Leaflet",
            "• Integration with GeoServer and WebSockets for real-time data visualization",
            "• Implementation of geometry manipulation and temporal layers in maps",
            "• Continuous improvement of frontend architecture, performance, and code quality",
            "• Mentoring junior frontend developers and conducting code reviews",
          ],
        },

        {
          id: 2,
          position: "Full Stack Developer",
          company: "Seti Tecnologia",
          typeOfEmployment: "Full-time",
          startedIn: "Jun 2022",
          endedIn: "Oct 2022",
          duration: "5 months",
          typeOfLocation: "Remote",

          description: [
            "Worked on frontend development using Vue.js and JavaScript, focusing on building web interfaces integrated with REST APIs. Contributed to the implementation of new features, performance improvements, and code organization, helping maintain and evolve existing applications.",
          ],
        },

        {
          id: 3,
          position: "Full Stack Developer",
          company: "Rebuut",
          typeOfEmployment: "Full-time",
          startedIn: "Jan 2021",
          endedIn: "May 2022",
          duration: "1 year and 5 months",
          typeOfLocation: "Remote",

          description: [
            "Worked on web application development using Vue.js with focus on responsive interfaces and REST API integration. During this period, participated in the development of a beauty delivery platform, creating a mobile application using Flutter and an administrative web system using Laravel, Vue.js, and MySQL. Also worked on application containerization using Docker, helping standardize development and deployment environments.",
          ],
        },

        {
          id: 4,
          position: "Web Developer (Intern)",
          company: "Austa Hospital",
          typeOfEmployment: "Part-time",
          startedIn: "Jul 2019",
          endedIn: "Dec 2020",
          duration: "1 year and 6 months",
          typeOfLocation: "On-site",

          description: [
            "Worked on web interface and dashboard development using Highcharts for data visualization. Implemented features using JavaScript, PHP, and PL/SQL, and contributed to the maintenance and evolution of internal hospital systems.",
          ],
        },
      ],
    },

    academicTraining: {
      title: "Education",
      items: [
        {
          id: 1,
          endedIn: "Dec 2020",
          status: "COMPLETED",
          course: "Systems Analysis and Development",
          level: "BACHELOR'S DEGREE",
          institution: "Fatec Rio Preto",
        },
        {
          id: 2,
          endedIn: "Dec 2019",
          status: "COMPLETED",
          course: "Technical Degree in Computer Science",
          level: "TECHNICAL",
          institution: "Senac",
        },
        {
          id: 3,
          endedIn: "Dec 2017",
          status: "COMPLETED",
          course: "Technical Degree in Internet Computing",
          level: "TECHNICAL",
          institution: "Etec Philadelpho Gouvêa Netto",
        },
      ],
    },

    complementaryCourses: {
      title: "Additional Courses",
      items: [
        {
          id: 1,
          endedIn: "Feb 2026",
          status: "COMPLETED",
          course: "Extreme English – Complete Course from Beginner to Fluency",
          institution: "Udemy",
        },
        {
          id: 2,
          endedIn: "Dec 2025",
          status: "COMPLETED",
          course: "Networking Fundamentals for DevOps",
          institution: "Udemy",
        },
        {
          id: 3,
          endedIn: "Jan 2025",
          status: "COMPLETED",
          course: "Next.js and React – Complete Course",
          institution: "Udemy",
        },
        {
          id: 4,
          endedIn: "Jun 2024",
          status: "COMPLETED",
          course: "React: Building a Design System with TailwindCSS",
          institution: "Alura",
        },
        {
          id: 5,
          endedIn: "Jun 2024",
          status: "COMPLETED",
          course: "Laravel: Transactions, Service Container and Authentication",
          institution: "Alura",
        },
        {
          id: 6,
          endedIn: "Jun 2024",
          status: "COMPLETED",
          course: "Laravel: Emails, Asynchronous Events, Uploads and Testing",
          institution: "Alura",
        },
        {
          id: 7,
          endedIn: "Jun 2024",
          status: "COMPLETED",
          course: "Laravel: Building APIs",
          institution: "Alura",
        },
        {
          id: 8,
          endedIn: "Oct 2022",
          status: "COMPLETED",
          course: "Vue.js 2 – Complete Guide with Vue Router and Vuex",
          institution: "Udemy",
        },
        {
          id: 9,
          endedIn: "May 2021",
          status: "COMPLETED",
          course: "Introduction to Laravel",
          institution: "Udemy",
        },
        {
          id: 10,
          endedIn: "Nov 2020",
          status: "COMPLETED",
          course: "Complete Online Store – Android and iOS with Flutter",
          institution: "Udemy",
        },
        {
          id: 11,
          endedIn: "Dec 2017",
          status: "COMPLETED",
          course: "Mobile Device Programmer",
          institution: "Senac",
        },
        {
          id: 12,
          endedIn: "Jun 2017",
          status: "COMPLETED",
          course: "HTML5 and CSS3 – Website Development",
          institution: "Senac",
        },
      ],
    },
  };

  return {
    curriculum,
  };
}
