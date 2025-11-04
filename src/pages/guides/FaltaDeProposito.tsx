import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Calendar, Sparkles, CheckCircle, Heart, Target, Zap, BookOpen, Home, Compass } from 'lucide-react';
import Header from '../../components/Header';
import JournalInput from '../../components/JournalInput';
import { useNavigate } from 'react-router-dom';

export default function FaltaDeProposito() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [currentDay, setCurrentDay] = useState(1);
  const navigate = useNavigate();

  const username = 'procrastproposito';
  const password = 'procrastproposito789';

  useEffect(() => {
    document.title = 'Guía Anti-Procrastinación: Falta de Propósito – MasDopamina';
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex flex-col">
        <Header showHomeButton={true} onHomeClick={handleHomeClick} />

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-indigo-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Acceder
                </button>
              </form>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => navigate('/antiprocrastinacion')}
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-indigo-400 hover:shadow-md"
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
      title: 'Silencio para escuchar',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-indigo-600">Objetivo:</strong> bajar ruido, abrir espacio interno
          </p>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200">
            <p className="text-2xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Pregunta del día
            </p>
            <p className="text-xl text-center text-indigo-700 italic font-medium">
              "¿Qué emoción está bajo mi quietud?"
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Acción de hoy:</h3>
            <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
              <p className="text-gray-800">✅ 10 minutos sin pantallas</p>
              <p className="text-gray-800">✅ Respiración lenta mano en pecho</p>
              <p className="text-gray-800">✅ Pregunta: "¿Qué emoción está bajo mi quietud?"</p>
              <p className="text-gray-800">✅ Escribir sin filtro 5 min</p>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 2,
      title: 'Memoria de quién eras',
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-100 rounded-xl p-6 border-2 border-indigo-300">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: reconectar con esencia</h3>
            <p className="text-gray-800">Estás recordando quién eras antes del ruido.</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Instrucciones:</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Pregunta: "¿Qué me emocionaba antes?"</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <p className="text-gray-800">Hacer una actividad breve relacionada (aunque no sientas ganas)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <p className="text-xl text-center text-indigo-700 font-medium italic">
              "Estoy recordando."
            </p>
          </div>
        </div>
      )
    },
    {
      day: 3,
      title: 'Deseo pequeño',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-indigo-600">Objetivo:</strong> despertar impulso interno
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Técnica de hoy:</h3>
            <div className="space-y-2">
              <p className="text-gray-800">✅ Completar frase 10 veces: "Me gustaría…"</p>
              <p className="text-gray-800">✅ Elegir una microacción (5–10 min) hacia uno de esos deseos</p>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 4,
      title: 'Filtrar lo ajeno',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: soltar la vida vivida para complacer</h3>
            <p className="text-gray-700">Hoy vas a liberar expectativas que no son tuyas.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-indigo-200">
                <p className="text-gray-800">📝 Lista de expectativas externas que estás cargando</p>
                <p className="text-gray-800">❌ Tachar las que no son tuyas</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
            <p className="text-xl text-center text-indigo-700 font-medium italic">
              Ritual: decir "Eso no es mío."
            </p>
          </div>
        </div>
      )
    },
    {
      day: 5,
      title: 'Redefinir propósito',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong className="text-indigo-600">Objetivo:</strong> reescribir sentido personal
          </p>

          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            Micro–propósito = propósito aterrizado al día a día.
          </p>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-lg">Responder:</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
                <p className="text-gray-800 font-medium">¿Qué me hace sentir vivo?</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
                <p className="text-gray-800 font-medium">¿Qué quiero crear más en el mundo?</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
                <p className="text-gray-800 font-medium">¿Qué micro–propósito puedo vivir hoy?</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 6,
      title: 'Acción con alma',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="font-bold text-gray-900 text-xl mb-3">Objetivo: conectar hacer con ser</h3>
            <p className="text-gray-700">El propósito se siente, no se piensa.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-indigo-200">
            <h3 className="font-bold text-gray-900 mb-3">Acción de hoy:</h3>
            <div className="space-y-2">
              <p className="text-gray-800">✅ Definir una acción que tenga intención detrás</p>
              <p className="text-gray-800">✅ Hacerla lento, presente, consciente</p>
            </div>
          </div>
        </div>
      )
    },
    {
      day: 7,
      title: 'Integración',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300">
            <h3 className="font-bold text-gray-900 text-2xl mb-3 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              🎉 ¡Llegaste al día 7!
            </h3>
            <p className="text-gray-700 text-center text-lg">
              Objetivo: cerrar etapa y abrir camino
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Acción de hoy:</h3>
            <div className="bg-white rounded-xl p-6 border-2 border-indigo-200 space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">✅ Reflexión: "Qué descubrí de mí esta semana"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">✅ Escribir carta a tu yo futuro</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">✅ Ritual simbólico: luz, agua o naturaleza</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-8 border-2 border-indigo-300">
            <h3 className="font-bold text-gray-900 text-xl mb-4 text-center">Tu nuevo comienzo:</h3>
            <p className="text-xl text-center text-indigo-800 font-bold italic mb-4">
              "Mi propósito vuelve cuando vuelvo a mí."
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <p className="text-gray-800 text-center leading-relaxed">
              <strong className="text-green-700">Recordá:</strong><br />
              No estás estancado. Estás gestando.<br />
              <span className="text-lg font-bold text-gray-900 mt-2 block">
                Lo que parece quietud es preparación interna.
              </span>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      <Header showHomeButton={true} onHomeClick={handleHomeClick} />

      <div className="px-4 py-12 pt-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <Compass className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Guía Anti-Procrastinación
            </h1>
            <p className="text-2xl text-indigo-700 font-bold mb-2">
              Procrastinación por Falta de Propósito
            </p>
            <p className="text-lg text-gray-600 font-light mb-4">
              Cuando el motor no es la fuerza sino el sentido — y hoy falta chispa interna
            </p>
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span className="font-semibold text-gray-900">7 días de reconexión</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Mensaje Inicial
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Hay días donde no es que no puedas.<br />
                Es que no sabés para qué.
              </p>
              <p>
                Podés tener energía, inteligencia, capacidad…<br />
                pero si no hay sentido, la mente no avanza.<br />
                No porque seas débil, sino porque sos humano.
              </p>
              <p className="text-xl font-bold text-indigo-700 text-center my-6">
                El alma no se mueve por fuerza.<br />
                Se mueve por dirección. Por verdad. Por deseo.
              </p>
              <p>
                Cuando la energía se apaga, a veces no falta disciplina —<br />
                falta propósito.
              </p>
              <p>
                Y esa pausa que estás sintiendo ahora…<br />
                no es fracaso.<br />
                Es un llamado.
              </p>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 my-6 border border-indigo-200">
                <p className="text-lg text-center font-medium text-gray-900">
                  Un llamado a volver a vos.<br />
                  A revisar qué estás haciendo, para quién, y por qué.
                </p>
              </div>
              <p className="text-lg text-center font-medium">
                Hoy no vamos a buscar motivación.<br />
                Vamos a sembrarla.
              </p>
              <p className="text-center">
                Porque las ganas no aparecen mágicamente:<br />
                se construyen desde el interior.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Qué es, cómo se siente y qué provoca?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-700 mb-3">✅ Qué es</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Procrastinación por falta de propósito ocurre cuando la acción no tiene conexión emocional o existencial.
                </p>
                <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                  <p className="text-gray-800 font-medium text-center">
                    El cuerpo no avanza porque la mente no encuentra "para qué".
                  </p>
                  <p className="text-gray-700 italic text-center mt-2">
                    Es el estado donde trabajar sin alma se vuelve imposible.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-700 mb-3">✅ Cómo se siente</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Vacío suave o desgaste existencial',
                    'Falta de entusiasmo',
                    'Rutina sin emoción',
                    'Ideas sin pasión',
                    'Dudas sobre el camino',
                    '"Sé que puedo más, pero no siento el impulso"',
                    'Desconexión de metas y del futuro',
                    'Falta de dirección, no de talento'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-indigo-50 rounded-lg p-3">
                      <Zap className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-700 italic mt-4 font-medium">
                  No es apatía — es desalineación interna.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-700 mb-3">✅ Qué provoca si no lo tratás</h3>
                <div className="space-y-2">
                  {[
                    'Sentido perdido',
                    'Estancamiento emocional',
                    'Vida en piloto automático',
                    'Autoimagen de "no progreso"',
                    'Ansiedad existencial o culpa',
                    'Sensación de perder tiempo/vida'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-indigo-600">→</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <p className="text-center text-gray-800 text-lg leading-relaxed">
                  <strong className="text-green-700">No necesitás presión.</strong><br />
                  Necesitás encuentro interno.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 mb-8"
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
                    <span className="text-gray-700">que seas flojo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">falta de ambición</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">falta de disciplina</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">incapacidad</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-gray-700">que "no sabés lo que querés en la vida"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-700 mb-3">Significa:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">necesitás reconectar con tus deseos reales</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">estás en una etapa de transición interior</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">tu alma pide autenticidad</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">estás listo para una vida más alineada</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-gray-700">tu energía se apagó para protegerte del camino equivocado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6 border border-indigo-200">
                <p className="text-center text-gray-800 text-lg font-medium">
                  No estás perdido.<br />
                  Estás afinando tu brújula.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-200 mb-8"
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
                      ? 'bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-indigo-200">
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
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Ejercicios y Técnicas Mentales
            </h2>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🌿 Técnica "sentido pequeño"</h3>
                <p className="text-gray-700">Preguntar: "¿Qué le da sentido a este momento?"</p>
                <p className="text-gray-600 text-sm mt-2">Pequeño, accesible, real.</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🔑 Técnica "2 niveles"</h3>
                <p className="text-gray-700">Propósito grande (visión) + Propósito pequeño (hoy)</p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">🧩 Técnica "micro-identidad"</h3>
                <p className="text-gray-700 mb-2">"Hoy actúo como alguien que ___"</p>
                <p className="text-gray-600 text-sm">(elige: avanza, crea, cuida, escucha, empieza)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Reflexiones Guiadas
            </h2>

            <div className="space-y-4 mb-8">
              {[
                '¿Qué parte de mí está pidiendo un nuevo comienzo?',
                '¿Qué deseo estoy ignorando?',
                '¿Qué me emociona aunque sea un poquito?',
                'Si no tuviera miedo al juicio, ¿qué haría distinto?'
              ].map((question, i) => (
                <div key={i} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200">
                  <p className="text-gray-800 font-medium">{question}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300">
              <p className="text-xl text-center text-gray-900 font-bold">
                Afirmación:
              </p>
              <p className="text-2xl text-center text-green-700 font-bold italic mt-2">
                "Mi propósito vuelve cuando vuelvo a mí."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Regulación Emocional Inmediata
            </h2>

            <div className="space-y-4">
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                <p className="text-gray-800">✅ Manos en pecho + respiración lenta</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                <p className="text-gray-800">✅ Mirar al horizonte 30 segundos</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                <p className="text-gray-800">✅ Suspiro audible</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 mt-6">
              <p className="text-center text-gray-800 text-lg font-medium italic">
                "No tengo que saberlo todo hoy."
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mt-6">
              <p className="text-center text-gray-800 text-lg font-medium">
                Tu propósito no está perdido.<br />
                Está adentro tuyo, respirando.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.67 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-200 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Herramientas para Claridad y Energía
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 text-center">
                <p className="text-gray-800 font-medium">✅ Menos ruido → más alma</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 text-center">
                <p className="text-gray-800 font-medium">✅ Micro acciones con intención</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 text-center">
                <p className="text-gray-800 font-medium">✅ Espacios de silencio emocional</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 text-center">
                <p className="text-gray-800 font-medium">✅ Comunidad nutritiva</p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 text-center col-span-2">
                <p className="text-gray-800 font-medium">✅ Movimiento lento + luz + agua</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mt-6">
              <p className="text-center text-gray-800 text-lg font-medium">
                El propósito es un fuego pequeño.<br />
                Primero se protege, después crece.
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
              placeholder="Este es tu espacio seguro. Escribí libremente sobre cómo te sentís, qué deseos reconocés, qué te emociona aunque sea un poco..."
              storageKey="faltadeproposito_reflection"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-indigo-300"
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                Cierre
              </h2>
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
                <p className="text-xl">
                  No estás estancado.<br />
                  Estás gestando.
                </p>
                <p>
                  Lo que parece quietud es preparación interna.<br />
                  Lo que parece falta de ganas es búsqueda de verdad.
                </p>
                <p className="font-medium">
                  No viniste a cumplir un rol.<br />
                  Viniste a encontrarte.
                </p>
                <div className="bg-white rounded-2xl p-6 my-6">
                  <p className="text-2xl font-bold text-gray-900">
                    Y en esta pausa profunda,<br />
                    estás naciendo de nuevo.
                  </p>
                </div>
                <p>
                  No apures tu alma.<br />
                  Acompañala.
                </p>
                <p className="text-2xl font-bold text-indigo-600">
                  Porque el propósito no se fuerza —<br />
                  se revela cuando estás listo para sostenerlo.<br />
                  Y lo estás.
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
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-indigo-400 hover:shadow-lg"
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
