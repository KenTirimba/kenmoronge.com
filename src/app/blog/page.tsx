import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, PenLine, Rss } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on data analysis, business process improvement, and web development — coming soon.',
}

const plannedTopics = [
  'How I mapped and improved FedEx\'s offshore financial process',
  'Lean Six Sigma in practice: what the White Belt actually teaches you',
  'Building a marketplace from scratch: lessons from VextUp',
  'SQL patterns every business analyst should know',
  'Why every analyst should learn to build dashboards in code',
  'Process mapping 101: AS-IS vs TO-BE analysis',
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080f1e]">
      {/* Hero */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-32 md:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400">
            Writing
          </p>
          <h1 className="font-display text-4xl font-bold text-navy-600 dark:text-slate-50 md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Practical writing on data analysis, business process improvement,
            and web development. Articles are in progress — check back soon.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Coming soon card */}
        <div className="mb-16 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900/40">
          <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-600/10 text-navy-600 dark:bg-teal-400/10 dark:text-teal-400">
            <PenLine size={26} />
          </span>
          <h2 className="font-display text-2xl font-bold text-navy-600 dark:text-slate-100">
            Articles coming soon
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            I&apos;m documenting my experience across data analysis, process
            improvement, and web development. The first articles will be
            published here — subscribe to be notified.
          </p>

          {/* Notify CTA */}
          <a
            href="mailto:kenmoronge@gmail.com?subject=Blog%20Notifications&body=Hi%20Ken%2C%20please%20notify%20me%20when%20your%20blog%20goes%20live."
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-md dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300"
          >
            <Rss size={15} />
            Notify me when live
          </a>
        </div>

        {/* Planned topics */}
        <div>
          <h2 className="mb-6 font-display text-xl font-bold text-navy-600 dark:text-slate-100">
            Planned topics
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {plannedTopics.map((topic, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400/20 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                  <ArrowRight size={11} />
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300">{topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-navy-600 transition-all hover:border-navy-600 hover:shadow-sm dark:border-slate-700 dark:text-slate-100 dark:hover:border-teal-400"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
