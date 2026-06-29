import Link from 'next/link'
import { BarChart3, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  {
    href: 'https://linkedin.com/in/ken-moronge',
    label: 'LinkedIn',
    icon: FaLinkedin,
    hoverBg: 'hover:bg-[#0077B5]',
    hoverText: 'hover:text-white',
  },
  {
    href: 'https://github.com/KenTirimba',
    label: 'GitHub',
    icon: FaGithub,
    hoverBg: 'hover:bg-[#333]',
    hoverText: 'hover:text-white',
  },
  {
    href: 'https://x.com/M_Tirimba',
    label: 'X',
    icon: FaXTwitter,
    hoverBg: 'hover:bg-black',
    hoverText: 'hover:text-white',
  },
  {
    href: 'https://www.facebook.com/clarrykens.ken',
    label: 'Facebook',
    icon: FaFacebook,
    hoverBg: 'hover:bg-[#1877F2]',
    hoverText: 'hover:text-white',
  },
  {
    href: 'https://wa.me/254707792059',
    label: 'WhatsApp',
    icon: FaWhatsapp,
    hoverBg: 'hover:bg-[#25D366]',
    hoverText: 'hover:text-white',
  },
]

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/skills', label: 'Skills' },
  { href: '/dashboards', label: 'Dashboards' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-navy-900"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group flex w-fit items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600 text-white transition-colors group-hover:bg-teal-400">
                <BarChart3 size={16} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-navy-600 dark:text-slate-100">
                Ken<span className="text-teal-400">.</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Turning complex data into clear decisions — and building the
              digital products that bring them to life.
            </p>

            <a
              href="mailto:kenmoronge@gmail.com"
              className="flex w-fit items-center gap-2 text-sm text-slate-500 transition-colors hover:text-navy-600 dark:text-slate-400 dark:hover:text-teal-400"
            >
              <Mail size={14} />
              kenmoronge@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 transition-colors hover:text-navy-600 dark:text-slate-300 dark:hover:text-teal-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + CTA */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Connect
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon, hoverBg, hoverText }) => (
                
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-200 dark:bg-slate-800 dark:text-slate-400 ${hoverBg} ${hoverText} dark:${hoverBg} dark:${hoverText}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-navy-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-navy-800 hover:shadow-md dark:bg-teal-400 dark:text-navy-900 dark:hover:bg-teal-300"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-400 dark:border-slate-800 dark:text-slate-500 sm:flex-row">
          <p>© {year} Ken Tirimba Moronge. All rights reserved.</p>
          <p className="font-mono text-xs">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}