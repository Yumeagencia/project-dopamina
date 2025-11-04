import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Calendar, Heart, Brain, Wind, CheckCircle, Play, Pause, RotateCcw, ChevronDown, ChevronUp, Sparkles, Shield, Book, Target, Battery } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EstresCronico() {
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

  const username = 'estrescronico';
  const password = 'estrescronico789';

  useEffect(() => {
    const saved = localStorage.getItem('completedDays_estrescronico');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }

    const justPaid = localStorage.getItem('justPaidEstresCronico');
    if (justPaid === 'true') {
      setIsAuthenticated(true);
      localStorage.removeItem('justPaidEstresCronico');
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
    localStorage.setItem('completedDays_estrescronico', JSON.stringify(updated));
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full border-2 border-gray-200"
          >
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Acceso a Guía
              </h1>
              <p className="text-gray-600 font-light">
                Estrés Crónico
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-500 focus:outline-none transition-colors"
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
                className="w-full bg-gradient-to-r from-gray-700 to-slate-700 text-white py-4 rounded-xl font-bold text-lg hover:from-gray-800 hover:to-slate-800 transition-all shadow-lg hover:shadow-xl"
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
      title: 'Bajar la guardia interna',
      activities: [
        'Respiración 3-6 por 5 minutos',
        'Manos en el pecho y abdomen, ojos cerrados',
        'Suspiro profundo 5 veces',
        'Pregunta: "¿Qué parte de mí está cansada de sostener?"'
      ]
    },
    {
      day: 2,
      title: 'Movimiento suave',
      activities: [
        'Caminata lenta 10-15 minutos',
        'Estiramiento de pecho, cadera y hombros',
        'Música relajante y respiración libre',
        'Actitud: me muevo como si cuidara a alguien querido'
      ]
    },
    {
      day: 3,
      title: 'Descanso real',
      activities: [
        '20 minutos de descanso consciente (no pantallas)',
        'Té o agua tibia + respiración suave',
        'Permiso interno: "No hacer también es necesario."'
      ]
    },
    {
      day: 4,
      title: 'Reconstruir energía',
      activities: [
        'Exposición a luz natural',
        'Movimientos circulares articulares (cuello, hombros, cadera)',
        'Comer lento una comida',
        'Escritura: "Hoy mi energía se usa sólo en lo esencial."'
      ]
    },
    {
      day: 5,
      title: 'Recuperar dirección',
      activities: [
        'Elegir solo 1 intención del día',
        'Tarea mínima (5-10 min máximo)',
        'Lista "esto puede esperar"',
        'Microcelebración por cumplir'
      ]
    },
    {
      day: 6,
      title: 'Reconectar con disfrute',
      activities: [
        'Música preferida, aroma o luz cálida',
        'Recordar algo que te hacía sentir bien',
        'Hacer 1 actividad de disfrute pequeño (aunque no tengas ganas)',
        'El placer vuelve cuando lo invitás, no cuando lo necesitás.'
      ]
    },
    {
      day: 7,
      title: 'Integración',
      activities: [
        '10 minutos en silencio',
        'Escribir: "Hoy elegí cuidar mi energía así: ___"',
        'Respiración + manos en el pecho',
        'El cuerpo aprende la calma a través de repetición suave.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Estrés Crónico
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Cuando la energía no vuelve y la vida se vuelve pesada en cámara lenta
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
                El estrés crónico no llega como un golpe.<br />
                Llega como una acumulación silenciosa de días pesados,<br />
                de responsabilidades que nunca terminan,<br />
                de tensión que se vuelve costumbre,<br />
                de emociones que no tuvieron espacio para respirarse.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Un día te despertás<br />
                y ya no se trata de estar cansado:<br />
                se trata de sentir que lo interno se quedó sin aire.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                No es que no puedas más.<br />
                Es que llevás demasiado tiempo pudiendo.
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Y tu cuerpo — leal, fiel, valiente —<br />
                te dice: "Ya no quiero sobrevivir. Quiero volver a vivir."
              </p>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Este programa no es para apurarte.<br />
                Es para ablandarte.<br />
                Para devolverte a vos.<br />
                Para enseñarte un ritmo donde haya espacio para tu humanidad.
              </p>
              <p className="text-xl text-gray-700 font-semibold text-center mt-8">
                Respirá. No estás roto. Estás volviendo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Qué es, cómo se siente y qué provoca?
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-700 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-3" />
                  Qué es
                </h3>
                <p className="text-gray-700 font-light leading-relaxed mb-3">
                  Estrés crónico es un estado prolongado de activación interna donde el sistema nervioso nunca logra apagarse del todo.
                </p>
                <p className="text-gray-700 font-light leading-relaxed mb-3">
                  Es estar encendido por dentro incluso cuando estás quieto.
                </p>
                <p className="text-gray-900 font-semibold">
                  La alarma dejó de sonar, pero nunca se apagó.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-slate-700 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Cómo se siente
                </h3>
                <ul className="space-y-3">
                  {[
                    'Fatiga constante, incluso con descanso',
                    'Mente lenta, energía baja',
                    'Dificultad para concentrarse',
                    'Emociones planas o irritabilidad sin motivo claro',
                    'Tensión muscular continua',
                    'Sensación de cargar peso invisible',
                    'Falta de motivación, pero no falta de deseo',
                    'Necesidad de silencio o aislamiento'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 font-light mt-6 italic">
                  Es sentirse lejos de uno mismo, como si la vida estuviera pasando y vos estuvieras mirando desde afuera.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Qué provoca si no se atiende
                </h3>
                <ul className="space-y-3">
                  {[
                    'Burnout',
                    'Falta de disfrute',
                    'Problemas de sueño',
                    'Desgaste emocional profundo',
                    'Aislamiento',
                    'Menor capacidad de manejar emociones',
                    'Desconexión del propósito'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-3 font-bold">⚠</span>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-900 font-semibold mt-6 text-center">
                  El estrés crónico no es ruido. Es silencio pesado adentro de uno.
                </p>
                <p className="text-gray-600 font-light mt-2 text-center">
                  Y eso no se fuerza. Se desarma con suavidad.
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
                    'debilidad',
                    'incapacidad',
                    'falta de disciplina',
                    'depresión automática',
                    'ser alguien "apático"'
                  ].map((item, index) => (
                    <li key={index} className="text-gray-700 font-light">❌ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Significa:</h3>
                <ul className="space-y-2">
                  {[
                    'tu sistema dio todo lo que tenía',
                    'fuiste fuerte por demasiado tiempo',
                    'necesitás restauración, no exigencia',
                    'tu cuerpo pide descanso profundo',
                    'estás en transición, no en caída'
                  ].map((item, index) => (
                    <li key={index} className="text-gray-700 font-light">✅ {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 space-y-3 text-center">
              <p className="text-xl text-gray-900 font-bold">
                Tu sensibilidad es fuerza.
              </p>
              <p className="text-xl text-gray-900 font-bold">
                Tu pausa es sabiduría.
              </p>
              <p className="text-xl text-gray-900 font-bold">
                Tu lentitud es necesidad biológica, no fracaso.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
          >
            <div className="text-center mb-8">
              <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Plan Día a Día
              </h2>
              <p className="text-gray-600 font-light">
                7 días para salir del modo supervivencia
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
                        : 'from-slate-50 to-gray-50 border-gray-200'
                    } rounded-2xl border-2 transition-all`}
                  >
                    <div className="p-6">
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleSection(`day${dayData.day}`)}
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`w-12 h-12 rounded-full ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-600'
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
                                : 'bg-white text-gray-600 hover:bg-gray-100'
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
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                              <ul className="space-y-3">
                                {dayData.activities.map((activity, index) => (
                                  <li key={index} className="flex items-start">
                                    <Sparkles className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
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
            className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-200"
          >
            <div className="text-center mb-8">
              <Wind className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Ejercicio de Respiración
              </h2>
              <p className="text-gray-600 font-light">
                Técnica 3-2-6 para bajar la guardia interna
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
                    className="bg-gradient-to-r from-blue-600 to-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-slate-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
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
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-slate-500 flex items-center justify-center"
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
              <Book className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Ejercicios Prácticos y Técnicas
              </h2>
              <p className="text-gray-600 font-light">
                Herramientas para desarmar la tensión crónica
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '🌿',
                  title: 'Técnica "modo lento"',
                  description: 'Durante 10 minutos, hacé todo más lento',
                  detail: 'Caminar, respirar, mover manos, hablar. Cambia tu química interna.'
                },
                {
                  icon: '🪶',
                  title: 'Técnica "peso fuera del cuerpo"',
                  description: 'Escribir todo lo que pesa en papel',
                  detail: 'Después decir: "Esto no vive más en mi cuerpo."'
                },
                {
                  icon: '💆‍♂️',
                  title: 'Autotoque regulador',
                  description: 'Tocar brazos o pecho lentamente',
                  detail: 'Activa el nervio vago → calma inmediata.'
                }
              ].map((technique, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border border-gray-200">
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
              Journal diario para restaurar energía interna
            </p>

            <div className="space-y-6">
              {[
                {
                  question: '¿Qué parte de mi vida necesita descanso?',
                  placeholder: 'Ejemplo: "Mi mente necesita descanso de la preocupación constante..."'
                },
                {
                  question: '¿Dónde estoy apurando mi alma para alcanzar mi agenda?',
                  placeholder: 'Ejemplo: "Estoy apurando mi necesidad de estar tranquilo para cumplir con..."'
                },
                {
                  question: '¿Qué estoy sosteniendo que ya no necesito sostener?',
                  placeholder: 'Ejemplo: "Estoy sosteniendo la responsabilidad de hacer feliz a todos..."'
                },
                {
                  question: '¿Dónde puedo ser más suave conmigo hoy?',
                  placeholder: 'Ejemplo: "Puedo ser más suave con mis expectativas sobre..."'
                }
              ].map((item, index) => (
                <JournalInput
                  key={index}
                  prompt={item.question}
                  placeholder={item.placeholder}
                  storageKey={`estrescronico_reflexion${index + 1}`}
                />
              ))}

              <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 text-center border border-purple-300">
                <p className="text-purple-800 font-semibold">
                  Mi valor no depende de mi velocidad.
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
                Métodos rápidos para activar calma
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '��', text: 'Respiración con exhalación más larga' },
                { icon: '💧', text: 'Agua fría en manos o cara' },
                { icon: '👁️', text: 'Mirar a un punto estático por 30-60 segundos' },
                { icon: '💆', text: 'Mover cuello y hombros' },
                { icon: '😮‍💨', text: 'Suspiro largo' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{item.icon}</span>
                    <p className="text-gray-800 font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-slate-100 to-gray-100 rounded-xl p-6 text-center border border-gray-300">
              <p className="text-gray-900 font-bold text-lg">
                Repetí internamente: "Estoy a salvo en este momento."
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
              <Battery className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Herramientas para Recuperar Claridad y Energía
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Micro-energía</h3>
                <p className="text-gray-700 font-light">
                  Estiramientos lentos + té tibio
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Reinicio natural</h3>
                <p className="text-gray-700 font-light">
                  Luz natural + aire fresco
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Detox suave</h3>
                <p className="text-gray-700 font-light">
                  Detox suave de estimulación (menos pantallas)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Micro-organización</h3>
                <p className="text-gray-700 font-light">
                  1 cosa por vez
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-700 mb-3">✅ Micro-ganancias</h3>
                <p className="text-gray-700 font-light">
                  5 minutos de foco → descanso
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 text-center border border-amber-300">
              <p className="text-amber-900 font-bold">
                Todo lo pequeño se vuelve grande cuando se sostiene.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-gray-700 to-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center"
          >
            <Battery className="w-16 h-16 mx-auto mb-6 opacity-80" />

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              El estrés crónico no es un ruido fuerte.<br />
              Es un susurro de cansancio que pide descanso, no fuerza.
            </p>

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Hoy empezaste a escucharlo.<br />
              Eso ya es sanación.
            </p>

            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
              No necesitas empujar.<br />
              Necesitas soltar, respirar, y volver a ser tu ritmo.
            </p>

            <p className="text-lg md:text-xl font-light mb-6 leading-relaxed">
              Tu energía no está perdida.<br />
              Está recuperándose.
            </p>

            <p className="text-xl md:text-2xl font-bold mb-8">
              Y vos estás volviendo, lento pero verdadero, a vos mismo.
            </p>

            <p className="text-2xl md:text-3xl font-bold">
              No corrás.<br />
              Agradecé que por fin paraste.
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
