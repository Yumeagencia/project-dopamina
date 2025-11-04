import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Share2, Sparkles, TrendingUp, Target, Award, Mail } from 'lucide-react';
import Header from './Header';
import EmailCapture from './EmailCapture';
import { analyticsEvents } from '../utils/analytics';
import IntelligenceQuiz from './IntelligenceQuiz';
import IntelligenceResults from './IntelligenceResults';
import { IntelligenceType } from '../data/intelligenceQuestions';

interface ResultsProps {
  iqScore: number;
  isPremium: boolean;
  onReset?: () => void;
}

export default function Results({ iqScore, isPremium, onReset }: ResultsProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showIntelligenceQuiz, setShowIntelligenceQuiz] = useState(false);
  const [intelligenceType, setIntelligenceType] = useState<IntelligenceType | null>(null);
  const [intelligenceScores, setIntelligenceScores] = useState<Record<IntelligenceType, number> | null>(null);
  const percentile = Math.round(((iqScore - 85) / (145 - 85)) * 100);

  useEffect(() => {
    if (isPremium) {
      let start = 0;
      const increment = iqScore / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= iqScore) {
          setDisplayScore(iqScore);
          clearInterval(timer);
        } else {
          setDisplayScore(Math.floor(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [iqScore, isPremium]);

  const handleShare = () => {
    analyticsEvents.shareResult();
    const text = `¡Acabo de descubrir mi IQ: ${iqScore}! Estoy en el top ${100 - percentile}% 🧠`;
    if (navigator.share) {
      navigator.share({
        title: 'Mi resultado de Test IQ',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('¡Texto copiado! Ahora podés compartirlo en tus redes');
    }
  };

  const getCategoryText = () => {
    if (iqScore >= 130) return { text: 'Muy Superior', desc: 'Tu mente está por encima del 95% de la población.' };
    if (iqScore >= 120) return { text: 'Superior', desc: 'Pensás rápido y con lógica excepcional.' };
    if (iqScore >= 110) return { text: 'Por encima del promedio', desc: 'Tu razonamiento está equilibrado y es sólido.' };
    return { text: 'Promedio', desc: 'Tu mente está equilibrada.' };
  };

  const category = getCategoryText();

  const handleIntelligenceComplete = (dominantType: IntelligenceType, scores: Record<IntelligenceType, number>) => {
    setIntelligenceType(dominantType);
    setIntelligenceScores(scores);
    setShowIntelligenceQuiz(false);
  };

  const handleIntelligenceReset = () => {
    setIntelligenceType(null);
    setIntelligenceScores(null);
    if (onReset) onReset();
  };

  if (showIntelligenceQuiz) {
    return <IntelligenceQuiz onComplete={handleIntelligenceComplete} />;
  }

  if (intelligenceType && intelligenceScores) {
    return (
      <IntelligenceResults
        dominantType={intelligenceType}
        scores={intelligenceScores}
        iqScore={iqScore}
        onReset={handleIntelligenceReset}
      />
    );
  }

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-white flex flex-col">
        <Header onHomeClick={onReset} showHomeButton={true} />
        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <Brain className="w-10 h-10 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Resumen Básico
            </h1>
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border border-gray-200">
              <p className="text-xl text-gray-700 mb-4 font-light">
                Tu IQ estimado está en rango promedio
              </p>
              <p className="text-gray-600 font-light">
                Para ver tu puntaje exacto, comparación detallada y análisis personalizado, desbloqueá el acceso completo.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReset}
              className="bg-gradient-to-r from-[#00B7C2] to-[#009ba5] hover:from-[#009ba5] hover:to-[#00B7C2] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg"
            >
              Ver resultado completo
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-white flex flex-col">
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
                  className="absolute inset-0 bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-full shadow-2xl">
                  <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Tu Resultado de IQ
            </h1>
            <p className="text-gray-600 font-light">Análisis completo de tu perfil cognitivo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-3xl p-8 md:p-12 mb-8 shadow-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 mb-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="text-7xl md:text-8xl font-bold text-white mb-2"
              >
                {displayScore}
              </motion.div>
              <div className="text-xl md:text-2xl text-white text-opacity-90 font-light">
                Tu IQ Estimado
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3"
            >
              <p className="text-white text-lg font-light">
                Estás por encima del <span className="font-semibold">{percentile}%</span> de los participantes en Paraguay
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 bg-white bg-opacity-20 rounded-full h-3 overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentile}%` }}
                transition={{ delay: 1.2, duration: 1 }}
                className="h-full bg-white rounded-full shadow-lg"
              />
            </motion.div>
            <p className="text-white text-opacity-80 text-sm mt-2 font-light">Percentil nacional</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {[
              {
                icon: Target,
                color: '#00B7C2',
                title: 'Tu punto fuerte',
                description: 'Razonamiento lógico y pensamiento rápido'
              },
              {
                icon: TrendingUp,
                color: '#ee271e',
                title: 'Comparación',
                description: `Superior al promedio nacional (IQ 100)`
              },
              {
                icon: Award,
                color: '#00B7C2',
                title: 'Categoría',
                description: category.text
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Interpretación de tu resultado
            </h2>
            <div className="space-y-4 text-gray-700 font-light leading-relaxed">
              <p>
                Tu puntaje de <strong className="font-semibold text-[#00B7C2]">{iqScore}</strong> indica que tenés una capacidad cognitiva
                {iqScore >= 120 ? ' excepcional' : ' por encima del promedio'}. {category.desc}
              </p>
              <p>
                Las personas con tu nivel de IQ típicamente se destacan en campos que requieren pensamiento analítico,
                resolución creativa de problemas y capacidad para identificar patrones complejos.
              </p>
              <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                <strong>Nota:</strong> Este test proporciona una estimación de tus capacidades cognitivas. Los resultados pueden variar
                según múltiples factores y no definen completamente tu inteligencia o potencial.
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            className="bg-gradient-to-r from-[#ee271e] to-[#ff4136] rounded-2xl p-8 text-white shadow-2xl"
          >
            <div className="text-center mb-6">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                ¿Querés descubrir tu tipo de inteligencia dominante?
              </h3>
              <p className="text-white text-opacity-90 mb-2 font-light">
                <span className="text-3xl font-bold block mb-1">¡GRATIS!</span>
                Como agradecimiento por completar el test de IQ
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowIntelligenceQuiz(true)}
                className="bg-white text-[#ee271e] font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Comenzar test gratis ahora
              </motion.button>
              <p className="text-white text-opacity-80 text-sm mt-3 font-light">
                ⚡ Solo 10 preguntas rápidas
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-left">
              <h4 className="text-lg font-semibold mb-4">Según la teoría de las inteligencias múltiples:</h4>
              <div className="space-y-3 text-sm font-light">
                <p><strong className="font-semibold">🎵 Musical:</strong> Habilidad para crear, interpretar y apreciar la música</p>
                <p><strong className="font-semibold">🏃 Kinestésica:</strong> Control del cuerpo y destreza en movimientos físicos</p>
                <p><strong className="font-semibold">🧮 Lógico-matemática:</strong> Razonamiento, cálculo y resolución de problemas</p>
                <p><strong className="font-semibold">📖 Lingüística:</strong> Uso efectivo del lenguaje oral y escrito</p>
                <p><strong className="font-semibold">🌿 Naturalista:</strong> Comprensión del mundo natural y sus patrones</p>
                <p><strong className="font-semibold">🤝 Interpersonal:</strong> Entender y conectar con otras personas</p>
                <p><strong className="font-semibold">🧘 Intrapersonal:</strong> Autoconocimiento y gestión emocional</p>
                <p><strong className="font-semibold">🎨 Espacial:</strong> Percepción visual y creación de imágenes mentales</p>
              </div>
              <p className="mt-4 text-white text-opacity-90 italic">
                Descubrí cuál es tu inteligencia dominante y cómo potenciarla en tu vida diaria, trabajo y relaciones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4"
      >
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
          © 2025 Veldo Labs | Hecho con desde Paraguay | #ConfianzaQueLlega
        </div>
      </motion.footer>

      <EmailCapture
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSubmit={(email) => {
          console.log('Email capturado:', email);
        }}
      />
    </div>
  );
}
