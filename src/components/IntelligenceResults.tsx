import { motion } from 'framer-motion';
import { IntelligenceType, intelligenceProfiles } from '../data/intelligenceQuestions';
import { Brain, Award, Briefcase, Sparkles, Check, Home } from 'lucide-react';
import Header from './Header';

interface IntelligenceResultsProps {
  dominantType: IntelligenceType;
  scores: Record<IntelligenceType, number>;
  iqScore: number;
  onReset: () => void;
}

export default function IntelligenceResults({ dominantType, scores, iqScore, onReset }: IntelligenceResultsProps) {
  const profile = intelligenceProfiles[dominantType];

  // Get top 3 intelligence types
  const sortedTypes = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white flex flex-col">
      <Header onHomeClick={onReset} showHomeButton={true} />

      <div className="flex-1 px-4 py-12 pt-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ee271e] to-[#ff4136] rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#ee271e] to-[#ff4136] rounded-full shadow-2xl">
                  <span className="text-5xl">{profile.emoji}</span>
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Tu Inteligencia Dominante
            </h1>
            <p className="text-gray-600 font-light">Descubrí tu perfil cognitivo único</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#ee271e] to-[#ff4136] rounded-3xl p-8 md:p-12 mb-8 shadow-2xl text-white"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                {profile.name}
              </h2>
              <p className="text-lg md:text-xl text-white text-opacity-90 font-light leading-relaxed">
                {profile.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {sortedTypes.map(([type, score], index) => {
                const typeProfile = intelligenceProfiles[type as IntelligenceType];
                return (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{typeProfile.emoji}</div>
                    <div className="text-sm font-light mb-1">{typeProfile.name.replace('Inteligencia ', '')}</div>
                    <div className="text-2xl font-bold">{score}/10</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ee271e] to-[#ff4136] rounded-full flex items-center justify-center mr-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Tus Fortalezas
                </h3>
              </div>
              <ul className="space-y-2">
                {profile.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start text-gray-700 font-light">
                    <Check className="w-5 h-5 text-[#ee271e] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-full flex items-center justify-center mr-3">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Carreras Ideales
                </h3>
              </div>
              <ul className="space-y-2">
                {profile.careers.map((career, index) => (
                  <li key={index} className="flex items-start text-gray-700 font-light">
                    <Award className="w-5 h-5 text-[#00B7C2] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Relación con tu IQ de {iqScore}
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  {profile.relationWithIQ}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReset}
              className="bg-gradient-to-r from-[#ee271e] to-[#ff4136] hover:from-[#ff4136] hover:to-[#ee271e] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Volver al inicio
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4"
      >
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
          © 2025 Veldo Labs | Hecho con desde Paraguay | #ConfianzaQueLlega
        </div>
      </motion.footer>
    </div>
  );
}
