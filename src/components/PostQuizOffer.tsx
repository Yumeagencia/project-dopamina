import { motion } from 'framer-motion';
import { Sparkles, Lock, ArrowRight, AlertTriangle, Heart, TrendingDown, Clock, XCircle } from 'lucide-react';
import Header from './Header';

interface PostQuizOfferProps {
  testType: 'stress' | 'procrastination';
  resultType: string;
  onCheckout: () => void;
  onHomeClick: () => void;
}

export default function PostQuizOffer({ testType, onCheckout, onHomeClick }: PostQuizOfferProps) {
  const title = testType === 'stress'
    ? 'Tu perfil emocional está listo'
    : 'Tu patrón de bloqueo está listo';

  const primaryColor = testType === 'stress' ? 'purple' : 'purple';
  const secondaryColor = testType === 'stress' ? 'pink' : 'pink';

  const transformationMap = [
    { day: 1, text: 'Calma interna y liberación mental' },
    { day: 2, text: 'Más claridad y estabilidad emocional' },
    { day: 3, text: 'Energía vuelve gradualmente' },
    { day: 4, text: 'Enfoque suave y control interno' },
    { day: 5, text: 'Ritmo, presencia, orden mental' },
    { day: 6, text: 'Motivación auténtica y ligera' },
    { day: 7, text: 'Sensación de reencuentro contigo mismo' }
  ];

  const consequencesTimeline = [
    {
      period: '1 semana',
      intensity: 'Empeoramiento leve',
      icon: AlertTriangle,
      consequences: [
        'Los síntomas que sentís hoy se vuelven tu "nueva normalidad"',
        'Tu capacidad de concentración sigue cayendo',
        'El cansancio mental se acumula sin descanso real',
        'Tus días empiezan a sentirse más pesados y repetitivos'
      ],
      color: 'orange'
    },
    {
      period: '1 mes',
      intensity: 'Deterioro significativo',
      icon: TrendingDown,
      consequences: [
        'La ansiedad o el bloqueo se vuelven parte de tu rutina diaria',
        'Tu energía cae drásticamente, te cuesta levantarte con ganas',
        'Tus relaciones empiezan a sufrir por tu estado interno',
        'La motivación desaparece, todo requiere esfuerzo extremo',
        'Tu autoestima baja: empezás a creer que "así sos vos"'
      ],
      color: 'red'
    },
    {
      period: '3 meses',
      intensity: 'Crisis profunda',
      icon: XCircle,
      consequences: [
        'El agotamiento se vuelve crónico, ya no recordás cómo se siente estar bien',
        'Tu mente entra en modo supervivencia: solo reaccionás, no vivís',
        'Las oportunidades se pierden porque no tenés claridad ni fuerza para avanzar',
        'La desconexión emocional se profundiza: te sentís vacío o adormecido',
        'Tu cuerpo empieza a manifestar síntomas físicos (tensión, dolores, insomnio)',
        'La frustración interna se convierte en resignación: "ya es tarde para cambiar"'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'border' | 'text' | 'from' | 'to') => {
    const colorMap: Record<string, Record<string, string>> = {
      orange: {
        bg: 'bg-orange-500',
        border: 'border-orange-300',
        text: 'text-orange-600',
        from: 'from-orange-500',
        to: 'to-red-500'
      },
      red: {
        bg: 'bg-red-600',
        border: 'border-red-300',
        text: 'text-red-600',
        from: 'from-red-500',
        to: 'rose-600'
      }
    };
    return colorMap[color]?.[type] || colorMap.orange[type];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white flex flex-col">
      <Header showHomeButton={true} onHomeClick={onHomeClick} />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="flex-1 px-4 py-12 pt-28 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-40"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-light max-w-2xl mx-auto px-2">
              Detectamos tu tipo — y ya sabemos exactamente cuál es el camino que tu mente necesita.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 shadow-xl border border-gray-200 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-purple-600">RESULTADO BLOQUEADO</span>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 sm:p-6 mb-3 overflow-hidden">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 tracking-wider break-all">
                ████████████████████
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-light">
              (será revelado luego del acceso)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-8 border border-purple-100"
          >
            <p className="text-base sm:text-lg text-gray-800 font-light leading-relaxed mb-4 sm:mb-6">
              Lo que está pasando con vos tiene sentido. No estás roto, no estás solo, y no estás fallando.
              Estás en una etapa donde tu mente y tu cuerpo piden guía, estructura y un camino claro.
            </p>
            <p className="text-base sm:text-lg text-gray-800 font-semibold">
              Y tenemos exactamente el protocolo que encaja con tu estado mental.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-8 shadow-lg border border-gray-200"
          >
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Cómo te sentís ahora
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                  Ahora mismo sentís carga, bloqueo, confusión o cansancio. Tu energía está siendo consumida
                  antes de poder avanzar, tu claridad se nubló y tu foco se dispersa cuando más lo necesitás.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-8 border border-purple-100"
          >
            <div className="flex items-start mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 pt-1 sm:pt-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Cómo te vas a sentir en 7 días
              </h3>
            </div>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {transformationMap.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-start bg-white bg-opacity-60 rounded-xl p-3 sm:p-4 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xs sm:text-sm">D{item.day}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 font-light pt-1 sm:pt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-light text-center italic">
              Resultado final: regulación, claridad y sentido interno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12 px-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onCheckout}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center w-full sm:w-auto justify-center"
            >
              <span className="text-center">Acceder a mi guía personalizada de 7 días</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 flex-shrink-0" />
            </motion.button>
            <p className="text-xs sm:text-sm text-gray-500 mt-4 font-light px-2">
              Accedés inmediatamente a tu diagnóstico completo + guía personalizada
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-8 border-2 border-red-200"
          >
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Si no actuás ahora...
              </h3>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {consequencesTimeline.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.period}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="relative"
                  >
                    <div className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 ${getColorClasses(stage.color, 'border')} shadow-lg`}>
                      <div className="flex items-start mb-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 ${getColorClasses(stage.color, 'bg')} rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-xl`}>
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h4 className={`text-lg sm:text-xl font-bold ${getColorClasses(stage.color, 'text')}`} style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                              {stage.period.toUpperCase()}
                            </h4>
                            <span className={`text-xs sm:text-sm font-semibold ${getColorClasses(stage.color, 'text')} bg-white px-2 sm:px-3 py-1 rounded-full border ${getColorClasses(stage.color, 'border')} whitespace-nowrap self-start`}>
                              {stage.intensity}
                            </span>
                          </div>
                          <div className={`h-1 w-full bg-gradient-to-r ${getColorClasses(stage.color, 'from')} ${getColorClasses(stage.color, 'to')} rounded-full mb-4`} />
                        </div>
                      </div>

                      <ul className="space-y-3 ml-0 sm:ml-[72px]">
                        {stage.consequences.map((consequence, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 + index * 0.2 + idx * 0.1 }}
                            className="flex items-start"
                          >
                            <span className={`inline-block w-2 h-2 ${getColorClasses(stage.color, 'bg')} rounded-full mt-2 mr-3 flex-shrink-0`} />
                            <span className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">{consequence}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {index < consequencesTimeline.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 1.3 + index * 0.2, duration: 0.4 }}
                        className="absolute left-7 bottom-0 w-0.5 h-8 bg-gradient-to-b from-red-400 to-red-600 transform translate-y-full"
                        style={{ originY: 0 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-6 sm:mt-8 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center"
            >
              <p className="text-white text-lg sm:text-xl font-semibold mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                No merecés esa lucha en silencio.
              </p>
              <p className="text-sm sm:text-base text-red-100 font-light">
                Cada día que pasa sin tratamiento hace el camino de regreso más difícil.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
            className="text-center mb-8 px-2"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-light leading-relaxed mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Tu claridad, tu energía y tu enfoque están esperando que digas sí.
            </p>
            <p className="text-lg sm:text-xl text-purple-600 font-semibold">
              Este es el momento donde empezás a volver a vos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 font-light">
              Accedés a tu guía y a tu diagnóstico completo inmediatamente después del pago.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4"
      >
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
          © 2025 MasDopamina | Tu bienestar mental importa
        </div>
      </motion.footer>
    </div>
  );
}
