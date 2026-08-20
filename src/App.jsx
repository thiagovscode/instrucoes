import { useState } from 'react';
import LinkCard from './components/LinkCard';
import PixModal from './components/PixModal';
import { pageConfig } from './config';
import brasao from './images/brasao.png';

function App() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-stone-200 text-stone-800">
      <div className="max-w-6xl mx-auto">
        
        {/* HIERARCHY IMPROVED HEADER */}
        <header className="text-center mb-16 md:mb-20 space-y-5 flex flex-col items-center">
          <p className="text-xs md:text-sm text-stone-400 font-medium tracking-[0.3em] uppercase mb-4">
            {pageConfig.overline}
          </p>
          
          <img 
            src={brasao} 
            alt="Brasão do Casamento" 
            className="w-32 md:w-48 h-auto object-contain my-4 opacity-90"
          />
          {pageConfig.date && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-12 h-[1px] bg-stone-300"></div>
              <p className="text-sm md:text-base text-stone-500 font-light tracking-[0.2em]">
                {pageConfig.date}
              </p>
              <div className="w-12 h-[1px] bg-stone-300"></div>
            </div>
          )}
        </header>

        <main className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          
          {/* PRIMARY CTA - RSVP (Full width banner) */}
          <section className="w-full">
            <a 
              href={pageConfig.cta.url}
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative overflow-hidden rounded-[1.5rem] bg-stone-100 flex flex-col justify-center min-h-[350px] md:min-h-[450px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-700 block w-full outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-stone-400"
            >
              <img 
                src={pageConfig.cta.image} 
                alt={pageConfig.cta.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 md:p-16 h-full w-full">
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white/95 uppercase tracking-[0.2em] font-medium mb-6">
                  {pageConfig.cta.tag}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-4 tracking-wide">
                  {pageConfig.cta.title}
                </h2>
                <p className="text-stone-200 font-light text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  {pageConfig.cta.description}
                </p>
                <span className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-stone-100 transition-colors duration-300">
                  {pageConfig.cta.buttonText}
                </span>
              </div>
            </a>
          </section>

          {/* GRID: 4 CARDS (2x2) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {pageConfig.links.map((link) => {
              if (link.type === 'pix') {
                return (
                  <LinkCard 
                    key={link.id} 
                    {...link} 
                    type="action"
                    action={() => setIsPixModalOpen(true)} 
                  />
                );
              }
              return <LinkCard key={link.id} {...link} />;
            })}
          </section>

        </main>

        <footer className="mt-32 text-center text-stone-400 text-xs md:text-sm font-light tracking-wider uppercase">
          <p>{pageConfig.footerText}</p>
        </footer>
      </div>

      <PixModal 
        isOpen={isPixModalOpen} 
        onClose={() => setIsPixModalOpen(false)} 
        pixKey={pageConfig.pixKey} 
      />
    </div>
  );
}

export default App;
