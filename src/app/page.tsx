import Hero from '../components/Hero'
import CareerPaths from '../components/CareerPaths'
import LearningEra from '../components/LearningEra'
import LearningMethod from '../components/LearningMethod'
import SuccessStories from '../components/SuccessStories'
import TopRecruiters from '../components/TopRecruiters'
import LearnerSupport from '../components/LearnerSupport'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <CareerPaths />
        <LearningEra />
        <LearningMethod />
        <SuccessStories />
        <TopRecruiters />
        <LearnerSupport />
      </main>
      {/* <Footer /> */}
    </>
  )
}
