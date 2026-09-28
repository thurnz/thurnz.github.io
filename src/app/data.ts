// Portfolio data — Fritz D. Mauring

export const personalInfo = {
  name: "Fritz D. Mauring",
  title: "Frontend & Game Developer",
  tagline: "Building interfaces that feel like worlds.",
  email: "thurnz79@gmail.com",
  phone: "+63 (939) 280 4947",
  linkedin: "linkedin.com/in/fritzmauring",
  linkedinUrl: "https://linkedin.com/in/fritzmauring",
  summary:
    "15+ years building web applications, responsive user interfaces, interactive experiences, and mobile applications. I specialize in bridging the gap between frontend engineering and game development — writing production React/TypeScript during the day and shipping WebGL physics systems at night.",
};

export const skills: Record<string, string[]> = {
  Frontend: [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  "State Management": ["Redux", "Context API", "Zustand"],
  "API & Data": ["RESTful APIs", "Async Handling", "API Integration"],
  Tools: ["Git", "Node.js", "Figma", "Adobe Creative Suite"],
  "Game & Interactive": [
    "Phaser",
    "PixiJS",
    "Canvas",
    "WebGL",
    "Animation",
    "Physics",
    "Parallax",
    "Multiplayer",
  ],
};

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  video: string;
  category: "Game" | "Frontend";
}

export const works: WorkItem[] = [
  {
    id: "doz",
    title: "Deuce of Zeus",
    description:
      "Fast-paced slot game with dynamic animations, built with PixiJS and React.",
    tags: ["PixiJS", "Slot Game", "React"],
    video: "/works/doz.mp4",
    category: "Game",
  },
  {
    id: "bountyHunter",
    title: "Bounty Hunter",
    description: "Interactive betting game running on a smooth game loop.",
    tags: ["WebGL", "PixiJS", "Animation"],
    video: "/works/bountyHunter.mp4",
    category: "Game",
  },
  {
    id: "raceView",
    title: "Race View",
    description:
      "Live racing visualization with real-time data feeds, dynamic UI updates, and fluid track rendering.",
    tags: ["React", "TypeScript", "Real-time", "Phaser", "Animation"],
    video: "/works/raceView.mp4",
    category: "Frontend",
  },
  {
    id: "sng",
    title: "SNG Bingo",
    description:
      "Sit-and-Go bingo game — complex state management, real-time multiplayer, and polished game UX from scratch.",
    tags: ["React", "Redux", "Multiplayer", "Game UI"],
    video: "/works/sng.mp4",
    category: "Game",
  },
  {
    id: "skillBingo",
    title: "Skill Bingo",
    description:
      "Interactive bingo game with animated ball draws, card marking, and pattern detection logic.",
    tags: ["Phaser", "Animation", "Canvas", "Interactive"],
    video: "/works/skillBingo.mp4",
    category: "Game",
  },
  {
    id: "bingoTv",
    title: "Bingo TV",
    description:
      "Broadcast-quality bingo display experience optimized for TV — real-time number calling and live boards.",
    tags: ["React", "TypeScript", "WebGL", "Real-time"],
    video: "/works/bingoTv.mp4",
    category: "Frontend",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Game Developer",
    company: "i3Soft",
    period: "May 2022 – Aug 2026",
    type: "Part-time → Full-time",
    highlights: [
      "Built and maintained production React, React Native, and TypeScript applications.",
      "Developed reusable UI component libraries focused on performance and scalability across desktop and mobile.",
      "Integrated RESTful APIs and managed complex asynchronous data flows.",
      "Implemented state management using Redux, Context API, and Zustand.",
      "Built interactive betting features in Phaser — animations, physics, parallax, and multiplayer systems.",
    ],
  },
  {
    role: "Game Developer",
    company: "Parlay Games Inc.",
    period: "May 2020 – May 2022",
    type: "Part-time",
    highlights: [
      "Designed and deployed bingo, casino, and betting games using WebGL and JavaScript.",
      "Delivered game projects that directly contributed to revenue growth.",
    ],
  },
  {
    role: "Interactive Developer",
    company: "Incubeta",
    period: "Apr 2019 – Apr 2023",
    highlights: [
      "Produced rich-media display advertising for 50+ campaigns using HTML5 and animation frameworks.",
      "Built high-impact ad units that improved client CTR.",
    ],
  },
  {
    role: "Interactive Developer",
    company: "Joystick Interactive",
    period: "Mar 2012 – Apr 2019",
    highlights: [
      "Built interactive HTML5/Flash banners and playable ads for a wide range of clients.",
      "Consistently achieved 3× industry-average click-through rates.",
    ],
  },
  {
    role: "Game Developer",
    company: "PODD Corp",
    period: "May 2010 – Feb 2012",
    highlights: [
      "Launched 10+ games across mobile and web using JavaScript and ActionScript 3.",
      "Mentored junior developers and maintained timely project delivery.",
    ],
  },
  {
    role: "Flash Developer",
    company: "Webxpress Cebu Inc.",
    period: "May 2009 – May 2010",
    highlights: [
      "Developed games, animations, and video advertisements using ActionScript 3.0.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Information and Computer Science",
  school: "University of Cebu, Philippines",
  year: "2000",
};

export const certifications = [
  { name: "DoubleClick Studio Certified", date: "October 2020" },
  { name: "Sizmek Certified", date: "May 2014" },
];
