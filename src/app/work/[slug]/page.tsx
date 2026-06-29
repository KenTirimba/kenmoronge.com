import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import CaseStudyClient from './CaseStudyClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()
  return <CaseStudyClient project={project} />
}
