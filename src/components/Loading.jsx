import styled from 'styled-components';

const StyledWrapper = styled.main`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  place-items: center;
  isolation: isolate;
  background:
    radial-gradient(ellipse at 50% 105%, rgba(74, 39, 126, 0.42), transparent 56%),
    radial-gradient(ellipse at 12% 18%, rgba(30, 73, 68, 0.13), transparent 36%),
    #07070b;
  color: #f3ead4;

  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    pointer-events: none;
  }

  &::before {
    inset: 0;
    opacity: 0.5;
    background-image:
      radial-gradient(1px 1px at 12% 21%, #f3ead4 50%, transparent 100%),
      radial-gradient(1px 1px at 78% 18%, #d6bd80 50%, transparent 100%),
      radial-gradient(1.5px 1.5px at 88% 63%, #f3ead4 50%, transparent 100%),
      radial-gradient(1px 1px at 21% 76%, #d6bd80 50%, transparent 100%),
      radial-gradient(1px 1px at 66% 83%, #f3ead4 50%, transparent 100%),
      radial-gradient(1px 1px at 39% 12%, #f3ead4 50%, transparent 100%),
      radial-gradient(1px 1px at 95% 34%, #d6bd80 50%, transparent 100%);
  }

  &::after {
    top: 50%;
    left: 50%;
    width: min(74vw, 48rem);
    aspect-ratio: 1;
    border: 1px solid rgba(219, 190, 126, 0.055);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow:
      0 0 0 4rem rgba(219, 190, 126, 0.012),
      0 0 0 8rem rgba(219, 190, 126, 0.01);
  }

  .loader-content {
    width: min(31rem, calc(100vw - 3rem));
    padding: 2rem 0;
    text-align: center;
    animation: reveal 900ms ease both;
  }

  .sigil {
    display: grid;
    width: 4rem;
    height: 4rem;
    margin: 0 auto 2rem;
    place-items: center;
    border: 1px solid rgba(218, 190, 126, 0.45);
    border-radius: 50%;
    color: #e3c779;
    box-shadow: 0 0 36px rgba(174, 129, 58, 0.12), inset 0 0 18px rgba(174, 129, 58, 0.08);
  }

  .sigil svg {
    width: 1.65rem;
    height: 1.65rem;
    filter: drop-shadow(0 0 7px rgba(227, 199, 121, 0.5));
  }

  .loader-kicker {
    display: block;
    color: #d9bc78;
    font-size: 0.66rem;
    font-weight: 600;
    letter-spacing: 0.34em;
    text-transform: uppercase;
  }

  .loader-title {
    margin: 1rem 0 0.65rem;
    color: #f3ead4;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2rem, 7vw, 3.25rem);
    font-weight: 400;
    letter-spacing: 0.035em;
    line-height: 1.1;
  }

  .loader-caption {
    min-height: 1.4rem;
    margin: 0;
    color: rgba(243, 234, 212, 0.54);
    font-size: 0.82rem;
    letter-spacing: 0.07em;
  }

  .progress-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin: 3.25rem 0 0.8rem;
    color: rgba(243, 234, 212, 0.65);
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .progress-percent {
    min-width: 3.5rem;
    color: #e5cd92;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.25rem;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.04em;
    text-align: right;
  }

  .progress-track {
    position: relative;
    height: 2.35rem;
    overflow: hidden;
    border: 1px solid rgba(219, 190, 126, 0.27);
    border-radius: 999px;
    background: rgba(18, 17, 24, 0.82);
    box-shadow:
      0 0 32px rgba(97, 71, 143, 0.13),
      inset 0 0 14px rgba(0, 0, 0, 0.72);
  }

  .progress-track svg {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .snake-path {
    filter: drop-shadow(0 0 5px rgba(98, 221, 153, 0.45));
    transition: stroke-dashoffset 55ms linear;
  }

  .loader-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    margin-top: 1.35rem;
    color: rgba(243, 234, 212, 0.35);
    font-size: 0.64rem;
    letter-spacing: 0.19em;
    text-transform: uppercase;
  }

  .footer-star {
    color: #c6a866;
    font-size: 0.8rem;
  }

  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    .loader-content {
      width: calc(100vw - 2.5rem);
    }

    .sigil {
      margin-bottom: 1.6rem;
    }

    .progress-row {
      margin-top: 2.7rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .loader-content {
      animation: none;
    }

    .snake-path {
      transition: none;
    }
  }
`;

const Loading = ({ progress = 0 }) => {
  const isWaiting = progress === 0;

  return (
    <StyledWrapper>
      <section className="loader-content" aria-label="Portfolio loading">
        <div className="sigil" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M16 3.5 18.4 13.6 28.5 16l-10.1 2.4L16 28.5l-2.4-10.1L3.5 16l10.1-2.4L16 3.5Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="16" r="2.1" fill="currentColor" />
          </svg>
        </div>

        <span className="loader-kicker">Creative developer · Portfolio</span>
        <h1 className="loader-title">A little magic awaits</h1>
        <p className="loader-caption" aria-live="polite">
          {isWaiting ? 'Please wait…' : 'Loading your experience'}
        </p>

        <div className="progress-row">
          <span>{isWaiting ? 'Preparing' : 'Opening the portfolio'}</span>
          <span className="progress-percent">{progress}%</span>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Loading portfolio"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="snake-gradient" x1="0" y1="0" x2="1000" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#286C4B" />
                <stop offset="0.55" stopColor="#55C98A" />
                <stop offset="1" stopColor="#D6BD80" />
              </linearGradient>
            </defs>
            <path
              className="snake-path"
              d="M0 30 C40 4 80 4 120 30 S200 56 240 30 320 4 360 30 440 56 480 30 560 4 600 30 680 56 720 30 800 4 840 30 920 56 1000 30"
              pathLength="100"
              stroke="url(#snake-gradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              fill="none"
            />
          </svg>
        </div>

        <div className="loader-footer">
          <span className="footer-star" aria-hidden="true">✦</span>
          <span>Crafted with a little wonder</span>
          <span className="footer-star" aria-hidden="true">✦</span>
        </div>
      </section>
    </StyledWrapper>
  );
};

export default Loading;
