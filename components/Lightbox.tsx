
import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-green-500 transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <img 
        src={src} 
        alt="Full size" 
        className="max-h-full max-w-full object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
