import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';

interface EmailCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export default function EmailCapture({ isOpen, onClose, onSubmit }: EmailCaptureProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      onSubmit(email);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-full mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Recibí tu análisis personalizado
                </h2>
                <p className="text-gray-600">
                  Dejá tu correo para recibir tu resultado completo y tips exclusivos
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00B7C2] focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00B7C2] to-[#009ba5] text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Enviar mi resultado
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                No compartimos tu información. Promesa Veldo Labs.
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
