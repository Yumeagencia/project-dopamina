import { useState, useEffect } from 'react';
import Landing from '../components/Landing';
import Quiz from '../components/Quiz';
import Suspense from '../components/Suspense';
import Payment from '../components/Payment';
import Results from '../components/Results';
import { questions } from '../data/questions';

type Screen = 'landing' | 'quiz' | 'suspense' | 'payment' | 'results';

export default function TestIQPage() {
  useEffect(() => {
    document.title = 'Test IQ – Veldo Labs';
  }, []);
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isPremium, setIsPremium] = useState(false);

  const calculateIQ = (answers: string[]): number => {
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });

    const percentage = (correctCount / questions.length) * 100;
    const iq = Math.round(85 + (percentage / 100) * 60);

    return Math.max(85, Math.min(145, iq));
  };

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (answers: string[]) => {
    setUserAnswers(answers);
    setCurrentScreen('suspense');
  };

  const handleSuspenseComplete = () => {
    setCurrentScreen('payment');
  };

  const handlePaymentComplete = () => {
    setIsPremium(true);
    setCurrentScreen('results');
  };

  const handleSkipPayment = () => {
    setIsPremium(false);
    setCurrentScreen('results');
  };

  const handleReset = () => {
    setCurrentScreen('landing');
    setUserAnswers([]);
    setIsPremium(false);
  };

  const iqScore = calculateIQ(userAnswers);

  return (
    <>
      {currentScreen === 'landing' && <Landing onStart={handleStartQuiz} />}
      {currentScreen === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {currentScreen === 'suspense' && <Suspense onComplete={handleSuspenseComplete} />}
      {currentScreen === 'payment' && (
        <Payment
          onPaymentComplete={handlePaymentComplete}
          onSkipPayment={handleSkipPayment}
        />
      )}
      {currentScreen === 'results' && (
        <Results iqScore={iqScore} isPremium={isPremium} onReset={handleReset} />
      )}
    </>
  );
}
