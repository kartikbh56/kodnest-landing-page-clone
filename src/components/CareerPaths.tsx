import Image from 'next/image'
import ExploreIcon from '@mui/icons-material/Explore';

const CareerPaths = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <button className="bg-emerald-400 text-white px-4 py-2 rounded-md mb-6">
            Get Started
          </button>
          <h2 className="text-4xl font-bold mb-16">
            Two Career Paths, One Goal: Your Success
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Development Path Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg">
                <Image 
                  src="https://www.kodnest.com/wp-content/uploads/2024/02/1.1.png" 
                  alt="Development Icon" 
                  width={100} 
                  height={100}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Development Path: Java and Python Full Stack Course
            </h3>
            <p className="text-gray-600 mb-8">
              Effective programmers excel by managing complex details that others might miss
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors inline-flex items-center gap-2">
              <ExploreIcon />
              Explore the Course
            </button>
          </div>

          {/* Testing Path Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg">
                <Image 
                  src="https://www.kodnest.com/wp-content/uploads/2024/02/1.3.png" 
                  alt="Testing Icon" 
                  width={80} 
                  height={80}
                  className="w-20 h-20"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Testing Path: Comprehensive Testing Premium Course
            </h3>
            <p className="text-gray-600 mb-8">
              Never Let the Same Bug Bite You Twice - Test Smarter, Not Harder
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors inline-flex items-center gap-2">
              <ExploreIcon />
              Explore the Course
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerPaths