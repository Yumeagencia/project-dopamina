export interface ProcrastinationQuestion {
  id: number;
  text: string;
  category: 'perfeccionismo' | 'miedo' | 'claridad' | 'agotamiento' | 'proposito';
}

export const procrastinationQuestions: ProcrastinationQuestion[] = [
  // Perfeccionismo (1-5)
  { id: 1, text: '¿Alguna vez sentís que si no hacés algo perfecto, mejor no hacerlo?', category: 'perfeccionismo' },
  { id: 2, text: '¿Te juzgás duro por tus resultados, incluso cuando otros te felicitan?', category: 'perfeccionismo' },
  { id: 3, text: '¿A veces te paraliza la idea de no cumplir tus propios estándares?', category: 'perfeccionismo' },
  { id: 4, text: '¿Has guardado proyectos sin publicarlos por miedo a que no estén listos "todavía"?', category: 'perfeccionismo' },
  { id: 5, text: '¿Vivís pensando que podrías haber hecho las cosas mejor?', category: 'perfeccionismo' },

  // Miedo al fracaso (6-10)
  { id: 6, text: '¿Tenés ideas increíbles que nunca empezaste por miedo a arruinarlas?', category: 'miedo' },
  { id: 7, text: '¿Te cuesta creer que sos capaz, incluso cuando otros lo ven?', category: 'miedo' },
  { id: 8, text: '¿Preferís no intentar antes que intentar y fallar?', category: 'miedo' },
  { id: 9, text: '¿Tu miedo a equivocarte es más fuerte que tus ganas de avanzar?', category: 'miedo' },
  { id: 10, text: '¿Sos de esperar el "momento perfecto" pero nunca llega?', category: 'miedo' },

  // Falta de claridad (11-15)
  { id: 11, text: '¿A veces querés avanzar pero no sabés por dónde empezar?', category: 'claridad' },
  { id: 12, text: '¿Tu mente se llena de ideas pero te cuesta darles forma?', category: 'claridad' },
  { id: 13, text: '¿Te perdés entre planes, notas, listas y nunca arrancás?', category: 'claridad' },
  { id: 14, text: '¿Sabés lo que querés, pero no sabés qué paso viene primero?', category: 'claridad' },
  { id: 15, text: '¿Te distraés fácil porque tu camino no está definido?', category: 'claridad' },

  // Agotamiento (16-20)
  { id: 16, text: '¿Tenés ganas, pero tu cuerpo dice "no puedo ahora"?', category: 'agotamiento' },
  { id: 17, text: '¿Te cuesta comenzar porque sentís que no te da la energía?', category: 'agotamiento' },
  { id: 18, text: '¿Te decís "después lo hago" porque hoy no te sentís fuerte para hacerlo?', category: 'agotamiento' },
  { id: 19, text: '¿Tu cansancio mental supera a tus ganas de progresar?', category: 'agotamiento' },
  { id: 20, text: '¿Sentís que necesitás volver a vos antes de poder avanzar?', category: 'agotamiento' },

  // Falta de propósito (21-25)
  { id: 21, text: '¿A veces sentís que estás avanzando… pero hacia dónde?', category: 'proposito' },
  { id: 22, text: '¿Trabajás, pero no te emociona lo que estás construyendo?', category: 'proposito' },
  { id: 23, text: '¿Te cuesta terminar cosas porque no sentís conexión con ellas?', category: 'proposito' },
  { id: 24, text: '¿Sentís que estás viviendo en automático, no eligiendo?', category: 'proposito' },
  { id: 25, text: '¿Te cuesta disciplinarte porque no encontrás algo que realmente te encienda por dentro?', category: 'proposito' }
];

export interface ProcrastinationResult {
  primaryType: string;
  scores: {
    perfeccionismo: number;
    miedo: number;
    claridad: number;
    agotamiento: number;
    proposito: number;
  };
}

export function calculateProcrastinationResult(answers: number[]): ProcrastinationResult {
  const scores = {
    perfeccionismo: answers.slice(0, 5).reduce((sum, val) => sum + val, 0),
    miedo: answers.slice(5, 10).reduce((sum, val) => sum + val, 0),
    claridad: answers.slice(10, 15).reduce((sum, val) => sum + val, 0),
    agotamiento: answers.slice(15, 20).reduce((sum, val) => sum + val, 0),
    proposito: answers.slice(20, 25).reduce((sum, val) => sum + val, 0)
  };

  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const categoryNames: Record<string, string> = {
    perfeccionismo: 'Perfeccionismo',
    miedo: 'Miedo al Fracaso',
    claridad: 'Falta de Claridad',
    agotamiento: 'Agotamiento',
    proposito: 'Falta de Propósito'
  };

  const primaryType = categoryNames[sortedScores[0][0]];

  return {
    primaryType,
    scores
  };
}
