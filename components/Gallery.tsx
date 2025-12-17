
import React from 'react';

interface GalleryProps {
  images: string[];
  onImageClick: (src: string) => void;
  title?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, onImageClick, title }) => {
  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-xl font-display font-bold text-green-500 uppercase tracking-wider pl-2 border-l-4 border-green-500">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer glass-card"
            onClick={() => onImageClick(src)}
          >
            <img 
              src={src} 
              alt={`Galeria ${index}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-semibold text-white">Ver resultado</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
