import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ken Tirimba Moronge — Data Analyst & Web Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #080f1e 0%, #1B3A6B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(45,212,191,0.15)',
            border: '1px solid rgba(45,212,191,0.4)',
            borderRadius: '999px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#2DD4BF',
            }}
          />
          <span
            style={{
              color: '#2DD4BF',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Open to Opportunities · Kenya & Remote
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#f1f5f9',
            lineHeight: 1.05,
            marginBottom: '16px',
          }}
        >
          Ken Tirimba Moronge
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 500,
            color: '#2DD4BF',
            marginBottom: '32px',
          }}
        >
          Data Analyst · Business Process Analyst · Web Developer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '20px',
            color: '#94a3b8',
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          Turning complex data into clear decisions — and building the digital
          products that bring them to life.
        </div>

        {/* Bottom stats */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '56px',
          }}
        >
          {[
            ['4+', 'Years Experience'],
            ['12+', 'Projects'],
            ['15+', 'Tools'],
          ].map(([val, label]) => (
            <div
              key={label}
              style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
              <span
                style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: '#2DD4BF',
                }}
              >
                {val}
              </span>
              <span style={{ fontSize: '14px', color: '#64748b' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '18px',
            color: '#475569',
            fontFamily: 'monospace',
          }}
        >
          kenmoronge.com
        </div>
      </div>
    ),
    { ...size }
  )
}
