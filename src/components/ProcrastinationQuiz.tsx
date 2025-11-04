import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { procrastinationQuestions, calculateProcrastinationResult, ProcrastinationResult } from '../data/procrastinationQuestions';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import PostQuizOffer from './PostQuizOffer';
import PaymentScreen from './PaymentScreen';

const scaleLabels = [
  { value: 1, label: 'Nunca' },
  { value: 2, label: 'Rara vez' },
  { value: 3, label: 'A veces' },
  { value: 4, label: 'Muy seguido' },
  { value: 5, label: 'Casi siempre' }
];

export default function ProcrastinationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [savedResult, setSavedResult] = useState<ProcrastinationResult | null>(null);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / procrastinationQuestions.length) * 100;
  const question = procrastinationQuestions[currentQuestion];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < procrastinationQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => {
        const result = calculateProcrastinationResult(newAnswers);
        setSavedResult(result);
        setIsAnalyzing(false);
        setShowOffer(true);
      }, 2000);
    }
  };

  const handleQuickTest = (type: string) => {
    let testAnswers = new Array(25).fill(3);

    if (type === 'perfeccionismo') {
      testAnswers = testAnswers.map((_, i) => i < 5 ? 5 : 2);
    } else if (type === 'miedo') {
      testAnswers = testAnswers.map((_, i) => (i >= 5 && i < 10) ? 5 : 2);
    } else if (type === 'claridad') {
      testAnswers = testAnswers.map((_, i) => (i >= 10 && i < 15) ? 5 : 2);
    } else if (type === 'agotamiento') {
      testAnswers = testAnswers.map((_, i) => (i >= 15 && i < 20) ? 5 : 2);
    } else if (type === 'proposito') {
      testAnswers = testAnswers.map((_, i) => (i >= 20 && i < 25) ? 5 : 2);
    }

    const result = calculateProcrastinationResult(testAnswers);
    setSavedResult(result);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setShowOffer(true);
  };

  const handleCheckout = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setShowOffer(false);
    setShowPayment(true);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    navigate('/');
  };

  if (showPayment && savedResult) {
    return (
      <PaymentScreen
        testType="procrastination"
        resultType={savedResult.primaryType}
        onHomeClick={handleHomeClick}
      />
    );
  }

  if (showOffer && savedResult) {
    return (
      <PostQuizOffer
        testType="procrastination"
        resultType={savedResult.primaryType}
        onCheckout={handleCheckout}
        onHomeClick={handleHomeClick}
      />
    );
  }

  const quickTestButtons = [
    { label: 'Perfeccionismo', type: 'perfeccionismo' },
    { label: 'Miedo al Fracaso', type: 'miedo' },
    { label: 'Falta de Claridad', type: 'claridad' },
    { label: 'Agotamiento', type: 'agotamiento' },
    { label: 'Falta de Propósito', type: 'proposito' }
  ];

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            Analizando tus respuestas
          </h2>
          <p className="text-xl text-gray-600 font-light">Un momento...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white flex flex-col">
      <Header showHomeButton={false} />

      <div className="flex-1 flex flex-col pt-24">
        {/* Progress Bar */}
        <div className="px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pregunta {currentQuestion + 1} de {procrastinationQuestions.length}
              </span>
              <span className="text-sm font-medium text-purple-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="max-w-3xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center leading-relaxed" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {question.text}
                </h2>

                <div className="space-y-4">
                  {scaleLabels.map((item) => (
                    <motion.button
                      key={item.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(item.value)}
                      className="w-full bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-6 transition-all duration-300 flex items-center justify-between group"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {item.label}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-purple-300 group-hover:border-purple-500 flex items-center justify-center transition-all duration-300">
                        <span className="text-xl font-bold text-purple-600">
                          {item.value}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {currentQuestion === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 pt-8 border-t-2 border-dashed border-purple-200"
                  >
                    <p className="text-center text-sm text-gray-500 mb-4 font-light">
                      Acceso rápido (solo para pruebas)
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {quickTestButtons.map((btn) => (
                        <button
                          key={btn.type}
                          onClick={() => handleQuickTest(btn.type)}
                          className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
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
