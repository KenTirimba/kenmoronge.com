import { Metadata } from 'next'
import SkillsClient from './SkillsClient'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Technical skills, tools, and methodologies — from Python and SQL to Lean Six Sigma and Next.js.',
}

export default function SkillsPage() {
  return <SkillsClient />
}
