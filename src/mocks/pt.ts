export const aboutMePT = {
  title: 'Sobre Mim',
  content: `
    Sou <span class="text-green-400 font-semibold">Michelle Horn</span>, uma desenvolvedora frontend apaixonada, com
    mais de 8 anos de experiência criando aplicações web bonitas e escaláveis usando React, Next.js e TypeScript. <br /><br />
    Atualmente estou me aprofundando em <span class="font-medium text-green-400">desenvolvimento mobile com React Native</span>
    e expandindo meus conhecimentos de backend com Node.js e Elixir. <br /><br />
    Amo criar interfaces limpas, contribuir com design systems e ajudar outros devs a evoluírem — já mentorei
    juniores, ministrei workshops e criei materiais de onboarding na minha jornada na Trybe. <br /><br />
    Fora do código, valorizo criatividade, colaboração e construir coisas que importam 🌱
  `,
};

export const skillsAndHighlightsPT = {
  title: 'Habilidades & Destaques',
  highlightsTitle: 'Destaques',
  skills: {
    Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind', 'Styled-Components'],
    Backend: ['Node.js (iniciante)', 'Elixir (iniciante)', 'C# (iniciante)'],
    Tools: ['Git', 'GitHub', 'Figma', 'GraphQL', 'REST APIs', 'CI/CD'],
    Testing: ['Jest', 'Testing Library', 'Cypress'],
  },

  highlights: [
    'Atualmente estudando React Native (navegação, autenticação, Expo, UI com Figma)',
    'Mentorei devs juniores e ministrei workshops de React na Trybe',
    'Criei documentações de onboarding e materiais de aprendizado',
    'Contribuí para sistemas de design internos',
    'Uso ferramentas de IA como GitHub Copilot e ChatGPT para melhorar a experiência do desenvolvedor',
  ],
};

export const contactPT = {
  title: 'Contato',
  description:
    'Se você quer colaborar, tem um projeto em mente ou só quer dar um alô 👋 — sinta-se à vontade para entrar em contato!',
};

export const headerPT = {
  greeting: 'Olá, eu sou',
  roles: [
    'Desenvolvedora Frontend',
    'Especialista em React',
    'Aprendendo React Native',
    'Entusiasta de UI/UX',
    'Ama design systems 💚',
  ],
  resume: 'Baixar Currículo',
  projects: 'Ver Projetos',
};

export const navbarPT = {
  about: 'Sobre',
  projects: 'Projetos',
  skills: 'Habilidades',
  contact: 'Contato',
};

export const projectsPT = [
  {
    title: 'ReactCipes',
    description:
      'App mobile para explorar e salvar receitas. Desenvolvido com React Native e Expo. Possui busca, filtros e UI baseada no Figma.',
    tech: ['React Native', 'Expo', 'AsyncStorage', 'Figma'],
    github: 'https://github.com/michellehorn/react-cipes',
    demo: ''
  },
  {
    title: 'ReactCast',
    description:
      'Aplicativo de podcasts com player de áudio, navegação e busca de episódios. Criado para praticar navegação e consumo de API.',
    tech: ['React Native', 'React Navigation', 'Expo AV', 'REST API'],
    github: 'https://github.com/michellehorn/reactcast',
    demo: ''
  },
];
