import Link from 'next/link'
import { ArrowLeft, BarChart3 } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center dark:bg-[#080f1e]">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-600 text-white">
        <BarChart3 size={28} />
      </span>
      <p className="font-mono text-sm font-bold uppercase tracking-widest text-teal-500 dark:text-teal-400">
        404
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold text-navy-600 dark:text-slate-50">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-slate-500 dark:text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-md dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300"
      >
        <ArrowLeft size={15} />
        Back to home
      </Link>
    </div>
  )
}
