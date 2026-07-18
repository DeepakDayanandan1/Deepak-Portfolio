// Portfolio Content — Deepak Dayanandan
export const portfolioData = {
  name: "DEEPAK",
  fullName: "Deepak Dayanandan",
  role: "CS Graduate · Designer · Developer",
  tagline: "Crafting Bold Digital Experiences",
  bio: "Computer Science and Engineering graduate passionate about building innovative web applications and AI-powered solutions. Focused on creating intuitive user experiences and developing scalable software for real-world impact.",
  longBio: "From crafting user interfaces in Figma to developing full-stack applications with Next.js and Python, I enjoy transforming ideas into polished digital products. I'm seeking opportunities to contribute to teams that value innovation, user-centric design, and high-quality engineering.",
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
        title: "Portfolio",
        category: "Frontend",
        description:
          "A modern developer portfolio built with Next.js and Tailwind CSS, featuring responsive design, custom animations, and an interactive user experience.",
        tags: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "JavaScript",
          "UI/UX"
        ],
        image: "/projectimg/Portfolio.png",
        link: "/projects/2",
        color: "#ff4d00",
        demoUrl: "https://deepakdesigns.vercel.app",
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
  number: "03",
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
  link: "/projects/3",
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
      number: "04",
      title: "Sales Forecasting",
      category: "Full Stack",
      description: "Developed a sales forecasting system using machine learning algorithms to predict future sales trends based on historical data.",
      tags: ["Python", "ML", "Full Stack", "Data Science"],
      image: "/projectimg/SalesForecast.png",
      link: "/projects/4",
      color: "#84cc16",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7379503792054194176/",
      githubUrl: "https://github.com/DeepakDayanandan1/Sales-Forecasting",
      features: [
        { title: "ML-Powered Sales Prediction", description: "Utilizes machine learning algorithms to forecast future sales trends with precision and reliability." },
        { title: "Confidence & Accuracy Metrics", description: "Provides detailed confidence levels and accuracy insights to help evaluate prediction performance." },
        { title: "Modern Dashboard Interface", description: "Features a clean, data-driven dashboard for visualizing results and insights in a user-friendly layout." }
      ]
    },
  ],

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
    "PROTOTYPING", "DESIGN SYSTEMS", "TAILWIND", "TYPESCRIPT",
    "REACT", "ACCESSIBILITY", "USER RESEARCH", "INTERACTION DESIGN",
  ],
};
