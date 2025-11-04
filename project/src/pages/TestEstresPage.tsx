import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ParticleBackground from '../components/ParticleBackground';
import StressQuiz from '../components/StressQuiz';
import PostQuizOffer from '../components/PostQuizOffer';
import PaymentScreen from '../components/PaymentScreen';
import { calculateStressResult, StressResult } from '../data/stressQuestions';

type Screen = 'landing' | 'quiz' | 'offer' | 'payment';

export default function TestEstresPage() {
  useEffect(() => {
    document.title = 'Test de Tipo de Estrés – MasDopamina';
  }, []);
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [stressResult, setStressResult] = useState<StressResult | null>(null);
  const navigate = useNavigate();
  const benefits = [
    'Respiraciones y técnicas para bajar ansiedad en minutos',
    'Ejercicios de regulación emocional basados en neurociencia y mindfulness',
    'Plan diario y plan semanal fácil de aplicar',
    'Estrategias para recuperar claridad mental y energía',
    'Habit tracker + checklist de bienestar',
    'Frases guía y herramientas de calma',
    'Recomendación sobre cuándo buscar apoyo profesional'
  ];

  const outcomes = [
    'Volver a sentirte vos',
    'Recuperar energía y ganas',
    'Dormir mejor y pensar más claro',
    'Responder en vez de reaccionar',
    'Volver a disfrutar — de verdad',
    'Conectar con calma, enfoque y propósito'
  ];

  const handleStartTest = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (answers: number[]) => {
    const result = calculateStressResult(answers);
    setStressResult(result);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setCurrentScreen('offer');
  };

  const handleCheckout = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setCurrentScreen('payment');
  };

  const handleReset = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setCurrentScreen('landing');
    setStressResult(null);
  };

  if (currentScreen === 'quiz') {
    return <StressQuiz onComplete={handleQuizComplete} />;
  }

  if (currentScreen === 'offer' && stressResult) {
    return (
      <PostQuizOffer
        testType="stress"
        resultType={stressResult.type}
        onCheckout={handleCheckout}
        onHomeClick={handleReset}
      />
    );
  }

  if (currentScreen === 'payment' && stressResult) {
    return (
      <PaymentScreen
        testType="stress"
        resultType={stressResult.type}
        onHomeClick={handleReset}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-green-50 to-teal-50">
      <ParticleBackground />
      <Header />

      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-green-100 mb-8">
              <Heart className="w-10 h-10 text-teal-600" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Recuperá tu calma.<br />Volvé a sentir control.
            </h1>

            <p className="text-2xl text-gray-700 font-light mb-8 leading-relaxed">
              Tomá 5 minutos para entender tu nivel real de estrés y recibir una guía personalizada para volver a sentirte bien, claro y en control de tu vida.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg mb-10"
            >
              <p className="text-lg text-gray-800 leading-relaxed space-y-4">
                <span className="block font-medium text-gray-900">No estás solo y no estás roto.</span>
                <span className="block">
                  Tu mente y tu cuerpo están pidiendo pausa y dirección — no fuerza.
                </span>
                <span className="block">
                  Con el <span className="font-semibold text-teal-700">Stress Reset Scan</span> vas a descubrir qué tipo de estrés estás viviendo, qué nivel tenés y qué pasos concretos necesitás para volver a tu centro, recuperar energía y reconectar con vos.
                </span>
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartTest}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-lg font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Iniciar evaluación ahora</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Realizá tu Stress Reset Scan
            </h2>
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-10">
              Evalúa tu estado mental y emocional a través de 30 preguntas diseñadas para identificar tu nivel de estrés, tu patrón mental y tu tipo personal de respuesta.
              <br /><br />
              Al finalizar, vas a recibir un plan personalizado para tu caso.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartTest}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 mb-4"
            >
              <span>Comenzar el Test</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <p className="text-sm text-gray-500 font-light">
              El test toma 3–5 minutos. Respuestas privadas y confidenciales.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Una guía diseñada para tu mente, tu energía y tu momento.
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Según tu resultado, recibirás un plan de regulación y bienestar hecho para vos:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-10 md:p-12 shadow-xl"
          >
            <div className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-light">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
              <p className="text-gray-800 font-light leading-relaxed italic">
                No te damos "motivación vacía". Te damos herramientas reales para transformar tu estado interno.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-100/50 via-green-100/50 to-teal-100/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Tu bienestar mental importa.
            </h2>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-xl mb-12">
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed font-light">
                <p className="font-medium text-xl text-gray-900">
                  No tenés que seguir "aguantando".<br />
                  No tenés que hacerlo solo.
                </p>
                <p>
                  Tu mente está pidiendo cuidado, dirección y un espacio seguro para bajar la tensión y volver a encontrar claridad.
                </p>
                <p className="font-medium text-gray-900">
                  Este test no es un fin.<br />
                  Es tu primer paso a:
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4"
                  >
                    <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-800 font-light">{outcome}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-2xl font-medium text-gray-900 mb-8" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Tu mente es tu casa. Cuidarla no es un lujo — es amor propio.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartTest}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-lg font-semibold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span>Empezar ahora y resetear mi mente</span>
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
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              <span className="font-medium">Nota importante:</span> Esta herramienta no reemplaza acompañamiento profesional psicológico o médico. Si sentís síntomas intensos, buscá ayuda especializada.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
