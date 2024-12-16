import Image from 'next/image'

export default function LearningMethod() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          The Best Way To Learn Is By Doing
        </h2>
        
        <div className="relative max-w-[800px] mx-auto">
          {/* Tablet Frame */}
          <div className="bg-black rounded-[2.5rem] p-6 shadow-2xl">
            <div className="bg-white rounded-[2rem] aspect-[4/3] flex items-center justify-center p-4 border-[14px] border-black">
              <div>
                <Image 
                  src="https://www.kodnest.com/wp-content/uploads/2024/05/kodapp-1.webp"
                  alt="Developer waving"
                  width={800}
                  height={600}
                  className="mx-auto w-auto h-[450px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 