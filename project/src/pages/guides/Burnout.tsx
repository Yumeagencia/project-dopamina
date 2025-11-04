import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Calendar, Heart, Brain, Wind, CheckCircle, Play, Pause, RotateCcw, ChevronDown, ChevronUp, Sparkles, Shield, Book, Target, Flame } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Burnout() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [completedDays, setCompletedDays] = useState<{ [key: number]: boolean }>({});
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathCount, setBreathCount] = useState(0);

  const username = 'burnout';
  const password = 'burnout123';

  useEffect(() => {
    const saved = localStorage.getItem('completedDays_burnout');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }

    const justPaid = localStorage.getItem('justPaidBurnout');
    if (justPaid === 'true') {
      setIsAuthenticated(true);
      localStorage.removeItem('justPaidBurnout');
    }
  }, []);

  useEffect(() => {
    if (isBreathingActive) {
      const phases = [
        { phase: 'inhale' as const, duration: 3000 },
        { phase: 'hold' as const, duration: 2000 },
        { phase: 'exhale' as const, duration: 6000 }
      ];

      let currentPhaseIndex = 0;
      let timer: NodeJS.Timeout;

      const nextPhase = () => {
        setBreathPhase(phases[currentPhaseIndex].phase);
        timer = setTimeout(() => {
          currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
          if (currentPhaseIndex === 0) {
            setBreathCount(prev => prev + 1);
          }
          nextPhase();
        }, phases[currentPhaseIndex].duration);
      };

      nextPhase();

      return () => clearTimeout(timer);
    }
  }, [isBreathingActive]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleDayComplete = (day: number) => {
    const updated = { ...completedDays, [day]: !completedDays[day] };
    setCompletedDays(updated);
    localStorage.setItem('completedDays_burnout', JSON.stringify(updated));
  };

  const startBreathing = () => {
    setIsBreathingActive(true);
    setBreathCount(0);
  };

  const stopBreathing = () => {
    setIsBreathingActive(false);
    setBreathPhase('inhale');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUsername === username && inputPassword === password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full border-2 border-amber-200"
          >
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Acceso a Guía
              </h1>
              <p className="text-gray-600 font-light">
                Burnout
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Usuario
                </label>
                <input
                  type="text"
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Ingresa tu usuario"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center font-semibold">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Acceder a mi Guía
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  const dailyPlan = [
    {
      day: 1,
      title: 'Aceptar y soltar la lucha',
      activities: [
        'Mano en el corazón + respiración 3-6 por 3 min',
        'Repetir suavemente: "No tengo que poder hoy."',
        'Elegí una sola tarea pequeña',
        'Si te cansás, parás. Sin culpa.'
      ]
    },
    {
      day: 2,
      title: 'Descansar sin permiso',
      activities: [
        '20 minutos de descanso sin pantalla',
        'Luz suave + silencio o música suave',
        'Escribir: "Estoy aprendiendo a escuchar mi cuerpo."'
      ]
    },
    {
      day: 3,
      title: 'Movimiento sin objetivo',
      activities: [
        '10 min de caminata lenta',
        'Estiramiento de espalda y pecho',
        'Aromaterapia o ducha tibia',
        'Te movés para sentir, no para rendir.'
      ]
    },
    {
      day: 4,
      title: 'Recuperar un sentido chiquito',
      activities: [
        'Pregunta: "¿Qué me da micro placer?"',
        'Elegir algo pequeño: música, luz cálida, té, olor, textura',
        'Sentirse no vuelve de golpe — vuelve en chispas.'
      ]
    },
    {
      day: 5,
      title: 'Reconectar con vos',
      activities: [
        'Escribir: "¿Quién era yo cuando tenía energía?"',
        'No para volver al pasado, sino para recordar tu ser.'
      ]
    },
    {
      day: 6,
      title: 'Estimulación suave',
      activities: [
        'Lectura ligera o journaling',
        'Conversación con alguien seguro',
        'Pequeño desafío amable (10 min)',
        'No estás volviendo a tu versión pasada — estás creando una nueva.'
      ]
    },
    {
      day: 7,
      title: 'Ceremonia de retorno',
      activities: [
        '10 minutos de silencio',
        'Respirar mano en pecho',
        'Ritual simbólico (tirar un papel, limpiar espacio, encender vela)',
        'Escribir: "Estoy aprendiendo a vivir a mi ritmo."'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Burnout
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Cuando el cuerpo frena porque fuiste fuerte demasiado tiempo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Burnout no es agotamiento.<br />
                No es cansancio.<br />
                No es falta de ganas.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Burnout es tu cuerpo tocando el freno de emergencia<br />
                después de haber sido un héroe silencioso por demasiado tiempo.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Es tu sistema nervioso diciendo:
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4 italic pl-6">
                "Hice todo lo que pude.<br />
                Ahora necesito que me cuides vos."
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                No estás fallando.<br />
                Estás llegando.<br />
                Al límite, sí — pero también a la oportunidad de reconstruirte.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Este camino no es para empujarte.<br />
                Es para abrazarte, escucharte y darte un ritmo donde puedas respirar otra vez.
              </p>
              <p className="text-xl text-gray-700 font-semibold text-center mt-8">
                Hoy empieza tu regreso, no a tu productividad, sino a tu humanidad.
              </p>
              <p className="text-xl text-amber-600 font-bold text-center mt-4">
                Respirá — estás volviendo a casa.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Qué es, cómo se siente y qué provoca?
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-3" />
                  Qué es
                </h3>
                <p className="text-gray-700 font-light leading-relaxed mb-3">
                  Burnout es un estado de agotamiento emocional, mental y físico causado por sostener demasiado, por demasiado tiempo, sin suficiente recuperación emocional y nerviosa.
                </p>
                <p className="text-gray-900 font-semibold">
                  Es haber estado en alerta tanto tiempo que tu sistema se apagó para sobrevivir.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200">
                <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Cómo se siente
                </h3>
                <ul className="space-y-3">
                  {[
                    'Cansancio que no se va durmiendo',
                    'Apatía o baja sensibilidad emocional',
                    'Falta de motivación, incluso para cosas que amabas',
                    'Sensación de estar desconectado de vos mismo',
                    'Mente lenta, mirada perdida, silencio interno pesado',
                    'Distancia con otras personas',
                    'Ganas de desaparecer por un rato',
                    'No tristeza profunda — sino vacío profundo'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-900 font-semibold mt-6 text-center">
                  Burnout es no poder, no no querer.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Qué provoca si no se trata
                </h3>
                <ul className="space-y-3">
                  {[
                    'Bloqueo existencial',
                    'Desconexión personal y social',
                    'Baja autoestima y sentido de eficacia',
                    'Somatización (dolores físicos)',
                    'Pérdida de creatividad y disfrute',
                    'Distorsión de identidad (no reconocerte)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-3 font-bold">⚠</span>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-900 font-semibold mt-6 text-center">
                  Esto no es fin. Es reinicio necesario.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Qué NO significa
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ No significa:</h3>
                <ul className="space-y-2">
                  {[
                    'pereza',
                    'falta de agradecimiento',
                    'falta de ambición',
                    '"te rendiste"',
                    'que nunca vas a recuperar tu energía'
                  ].map((item, index) => (
                    <li key={index} className="text-gray-700 font-light">❌ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Significa:</h3>
                <ul className="space-y-2">
                  {[
                    'tu cuerpo llegó a su límite humano',
                    'tu sistema te está protegiendo',
                    'necesitás recuperación profunda, no disciplina',
                    'tu valor sigue intacto',
                    'hay una versión tuya más viva esperando del otro lado'
                  ].map((item, index) => (
                    <li key={index} className="text-gray-700 font-light">✅ {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 space-y-3 text-center">
              <p className="text-xl text-gray-900 font-bold">
                Burnout no destruye tu esencia — la revela.
              </p>
              <p className="text-xl text-gray-900 font-bold">
                Te vuelve honesto.
              </p>
              <p className="text-xl text-gray-900 font-bold">
                Te devuelve a lo esencial.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200"
          >
            <div className="text-center mb-8">
              <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Plan Día a Día
              </h2>
              <p className="text-gray-600 font-light">
                7 días para restaurar energía emocional y sentido interno
              </p>
            </div>

            <div className="space-y-4">
              {dailyPlan.map((dayData) => {
                const isExpanded = expandedSections[`day${dayData.day}`];
                const isCompleted = completedDays[dayData.day];

                return (
                  <div
                    key={dayData.day}
                    className={`bg-gradient-to-r ${
                      isCompleted
                        ? 'from-green-50 to-emerald-50 border-green-300'
                        : 'from-orange-50 to-amber-50 border-amber-200'
                    } rounded-2xl border-2 transition-all`}
                  >
                    <div className="p-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleSection(`day${dayData.day}`)}
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`w-12 h-12 rounded-full ${
                            isCompleted ? 'bg-green-500' : 'bg-amber-500'
                          } flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                            {dayData.day}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900">{dayData.title}</h3>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDayComplete(dayData.day);
                            }}
                            className={`p-2 rounded-full transition-colors ${
                              isCompleted
                                ? 'bg-green-500 text-white'
                                : 'bg-white text-amber-600 hover:bg-amber-50'
                            }`}
                          >
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                          </button>
                          {isExpanded ? <ChevronUp className="w-5 h-5 md:w-6 md:h-6" /> : <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />}
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="bg-white rounded-xl p-6 border border-amber-200">
                              <ul className="space-y-3">
                                {dayData.activities.map((activity, index) => (
                                  <li key={index} className="flex items-start">
                                    <Sparkles className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-light">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-200"
          >
            <div className="text-center mb-8">
              <Wind className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Ejercicio de Respiración
              </h2>
              <p className="text-gray-600 font-light">
                Técnica 3-2-6 para calmar el sistema nervioso
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200">
              {!isBreathingActive ? (
                <div className="text-center">
                  <p className="text-gray-700 font-light mb-6">
                    Inhala 3 segundos → Sostén 2 segundos → Exhala 6 segundos
                  </p>
                  <button
                    onClick={startBreathing}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Comenzar</span>
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-8">
                    <motion.div
                      animate={{
                        scale: breathPhase === 'inhale' ? 1.3 : breathPhase === 'hold' ? 1.3 : 1,
                      }}
                      transition={{ duration: breathPhase === 'inhale' ? 3 : breathPhase === 'exhale' ? 6 : 2 }}
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center"
                    >
                      <Wind className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>

                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    {breathPhase === 'inhale' && 'Inhala profundo'}
                    {breathPhase === 'hold' && 'Sostén'}
                    {breathPhase === 'exhale' && 'Exhala lento'}
                  </p>

                  <p className="text-lg text-gray-600 mb-6">
                    Ciclos completados: {breathCount}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={stopBreathing}
                      className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-all inline-flex items-center space-x-2"
                    >
                      <Pause className="w-5 h-5" />
                      <span>Detener</span>
                    </button>
                    <button
                      onClick={() => setBreathCount(0)}
                      className="bg-gray-500 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-600 transition-all inline-flex items-center space-x-2"
                    >
                      <RotateCcw className="w-5 h-5" />
                      <span>Reiniciar</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200 mb-12"
          >
            <div className="text-center mb-8">
              <Book className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Ejercicios Prácticos y Técnicas
              </h2>
              <p className="text-gray-600 font-light">
                Herramientas para soltar la exigencia y recuperar humanidad
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🛑',
                  title: 'Técnica "Basta por hoy"',
                  description: 'Decir literalmente: "Hoy no me exijo."',
                  detail: 'Tu sistema necesita escuchar eso.'
                },
                {
                  icon: '🫂',
                  title: 'Autoabrazo nervioso',
                  description: 'Cruzar brazos, tocar hombros, respirar lento',
                  detail: 'Activa oxitocina → calma y seguridad interna.'
                },
                {
                  icon: '🫧',
                  title: 'Soltar a tierra',
                  description: 'Escribir pensamientos → romper papel → tirar',
                  detail: 'Ritual de descarga simbólica.'
                }
              ].map((technique, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{technique.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{technique.title}</h3>
                      <p className="text-gray-700 font-semibold mb-2">{technique.description}</p>
                      <p className="text-gray-600 font-light">{technique.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-200 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Reflexiones Guiadas
            </h2>
            <p className="text-center text-gray-600 font-light mb-8">
              Journal diario para reconectar con tu esencia
            </p>

            <div className="space-y-6">
              {[
                {
                  question: '¿Dónde me perdí a mí mismo tratando de cumplir?',
                  placeholder: 'Ejemplo: "Me perdí cuando empecé a priorizar todo menos mi bienestar..."'
                },
                {
                  question: '¿Qué parte de mí está pidiendo descanso hace tiempo?',
                  placeholder: 'Ejemplo: "Mi mente está pidiendo descanso de la sobre exigencia..."'
                },
                {
                  question: '¿Qué me merecía antes y me sigo mereciendo ahora?',
                  placeholder: 'Ejemplo: "Me merezco tiempo para descansar sin sentir culpa..."'
                },
                {
                  question: '¿Qué es éxito si no hay salud interna?',
                  placeholder: 'Ejemplo: "El éxito sin salud interna es solo una cáscara vacía..."'
                }
              ].map((item, index) => (
                <JournalInput
                  key={index}
                  prompt={item.question}
                  placeholder={item.placeholder}
                  storageKey={`burnout_reflexion${index + 1}`}
                />
              ))}

              <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 text-center border border-amber-300">
                <p className="text-amber-900 font-semibold">
                  Mi descanso es legítimo. Mi valor no está en mi energía.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200 mb-12"
          >
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Regulación Emocional Inmediata
              </h2>
              <p className="text-gray-600 font-light">
                Métodos rápidos para bajar la activación
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '💗', text: 'Mano en pecho + suspiro largo' },
                { icon: '💧', text: 'Agua tibia en manos o té lento' },
                { icon: '💡', text: 'Luz cálida y respiración nasal' },
                { icon: '🪑', text: 'Sentarte con espalda apoyada y pies en el suelo' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{item.icon}</span>
                    <p className="text-gray-800 font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 text-center border border-blue-300">
              <p className="text-blue-900 font-bold text-lg">
                Frase ancla: "Estoy a salvo. Estoy bajando."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-green-200 mb-12"
          >
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Herramientas para Recuperar Claridad y Energía
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">✅ Micrometas</h3>
                <p className="text-gray-700 font-light">
                  5 min → descanso
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">✅ Eliminar ruido</h3>
                <p className="text-gray-700 font-light">
                  Notificaciones, exigencias
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">✅ Sentir el cuerpo antes de decidir</h3>
                <p className="text-gray-700 font-light">
                  Conectar con sensaciones físicas antes de actuar
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">✅ Practicar decir "no por ahora"</h3>
                <p className="text-gray-700 font-light">
                  Establecer límites suaves
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">✅ Socializar suave</h3>
                <p className="text-gray-700 font-light">
                  Con personas que calman
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4 text-center border border-green-300">
              <p className="text-green-900 font-bold">
                Tu energía vuelve cuando vos volvés a vos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center"
          >
            <Flame className="w-16 h-16 mx-auto mb-6 opacity-80" />

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Burnout no es final.<br />
              Es pausa sagrada.
            </p>

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Es la vida diciendo<br />
              "Ya diste demasiado hacia afuera — ahora volvé hacia adentro."
            </p>

            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
              No estás perdiendo poder.<br />
              Estás aprendiendo a usarlo de otra forma.
            </p>

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Cada respiración lenta, cada pausa, cada gesto amable<br />
              es un ladrillo en la casa nueva que estás construyendo adentro tuyo.
            </p>

            <p className="text-xl md:text-2xl font-bold mb-8">
              Volvés no cuando estás listo —<br />
              volvés cuando empezás suave.
            </p>

            <p className="text-2xl md:text-3xl font-bold">
              Y hoy empezaste.
            </p>

            <p className="text-xl md:text-2xl font-light mt-6">
              Bienvenido a tu renacer lento, humano y verdadero.
            </p>
          </motion.div>

        </div>
      </div>

      <footer className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
          © 2025 MasDopamina | Tu bienestar mental importa
        </div>
      </footer>
    </div>
  );
}
