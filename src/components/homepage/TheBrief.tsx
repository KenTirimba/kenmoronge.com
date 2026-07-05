'use client'

import { FloatingStatusBar } from './FloatingStatusBar'
import { ScrollProgress } from './ScrollProgress'
import { BriefHeader } from './BriefHeader'
import { BriefBackground } from './BriefBackground'
import { BriefFindings } from './BriefFindings'
import { BriefCapabilities } from './BriefCapabilities'
import { BriefEvidence } from './BriefEvidence'
import { BriefRecommendation } from './BriefRecommendation'

export default function TheBrief() {
  return (
    <div className="bg-[#040810]">
      <ScrollProgress />
      <FloatingStatusBar />

      {/* All sections share the dark terminal aesthetic */}
      <BriefHeader />

      {/* Divider */}
      <div
        aria-hidden="true"
        className="mx-6 border-t border-dashed border-slate-800 md:mx-16 lg:mx-24"
      />

      <BriefBackground />

      <div
        aria-hidden="true"
        className="mx-6 border-t border-dashed border-slate-800 md:mx-16 lg:mx-24"
      />

      <BriefFindings />

      <div
        aria-hidden="true"
        className="mx-6 border-t border-dashed border-slate-800 md:mx-16 lg:mx-24"
      />

      <BriefCapabilities />

      <div
        aria-hidden="true"
        className="mx-6 border-t border-dashed border-slate-800 md:mx-16 lg:mx-24"
      />

      <BriefEvidence />

      <div
        aria-hidden="true"
        className="mx-6 border-t border-dashed border-slate-800 md:mx-16 lg:mx-24"
      />

      <BriefRecommendation />
    </div>
  )
}
