import { Suspense, lazy } from 'react'
import Hero from '@/components/sections/Hero'
import StatBar from '@/components/sections/StatBar'

// Lazy load below-fold sections
const WhatIDo = lazy(() => import('@/components/sections/WhatIDo'))
const FeaturedWork = lazy(() => import('@/components/sections/FeaturedWork'))
const SkillsSnapshot = lazy(() => import('@/components/sections/SkillsSnapshot'))
const Timeline = lazy(() => import('@/components/sections/Timeline'))
const CTABand = lazy(() => import('@/components/sections/CTABand'))

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-teal-400 border-t-transparent" />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBar />
      <Suspense fallback={<SectionLoader />}>
        <WhatIDo />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FeaturedWork />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SkillsSnapshot />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTABand />
      </Suspense>
    </>
  )
}
