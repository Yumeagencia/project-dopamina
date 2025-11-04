import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Calendar, Sparkles, CheckCircle, Heart, Target, Zap, BookOpen, ArrowRight, Home } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useNavigate } from 'react-router-dom';

export default function Perfeccionismo() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [currentDay, setCurrentDay] = useState(1);
  const navigate = useNavigate();

  const username = 'procrastperfeccionismo';
  const password = 'procrastperfeccionismo456';

  useEffect(() => {
    document.title = 'Guía Anti-Procrastinación: Perfeccionismo – MasDopamina';
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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
        <Header showHomeButton={true} onHomeClick={handleHomeClick} />

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-orange-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Acceder
                </button>
              </form>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => navigate('/antiprocrastinacion')}
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-orange-400 hover:shadow-md"
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
      title: 'Permiso para empezar mal',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-orange-600">Respiración 4–6</strong>
          </p>
          <p className="text-lg text-gray-700">Inhala por 4 segundos, exhala por 6. Repite 3 veces.</p>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-orange-200">
            <p className="text-2xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Frase del día
            </p>
            <p className="text-xl text-center text-orange-700 italic font-medium">
              "Hoy me permito empezar imperfecto."
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Acción de hoy:</h3>
            <div className="bg-white rounded-xl p-4 border-2 border-orange-200">
              <p className="text-gray-800">✅ Elegí UNA tarea pendiente</p>
              <p className="text-gray-800">✅ Trabajá en ella solo 2 minutos</p>
              <p className="text-gray-800">✅ No importa si queda incompleto</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-gray-800 text-center font-medium">
              Al terminar, decí en voz alta: <br />
              <span className="text-green-700 font-bold">"Hecho vale más que imaginado."</span>
            </p>
          </div>
        </div>
      )
    },
    {
      day: 2,
      title: 'Romper el hielo',
      content: (
        <div className="space-y-6">
          <div className="bg-orange-100 rounded-xl p-6 border-2 border-orange-300">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Técnica: "Primera versión fea"</h3>
            <p className="text-gray-800">Hoy vas a crear algo sin permitirte borrar ni editar nada.</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Instrucciones:</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Pon un timer de 7 minutos</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Escribe, dibuja, o hace lo que tengas pendiente</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">NO borres nada. NO corrijas nada.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Cuando suene el timer, PARA. Así queda.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
            <p className="text-center text-lg text-gray-800 italic">
              "Acción imperfecta es medicina."
            </p>
          </div>
        </div>
      )
    },
    {
      day: 3,
      title: 'Desactivar el juez interno',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            Hoy vamos a identificar esas voces críticas que te paralizan y transformarlas en voces amables.
          </p>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Ejercicio de transformación:</h3>

            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <p className="font-bold text-red-700 mb-2">❌ Autoexigencias típicas:</p>
              <ul className="space-y-2 text-gray-700">
                <li>"Tiene que salir perfecto"</li>
                <li>"Si no es excelente, no vale"</li>
                <li>"Van a pensar que soy un fracaso"</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
              <p className="font-bold text-green-700 mb-2">✅ Frases amables:</p>
              <ul className="space-y-2 text-gray-700">
                <li>"Puede ser un primer borrador"</li>
                <li>"Cada intento me enseña algo"</li>
                <li>"Mi valor no depende de este resultado"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
            <h3 className="font-bold text-gray-900 mb-3">Tu turno - Anota 3 autoexigencias tuyas:</h3>
            <p className="text-gray-600 text-sm mb-3">Usa el espacio de reflexión abajo para escribirlas y transformarlas</p>
          </div>
        </div>
      )
    },
    {
      day: 4,
      title: 'Celebrar micro-logros',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Técnica: "TODO completado es victoria"</h3>
            <p className="text-gray-700">Hoy vas a reconocer conscientemente cada pequeño avance.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Al final del día, anota 3 cosas que lograste:</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-orange-200">
                <p className="text-gray-600 text-sm mb-2">Puede ser tan simple como:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>✨ "Respondí un mensaje pendiente"</li>
                  <li>✨ "Ordené mi escritorio"</li>
                  <li>✨ "Empecé algo aunque no lo terminé"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-3">Celebración simbólica:</h3>
            <p className="text-gray-800">Después de anotar, hace algo pequeño para celebrar:</p>
            <ul className="space-y-2 mt-3 text-gray-700">
              <li>😊 Sonreír conscientemente</li>
              <li>🫁 Respirar profundo con gratitud</li>
              <li>✋ Darte una palmadita en el hombro</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      day: 5,
      title: 'Exposición suave a ser visto',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            El perfeccionismo a menudo se alimenta del miedo a ser juzgado.
            Hoy vamos a practicar mostrarnos sin tener todo resuelto.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Desafío del día:</h3>
            <p className="text-gray-800 mb-3">Compartí algo pequeño con alguien seguro (amigo, familiar, comunidad)</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Ejemplos de acción pública pequeña:</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-blue-200">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Una historia en Instagram/Facebook</p>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-blue-200">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Un mensaje contando en qué estás trabajando</p>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-blue-200">
                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Un mail corto que tenías pendiente</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-orange-200">
            <p className="text-xl text-center text-orange-700 font-medium italic">
              "Me muestro sin tener que ser perfecto."
            </p>
          </div>
        </div>
      )
    },
    {
      day: 6,
      title: 'Reconectar con el juego',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Día de reencuentro con la creatividad libre</h3>
            <p className="text-gray-700">Hoy no hay objetivos. Solo disfrute.</p>
          </div>

          <p className="text-lg text-gray-800 leading-relaxed">
            Elegí una actividad creativa que no tenga ningún objetivo productivo:
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 border-2 border-pink-200 text-center">
              <p className="text-gray-800 font-medium">🎨 Dibujar garabatos</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-pink-200 text-center">
              <p className="text-gray-800 font-medium">✍️ Escritura libre</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-pink-200 text-center">
              <p className="text-gray-800 font-medium">💃 Movimiento/baile</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-pink-200 text-center">
              <p className="text-gray-800 font-medium">🎵 Tocar música</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-3">Reglas del juego:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ Sin expectativas</li>
              <li>❌ Sin mostrarle a nadie</li>
              <li>❌ Sin juzgarte</li>
              <li>✅ Solo explorar y sentir</li>
            </ul>
          </div>

          <p className="text-center text-gray-700 italic text-lg">
            Volver al disfrute sin rendimiento
          </p>
        </div>
      )
    },
    {
      day: 7,
      title: 'Integrar nueva identidad',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300">
            <h3 className="font-bold text-gray-900 text-2xl mb-3 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              🎉 ¡Llegaste al día 7!
            </h3>
            <p className="text-gray-700 text-center text-lg">
              Este es el momento de integrar todo lo que aprendiste esta semana
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Reflexión final:</h3>
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">💭 ¿Qué cambió esta semana?</p>
                <p className="text-gray-600 text-sm">Anota en el espacio de reflexión abajo</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">🌱 ¿Qué aprendiste sobre vos?</p>
                <p className="text-gray-600 text-sm">Reflexiona sobre tu relación con la perfección</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">🎯 ¿Qué práctica querés mantener?</p>
                <p className="text-gray-600 text-sm">Elegí una técnica que más te ayudó</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-orange-300">
            <h3 className="font-bold text-gray-900 text-xl mb-4 text-center">Tu compromiso amable:</h3>
            <p className="text-xl text-center text-orange-800 font-bold italic mb-4">
              "A partir de ahora empiezo antes de estar listo."
            </p>
            <p className="text-center text-gray-700">
              Escribí esto en un lugar visible o toma una foto para recordarlo
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <p className="text-gray-800 text-center leading-relaxed">
              <strong className="text-green-700">Recordá:</strong><br />
              No estás peleando contra pereza.<br />
              Estás liberándote del miedo a no ser suficiente.<br />
              <span className="text-lg font-bold text-gray-900 mt-2 block">
                Tu valor no es tu resultado. Tu valor es que aparecés para tu vida.
              </span>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
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
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Guía Anti-Procrastinación
            </h1>
            <p className="text-2xl text-orange-700 font-bold mb-2">
              Perfeccionismo
            </p>
            <p className="text-lg text-gray-600 font-light mb-4">
              Cuando tu estándar es tan alto que tu energía nunca alcanza a empezar
            </p>
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Calendar className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-gray-900">7 días de transformación</span>
            </div>
          </motion.div>

          {/* Mensaje Inicial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Mensaje Inicial
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Hay un momento en la vida donde no procrastinás por falta de ganas,
                ni porque no te importa, ni porque seas indisciplinado.
              </p>
              <p className="font-medium">
                Procrastinás porque te importa demasiado.
              </p>
              <p>
                Porque querés hacerlo bien. Porque querés sentirte orgulloso.
                Porque no querés fallar. Porque el resultado importa tanto,
                que el miedo a no alcanzarlo te deja quieto.
              </p>
              <p className="text-xl font-bold text-orange-700 text-center my-6">
                Eso no se llama pereza.<br />
                Se llama sensibilidad.
              </p>
              <p>
                Hoy vamos a recordarte algo: <strong>La perfección no es amor propio — es miedo pidiendo control.</strong>
              </p>
              <p>
                Y vos no naciste para vivir controlando el riesgo de fallar,
                sino para vivir entrando en la experiencia de crecer.
              </p>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 my-6 border border-orange-200">
                <p className="text-lg text-center font-medium text-gray-900">
                  Permiso {'>'} exigencia.<br />
                  Curiosidad {'>'} perfección.<br />
                  Movimiento chiquito {'>'} fantasía grande inmóvil.
                </p>
              </div>
              <p className="text-2xl font-bold text-center text-gray-900">
                Hoy empieza tu libertad.
              </p>
            </div>
          </motion.div>

          {/* Qué es, cómo se siente */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Qué es y cómo se siente?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-700 mb-3">✅ Qué es</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Procrastinación por perfeccionismo es postergar tareas no por falta de intención,
                  sino por miedo a no hacerlo perfecto.
                </p>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="text-gray-800 italic text-center">
                    "Si no va a ser excelente, mejor no lo hago todavía."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-700 mb-3">✅ Cómo se siente</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Bloqueo al iniciar',
                    'Sobreanálisis',
                    'Editar, borrar, volver a empezar',
                    'Sensación de "todavía no es suficiente"',
                    'Miedo a equivocarte frente a otros',
                    'Dudas sobre tu capacidad',
                    'Mucho pensar, poco hacer'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-orange-50 rounded-lg p-3">
                      <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-700 mb-3">✅ Qué provoca con el tiempo</h3>
                <div className="space-y-2">
                  {[
                    'Estancamiento creativo',
                    'Postergación continua',
                    'Culpa y autoexigencia',
                    'Baja autoestima por falta de avances visibles',
                    'Ansiedad por tareas pendientes',
                    'Agotamiento mental'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-orange-600">→</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <p className="text-center text-gray-800 text-lg leading-relaxed">
                  <strong className="text-green-700">No te falta capacidad.</strong><br />
                  Te falta permiso interno de ser humano mientras creás.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Day Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-orange-200 mb-8"
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
                      ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-orange-200">
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
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Ejercicios y Técnicas Mentales
            </h2>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🌪️ Técnica "Borrador vivo"</h3>
                <p className="text-gray-700">Permitite dejar trabajo incompleto a la vista.</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🎯 Técnica "70% listo"</h3>
                <p className="text-gray-700">Cuando algo esté al 70%, se entrega / sigue.</p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">⏱️ Técnica "Tiempo, no perfección"</h3>
                <p className="text-gray-700">Timer y detenerse cuando suena — aunque no esté perfecto.</p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-bold text-gray-900 text-lg mb-3">🧠 Reemplazo mental</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-600 font-medium">De:</span>
                    <span className="text-gray-700">"¿Y si sale mal?"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 font-medium">A:</span>
                    <span className="text-gray-700 font-bold">"¿Y si aprendo algo?"</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reflexiones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Reflexiones Guiadas
            </h2>

            <div className="space-y-4 mb-8">
              {[
                '¿Qué parte de mí teme no ser suficiente?',
                '¿A quién intento impresionar?',
                '¿Qué me diría alguien que me ama si ve mi esfuerzo?',
                '¿Qué logro tendría si me permitiera avanzar imperfecto?'
              ].map((question, i) => (
                <div key={i} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-gray-800 font-medium">{question}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300">
              <p className="text-xl text-center text-gray-900 font-bold">
                Afirmación:
              </p>
              <p className="text-2xl text-center text-green-700 font-bold italic mt-2">
                "No tengo que ser perfecto para merecer avanzar."
              </p>
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
              placeholder="Este es tu espacio seguro. Escribí libremente sobre cómo te sentís, qué estás pensando, qué autocríticas aparecen, qué pequeños avances hiciste..."
              storageKey="perfeccionismo_reflection"
            />
          </motion.div>

          {/* Cierre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-300"
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Tu Libertad Imperfecta
              </h2>
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
                <p className="text-xl">
                  No estás peleando contra pereza.<br />
                  Estás liberándote del miedo a no ser suficiente.
                </p>
                <p>
                  Hoy elegiste avanzar en lugar de esperar la versión perfecta de vos.
                </p>
                <p className="font-bold text-orange-700 text-2xl">
                  Eso no es productividad.<br />
                  Eso es valentía emocional.
                </p>
                <p>
                  No esperes inspiración. Creala con pequeños pasos reales.
                </p>
                <div className="bg-white rounded-2xl p-6 my-6">
                  <p className="text-2xl font-bold text-gray-900">
                    Tu valor no es tu resultado.<br />
                    Tu valor es que aparecés para tu vida.
                  </p>
                </div>
                <p className="text-3xl font-bold text-orange-600">
                  Bienvenido a tu libertad imperfecta.
                </p>
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
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-orange-400 hover:shadow-lg"
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
