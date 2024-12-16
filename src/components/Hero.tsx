import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';

export default function Hero() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              From <span className="text-black">Learning to Earning</span>: Transform into a Skilled Developer
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Enroll in our Full Stack Development or Testing course to secure your dream job in tech.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://www.kodnest.com/wp-content/uploads/2024/09/Student-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-yellow-400 rounded-md font-medium hover:bg-yellow-500 transition-colors inline-flex items-center gap-2">
                  <DownloadIcon />
                  Download Brochure
                </button>
              </a>
              <button className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                <PersonIcon />
                Contact us
              </button>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src="https://www.kodnest.com/wp-content/uploads/2024/05/hands-2.png"
              alt="Developer collaboration"
              width={600}
              height={600}
              className="w-full h-auto rotate-slow"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 