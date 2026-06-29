import { useState, useEffect } from 'react';
import { Grid3x3 as Grid3X3 } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-gray-900 flex-shrink-0">
            {siteConfig.logoUrl ? (
              <img src={siteConfig.logoUrl} alt={siteConfig.name} className="w-full h-full object-cover" />
            ) : (
              <Grid3X3 size={14} className="text-white" />
            )}
          </div>
          <span className="text-gray-900 font-semibold text-base tracking-tight">{siteConfig.name}</span>
        </div>
      </div>
    </header>
  );
}
