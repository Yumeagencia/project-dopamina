import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Calendar, Heart, Brain, Wind, CheckCircle, Play, Pause, RotateCcw, ChevronDown, ChevronUp, Sparkles, Shield, Book, Target, Coffee } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EstresAgudo() {
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

  const username = 'estresagudo';
  const password = 'estresagudo123';

  useEffect(() => {
    const saved = localStorage.getItem('completedDays_estresagudo');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }

    // Check if user just came from payment
    const justPaid = localStorage.getItem('justPaidEstresAgudo');
    if (justPaid === 'true') {
      setIsAuthenticated(true);
      localStorage.removeItem('justPaidEstresAgudo');
    }
  }, []);

  useEffect(() => {
    if (isBreathingActive) {
      const phases = [
        { phase: 'inhale' as const, duration: 4000 },
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
    localStorage.setItem('completedDays_estresagudo', JSON.stringify(updated));
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
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 flex flex-col">
        <Header showHomeButton={true} onHomeClick={handleHomeClick} />

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-center text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Acceso a tu guía
              </h1>
              <p className="text-center text-gray-600 mb-8 font-light">
                Ingresá tus credenciales para continuar
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Usuario
                  </label>
                  <input
                    type="text"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingresá tu usuario"
                    required
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingresá tu contraseña"
                    required
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-3 text-center"
                  >
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Acceder
                </button>
              </form>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => navigate('/test-estres')}
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                >
                  ¿Aún no tenés tus credenciales? Hacé tu test aquí
                </button>

                <p className="text-sm text-gray-500 text-center font-light">
                  Si perdiste tus credenciales, contactanos por WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const breathingMessages = {
    inhale: 'Inhalá profundo',
    hold: 'Sostené',
    exhale: 'Exhalá lento'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <Header showHomeButton={true} onHomeClick={handleHomeClick} />

      <div className="px-4 py-12 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4 md:mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                <Heart className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4 px-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Guía de Estrés Agudo
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-light mb-4 md:mb-6 px-4">
              Cuando la vida aprieta rápido — y tu cuerpo reacciona para protegerte
            </p>
            <div className="flex items-center justify-center space-x-2 text-teal-700">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">7 días de recuperación guiada</span>
            </div>
          </motion.div>

          {/* Mensaje Inicial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border-2 border-blue-200 mb-8 md:mb-12"
          >
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-teal-600" />
            </div>

            <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              <p className="font-light text-center">
                Cuando el estrés llega de golpe, no es un fallo.<br />
                Es tu cuerpo activando su sistema de defensa más primitivo y poderoso:<br />
                <strong className="text-teal-700">la respuesta de emergencia.</strong>
              </p>

              <div className="my-6 border-l-4 border-teal-500 pl-6 italic text-gray-700">
                <p>El corazón acelera.</p>
                <p>La mente se activa.</p>
                <p>Todo tu cuerpo grita: "prestá atención, algo importa."</p>
              </div>

              <p className="font-light text-center">
                Eso significa algo importante:
              </p>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-teal-700 my-4 md:my-6">
                Tu cuerpo está tratando de cuidarte.
              </p>

              <p className="font-light text-center">
                Pero cuando esa reacción es más intensa o duradera de lo necesario,<br />
                no te protege — <strong>te agota.</strong>
              </p>

              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 my-4 md:my-6 border border-teal-200">
                <p className="font-light text-center text-gray-700">
                  Esta guía nace para darte lo que el estrés no:<br />
                  <strong className="text-teal-700">pausa, claridad, ritmo y control.</strong>
                </p>
              </div>

              <p className="font-light text-center">
                No viniste a sobrevivir tu mente.<br />
                Viniste a aprender a vivir adentro de ella con calma y dirección.
              </p>

              <p className="text-base sm:text-lg md:text-xl font-semibold text-center text-gray-900 mt-6 md:mt-8">
                Hoy empieza tu regreso a vos.
              </p>

              <div className="text-center mt-6">
                <p className="text-teal-600 font-light text-lg">Respirá.</p>
                <p className="text-teal-600 font-light text-lg">Estás llegando.</p>
              </div>
            </div>
          </motion.div>

          {/* Ejercicio de Respiración Interactivo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-gray-200 mb-8 md:mb-12"
          >
            <div className="text-center mb-4 md:mb-6">
              <Wind className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Respiración 4-6
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-light px-4">
                Calma tu sistema nervioso en tiempo real
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {isBreathingActive && (
                  <motion.div
                    key="breathing"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        scale: breathPhase === 'inhale' ? [0.8, 1.2] : breathPhase === 'hold' ? 1.2 : [1.2, 0.8],
                        opacity: breathPhase === 'hold' ? [1, 0.8, 1] : 1
                      }}
                      transition={{
                        duration: breathPhase === 'inhale' ? 4 : breathPhase === 'hold' ? 2 : 6,
                        ease: 'easeInOut'
                      }}
                      className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl mb-4 md:mb-6"
                    >
                      <div className="text-white text-center">
                        <Wind className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2" />
                        <p className="text-lg md:text-xl font-semibold">{breathingMessages[breathPhase]}</p>
                      </div>
                    </motion.div>

                    <p className="text-sm md:text-base text-gray-600 mb-4">Ciclo {breathCount + 1}</p>

                    <button
                      onClick={stopBreathing}
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 md:px-6 md:py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2 mx-auto text-sm md:text-base"
                    >
                      <Pause className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Detener</span>
                    </button>
                  </motion.div>
                )}

                {!isBreathingActive && (
                  <motion.div
                    key="start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="bg-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6 border border-blue-200">
                      <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
                        <strong>4 segundos</strong> inhalando<br />
                        <strong>2 segundos</strong> sosteniendo<br />
                        <strong>6 segundos</strong> exhalando
                      </p>
                    </div>

                    <button
                      onClick={startBreathing}
                      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
                    >
                      <Play className="w-5 h-5 md:w-6 md:h-6" />
                      <span>Iniciar Respiración</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-6 md:mt-8 bg-teal-50 rounded-xl p-3 md:p-4 border border-teal-200">
              <p className="text-xs md:text-sm text-teal-800 text-center font-light">
                <Shield className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                Esta técnica activa tu nervio vago y desactiva la respuesta de estrés
              </p>
            </div>
          </motion.div>

          {/* Qué es el Estrés Agudo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-gray-200 mb-8 md:mb-12"
          >
            <div className="text-center mb-6 md:mb-8">
              <Brain className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                ¿Qué es el estrés agudo?
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-light px-4">
                Cómo se siente y qué provoca
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-blue-600" />
                  Qué es
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  El estrés agudo es una <strong>respuesta rápida del cuerpo</strong> ante una demanda, cambio, desafío o amenaza percibida.
                </p>
                <p className="text-gray-700 font-light leading-relaxed mt-3">
                  Es una reacción fisiológica natural diseñada para ayudarte a responder.<br />
                  Pero si se vuelve frecuente o intenso, puede saturarte.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-red-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 mr-2 text-red-600" />
                  Cómo se siente
                </h3>
                <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                  {[
                    'Pulso acelerado',
                    'Tensión muscular',
                    'Nudo en el pecho o garganta',
                    'Pensamientos rápidos',
                    'Irritación repentina',
                    'Sensación de urgencia',
                    'Dificultad para soltar el problema'
                  ].map((symptom, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-700 font-light">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-amber-200">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 mr-2 text-amber-600" />
                  Qué provoca si no lo manejás
                </h3>
                <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                  {[
                    'Ansiedad',
                    'Dificultad para enfocarte',
                    'Problemas de sueño',
                    'Fatiga emocional',
                    'Irritabilidad',
                    'Baja tolerancia a frustración',
                    'Dificultad para tomar decisiones'
                  ].map((consequence, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-700 font-light">{consequence}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-teal-300 text-center">
                <p className="text-sm md:text-base lg:text-lg text-gray-800 font-light italic">
                  "Cuando la mente va más rápido que la vida,<br />
                  aparece el ruido interno."
                </p>
                <p className="text-teal-700 font-semibold mt-4">
                  Tu meta no es evitar el estrés.<br />
                  Es saber desactivarlo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Qué NO significa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-200 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Qué NO significa tener esta condición
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-700 mb-4">Tener estrés agudo NO significa:</h3>
                <div className="space-y-2">
                  {[
                    'Ser débil',
                    'Ser negativo',
                    '"No poder con la vida"',
                    'Ser dramático',
                    'Ser alguien emocionalmente inmaduro'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span className="text-gray-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-700 mb-4">Significa:</h3>
                <div className="space-y-2">
                  {[
                    'Tu sistema de alerta funciona',
                    'Sentís profundamente y reaccionás rápido',
                    'Te importan las cosas',
                    'Tu cuerpo quiere que estés seguro',
                    'Necesitás herramientas, no fuerza'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 text-center border-2 border-purple-300">
                <p className="text-gray-800 font-light text-lg mb-2">
                  Tu sensibilidad no es un problema.
                </p>
                <p className="text-purple-700 font-bold text-xl">
                  Es potencia mal canalizada.
                </p>
                <p className="text-gray-700 font-light mt-4">
                  Vamos a darle forma.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Plan Día por Día */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-gray-200 mb-8 md:mb-12"
          >
            <div className="text-center mb-6 md:mb-8">
              <Calendar className="w-8 h-8 md:w-12 md:h-12 text-teal-600 mx-auto mb-3 md:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Plan Día por Día
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-light px-4">
                Tu protocolo de recuperación de 7 días
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                {
                  day: 1,
                  title: 'Calma inmediata',
                  objective: 'Desactivar la reacción fisiológica',
                  color: 'blue',
                  tasks: [
                    'Respiración 4-6 por 5 minutos',
                    'Estiramiento suave cuello y hombros',
                    '10 sorbos de agua lenta'
                  ],
                  hasJournal: true,
                  journalPrompt: 'Escribí 1 oración sobre cómo te sentís ahora:',
                  journalPlaceholder: 'Ejemplo: "Estoy presente. No hay peligro real ahora."'
                },
                {
                  day: 2,
                  title: 'Frenar la mente acelerada',
                  objective: 'Bajar ruido mental',
                  color: 'teal',
                  tasks: [
                    'Técnica: Brain Dump 5 minutos',
                    'Ordenar lista en 3 categorías: Hoy / Esta semana / No importa realmente',
                    '5 minutos de caminata consciente'
                  ]
                },
                {
                  day: 3,
                  title: 'Desactivar tensión física',
                  objective: 'liberar cuerpo = liberar mente',
                  color: 'green',
                  tasks: [
                    'Técnica: Tensión & Liberación',
                    'Contraer músculos 5 sec',
                    'Soltar 10 sec × 8 ciclos',
                    'Ducha tibia consciente',
                    '10 minutos de estiramiento suave'
                  ]
                },
                {
                  day: 4,
                  title: 'Cerrar ciclos',
                  objective: 'evitar acumulación de pendientes',
                  color: 'purple',
                  tasks: [
                    'Elegir 3 tareas micro y completarlas',
                    'Técnica "1 pendiente importante o ninguno"',
                    'Ritual de cierre: "Hoy terminé lo que elegí."'
                  ]
                },
                {
                  day: 5,
                  title: 'Recuperar claridad',
                  objective: 'activar el pensamiento ejecutivo',
                  color: 'pink',
                  tasks: [
                    'Técnica: 3 preguntas',
                    '¿Qué realmente importa?',
                    '¿Qué puedo soltar?',
                    '¿Qué puedo hacer ahora?',
                    '15 min enfoque sin distracción'
                  ]
                },
                {
                  day: 6,
                  title: 'Crear seguridad interna',
                  objective: 'volver a sentir control',
                  color: 'indigo',
                  tasks: [
                    'Técnica: Anclaje físico',
                    'Mano en pecho + respiración 3-6 × 3 minutos'
                  ],
                  hasJournal: true,
                  journalPrompt: 'Escribí una afirmación de seguridad personal:',
                  journalPlaceholder: 'Ejemplo: "Puedo manejar este momento. Estoy en control."'
                },
                {
                  day: 7,
                  title: 'Integración',
                  objective: 'fortalecer rituales',
                  color: 'emerald',
                  tasks: [
                    'Repetir las herramientas que mejor funcionaron',
                    'Visualización suave de calma'
                  ],
                  hasJournal: true,
                  journalPrompt: 'Autoevaluación amable: ¿Qué cambió en mí esta semana?',
                  journalPlaceholder: 'Reflexioná sobre tu proceso, los cambios que notaste, las herramientas que te ayudaron...'
                }
              ].map((day) => {
                const isExpanded = expandedSections[`day${day.day}`];
                const isCompleted = completedDays[day.day];
                const colorClasses = {
                  blue: 'from-blue-50 to-blue-100 border-blue-300',
                  teal: 'from-teal-50 to-teal-100 border-teal-300',
                  green: 'from-green-50 to-green-100 border-green-300',
                  purple: 'from-purple-50 to-purple-100 border-purple-300',
                  pink: 'from-pink-50 to-pink-100 border-pink-300',
                  indigo: 'from-indigo-50 to-indigo-100 border-indigo-300',
                  emerald: 'from-emerald-50 to-emerald-100 border-emerald-300'
                };

                return (
                  <div key={day.day} className={`bg-gradient-to-r ${colorClasses[day.color as keyof typeof colorClasses]} rounded-xl md:rounded-2xl border-2 overflow-hidden`}>
                    <div
                      onClick={() => toggleSection(`day${day.day}`)}
                      className="p-4 md:p-6 cursor-pointer hover:bg-white/30 transition-colors active:bg-white/40"
                    >
                      <div className="flex items-start justify-between gap-2 md:gap-3">
                        <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4 flex-1 min-w-0">
                          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex-shrink-0">
                            <span className="text-lg md:text-xl font-bold text-gray-800">{day.day}</span>
                          </div>
                          <div className="flex-1 min-w-0 pt-0.5">
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 leading-tight">Día {day.day} – {day.title}</h3>
                            <p className="text-xs md:text-sm text-gray-700 font-light leading-snug mt-0.5">Objetivo: {day.objective}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5 md:space-x-2 lg:space-x-3 flex-shrink-0 pt-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDayComplete(day.day);
                            }}
                            className={`p-1.5 md:p-2 rounded-full transition-colors ${
                              isCompleted ? 'bg-green-500 text-white' : 'bg-white text-gray-400 hover:text-green-500'
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
                          <div className="px-4 md:px-6 pb-4 md:pb-6 bg-white/50 space-y-3 md:space-y-4">
                            <div className="space-y-2 md:space-y-3">
                              {day.tasks.map((task, index) => (
                                <div key={index} className="flex items-start space-x-2 md:space-x-3 bg-white rounded-lg p-2.5 md:p-3 border border-gray-200">
                                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                                  <span className="text-sm md:text-base text-gray-700 font-light leading-relaxed">{task}</span>
                                </div>
                              ))}
                            </div>

                            {day.hasJournal && (
                              <JournalInput
                                prompt={day.journalPrompt}
                                placeholder={day.journalPlaceholder}
                                storageKey={`estresagudo_day${day.day}_journal`}
                              />
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-teal-50 rounded-xl p-6 border border-teal-200 text-center">
              <Coffee className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-gray-700 font-light">
                <strong>Recordá:</strong> Completá cada día a tu propio ritmo. No hay apuro. El progreso es personal.
              </p>
            </div>
          </motion.div>

          {/* Ejercicios Prácticos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-12"
          >
            <div className="text-center mb-8">
              <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Ejercicios Prácticos y Técnicas Mentales
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-light px-4">
                Herramientas rápidas para usar en el momento
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🧠',
                  title: 'Técnica de interrupción mental',
                  description: '"No ahora — más tarde."',
                  detail: 'Cancela pensamiento intrusivo sin pelear.'
                },
                {
                  icon: '📎',
                  title: 'Técnica del papelito',
                  description: 'Escribí la preocupación → doblás → guardás.',
                  detail: 'El cerebro siente "controlado".'
                },
                {
                  icon: '🔄',
                  title: 'Técnica 90 segundos',
                  description: 'Toda emoción intensa dura aprox 90 segundos si no la alimentás con pensamiento.',
                  detail: 'Respirá y observá, sin reaccionar.'
                }
              ].map((technique, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{technique.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{technique.title}</h3>
                      <p className="text-gray-700 font-semibold mb-2">{technique.description}</p>
                      <p className="text-sm md:text-base text-gray-600 font-light px-4">{technique.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reflexiones Guiadas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-200 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Reflexiones Guiadas
            </h2>
            <p className="text-center text-gray-600 font-light mb-8">
              Journal diario para conectar con vos mismo
            </p>

            <div className="space-y-6">
              {[
                {
                  question: '¿Qué sensación apareció en mi cuerpo hoy?',
                  placeholder: 'Ejemplo: "Sentí tensión en los hombros y el pecho apretado..."'
                },
                {
                  question: '¿Qué pudo haber querido protegerme?',
                  placeholder: 'Ejemplo: "Mi cuerpo quiso alertarme de que necesito descansar..."'
                },
                {
                  question: '¿Dónde puedo ser más amable conmigo?',
                  placeholder: 'Ejemplo: "Puedo ser más amable al aceptar que hice lo mejor que pude..."'
                },
                {
                  question: 'Hoy elijo soltar ____________',
                  placeholder: 'Ejemplo: "Hoy elijo soltar la necesidad de controlarlo todo..."'
                },
                {
                  question: 'Hoy me dio calma ____________',
                  placeholder: 'Ejemplo: "Hoy me dio calma respirar profundo y caminar..."'
                }
              ].map((item, index) => (
                <JournalInput
                  key={index}
                  prompt={item.question}
                  placeholder={item.placeholder}
                  storageKey={`estresagudo_reflexion${index + 1}`}
                />
              ))}

              <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 text-center border border-purple-300">
                <p className="text-purple-800 font-semibold">
                  El estrés baja cuando te escuchás.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Estrategias de Regulación Emocional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Estrategias de Regulación Emocional Inmediatas
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '💨', text: 'Respiración 4-6' },
                { icon: '💧', text: 'Beber agua lentamente' },
                { icon: '👁️', text: 'Mirar al horizonte 20 seg' },
                { icon: '❄️', text: 'Pausa sensorial: frío en muñecas o nuca' },
                { icon: '🤸', text: 'Microestiramientos hombros y cuello' },
                { icon: '🖐️', text: 'Técnica "5 cosas" (anclaje presente)' }
              ].map((strategy, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 border border-teal-200 flex items-center space-x-3">
                  <span className="text-3xl">{strategy.icon}</span>
                  <span className="text-gray-800 font-light">{strategy.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl p-6 text-center border-2 border-blue-300">
              <p className="text-gray-800 font-light text-lg mb-2">
                <strong>Herramienta rápida:</strong>
              </p>
              <p className="text-blue-800 font-semibold text-lg">
                Tu mente no necesita pelear.<br />
                Tu cuerpo necesita recordar que está a salvo.
              </p>
            </div>
          </motion.div>

          {/* Herramientas para Recuperar Claridad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-emerald-200 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Herramientas para Recuperar Claridad y Energía
            </h2>

            <div className="space-y-4">
              {[
                { icon: '🧾', title: 'Orden simple', description: 'Elegí 1 prioridad — no 5.' },
                { icon: '⏳', title: 'Pomodoro suave 15/5', description: 'No productividad agresiva — ritmo amable.' },
                { icon: '🚶', title: 'Movimiento lento', description: 'Caminar 10 minutos en silencio.' },
                { icon: '🎧', title: 'Sonidos de baja frecuencia', description: 'Música binaural o sonidos suaves.' }
              ].map((tool, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-emerald-200 flex items-start space-x-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{tool.title}</h3>
                    <p className="text-gray-700 font-light">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cierre Reflexivo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-teal-400 mb-12 text-white"
          >
            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-teal-200" />
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Cierre Reflexivo
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
              <p className="text-teal-100 font-light">
                El estrés no es enemigo.<br />
                Es un mensajero.
              </p>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="font-light mb-3">Te dice:</p>
                <div className="space-y-2 ml-4">
                  <p>• Algo importa</p>
                  <p>• Algo te tocó</p>
                  <p>• Algo necesita pausa o cambio</p>
                </div>
              </div>

              <p className="font-light">
                No viniste a luchar contra tu mente.<br />
                Viniste a aprender a escucharla sin obedecerla siempre.
              </p>

              <p className="font-light">
                Hoy no solo aprendiste a desactivar el estrés.<br />
                Aprendiste algo más profundo:
              </p>

              <p className="text-2xl font-bold text-center my-6 text-teal-200">
                Tu calma no está afuera — está en tu capacidad de volver a vos.
              </p>

              <p className="font-light">
                Cada vez que elegís respirar, pausar, sentir, ordenar, aceptar…<br />
                le enseñás a tu sistema nervioso que no estás en peligro.
              </p>

              <div className="text-center my-8">
                <p className="text-xl font-semibold mb-2">Eso es poder.</p>
                <p className="text-xl font-semibold mb-2">Eso es amor propio.</p>
                <p className="text-xl font-semibold">Eso es volver al control.</p>
              </div>

              <p className="font-light text-center text-xl">
                Y lo estás haciendo.
              </p>

              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm text-center">
                <p className="font-light text-lg">Respirá una vez más.</p>
                <p className="font-semibold text-xl mt-2">
                  Te estás convirtiendo en alguien más fuerte, más consciente, más libre.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mensaje Final Inspirador */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 md:p-14 shadow-2xl text-white text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-emerald-200" />

            <p className="text-xl md:text-2xl leading-relaxed font-light mb-8">
              Estás aprendiendo a regular tu mente y tu cuerpo con presencia, amor propio y conocimiento.
              Cada vez que elegís respirar, pausar o volver a vos, estás construyendo una versión más fuerte,
              más consciente y más serena de quien sos.
            </p>

            <p className="text-2xl md:text-3xl font-bold">
              Esto es autocontrol real.<br />
              Esto es sanación.<br />
              Esto es MasDopamina.
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
