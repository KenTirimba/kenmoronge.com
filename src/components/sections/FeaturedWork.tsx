'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProjectCard } from '@/components/work/ProjectCard'
import { featuredProjects } from '@/data/projects'

export default function FeaturedWork() {
  return (
    <section
      aria-labelledby="featured-work-heading"
      className="section-padding bg-white dark:bg-[#0a0f1e]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects that made an impact."
            subtitle="A cross-section of my analytics, process improvement, and web development work."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-600 transition-all hover:border-navy-600 hover:shadow-sm dark:border-slate-700 dark:text-teal-400 dark:hover:border-teal-400"
          >
            All projects
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
