import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { intelligenceQuestions, IntelligenceType } from '../data/intelligenceQuestions';
import { ChevronRight, Sparkles } from 'lucide-react';
import Header from './Header';

interface IntelligenceQuizProps {
  onComplete: (dominantType: IntelligenceType, scores: Record<IntelligenceType, number>) => void;
}

export default function IntelligenceQuiz({ onComplete }: IntelligenceQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const progress = ((currentQuestion + 1) / intelligenceQuestions.length) * 100;
  const question = intelligenceQuestions[currentQuestion];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < intelligenceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Calculate results
      const scores: Record<IntelligenceType, number> = {
        musical: 0,
        kinesthetic: 0,
        logical: 0,
        linguistic: 0,
        naturalist: 0,
        interpersonal: 0,
        intrapersonal: 0,
        spatial: 0
      };

      newAnswers.forEach((answer, index) => {
        const intelligenceType = intelligenceQuestions[index].scores[answer];
        scores[intelligenceType]++;
      });

      // Find dominant type
      let dominantType: IntelligenceType = 'logical';
      let maxScore = 0;

      Object.entries(scores).forEach(([type, score]) => {
        if (score > maxScore) {
          maxScore = score;
          dominantType = type as IntelligenceType;
        }
      });

      onComplete(dominantType, scores);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white flex flex-col">
      <Header showHomeButton={false} />
      <div className="bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200 py-4 px-4 mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Pregunta {currentQuestion + 1} de {intelligenceQuestions.length}
            </span>
            <span className="text-sm font-semibold text-[#ee271e]">
              {Math.round(progress)}% completado
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#ee271e] to-[#ff4136] h-2 rounded-full transition-all duration-500 ease-out"
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
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#ee271e] to-[#ff4136] text-white text-xs font-semibold rounded-full uppercase">
                <Sparkles className="w-3 h-3 mr-1" />
                Test de Inteligencias Múltiples
              </span>
            </div>

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
                      ? 'border-[#ee271e] bg-[#ee271e] bg-opacity-5 shadow-md'
                      : 'border-gray-200 hover:border-[#ee271e] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mr-4 ${
                      selectedAnswer === key
                        ? 'bg-[#ee271e] text-white'
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
                  ? 'bg-gradient-to-r from-[#ee271e] to-[#ff4136] hover:from-[#ff4136] hover:to-[#ee271e] text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion === intelligenceQuestions.length - 1 ? 'Ver mi resultado' : 'Siguiente pregunta'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
