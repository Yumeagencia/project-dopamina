import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Calendar, Heart, Brain, Wind, CheckCircle, Play, Pause, RotateCcw, ChevronDown, ChevronUp, Sparkles, Shield, Book, Target, Waves } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EstresEpisodico() {
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

  const username = 'estresacumulado';
  const password = 'estresacumulado456';

  useEffect(() => {
    const saved = localStorage.getItem('completedDays_estresepisodico');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }

    const justPaid = localStorage.getItem('justPaidEstresEpisodico');
    if (justPaid === 'true') {
      setIsAuthenticated(true);
      localStorage.removeItem('justPaidEstresEpisodico');
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
    localStorage.setItem('completedDays_estresepisodico', JSON.stringify(updated));
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full border-2 border-teal-100"
          >
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Acceso a Guía
              </h1>
              <p className="text-gray-600 font-light">
                Estrés Acumulado
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
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
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
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
      title: 'Reset del ritmo interno',
      activities: [
        'Respiración 4-6 por 5 minutos',
        'Limpiar pendientes mentales con Brain Dump',
        'Identificar 1 sola tarea importante del día',
        'Ritual de cierre: "Hoy no cargo más de lo necesario."'
      ]
    },
    {
      day: 2,
      title: 'Desaceleración física',
      activities: [
        'Caminata lenta de 10 minutos',
        'Estiramientos de espalda, cuello y caderas',
        'Practicar ritmo lento: comer lento + hablar lento por 5 minutos',
        'Nota mental: "Mi ritmo lo elijo yo."'
      ]
    },
    {
      day: 3,
      title: 'Pausas que curan',
      activities: [
        '3 pausas conscientes de 2 minutos',
        'Técnica 5 sentidos para volver al presente',
        'Eliminar una obligación innecesaria hoy'
      ]
    },
    {
      day: 4,
      title: 'Liberación emocional suave',
      activities: [
        'Escribir emociones sin censura (5 min)',
        'Respiración profunda + exhalación con sonido',
        'Elegir un límite suave para cuidarte'
      ]
    },
    {
      day: 5,
      title: 'Recuperar enfoque',
      activities: [
        'Método 1 cosa a la vez',
        '20 minutos de enfoque, 10 de pausa',
        'Eliminar multitasking'
      ]
    },
    {
      day: 6,
      title: 'Reconectar con placer y calma',
      activities: [
        '1 actividad placentera corta (no productiva)',
        'Contacto físico: pecho + abdomen, respiración suave',
        'Sonido, música o aroma reparador'
      ]
    },
    {
      day: 7,
      title: 'Integración y quietud',
      activities: [
        '10 min de silencio',
        'Escribir: "lo que solté esta semana"',
        'Visualizar una vida con más espacio interno'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Estrés Acumulado
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Cuando los picos de tensión se repiten y tu sistema no llega a recuperarse
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Hay un tipo de estrés que no llega como tormenta explosiva.<br />
                Llega como olas que vuelven, una y otra vez.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Cuando parece que ya te calmás…<br />
                vuelve otra tensión. Otro pendiente. Otro pensamiento. Otra exigencia.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Y tu cuerpo, que antes respondía rápido,<br />
                ahora empieza a sentirse cargado, cansado, reactivo.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Eso no es falla personal.<br />
                Es señal de que estuviste en modo alerta más tiempo del que tu sistema puede sostener.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                No estás perdiendo fortaleza.<br />
                Estás llegando al límite natural del ser humano que siente, sostiene y enfrenta demasiado sin pausas reales.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Hoy no buscamos "ser más fuerte".<br />
                Buscamos descargar peso acumulado y recuperar tu capacidad de respiro interno.
              </p>
              <p className="text-xl text-teal-700 font-semibold text-center mt-8">
                A veces, la verdadera fuerza no es resistir más, sino permitirse descansar y sanar.
              </p>
              <p className="text-2xl text-center text-gray-900 font-bold mt-6">
                Bienvenido a tu reinicio.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-teal-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Qué es, cómo se siente y qué provoca?
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-teal-200">
                <h3 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-3" />
                  Qué es
                </h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Estrés acumulado es un ciclo repetitivo de micro tensiones y preocupaciones que tu cuerpo no llega a procesar antes del siguiente estímulo.
                </p>
                <p className="text-gray-900 font-semibold mt-4">
                  Resultado: El sistema nervioso nunca vuelve completamente al estado de calma.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-teal-200">
                <h3 className="text-2xl font-bold text-cyan-700 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Cómo se siente
                </h3>
                <ul className="space-y-3">
                  {[
                    'Sensación constante de "algo por resolver"',
                    'Nudo interno o presión en pecho/estómago',
                    'Dificultad para desconectar mentalmente',
                    'Sueño menos reparador',
                    'Irritabilidad intermitente',
                    'Claridad fluctuante: días buenos, días borrosos',
                    'Necesidad constante de "estar en control"',
                    'Cansancio emocional intermitente'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Qué provoca si no se trata
                </h3>
                <ul className="space-y-3">
                  {[
                    'Ansiedad creciente',
                    'Desregulación emocional',
                    'Dificultad para descansar de verdad',
                    'Menor capacidad de enfocarse',
                    'Agotamiento progresivo',
                    'Sensación de estar "al borde" emocional'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-3 font-bold">⚠</span>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-900 font-semibold mt-6 text-center">
                  Esto no es caos. Es tu sistema nervioso pidiendo espacio para procesar y soltar.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Qué NO significa
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-4">❌ No significa:</h3>
                <ul className="space-y-2">
                  {[
                    'que seas débil',
                    'que no puedas manejar tu vida',
                    'que seas demasiado sensible',
                    'que "te faltan ganas"',
                    'que seas ineficiente'
                  ].map((item, index) => (
                    <li key={index} className="text-gray-700 font-light">❌ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Significa:</h3>
                <ul className="space-y-2">
                  {[
                    'estás sosteniendo demasiado',
                    'tu cuerpo está defendiendo tu energía',
                    'sos alguien que se esfuerza por hacer lo correcto',
                    'necesitás liberar tensión, no añadir más presión',
                    'te merecés descanso, no exigencia'
                  ].map((item, index) => (
                    <li key={index} className="text-gray-700 font-light">✅ {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xl text-center text-gray-900 font-bold mt-8">
              Esto no te hace frágil. Te hace humano.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
          >
            <div className="text-center mb-8">
              <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Plan Día a Día
              </h2>
              <p className="text-gray-600 font-light">
                7 días para cortar ciclos recurrentes de tensión
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
                        : 'from-teal-50 to-cyan-50 border-teal-200'
                    } rounded-2xl border-2 transition-all`}
                  >
                    <div className="p-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleSection(`day${dayData.day}`)}
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`w-12 h-12 rounded-full ${
                            isCompleted ? 'bg-green-500' : 'bg-teal-600'
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
                                : 'bg-white text-teal-600 hover:bg-teal-100'
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
                            <div className="bg-white rounded-xl p-6 border border-teal-200">
                              <ul className="space-y-3">
                                {dayData.activities.map((activity, index) => (
                                  <li key={index} className="flex items-start">
                                    <Sparkles className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
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
            className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-cyan-200"
          >
            <div className="text-center mb-8">
              <Wind className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Ejercicio de Respiración
              </h2>
              <p className="text-gray-600 font-light">
                Técnica 4-2-6 para restablecer calma interna
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-cyan-200">
              {!isBreathingActive ? (
                <div className="text-center">
                  <p className="text-gray-700 font-light mb-6">
                    Inhala 4 segundos → Sostén 2 segundos → Exhala 6 segundos
                  </p>
                  <button
                    onClick={startBreathing}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
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
                      transition={{ duration: breathPhase === 'inhale' ? 4 : breathPhase === 'exhale' ? 6 : 2 }}
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center"
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
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-12"
          >
            <div className="text-center mb-8">
              <Book className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Ejercicios Prácticos y Técnicas
              </h2>
              <p className="text-gray-600 font-light">
                Herramientas para cortar ciclos de tensión
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🌀',
                  title: 'Técnica del Vaciar Interno',
                  description: 'Escribí: Preocupaciones, Pendientes, Emociones',
                  detail: 'Cerrá con: "Puedo soltar esto por ahora."'
                },
                {
                  icon: '💧',
                  title: 'Técnica de Descarga Física',
                  description: 'Sacudir brazos y manos 30 seg',
                  detail: 'Exhalar fuerte 3 veces'
                },
                {
                  icon: '🧊',
                  title: 'Técnica Sensorial para reset',
                  description: 'Agua fría en muñecas o rostro por 10-15 segundos',
                  detail: 'Activa respuesta de calma inmediata'
                },
                {
                  icon: '✋',
                  title: 'Técnica "No ahora"',
                  description: 'Cuando aparezca pensamiento intrusivo: "Después veo eso."',
                  detail: 'Tu mente obedece cuando siente dirección, no tensión.'
                }
              ].map((technique, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
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
              Journal diario para liberar peso emocional
            </p>

            <div className="space-y-6">
              {[
                {
                  question: '¿Qué emociones estuve apretando últimamente?',
                  placeholder: 'Ejemplo: "Estuve apretando la frustración por no llegar a todo..."'
                },
                {
                  question: '¿Qué peso emocional llevo que ya no me sirve?',
                  placeholder: 'Ejemplo: "Llevo la culpa de no ser perfecto en todo momento..."'
                },
                {
                  question: '¿Qué podría permitirme soltar?',
                  placeholder: 'Ejemplo: "Podría soltar la expectativa de tener todo bajo control..."'
                },
                {
                  question: '¿Qué necesito para sentirme más ligero?',
                  placeholder: 'Ejemplo: "Necesito permitirme descansar sin sentir culpa..."'
                },
                {
                  question: '¿Qué parte de mi vida pide más suavidad?',
                  placeholder: 'Ejemplo: "Mi forma de hablarme cuando cometo errores..."'
                }
              ].map((item, index) => (
                <JournalInput
                  key={index}
                  prompt={item.question}
                  placeholder={item.placeholder}
                  storageKey={`estresepisodico_reflexion${index + 1}`}
                />
              ))}

              <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 text-center border border-purple-300">
                <p className="text-purple-800 font-semibold">
                  Mi descanso también es valioso.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-12"
          >
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Regulación Emocional Inmediata
              </h2>
              <p className="text-gray-600 font-light">
                Métodos rápidos para bajar tensión
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '🫁', text: 'Respiración nasal lenta' },
                { icon: '🤗', text: 'Autoabrazo (sí, funciona neurológicamente)' },
                { icon: '☁️', text: 'Mirar el cielo o naturaleza por 60 seg' },
                { icon: '💆', text: 'Masajear sienes o mandíbula' },
                { icon: '🙆', text: 'Estirar pecho y hombros' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{item.icon}</span>
                    <p className="text-gray-800 font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl p-6 text-center border border-teal-300">
              <p className="text-teal-900 font-bold text-lg">
                Fórmula rápida: Mover + Respirar + Soltar + Validar
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-amber-200 mb-12"
          >
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Herramientas para Claridad y Energía
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Técnica 1-3-1</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 font-light">• 1 prioridad</li>
                  <li className="text-gray-700 font-light">• 3 tareas pequeñas</li>
                  <li className="text-gray-700 font-light">• 1 momento para vos</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Reinicio biológico</h3>
                <p className="text-gray-700 font-light">
                  Luz solar + agua + respiración = reinicio biológico
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Tiempo no productivo</h3>
                <p className="text-gray-700 font-light">
                  10 minutos de "nada productiva" al día
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Descanso digital</h3>
                <p className="text-gray-700 font-light">
                  Tiempo sin pantallas antes de dormir
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 text-center border border-amber-300">
              <p className="text-amber-900 font-bold">
                Pequeñas decisiones → grandes mejoras.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center"
          >
            <Waves className="w-16 h-16 mx-auto mb-6 opacity-80" />

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Cuando el estrés viene y vuelve<br />
              y vuelve, y vuelve,<br />
              no es porque estés fallando.
            </p>

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Es porque estás intentando sostener demasiado sin un espacio real para procesar.
            </p>

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Ahora empezaste ese espacio.<br />
              Eso ya es sanación.
            </p>

            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
              No necesitás escapar de tu vida.<br />
              Necesitás volver a habitarla desde adentro, con presencia, descanso, límites y compasión.
            </p>

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Cada respiración lenta<br />
              cada pausa consciente<br />
              cada momento donde elegís vos<br />
              sobre lo urgente…
            </p>

            <p className="text-xl md:text-2xl font-bold mb-8">
              es un regreso a tu centro.
            </p>

            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
              Este es el camino.<br />
              Y ya estás caminándolo.
            </p>

            <p className="text-2xl md:text-3xl font-bold">
              Respirá.<br />
              Ya no lo estás haciendo en automático.<br />
              Lo estás haciendo con intención, y eso cambia todo.
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
