import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ken Tirimba Moronge — available for analytical roles, freelance web development, and remote opportunities.',
}

export default function ContactPage() {
  return <ContactClient />
}
