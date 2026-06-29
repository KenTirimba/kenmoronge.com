import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Ken Tirimba Moronge — Business Process Analyst and Web Developer based in Kenya.',
}

export default function AboutPage() {
  return <AboutClient />
}
