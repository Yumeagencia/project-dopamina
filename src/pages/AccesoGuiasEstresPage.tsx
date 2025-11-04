import { motion } from 'framer-motion';
import { Heart, Brain, Flame, Zap, ArrowLeft, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function AccesoGuiasEstresPage() {
  const navigate = useNavigate();

  const guides = [
    {
      id: 'estresagudo',
      title: 'Estrés Agudo',
      description: 'Cuando la vida aprieta rápido y tu cuerpo reacciona para protegerte',
      icon: Zap,
      color: 'from-blue-500 to-teal-500',
      bgColor: 'from-blue-50 to-teal-50',
      borderColor: 'border-blue-300',
      route: '/guia-estres/estresagudo'
    },
    {
      id: 'estresepisodico',
      title: 'Estrés Acumulado',
      description: 'Cuando el estrés se convierte en un hábito constante',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-300',
      route: '/guia-estres/estresepisodico'
    },
    {
      id: 'estrescronico',
      title: 'Estrés Crónico',
      description: 'Cuando el estrés se instala y no desaparece',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50',
      borderColor: 'border-red-300',
      route: '/guia-estres/estrescronico'
    },
    {
      id: 'burnout',
      title: 'Burnout',
      description: 'Cuando el agotamiento emocional llega a su límite',
      icon: Flame,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-300',
      route: '/guia-estres/burnout'
    }
  ];

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleGuideClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <Header showHomeButton={true} onHomeClick={handleHomeClick} />

      <div className="px-4 py-12 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
          <motion.button
            onClick={handleHomeClick}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </motion.button>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Acceso a Guías de Estrés
            </h1>
            <p className="text-2xl text-gray-700 font-light mb-6">
              Seleccioná tu guía para continuar tu proceso de recuperación
            </p>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Cada guía está diseñada específicamente para tu tipo de estrés, con ejercicios prácticos, técnicas validadas y un plan día a día para recuperar tu bienestar.
            </p>
          </motion.div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${guide.bgColor} rounded-3xl p-8 shadow-xl border-2 ${guide.borderColor} hover:shadow-2xl transition-shadow`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${guide.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                      {guide.title}
                    </h3>
                    <p className="text-gray-700 font-light mb-6 flex-1">
                      {guide.description}
                    </p>

                    <motion.button
                      onClick={() => handleGuideClick(guide.route)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r ${guide.color} hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl`}
                    >
                      Acceder a mi guía
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                ¿Necesitás tus credenciales?
              </h3>
              <p className="text-gray-700 font-light mb-6">
                Si compraste alguna de las guías y no recibiste automáticamente tu usuario y clave de acceso, contáctanos por WhatsApp
              </p>
              <a
                href="https://wa.me/595987483489"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
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
