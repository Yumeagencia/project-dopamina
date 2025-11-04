import { motion } from 'framer-motion';
import { Lock, Calendar } from 'lucide-react';
import Header from '../components/Header';
import JournalInput from '../components/JournalInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface GuideTemplateProps {
  guideType: 'stress' | 'procrastination';
  resultType: string;
  username: string;
  password: string;
}

export default function GuideTemplate({ guideType, resultType, username, password }: GuideTemplateProps) {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white flex flex-col">
        <Header showHomeButton={true} onHomeClick={handleHomeClick} />

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Acceder
                </button>
              </form>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => navigate(guideType === 'stress' ? '/testestres' : '/antiprocrastinacion')}
                  className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl border-2 border-gray-300 transition-all duration-300 hover:border-purple-400 hover:shadow-md"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white">
      <Header showHomeButton={true} onHomeClick={handleHomeClick} />

      <div className="px-4 py-12 pt-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              {guideType === 'stress' ? 'Guía de Recuperación' : 'Guía Anti-Procrastinación'}
            </h1>
            <p className="text-2xl text-gray-700 font-light mb-2">
              {resultType}
            </p>
            <p className="text-lg text-gray-600 font-light">
              Tu camino personalizado de 7 días hacia el bienestar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 mb-8"
          >
            <div className="prose prose-lg max-w-none">
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 font-light mb-4">
                  Contenido de la guía en desarrollo
                </p>
                <p className="text-gray-500 font-light">
                  Pronto estará disponible tu protocolo personalizado de 7 días
                </p>
              </div>
            </div>
          </motion.div>

          {/* Journal de Reflexión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Espacio de Reflexión
            </h2>
            <JournalInput
              prompt="¿Cómo te sentís hoy? Dejá fluir tus pensamientos:"
              placeholder="Este es tu espacio seguro. Escribí libremente sobre cómo te sentís, qué estás pensando, qué te preocupa..."
              storageKey={`${resultType.toLowerCase().replace(/\s+/g, '_')}_reflection`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200"
          >
            <p className="text-center text-gray-700 font-light">
              Si tenés dudas o necesitás apoyo, contactanos por WhatsApp
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
