import React from 'react'
import TopSection from './components/TopSection/TopSection'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturedListingSection from './components/FeaturedListingSection/FeaturedListingSection'
import AboutUsSection from './components/AboutUsSection/AboutUsSection'
import TeamsSection from './components/TeamsSection/TeamsSection'
import AnnouncementSection from './components/AnnouncementSection/AnnouncementSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
        <TopSection />
        <HeroSection />
        <FeaturedListingSection />
        <AboutUsSection />
        <TeamsSection />
        <AnnouncementSection />
        <TestimonialsSection />
        <Footer />
    </div>
  )
}

export default HomePage