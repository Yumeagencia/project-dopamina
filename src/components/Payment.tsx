import { motion } from 'framer-motion';
import { Lock, Shield, ArrowRight, Check, Star, Clock, TrendingUp } from 'lucide-react';
import Header from './Header';
import { analyticsEvents } from '../utils/analytics';

interface PaymentProps {
  onPaymentComplete: () => void;
  onSkipPayment: () => void;
}

export default function Payment({ onPaymentComplete, onSkipPayment }: PaymentProps) {
  const handlePayment = () => {
    analyticsEvents.viewPayment();
    alert('Integración de pago (Stripe/Bancard/Pagopar) - Por implementar según tu proveedor de pago preferido');
    analyticsEvents.completePayment();
    onPaymentComplete();
  };

  const handleSkip = () => {
    analyticsEvents.skipPayment();
    onSkipPayment();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-white flex flex-col">
      <Header showHomeButton={false} />
      <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-center mb-8"
          >
            <div className="relative inline-block mb-6">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-full shadow-2xl">
                <span className="text-5xl">🧠</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Tu resultado está listo
            </h1>
            <p className="text-xl text-gray-600 font-light mb-2">
              Para ver tu puntaje exacto, compararlo con el promedio nacional y recibir una interpretación completa, desbloqueá el acceso
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#00B7C2] to-[#009ba5] rounded-3xl p-8 mb-6 shadow-2xl border-4 border-white"
          >
            <div className="text-center mb-6">
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 text-yellow-300">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-white text-xs mt-1">Más de 10,000 personas satisfechas</p>
              </div>
              <div className="text-white text-5xl md:text-6xl font-bold mb-2">Gs. 12.000</div>
              <div className="flex items-center justify-center space-x-4 text-white text-opacity-90">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-light">Pago único</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-light">Acceso inmediato</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              {[
                'Tu puntaje de IQ estimado exacto',
                'Comparación con el promedio nacional',
                'Análisis detallado de tus fortalezas',
                'Interpretación personalizada completa',
                'Certificado digital descargable'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-white"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                    <Check className="w-4 h-4 text-[#00B7C2]" strokeWidth={3} />
                  </div>
                  <span className="font-light">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePayment}
              className="w-full bg-white text-[#00B7C2] font-bold text-lg py-5 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Ver mi resultado completo
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <div className="flex items-center justify-center text-white text-opacity-90 text-sm mt-4">
              <Lock className="w-4 h-4 mr-2" />
              <span className="font-light">Pago seguro – No se guardan tus datos</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-6"
          >
            <button
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700 text-sm font-light underline transition-colors duration-200"
            >
              Ver resumen básico gratis
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-[#00B7C2] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Garantía de satisfacción</h3>
                <p className="text-sm text-gray-600 font-light">
                  Si no estás completamente satisfecho con tu resultado, te devolvemos el 100% de tu dinero en 48 horas.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4"
      >
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
          © 2025 Veldo Labs | Hecho con desde Paraguay | #ConfianzaQueLlega
        </div>
      </motion.footer>
    </div>
  );
}
