import { ImageResponse } from 'next/og'

export const alt = 'Meijie Wang — AI for Science, Computational Materials'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(circle at 30% 20%, #ffffff 0%, #f4f4f5 45%, #e4e4e7 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '999px',
              background: '#09090b',
            }}
          />
          <div
            style={{
              fontSize: '28px',
              color: '#52525b',
              letterSpacing: '0.04em',
            }}
          >
            migie.top
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: '108px',
              fontWeight: 700,
              color: '#09090b',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            Meijie Wang
          </div>
          <div
            style={{
              marginTop: '28px',
              fontSize: '40px',
              color: '#3f3f46',
              lineHeight: 1.3,
            }}
          >
            AI for Science · Computational Materials
          </div>
        </div>

        <div
          style={{
            fontSize: '28px',
            color: '#71717a',
          }}
        >
          Ph.D. in Condensed Matter Physics, Xiamen University · Deep Principle
        </div>
      </div>
    ),
    { ...size },
  )
}
