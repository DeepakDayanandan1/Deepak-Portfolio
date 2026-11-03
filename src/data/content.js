// Portfolio Content — Deepak Dayanandan
export const portfolioData = {
  name: "DEEPAK",
  fullName: "Deepak Dayanandan",
  role: "CS Graduate · Designer · Developer",
  tagline: "Crafting Bold Digital Experiences",
  bio: "Computer Science and Engineering graduate passionate about building innovative web applications and AI-powered solutions. Focused on creating intuitive user experiences and developing scalable software for real-world impact.",
  longBio: "From crafting user interfaces in Figma to developing full-stack applications with React.js and Python, I enjoy transforming ideas into polished digital products. I'm seeking opportunities to contribute to teams that value innovation, user-centric design, and high-quality engineering.",
  location: "Alappuzha, Kerala",
  college: "Carmel College of Engineering & Technology (KTU)",
  school: "Lourdes Matha Higher Secondary School",
  email: "deepakdayanandan008@gmail.com",
  resumeUrl: "/Deepak Dayanandan-Resume.pdf",
  existingPortfolio: "https://deepakdesigns.vercel.app",

  socials: {
    github: "https://github.com/deepakdayanandan1",
    linkedin: "https://www.linkedin.com/in/deepak-dayanandan/",
    //dribbble: "https://dribbble.com/deepakdayanandan",
    instagram: "https://www.instagram.com/deep.4k__",
  },

  stats: [
    { value: "3+", label: "Projects Built" },
    { value: "B.Tech", label: "CS Engineering" },
    { value: "∞", label: "Ideas Brewing" },
  ],

  projects: [
    {
  number: "01",
  title: "Drafted — AI-Powered Resume Builder & ATS Matcher",
  category: "Full Stack",
  description:
    "An AI-powered Resume Builder and ATS Matcher that helps users create professional resumes, analyze ATS compatibility, compare resumes with job descriptions, and receive AI-driven optimization suggestions using Groq Llama 3.3 70B.",
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Supabase",
    "Groq AI"
  ],
  image: "/projectimg/Drafted.png",
  link: "/projects/1",
  color: "#4f46e5",
  demoUrl: "https://drafted-ats.vercel.app",
  githubUrl: "https://github.com/DeepakDayanandan1/AI-Resume-Builder-and-ATS-Matcher",
  features: [
    {
      title: "AI Resume Builder",
      description:
        "Create professional resumes using intuitive forms and multiple modern templates, with PDF export and cloud storage."
    },
    {
      title: "ATS Analysis",
      description:
        "Analyze resume ATS compatibility by identifying missing sections, formatting issues, keyword gaps, and providing AI-powered improvement suggestions."
    },
    {
      title: "Job Description Matcher",
      description:
        "Compare resumes against job descriptions to generate skill match scores, highlight missing keywords, and provide actionable recommendations."
    },
    {
      title: "AI Resume Optimizer",
      description:
        "Enhance resume content with AI-generated bullet point rewrites, keyword optimization, and prioritized suggestions to improve interview readiness."
    }
  ]
  },   
    {
  number: "02",
  title: "VisionGuard-AI",
  category: "AI / Deep Learning",
  description:
    "A deep learning-based web application for cataract detection using Fundus and Slit-Lamp eye images with DenseNet169 and an automated image preprocessing pipeline.",
  tags: [
    "Python",
    "Flask",
    "PyTorch",
    "DenseNet169",
    "OpenCV",
    "Deep Learning"
  ],
  image: "/projectimg/VisionGuard.png",
  link: "/projects/2",
  color: "#00b894",
  demoUrl: "https://huggingface.co/spaces/bidhunb/cataract_detection",
  githubUrl: "https://github.com/DeepakDayanandan1/cataract-new",
  features: [
    {
      title: "Dual-Model Detection",
      description:
        "Detects cataracts from Fundus and Slit-Lamp images using separate DenseNet169 models for binary and multi-class classification."
    },
    {
      title: "Image Preprocessing",
      description:
        "Applies green channel extraction, Gaussian blur, CLAHE, resizing, and normalization to improve model performance."
    },
    {
      title: "Interactive Diagnosis",
      description:
        "Flask-based interface for image upload, preprocessing visualization, diagnosis results, and confidence scores."
    },
    {
      title: "Deep Learning Pipeline",
      description:
        "Includes dataset preparation, augmentation, model training, validation, and inference using PyTorch."
    }
  ]
},
  {
  number: "03",
  title: "Wayfarer",
  category: "Full Stack",
  description:
    "A comprehensive tourism management platform built with PHP, MySQL, and Bootstrap, featuring tour package discovery, online booking management, traveler accounts, and an administrative dashboard for managing travel operations.",
  tags: [
    "PHP",
    "MySQL",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "PDO"
  ],
  image: "/projectimg/Wayfarer.png",
  link: "/projects/3",
  color: "#0D9488",
  demoUrl: "https://wayfarer.freedev.app",
  githubUrl: "https://github.com/DeepakDayanandan1/Wayfarer-Tourism-Management-System",
  features: [
    {
      title: "Tour Package Management",
      description:
        "Browse categorized travel packages with detailed itineraries, destination information, pricing, package highlights, and image galleries."
    },
    {
      title: "Booking & Reservation System",
      description:
        "Allows travelers to book tour packages, select departure and return dates, submit special requests, and track booking status with cancellation options."
    },
    {
      title: "Admin Dashboard & Analytics",
      description:
        "Provides a centralized administrative dashboard to manage travelers, tour packages, bookings, customer inquiries, and support tickets with real-time statistics."
    },
    {
      title: "User Authentication & Support",
      description:
        "Includes traveler registration, login, profile management, password recovery, and an integrated support ticket system for tracking customer issues and admin responses."
    },
    {
      title: "Content Management System",
      description:
        "Features an admin-managed CMS for updating website pages, including About Us, Terms and Conditions, Privacy Policy, and Contact Information."
    }
  ]
},
    {
        number: "04",
        title: "Portfolio",
        category: "Frontend",
        description:
          "A modern developer portfolio built with Next.js and Tailwind CSS, featuring responsive design, custom animations, and an interactive user experience.",
        tags: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "UI/UX"
        ],
        image: "/projectimg/Portfolio.png",
        link: "/projects/4",
        color: "#ff4d00",
        demoUrl: "https://deepakbuilds.vercel.app",
        githubUrl: "https://github.com/DeepakDayanandan1/Portfolio",
        features: [
          {
            title: "Modern Responsive Design",
            description:
              "Brutalist-inspired UI with a fully responsive layout, dark theme, and seamless experience across devices."
          },
          {
            title: "Interactive Experience",
            description:
              "Features custom cursor effects, scroll reveal animations, marquee banners, and cinematic film grain for engaging interactions."
          },
          {
            title: "Reusable Architecture",
            description:
              "Built with reusable React components and centralized content management for easy customization and scalability."
          },
          {
            title: "Performance Optimized",
            description:
              "Developed using Next.js App Router with optimized fonts, minimal dependencies, and fast deployment on Vercel."
          }
        ]
      },
    {
      number: "05",
      title: "Sales Forecasting",
      category: "Full Stack",
      description: "Developed a sales forecasting system using machine learning algorithms to predict future sales trends based on historical data.",
      tags: ["Python", "ML", "Full Stack", "Data Science"],
      image: "/projectimg/SalesForecast.png",
      link: "/projects/5",
      color: "#84cc16",
      demoUrl: "https://sales-forecasting-gwnt93bzk2d4jzs3xecbzz.streamlit.app/",
      githubUrl: "https://github.com/DeepakDayanandan1/Sales-Forecasting",
      features: [
        { title: "ML-Powered Sales Prediction", description: "Utilizes machine learning algorithms to forecast future sales trends with precision and reliability." },
        { title: "Confidence & Accuracy Metrics", description: "Provides detailed confidence levels and accuracy insights to help evaluate prediction performance." },
        { title: "Modern Dashboard Interface", description: "Features a clean, data-driven dashboard for visualizing results and insights in a user-friendly layout." }
      ]
    },
  ],

  // Tech Stack & Skills Data
  skillsData: {
    badge: "TOOLBOX // TECH STACK",
    heading: "Systems, Stack",
    headingHighlight: "& Tools",
    subtitle:
      "A focused breakdown of the programming languages, modern frameworks, database systems, and developer tools I build with.",
    snippet: {
      comment: "# Deepak Dayanandan — Developer & Designer",
      fn: "def build():",
      body: 'ideas = ["solve", "build", "scale", "innovate"]',
      ret: 'return "always curious & building"',
    },
    categories: [
      {
        id: "frontend",
        number: "01",
        label: "01 // FRONTEND & UI/UX",
        title: "Frontend & UI/UX Design",
        skills: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "HTML5 & CSS3",
          "jQuery",
          "Figma",
          "Design Systems",
        ],
        appliedProjects: [
          { name: "Drafted", link: "/projects/1" },
          { name: "Wayfarer", link: "/projects/3" },
          { name: "Portfolio", link: "/projects/4" },
        ],
      },
      {
        id: "backend",
        number: "02",
        label: "02 // BACKEND & DATABASES",
        title: "Backend & Databases",
        skills: [
          "FastAPI",
          "Flask",
          "PHP",
          "MySQL",
          "Supabase",
          "RESTful APIs",
          "Postman",
          "PDO",
        ],
        appliedProjects: [
          { name: "Drafted", link: "/projects/1" },
          { name: "Wayfarer", link: "/projects/3" },
        ],
      },
      {
        id: "languages",
        number: "03",
        label: "03 // LANGUAGES & CS CORE",
        title: "Languages & Core CS",
        skills: [
          "Python",
          "JavaScript",
          "TypeScript",
          "C",
          "Java",
          "SQL",
          "Data Structures",
          "OOP Architecture",
        ],
        appliedProjects: [
          { name: "Drafted", link: "/projects/1" },
          { name: "Wayfarer", link: "/projects/3" },
          { name: "VisionGuard-AI", link: "/projects/2" },
          { name: "Sales Forecasting", link: "/projects/5" },
        ],
      },
      {
        id: "toolkit",
        number: "04",
        label: "04 // WORKFLOW & LIBRARIES",
        title: "Tools & Libraries",
        skills: [
          "Git & GitHub",
          "VS Code",
          "Vercel",
          "Streamlit",
          "Pandas & NumPy",
          "PyTorch",
          "OpenCV",
        ],
        appliedProjects: [
          { name: "Drafted", link: "/projects/1" },
          { name: "VisionGuard-AI", link: "/projects/2" },
          { name: "Sales Forecasting", link: "/projects/5" },
          { name: "Portfolio", link: "/projects/4" },
        ],
      },
    ],
  },

  // Legacy services alias maintained for backwards compatibility
  services: [
    {
      number: "01",
      title: "UI/UX Design",
      description: "Crafting intuitive, accessible, and visually engaging interfaces that merge creativity with usability.",
    },
    {
      number: "02",
      title: "Frontend Development",
      description: "Building performant web applications with Next.js, React, TypeScript and modern frameworks.",
    },
    {
      number: "03",
      title: "Design Systems",
      description: "Creating scalable component libraries and design tokens for consistent user experiences.",
    },
    {
      number: "04",
      title: "Prototyping",
      description: "Rapid prototyping and interaction design in Figma to validate ideas before development.",
    },
  ],

  techStack: [
    "React", "Next.js", "JavaScript",
    "Python", "Figma", "Tailwind CSS",
    "HTML/CSS", "Git", "C",
    "MongoDB", "Vercel", "REST APIs",
  ],

  marqueeWords: [
    "UI/UX DESIGN", "FRONTEND DEV", "NEXT.JS", "FIGMA",
    "PROTOTYPING", "DESIGN SYSTEMS", "TAILWIND", "PYTHON",
    "REACT", "MACHINE LEARNING",
  ],
};
