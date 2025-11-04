export interface IntelligenceQuestion {
  id: number;
  question: string;
  options: {
    [key: string]: string;
  };
  scores: {
    [key: string]: IntelligenceType;
  };
}

export type IntelligenceType =
  | 'musical'
  | 'kinesthetic'
  | 'logical'
  | 'linguistic'
  | 'naturalist'
  | 'interpersonal'
  | 'intrapersonal'
  | 'spatial';

export const intelligenceQuestions: IntelligenceQuestion[] = [
  {
    id: 1,
    question: '¿Cómo preferís aprender algo nuevo?',
    options: {
      A: 'Leyendo libros o artículos detallados',
      B: 'Viendo videos o imágenes explicativas',
      C: 'Practicando y experimentando directamente',
      D: 'Escuchando explicaciones o podcasts'
    },
    scores: {
      A: 'linguistic',
      B: 'spatial',
      C: 'kinesthetic',
      D: 'musical'
    }
  },
  {
    id: 2,
    question: '¿Qué actividad disfrutás más en tu tiempo libre?',
    options: {
      A: 'Hacer deportes o actividades físicas',
      B: 'Escribir, leer o conversar con amigos',
      C: 'Escuchar música o tocar un instrumento',
      D: 'Resolver acertijos o juegos de estrategia'
    },
    scores: {
      A: 'kinesthetic',
      B: 'linguistic',
      C: 'musical',
      D: 'logical'
    }
  },
  {
    id: 3,
    question: '¿Cómo te describirían tus amigos?',
    options: {
      A: 'Reflexivo y consciente de mis emociones',
      B: 'Empático y buen escucha',
      C: 'Creativo y artístico',
      D: 'Analítico y organizado'
    },
    scores: {
      A: 'intrapersonal',
      B: 'interpersonal',
      C: 'spatial',
      D: 'logical'
    }
  },
  {
    id: 4,
    question: 'Cuando tenés un problema, ¿cómo lo resolvés?',
    options: {
      A: 'Analizando datos y buscando patrones lógicos',
      B: 'Consultando con otras personas',
      C: 'Reflexionando en soledad sobre mis sentimientos',
      D: 'Probando diferentes soluciones hasta encontrar la correcta'
    },
    scores: {
      A: 'logical',
      B: 'interpersonal',
      C: 'intrapersonal',
      D: 'kinesthetic'
    }
  },
  {
    id: 5,
    question: '¿Qué tipo de contenido te atrae más?',
    options: {
      A: 'Documentales sobre naturaleza y medio ambiente',
      B: 'Películas con historias profundas sobre personas',
      C: 'Videos de diseño, arte o arquitectura',
      D: 'Tutoriales de matemáticas o programación'
    },
    scores: {
      A: 'naturalist',
      B: 'interpersonal',
      C: 'spatial',
      D: 'logical'
    }
  },
  {
    id: 6,
    question: '¿En qué te sentís más cómodo?',
    options: {
      A: 'Trabajando en equipo y coordinando con otros',
      B: 'Trabajando solo en proyectos personales',
      C: 'Organizando eventos o actividades sociales',
      D: 'Clasificando y categorizando información'
    },
    scores: {
      A: 'interpersonal',
      B: 'intrapersonal',
      C: 'linguistic',
      D: 'naturalist'
    }
  },
  {
    id: 7,
    question: '¿Qué habilidad te sale más natural?',
    options: {
      A: 'Memorizar melodías o ritmos musicales',
      B: 'Visualizar objetos en 3D mentalmente',
      C: 'Coordinar movimientos precisos con tu cuerpo',
      D: 'Identificar patrones en la naturaleza'
    },
    scores: {
      A: 'musical',
      B: 'spatial',
      C: 'kinesthetic',
      D: 'naturalist'
    }
  },
  {
    id: 8,
    question: '¿Qué tipo de carrera te atrae más?',
    options: {
      A: 'Psicología, coaching o trabajo social',
      B: 'Ingeniería, ciencia o tecnología',
      C: 'Escritura, periodismo o enseñanza',
      D: 'Diseño gráfico, arquitectura o fotografía'
    },
    scores: {
      A: 'interpersonal',
      B: 'logical',
      C: 'linguistic',
      D: 'spatial'
    }
  },
  {
    id: 9,
    question: '¿Cómo preferís expresarte?',
    options: {
      A: 'A través de palabras escritas o habladas',
      B: 'A través del movimiento o lenguaje corporal',
      C: 'A través de música o sonidos',
      D: 'A través de dibujos o imágenes'
    },
    scores: {
      A: 'linguistic',
      B: 'kinesthetic',
      C: 'musical',
      D: 'spatial'
    }
  },
  {
    id: 10,
    question: '¿Qué te resulta más fácil recordar?',
    options: {
      A: 'Caras y nombres de personas',
      B: 'Letras de canciones o melodías',
      C: 'Rutas y direcciones espaciales',
      D: 'Secuencias de pasos o movimientos'
    },
    scores: {
      A: 'interpersonal',
      B: 'musical',
      C: 'spatial',
      D: 'kinesthetic'
    }
  }
];

