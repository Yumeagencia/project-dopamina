import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Calendar, Sparkles, CheckCircle, Heart, Target, Zap, BookOpen, Home } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useNavigate } from 'react-router-dom';

export default function Agotamiento() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [currentDay, setCurrentDay] = useState(1);
  const navigate = useNavigate();

  const username = 'procrastagotamiento';
  const password = 'procrastagotamiento456';

  useEffect(() => {
    document.title = 'Guía Anti-Procrastinación: Agotamiento – MasDopamina';
  }, []);

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
        <Header showHomeButton={true} onHomeClick={handleHomeClick} />

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
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
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Acceder
                </button>
              </form>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => navigate('/antiprocrastinacion')}
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

  const days = [
    {
      day: 1,
      title: 'Reconocer y permitir',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-blue-600">Objetivo:</strong> bajar culpa y entrar en modo cuidado
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
            <p className="text-2xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Frase del día
            </p>
            <p className="text-xl text-center text-blue-700 italic font-medium">
              "Estoy cansado. Es válido."
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Acción de hoy:</h3>
            <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
              <p className="text-gray-800">✅ Mano en pecho + respiración 3–6 (3 min)</p>
              <p className="text-gray-800">✅ Decir: "Estoy cansado. Es válido."</p>
              <p className="text-gray-800">✅ Una micro-tarea (2–5 minutos máximo)</p>
              <p className="text-gray-800">✅ Terminar el día temprano</p>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 2,
      title: 'Nutrir el cuerpo lento',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-100 rounded-xl p-6 border-2 border-blue-300">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: oxigenar y reactivar sin forzar</h3>
            <p className="text-gray-800">El movimiento suave devuelve vida al cuerpo.</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Instrucciones:</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">10 minutos de caminata suave</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Beber agua tibia o té sin pantalla</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Comer algo consciente (sin prisa)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 3,
      title: 'Descanso reparador',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-blue-600">Objetivo:</strong> enseñar al cuerpo a soltar tensión
          </p>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Técnica de hoy:</h3>
            <div className="space-y-2">
              <p className="text-gray-800">✅ 20 minutos descanso sin teléfono</p>
              <p className="text-gray-800">✅ Luz baja y respiración lenta</p>
              <p className="text-gray-800">✅ Soltar mandíbula, hombros y abdomen</p>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 4,
      title: 'Micro-foco',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: recuperar la sensación de "puedo"</h3>
            <p className="text-gray-700">Hoy vas a reconocer conscientemente que los pequeños pasos también cuentan.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-blue-200">
                <p className="text-gray-800">⏱️ Timer 5 minutos</p>
                <p className="text-gray-800">✅ Una única tarea pequeña</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <p className="text-xl text-center text-blue-700 font-medium italic">
              "Pequeño también cuenta."
            </p>
          </div>
        </div>
      )
    },
    {
      day: 5,
      title: 'Recuperar placer suave',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-blue-600">Objetivo:</strong> despertar dopamina sana
          </p>

          <p className="text-lg text-gray-800 leading-relaxed">
            La energía vuelve cuando el placer vuelve.
          </p>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Elegir una micro-actividad placentera:</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 border-2 border-blue-200 text-center">
                <p className="text-gray-800 font-medium">🚶 Mover el cuerpo suave</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-blue-200 text-center">
                <p className="text-gray-800 font-medium">🎵 Música favorita</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-blue-200 text-center">
                <p className="text-gray-800 font-medium">💧 Agua caliente</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-blue-200 text-center">
                <p className="text-gray-800 font-medium">☀️ Luz natural</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 6,
      title: 'Reconectar propósito',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: encender motivación correcta</h3>
            <p className="text-gray-700">No metas presión. Solo recordá tu "para qué".</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
            <h3 className="font-bold text-gray-900 mb-3">Escribir:</h3>
            <p className="text-gray-600 text-lg italic mb-3">"¿Qué quiero para mi vida, suavemente?"</p>
            <p className="text-gray-600 text-sm">Usa el espacio de reflexión abajo para escribir tu respuesta</p>
          </div>
        </div>
      )
    },
    {
      day: 7,
      title: 'Reingreso gradual',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300">
            <h3 className="font-bold text-gray-900 text-2xl mb-3 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              🎉 ¡Llegaste al día 7!
            </h3>
            <p className="text-gray-700 text-center text-lg">
              Objetivo: volver a avanzar desde energía real
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Acción de hoy:</h3>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">✅ Elegir una sola meta para la semana</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">✅ Crear el primer paso más pequeño posible</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">✅ Celebrar que volviste a vos</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 border-2 border-blue-300">
            <h3 className="font-bold text-gray-900 text-xl mb-4 text-center">Tu compromiso suave:</h3>
            <p className="text-xl text-center text-blue-800 font-bold italic mb-4">
              "Me permito recuperar mi energía, sin culpa."
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <p className="text-gray-800 text-center leading-relaxed">
              <strong className="text-green-700">Recordá:</strong><br />
              No estás fallando. Estás sanando.<br />
              <span className="text-lg font-bold text-gray-900 mt-2 block">
                Cada micro paso que diste esta semana fue coraje.
              </span>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header showHomeButton={true} onHomeClick={handleHomeClick} />

      <div className="px-4 py-12 pt-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Guía Anti-Procrastinación
            </h1>
            <p className="text-2xl text-blue-700 font-bold mb-2">
              Procrastinación por Agotamiento
            </p>
            <p className="text-lg text-gray-600 font-light mb-4">
              Cuando tu cuerpo dice "no puedo" antes de que tu mente diga "quiero"
            </p>
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">7 días de restauración</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Mensaje Inicial
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Hay un tipo de pausa que no nace de excusa, sino de cansancio profundo.<br />
                Un cansancio que no se quita durmiendo una noche,<br />
                porque no es solo físico — es emocional, mental, nervioso.
              </p>
              <p>
                Si estás acá, no estás vago.<br />
                No estás roto.<br />
                No te falta disciplina.
              </p>
              <p className="text-xl font-bold text-blue-700 text-center my-6">
                Estás agotado.
              </p>
              <p>
                Y ese agotamiento no es falla.<br />
                Es evidencia de que fuiste más fuerte de lo que cualquiera vio.
              </p>
              <p>
                Esto no es una guía para "ponerte las pilas".<br />
                Es una guía para dejar que vuelvan solas, recuperando energía real.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 my-6 border border-blue-200">
                <p className="text-lg text-center font-medium text-gray-900">
                  Hoy no te vas a exigir.<br />
                  Hoy te vas a cuidar.
                </p>
              </div>
              <p className="text-lg text-center font-medium">
                La acción va a volver,<br />
                pero no porque te empujes —<br />
                sino porque te reconstruís.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Qué es, cómo se siente y qué provoca?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Qué es</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Procrastinación por agotamiento ocurre cuando tu cuerpo apagó el motor antes de que tu cabeza aceptara parar.
                </p>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-800 font-medium text-center">
                    El sistema nervioso dice: "Freno para no romperme."
                  </p>
                  <p className="text-gray-700 italic text-center mt-2">
                    No procrastinás — te estás protegiendo.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Cómo se siente</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Querer avanzar pero sentir peso interno',
                    'Mente más lenta que tus ideas',
                    'Sensación de arrastre',
                    'Ganas de llorar sin motivo claro',
                    'Falta de impulso vital',
                    'Energía social baja',
                    'Sensación de "no doy más"',
                    'Sueño mental, no sueño físico'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-blue-50 rounded-lg p-3">
                      <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Qué provoca si lo ignorás</h3>
                <div className="space-y-2">
                  {[
                    'Burnout',
                    'Ansiedad + apatía',
                    'Desconexión emocional',
                    'Culpa + frustración',
                    'Cierre creativo',
                    'Autoimagen negativa por falta de energía'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-blue-600">→</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <p className="text-center text-gray-800 text-lg leading-relaxed">
                  <strong className="text-green-700">Tu cuerpo no te está saboteando.</strong><br />
                  Te está cuidando del colapso.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Qué NO significa
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-bold text-red-700 mb-3">No significa:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">flojera</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">falta de ambición</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">indisciplina</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">falta de mérito</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">que te rendiste</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-700 mb-3">Significa:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">tu cuerpo llegó al límite</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">necesitás descanso antes que acción</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">tu energía es valiosa y está siendo protegida</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">estás aprendiendo a ser humano, no máquina</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">la recuperación es tu prioridad — y eso es valiente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 border border-blue-200">
                <p className="text-center text-gray-800 text-lg font-medium">
                  Descansar no te aleja de tus sueños.<br />
                  Te prepara para sostenerlos.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-blue-200 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Plan de 7 días
            </h2>
            <div className="grid grid-cols-7 gap-2 mb-6">
              {days.map((d) => (
                <button
                  key={d.day}
                  onClick={() => setCurrentDay(d.day)}
                  className={`aspect-square rounded-xl font-bold transition-all duration-300 ${
                    currentDay === d.day
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Día {currentDay}: {days[currentDay - 1].title}
              </h3>
              <div className="text-gray-700">
                {days[currentDay - 1].content}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Ejercicios y Técnicas Mentales
            </h2>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🫂 Técnica de autocompasión</h3>
                <p className="text-gray-700">Mano en corazón: "Estoy haciendo lo mejor que puedo."</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🪫 Técnica de pausa nerviosa</h3>
                <p className="text-gray-700">Apoyar espalda + pies firmes → respirar lento → 2 minutos</p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">💧 Técnica respiro + sorbo</h3>
                <p className="text-gray-700 mb-2">Respirar → un sorbo → pausa mental</p>
                <p className="text-gray-600 italic text-sm">Señal al cerebro: no hay peligro.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Reflexiones Guiadas
            </h2>

            <div className="space-y-4 mb-8">
              {[
                '¿Qué parte de mí está cansada de ser fuerte?',
                '¿Qué me vengo exigiendo en silencio?',
                '¿Qué tipo de descanso realmente me alimenta?',
                '¿Qué haría si mi valor no dependiera de mi productividad?'
              ].map((question, i) => (
                <div key={i} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-800 font-medium">{question}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300">
              <p className="text-xl text-center text-gray-900 font-bold">
                Afirmación:
              </p>
              <p className="text-2xl text-center text-green-700 font-bold italic mt-2">
                "Me permito recuperar mi energía, sin culpa."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Regulación Emocional Inmediata
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-gray-800">✅ Respiración larga exhalada</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-gray-800">✅ Mirar lejos 20–30 segundos</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-gray-800">✅ Acariciar brazos lentamente</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200 mt-6">
              <p className="text-center text-gray-800 text-lg font-medium italic">
                "No tengo que acelerar para existir."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.67 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Herramientas para Claridad y Energía
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
                <p className="text-gray-800 font-medium">✅ Pausas nutritivas</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
                <p className="text-gray-800 font-medium">✅ Hidratación tibia</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
                <p className="text-gray-800 font-medium">✅ Contenido calmante</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 text-center">
                <p className="text-gray-800 font-medium">✅ Prioridad única diaria</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mt-6">
              <p className="text-center text-gray-800 text-lg font-medium">
                Tu energía no vuelve con presión.<br />
                Vuelve con cuidado constante.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Espacio de Reflexión
            </h2>
            <JournalInput
              prompt="¿Cómo te sentís hoy? Dejá fluir tus pensamientos:"
              placeholder="Este es tu espacio seguro. Escribí libremente sobre cómo te sentís, qué señales de agotamiento reconocés, qué pequeños pasos diste hacia tu recuperación..."
              storageKey="agotamiento_reflection"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-300"
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Cierre
              </h2>
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
                <p className="text-xl">
                  No estás fallando.<br />
                  Estás sanando.
                </p>
                <p>
                  Tu cuerpo te frenó porque te ama más que tu productividad.<br />
                  Eso no es derrota — es sabiduría biológica.
                </p>
                <p className="font-medium">
                  Cada micro paso que diste esta semana fue coraje.<br />
                  Cada descanso fue progreso.<br />
                  Cada respiración fue recuperación.
                </p>
                <div className="bg-white rounded-2xl p-6 my-6">
                  <p className="text-2xl font-bold text-gray-900">
                    La acción vuelve.<br />
                    Pero esta vez, con vos adentro.<br />
                    Presente. Vivo. En paz.
                  </p>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  Bienvenido a la fase donde avanzás<br />
                  porque estás sano, no porque estás obligado.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 text-center"
          >
            <button
              onClick={handleHomeClick}
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Volver al inicio</span>
            </button>
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
