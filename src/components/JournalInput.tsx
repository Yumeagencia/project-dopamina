import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather, Sparkles } from 'lucide-react';

interface JournalInputProps {
  placeholder?: string;
  prompt: string;
  storageKey: string;
}

export default function JournalInput({ placeholder = "Dejá fluir tus pensamientos...", prompt, storageKey }: JournalInputProps) {
  const [text, setText] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved || '';
  });
  const [showAnimation, setShowAnimation] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleRelease = () => {
    if (text.trim() === '') return;

    localStorage.setItem(storageKey, text);

    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    }));
    setParticles(newParticles);
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
      setParticles([]);
      setText('');
    }, 2000);
  };

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-amber-200">
        <div className="flex items-start space-x-2 md:space-x-3 mb-3 md:mb-4">
          <Feather className="w-5 h-5 md:w-6 md:h-6 text-amber-600 mt-1 flex-shrink-0" />
          <p className="text-sm md:text-base text-gray-800 font-light leading-relaxed">
            <strong className="font-semibold text-gray-900">{prompt}</strong>
          </p>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          rows={6}
          className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl border-2 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white resize-none text-sm md:text-base text-gray-800 font-light"
        />

        <div className="mt-3 md:mt-4 text-center relative overflow-visible">
          <motion.button
            onClick={handleRelease}
            disabled={text.trim() === ''}
            whileHover={{ scale: text.trim() ? 1.05 : 1 }}
            whileTap={{ scale: text.trim() ? 0.95 : 1 }}
            className={`relative px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg ${
              text.trim()
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white cursor-pointer hover:shadow-xl active:scale-95'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span>Soltar</span>
            </span>
          </motion.button>

          <p className="text-xs md:text-sm text-gray-600 font-light mt-2 md:mt-3 italic px-4">
            Suelta todos tus pensamientos y deja que fluyan
          </p>

          <AnimatePresence>
            {showAnimation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 blur-xl"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0,
                  scale: 0
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute top-1/2 left-1/2 w-3 h-3 pointer-events-none"
              >
                <Sparkles className="w-full h-full text-amber-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {showAnimation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 md:mt-4 text-center"
          >
            <p className="text-base md:text-lg text-teal-600 font-semibold">
              Tus pensamientos han sido liberados
            </p>
            <p className="text-xs md:text-sm text-gray-600 font-light mt-1">
              Guardado en tu espacio personal
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
