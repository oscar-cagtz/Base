import React, { useState } from 'react';
import { Menu, X, ArrowRight, Activity, PenTool, Layers, CheckCircle2, Cpu, Globe } from 'lucide-react';

/**
 * The Fold Group - Golden Standard Template
 * * This file serves as the interactive prototype for your family presentation.
 * It dynamically injects CSS variables to demonstrate the "House of Brands" 
 * architecture, proving that one codebase can serve Fold, Flux, and Plum.
 */

// --- BRAND CONFIGURATION DATA ---
const brands = {
  fold: {
    id: 'fold',
    name: 'Fold',
    tagline: 'Structure & Unity.',
    description: 'The parent holding group. Engineered minimalism.',
    icon: <Layers className="w-6 h-6" />,
    fonts: 'font-sans',
    theme: {
      '--background': '#09090b', // Zinc 950
      '--foreground': '#fafafa', // Zinc 50
      '--brand-primary': '#ffffff',
      '--brand-secondary': '#a1a1aa', // Zinc 400
      '--border': '#27272a', // Zinc 800
      '--muted': '#18181b', // Zinc 900
    }
  },
  flux: {
    id: 'flux',
    name: 'Flux',
    tagline: 'Unbreakable Connectivity.',
    description: 'Mesh networking engineered to penetrate Monterrey concrete.',
    icon: <Activity className="w-6 h-6" />,
    fonts: 'font-sans',
    theme: {
      '--background': '#ffffff',
      '--foreground': '#020617', // Slate 950
      '--brand-primary': '#2563eb', // Blue 600
      '--brand-secondary': '#64748b', // Slate 500
      '--border': '#e2e8f0', // Slate 200
      '--muted': '#f8fafc', // Slate 50
    }
  },
  plum: {
    id: 'plum',
    name: 'Plum',
    tagline: 'Tactile Elegance.',
    description: 'Fine paper and stationery for those who appreciate weight and texture.',
    icon: <PenTool className="w-6 h-6" />,
    fonts: 'font-serif',
    theme: {
      '--background': '#fdfbf7', // Warm off-white
      '--foreground': '#4a3b32', // Deep brown/burgundy
      '--brand-primary': '#834c56', // Muted Plum
      '--brand-secondary': '#a89f91', // Warm gray
      '--border': '#e6dfd3', // Warm border
      '--muted': '#f4efe6', // Warm muted
    }
  }
};

// --- SHARED COMPONENTS ---

