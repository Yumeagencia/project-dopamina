import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Sparkles, Cpu, Network, Zap } from 'lucide-react';

interface SuspenseProps {
  onComplete: () => void;
}

const loadingSteps = [
  { icon: Brain, text: 'Calculando tu perfil cognitivo...' },
  { icon: TrendingUp, text: 'Comparando tus resultados con miles de personas...' },
  { icon: Sparkles, text: 'Preparando tu análisis personalizado...' }
];

const NeuralNetwork = () => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: node.delay
          }}
        />
      ))}
    </div>
  );
};

export default function Suspense({ onComplete }: SuspenseProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const CurrentIcon = loadingSteps[step].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00B7C2] via-[#009ba5] to-[#00868f] flex items-center justify-center px-4 relative overflow-hidden">
      <NeuralNetwork />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md relative z-10"
      >
        <div className="mb-8 flex justify-center">
          <motion.div className="relative">
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 0, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            />
            <motion.div
              key={step}
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="relative bg-white rounded-full p-8 shadow-2xl"
            >
              <CurrentIcon className="w-16 h-16 text-[#00B7C2]" />
            </motion.div>

            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Cpu className="w-8 h-8 text-white opacity-50" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Network className="w-8 h-8 text-white opacity-50" />
            </motion.div>
          </motion.div>
        </div>

        <motion.h2
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          {loadingSteps[step].text}
        </motion.h2>

        <motion.div
          className="flex items-center justify-center space-x-2 text-white text-opacity-80 mb-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Zap className="w-4 h-4" />
          <span className="text-sm font-light">Análisis en tiempo real</span>
        </motion.div>

        <div className="flex justify-center space-x-2">
          {loadingSteps.map((_, index) => (
            <motion.div
              key={index}
              initial={{ width: 8 }}
              animate={{
                width: index <= step ? 32 : 8,
                backgroundColor: index <= step ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'
              }}
              transition={{ duration: 0.5 }}
              className="h-2 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
