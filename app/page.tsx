import DirectionNav from '@/components/sections/DirectionNav'
import Hero from '@/components/sections/Hero'
import FamilySection from '@/components/sections/FamilySection'
import BusinessSection from '@/components/sections/BusinessSection'
import CreatorsSection from '@/components/sections/CreatorsSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import PricingSection from '@/components/sections/PricingSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FAQSection from '@/components/sections/FAQSection'
import OrbitNav from '@/components/layout/OrbitNav'

export default function HomePage() {
  return (
    <>
      <main className="relative">
        <Hero />
        <DirectionNav />
        <FamilySection />
        <BusinessSection />
        <CreatorsSection />
        <WhyUsSection />
        <PricingSection />
        <PortfolioSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <OrbitNav />
    </>
  )
}
