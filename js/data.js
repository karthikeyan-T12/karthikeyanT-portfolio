// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

const PORTFOLIO_DATA = {

  // ── Personal Info ─────────────────────────────────────────
  name: "Karthikeyan.T",
  title: "Computer Science (IoT) Student",
  subtitle: "Java Developer · backend developer",
  degree: "B.Tech Computer Science and Engineering (IoT)",
  tagline: "Building software, exploring IoT systems, and continuously learning new technologies.",
  summary: "I'm a Computer Science (IoT) student focused on Java development, Data Structures & Algorithms, IoT systems, and Full Stack Development. I enjoy building practical software solutions, exploring emerging technologies, and continuously improving my engineering skills through hands-on projects.",
  highlights: [
    { icon: "🎓", label: "B.Tech CSE (IoT)" },
    { icon: "☕", label: "Java Developer" },
    { icon: "📊", label: "Learning DSA" },
    { icon: "🌐", label: "IoT " },
    { icon: "🚀", label: "Project-Based Learner" },
  ],
  email: "t.karthikeyan.0712@gmail.com",
  phone: "+91 8248022573", // Replace with your actual phone number
  github: "https://github.com/karthikeyan-T12",
  linkedin: "https://www.linkedin.com/in/karthi-keyan-77b295303/",
  resumeUrl: "assets/resume.pdf",
  profilePhoto: "assets/profile.jpg", // Set to path like "assets/profile.jpg" when you have a photo

  // ── Skills ────────────────────────────────────────────────
  // Add / remove / edit freely — HTML never changes
  skills: [
    {
      category: "Programming",
      icon: "💻",
      items: [
        { name: "Java"},
        { name: "Python"},
        { name: "c++"},
        { name: "html"},
        { name: "CSS"},
        // { name: "JavaScript", level: 45, badge: "Learning" },
      ],
    },
    {
      category: "Core Concepts & other tool",
      icon: "🧠",
      items: [
        { name: "Data Structures & Algorithms"},
        { name: "Object-Oriented Programming"},
        { name: "Problem Solving"},
        { name: "maven"},
        { name: "hibernet"},
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "🔧",
      items: [
        { name: "Git"},
        { name: "GitHub"},
        { name: "VS Code"},
        { name: "intelij"},
      ],
    },
    {
      category: "Currently Learning",
      icon: "🚀",
      items: [
        { name: "Spring Boot",  badge: "Learning" },
        { name: "Microservices", badge: "Learning" },
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      id: "currency-converter",
      featured: true,
      title: "Currency Converter",
      tagline: "Real-time desktop currency conversion with a clean Tkinter GUI",
      description:
        "A desktop application built with Python and Tkinter that allows users to convert between multiple currencies in real time. Features a responsive interface, live exchange-rate fetching, and a clean, intuitive layout designed for everyday use.",
      image: "", // path to image — leave empty for placeholder
      tags: ["Python", "Tkinter", "GUI", "API Integration"],
      github: "https://github.com/karthikeyan/currency-converter",
      demo: "",
      highlights: [
        "Real-time exchange-rate API integration",
        "Supports 30+ currency pairs",
        "Clean, responsive Tkinter interface",
        "Error handling for offline scenarios",
      ],
    },
    {
      id: "iot-showcase",
      featured: true,
      title: "IoT Project Showcase",
      tagline: "End-to-end IoT system with sensor data, edge processing, and visualization",
      description:
        "An IoT project exploring sensor integration, edge computing concepts, and real-time data visualization. Covers hardware component selection, system architecture, and the challenges of building reliable connected devices.",
      image: "",
      tags: ["IoT", "Sensors", "Edge Computing", "Data Visualization"],
      github: "https://github.com/karthikeyan/iot-showcase",
      demo: "",
      caseStudy: {
        problem:
          "How do you reliably collect, transmit, and visualize sensor data from constrained IoT devices with minimal latency?",
        components: ["Microcontroller", "Temperature & Humidity Sensors", "MQTT Broker", "Dashboard"],
        architecturePlaceholder: true,
        challenges: [
          "Managing power constraints on edge devices",
          "Ensuring reliable data transmission over unstable networks",
          "Designing a scalable data pipeline for sensor streams",
        ],
        lessons: [
          "Importance of edge preprocessing to reduce bandwidth",
          "MQTT protocol efficiency over HTTP for IoT workloads",
          "Value of modular system design for easy sensor swap-out",
        ],
      },
    },
    // Add new projects below this line — they'll automatically appear
    // on the Projects page. Set featured: true to also surface them
    // on the Home page (top 3) and Resume page (top 3).
  ],

  // ── Journey / Timeline ───────────────────────────────────
  journey: [
    {
      year: "2022",
      title: "Started Programming",
      description: "Wrote my first lines of code. Fell in love with the idea of making computers do things.",
      icon: "✨",
      type: "milestone",
    },
    {
      year: "2022",
      title: "Learned html & css ",
      description: "picked html & css to understand the basic of web and and it actualy work",
      icon: "🌐",
      type: "skill",
    },
    {
      year: "2023",
      title: "Learned Python",
      description: "Picked up Python for understanding the programming language",
      icon: "🐍",
      type: "skill",
    },
    {
      year: "2023",
      title: "Built Currency Converter",
      description: "First real project — a desktop GUI app using Python and Tkinter. Shipped something people could use.",
      icon: "💱",
      type: "project",
    },
    {
      year: "2024",
      title: "Started Learning Java",
      description: "Began Java to understand enterprise-level programming, OOP principles, and backend foundations.",
      icon: "☕",
      type: "skill",
    },
    {
      year: "2024",
      title: "Data Structures & Algorithms",
      description: "Started seriously studying DSA. Solving problems on LeetCode daily to build problem-solving instincts.",
      icon: "📊",
      type: "skill",
    },
    {
      year: "2024",
      title: "Exploring IoT",
      description: "Began research into IoT systems, sensor networks, and edge computing as part of my B.Tech focus.",
      icon: "🌐",
      type: "research",
    },
    {
      year: "2025",
      title: "iot based project",
      description: "build some iot based project to understand the basic of electronic",
      icon: "🌐",
      type: "project",
    },
    {
      year: "2026+",
      title: "Goal: Software Engineer",
      description: "Working toward my first software engineering role. Spring Boot, React, and system design are next.",
      icon: "🎯",
      type: "goal",
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering (IoT)",
      institution: "DSU",
      university: "Dhanalakshmi srinivasan university - samayapuram",
      period: "2024 – 2028",
      status: "Ongoing",
      highlights: ["IoT specialization", "DSA coursework", "Project-based learning"],
    },
  ],

  // ── Achievements & Leadership (Resume page) ─────────────────
  // Content-only — no images. Shown as a filterable, paginated
  // gallery so it stays clean even with 50+ entries.
  // Fields: title, organization, date, description, skills, impact
  // category is optional and powers the filter chips (falls back
  // to "General" if omitted).
  achievements: [
    {
      title: "Add Your First Achievement",
      organization: "Organization / Event",
      date: "Month Year",
      category: "Academic",
      description: "Describe what you did, the context, and why it mattered.",
      skills: ["Skill One", "Skill Two"],
      impact: "What changed or improved as a result.",
    },
    {
      title: "Add Another Achievement",
      organization: "Organization / Event",
      date: "Upcoming",
      category: "Leadership",
      description: "Could be a hackathon, workshop, leadership role, award, or contribution.",
      skills: [],
      impact: "",
    },
  ],
};
