export function DevraLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="devra-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="50%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#A855F7"/>
        </linearGradient>
        <linearGradient id="devra-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D"/>
          <stop offset="100%" stopColor="#F59E0B"/>
        </linearGradient>
        <radialGradient id="devra-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
        </radialGradient>
      </defs>

      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#devra-bg)"/>
      <circle cx="32" cy="32" r="20" fill="url(#devra-glow)"/>
      <path d="M18 24l-6 8 6 8" stroke="url(#devra-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M46 24l6 8-6 8" stroke="url(#devra-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="32" cy="32" r="8" fill="url(#devra-gold)"/>
      <circle cx="32" cy="32" r="4" fill="#7C3AED"/>
      <g stroke="url(#devra-gold)" strokeWidth="2" strokeLinecap="round">
        <line x1="32" y1="18" x2="32" y2="22"/>
        <line x1="32" y1="42" x2="32" y2="46"/>
        <line x1="22" y1="32" x2="26" y2="32"/>
        <line x1="38" y1="32" x2="42" y2="32"/>
      </g>
    </svg>
  )
}
