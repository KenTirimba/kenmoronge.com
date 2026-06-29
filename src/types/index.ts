export type ProjectTrack = 'analytics' | 'webdev'

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  track: ProjectTrack
  tags: string[]
  description: string
  problem: string
  approach: string
  outcome: string
  metrics?: { label: string; value: string }[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  category: 'data' | 'dev' | 'methodology' | 'soft'
  proficiency: number
  icon?: string
}

export interface TimelineItem {
  year: string
  role: string
  company: string
  location: string
  description: string
  type: 'work' | 'education' | 'certification'
}

export interface Stat {
  label: string
  value: number
  suffix: string
  prefix?: string
}
