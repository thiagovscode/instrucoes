export default function LinkCard({ title, description, url, image, type, action, tag }) {
  const content = (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-end text-left p-6 md:p-8">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5 opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-end h-full">
        <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-1 mt-auto">
          {tag && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-xs text-white/95 uppercase tracking-[0.2em] font-medium">
                {tag}
              </span>
            </div>
          )}
          
          <h2 className="text-2xl md:text-3xl font-serif font-light text-white mb-2.5 leading-snug tracking-wide">
            {title}
          </h2>
          
          {/* Description fades in and moves up slightly on hover on desktop */}
          <p className="text-stone-200/90 font-light text-sm md:text-[15px] leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:-translate-y-2 md:group-hover:translate-y-0 h-auto md:max-h-0 md:group-hover:max-h-20 overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  const baseClasses = "group relative overflow-hidden rounded-[1.5rem] bg-stone-100 aspect-square md:aspect-[4/5] flex flex-col justify-end shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-700 block w-full outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-stone-400";

  if (type === 'action') {
    return (
      <button onClick={action} className={baseClasses}>
        {content}
      </button>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={baseClasses}>
      {content}
    </a>
  );
}
