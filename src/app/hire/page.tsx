'use client'
import Image from 'next/image'

export default function HirePage() {
  return (
    <main className="min-h-screen pt-10">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 bg-[#f0fdf9]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#2bb889] text-white px-4 py-1 rounded-md text-sm font-medium mb-6">
            Hire From Us
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hire Top Entry-Level<br />Tech Talent
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our comprehensive hiring solution with a high conversion rate, offering 
            efficient recruitment services—all at no cost to you
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-300">
            <span className="material-icons">calendar_today</span>
            Let's Talk!
          </button>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="px-6 md:px-12 py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We take pride in our
                alumni working with Industry Leaders
                {/* <div className="relative inline-block">
                  <span className="relative z-10"> Industry Leaders</span>
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-[#2bb889] z-0"></span>
                </div> */}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With us, your talent Hunt made easy with Industry-Ready
                Professionals- No Hassle, Just Results.
              </p>
            </div>
          </div>

          {/* Logo Container */}
          <div className="relative">
            {/* First Row */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 items-center mb-8">
              {[
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/Paypal-1.png",
                  alt: "PayPal",
                  width: 150
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/This.png",
                  alt: "THIS",
                  width: 120
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/razorpay.png",
                  alt: "Razorpay",
                  width: 140
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/Prodapt.png",
                  alt: "Prodapt",
                  width: 160
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/MindTree.png",
                  alt: "Mindtree",
                  width: 140
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/Sociate-Generale.png",
                  alt: "Societe Generale",
                  width: 160
                }
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center p-4 h-24">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={50}
                    className="object-contain max-h-12"
                  />
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 items-center">
              {[
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/Intuit_Logo.svg-1024x308.png",
                  alt: "Intuit",
                  width: 140
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/Groww_app_logo-e1715198620565.png",
                  alt: "Groww",
                  width: 120
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/hashedin-768x248.jpeg",
                  alt: "Hashedin",
                  width: 150
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/Bosch_logo-768x181.png",
                  alt: "Bosch",
                  width: 140
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/Swiggy_logo-1024x306.png",
                  alt: "Swiggy",
                  width: 130
                },
                {
                  src: "https://www.kodnest.com/wp-content/uploads/2024/05/urbanpro-logo-color-768x165.png",
                  alt: "UrbanPro",
                  width: 150
                }
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center p-4 h-24">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={50}
                    className="object-contain max-h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
           
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-10">
              Why hire with KodNest?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're transforming global hiring practices. We've successfully assisted a thousand companies in quickly recruiting developers and testers.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* No Hassle Card */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                No Hassle, Just Results
              </h3>
              <p className="text-lg text-gray-600">
                Recruit top developers & testers in the industry and Pay Nothing. Our expert mentors and rigorous projects elevate the hiring standard.
              </p>
            </div>

            {/* Exceptional Learners Card */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Exceptional Learners
              </h3>
              <p className="text-lg text-gray-600">
                Our students excel through industry-specific training, including best industry practices, this sets them apart from the generic Grads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Revolutionizing Card */}
            <div className="bg-[#ffd9d9] rounded-xl p-8 relative overflow-hidden">
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium mb-6">
                BENEFITS@KODNEST
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
                Revolutionizing How the Tech Industry Hires
              </h3>
              <button className="flex items-center text-black font-medium hover:opacity-80 transition-opacity">
                Check it out
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Why Our Learners Card */}
            <div className="bg-[#bfe6ed] rounded-xl p-8 relative overflow-hidden">
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium mb-6">
                Best Talents
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 max-w-md">
                Why Our Learners Stand Out from the Rest?
              </h3>
              <button className="flex items-center text-black font-medium hover:opacity-80 transition-opacity">
                Check it out
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9d9] flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pan-India candidates</h3>
                  <p className="text-gray-600">Broad geographic coverage ensures a rich mix of cultural and intellectual diversity.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9d9] flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">No charges for our service</h3>
                  <p className="text-gray-600">Utilize our recruitment services completely free of charge—no fees for engaging our expert hiring solutions</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9d9] flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hassle-free hiring</h3>
                  <p className="text-gray-600">Efficient recruitment from screening to offer, streamlining every step for optimal hiring efficiency</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9d9] flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Replace campus recruitment visits</h3>
                  <p className="text-gray-600">Adopt a more precise and efficient recruitment strategy, enhancing target and effectiveness in hiring</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#bfe6ed] flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">6 months of immersive training</h3>
                  <p className="text-gray-600">Our learners undergo half a year of intensive, immersive training to solve real-world challenges.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#bfe6ed] flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Project-based learning</h3>
                  <p className="text-gray-600">Hands-on projects ensure practical experience and problem-solving skills</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#bfe6ed] flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">800 hrs of learning & assignment</h3>
                  <p className="text-gray-600">Comprehensive engagement with course materials to build depth in tech knowledge.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#bfe6ed] flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Industry-vetted course content</h3>
                  <p className="text-gray-600">Curriculum designed and updated in partnership with tech industry leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skilled Talent Section */}
      <section className="px-6 md:px-12 py-16 bg-[#fff3c7]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <span className="inline-block bg-[#2bb889] text-white px-4 py-1 rounded-md text-sm font-medium mb-6">
            Technical Talent
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skilled Talent Available for<br />
            Immediate Hiring
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Access Top Talent from India's Premier Tech Education Platform for
            Diverse Technical Roles
          </p>

          {/* Tech Stack Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Full Stack Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Full Stack developers</h3>
              <p className="text-gray-600 mb-6">
                Skilled in Java/Python, Front End Technologies with React, and Databases using MySQL and MongoDB
              </p>
              <div className="flex gap-4">
                <Image 
                  src="https://www.kodnest.com/wp-content/uploads/2024/05/Screenshot-2024-05-10-at-2.23.01%E2%80%AFAM-768x304.png" 
                  alt="Tech Stack" 
                  width={200} 
                  height={80} 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Backend Developers</h3>
              <p className="text-gray-600 mb-6">
                Expertise in Server-Side Programming, Database Management, and API Integration
              </p>
              <div className="flex gap-4">
                <Image 
                  src="https://www.kodnest.com/wp-content/uploads/2024/05/Screenshot-2024-05-10-at-2.23.01%E2%80%AFAM-768x304.png" 
                  alt="Backend Tech Stack" 
                  width={200} 
                  height={80} 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Frontend Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Frontend Developers</h3>
              <p className="text-gray-600 mb-6">
                Proficient in HTML, CSS, JavaScript, and React for Cutting-Edge Front End Development
              </p>
              <div className="flex gap-4">
                <Image 
                  src="https://www.kodnest.com/wp-content/uploads/2024/05/Screenshot-2024-05-10-at-2.33.32%E2%80%AFAM.png" 
                  alt="Frontend Tech Stack" 
                  width={200} 
                  height={80} 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-md text-sm font-medium mb-6">
            Effortless Hiring
          </span>

          {/* Heading */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
            <Image 
              src="https://www.kodnest.com/wp-content/uploads/2024/05/ht-image-9.png"
              alt="Phone" 
              width={48} 
              height={48}
              className="inline-block object-contain"
            />
            <h2 className="text-4xl md:text-5xl font-bold">our team!</h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Skip contacting multiple agencies to find the right talent. Our platform 
            offers a wide range of tech experts, allowing you to hire the perfect 
            candidate instantly, all at no cost to you
          </p>

          {/* CTA Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in touch
          </button>
        </div>
      </section>
    </main>
  )
} 