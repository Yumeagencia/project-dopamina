import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Target, Clock, Zap, Sparkles, MessageCircle, Lightbulb, TrendingUp, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ParticleBackground from '../components/ParticleBackground';
import ProcrastinationQuiz from '../components/ProcrastinationQuiz';

export default function AntiProcrastinacionPage() {
  useEffect(() => {
    document.title = 'Test de Tipo de Procrastinación – MasDopamina';
  }, []);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setShowQuiz(true);
  };

  if (showQuiz) {
    return <ProcrastinationQuiz />;
  }
  const features = [
    {
      icon: Target,
      title: 'Método para superar el bloqueo inicial',
      description: 'Técnicas comprobadas para vencer la parálisis del inicio'
    },
    {
      icon: Lightbulb,
      title: 'Ejercicios para desactivar miedo mental y autocrítica',
      description: 'Herramientas para silenciar la voz que te detiene'
    },
    {
      icon: Coffee,
      title: 'Sistema simple para organizar tareas sin saturarte',
      description: 'Claridad sin abrumarte con listas infinitas'
    },
    {
      icon: Zap,
      title: 'Herramientas para gestionar energía y evitar burnout',
      description: 'Productividad sostenible que cuida tu bienestar'
    },
    {
      icon: Clock,
      title: 'Rutina de enfoque diario + ritual de inicio',
      description: 'Estructura simple para comenzar cada día con intención'
    },
    {
      icon: TrendingUp,
      title: 'Técnica de micro-acciones y momentum',
      description: 'Pequeños pasos que generan grandes resultados'
    },
    {
      icon: CheckCircle,
      title: 'Plan semanal imprimible + habit tracker',
      description: 'Herramientas prácticas para seguir tu progreso'
    },
    {
      icon: Sparkles,
      title: 'Scripts mentales para días difíciles',
      description: 'Frases guía para cuando necesitás un empujón'
    }
  ];

  const outcomes = [
    'Ganar claridad mental',
    'Sentirte orgulloso de vos',
    'Recuperar motivación y energía',
    'Ordenar tu vida sin caos',
    'Volver a confiar en tu palabra',
    'Construir disciplina que se siente bien'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      <ParticleBackground />
      <Header />

      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 mb-8">
              <Zap className="w-10 h-10 text-orange-600" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Dejá de postergar.<br />Empezá a avanzar hoy.
            </h1>

            <p className="text-2xl text-gray-700 font-light mb-8 leading-relaxed">
              Construí disciplina real con un plan diseñado para tu mente, tu energía y tu momento. Sin presión. Sin culpa. Sin excusas que te limiten.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg mb-10"
            >
              <p className="text-lg text-gray-800 leading-relaxed space-y-4">
                <span className="block font-medium text-gray-900">La procrastinación no es flojera.</span>
                <span className="block">
                  Es ruido mental, falta de claridad, miedo al inicio y agotamiento acumulado.
                </span>
                <span className="block">
                  Esta guía te ayuda a cortar el ciclo, recuperar tu enfoque y volver a sentirte en control de tu vida.
                </span>
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartQuiz}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-lg font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Hacer el test de procrastinación</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Una guía diseñada para que pases del pensar al hacer.
            </h2>
            <p className="text-xl text-gray-600 font-light">
              No más "mañana empiezo".<br />
              Vas a recibir un sistema práctico para iniciar, sostener y completar lo que empezás.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 font-light">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartQuiz}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-lg font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Hacer el test de procrastinación</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Funciona porque funciona con tu mente — no contra ella.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-10 md:p-12 shadow-xl mb-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Psicología del enfoque y hábitos</h3>
                  <p className="text-gray-700 font-light">Basado en cómo realmente funciona tu cerebro</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Estrategias simples y sostenibles</h3>
                  <p className="text-gray-700 font-light">Sin complicaciones ni sistemas imposibles de mantener</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Micro-pasos diarios para generar momentum</h3>
                  <p className="text-gray-700 font-light">Pequeñas acciones que crean grandes cambios</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Herramientas para cortar la autoexigencia paralizadora</h3>
                  <p className="text-gray-700 font-light">Liberarte del perfeccionismo que te detiene</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rutina de 7 días + sistema de continuidad</h3>
                  <p className="text-gray-700 font-light">Plan completo para crear el hábito de avanzar</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-orange-100"
          >
            <p className="text-lg text-gray-800 font-light leading-relaxed italic text-center">
              No necesitás fuerza de voluntad extrema.<br />
              Sólo necesitás empezar distinto.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-orange-100/50 via-amber-100/50 to-yellow-100/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Ya sabés lo que querés.<br />Ahora es momento de hacerlo realidad.
            </h2>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl mb-12">
              <div className="space-y-4 mb-10">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-800 font-light text-lg">{outcome}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-2xl font-medium text-gray-900 mb-8 leading-relaxed" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Cada pequeña acción cuenta.<br />
                  Y hoy podés elegir cambiar el rumbo con una guía que te acompaña paso a paso.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartQuiz}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-lg font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span>Hacer el test de procrastinación</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity">
              <Sparkles className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                MasDopamina
              </span>
            </Link>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-green-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Soporte WhatsApp</span>
            </motion.a>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700 leading-relaxed font-light italic">
              Tu proceso vale. Tu ritmo también.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
