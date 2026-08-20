import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

export default function PixModal({ isOpen, onClose, pixKey }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wedding-bg/90 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="relative w-full max-w-sm p-8 bg-white rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <h2 className="font-serif text-2xl text-wedding-green mb-2">Pix dos Noivos</h2>
          <p className="text-sm text-gray-500 mb-6">Escaneie o QR Code ou copie a chave abaixo</p>

          <div className="bg-wedding-bg p-4 rounded-xl inline-block mb-6">
            {/* Placeholder for QR Code */}
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pixKey}`} 
              alt="QR Code Pix" 
              className="rounded-lg w-36 h-36 mx-auto mix-blend-multiply"
            />
          </div>

          <div className="text-left">
            <label className="block text-xs text-gray-500 mb-2 font-medium">Chave Pix (Celular/CPF/Email)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={pixKey}
                readOnly
                className="flex-1 px-4 py-3 bg-wedding-bg border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none"
              />
              <button 
                onClick={handleCopy}
                className={`flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  copied 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-wedding-green text-white hover:bg-wedding-green/90'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
