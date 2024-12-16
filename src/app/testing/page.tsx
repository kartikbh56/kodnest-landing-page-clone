'use client'
import Image from 'next/image'
import Link from 'next/link'
import SyllabusSection from './syllabus'
import { useState } from 'react'

const projects = [
  {
    title: "ShopSecure",
    description: "Engage in ShopSecure, a project focused on rigorous testing of e-commerce web applications. Ensure top-tier functionality, usability, security, and performance for online stores.",
    technologies: ["Java", "Console Interface", "OOPs"],
    logo: "https://www.kodnest.com/wp-content/uploads/2024/05/Screenshot-2024-05-24-at-9.45.46%E2%80%AFPM-768x249.png"
  },
  {
    title: "BugBuster",
    description: "Discover BugBuster, a project that automates application testing. Enhance efficiency and accuracy in bug detection and ensure high software quality with automated scripts and testing frameworks",
    technologies: ["HTML", "CSS", "JS"],
    logo: "https://www.kodnest.com/wp-content/uploads/2024/05/Screenshot_2024-05-24_at_9.55.35_PM-removebg-preview-768x187.png"
  },
  {
    title: "HRM Task Automator",
    description: "Master HR automation with HRM Tech Pro, utilizing Selenium for notifications, alerts, web tables, and advanced JavaScript operations to streamline HR tasks efficiently",
    technologies: ["Python", "Django", "React", "Mongo"],
    logo: "https://www.kodnest.com/wp-content/uploads/2024/05/learn-testing-768x261.png"
  },
  {
    title: "OpenCart",
    description: "Dive deep into advanced Selenium with OpenCart Automation. Automate product search, cart management, and checkout for a smooth online shopping experience",
    technologies: ["Python", "Django", "SQL", "React"],
    logo: "https://www.kodnest.com/wp-content/uploads/2024/05/learn-automation-768x244.png"
  }
];

export default function TestingPage() {
  const features = [
    {
      title: "Comprehensive Testing Course",
      description: "Learn both manual and automation testing with hands-on practice"
    },
    {
      title: "Industry-Ready Curriculum",
      description: "Master the latest testing tools and frameworks used in top companies"
    },
    {
      title: "Live Project Experience",
      description: "Work on real-world testing projects to build your portfolio"
    },
    {
      title: "Placement Support",
      description: "Get unlimited placement assistance until you land your dream job"
    }
  ];

  const technologies = [
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      title: "Manual Testing"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "Automation Testing"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
        </svg>
      ),
      title: "Front End Technologies"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
        </svg>
      ),
      title: "Selenium"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
        </svg>
      ),
      title: "Java"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      title: "SoftSkills and Aptitude"
    }
];

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
    }
  ],
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
    }
  ],
  "Support": [
    {
      question: "What kind of support is available during the course?",
      answer: "We provide comprehensive support including live mentoring sessions, doubt clearing, and technical assistance throughout your learning journey."
    },
    {
      question: "How can I get help if I'm stuck on a concept?",
      answer: "You can reach out to our mentors through live sessions, discussion forums, or direct messaging. We ensure quick response times to keep your learning smooth."
    }
  ]
};

// Add the toggle function
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-green-400 text-white px-4 py-1 rounded-md text-sm font-medium">
                Rated 4.9 Stars
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Advancing to Expert Automation Engineer
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">
                Manual & Automation - Premium Testing Module
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://www.kodnest.com/wp-content/uploads/2024/05/web-e1716577829101-1907x2048.png"
                alt="Testing Module"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
       {/* Technologies Section */}
       <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{tech.icon}</span>
                  <h3 className="text-lg font-medium text-gray-800">{tech.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Testimonials Section */}
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
      <SyllabusSection />

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
            <div className="mt-6">
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                  project.title === "ShopSecure" ? "bg-black text-white" :
                  project.title === "BugBuster" ? "bg-black text-white" :
                  project.title === "HRM Task Automator" ? "bg-[#ffe6e6] text-gray-800" :
                  project.title === "OpenCart" ? "bg-[#ffe6e6] text-gray-800" :
                  "bg-[#0f172a] text-white"
                }`}
              >
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={200}
                  height={60}
                  className="mb-6"
                />
                <h3 className={`text-2xl font-bold mb-4 ${
                  project.title === "HRM Task Automator" || project.title === "OpenCart" 
                    ? "text-gray-800" 
                    : "text-white"
                }`}>{project.title}</h3>
                <p className={`mb-6 ${
                  project.title === "HRM Task Automator" || project.title === "OpenCart" 
                    ? "text-gray-600" 
                    : "text-gray-300"
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded text-sm font-medium ${
                        project.title === "HRM Task Automator" || project.title === "OpenCart"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
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

      {/* Tools & Technologies Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-[#2bb889] text-white px-4 py-1 rounded-md text-sm font-medium">
              Tools & Technologies
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-4">
              Master the Most In-Demand Testing Tools
            </h2>
            <p className="text-xl text-gray-600">
              Learn and gain hands-on experience with industry-standard testing tools and frameworks
            </p>
          </div>

          {/* Updated grid layout */}
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center flex flex-col items-center min-w-[120px] md:min-w-[140px]">
                <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-sm">{tech.title}</h3>
              </div>
            ))}
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
      <section className="px-6 md:px-12 py-16 bg-white">
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
                    <span className="text-yellow-400">🎯</span>
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
                SOFTWARE TESTING CERTIFICATION
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

                {/* Add other certificate features */}
              </div>
            </div>

            {/* Right Content - Certificate Image */}
            <div className="relative h-[600px] w-full">
              <Image
                src="https://www.kodnest.com/wp-content/uploads/2024/03/Students-Certificate-2024-WITH-SAMPLE-1-1448x2048.png"
                alt="KodNest Testing Certification"
                fill
                className="object-contain"
                priority
              />
            </div>
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