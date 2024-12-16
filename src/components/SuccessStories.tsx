'use client'
import { useState } from 'react'

export default function SuccessStories() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState('')

  const videos = {
    center: 'https://www.youtube.com/embed/jwDPmIzhLPE',
    top1: 'https://www.youtube.com/embed/m8oduAUdeUY?si=xCZ0aYveyia4pGcf',
    top2: 'https://www.youtube.com/embed/A3uusrJwO_w?si=u_k-GISdBRXAzNQy',
    middle1: 'https://www.youtube.com/embed/RfS_4ygYbnQ?si=HK0fBnuq6UKaCrZi',
    middle2: 'https://www.youtube.com/embed/LQETjluWiws?si=sTv8JkIWOLPjqq_9',
    bottom: 'https://www.youtube.com/embed/fRh1xv6vFjE?si=igb8KwkBEjiv90_T'
  }

  const openModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl)
    setIsModalOpen(true)
  }

  const playButtonStyles = "w-14 h-14 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]"
  const playIconStyles = "text-[#ff6b6b] text-2xl" // coral color for play icons

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-emerald-400 text-white px-4 py-2 rounded-md inline-block mb-6">
          Our Stars
        </span>
        <h2 className="text-4xl font-bold mb-4">
          Real Stories, Incredible Journeys: Listen To Our Stars
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Discover the success stories and journeys of our top learners. Hear from those who have thrived with our platform and see how their dedication and our resources have paved their way to incredible achievements.
        </p>

        {/* Video Grid */}
        <div className="relative h-[500px]">
          {/* Center Play Button */}
          <button 
            onClick={() => openModal(videos.center)}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black rounded-full flex items-center justify-center z-10 hover:scale-110 transition-all duration-300"
          >
            <span className="text-emerald-400 text-4xl">▶</span>
          </button>

          {/* Floating Play Buttons */}
          <button 
            onClick={() => openModal(videos.top1)}
            className={`absolute left-[20%] top-[20%] ${playButtonStyles}`}
          >
            <span className={playIconStyles}>▶</span>
          </button>
          <button 
            onClick={() => openModal(videos.top2)}
            className={`absolute right-[20%] top-[20%] ${playButtonStyles}`}
          >
            <span className={playIconStyles}>▶</span>
          </button>
          <button 
            onClick={() => openModal(videos.middle1)}
            className={`absolute left-[10%] top-[50%] ${playButtonStyles}`}
          >
            <span className={playIconStyles}>▶</span>
          </button>
          <button 
            onClick={() => openModal(videos.middle2)}
            className={`absolute right-[10%] top-[50%] ${playButtonStyles}`}
          >
            <span className={playIconStyles}>▶</span>
          </button>
          <button 
            onClick={() => openModal(videos.bottom)}
            className={`absolute left-[30%] bottom-[20%] ${playButtonStyles}`}
          >
            <span className={playIconStyles}>▶</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={currentVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 