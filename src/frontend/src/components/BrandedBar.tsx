import { ExternalLink, Palette, Gem } from 'lucide-react';

const APP_ID = typeof window !== 'undefined'
  ? encodeURIComponent(window.location.hostname)
  : 'revelation-walls-gallery';

export default function BrandedBar() {
  return (
    <header className="branded-bar">
      {/* Banner image as decorative background strip */}
      <div
        className="branded-bar-bg"
        style={{
          backgroundImage: 'url(/assets/generated/revelation-walls-banner.dim_1200x120.png)',
        }}
        aria-hidden="true"
      />

      {/* Content layer */}
      <div className="branded-bar-content">
        {/* Left: Title */}
        <div className="branded-bar-title-group">
          <Gem className="branded-bar-icon" aria-hidden="true" />
          <span className="branded-bar-title">Revelation Walls</span>
          <span className="branded-bar-subtitle">Murals &amp; NFTs</span>
        </div>

        {/* Center: Attribution pills */}
        <div className="branded-bar-credits">
          <span className="credit-pill">
            <span className="credit-label">Commissioned by</span>
            <span className="credit-name">Dominic Williams</span>
          </span>
          <span className="credit-divider" aria-hidden="true">·</span>
          <span className="credit-pill">
            <Palette className="credit-icon" aria-hidden="true" />
            <span className="credit-label">Painted by</span>
            <span className="credit-name">Candace Marquette</span>
          </span>
          <span className="credit-divider" aria-hidden="true">·</span>
          <span className="credit-pill">
            <span className="credit-label">At</span>
            <span className="credit-name">Dfinity Foundation</span>
          </span>
        </div>

        {/* Right: Builder + caffeine footer */}
        <div className="branded-bar-right">
          <a
            href="https://t3kno-logic.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="builder-link"
          >
            Built by T3kNo-Logic.xyz
            <ExternalLink className="builder-link-icon" aria-hidden="true" />
          </a>
          <span className="credit-divider" aria-hidden="true">·</span>
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${APP_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="caffeine-link"
          >
            Built with <span className="caffeine-heart">♥</span> using caffeine.ai
          </a>
        </div>
      </div>
    </header>
  );
}
