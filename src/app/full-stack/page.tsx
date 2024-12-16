'use client'

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const nonTechnicalSyllabus = [
  // ... your non-technical syllabus data
];

export default function FullStackPage() {
  const modules = {
    java: [
      {
        title: "Module 1: Laying the Groundwork",
        topics: [
          "Introduction to Java",
          "Programming in Java",
          "Data Types",
          "Operators",
          "Methods"
        ]
      },
      {
        title: "Module 2: Diving into OOPs",
        topics: [
          "Introduction to OOP",
          "Static",
          "Inheritance",
          "Constructors",
          "Encapsulation",
          "Polymorphism",
          "Abstraction",
          "Packages"
        ]
      },
      {
        title: "Module 3: Mastering the Logic",
        topics: [
          "Conditional Control Constructs",
          "Looping Control Constructs",
          "Jump Statements",
          "Data Manipulation"
        ]
      },
      {
        title: "Module 4: Data Structures & Algorithms",
        topics: [
          "Arrays",
          "Strings",
          "Collections Framework",
          "Advanced Programming",
          "Algorithms"
        ]
      },
      {
        title: "Module 5: Exception Handling and Multi-threading",
        topics: [
          "Try-Catch Blocks",
          "Throw and Throws",
          "Finally Block",
          "Custom Exceptions",
          "Creating Threads",
          "Synchronisation",
          "Thread Communication",
          "Concurrency Utilities"
        ]
      },
      {
        title: "Module 6: Java Frameworks & More",
        topics: [
          "Hibernate",
          "Session Management",
          "Mapping Entities",
          "HQL",
          "Caching",
          "Spring Framework",
          "Dependency Injection",
          "Spring Boot",
          "RESTful Services",
          "Microservices"
        ]
      }
    ],
    python: [
      {
        title: "Module 1: Python essentials",
        topics: [
          "Introduction to Python",
          "Features of Python",
          "Python Code flow",
          "Variables",
          "Data types"
        ]
      },
      {
        title: "Module 2: Programming in Python",
        topics: [
          "Operators",
          "Expressions",
          "Functions",
          "Modules",
          "Control constructs"
        ]
      },
      {
        title: "Module 3: DSA in Python",
        topics: [
          "List",
          "Tuple",
          "Set",
          "Dictionary",
          "Comprehensions",
          "Searching",
          "Sorting"
        ]
      },
      {
        title: "Module 4: Object-Oriented Programming in Python",
        topics: [
          "Objects and Classes",
          "Inheritance",
          "Encapsulation",
          "Polymorphism",
          "Abstraction",
          "Static"
        ]
      }
    ],
    frontend: [
      {
        title: "Module 1: HTML - Structuring a Web Page",
        topics: [
          "Getting Started with HTML",
          "HTML Basic Tags",
          "Lists in HTML",
          "Tables in HTML",
          "Multimedia Tags in HTML",
          "More HTML Elements",
          "HTML Forms",
          "Semantic Tags"
        ]
      },
      {
        title: "Module 2: CSS - Style a Web Page",
        topics: [
          "Getting Started with CSS",
          "CSS Basics",
          "CSS Box Model",
          "Positioning and Flexbox",
          "Grid Layouts",
          "Responsive Design",
          "Transitions and Animations"
        ]
      },
      {
        title: "Module 3: JavaScript - Programming the Web",
        topics: [
          "Introduction to JavaScript",
          "Control Structures",
          "Functions and Scope",
          "DOM Manipulation",
          "Events and Event Handling",
          "Arrays and Objects",
          "Asynchronous JavaScript"
        ]
      }
    ]
  }

  const features = [
    {
      title: "Hands-On, Interactive Live Training",
      description: "Learn through practical exercises and real-time interaction with expert instructors"
    },
    {
      title: "Hackathons and Mock Interviews",
      description: "Regular coding challenges and interview preparation to build confidence"
    },
    {
      title: "Develop Job-Ready Portfolios",
      description: "Create impressive projects that showcase your skills to potential employers"
    },
    {
      title: "Unlimited Job Placement Support",
      description: "Continuous placement assistance until you secure your dream job"
    }
  ]

  const tools = [
    "VS code and Eclipse",
    "Maven",
    "Log4j",
    "GIT",
    "NPM",
    "Heidi SQL",
    "Docker"
  ]

  const topics = [
    { 
      icon: <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
        <svg className="w-8 h-8 text-green-400" viewBox="0 0 384 512" fill="currentColor">
          <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"/>
        </svg>
      </div>,
      text: "Java and Frameworks" 
    },
    { 
      icon: <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
        <svg className="w-8 h-8 text-green-400" viewBox="0 0 448 512" fill="currentColor">
          <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
        </svg>
      </div>,
      text: "Python and Frameworks" 
    },
    { 
      icon: <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 6h16v12H4V6z"/>
          <path d="M2 9h20v2H2zM12 6v12"/>
        </svg>
      </div>,
      text: "Front End Technologies" 
    },
    { 
      icon: <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
        </svg>
      </div>,
      text: "Database" 
    },
    { 
      icon: <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      </div>,
      text: "Build and Deployment" 
    },
    { 
      icon: <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      </div>,
      text: "SoftSkills and Aptitude" 
    }
  ];

  const testimonials = [
    {
      name: "Haveesh",
      image: "/images/testimonials/Haveesh.png",
      role: "Software Engineer",
      company: "Leading Tech Company",
      quote: "The full-stack program gave me comprehensive knowledge and hands-on experience that helped me land my dream job."
    },
    {
      name: "Sanavi",
      image: "/images/testimonials/Sanavi.png", 
      role: "Full Stack Developer",
      company: "Tech Solutions",
      quote: "KodNest's curriculum and teaching approach helped me transition from a beginner to a confident developer."
    },
    {
      name: "Jyothi AR",
      image: "/images/testimonials/Jyohi-AR.png",
      role: "Software Developer",
      company: "Tech Innovators",
      quote: "The practical projects and industry-focused training gave me the skills needed to succeed in my career."
    }
  ];

  const javaSyllabus = [
    {
      title: "Module 1: Laying the Groundwork",
      topics: [
        "Introduction to Java",
        "Programming in Java",
        "Data Types",
        "Operators",
        "Methods"
      ]
    },
    {
      title: "Module 2: Diving into OOPs",
      topics: [
        "Introduction to OOP",
        "Static",
        "Inheritance",
        "Constructors",
        "Encapsulation",
        "Polymorphism",
        "Abstraction",
        "Packages"
      ]
    },
    {
      title: "Module 3: Mastering the Logic",
      topics: [
        "Conditional Control Constructs",
        "Looping Control Constructs",
        "Jump Statements",
        "Data Manipulation"
      ]
    },
    {
      title: "Module 4: Data Structures & Algorithms",
      topics: [
        "Arrays",
        "Strings",
        "Collections Framework",
        "Advanced Programming",
        "Algorithms"
      ]
    },
    {
      title: "Module 5: Exception Handling and Multi-threading",
      topics: [
        "Try-Catch Blocks",
        "Throw and Throws",
        "Finally Block",
        "Custom Exceptions",
        "Creating Threads",
        "Synchronisation",
        "Thread Communication",
        "Concurrency Utilities"
      ]
    },
    {
      title: "Module 6: Java Frameworks & More",
      topics: [
        "Hibernate",
        "Session Management",
        "Mapping Entities",
        "HQL",
        "Caching",
        "Spring Framework",
        "Dependency Injection",
        "Spring Boot",
        "RESTful Services",
        "Microservices"
      ]
    }
  ];

  const pythonSyllabus = [
    {
      title: "Module 1: Python essentials",
      topics: [
        "Introduction to Python",
        "Features of Python",
        "Python Code flow",
        "Variables",
        "Data types"
      ]
    },
    {
      title: "Module 2: Programming in Python",
      topics: [
        "Operators",
        "Expressions",
        "Functions",
        "Modules",
        "Control constructs"
      ]
    },
    {
      title: "Module 3: DSA in Python",
      topics: [
        "List",
        "Tuple",
        "Set",
        "Dictionary",
        "Comprehensions",
        "Searching",
        "Sorting"
      ]
    },
    {
      title: "Module 4: Object-Oriented Programming in Python",
      topics: [
        "Objects and Classes",
        "Inheritance",
        "Encapsulation",
        "Polymorphism",
        "Abstraction",
        "Static"
      ]
    },
    {
      title: "Module 5: Advanced Python",
      topics: [
        "Iterators",
        "Generators",
        "Decorators",
        "Exception handling",
        "File handling",
        "Multi-threading",
        "Database Connectivity"
      ]
    },
    {
      title: "Module 6: Django",
      topics: [
        "Django overview",
        "Architecture",
        "Models",
        "ORM",
        "Views",
        "Templates",
        "Admin module",
        "Handling forms"
      ]
    }
  ];

  const frontendSyllabus = [
    {
      title: "Module 1: HTML: Structuring a Web Page and Basics of Front-End Development",
      topics: [
        "Getting Started with HTML",
        "HTML Basic Tags",
        "Lists in HTML",
        "Tables in HTML",
        "Multimedia Tags in HTML",
        "More HTML Elements",
        "HTML Forms",
        "Semantic Tags"
      ]
    },
    {
      title: "Module 2: CSS - Style a Web Page",
      topics: [
        "Getting Started with CSS",
        "CSS Basics",
        "CSS Box Model",
        "Positioning and Flexbox",
        "Grid Layouts",
        "Responsive Design",
        "Transitions and Animations"
      ]
    },
    {
      title: "Module 3: JavaScript - Programming the Web",
      topics: [
        "Introduction to JavaScript",
        "Control Structures",
        "Functions and Scope",
        "DOM Manipulation",
        "Events and Event Handling",
        "Arrays and Objects",
        "Asynchronous JavaScript"
      ]
    },
    {
      title: "Module 4: React JS - Building Interactive UIs",
      topics: [
        "Introduction to React",
        "Setting Up the Development Environment",
        "React Components",
        "State and Lifecycle",
        "Handling Events",
        "Conditional Rendering",
        "Forms and Controlled Components",
        "Lifting State Up",
        "Composition vs Inheritance",
        "Routing with React Router",
        "Hooks in React",
        "Redux"
      ]
    }
  ];

  const databaseSyllabus = [
    {
      title: "Module 1: Introduction to Databases",
      topics: [
        "Data and Its Importance",
        "Database Fundamentals",
        "Database Management Systems (DBMS)",
        "Installation and Configuration"
      ]
    },
    {
      title: "Module 2: Basic SQL Operations",
      topics: [
        "Database and Table Operations",
        "Data Retrieval and Manipulation",
        "Data Types and Sensitivity",
        "Operators in SQL",
        "SQL Functions"
      ]
    },
    {
      title: "Module 3: Advanced SQL Concepts",
      topics: [
        "Control Flows and Grouping",
        "Complex Queries",
        "Oracle Specific Functions",
        "Data Integrity and Constraints",
        "Client and Database Management"
      ]
    },
    {
      title: "Module 4: SQL Commands and Database Objects",
      topics: [
        "Types of SQL Commands",
        "Database Objects"
      ]
    },
    {
      title: "Module 5: Database Design and Normalization",
      topics: [
        "Entity-Relationship (ER) Model",
        "Normalization"
      ]
    },
    {
      title: "Module 6: MongoDB - NoSQL Database",
      topics: [
        "Overview of MongoDB",
        "MongoDB Installation and Setup",
        "Working with Databases and Collections",
        "Document CRUD Operations",
        "Query Operators and Query Language",
        "Indexing Strategies",
        "Aggregation Framework",
        "Data Modeling",
        "Replication and Sharding",
        "Security and Backup"
      ]
    }
  ];

  const fullStackProjects = [
    {
      title: "TaskBuddy",
      description: "Develop an interactive to-do list app with TaskBuddy using HTML, CSS, and JavaScript and React. Manage daily tasks with features like prioritisation, custom categories, and progress tracking",
      technologies: ["HTML", "CSS", "JS", "React"],
      logo: "https://www.kodnest.com/wp-content/uploads/2024/05/learn-task.png"
    },
    {
      title: "KodChat",
      description: "Build KodChat, an AI-powered chatbot application. Design an intuitive chat UI and implement advanced features to deliver intelligent and responsive conversations",
      technologies: ["HTML", "CSS", "React", "Github"],
      logo: "https://www.kodnest.com/wp-content/uploads/2024/05/learn-chat-768x160.png"
    },
    {
      title: "GameMaster",
      description: "Create GameMaster Classic, a desktop application reviving classic arcade games using Python. This multi-game platform blends nostalgic gameplay with contemporary programming techniques",
      technologies: ["Python", "Django", "React", "Mongo"],
      logo: "https://www.kodnest.com/wp-content/uploads/2024/05/Screenshot-2024-05-17-at-5.10.11%E2%80%AFPM.png"
    },
    {
      title: "mealMate", 
      description: "Develop mealMate, a comprehensive full-stack web application that links diners with local eateries through an efficient online ordering system, built with Python, Django, and modern web technologies",
      technologies: ["Python", "Django", "SQL", "React"],
      logo: "https://www.kodnest.com/wp-content/uploads/2024/05/Screenshot-2024-05-17-at-5.33.25%E2%80%AFPM-768x157.png"
    },
    {
      title: "SalesSavvy",
      description: "Craft a full-stack e-commerce solution with SalesSavvy using J2EE, Spring Boot, SQL, and advanced front-end technologies for business operations, customer interactions, and online sales",
      technologies: ["Java", "Console Interface", "OOPs"],
      logo: "https://www.kodnest.com/wp-content/uploads/2024/05/learn10-.png"
    },
    {
      title: "Workfolio",
      description: "Create a sleek, static website with Workfolio using HTML and CSS. Perfect for showcasing your work, achievements, and personal brand in a compelling format",
      technologies: ["HTML", "CSS", "JS"],
      logo: "https://www.kodnest.com/wp-content/uploads/2024/05/learn11-.png"
    }
  ];

  const [activeTab, setActiveTab] = useState('java');

  // Add these state declarations at the top of your component, near the other useState
  const [activeCategory, setActiveCategory] = useState('Enrolment');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  // Add this FAQ data structure
  const faqData = {
    'Enrolment': [
      {
        question: "How do I enroll in a Kodnest course?",
        answer: "To enroll in a Kodnest course, simply visit our website, browse through our wide range of courses, and select the one that fits your interests and career goals. Click on the Register button, follow the registration process, and make the payment to secure your spot. For any assistance during the enrollment process, our support team is here to help."
      },
      {
        question: "What are the prerequisites for enrolling in the Full Stack Development or Testing Modules?",
        answer: "Basic knowledge of programming is recommended but not mandatory as we cover fundamentals in the courses."
      },
      {
        question: "Are there any early bird discounts or promotional offers available?",
        answer: "Yes, we offer early bird discounts and promotional offers to our students. You can check the latest offers on our website or contact our support team for more information."
      },
      {
        question: "Can I switch betwen the full stack and testing modules after enrollment?",
        answer: "Yes, you can switch between the full stack and testing modules after enrollment. However, please note that this may incur additional costs. Please contact our support team for more information."
      },
      {
        question:"Is there any deadline for enrollment?",
        answer:"No, there is no deadline for enrollment. You can enroll at any time and start your learning journey at your own pace."
      }

    ],
    'Curriculum': [
      {
        question: "How is the Kodnest curriculum designed?",
        answer: "Our curriculum is designed to provide a comprehensive learning experience. It covers both frontend and backend development, including Java, Python, HTML, CSS, JavaScript, React, databases, and more. The course is structured to provide a comprehensive learning experience."
      },
      {
        question: "Can I access the curriculum before enrollment?",
        answer:"Yes, we believe in transparency and informed decision-making. Prospective students can view a detailed syllabus for each course on our website. This includes module breakdowns, learning outcomes, and project work. For further inquiries or detailed discussions about the curriculum, feel free to contact our academic counselors"
      },
      {
        question:"How often is the curriculum updated?",
        answer:"Our curriculum is regularly updated to keep it aligned with the latest industry trends and technologies. We ensure that the content is always relevant and up-to-date, providing you with the most current and practical knowledge."
      },
      {
        question:"do Kodnest courses include both theoretical and practical sessions?",
        answer:"Yes, Kodnest courses include both theoretical and practical sessions. We believe in a hands-on approach to learning, ensuring that you gain both theoretical knowledge and practical skills."
      },
      {
        question:"What is the duration of the Full Stack Development or Testing Modules?",
        answer:"The duration of the Full Stack Development or Testing Modules is 6 months. This includes both theoretical and practical sessions."
      }
    ],
    'Projects': [
      {
        question: "What kind of projects will I work on?",
        answer: "You'll work on real-world projects like e-commerce platforms, chat applications, and portfolio websites. These projects are designed to give you practical experience and build your portfolio."
      },
      {
        question:"Are the projects individual or group projects?",
        answer:"The projects are individual projects. You will work on your own projects and submit them for evaluation."
      },
      {
        question:"How do projects contribute to my learning?",
        answer:"Projects are a crucial part of your learning journey. They allow you to apply your knowledge in a real-world context, helping you understand how concepts translate into practical applications. Through hands-on experience, you'll develop problem-solving skills, learn to work in a team, and gain confidence in your abilities."
      },
      {
        question:"Can I propose my own projects?",
        answer:"Yes, you can propose your own projects. However, please note that the projects should be relevant to the course and should be approved by the instructors."
      },
      {
        question:"How does kodnest ensure projects are aligned with current industry standards?",
        answer:"Kodnest ensures that the projects are aligned with current industry standards by regularly updating the curriculum and providing real-world projects to the students."
      }
    ],
    // Add more categories as needed
    "Certification": [
      {
        question: "What is the certification process?",
        answer: "The certification process is a comprehensive evaluation of your skills and knowledge. It includes both theoretical and practical assessments. The certification is valid for a lifetime and is recognized by industry professionals."
      },
      {
        question:"How can I share my certification with potential employers?",
        answer:"You can share your certification with potential employers by providing them with a copy of your certification. You can also share your certification on your LinkedIn profile or resume."
      },
      {
        question:"Can the certificate be verified by employers?",
        answer:"Yes, the certificate can be verified by employers. You can share your certification with potential employers by providing them with a copy of your certification. You can also share your certification on your LinkedIn profile or resume."
      },
      {
        question:"does kodnest offer specialized certification for advanced courses?",
        answer:"Yes, Kodnest offers specialized certification for advanced courses. You can choose the certification that is relevant to your course."
      }
    ],
    "Job Placement": [
      {
        question:"How does Kodnest help me find a job?",
        answer:"Kodnest helps you find a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      }
    ],
    "General": [
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      },
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      }
    ],
    "Support": [
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      }, 
      {
        question:"How does Kodnest ensure that I get a job?",
        answer:"Kodnest ensures that you get a job by providing you with the skills and knowledge to get a job. We also provide you with placement assistance and help you with your resume and interview preparation."
      }
    ]
    

  };

  // Add these helper functions
  const toggleQuestion = (index: number) => {
    setExpandedQuestion(currentIndex => 
      currentIndex === index ? null : index
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50 pt-40">
        <div className="max-w-7xl mx-auto">
          <span className="bg-green-400 text-white px-4 py-1 rounded-md text-sm font-medium">
                Rated 4.9 Stars
              </span>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted Path to Expert Full-Stack Development
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">
                Java & Python - Full Stack Development Module
              </h2>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-300"
              >
                Download Syllabus
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://www.kodnest.com/wp-content/uploads/2024/05/web_2-2048x2048.png"
                alt="Full Stack Development"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-3">
                {topic.icon}
                <span className="text-lg font-medium">{topic.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Placements Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-md text-sm font-medium">
              Truly Unlimited
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Unlimited Placement Assistance!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Attend placement drives from the start and keep going until you land your dream job. No hassle, no limits.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex -space-x-6">
              <Link 
                href="https://www.youtube.com/watch?v=dD8bhqCAYTU"
                target="_blank"
                className="transform transition-transform hover:scale-110 hover:z-10"
              >
                <Image
                  src="https://www.kodnest.com/wp-content/uploads/2024/05/Haveesh.png"
                  alt="Haveesh Testimonial"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full border-2 border-white cursor-pointer"
                />
              </Link>
              <Link 
                href="https://www.youtube.com/watch?v=MVOWKe7dO7U"
                target="_blank"
                className="transform transition-transform hover:scale-110 hover:z-10"
              >
                <Image
                  src="https://www.kodnest.com/wp-content/uploads/2024/05/Sanavi.png"
                  alt="Sanavi Testimonial"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full border-2 border-white cursor-pointer"
                />
              </Link>
              <Link 
                href="https://www.youtube.com/watch?v=5tkYBNOEzZ4"
                target="_blank"
                className="transform transition-transform hover:scale-110 hover:z-10"
              >
                <Image
                  src="https://www.kodnest.com/wp-content/uploads/2024/05/Jyohi-AR.png"
                  alt="Jyothi AR Testimonial"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full border-2 border-white cursor-pointer"
                />
              </Link>
            </div>
            <span className="text-green-500 font-medium flex items-center gap-2">
              From Learning to Earning
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          {/* Company Logos Carousel */}
          <div className="mt-16 relative">
            <div className="absolute w-20 h-full left-0 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute w-20 h-full right-0 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap logo-scroll">
                {[
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/This.png", alt: "THIS" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/Sociate-Generale.png", alt: "Societe Generale" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/Sasken.png", alt: "Sasken" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/Qualys.png", alt: "Qualys" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/PWC.png", alt: "PwC" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/Prodapt.png", alt: "Prodapt" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/Paypal.png", alt: "PayPal" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/Mphasis.png", alt: "Mphasis" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/MindTree.png", alt: "Mindtree" },
                  { src: "https://www.kodnest.com/wp-content/uploads/2024/02/CGI.png", alt: "CGI" },
                ].map((logo, index) => (
                  <div key={index} className="inline-block px-8 min-w-[200px]">
                    <Image 
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={50}
                      className="h-12 w-auto object-contain"
                      priority={index < 10}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="bg-green-400 text-white px-4 py-2 rounded-md inline-block">
              FULL-STACK DEVELOPMENT CURRICULUM
            </span>
          </div>

          <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            At KodNest, our Full-Stack Developer program makes you job-ready with top-notch training, hands-on practice, AI-powered platforms, and more. Build a strong project portfolio, master interview skills, and start your career confidently
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveTab('java')}
              className={`px-6 py-3 ${activeTab === 'java' ? 'bg-yellow-400' : 'border border-gray-300'} rounded-md font-medium flex items-center gap-2`}
            >
              <span className="text-lg">≡</span> Java
            </button>
            <button 
              onClick={() => setActiveTab('python')}
              className={`px-6 py-3 ${activeTab === 'python' ? 'bg-yellow-400' : 'border border-gray-300'} rounded-md font-medium flex items-center gap-2`}
            >
              <span>⌨</span> Python
            </button>
            <button 
              onClick={() => setActiveTab('frontend')}
              className={`px-6 py-3 ${activeTab === 'frontend' ? 'bg-yellow-400' : 'border border-gray-300'} rounded-md font-medium flex items-center gap-2`}
            >
              <span>∞</span> Front-End Technologies
            </button>
            <button 
              onClick={() => setActiveTab('database')}
              className={`px-6 py-3 ${activeTab === 'database' ? 'bg-yellow-400' : 'border border-gray-300'} rounded-md font-medium flex items-center gap-2`}
            >
              <span>⚙</span> Database
            </button>
            <button 
              onClick={() => setActiveTab('nonTechnical')}
              className={`px-6 py-3 ${activeTab === 'nonTechnical' ? 'bg-yellow-400' : 'border border-gray-300'} rounded-md font-medium flex items-center gap-2`}
            >
              <span>⚡</span> Non-Technical
            </button>
          </div>

          {/* Content Section */}
          {activeTab === 'java' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Java Info */}
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Java</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Master Java programming from core concepts to advanced frameworks like Spring Boot and Hibernate. Build enterprise-ready applications.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Syllabus
                </button>
              </div>

              {/* Right Column - Modules */}
              <div className="space-y-6">
                {javaSyllabus.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      {module.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex} 
                          className="bg-yellow-400 px-4 py-2 rounded-md text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'python' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Python Info */}
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Python</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Learn Python programming and Django framework to build scalable web applications. Perfect for both beginners and advanced developers.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Syllabus
                </button>
              </div>

              {/* Right Column - Modules */}
              <div className="space-y-6">
                {pythonSyllabus.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      {module.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex} 
                          className="bg-yellow-400 px-4 py-2 rounded-md text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'frontend' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Frontend Info */}
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Front-End Technologies</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Master modern web development with HTML, CSS, JavaScript, and React to create responsive and interactive user interfaces.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Syllabus
                </button>
              </div>

              {/* Right Column - Modules */}
              <div className="space-y-6">
                {frontendSyllabus.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      {module.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex} 
                          className="bg-yellow-400 px-4 py-2 rounded-md text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'database' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Database Info */}
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Database</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Master both SQL and NoSQL databases to effectively manage and manipulate data in modern applications.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Syllabus
                </button>
              </div>

              {/* Right Column - Modules */}
              <div className="space-y-6">
                {databaseSyllabus.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      {module.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex} 
                          className="bg-yellow-400 px-4 py-2 rounded-md text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'nonTechnical' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Non-Technical Info */}
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Non-Technical Skills</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Enhance your career prospects with essential soft skills, aptitude training, and professional development modules.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Syllabus
                </button>
              </div>

              {/* Right Column - Modules */}
              <div className="space-y-8">
                {nonTechnicalSyllabus.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className="text-2xl font-bold mb-6 text-center bg-gray-100 py-2 rounded">
                      {section.title}
                    </h3>
                    <div className="space-y-6">
                      {section.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="bg-white rounded-lg shadow-lg p-8">
                          <h4 className="text-xl font-bold mb-4">
                            {module.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <span 
                                key={topicIndex} 
                                className="bg-yellow-400 px-4 py-2 rounded-md text-sm"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

       {/* Projects Section */}
       <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-green-400 text-white px-4 py-1 rounded-md text-sm font-medium">
              Rated 4.9 Stars ⭐⭐⭐⭐⭐
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Create Real-World Projects to Build a Robust Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get ready to create a strong portfolio of applications that can be deployed
              on the cloud, making you unique in the eyes of leading tech companies
              and helping you secure your desired job.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {fullStackProjects.map((project, index) => (
              <div 
                key={index}
                className={`text-white rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                  project.title === "TaskBuddy" ? "bg-[#c7f5d9]" :
                  project.title === "KodChat" ? "bg-[#c7f5d9]" :
                  project.title === "GameMaster" ? "bg-[#ffd9d9]" :
                  project.title === "mealMate" ? "bg-[#ffe6e6]" :
                  project.title === "SalesSavvy" ? "bg-[#e5e7eb]" :
                  project.title === "Workfolio" ? "bg-[#e5e7eb]" :
                  "bg-[#0f172a]"
                }`}
              >
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={200}
                  height={60}
                  className="mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Technologies Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-[#7fffd4] text-black px-4 py-1 rounded-md text-sm font-medium">
              Tools and Technologies
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Start Your New Career Stronger
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jumpstart Your IT Career with Advanced Tools and High-Demand Technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Equip Yourself with Advanced Tools and Technologies
              </h3>
              <p className="text-gray-600 mb-8">
                From development platforms to design software, each tool you engage with is selected to enhance your practical skills, ensuring you're well-equipped for real-world challenges
              </p>

              <div>
                <h4 className="text-xl font-semibold mb-4">Essential Tools for Modern Development</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "VS code and Eclipse",
                    "Maven",
                    "Log4j",
                    "GIT",
                    "NPM",
                    "Heidi SQL",
                    "Docker"
                  ].map((tool, index) => (
                    <span
                      key={index}
                      className="bg-[#ffed84] text-black px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Master the Cutting-Edge Technologies
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Java", progress: "100%" },
                  { name: "Python", progress: "100%" },
                  { name: "Frond End Technologies", progress: "100%" },
                  { name: "Database", progress: "100%" },
                  { name: "Dynamic Programming", progress: "100%" },
                  { name: "Data Structure and Algorithm", progress: "100%" }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.progress}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-[#2bb889] rounded-full"
                        style={{ width: skill.progress }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Roadmap Section */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-md text-sm font-medium">
              Roadmap to Your Dream IT Career
            </span>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Steps */}
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                {
                  title: "Learn",
                  description: "Start with Expert Training Dive into tech with videos and quizzes"
                },
                {
                  title: "Practice",
                  description: "Real Skills in Real-Time Hands-on coding in our cloud labs"
                },
                {
                  title: "Build",
                  description: "Craft Actual Projects Make apps that showcase your talent"
                },
                {
                  title: "Apply",
                  description: "Apply to placement drives and display your skills with a standout portfolio"
                },
                {
                  title: "Start Earning",
                  description: "Secure the job and start your dream job"
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  {/* Circle with number */}
                  <div className="w-14 h-14 bg-[#2bb889] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10 border-[6px] border-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                  <p className="text-gray-600 text-sm max-w-[250px] mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Fee Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-[#2bb889] text-white px-4 py-1 rounded-md text-sm font-medium">
              Join Us Today
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Program Fee
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're India's most cost-effective and advanced organization, offering seamless learning via our 
              AI-powered platform, along with endless placement opportunities until you secure a job
            </p>
          </div>

          {/* Fee Cards Container */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-1 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Enjoy unlimited learning and unlimited placement opportunities
                </h3>
                <p className="text-gray-600">
                  Access comprehensive Education and Career Growth, Learn and Earn, Fly high without limits
                </p>
              </div>
            </div>

            {/* Fee Cards */}
            <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
              {/* Offline Card */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium">
                  Offline
                </span>
                <h3 className="text-4xl font-bold my-6">₹31999</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-400">⚡</span>
                    AI-Driven Learning Platform
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-400">���</span>
                    Unlimited Placement
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-400">📚</span>
                    Affordable and Advanced Curriculum
                  </li>
                </ul>
                <button className="w-full bg-yellow-400 text-black py-3 rounded-md font-medium mt-8 hover:bg-yellow-500 transition-colors">
                  REGISTER TODAY
                </button>
              </div>

              {/* Online Card */}
              <div className="bg-[#fffbeb] rounded-lg p-8 shadow-lg">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium">
                  Online
                </span>
                <h3 className="text-4xl font-bold my-6">₹26999</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#2bb889]">📱</span>
                    Affordable and Advanced Curriculum
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#2bb889]">🎯</span>
                    Unlimited Placement Opportunities
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#2bb889]">⚡</span>
                    AI-Driven Learning Platform
                  </li>
                </ul>
                <button className="w-full bg-[#2bb889] text-white py-3 rounded-md font-medium mt-8 hover:bg-[#229971] transition-colors">
                  REGISTER TODAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#2bb889] font-medium">Certificate</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">
                FULL-STACK DEVELOPMENT CERTIFICATION
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your Path to Certification Begins Here
              </p>

              {/* Features */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#e6f7f2] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2bb889]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Globally Recognized Credential</h3>
                    <p className="text-gray-600">
                      Accredited by GOI, Nasscom, and ISO, ensuring worldwide recognition and prestige
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#e6f7f2] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2bb889]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Shareable Certificate</h3>
                    <p className="text-gray-600">
                      Easily share your success with a unique URL or QR code on LinkedIn, resumes, and websites
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#e6f7f2] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2bb889]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Verifiable Achievement</h3>
                    <p className="text-gray-600">
                      Comes with a code for authenticity confirmation, enhancing your credential&apos;s credibility
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Certificate Image */}
            <div className="relative h-[600px] w-full">
              <Image
                src="https://www.kodnest.com/wp-content/uploads/2024/03/Students-Certificate-2024-WITH-SAMPLE-1-1448x2048.png"
                alt="KodNest Full Stack Development Certificate"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Interactive Learning */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Interactive <span className="border-b-2 border-blue-500">Learning</span>
              </h3>
              <div className="mb-4">
                <span className="font-semibold">Live & Instant Support:</span>
                <p className="text-gray-600">
                  Real-time classes with direct interaction and swift query resolution for a smooth learning experience
                </p>
              </div>
            </div>

            {/* Expert Mentorship */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Expert <span className="border-b-2 border-[#2bb889]">Mentorship</span>
              </h3>
              <div className="mb-4">
                <span className="font-semibold">Expert Guidance:</span>
                <p className="text-gray-600">
                  Learn from industry experts and receive personalized mentoring to navigate your career path
                </p>
              </div>
            </div>

            {/* Comprehensive Support */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Comprehensive <span className="border-b-2 border-yellow-400">Support</span>
              </h3>
              <div className="mb-4">
                <span className="font-semibold">Individualized Help:</span>
                <p className="text-gray-600">
                  Continuous, customized support to tackle technical, course-related issues, and immediate concept clarifications
                </p>
              </div>
            </div>

            {/* Practical Learning */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Practical <span className="border-b-2 border-[#2bb889]">Learning</span>
              </h3>
              <div className="mb-4">
                <span className="font-semibold">Hands-On Projects & Quizzes:</span>
                <p className="text-gray-600">
                  Engage in real world projects and interactive quizzes to apply and test your knowledge
                </p>
              </div>
            </div>

            {/* Interview Prep Focus */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Interview <span className="border-b-2 border-blue-500">Prep Focus</span>
              </h3>
              <div className="mb-4">
                <span className="font-semibold">Placement Drive Readiness:</span>
                <p className="text-gray-600">
                  Comprehensive grooming for students to excel in every career opportunity they encounter
                </p>
              </div>
            </div>

            {/* Unlimited Placement */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Unlimited <span className="border-b-2 border-yellow-400">Placement</span>
              </h3>
              <div className="mb-4">
                <span className="font-semibold">Continuous Drives:</span>
                <p className="text-gray-600">
                  Access from Day 1 to non-stop placement opportunities until securing your dream job
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <button className="flex items-center justify-center gap-2 bg-[#e6f7f2] text-[#2bb889] px-6 py-3 rounded-lg hover:bg-[#d1f0e6] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Next Batch - 10th June 2024
            </button>
            
            <button className="flex items-center justify-center gap-2 bg-[#ffe6e6] text-red-500 px-6 py-3 rounded-lg hover:bg-[#ffd9d9] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Limited Seats - Reserve Now
            </button>
            
            <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Academic Counsellor
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <span className="bg-[#2bb889] text-white px-4 py-1 rounded-md text-sm font-medium">
            FAQs
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Discover answers to frequently asked questions, guiding you through our services, processes, and support for a seamless experience.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Left Navigation */}
            <div className="space-y-2">
              {Object.keys(faqData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category 
                      ? 'bg-[#2bb889] text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Right Content - FAQ Questions */}
            <div className="md:col-span-3 space-y-4">
              {faqData[activeCategory]?.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50"
                  >
                    <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        expandedQuestion === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedQuestion === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 