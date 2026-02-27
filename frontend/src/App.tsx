import { useState } from 'react';
import { X, Info } from 'lucide-react';

const GALLERY_URL = 'https://t3knologic.github.io/revelation-walls-gallery/';
const APP_ID = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'revelation-walls-gallery';

export default function App() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      {/* ── Full-screen iframe ── */}
      <iframe
        src={GALLERY_URL}
        title="Revelation Walls Gallery"
        allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100dvh',
          border: 'none',
          display: 'block',
          zIndex: 0,
        }}
      />

      {/* ── Branded bar — fixed overlay, does NOT reduce iframe height ── */}
      <header
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 80%, transparent 100%)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        {/* Banner image */}
        <div className="flex items-center justify-between px-3 pt-2 pb-1 gap-2">
          <img
            src="/assets/generated/revelation-walls-banner.dim_1200x120.png"
            alt="Revelation Walls – Murals & NFTs at the Dfinity Foundation"
            style={{ height: 36, width: 'auto', maxWidth: 'calc(100vw - 56px)', objectFit: 'contain', objectPosition: 'left center' }}
          />
          <button
            onClick={() => setShowCredits(true)}
            aria-label="Show credits"
            style={{
              flexShrink: 0,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d4a843',
              cursor: 'pointer',
            }}
          >
            <Info size={18} />
          </button>
        </div>
      </header>

      {/* ── Credits panel ── */}
      {showCredits && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 20,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'flex-end',
          }}
          onClick={() => setShowCredits(false)}
        >
          <div
            style={{
              width: '100%',
              background: 'linear-gradient(to bottom, #1a1200, #0d0d0d)',
              borderTop: '1px solid rgba(212,168,67,0.4)',
              borderRadius: '16px 16px 0 0',
              padding: '20px 20px calc(20px + env(safe-area-inset-bottom, 0px))',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
              <button
                onClick={() => setShowCredits(false)}
                aria-label="Close credits"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d4a843',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            <img
              src="/assets/generated/revelation-walls-banner.dim_1200x120.png"
              alt="Revelation Walls"
              style={{ height: 40, width: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'left center', marginBottom: 16 }}
            />

            <div style={{ color: '#d4a843', fontSize: 13, lineHeight: 1.7 }}>
              <p style={{ margin: '0 0 6px' }}>
                <span style={{ color: '#888', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Murals &amp; NFTs at</span><br />
                <strong style={{ color: '#fff', fontSize: 15 }}>The Dfinity Foundation</strong>
              </p>
              <p style={{ margin: '0 0 6px' }}>
                <span style={{ color: '#888', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Commissioned by</span><br />
                <strong style={{ color: '#fff' }}>Dominic Williams</strong>
              </p>
              <p style={{ margin: '0 0 6px' }}>
                <span style={{ color: '#888', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Painted by</span><br />
                <strong style={{ color: '#fff' }}>Candace Marquette</strong>
              </p>
              <p style={{ margin: '0 0 0' }}>
                <span style={{ color: '#888', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Built by</span><br />
                <a
                  href="https://t3knologic.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#d4a843', textDecoration: 'underline' }}
                >
                  T3kNo-Logic.xyz
                </a>
              </p>
            </div>

            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', fontSize: 11, color: '#555' }}>
              © {new Date().getFullYear()} Revelation Walls &nbsp;·&nbsp;{' '}
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${APP_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#d4a843', textDecoration: 'underline' }}
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
