export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  image: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Cross-Platform Mobile Banking App Development",
    category: "Mobile App",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Mobile%20Banking%20App.png",
    description: "A secure and feature-rich mobile banking solution built for cross-platform performance."
  },
  {
    title: "Furniture Website End-to-End Development",
    category: "Web Development",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Furniture%20Website.png",
    description: "Modern furniture showcase website with premium design and smooth user experience."
  },
  {
    title: "Cross-Platform Fitness App Development",
    category: "Mobile App",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Fitness%20App.png",
    description: "Comprehensive fitness tracking application with personalized workout plans."
  },
  {
    title: "Business Landing Page Design & Development",
    category: "Web Development",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Business%20Landing%20Page.png",
    description: "High-converting landing page designed to boost business growth and online presence."
  },
  {
    title: "Cross-Platform Mobile Cake Shop App Development",
    category: "Mobile App",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Mobile%20Cake%20Shop%20App.png",
    description: "Delightful mobile shopping experience for a boutique cake shop."
  },
  {
    title: "Project Management Dashboard End-to-End Development",
    category: "Web Development",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Project%20Management%20Dashboard.png",
    description: "Advanced dashboard for tracking projects, tasks, and team productivity."
  },
  {
    title: "Top-Rated Movies Android App Development",
    category: "Android App",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Top-Rated%20Movies%20App.png",
    description: "Native Android application for browsing and discovering top-rated cinema."
  },
  {
    title: "Furniture E-Commerce Website Design & Development",
    category: "Web Development",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Furniture%20E-Commerce%20Website.png",
    description: "Full-scale e-commerce platform for furniture retail with integrated shopping features."
  },
  {
    title: "iOS Movie-Browsing App Development",
    category: "iOS App",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Movie-Browsing%20App.png",
    description: "Sleek iOS application for movie enthusiasts to browse and save their favorites."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Chief Technology Officer",
    company: "Byte Bloom Solutions",
    period: "January 2022 - 2025",
    description: [
      "Oversaw all aspects of business strategy, project development, and client relations.",
      "Managed a team to ensure efficient, scalable, and high-quality digital services.",
      "Led development and execution of key projects, driving 25% revenue growth and higher client satisfaction."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "OAK'S LAB",
    period: "June 2020 - May 2021",
    description: [
      "Developed front-end and back-end systems for web projects, ensuring seamless integration.",
      "Built secure, scalable databases to improve performance and reliability.",
      "Collaborated with cross-functional teams to increase system efficiency by 20%."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Certificate of Achievement",
    issuer: "Gebeya",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Full-Stack%20Development%20Certificate%20of%20Achievement%20from%20Gebeya%20-%20Gedion%20Zewdu.jpg",
    description: "Proud to be certified in Full-Stack Development by Gebeya. I’m excited to bring these sharpened skills to my next professional challenge."
  },
  {
    title: "Certificate of Appreciation",
    issuer: "OAK'S LAB",
    image: "https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Certificate%20of%20Appreciation%20From%20OAK'S%20LAB%20-%20Gedion%20Zewdu.png",
    description: "Grateful to have received this Certificate of Appreciation for my time at OAK'S LAB. It was a privilege to contribute to such a great team."
  }
];

export const TECH_STACK = [
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, // React Native often uses React logo
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
];

export const SOCIALS = [
  { name: 'Github', url: 'https://www.github.com/gedionzewdu' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/gedionzewdu' },
  { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01727bf317f83e15ce?mp_source=share' },
  { name: 'Youtube', url: 'https://www.youtube.com/@gedion_dev' },
  { name: 'Telegram', url: 'https://t.me/gedion_dev' },
  { name: 'Instagram', url: 'https://www.instagram.com/gedion.dev' },
  { name: 'Twitter', url: 'https://www.x.com/gediondev' }
];
