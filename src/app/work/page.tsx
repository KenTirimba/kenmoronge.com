import { Metadata } from 'next'
import { Suspense } from 'react'
import WorkClient from './WorkClient'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Case studies and projects spanning data analytics, business process analysis, and web development.',
}

export default function WorkPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-400 border-t-transparent" />
        </div>
      }
    >
      <WorkClient />
    </Suspense>
  )
}
