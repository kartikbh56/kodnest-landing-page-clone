import Image from 'next/image'

export default function TopRecruiters() {
  const logos = [
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
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-emerald-400 text-white px-4 py-2 rounded-md inline-block mb-6">
              KodNest's Commitment to Learners
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Education to Employment: Our Alumni Excel in the IT Industry
            </h2>
            <p className="text-gray-600 mb-8">
              At KodNest, Education & Skills directly leads to opportunity. Our graduates quickly land roles in leading IT firms, showing the world why they are champions.
            </p>
            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              Our Top Recruiters
              <span className="text-xl">→</span>
            </button>
          </div>

          <div className="relative">
            <Image 
              src="https://www.kodnest.com/wp-content/uploads/2024/02/kod-job.png"
              alt="Handshake illustration"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Company Logos Carousel */}
        <div className="mt-16 relative">
          <div className="absolute w-20 h-full left-0 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute w-20 h-full right-0 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="overflow-hidden relative">
            <div className="flex whitespace-nowrap logo-scroll">
              {[...logos, ...logos].map((logo, index) => (
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
  )
} 