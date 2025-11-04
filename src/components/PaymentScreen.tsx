import { motion } from 'framer-motion';
import { CheckCircle, Lock, CreditCard, Shield, Clock } from 'lucide-react';
import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PaymentScreenProps {
  testType: 'stress' | 'procrastination';
  resultType: string;
  onHomeClick: () => void;
}

export default function PaymentScreen({ testType, resultType, onHomeClick }: PaymentScreenProps) {
  const navigate = useNavigate();
  const [showCredentials, setShowCredentials] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    phone: false
  });

  const getGuideInfo = () => {
    if (testType === 'stress') {
      const credentialsMap: { [key: string]: { username: string; password: string } } = {
        'Estrés Agudo': { username: 'estresagudo', password: 'estresagudo123' },
        'Estrés Episódico': { username: 'estresacumulado', password: 'estresacumulado456' },
        'Estrés Crónico': { username: 'estrescronico', password: 'estrescronico789' },
        'Burnout': { username: 'burnout', password: 'burnout123' }
      };
      const credentials = credentialsMap[resultType] || { username: 'estresagudo', password: 'estresagudo123' };
      return {
        title: 'Guía de Recuperación de Estrés',
        subtitle: `Protocolo personalizado para ${resultType}`,
        username: credentials.username,
        password: credentials.password
      };
    } else {
      const credentialsMap: { [key: string]: { username: string; password: string } } = {
        'Perfeccionismo': { username: 'procrastperfeccionismo', password: 'procrastperfeccionismo456' },
        'Miedo al Fracaso': { username: 'procrastmiedoalfracaso', password: 'procrastmiedoalfracaso789' },
        'Falta de Claridad': { username: 'procrastclaridad', password: 'procrastclaridad123' },
        'Agotamiento': { username: 'procrastagotamiento', password: 'procrastagotamiento456' },
        'Falta de Propósito': { username: 'procrastproposito', password: 'procrastproposito789' }
      };
      const credentials = credentialsMap[resultType] || { username: 'procrastperfeccionismo', password: 'procrastperfeccionismo456' };
      return {
        title: 'Guía Anti-Procrastinación',
        subtitle: `Protocolo personalizado para ${resultType}`,
        username: credentials.username,
        password: credentials.password
      };
    }
  };

  const guideInfo = getGuideInfo();

  const benefits = [
    'Plan día a día durante 7 días completos',
    'Ejercicios prácticos y técnicas validadas científicamente',
    'Reflexiones guiadas para reconectar con vos mismo',
    'Estrategias de regulación emocional inmediatas',
    'Herramientas para recuperar claridad y energía',
    'Protocolo adaptado a tu tipo específico',
    'Acceso inmediato y de por vida'
  ];

  const validateForm = () => {
    const errors = {
      fullName: formData.fullName.trim() === '',
      email: formData.email.trim() === '' || !formData.email.includes('@'),
      phone: formData.phone.trim() === ''
    };
    setFormErrors(errors);
    return !errors.fullName && !errors.email && !errors.phone;
  };

  const handlePaymentSuccess = () => {
    if (!validateForm()) {
      return;
    }

    const customer = {
      id: Date.now().toString(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      guide_type: testType,
      amount: 79000,
      payment_date: new Date().toISOString(),
      payment_status: 'completed'
    };

    const existingCustomers = localStorage.getItem('customers');
    const customers = existingCustomers ? JSON.parse(existingCustomers) : [];
    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setShowCredentials(true);
  };

  if (showCredentials) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex flex-col">
        <Header showHomeButton={true} onHomeClick={onHomeClick} />

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl border-2 border-green-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="flex justify-center mb-4 sm:mb-6"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                ¡Pago exitoso!
              </h1>
              <p className="text-lg sm:text-xl text-center text-gray-700 mb-6 sm:mb-8 font-light">
                Tu camino hacia el bienestar comienza ahora
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6 mb-6 border border-purple-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 text-center">
                  Credenciales de acceso a tu guía
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Usuario:</p>
                    <p className="text-base sm:text-xl font-bold text-gray-900 font-mono break-all">{guideInfo.username}</p>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Contraseña:</p>
                    <p className="text-base sm:text-xl font-bold text-gray-900 font-mono break-all">{guideInfo.password}</p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-50 border border-amber-300 rounded-xl">
                  <p className="text-xs sm:text-sm text-amber-800 font-light leading-relaxed">
                    <strong>Importante:</strong> Guardá estas credenciales en un lugar seguro. Las necesitarás para acceder a tu guía personalizada.
                  </p>
                </div>
              </div>

              <motion.button
                onClick={() => {
                  // Mark that user just paid to skip login on first access
                  if (testType === 'stress' && resultType === 'Estrés Agudo') {
                    localStorage.setItem('justPaidEstresAgudo', 'true');
                  }
                  // Normalize URL by removing accents
                  const normalizedUsername = guideInfo.username
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '');
                  navigate(`/guia-${testType === 'stress' ? 'estres' : 'procrastinacion'}/${normalizedUsername}`);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center mb-3 sm:mb-4"
              >
                Acceder a mi guía ahora
              </motion.button>

              <p className="text-xs sm:text-sm text-gray-500 text-center font-light">
                También te enviamos las credenciales por email
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white flex flex-col">
      <Header showHomeButton={true} onHomeClick={onHomeClick} />

      <div className="flex-1 px-4 py-12 pt-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              {guideInfo.title}
            </h1>
            <p className="text-xl text-gray-700 font-light">
              {guideInfo.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  Lo que vas a recibir
                </h2>

                <div className="space-y-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-light">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="flex flex-col items-center justify-center mb-4">
                    <div className="text-2xl text-gray-400 line-through mb-2">186.000 Gs</div>
                    <div className="text-4xl sm:text-5xl font-bold text-emerald-600">79.000 Gs</div>
                  </div>
                  <p className="text-center text-gray-700 font-light mb-2">
                    Inversión única
                  </p>
                  <p className="text-center text-sm text-gray-600 font-light">
                    Acceso de por vida a tu guía personalizada
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  Garantía de satisfacción
                </h3>
                <p className="text-gray-700 font-light text-sm leading-relaxed">
                  Más de 100 clientes confirmaron que esta guía alivió su carga mental y los ayudó a alcanzar paz mental y serenidad.
                </p>
              </div>

              <div className="flex items-start space-x-4 bg-amber-50 rounded-2xl p-4 border border-amber-200">
                <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">Acceso inmediato</p>
                  <p className="text-sm text-amber-800 font-light">
                    Recibirás tus credenciales al instante después del pago
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 sticky top-24">
                <div className="flex items-center mb-6">
                  <CreditCard className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    Datos de pago
                  </h2>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <Lock className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-semibold text-purple-900">Pago 100% seguro con Bancard</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Información de Contacto
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre y Apellido <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Juan Pérez"
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                            formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.fullName && (
                          <p className="text-red-500 text-xs mt-1">Este campo es obligatorio</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="tucorreo@ejemplo.com"
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1">Ingresa un email válido</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Número de Teléfono <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="0981 234 567"
                          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-xs mt-1">Este campo es obligatorio</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                      <Shield className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      <p className="text-xs text-blue-800 font-light">
                        Tus datos son 100% confidenciales y están protegidos
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-8 border-2 border-dashed border-gray-300 min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-semibold mb-2">Iframe de Bancard</p>
                      <p className="text-sm text-gray-500 font-light">
                        Aquí se integrará el formulario de pago
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePaymentSuccess}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Simular pago exitoso (Demo)
                </button>

                <p className="text-xs text-gray-500 text-center mt-4 font-light">
                  Tus datos están protegidos y encriptados
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
          © 2025 MasDopamina | Tu bienestar mental importa
        </div>
      </footer>
    </div>
  );
}
