import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(220,38,38,0.9)]">
              FARHAN<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </div>
            <p className="text-xs font-mono text-white/50 tracking-widest uppercase">
              SOFTWARE ENGINEER | FULL STACK DEVELOPER
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="w-full md:w-auto overflow-x-hidden">
            <div
              className="flex flex-nowrap items-center justify-center md:justify-start gap-1.5 md:gap-8 font-mono uppercase text-white/70 whitespace-nowrap tracking-normal md:tracking-widest"
              style={{ fontSize: 'clamp(8px, 2.8vw, 12px)' }}
            >
              <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
              <span className="text-red-600 md:hidden">•</span>
              <a href="#about" className="hover:text-red-500 transition-colors">About</a>
              <span className="text-red-600 md:hidden">•</span>
              <a href="#expertise" className="hover:text-red-500 transition-colors">Expertise</a>
              <span className="text-red-600 md:hidden">•</span>
              <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
              <span className="text-red-600 md:hidden">•</span>
              <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
              <span className="text-red-600 md:hidden">•</span>
              <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
            </div>
          </nav>
        </div>

        {/* Middle Section: Socials & External Profiles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mohammed-farhan-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-red-500 hover:border-red-600/60 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/MohammedFarhan1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-red-500 hover:border-red-600/60 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.19.694.8.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://medium.com/@mohammed-farhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-red-500 hover:border-red-600/60 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.87 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a
              href="mailto:mohammed.farhan.dev@gmail.com"
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-red-500 hover:border-red-600/60 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="tel:+919498358776"
              aria-label="Call"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-red-500 hover:border-red-600/60 hover:shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
          </div>

          <div className="text-white/40 tracking-widest uppercase">
            LOCATION: TAMIL NADU, IN
          </div>
        </div>

        {/* Bottom Copyright & Cinematic Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Mohamed Farhan. All Rights Reserved.</p>
          <p className="text-red-500/80">&ldquo;MAKE IT WORK. THEN MAKE IT BETTER.&rdquo;</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;