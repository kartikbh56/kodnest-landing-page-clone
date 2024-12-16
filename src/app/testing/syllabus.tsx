'use client'
import { useState } from 'react'

interface Topic {
  title: string;
  subtopics: string[];
}

interface Module {
  title: string;
  topics: string[];
}

interface CourseSection {
  title: string;
  description?: string;
  modules: Module[];
}

const syllabusData: CourseSection[] = [
    {
        "title": "Manual Testing",
        "modules": [
          {
            "title": "Module 1: Introduction to Manual Testing and SDLC",
            "topics": [
              "Introduction to Software Testing",
              "Project vs Product",
              "Manual Testing vs Automation Testing",
              "SDLC (Software Development Life Cycle)",
              "SDLC Models",
              "Waterfall Model",
              "Spiral Model",
              "V-Model",
              "Prototype Model",
              "Agile Model (Scrum)",
              "How to Choose a Model for a Project"
            ]
          },
          {
            "title": "Module 2: Software Testing Methods and Levels",
            "topics": [
              "White Box Testing",
              "Black Box Testing",
              "Gray Box Testing",
              "Unit Testing",
              "Integration Testing",
              "System Testing",
              "User Acceptance Testing (UAT)"
            ]
          },
          {
            "title": "Module 3: Testing Techniques and Terminologies",
            "topics": [
              "End-to-End Testing",
              "Ad-hoc Testing",
              "Sanity/Smoke Testing",
              "Re-Testing",
              "Regression Testing",
              "Exploratory Testing",
              "Globalization Testing"
            ]
          },
          {
            "title": "Module 4: Practical Exposure and Test Case Design",
            "topics": [
              "Test Case Design",
              "Practical Hands-On Writing Test Cases for Web-Based Applications",
              "How to Use OpenAI, ChatGPT in Manual Software Testing",
              "Defect Life Cycle",
              "Defect Reporting",
              "Bug Tracking",
              "Severity, Priority"
            ]
          },
          {
            "title": "Module 5: Test Management, Agile Methodologies, and STLC",
            "topics": [
              "Basics of JIRA",
              "Purpose of JIRA Tool",
              "Project Management in JIRA",
              "Agile Methodologies & Agile Testing",
              "Complete Knowledge of QC and QA Process",
              "What is STLC?",
              "Stages of STLC"
            ]
          },
          {
            "title": "Module 6: Practical Implementation and Case Studies",
            "topics": [
              "Practical Hands-On Testing",
              "Implementing Testing Strategies",
              "Case Studies and Real-World Applications"
            ]
          }
        ]
      },
      {
        "title": "Automation",
        "modules": [
          {
            "title": "Module 1: Introduction to Testing and Selenium",
            "topics": [
              "Importance of Testing in Software Development",
              "Comparison: Manual vs. Automation",
              "Introduction to Automation testing",
              "Selenium overview",
              "Selenium IDE"
            ]
          },
          {
            "title": "Module 2: Deep Dive into Selenium WebDriver",
            "topics": [
              "Introduction to WebDriver",
              "Basic Selenium Scripts",
              "Web Elements",
              "Locators and Their Use",
              "Browser actions",
              "Performing Actions: Click, Type, Select",
              "Handling Form Elements",
              "Taking Screenshots",
              "Waits in Selenium"
            ]
          },
          {
            "title": "Module 3: Frameworks and Integration with Other Tools",
            "topics": [
              "JUnit",
              "TestNG",
              "Database Testing with Selenium",
              "AutoIt for Handling Windows-based Pop-ups"
            ]
          }
        ]
      },
      {
        "title": "Java",
        "modules": [
          {
            "title": "Module 1: Laying the Groundwork",
            "topics": [
              "Introduction to Java",
              "Programming in Java",
              "Data Types",
              "Operators",
              "Methods"
            ]
          },
          {
            "title": "Module 2: Diving into OOPs",
            "topics": [
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
            "title": "Module 3: Mastering the Logic",
            "topics": [
              "Conditional Control Constructs",
              "Looping Control Constructs",
              "Jump Statements",
              "Data Manipulation"
            ]
          },
          {
            "title": "Module 4: Data Structures & Algorithms",
            "topics": [
              "Arrays",
              "Strings",
              "Collections Framework",
              "Advanced Programming",
              "Algorithms"
            ]
          },
          {
            "title": "Module 5: Exception Handling and Multi-threading",
            "topics": [
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
            "title": "Module 6: Java Frameworks & More",
            "topics": [
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
        ]
      },
      {
        "title": "Front-End Technologies",
        "modules": [
          {
            "title": "Module 1: HTML: Structuring a Web Page and Basics of Front-End Development",
            "topics": [
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
            "title": "Module 2: CSS - Style a Web Page",
            "topics": [
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
            "title": "Module 3: JavaScript - Programming the Web",
            "topics": [
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
            "title": "Module 4: React JS - Building Interactive UIs",
            "topics": [
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
        ]
      },
      {
        "title": "Non-Technical Skills",
        "modules": [
          {
            "title": "Module 1: Quantitative and Reasoning Aptitude",
            "topics": [
              "Number Systems",
              "Divisibility Rules",
              "HCF and LCM",
              "Unit Digit Concept",
              "Ratio and Proportion",
              "Percentage",
              "Profit and Loss",
              "Simple and Compound Interest",
              "Time and Work",
              "Time, Speed, and Distance",
              "Probability",
              "Permutations and Combinations"
            ]
          },
          {
            "title": "Module 2: Professional Skills",
            "topics": [
              "Resume Building",
              "Self-Introduction",
              "Cracking Group Discussions",
              "Face to Face Interviews",
              "Email Writing",
              "Presentation Skills",
              "Corporate Etiquette"
            ]
          }
        ]
      },
      {
        "title": "Database",
        "modules": [
          {
            "title": "Module 1: Introduction to Databases",
            "topics": [
              "What is Database",
              "Types of Databases",
              "RDBMS Concepts",
              "Database Architecture",
              "SQL vs NoSQL",
              "Database Design Principles",
              "ER Diagrams"
            ]
          },
          {
            "title": "Module 2: SQL Fundamentals",
            "topics": [
              "SQL Basics",
              "DDL Commands",
              "DML Commands",
              "DCL Commands",
              "TCL Commands",
              "Constraints in SQL",
              "Primary and Foreign Keys",
              "Normalization"
            ]
          },
          {
            "title": "Module 3: Advanced SQL",
            "topics": [
              "Joins in SQL",
              "Subqueries",
              "Views",
              "Stored Procedures",
              "Triggers",
              "Indexes",
              "Transaction Management",
              "Query Optimization"
            ]
          },
          {
            "title": "Module 4: MySQL Implementation",
            "topics": [
              "MySQL Installation",
              "MySQL Workbench",
              "Database Creation",
              "Table Management",
              "Data Import/Export",
              "Backup and Recovery",
              "User Management",
              "Security Implementation"
            ]
          },
          {
            "title": "Module 5: Database Integration",
            "topics": [
              "JDBC Connection",
              "Connection Pooling",
              "Database Operations with Java",
              "Error Handling",
              "Batch Processing",
              "Transaction Handling",
              "Best Practices"
            ]
          }
        ]
      }       
      
];

const sidebarItems = [
  {
    title: "Manual Testing",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Automation",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Java",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Database",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: "Front-End Technologies",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Non-Technical Skills",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default function SyllabusSection() {
  const [activeSection, setActiveSection] = useState("Manual Testing");
  const activeContent = syllabusData.find((section) => section.title === activeSection);

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-green-400 text-white px-4 py-1 rounded-md text-sm font-medium">
            My CareerPath - 2
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Become an Automation Tester
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At KodNest, our Manual and Automation Testing course equips you with industry-demanded skills
            through intensive training, practical exercises, and cutting-edge tools. Develop a robust portfolio
            of test cases and automation scripts, hone your interviewing techniques, and launch your career in
            testing with confidence
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="col-span-3">
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setActiveSection(item.title)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                    activeSection === item.title
                      ? 'bg-[#0f172a] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className={activeSection === item.title ? 'text-yellow-400' : 'text-gray-400'}>
                    {item.icon}
                  </span>
                  {item.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="col-span-9 space-y-8">
            {activeContent?.modules.map((module) => (
              <div key={module.title} className="bg-white rounded-lg shadow-sm p-6 border">
                <h3 className="text-xl font-semibold mb-4">
                  {module.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-md text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1">
                    Check Out the Detailed Syllabus
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 