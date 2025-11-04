import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Calendar, Sparkles, CheckCircle, Heart, Shield, Zap, BookOpen, ArrowRight, Home, Target } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useNavigate } from 'react-router-dom';

export default function MiedoAlFracaso() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [currentDay, setCurrentDay] = useState(1);
  const navigate = useNavigate();

  const username = 'procrastmiedoalfracaso';
  const password = 'procrastmiedoalfracaso789';

  useEffect(() => {
    document.title = 'Guía Anti-Procrastinación: Miedo al Fracaso – MasDopamina';
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
      title: 'Cambiar la definición de éxito',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            El primer paso es replantear qué significa realmente tener éxito.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Ejercicio de reflexión</h3>
            <p className="text-gray-800 mb-3">Escribí 1 página completa respondiendo:</p>
            <p className="text-blue-700 font-medium italic">"¿Qué significa éxito para mí?"</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Nueva definición:</h3>
            <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
              <p className="text-gray-800 mb-2">El éxito NO es solo el resultado final.</p>
              <p className="text-blue-700 font-bold">El éxito es ACTUAR, independientemente del resultado.</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-gray-900 mb-3">Microtarea de 3 minutos:</h3>
            <p className="text-gray-800 mb-3">Elegí UNA tarea pequeña y hacela durante 3 minutos. No importa si la terminas.</p>
            <p className="text-gray-800 text-center font-medium mt-4">
              Al terminar, repetí en voz alta: <br />
              <span className="text-green-700 font-bold text-lg">"Cada intento cuenta como éxito."</span>
            </p>
          </div>
        </div>
      )
    },
    {
      day: 2,
      title: 'Exposición mínima a fallar',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-100 rounded-xl p-6 border-2 border-blue-300">
            <h3 className="font-bold text-gray-900 text-xl mb-3">El fracaso pequeño es entrenamiento emocional</h3>
            <p className="text-gray-800">Hoy vas a practicar equivocarte en algo pequeño y sin consecuencias.</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Instrucciones:</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Elegí una mini tarea donde puedas equivocarte sin peligro</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Hacela rápido, sin pensar demasiado</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Si sale mal, CELEBRÁ que te animaste</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
            <h3 className="font-bold text-gray-900 mb-3">Ejemplos de mini tareas:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Enviar un mensaje informal sin revisar 10 veces</li>
              <li>• Dibujar algo sin que sea perfecto</li>
              <li>• Empezar algo sabiendo que lo vas a dejar incompleto</li>
              <li>• Hacer una pregunta aunque suene tonta</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <p className="text-center text-lg text-gray-800">
              <strong className="text-green-700">Recordá:</strong><br />
              El objetivo no es hacerlo perfecto.<br />
              El objetivo es entrenar tu valentía.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 3,
      title: 'Ver el miedo, no ser el miedo',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            Hoy aprendemos a observar el miedo como una emoción, no como una identidad.
          </p>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Técnica: "Yo observo"</h3>
            <p className="text-gray-800 mb-3">Cuando sientas miedo, decite a vos mismo:</p>
            <div className="space-y-2 bg-white rounded-lg p-4">
              <p className="text-purple-700 font-medium">"Estoy sintiendo miedo"</p>
              <p className="text-sm text-gray-600">(No "Soy miedoso")</p>
              <p className="text-purple-700 font-medium mt-3">"Estoy pensando que puedo fallar"</p>
              <p className="text-sm text-gray-600">(No "Voy a fracasar")</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Acción mínima de hoy:</h3>
            <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
              <p className="text-gray-800">✅ Sentí el miedo</p>
              <p className="text-gray-800">✅ Nombralo: "Estoy sintiendo miedo"</p>
              <p className="text-gray-800">✅ Actuá 5 minutos igual</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <p className="text-xl text-center text-blue-700 font-bold italic">
              "Tener miedo y avanzar es triunfo."
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong className="text-amber-700">Nota importante:</strong> El miedo no desaparece antes de actuar.
              Aparece MIENTRAS actuás. Y eso está bien. Significa que estás creciendo.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 4,
      title: 'Ser visto sin perfección',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            Uno de los mayores miedos es ser visto fallando. Hoy vamos a practicar vulnerabilidad consciente.
          </p>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Desafío del día:</h3>
            <p className="text-gray-800 mb-3">Enviá algo incompleto o informal a alguien de confianza</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Puede ser:</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-pink-200">
                <ArrowRight className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Una nota corta sin revisar</p>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-pink-200">
                <ArrowRight className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Una idea sin pulir</p>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-pink-200">
                <ArrowRight className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Un audio espontáneo</p>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-pink-200">
                <ArrowRight className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Un trabajo en progreso</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-3">Acompañalo con esta frase:</h3>
            <p className="text-blue-700 font-medium text-center text-lg italic">
              "Estoy practicando avanzar sin esperar perfección."
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-gray-800 text-center leading-relaxed">
              <strong className="text-green-700">Al hacerlo:</strong><br />
              Vas a sentir nervios. Eso es normal.<br />
              Vas a querer corregir. No lo hagas.<br />
              Dejalo imperfecto. Y celebrá tu valentía.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 5,
      title: 'Ritual de reparación',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">¿Qué pasa si realmente fallo?</h3>
            <p className="text-gray-700">Hoy aprendemos a repararnos emocionalmente después de un error.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Cuando algo no salga como esperabas:</h3>

            <div className="bg-white rounded-xl p-6 border-2 border-teal-200 space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">1. Decite a vos mismo:</p>
                <p className="text-teal-700 font-medium italic text-lg">"Estoy aprendiendo, no compitiendo."</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">2. Escribí 3 cosas que hiciste bien hoy:</p>
                <p className="text-gray-600 text-sm">Puede ser tan simple como "me levanté", "intenté algo", "no me rendí"</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">3. Regalo pequeño para vos:</p>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <p className="text-gray-800">☕ Un té</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <p className="text-gray-800">🎵 Música</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <p className="text-gray-800">😌 Descanso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
            <p className="text-center text-gray-800 text-lg leading-relaxed">
              <strong className="text-amber-700">Recordá:</strong><br />
              El error no te define.<br />
              Tu respuesta al error sí.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 6,
      title: 'Activar identidad valiente',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Reconectar con tu valentía</h3>
            <p className="text-gray-700">Ya fuiste valiente antes. Hoy lo recordamos.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Ejercicio de memoria emocional:</h3>
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
              <p className="text-gray-800 mb-4">Recordá y anotá 3 momentos en tu vida donde fuiste valiente:</p>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">Momento 1:</p>
                  <p className="text-gray-800 italic">¿Cuándo hiciste algo aunque tenías miedo?</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">Momento 2:</p>
                  <p className="text-gray-800 italic">¿Cuándo te arriesgaste y salió bien?</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">Momento 3:</p>
                  <p className="text-gray-800 italic">¿Cuándo te sorprendiste a vos mismo?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-3">Acción de hoy:</h3>
            <p className="text-gray-800 mb-3">Elegí una tarea chiquita pero simbólica. Algo que represente un pequeño desafío.</p>
            <p className="text-gray-800">Al hacerla, repetí:</p>
            <p className="text-blue-700 font-bold text-xl text-center mt-3 italic">
              "Este soy yo creciendo."
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
            <p className="text-gray-800 text-center">
              La valentía no es ausencia de miedo.<br />
              Es actuar a pesar de él.
            </p>
          </div>
        </div>
      )
    },
    {
      day: 7,
      title: 'Cierre integrativo',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
            <h3 className="font-bold text-gray-900 text-2xl mb-3 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              🎉 ¡Completaste los 7 días!
            </h3>
            <p className="text-gray-700 text-center text-lg">
              Es momento de integrar todo lo que viviste y aprendiste
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Reflexión final:</h3>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">💭 ¿Cómo me sentí cuando avancé pese al miedo?</p>
                <p className="text-gray-600 text-sm">Anota en el espacio de reflexión abajo</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">🌱 ¿Qué aprendí sobre mí esta semana?</p>
                <p className="text-gray-600 text-sm">¿Cómo cambió mi relación con el fracaso?</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">💪 ¿Qué momento me hizo sentir más valiente?</p>
                <p className="text-gray-600 text-sm">Recordá ese sentimiento</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border-2 border-orange-300">
            <h3 className="font-bold text-gray-900 text-xl mb-4 text-center">Carta a tu "yo del miedo":</h3>
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-800 text-lg italic text-center leading-relaxed">
                "Gracias por protegerme.<br />
                Ahora caminamos juntos."
              </p>
            </div>
            <p className="text-gray-700 text-center mt-4 text-sm">
              Escribí tu propia versión de esta carta en el espacio de reflexión
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <p className="text-gray-800 text-center leading-relaxed">
              <strong className="text-green-700 text-lg">Recordá siempre:</strong><br />
              Intentar es tu victoria.<br />
              No necesitás ser perfecto para ser valioso.<br />
              <span className="text-xl font-bold text-gray-900 mt-2 block">
                Cada paso que das con miedo es un acto de valentía pura.
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Guía Anti-Procrastinación
            </h1>
            <p className="text-2xl text-blue-700 font-bold mb-2">
              Miedo al Fracaso
            </p>
            <p className="text-lg text-gray-600 font-light mb-4">
              Cuando el miedo a equivocarte te detiene antes de empezar
            </p>
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">7 días de transformación</span>
            </div>
          </motion.div>

          {/* Mensaje Inicial */}
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
                Hay una parte tuya que quiere avanzar, lograr, crecer, sentir orgullo, comerse el mundo.
              </p>
              <p>
                Y hay otra parte — silenciosa pero poderosa — que dice:
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 my-4 border border-blue-200">
                <p className="text-center text-xl font-medium text-blue-800 italic">
                  "¿Y si intento… y no puedo?"
                </p>
              </div>
              <p>
                Y en ese choque interno, ganan la duda y la pausa.
              </p>
              <p className="font-medium">
                No porque seas débil, sino porque tu mente aprendió que fallar duele
                y decidió protegerte del dolor… deteniéndote.
              </p>
              <p className="text-xl font-bold text-blue-700 text-center my-6">
                Pero hoy empieza algo distinto:
              </p>
              <p>
                No vamos a obligarte a hacer. Vamos a enseñarte a sentirte seguro mientras hacés.
              </p>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 my-6 border border-indigo-200">
                <p className="text-lg text-center font-medium text-gray-900">
                  El coraje real no es avanzar sin miedo.<br />
                  <strong className="text-indigo-700">Es avanzar mientras temblás pero te elegís igual.</strong>
                </p>
              </div>
              <p className="text-2xl font-bold text-center text-gray-900">
                Ese es el músculo que vamos a despertar.
              </p>
            </div>
          </motion.div>

          {/* Qué es, cómo se siente */}
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
              ¿Qué es y cómo se siente?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Qué es</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Procrastinación causada por miedo al fracaso es un patrón donde evitás actuar porque tu identidad siente peligro si el resultado no sale bien.
                </p>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-800 text-center font-medium">
                    No posponés la tarea — <br />
                    <span className="text-blue-700 font-bold">posponés la posibilidad de decepción.</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Cómo se siente</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Bloqueo antes de empezar',
                    'Duda constante sobre tus capacidades',
                    'Sentimiento de "¿y si no soy capaz?"',
                    'Pensar mucho, hacer poco',
                    'Vergüenza anticipada',
                    'Comparación con otros',
                    'Empezar proyectos y abandonarlos al sentir presión'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-blue-50 rounded-lg p-3">
                      <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">✅ Qué provoca si no se atiende</h3>
                <div className="space-y-2">
                  {[
                    'Estancamiento personal',
                    'Baja autoestima',
                    'Distancia entre tus planes y tu realidad',
                    'Sensación de "tengo potencial pero no lo vivo"',
                    'Autocrítica constante'
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
                  <strong className="text-green-700">Este miedo existe porque tenés ambición.</strong><br />
                  Y sensibilidad. Y expectativas.<br />
                  No vamos a matar eso — vamos a transformarlo en valor, no en freno.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Day Selector */}
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

          {/* Ejercicios y Técnicas */}
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
                <h3 className="font-bold text-gray-900 text-lg mb-2">💬 Técnica del amigo</h3>
                <p className="text-gray-700">Háblate como hablarías a un amigo querido.</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🎯 Técnica "primero lo hago, después pienso"</h3>
                <p className="text-gray-700">2 minutos → luego reviso si sigo o paro.</p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🔁 Técnica "error = dato"</h3>
                <p className="text-gray-700 mb-2">Cada error se traduce a una oración:</p>
                <p className="text-pink-700 font-medium italic">"Ahora sé algo que antes no sabía."</p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                <h3 className="font-bold text-gray-900 text-lg mb-3">🧩 Técnica "yo puedo aprender"</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">Repetir:</p>
                  <p className="text-teal-700 font-bold text-lg text-center">"No tengo que saber. Tengo que aprender."</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reflexiones */}
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
                '¿Qué versión de mí quiero ver al intentar, no al ganar?',
                '¿Qué me da más miedo: fallar o nunca intentarlo?',
                '¿Qué parte mía necesita permiso a equivocarse?',
                '¿Qué me hace sentir orgulloso cuando actúo valiente?'
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
                "Intentar es mi victoria."
              </p>
            </div>
          </motion.div>

          {/* Regulación Emocional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Regulación Emocional Inmediata
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-gray-800">🫁 Respiración larga exhalada</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                <p className="text-gray-800">✋ Toque en brazos o pecho (regulación nerviosa)</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-gray-800">😮‍💨 Suspiro audible + hombros abajo</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                <p className="text-gray-800">🦸 Postura abierta (abre pecho, baja mandíbula)</p>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <p className="text-center text-gray-800">
                <strong className="text-green-700">Frase de seguridad:</strong><br />
                <span className="text-lg font-medium text-gray-900 italic">"Estoy a salvo mientras aprendo."</span>
              </p>
            </div>
          </motion.div>

          {/* Herramientas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Herramientas para Claridad y Energía
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-gray-900 text-lg mb-3">✅ Plan 1–1–1</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• 1 acción</p>
                  <p className="text-gray-700">• 1 persona a la que aviso o cuento</p>
                  <p className="text-gray-700">• 1 mini recompensa</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">✅ Micro–fuerza: avanzar 5 minutos</h3>
                <p className="text-gray-700">No necesitas terminar. Solo empezar 5 minutos.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">✅ Visualización realista:</h3>
                <p className="text-purple-700 font-medium italic text-center text-lg">"Voy a poder con esto, paso a paso."</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">✅ Diferenciar miedo útil vs. miedo protector</h3>
                <p className="text-gray-700">¿Este miedo me protege de un peligro real o me está frenando de crecer?</p>
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
              placeholder="Este es tu espacio seguro. Escribí libremente sobre tus miedos, tus intentos, tus victorias pequeñas, lo que aprendiste..."
              storageKey="miedo_al_fracaso_reflection"
            />
          </motion.div>

          {/* Cierre */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-300"
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Tu Camino de Valentía
              </h2>
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
                <p className="text-xl">
                  El miedo a fracasar no te frena porque seas débil —<br />
                  te frena porque tus sueños importan.
                </p>
                <p className="font-bold text-blue-700 text-2xl">
                  Pero ahora aprendiste algo fundamental:<br />
                  El fracaso no te rompe — el silencio sí.
                </p>
                <p>
                  No estás acá para ser perfecto.<br />
                  Estás acá para vivirte, intentar, aprender, expandirte.
                </p>
                <div className="bg-white rounded-2xl p-6 my-6">
                  <p className="text-2xl font-bold text-gray-900">
                    El éxito ahora es aparecer.<br />
                    Moverte. Decirte presente.
                  </p>
                </div>
                <p className="text-xl">
                  Tu valor no nace del resultado.<br />
                  Nace de la decisión valiente de intentarlo igual.
                </p>
                <p className="text-3xl font-bold text-indigo-600">
                  Bienvenido al camino de las personas que no esperan ser invencibles para avanzar —<br />
                  avanzan para volverse más fuertes.
                </p>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 mt-6 border-2 border-green-300">
                  <p className="text-2xl font-bold text-gray-900">
                    Estás creciendo.<br />
                    Y eso ya es victoria.
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
