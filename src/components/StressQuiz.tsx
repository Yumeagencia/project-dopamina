import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { stressQuestions, scaleOptions } from '../data/stressQuestions';
import Header from './Header';

interface StressQuizProps {
  onComplete: (answers: number[]) => void;
}

export default function StressQuiz({ onComplete }: StressQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(stressQuestions.length).fill(0));
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const progress = ((currentQuestion + 1) / stressQuestions.length) * 100;
  const question = stressQuestions[currentQuestion];

  const handleSelectOption = (value: number) => {
    setSelectedOption(value);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedOption === 0) return;

    if (currentQuestion === stressQuestions.length - 1) {
      onComplete(answers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
    }
  };

  const handleQuickTest = (type: string, level: string) => {
    let testAnswers = new Array(stressQuestions.length).fill(2);

    if (type === 'agudo') {
      if (level === 'leve') {
        testAnswers = testAnswers.map(() => 2);
        testAnswers[10] = 4;
        testAnswers[11] = 4;
        testAnswers[12] = 4;
        testAnswers[7] = 4;
        testAnswers[8] = 5;
      } else if (level === 'moderado') {
        testAnswers = testAnswers.map(() => 3);
        testAnswers[10] = 5;
        testAnswers[11] = 5;
        testAnswers[12] = 5;
        testAnswers[7] = 5;
        testAnswers[8] = 5;
      } else {
        testAnswers = testAnswers.map(() => 4);
        testAnswers[10] = 5;
        testAnswers[11] = 5;
        testAnswers[12] = 5;
        testAnswers[7] = 5;
        testAnswers[8] = 5;
      }
    } else if (type === 'episodico') {
      if (level === 'leve') {
        testAnswers = testAnswers.map(() => 2);
        testAnswers[10] = 2;
        testAnswers[11] = 2;
        testAnswers[12] = 2;
        testAnswers[7] = 2;
        testAnswers[8] = 2;
      } else if (level === 'moderado') {
        testAnswers = testAnswers.map(() => 3);
        testAnswers[10] = 3;
        testAnswers[11] = 3;
        testAnswers[12] = 3;
        testAnswers[7] = 3;
        testAnswers[8] = 3;
      } else {
        testAnswers = testAnswers.map(() => 4);
        testAnswers[10] = 3;
        testAnswers[11] = 3;
        testAnswers[12] = 3;
        testAnswers[7] = 3;
        testAnswers[8] = 3;
      }
    } else if (type === 'cronico') {
      if (level === 'leve') {
        testAnswers = testAnswers.map(() => 3);
        for (let i = 0; i < 15; i++) {
          testAnswers[i] = 4;
        }
        testAnswers[10] = 2;
        testAnswers[11] = 2;
        testAnswers[12] = 2;
        testAnswers[7] = 2;
        testAnswers[8] = 2;
      } else if (level === 'moderado') {
        testAnswers = testAnswers.map(() => 4);
        for (let i = 0; i < 10; i++) {
          testAnswers[i] = 4;
        }
        testAnswers[10] = 3;
        testAnswers[11] = 3;
        testAnswers[12] = 3;
        testAnswers[7] = 3;
        testAnswers[8] = 3;
      } else {
        testAnswers = testAnswers.map(() => 5);
        testAnswers[10] = 3;
        testAnswers[11] = 3;
        testAnswers[12] = 3;
        testAnswers[7] = 3;
        testAnswers[8] = 3;
      }
    } else if (type === 'burnout') {
      if (level === 'leve') {
        testAnswers = testAnswers.map(() => 3);
        for (let i = 22; i < 30; i++) {
          testAnswers[i] = 5;
        }
        for (let i = 0; i < 10; i++) {
          testAnswers[i] = 4;
        }
        testAnswers[10] = 3;
        testAnswers[11] = 3;
        testAnswers[12] = 3;
        testAnswers[7] = 3;
        testAnswers[8] = 3;
      } else if (level === 'moderado') {
        testAnswers = testAnswers.map(() => 4);
        for (let i = 22; i < 30; i++) {
          testAnswers[i] = 5;
        }
        testAnswers[10] = 3;
        testAnswers[11] = 3;
        testAnswers[12] = 3;
        testAnswers[7] = 3;
        testAnswers[8] = 3;
      } else {
        testAnswers = testAnswers.map(() => 5);
        for (let i = 22; i < 30; i++) {
          testAnswers[i] = 5;
        }
        testAnswers[10] = 4;
        testAnswers[11] = 4;
        testAnswers[12] = 4;
        testAnswers[7] = 4;
        testAnswers[8] = 4;
      }
    }

    onComplete(testAnswers);
  };

  const quickTestButtons = [
    { label: 'Estrés Agudo', type: 'agudo', level: 'leve' },
    { label: 'Estrés Episódico', type: 'episodico', level: 'leve' },
    { label: 'Estrés Crónico', type: 'cronico', level: 'leve' },
    { label: 'Burnout', type: 'burnout', level: 'leve' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white flex flex-col">
      <Header showHomeButton={false} />

      <div className="flex-1 flex items-center justify-center px-4 py-12 pt-28">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pregunta {currentQuestion + 1} de {stressQuestions.length}
              </span>
              <span className="text-sm font-medium text-blue-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                {question.text}
              </h2>

              <div className="space-y-3 mb-8">
                {scaleOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleSelectOption(option.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      selectedOption === option.value
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      <span className={`text-sm ${
                        selectedOption === option.value ? 'text-white' : 'text-gray-500'
                      }`}>
                        {option.value}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="flex gap-4">
                {currentQuestion > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Anterior
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: selectedOption === 0 ? 1 : 1.05 }}
                  whileTap={{ scale: selectedOption === 0 ? 1 : 0.95 }}
                  onClick={handleNext}
                  disabled={selectedOption === 0}
                  className={`flex-1 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    selectedOption === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
                  }`}
                >
                  {currentQuestion === stressQuestions.length - 1 ? 'Ver resultado' : 'Siguiente'}
                  {currentQuestion < stressQuestions.length - 1 && <ChevronRight className="w-5 h-5 ml-2" />}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {currentQuestion === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6"
            >
              <p className="text-sm font-semibold text-yellow-800 mb-4 text-center">
                🚀 Accesos rápidos para testing (solo visible en primera pregunta)
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {quickTestButtons.map((btn, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickTest(btn.type, btn.level)}
                    className="text-xs bg-white hover:bg-yellow-100 text-gray-700 font-medium py-2 px-3 rounded-lg border border-yellow-300 transition-all duration-200 hover:shadow-md"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white bg-opacity-60 backdrop-blur-sm border-t border-gray-200 py-6 px-4"
      >
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 font-light">
          © 2025 MasDopamina | Tu bienestar mental importa
        </div>
      </motion.footer>
    </div>
  );
}
