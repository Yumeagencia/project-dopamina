export interface StressQuestion {
  id: number;
  text: string;
}

export const stressQuestions: StressQuestion[] = [
  { id: 1, text: '¿Te cuesta concentrarte en tareas simples?' },
  { id: 2, text: '¿Sentís la mente nublada o lenta?' },
  { id: 3, text: '¿Te cuesta tomar decisiones claras?' },
  { id: 4, text: '¿Volvés repetidamente a los mismos pensamientos o preocupaciones?' },
  { id: 5, text: '¿Te cuesta recordar cosas recientes o mantener ideas claras?' },
  { id: 6, text: '¿Te sentís cansado incluso después de dormir?' },
  { id: 7, text: '¿Tenés bajones repentinos de energía durante el día?' },
  { id: 8, text: '¿Sentís tensión física (hombros, cuello, mandíbula)?' },
  { id: 9, text: '¿Tenés dolores de cabeza frecuentes por tensión?' },
  { id: 10, text: '¿Te cuesta arrancar el día o ponerte en marcha?' },
  { id: 11, text: '¿Dormís pero no te sentís descansado al despertar?' },
  { id: 12, text: '¿Te cuesta dormirte o mantenerte dormido?' },
  { id: 13, text: '¿Tu mente está activa a la hora de dormir?' },
  { id: 14, text: '¿Te irritás fácilmente con cosas pequeñas?' },
  { id: 15, text: '¿Te cuesta relajarte aunque tengas tiempo?' },
  { id: 16, text: '¿Tenés cambios de humor sin razón clara?' },
  { id: 17, text: '¿Sentís ansiedad o inquietud?' },
  { id: 18, text: '¿Te falta motivación para actividades que antes disfrutabas?' },
  { id: 19, text: '¿Procrastinás tareas importantes?' },
  { id: 20, text: '¿Sentís que hacés mucho pero avanzás poco?' },
  { id: 21, text: '¿Te cuesta organizar tus tareas y prioridades?' },
  { id: 22, text: '¿Te abrumás fácilmente con tu lista de responsabilidades?' },
  { id: 23, text: '¿Sentís que estás funcionando en automático?' },
  { id: 24, text: '¿Sentís desconexión contigo mismo?' },
  { id: 25, text: '¿Nada te entusiasma últimamente?' },
  { id: 26, text: '¿Te cuesta sostener hábitos o disciplina personal?' },
  { id: 27, text: '¿Evitás interacciones sociales por cansancio mental?' },
  { id: 28, text: '¿Te irritan las personas más de lo normal?' },
  { id: 29, text: '¿Evitás pedir ayuda aunque la necesites?' },
  { id: 30, text: '¿Sentís soledad o desconexión incluso acompañado?' }
];

export const scaleOptions = [
  { value: 1, label: 'Nunca' },
  { value: 2, label: 'Rara vez' },
  { value: 3, label: 'A veces' },
  { value: 4, label: 'Frecuentemente' },
  { value: 5, label: 'Casi siempre / Siempre' }
];

export type StressType = 'Estrés Agudo' | 'Estrés Episódico' | 'Estrés Crónico' | 'Burnout';
export type StressLevel = '0-1' | '2-3' | '4';

export interface StressResult {
  score: number;
  type: StressType;
  level: StressLevel;
  levelName: string;
  message: string;
}

export function calculateStressResult(answers: number[]): StressResult {
  const totalScore = answers.reduce((sum, val) => sum + val, 0);

  let level: StressLevel;
  let levelName: string;
  let message: string;

  if (totalScore <= 45) {
    level = '0-1';
    levelName = 'Saludable / Bajo';
    message = 'Tu sistema está estable, pero vamos a fortalecer tu equilibrio.';
  } else if (totalScore <= 75) {
    level = '0-1';
    levelName = 'Leve';
    message = 'Tu sistema está estable, pero vamos a fortalecer tu equilibrio.';
  } else if (totalScore <= 105) {
    level = '2-3';
    levelName = 'Moderado';
    message = 'Tu cuerpo y mente necesitan estructura para recuperarse.';
  } else if (totalScore <= 130) {
    level = '2-3';
    levelName = 'Alto';
    message = 'Tu cuerpo y mente necesitan estructura para recuperarse.';
  } else {
    level = '4';
    levelName = 'Crítico';
    message = 'Tu sistema está en punto de saturación. Necesitás bajar carga urgente.';
  }

  let type: StressType;
  const burnoutQuestions = answers.slice(22, 30);
  const burnoutHighCount = burnoutQuestions.filter(val => val >= 4).length;

  if (burnoutHighCount >= 4 && totalScore > 100) {
    type = 'Burnout';
  } else {
    const sleepIssues = answers[10] + answers[11] + answers[12];
    const tensionIssues = answers[7] + answers[8];

    if (sleepIssues >= 12 && tensionIssues >= 8) {
      type = 'Estrés Agudo';
    } else if (totalScore >= 90) {
      type = 'Estrés Crónico';
    } else {
      type = 'Estrés Episódico';
    }
  }

  return {
    score: totalScore,
    type,
    level,
    levelName,
    message
  };
}