export interface IntelligenceProfile {
  type: IntelligenceType;
  name: string;
  description: string;
  strengths: string[];
  careers: string[];
  relationWithIQ: string;
  emoji: string;
}

export const intelligenceProfiles: Record<IntelligenceType, IntelligenceProfile> = {
  musical: {
    type: 'musical',
    name: 'Inteligencia Musical',
    emoji: '🎵',
    description: 'Tenés una sensibilidad especial hacia los sonidos, ritmos y melodías. Tu cerebro procesa la información auditiva de forma excepcional.',
    strengths: [
      'Capacidad para crear, componer e interpretar música',
      'Sensibilidad hacia tonos, ritmos y patrones sonoros',
      'Memoria auditiva superior al promedio',
      'Habilidad para aprender idiomas a través del sonido'
    ],
    careers: [
      'Músico profesional o compositor',
      'Productor musical o ingeniero de sonido',
      'Maestro de música o terapia musical',
      'Crítico musical o locutor'
    ],
    relationWithIQ: 'Tu alto IQ combinado con inteligencia musical indica una capacidad excepcional para el reconocimiento de patrones auditivos y procesamiento secuencial. Esto te da ventaja en campos que requieren tanto análisis lógico como creatividad sonora.'
  },
  kinesthetic: {
    type: 'kinesthetic',
    name: 'Inteligencia Kinestésica',
    emoji: '🏃',
    description: 'Tenés un control excepcional de tu cuerpo y una coordinación superior. Aprendés mejor a través de la experiencia física directa.',
    strengths: [
      'Coordinación física y control motor fino',
      'Aprendizaje a través de la práctica y experimentación',
      'Excelente sentido del tiempo y espacio físico',
      'Habilidad para expresarte a través del movimiento'
    ],
    careers: [
      'Atleta profesional o entrenador deportivo',
      'Cirujano o fisioterapeuta',
      'Bailarín, actor o artista escénico',
      'Artesano o escultor'
    ],
    relationWithIQ: 'Tu alto IQ complementa tu inteligencia kinestésica, permitiéndote no solo ejecutar movimientos complejos, sino también analizar y optimizar técnicas. Esta combinación es ideal para campos que requieren precisión física y pensamiento estratégico simultáneo.'
  },
  logical: {
    type: 'logical',
    name: 'Inteligencia Lógico-Matemática',
    emoji: '🧮',
    description: 'Tu mente se destaca en el razonamiento abstracto, el análisis de patrones y la resolución de problemas complejos.',
    strengths: [
      'Capacidad superior para el razonamiento deductivo',
      'Facilidad con números, patrones y sistemas',
      'Pensamiento crítico y analítico desarrollado',
      'Habilidad para abstraer y generalizar conceptos'
    ],
    careers: [
      'Científico, matemático o investigador',
      'Ingeniero o desarrollador de software',
      'Analista de datos o economista',
      'Arquitecto de sistemas o consultor estratégico'
    ],
    relationWithIQ: 'Tu inteligencia lógico-matemática está directamente alineada con tu alto IQ. Esta es la forma de inteligencia más correlacionada con los tests tradicionales de IQ, lo que indica que tenés un potencial excepcional en campos STEM y análisis complejo.'
  },
  linguistic: {
    type: 'linguistic',
    name: 'Inteligencia Lingüística',
    emoji: '📖',
    description: 'Tenés una facilidad natural con las palabras, tanto escritas como habladas. Tu expresión verbal es clara y persuasiva.',
    strengths: [
      'Dominio excepcional del lenguaje oral y escrito',
      'Facilidad para aprender nuevos idiomas',
      'Capacidad para persuadir y comunicar efectivamente',
      'Memoria verbal y narrativa desarrollada'
    ],
    careers: [
      'Escritor, poeta o guionista',
      'Periodista o comunicador',
      'Abogado o orador profesional',
      'Traductor o profesor de idiomas'
    ],
    relationWithIQ: 'Tu alto IQ amplifica tu inteligencia lingüística, dándote la capacidad no solo de comunicarte efectivamente, sino también de analizar estructuras del lenguaje a niveles profundos. Esta combinación es poderosa en campos que requieren tanto creatividad verbal como análisis crítico.'
  },
  naturalist: {
    type: 'naturalist',
    name: 'Inteligencia Naturalista',
    emoji: '🌿',
    description: 'Tenés una conexión especial con el mundo natural y una habilidad excepcional para observar, clasificar y entender patrones en la naturaleza.',
    strengths: [
      'Sensibilidad hacia el medio ambiente y los seres vivos',
      'Capacidad para clasificar y categorizar información',
      'Observación detallada de patrones naturales',
      'Comprensión de sistemas ecológicos complejos'
    ],
    careers: [
      'Biólogo, ecologista o veterinario',
      'Conservacionista o guardaparques',
      'Agrónomo o botánico',
      'Chef o sommelier especializado'
    ],
    relationWithIQ: 'Tu alto IQ combinado con inteligencia naturalista te da una ventaja única en el pensamiento sistémico y el reconocimiento de patrones complejos en la naturaleza. Esta combinación es valiosa en investigación científica ambiental y resolución de problemas ecológicos.'
  },
  interpersonal: {
    type: 'interpersonal',
    name: 'Inteligencia Interpersonal',
    emoji: '🤝',
    description: 'Tenés una capacidad excepcional para entender a otras personas, leer emociones y construir relaciones significativas.',
    strengths: [
      'Empatía y comprensión emocional de otros',
      'Habilidad para liderar y motivar equipos',
      'Comunicación efectiva y resolución de conflictos',
      'Lectura precisa de lenguaje corporal y señales sociales'
    ],
    careers: [
      'Psicólogo o terapeuta',
      'Gerente o líder de equipos',
      'Vendedor o ejecutivo de cuentas',
      'Político o diplomático'
    ],
    relationWithIQ: 'Tu alto IQ potencia tu inteligencia interpersonal, permitiéndote no solo conectar emocionalmente con otros, sino también analizar dinámicas sociales complejas. Esta combinación es poderosa en liderazgo estratégico y campos que requieren influencia y comprensión humana.'
  },
  intrapersonal: {
    type: 'intrapersonal',
    name: 'Inteligencia Intrapersonal',
    emoji: '🧘',
    description: 'Tenés un profundo autoconocimiento y una capacidad excepcional para reflexionar sobre tus propias emociones, motivaciones y pensamientos.',
    strengths: [
      'Autoconciencia emocional desarrollada',
      'Capacidad para la autorreflexión profunda',
      'Autodisciplina y autorregulación efectiva',
      'Claridad sobre tus valores y objetivos personales'
    ],
    careers: [
      'Filósofo o escritor introspectivo',
      'Coach personal o consejero',
      'Emprendedor o trabajador independiente',
      'Investigador o científico solitario'
    ],
    relationWithIQ: 'Tu alto IQ combinado con fuerte inteligencia intrapersonal te da la capacidad única de no solo pensar de forma compleja, sino también de entender cómo pensás. Esta metacognición te permite optimizar continuamente tu propio proceso de aprendizaje y toma de decisiones.'
  },
  spatial: {
    type: 'spatial',
    name: 'Inteligencia Espacial',
    emoji: '🎨',
    description: 'Tenés una capacidad excepcional para visualizar, manipular y crear imágenes mentales en tres dimensiones.',
    strengths: [
      'Visualización mental de objetos y espacios',
      'Sentido desarrollado de proporciones y perspectiva',
      'Habilidad para orientarte y navegar en espacios',
      'Creatividad visual y pensamiento en imágenes'
    ],
    careers: [
      'Arquitecto o diseñador de interiores',
      'Artista visual o ilustrador',
      'Piloto o navegante',
      'Diseñador gráfico o animador 3D'
    ],
    relationWithIQ: 'Tu alto IQ potencia tu inteligencia espacial, permitiéndote no solo visualizar en 3D, sino también analizar y resolver problemas espaciales complejos de forma lógica. Esta combinación es invaluable en campos técnicos creativos y diseño innovador.'
  }
};
