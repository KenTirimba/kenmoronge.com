export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ken Tirimba Moronge',
    url: 'https://kenmoronge.com',
    email: 'kenmoronge@gmail.com',
    jobTitle: 'Business Process Analyst & Web Developer',
    description:
      'Business Process Analyst and Web Developer based in Kenya with 4+ years of experience in data analytics, process improvement, and web development.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    sameAs: [
      'https://linkedin.com/in/ken-moronge',
      'https://github.com/KenTirimba',
      'https://x.com/M_Tirimba',
    ],
    knowsAbout: [
      'Data Analysis',
      'Business Process Analysis',
      'Business Intelligence',
      'SQL',
      'Python',
      'Power BI',
      'Tableau',
      'Next.js',
      'React',
      'Lean Six Sigma',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'The Technical University of Kenya',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ken Tirimba Moronge',
    url: 'https://kenmoronge.com',
    description:
      'Portfolio of Ken Tirimba Moronge — Business Process Analyst and Web Developer based in Kenya.',
    author: {
      '@type': 'Person',
      name: 'Ken Tirimba Moronge',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://kenmoronge.com/work?track={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
