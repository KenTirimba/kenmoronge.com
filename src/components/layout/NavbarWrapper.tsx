'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()
  // Homepage uses FloatingStatusBar instead — no Navbar at all
  if (pathname === '/') return null
  return <Navbar />
}
