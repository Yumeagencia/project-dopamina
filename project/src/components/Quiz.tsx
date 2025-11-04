import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import { ChevronRight, Flame, Zap, Sparkles } from 'lucide-react';
import Header from './Header';
import { analyticsEvents } from '../utils/analytics';

interface QuizProps {
  onComplete: (answers: string[]) => void;
}

const DEV_MODE = true;

const motivationalMessages = [
  { at: 10, message: '¡Excelente! Solo 22 preguntas más', icon: Zap, emoji: '💪' },
  { at: 16, message: 'Tu cerebro está encendido', icon: Flame, emoji: '🔥' },
  { at: 22, message: 'Solo faltan 10 preguntas, no te rindas', icon: Sparkles, emoji: '💪' },
  { at: 28, message: 'Ya casi terminás', icon: Zap, emoji: '🚀' }
];

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showMotivation, setShowMotivation] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    const motivationalMsg = motivationalMessages.find(m => m.at === currentQuestion + 1);
    if (motivationalMsg) {
      setShowMotivation(true);
      setTimeout(() => {
        setShowMotivation(false);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        } else {
          analyticsEvents.completeTest();
          onComplete(newAnswers);
        }
      }, 1500);
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        analyticsEvents.completeTest();
        onComplete(newAnswers);
      }
    }
  };

  if (showMotivation) {
    const msg = motivationalMessages.find(m => m.at === currentQuestion + 1);
    const IconComponent = msg?.icon || Zap;
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#00B7C2] to-[#009ba5] flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-2xl"
          >
            <IconComponent className="w-12 h-12 text-[#00B7C2]" />
          </motion.div>
          <p className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>{msg?.message} {msg?.emoji}</p>
        </motion.div>
      </div>
    );
  }

  const getDynamicMessage = () => {
    const remaining = questions.length - currentQuestion;
    if (remaining <= 5) return 'Ya casi terminás';
    if (remaining <= 10) return 'Solo faltan pocas preguntas';
    if (currentQuestion >= 15) return 'Excelente ritmo';
    return 'Tu cerebro está funcionando';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-white flex flex-col">
      <Header showHomeButton={false} />
      <div className="bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200 py-4 px-4 mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-semibold text-[#00B7C2]">
              {Math.round(progress)}% completado
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#00B7C2] to-[#009ba5] h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl w-full"
          >
          <div className="mb-6 flex items-center justify-between">
            <span className="inline-block px-3 py-1 bg-[#ee271e] bg-opacity-10 text-[#ee271e] text-xs font-semibold rounded-full uppercase">
              {question.category === 'verbal' && 'Razonamiento Verbal'}
              {question.category === 'numerical' && 'Razonamiento Numérico'}
              {question.category === 'visual' && 'Razonamiento Visual'}
              {question.category === 'logical' && 'Razonamiento Lógico'}
            </span>
            <span className="text-sm text-gray-500 font-medium">{getDynamicMessage()}</span>
          </div>

          {DEV_MODE && currentQuestion === 0 && (
            <motion.button
              onClick={() => {
                const filledAnswers = questions.map((q) => q.correctAnswer);
                setCurrentQuestion(questions.length - 1);
                setAnswers(filledAnswers.slice(0, -1));
                setSelectedAnswer(null);
              }}
              className="mb-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg text-sm"
            >
              DEV: Saltar a última pregunta
            </motion.button>
          )}

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 leading-relaxed" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            {question.question}
          </h2>

          <div className="space-y-3 mb-8">
            {Object.entries(question.options).map(([key, value], index) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(key)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                  selectedAnswer === key
                    ? 'border-[#00B7C2] bg-[#00B7C2] bg-opacity-5 shadow-md'
                    : 'border-gray-200 hover:border-[#00B7C2] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mr-4 ${
                    selectedAnswer === key
                      ? 'bg-[#00B7C2] text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {key}
                  </span>
                  <span className="text-lg text-gray-800">{value}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: selectedAnswer ? 1.02 : 1 }}
            whileTap={{ scale: selectedAnswer ? 0.98 : 1 }}
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
              selectedAnswer
                ? 'bg-[#00B7C2] hover:bg-[#009ba5] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Finalizar test' : 'Siguiente pregunta'}
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}
