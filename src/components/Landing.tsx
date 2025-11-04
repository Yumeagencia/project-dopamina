import { motion } from 'framer-motion';
import { Brain, Zap, Clock, Target, TrendingUp, Award } from 'lucide-react';
import Header from './Header';
import ParticleBackground from './ParticleBackground';
import { analyticsEvents } from '../utils/analytics';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  const handleStart = () => {
    analyticsEvents.startTest();
    onStart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-white relative overflow-hidden">
      <ParticleBackground />
      <Header />

      <div className="relative z-10 flex flex-col min-h-screen pt-20">
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-5xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <Brain className="w-24 h-24 text-[#00B7C2] mx-auto relative z-10" strokeWidth={1.5} />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Descubrí tu nivel de IQ<br />
                <span className="bg-gradient-to-r from-[#00B7C2] to-[#009ba5] bg-clip-text text-transparent">
                  en 5 minutos
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light"
              >
                Respondé 32 preguntas rápidas y descubrí tu razonamiento, lógica y percepción visual.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="bg-gradient-to-r from-[#00B7C2] to-[#009ba5] hover:from-[#009ba5] hover:to-[#00B7C2] text-white font-semibold text-lg px-14 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Empezar test ahora</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%', opacity: 0.1 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mt-20"
            >
              {[
                {
                  icon: Clock,
                  color: '#00B7C2',
                  title: 'Solo 5 minutos',
                  description: 'Test rápido y eficiente diseñado para tu día ocupado'
                },
                {
                  icon: Target,
                  color: '#ee271e',
                  title: 'Resultados precisos',
                  description: 'Basado en metodologías reconocidas de evaluación cognitiva'
                },
                {
                  icon: Zap,
                  color: '#00B7C2',
                  title: 'Análisis completo',
                  description: 'Descubrí tus fortalezas en diferentes áreas cognitivas'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 text-center"
            >
              <div className="flex items-center justify-center space-x-8 mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-[#00B7C2]" />
                  <span className="text-gray-700 font-medium">+10,000 tests realizados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#ee271e]" />
                  <span className="text-gray-700 font-medium">4.9/5 de satisfacción</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4"
        >
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
            © 2025 Veldo Labs | Hecho con desde Paraguay | #ConfianzaQueLlega
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