const Navbar = ({ activeBrand, onBrandChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo Area */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-[var(--brand-primary)]">
              {activeBrand.icon}
            </div>
            <span className={`text-2xl font-bold tracking-tight text-[var(--foreground)] ${activeBrand.fonts === 'font-serif' ? 'font-serif' : 'font-sans'}`}>
              {activeBrand.name}.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand-primary)] transition-colors">Products</a>
            <a href="#" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand-primary)] transition-colors">Engineering</a>
            <a href="#" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand-primary)] transition-colors">About</a>
            
            {/* Brand Switcher for Presentation */}
            <div className="flex items-center gap-2 ml-6 pl-6 border-l border-[var(--border)]">
              {Object.values(brands).map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => onBrandChange(brand.id)}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${activeBrand.id === brand.id ? 'border-[var(--foreground)] scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  style={{ backgroundColor: brand.theme['--brand-primary'] }}
                  title={`Switch to ${brand.name}`}
                  aria-label={`Switch to ${brand.name}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--foreground)] p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border)] px-4 pt-2 pb-6 space-y-4">
          <a href="#" className="block px-3 py-2 text-base font-medium text-[var(--foreground)]">Products</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-[var(--foreground)]">Engineering</a>
          <div className="pt-4 border-t border-[var(--border)] flex gap-4 px-3">
             {Object.values(brands).map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => {
                    onBrandChange(brand.id);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1 text-sm rounded border ${activeBrand.id === brand.id ? 'border-[var(--brand-primary)] text-[var(--brand-primary)]' : 'border-[var(--border)] text-[var(--brand-secondary)]'}`}
                >
                  {brand.name}
                </button>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ activeBrand }) => {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[80vh] justify-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] mb-8 animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse"></span>
        <span className="text-xs font-medium text-[var(--brand-secondary)] uppercase tracking-widest">
          The Fold Group
        </span>
      </div>
      
      <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[var(--foreground)] mb-6 max-w-4xl leading-tight transition-colors duration-500 ${activeBrand.fonts}`}>
        {activeBrand.tagline}
      </h1>
      
      <p className="text-lg md:text-xl text-[var(--brand-secondary)] max-w-2xl mb-10 transition-colors duration-500">
        {activeBrand.description}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-[var(--background)] rounded-md font-medium hover:opacity-90 transition-opacity">
          Explore Architecture
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[var(--border)] text-[var(--foreground)] rounded-md font-medium hover:bg-[var(--muted)] transition-colors">
          View Specifications
        </button>
      </div>
    </section>
  );
};

const FeatureGrid = ({ activeBrand }) => {
  const getFeatures = () => {
    if (activeBrand.id === 'flux') return [
      { icon: <Cpu />, title: "Concrete Penetration", desc: "Engineered specifically to blast through thick structural walls common in Monterrey." },
      { icon: <Activity />, title: "Thermal Resilience", desc: "Industrial-grade heat sinks ensure zero throttling during peak summer temperatures." },
      { icon: <Globe />, title: "Seamless Handoff", desc: "Move between rooms without dropping a packet. True mesh architecture." }
    ];
    if (activeBrand.id === 'plum') return [
      { icon: <PenTool />, title: "Cotton Rag Paper", desc: "100% archival cotton construction for a tactile, unforgettable weight." },
      { icon: <Layers />, title: "Letterpress Ready", desc: "Deeply debossed impressions that catch the light beautifully." },
      { icon: <CheckCircle2 />, title: "Bespoke Monograms", desc: "Hand-rendered typography for families and executives." }
    ];
    return [
      { icon: <Layers />, title: "Modular Architecture", desc: "A singular codebase driving nine distinct, high-performance brands." },
      { icon: <CheckCircle2 />, title: "Technical Precision", desc: "Zero bloat. Built on React, Vite, and absolute engineering discipline." },
      { icon: <Cpu />, title: "The Mexico Hook", desc: "Solving localized environmental and industrial challenges with global standards." }
    ];
  };

  return (
    <section className="py-24 bg-[var(--muted)] border-y border-[var(--border)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold text-[var(--foreground)] mb-4 ${activeBrand.fonts}`}>Core Engineering</h2>
          <p className="text-[var(--brand-secondary)] max-w-2xl mx-auto">Designed from first principles to solve complex problems with elegant solutions.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {getFeatures().map((feature, idx) => (
            <div key={idx} className="bg-[var(--background)] p-8 rounded-xl border border-[var(--border)] shadow-sm hover:border-[var(--brand-primary)] transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-[var(--muted)] flex items-center justify-center text-[var(--brand-primary)] mb-6">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold text-[var(--foreground)] mb-3 ${activeBrand.fonts}`}>{feature.title}</h3>
              <p className="text-[var(--brand-secondary)] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ activeBrand }) => {
  return (
    <footer className="bg-[var(--background)] py-12 border-t border-[var(--border)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-[var(--foreground)]">
           {activeBrand.icon}
           <span className={`font-bold ${activeBrand.fonts}`}>{activeBrand.name}.</span>
        </div>
        <p className="text-[var(--brand-secondary)] text-sm">
          &copy; {new Date().getFullYear()} The Fold Group Inc. Monterrey, MX. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-[var(--brand-secondary)] hover:text-[var(--brand-primary)] text-sm transition-colors">Privacy</a>
          <a href="#" className="text-[var(--brand-secondary)] hover:text-[var(--brand-primary)] text-sm transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentBrandId, setCurrentBrandId] = useState('fold');
  const activeBrand = brands[currentBrandId];

  // Inject CSS variables dynamically into the root element for the demo.
  // In your real repo, tailwind.config.js and a global CSS file will handle this.
  const themeStyles = activeBrand.theme;

  return (
    <div 
      className="min-h-screen transition-colors duration-500 font-sans"
      style={{ ...themeStyles, backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <Navbar activeBrand={activeBrand} onBrandChange={setCurrentBrandId} />
      <main>
        <Hero activeBrand={activeBrand} />
        <FeatureGrid activeBrand={activeBrand} />
      </main>
      <Footer activeBrand={activeBrand} />
    </div>
  );
}