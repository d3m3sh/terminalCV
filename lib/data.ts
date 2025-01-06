export const skills = [
  { name: "ASM", icon: "assembly" },
  { name: "C", icon: "c" },
  { name: "Golang", icon: "golang" },
  { name: "Scripts shell", icon: "bash" },
  { name: "Node JS", icon: "nodejs" },
  { name: "Typescript", icon: "typescript" },
  { name: "Javascript", icon: "javascript" },
  { name: "React JS", icon: "reactjs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "WebRTC", icon: "webrtc" },
  { name: "Linux", icon: "linux" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "Binary format", icon: "binaryFormat" },
  { name: "Binary exploitation", icon: "hacking" },
  { name: "Reverse engineer", icon: "reverse" },
];

export const experiences = [
  {
    title: "IT and telecommunications systems technician",
    company_name: "Marine Nationale",
    icon: "marineNationale",
    iconBg: "#383E56",
    date: "Junuary 2009 - July 2016",
    points: [
      "-Management of PABX telephone exchanges",
      "-Configuration and setup of radio equipment for radio links (HF/VHF/UHF)",
      "-Adminsys",
      "-All types of computer troubleshooting",
      "-A lot of travels"
    ],
  },
  {
      title: "Software designer",
      company_name: "CapGemini",
      icon: 'capgemini',
      iconBg: "#383E56",
      date: "August 2018 - October 2019",
      points: [
        "Renovation of a Control Command System - Reverse-engineered various modules (a set of executables) using source code and executables to create specifications documentation.",
        "Rewrote these modules in C++",
      ],
    },
  {
    title: "Software development internship",
    company_name: "CapGemini",
    icon: "capgemini",
    iconBg: "#E6DEDD",
    date: "Junuary 2018 - July 2018",
    points: [
      "Renovation of a Control Command System.",
      "Internship Subject: Developing a bidirectional conversion system between a CISAM and SQL database.",
      "The project required understanding the data structures of the legacy database and its functionalities."
    ],
  },
  {
      title: "Systems and Networks Development Engineer",
      company_name: "EHO.LINK",
      icon: 'eho',
      iconBg: "#E6DEDD",
      date: "August 2018 - October 2019",
      points: [
        "Developed and maintained firewalls for Small or Medium Enterprises, creating new functionalities and resolving existing issues.",
        "Worked extensively on DHCPv4 and v6 protocols, including creating network packets to test the firewall appliance.",
        "Faced various challenges presented by the lead developer (a senior expert) and their colleague (another senior expert). Unfortunately, I had to stop due to COVID and my desire to continue working remotely - an incredible experience. C (userland)",
      ],
    },
  {
      title: "Software Development Engineer",
      company_name: "Stormshield",
      icon: 'stormshield',
      iconBg: "#E6DEDD",
      date: "September 2020 - Aujust 2021",
      points: [
        "Maintained various firewalls, implemented static code analysis tools to detect potential issues and resolve them, automated tasks",
      ],
    },
  {
      title: "Webrtc Engineer",
      company_name: "Lemon",
      icon: 'lemon',
      iconBg: "#E6DEDD",
      date: "Octobre 2021 - December 2023",
      points: [
        "Designed a high-performance Select Forward Unit (SFU) from scratch using Golang.",
        "This involved understanding the Webrtc stack, comprehending the protocols used, and either rewriting them or utilizing external libraries such as OpenSSL's libssl and libcrypto, or libsrtp. In the case of using libsrtp, it was necessary to create wrappers with cgo and manage memory.",
      ],
    },
];

export const projects = [
  {
    name: "Car Rent",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "carrent",
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "carrent",
    source_code_link: "https://github.com/",
  }
];