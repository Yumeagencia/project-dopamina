import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Calendar, Sparkles, CheckCircle, Heart, Compass, Zap, BookOpen, ArrowRight, Home, Target, Lightbulb } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useNavigate } from 'react-router-dom';

export default function FaltaDeClaridad() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [currentDay, setCurrentDay] = useState(1);
  const navigate = useNavigate();

  const username = 'procrastclaridad';
  const password = 'procrastclaridad123';

  useEffect(() => {
    document.title = 'Guía Anti-Procrastinación: Falta de Claridad – MasDopamina';
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
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 flex flex-col">
        <Header showHomeButton={true} onHomeClick={handleHomeClick} />

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-teal-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Acceder
                </button>
              </form>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => navigate('/antiprocrastinacion')}
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-teal-400 hover:shadow-md"
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
      title: 'Vaciar la cabeza',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: despejar ruido mental</h3>
            <p className="text-gray-800">Hoy vas a sacar todo de tu cabeza y ponerlo en papel.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Brain Dump (5–10 minutos):</h3>
            <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
              <p className="text-gray-800 mb-4">Escribí TODO lo que está en tu mente:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Tareas pendientes</li>
                <li>• Ideas sin forma</li>
                <li>• Preocupaciones</li>
                <li>• Decisiones por tomar</li>
                <li>• Proyectos en pausa</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">Sin filtro, sin orden. Solo vaciar.</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Ahora separá en categorías:</h3>
            <div className="space-y-2">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="font-semibold text-green-700 mb-2">✅ Importante</p>
                <p className="text-sm text-gray-700">Lo que realmente necesita atención</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <p className="font-semibold text-amber-700 mb-2">➡️ Delegable / Luego</p>
                <p className="text-sm text-gray-700">Lo que puede esperar o ser delegado</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="font-semibold text-gray-700 mb-2">❌ Irrelevante / Soltar</p>
                <p className="text-sm text-gray-700">Lo que puedes dejar ir</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <p className="text-xl text-center text-blue-700 font-medium italic">
              "No necesito tener todo claro hoy. Solo empezar a ver."
            </p>
          </div>
        </div>
      )
    },
    {
      day: 2,
      title: 'Una dirección, no veinte',
      content: (
        <div className="space-y-6">
          <div className="bg-teal-100 rounded-xl p-6 border-2 border-teal-300">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: definir una prioridad humana</h3>
            <p className="text-gray-800">Menos opciones = más claridad = más acción</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
              <h3 className="font-bold text-gray-900 text-lg mb-3">Pregunta del día:</h3>
              <p className="text-teal-700 font-medium text-xl italic text-center mb-4">
                "¿Qué sería significativo completar esta semana?"
              </p>
              <p className="text-sm text-gray-600 text-center">No "útil" o "productivo" — significativo para vos</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <h3 className="font-bold text-gray-900 mb-3">Elegí solo 1 proyecto principal</h3>
              <p className="text-gray-800 mb-3">No 5. No 10. UNO.</p>
              <p className="text-sm text-gray-600">La claridad nace de la simplicidad, no de la cantidad.</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 text-lg">Acción de hoy:</h3>
              <div className="bg-white rounded-xl p-4 border-2 border-teal-200 space-y-2">
                <p className="text-gray-800">Escribí 3 razones por las que este proyecto importa:</p>
                <div className="space-y-2 mt-3">
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">1.</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">2.</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">3.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-gray-800 text-center">
              <strong className="text-green-700">Recordá:</strong><br />
              No estás eligiendo qué es urgente.<br />
              Estás eligiendo qué te acerca a tu vida que querés.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 3,
      title: 'Traducir visión en pasos',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            Hoy convertimos ideas abstractas en acciones concretas.
          </p>

          <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: convertir ideas en movimiento</h3>
            <p className="text-gray-800">Las ideas no se hacen solas. Necesitan pasos.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Paso 1: Elegí 1 objetivo del proyecto</h3>
            <div className="bg-white rounded-xl p-4 border border-cyan-200">
              <p className="text-gray-800 text-sm">Por ejemplo: "Terminar el primer borrador" o "Organizar mis finanzas"</p>
            </div>

            <h3 className="font-bold text-gray-900 text-lg">Paso 2: Crear 3 pasos chiquitos</h3>
            <div className="bg-white rounded-xl p-6 border-2 border-teal-200 space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Paso 1:</p>
                  <p className="text-sm text-gray-600">Debe tomar menos de 10 minutos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Paso 2:</p>
                  <p className="text-sm text-gray-600">Debe ser específico y medible</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Paso 3:</p>
                  <p className="text-sm text-gray-600">Debe poder hacerse hoy</p>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 text-lg">Paso 3: Hacer el primer paso AHORA</h3>
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <p className="text-gray-800 text-center font-medium">
                Máximo 10 minutos.<br />
                No lo pienses. Solo empezá.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
            <p className="text-gray-800 text-center italic">
              La claridad no viene antes de la acción.<br />
              <strong className="text-purple-700">La claridad viene de la acción.</strong>
            </p>
          </div>
        </div>
      )
    },
    {
      day: 4,
      title: 'Construir ritmo',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: volver acción → hábito</h3>
            <p className="text-gray-700">La consistencia crea claridad más que la perfección.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Ejercicio de hoy:</h3>

            <div className="bg-white rounded-xl p-6 border-2 border-teal-200 space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">1. Bloque de 15 minutos sin interrupciones</p>
                <p className="text-gray-700 text-sm">• Silencia notificaciones</p>
                <p className="text-gray-700 text-sm">• Alejate de distracciones</p>
                <p className="text-gray-700 text-sm">• Pon un timer</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">2. Enfocate en UNA sola cosa</p>
                <p className="text-gray-700 text-sm">No multitasking. Solo eso.</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">3. Regla importante:</p>
                <p className="text-teal-700 font-medium">Terminar cuando el timer suena (aunque quieras seguir)</p>
                <p className="text-gray-600 text-sm mt-1">Esto entrena tu cerebro a confiar en el proceso</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-center text-gray-800 leading-relaxed">
              <strong className="text-blue-700">La claridad nace de la acción sostenida.</strong><br />
              No de maratones esporádicos.
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-gray-800 text-sm">
              <strong className="text-amber-700">Nota:</strong> Si al principio te cuesta concentrarte 15 minutos, empezá con 5. La idea es crear el hábito, no agotarte.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 5,
      title: 'Editar dirección',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: ajustar, no imponerte</h3>
            <p className="text-gray-700">La claridad también significa saber cuándo cambiar de rumbo.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
              <h3 className="font-bold text-gray-900 text-xl mb-4 text-center">Pregunta del día:</h3>
              <p className="text-teal-700 font-medium text-2xl italic text-center">
                "¿Esto aún hace sentido?"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <p className="font-bold text-green-700 mb-3 text-center">Si SÍ → seguir</p>
                <p className="text-gray-700 text-sm text-center">
                  Continua con tu plan.<br />
                  Estás en el camino correcto.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <p className="font-bold text-amber-700 mb-3 text-center">Si NO → ajustar</p>
                <p className="text-gray-700 text-sm text-center">
                  No abandones.<br />
                  Modificá la dirección.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-teal-200">
              <h3 className="font-bold text-gray-900 mb-3">Preguntas para ajustar:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ¿Qué aprendí hasta ahora?</li>
                <li>• ¿Qué puedo simplificar?</li>
                <li>• ¿Qué expectativa debo soltar?</li>
                <li>• ¿Cuál sería el siguiente paso más simple?</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <p className="text-center text-gray-800 leading-relaxed">
              <strong className="text-blue-700">Flexibilidad no es fracaso.</strong><br />
              Es inteligencia adaptativa.<br />
              Es escucharte en lugar de forzarte.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 6,
      title: 'Celebrar claridad ganada',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: reforzar avance mental</h3>
            <p className="text-gray-700">Hoy reconocemos el progreso interno que hiciste.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Ejercicio de reflexión:</h3>
              <p className="text-gray-800 mb-3">Completá esta frase:</p>
              <div className="bg-teal-50 rounded-lg p-4">
                <p className="text-teal-700 font-medium text-lg italic">
                  "Esta semana entendí que..."
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-3">Usa el espacio de reflexión abajo para escribir libremente</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="font-bold text-gray-900 mb-4">Micro-recompensa:</h3>
              <p className="text-gray-800 mb-4">Date un regalo pequeño y consciente:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white rounded-lg p-3 text-center border border-green-200">
                  <p className="text-2xl mb-1">😌</p>
                  <p className="text-sm text-gray-700">Descanso</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-green-200">
                  <p className="text-2xl mb-1">🎵</p>
                  <p className="text-sm text-gray-700">Música</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-green-200">
                  <p className="text-2xl mb-1">☕</p>
                  <p className="text-sm text-gray-700">Comida rica</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-green-200">
                  <p className="text-2xl mb-1">🌞</p>
                  <p className="text-sm text-gray-700">Sol/paseo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <p className="text-center text-gray-800 leading-relaxed">
              <strong className="text-purple-700">Celebrar no es opcional.</strong><br />
              Es cómo tu cerebro aprende que avanzar vale la pena.<br />
              Es cómo convertís claridad en identidad.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 7,
      title: 'Integración y visión futura',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-300">
            <h3 className="font-bold text-gray-900 text-2xl mb-3 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              🎉 ¡Completaste los 7 días!
            </h3>
            <p className="text-gray-700 text-center text-lg">
              Es momento de integrar tu nueva claridad y mirar hacia adelante
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Objetivo: sostener claridad</h3>

            <div className="bg-white rounded-xl p-6 border-2 border-teal-200 space-y-4">
              <div className="bg-teal-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">1. Revisar el proyecto</p>
                <p className="text-gray-700 text-sm">• ¿Qué avanzaste?</p>
                <p className="text-gray-700 text-sm">• ¿Qué claridad ganaste?</p>
                <p className="text-gray-700 text-sm">• ¿Qué sentís distinto ahora?</p>
              </div>

              <div className="bg-cyan-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">2. Elegir siguiente paso pequeño</p>
                <p className="text-gray-700 text-sm">No el más grande. El más simple y concreto.</p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">3. Ritual: 10 minutos de silencio suave</p>
                <p className="text-gray-700 text-sm">• Sin pantallas</p>
                <p className="text-gray-700 text-sm">• Respirá tranquilo</p>
                <p className="text-gray-700 text-sm">• Dejá que tu mente se asiente</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 border-2 border-blue-300">
            <h3 className="font-bold text-gray-900 text-xl mb-4 text-center">Tu nueva verdad:</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-800 text-lg leading-relaxed space-y-2">
                <span className="block">✓ Ya no estás en la niebla</span>
                <span className="block">✓ Sabés qué importa</span>
                <span className="block">✓ Sabés cómo moverte</span>
                <span className="block font-bold text-teal-700 mt-3">✓ Ahora tenés dirección</span>
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <p className="text-gray-800 text-center leading-relaxed">
              <strong className="text-green-700 text-lg">Recordá:</strong><br />
              La claridad se construye, no se espera.<br />
              <span className="text-xl font-bold text-gray-900 mt-2 block">
                Y vos acabás de construirla.
              </span>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      <Header showHomeButton={true} onHomeClick={handleHomeClick} />

      <div className="px-4 py-12 pt-28">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
                <Compass className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Guía Anti-Procrastinación
            </h1>
            <p className="text-2xl text-teal-700 font-bold mb-2">
              Falta de Claridad
            </p>
            <p className="text-lg text-gray-600 font-light mb-4">
              Cuando sabés que querés avanzar, pero no ves el camino
            </p>
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span className="font-semibold text-gray-900">7 días de transformación</span>
            </div>
          </motion.div>

          {/* Mensaje Inicial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Mensaje Inicial
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Hay momentos donde la vida no se vuelve pesada, solo se vuelve borrosa.
              </p>
              <p>
                Tenés energía, tenés ideas, tenés ganas… pero tu brújula interna está envuelta en niebla.
              </p>
              <p className="font-medium">
                Y cuando no ves el camino, el cuerpo espera.
              </p>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 my-4 border border-teal-200">
                <p className="text-center font-medium text-gray-900">
                  Eso no es vagancia.<br />
                  Eso no es falta de compromiso.
                </p>
              </div>
              <p className="text-xl font-medium text-center my-6">
                Es tu mente diciendo:
              </p>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 my-6 border border-cyan-200">
                <p className="text-lg text-center text-teal-700 italic">
                  "No quiero moverme en falso.<br />
                  Ayudame a ver primero."
                </p>
              </div>
              <p className="text-2xl font-bold text-center text-teal-700">
                Así de inteligente sos.
              </p>
              <p>
                Pero hoy no vamos a esperar claridad como regalo. Vamos a fabricarla con pasos intencionales.
              </p>
              <p className="text-center font-medium text-gray-900">
                No desde presión,<br />
                sino desde orden interno, simplicidad y presencia.
              </p>
              <p className="text-2xl font-bold text-center text-gray-900 mt-6">
                Bienvenido al proceso de volver a verte.
              </p>
            </div>
          </motion.div>

          {/* Qué es, cómo se siente */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Qué es y cómo se siente?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-3">✅ Qué es</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Procrastinación por falta de claridad ocurre cuando la mente quiere avanzar pero no tiene dirección definida.
                </p>
                <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                  <p className="text-gray-800 text-center font-medium">
                    No evitás la acción — <br />
                    <span className="text-teal-700 font-bold">evitás la confusión.</span>
                  </p>
                </div>
                <p className="text-gray-700 mt-3 text-center italic">
                  Tu cerebro está buscando seguridad cognitiva antes de moverse.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-3">✅ Cómo se siente</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Ideas sin estructura',
                    'Sensación de querer pero no arrancar',
                    'Bloqueo al elegir entre opciones',
                    'Ruido mental y dispersión',
                    'Falta de foco',
                    'Ansiedad por no avanzar',
                    'Picos de energía pero sin rumbo',
                    'Cansancio mental sin esfuerzo físico real'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-teal-50 rounded-lg p-3">
                      <Zap className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-4 text-center font-medium">
                  No es incapacidad. Es saturación sin mapa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-teal-700 mb-3">✅ Qué provoca si no se trata</h3>
                <div className="space-y-2">
                  {[
                    'Estancamiento',
                    'Postergación de proyectos importantes',
                    'Culpa interna',
                    'Desorden emocional y mental',
                    'Ciclo de empezar y abandonar',
                    'Sensación de "estoy cerca, pero no avanzo"'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-teal-600">→</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <p className="text-center text-gray-800 text-lg leading-relaxed">
                  <strong className="text-green-700">Esto no es problema de disciplina.</strong><br />
                  Es problema de dirección interna.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Day Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-teal-200 mb-8"
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
                      ? 'bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-teal-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Día {currentDay}: {days[currentDay - 1].title}
              </h3>
              <div className="text-gray-700">
                {days[currentDay - 1].content}
              </div>
            </div>
          </motion.div>

          {/* Ejercicios y Técnicas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Ejercicios y Técnicas Mentales
            </h2>

            <div className="space-y-6">
              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🧠 Técnica "Una cosa"</h3>
                <p className="text-gray-700">Una meta por vez. Una tarea por bloque.</p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">📍 Técnica del norte simple</h3>
                <p className="text-gray-700 mb-2">Preguntar:</p>
                <p className="text-teal-700 font-medium italic">"¿Qué me acerca más a la vida que quiero?"</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🗂️ Técnica del descarte</h3>
                <p className="text-gray-700">Eliminar tareas que existen solo por hábito o ego.</p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-bold text-gray-900 text-lg mb-3">🔄 Técnica de prototipo</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">Acción rápida → feedback real</p>
                  <p className="text-emerald-700 font-medium">Pensar menos → probar más</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reflexiones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Reflexiones Guiadas
            </h2>

            <div className="space-y-4 mb-8">
              {[
                '¿Qué quiero realmente y qué creo que debería querer?',
                '¿Qué expectativa ajena me está nublando?',
                '¿Qué haría si no necesitara justificar mi decisión?',
                '¿Qué paso pequeño me acercaría a mí?'
              ].map((question, i) => (
                <div key={i} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                  <p className="text-gray-800 font-medium">{question}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300">
              <p className="text-xl text-center text-gray-900 font-bold">
                Afirmación:
              </p>
              <p className="text-2xl text-center text-green-700 font-bold italic mt-2">
                "La claridad se construye, no se espera."
              </p>
            </div>
          </motion.div>

          {/* Regulación Emocional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Regulación Emocional Inmediata
            </h2>

            <div className="space-y-4">
              <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                <p className="text-gray-800">🫁 Respiración lenta con exhalación larga</p>
              </div>
              <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
                <p className="text-gray-800">🤲 Sacudir manos y hombros</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <p className="text-gray-800">💧 Agua y pausa visual (mirar lejos)</p>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <p className="text-center text-gray-800">
                <strong className="text-green-700">Repetir:</strong><br />
                <span className="text-lg font-medium text-gray-900 italic">"Voy paso a paso."</span>
              </p>
            </div>
          </motion.div>

          {/* Herramientas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Herramientas para Claridad y Energía
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">✅ Agenda simple (no saturada)</h3>
                <p className="text-gray-700">Menos es más. Prioridad sobre cantidad.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">✅ Bloques cortos de enfoque</h3>
                <p className="text-gray-700">15-25 minutos son suficientes para construir claridad.</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">✅ Espacios sin estímulo</h3>
                <p className="text-gray-700">Silencio, luz natural, aire fresco. Tu mente necesita espacio para pensar.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">✅ Pregunta diaria:</h3>
                <p className="text-purple-700 font-medium italic text-center text-lg">"¿Qué es lo más simple que puedo hacer próximo?"</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                  <p className="text-gray-800 font-medium">✅ No multitasking</p>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4 border border-rose-200">
                  <p className="text-gray-800 font-medium">✅ Descansos reales (no pantallas)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journal de Reflexión */}
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
              placeholder="Este es tu espacio seguro. Escribí sobre qué estás entendiendo, qué dirección empieza a verse clara, qué pasos pequeños te están ayudando..."
              storageKey="falta_de_claridad_reflection"
            />
          </motion.div>

          {/* Cierre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-teal-100 via-cyan-100 to-emerald-100 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-teal-300"
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Tu Nueva Claridad
              </h2>
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
                <p className="text-xl">
                  No estabas perdido.<br />
                  Estabas abrumado.
                </p>
                <p>
                  Tu mente pedía un mapa, no presión.
                </p>
                <p className="font-bold text-teal-700 text-2xl">
                  Hoy dejaste de intentar ver todo el camino<br />
                  para empezar a tomar el primer paso concreto.
                </p>
                <div className="bg-white rounded-2xl p-6 my-6">
                  <p className="text-2xl font-bold text-gray-900">
                    Eso no solo crea claridad.<br />
                    Crea autoconfianza.<br />
                    Crea identidad.<br />
                    Crea movimiento real.
                  </p>
                </div>
                <p className="text-xl">
                  Vos no sos alguien que "no sabe qué quiere."<br />
                  Sos alguien que está aprendiendo a escucharse.
                </p>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 mt-6 border-2 border-green-300">
                  <p className="text-3xl font-bold text-gray-900">
                    Y ahora sí — estás avanzando.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer con botón de inicio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 text-center"
          >
            <button
              onClick={handleHomeClick}
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-teal-400 hover:shadow-lg"
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
