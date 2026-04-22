import type { Curriculum } from "./types";

export function usePortugueseVersion() {
  const curriculum: Curriculum = {
    name: "Rafael Valério de Oliveira Ricardi",
    profession:
      "Senior Frontend Developer | React • Next.js • Vue • TypeScript",

    about: {
      title: "Sobre",
      description:
        "Desenvolvedor Frontend Senior com mais de 6 anos de experiência no desenvolvimento de aplicações web escaláveis. Especializado em React.js, Next.js e Vue.js com TypeScript, focado na construção de interfaces performáticas e arquiteturas frontend sustentáveis. Experiência na criação de design systems, componentes reutilizáveis, integração com APIs complexas e desenvolvimento de aplicações com visualização de dados e mapas geoespaciais. Também atuo na melhoria da qualidade de código, testes automatizados e suporte técnico a desenvolvedores.",
    },

    competences: {
      title: "Competências",
      items: [
        "React.js & Next.js",
        "Vue.js & Nuxt",
        "TypeScript",
        "React Hook Form",
        "Zod",
        "Zustand",
        "Vuex",
        "Pinia",
        "Arquitetura Frontend (Feature-based)",
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

    location: "São José do Rio Preto - SP",

    contact: {
      title: "Contato",
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
      title: "Idiomas",
      items: [
        {
          id: 1,
          name: "Português",
          level: "Nativo",
        },
        {
          id: 2,
          name: "Inglês",
          level: "Intermediário",
        },
      ],
    },

    portfolio: {
      title: "Portfólio",
      url: "https://rafvo-dev.vercel.app/pt",
      name: "rafvo-dev.vercel.app",
      description: "Portfólio desenvolvido com Next.js e TailwindCSS.",
    },

    experiences: {
      title: "Experiências Profissionais",
      items: [
        {
          id: 1,
          position: "Senior Frontend Developer",
          company: "Join Creative Tech",
          typeOfEmployment: "Tempo Integral",
          startedIn: "out de 2022",
          endedIn: "atualmente",
          duration: null,
          typeOfLocation: "Remoto",

          description: [
            "• Arquitetura e desenvolvimento frontend de aplicações utilizando Next.js, Vue.js e TypeScript",
            "• Implementação de feature-based architecture para garantir modularidade e escalabilidade",
            "• Desenvolvimento de interfaces geoespaciais interativas com OpenLayers e Leaflet",
            "• Integração com GeoServer e WebSockets para visualização de dados em tempo real",
            "• Implementação de manipulação de geometrias e camadas temporais em mapas",
            "• Evolução da arquitetura frontend e melhoria de performance e qualidade de código",
            "• Mentoria de desenvolvedores frontend juniores e revisão de código",
          ],
        },

        {
          id: 2,
          position: "Full Stack Developer",
          company: "Seti Tecnologia",
          typeOfEmployment: "Tempo Integral",
          startedIn: "jun de 2022",
          endedIn: "out de 2022",
          duration: "5 meses",
          typeOfLocation: "Remoto",

          description: [
            "Atuação no desenvolvimento frontend utilizando Vue.js e JavaScript, com foco na construção de interfaces web integradas a APIs REST. Participei da implementação de novas funcionalidades, melhorias de performance e organização do código, contribuindo para a evolução e manutenção das aplicações.",
          ],
        },

        {
          id: 3,
          position: "Full Stack Developer",
          company: "Rebuut",
          typeOfEmployment: "Tempo Integral",
          startedIn: "jan de 2021",
          endedIn: "mai de 2022",
          duration: "1 ano e 5 meses",
          typeOfLocation: "Remoto",

          description: [
            "Atuação no desenvolvimento de aplicações web utilizando Vue.js com foco em interfaces responsivas e integração com APIs REST. Durante esse período participei do desenvolvimento de uma plataforma de estética delivery, criando um aplicativo mobile utilizando Flutter e um sistema administrativo web utilizando Laravel, Vue.js e MySQL. Também atuei na containerização da aplicação utilizando Docker, contribuindo para padronização do ambiente de desenvolvimento e implantação.",
          ],
        },

        {
          id: 4,
          position: "Web Developer (Estagiário)",
          company: "Austa Hospital",
          typeOfEmployment: "Meio Período",
          startedIn: "jul de 2019",
          endedIn: "dez de 2020",
          duration: "1 ano e 6 meses",
          typeOfLocation: "Presencial",

          description: [
            "Atuação no desenvolvimento de interfaces web e dashboards utilizando Highcharts para visualização de dados. Implementei funcionalidades com JavaScript, PHP e PL/SQL, além de realizar manutenção e evolução de sistemas internos hospitalares.",
          ],
        },
      ],
    },

    academicTraining: {
      title: "Formação Acadêmica",
      items: [
        {
          id: 1,
          endedIn: "Dez 2020",
          status: "CONCLUÍDO",
          course: "Análise e Desenvolvimento de Sistemas",
          level: "SUPERIOR",
          institution: "Fatec Rio Preto",
        },
        {
          id: 2,
          endedIn: "Dez 2019",
          status: "CONCLUÍDO",
          course: "Técnico em Informática",
          level: "TÉCNICO",
          institution: "Senac",
        },
        {
          id: 3,
          endedIn: "Dez 2017",
          status: "CONCLUÍDO",
          course: "Técnico em Informática para Internet",
          level: "TÉCNICO",
          institution: "Etec Philadelpho Gouvêa Netto",
        },
      ],
    },

    complementaryCourses: {
      title: "Cursos Complementares",
      items: [
        {
          id: 1,
          endedIn: "Fev 2026",
          status: "CONCLUÍDO",
          course: "Inglês extremo - Curso completo do zero à fluência",
          institution: "Udemy",
        },
        {
          id: 2,
          endedIn: "Dez 2025",
          status: "CONCLUÍDO",
          course: "Fundamentos de redes para DevOps",
          institution: "Udemy",
        },
        {
          id: 3,
          endedIn: "Jan 2025",
          status: "CONCLUÍDO",
          course: "Next e React - Curso completo",
          institution: "Udemy",
        },
        {
          id: 4,
          endedIn: "Jun 2024",
          status: "CONCLUÍDO",
          course: "React: criando um Design System com TailwindCSS",
          institution: "Alura",
        },
        {
          id: 5,
          endedIn: "Jun 2024",
          status: "CONCLUÍDO",
          course: "Laravel: transações, service container e autenticação",
          institution: "Alura",
        },
        {
          id: 6,
          endedIn: "Jun 2024",
          status: "CONCLUÍDO",
          course: "Laravel: e-mails, eventos assíncronos, uploads e testes",
          institution: "Alura",
        },
        {
          id: 7,
          endedIn: "Jun 2024",
          status: "CONCLUÍDO",
          course: "Laravel: construindo APIs",
          institution: "Alura",
        },
        {
          id: 8,
          endedIn: "Out 2022",
          status: "CONCLUÍDO",
          course: "Vuejs 2 - O Guia Completo com Vue Router e Vuex",
          institution: "Udemy",
        },
        {
          id: 9,
          endedIn: "Mai 2021",
          status: "CONCLUÍDO",
          course: "Introdução ao Laravel",
          institution: "Udemy",
        },
        {
          id: 10,
          endedIn: "Nov 2020",
          status: "CONCLUÍDO",
          course: "Loja Virtual Completa - Android e IOS Com Flutter",
          institution: "Udemy",
        },
        {
          id: 11,
          endedIn: "Dez 2017",
          status: "CONCLUÍDO",
          course: "Programador de Dispositivos Móveis",
          institution: "Senac",
        },
        {
          id: 12,
          endedIn: "Jun 2017",
          status: "CONCLUÍDO",
          course: "HTML5 e CSS3 - Criação de Websites",
          institution: "Senac",
        },
      ],
    },
  };

  return {
    curriculum,
  };
}
