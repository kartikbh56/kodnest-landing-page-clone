import Image from 'next/image'

export default function LearnerSupport() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          KodNest Learner Support
        </h2>
        <p className="text-gray-600 mb-8">
          Reach out to our experts anytime. We're here to assist you 24/7.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Talk to a Career Expert
        </button>
      </div>
    </section>
  )
} 