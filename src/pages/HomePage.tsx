import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Heart, Zap, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'MasDopamina – Recuperá el control de tu vida';
  }, []);
  const programs = [
    {
      id: 'stress-reset',
      name: 'Test de Tipo de Estrés',
      description: 'Test de estrés + ejercicios guiados, técnicas de respiración, relajación y regulación emocional.',
      icon: Heart,
      color: '#3b82f6',
      link: '/testestres',
      guideLink: '/acceso-guias-estres'
    },
    {
      id: 'anti-procrastination',
      name: 'Test de Tipo de Procrastinación',
      description: 'Plan completo para romper la procrastinación, construir disciplina y activar tu versión más productiva.',
      icon: Zap,
      color: '#f59e0b',
      link: '/antiprocrastinacion',
      guideLink: '/acceso-guias-procrastinacion'
    },
    {
      id: 'iq-boost',
      name: 'IQ Boost Test',
      description: 'Evaluación cognitiva para medir tu nivel intelectual y recibir técnicas para mejorar tu capacidad mental y rendimiento.',
      icon: Brain,
      color: '#10b981',
      link: '/testiq',
      guideLink: null
    }
  ];

  const testimonials = [
    {
      name: 'Laura G.',
      program: 'Test de Tipo de Estrés',
      text: 'Volví a sentir claridad. Los ejercicios de respiración y rutina diaria me cambiaron la semana completa.',
      rating: 5
    },
    {
      name: 'Sofía P.',
      program: 'Test de Tipo de Procrastinación',
      text: 'En dos días ya estaba organizando mi vida de nuevo. Pasé de postergar todo a avanzar sin miedo.',
      rating: 5
    },
    {
      name: 'Diego F.',
      program: 'IQ Boost Test',
      text: 'Entendí mi perfil mental y recibí ejercicios para mejorar. Se siente como actualizar tu mente.',
      rating: 5
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/595XXXXXXXXX', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              MasDopamina
            </span>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#programas"
            className="text-gray-600 hover:text-emerald-600 font-medium transition-colors"
          >
            Programas
          </motion.a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Recuperá el control<br />de tu vida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Transformá tu enfoque, energía y disciplina mental con herramientas diseñadas para ayudarte a dominar tu mente, elevar tu productividad y recuperar tu bienestar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-10 max-w-2xl mx-auto"
            >
              {[
                'Métodos para mejorar tu enfoque y hábitos',
                'Estrategias científicas para tu bienestar mental',
                'Ejercicios y planes prácticos para resultados reales'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-center space-x-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="font-light">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#programas"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Empezar ahora</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section id="programas" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Programas para elevar tu potencial mental
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Elegí el camino que mejor se adapta a vos. Te acompañamos paso a paso a construir una mente fuerte, enfocada y en paz.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto flex flex-col gap-16">
            {programs.map((program, index) => {
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{ backgroundColor: `${program.color}15` }}
                  >
                    <program.icon className="w-8 h-8" style={{ color: program.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    {program.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {program.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {program.link ? (
                      <Link to={program.link} className="flex-1">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                          style={{
                            backgroundColor: `${program.color}15`,
                            color: program.color
                          }}
                        >
                          <span>Quiero este programa</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    ) : (
                      <div
                        className="flex-1 w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 opacity-50"
                        style={{
                          backgroundColor: `${program.color}15`,
                          color: program.color
                        }}
                      >
                        <span>Próximamente</span>
                      </div>
                    )}

                    {program.guideLink && (
                      <Link to={program.guideLink} className="flex-1">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border-2"
                          style={{
                            borderColor: program.color,
                            color: program.color,
                            backgroundColor: 'white'
                          }}
                        >
                          <span>Acceder a mi guía</span>
                        </motion.div>
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsCarousel testimonials={testimonials} />

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Cuidar tu mente es amarte
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-light mb-10">
              <p>Tu mente es tu hogar.</p>
              <p>Cuando la fortalecés, todo en tu vida empieza a alinearse: tus hábitos, tu energía, tu disciplina, tus metas y tu paz interior.</p>
              <p>No estás roto — solo necesitás estructura, claridad y herramientas adecuadas.</p>
              <p>Hoy podés elegir empezar a sentirte en control otra vez.</p>
              <p className="font-medium text-emerald-700">Dale a tu mente lo que merece.</p>
            </div>
            <motion.a
              href="#programas"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Elegir mi camino</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              ¿Podemos ayudarte con algo <span onClick={() => navigate('/admin')} className="cursor-default">más</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Si necesitás soporte, querés hablar con un asesor o buscás algo más personalizado… estamos para vos.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hablar por WhatsApp</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              MasDopamina
            </span>
          </div>
          <p className="text-sm text-gray-600 font-light">
            © 2025 MasDopamina | Transformando vidas desde Paraguay | Wellness + Enfoque + Crecimiento
          </p>
        </div>
      </footer>
    </div>
  );
}
