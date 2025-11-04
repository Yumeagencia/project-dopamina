export interface Question {
  id: number;
  category: 'verbal' | 'numerical' | 'visual' | 'logical';
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export const questions: Question[] = [
  {
    id: 1,
    category: 'verbal',
    question: '¿Qué palabra NO pertenece al grupo?',
    options: { A: 'Perro', B: 'Gato', C: 'León', D: 'Mesa' },
    correctAnswer: 'D'
  },
  {
    id: 2,
    category: 'verbal',
    question: 'Completa la analogía: Libro es a Leer como Canción es a...',
    options: { A: 'Escribir', B: 'Escuchar', C: 'Bailar', D: 'Pintar' },
    correctAnswer: 'B'
  },
  {
    id: 3,
    category: 'verbal',
    question: '¿Cuál es el antónimo de "Optimista"?',
    options: { A: 'Feliz', B: 'Pesimista', C: 'Alegre', D: 'Contento' },
    correctAnswer: 'B'
  },
  {
    id: 4,
    category: 'verbal',
    question: 'Si CASA es a HOGAR, entonces COCHE es a...',
    options: { A: 'Rueda', B: 'Vehículo', C: 'Gasolina', D: 'Camino' },
    correctAnswer: 'B'
  },
  {
    id: 5,
    category: 'verbal',
    question: '¿Qué palabra significa lo mismo que "Efímero"?',
    options: { A: 'Eterno', B: 'Pasajero', C: 'Grande', D: 'Pequeño' },
    correctAnswer: 'B'
  },
  {
    id: 6,
    category: 'verbal',
    question: 'Completa: Médico es a Hospital como Maestro es a...',
    options: { A: 'Libro', B: 'Escuela', C: 'Niño', D: 'Lápiz' },
    correctAnswer: 'B'
  },
  {
    id: 7,
    category: 'verbal',
    question: '¿Cuál palabra está mal escrita?',
    options: { A: 'Excelente', B: 'Definitivamente', C: 'Occación', D: 'Necesario' },
    correctAnswer: 'C'
  },
  {
    id: 8,
    category: 'verbal',
    question: 'Elige la palabra que mejor completa: El ___ del agua es 100°C',
    options: { A: 'punto de ebullición', B: 'temperatura', C: 'calor', D: 'vapor' },
    correctAnswer: 'A'
  },
  {
    id: 9,
    category: 'numerical',
    question: '¿Qué número sigue en la serie? 2, 4, 8, 16, ...',
    options: { A: '20', B: '24', C: '32', D: '28' },
    correctAnswer: 'C'
  },
  {
    id: 10,
    category: 'numerical',
    question: 'Si 5 manzanas cuestan Gs. 10.000, ¿cuánto cuestan 8 manzanas?',
    options: { A: '14.000', B: '16.000', C: '18.000', D: '15.000' },
    correctAnswer: 'B'
  },
  {
    id: 11,
    category: 'numerical',
    question: '¿Cuál es el 25% de 80?',
    options: { A: '15', B: '20', C: '25', D: '30' },
    correctAnswer: 'B'
  },
  {
    id: 12,
    category: 'numerical',
    question: 'Completa la serie: 1, 1, 2, 3, 5, 8, ...',
    options: { A: '11', B: '13', C: '12', D: '10' },
    correctAnswer: 'B'
  },
  {
    id: 13,
    category: 'numerical',
    question: 'Si x + 5 = 12, ¿cuánto vale x?',
    options: { A: '5', B: '6', C: '7', D: '8' },
    correctAnswer: 'C'
  },
  {
    id: 14,
    category: 'numerical',
    question: '¿Qué número es el doble de la mitad de 40?',
    options: { A: '20', B: '30', C: '40', D: '10' },
    correctAnswer: 'C'
  },
  {
    id: 15,
    category: 'numerical',
    question: 'Resuelve: 15 ÷ 3 + 4 × 2 = ?',
    options: { A: '11', B: '13', C: '14', D: '15' },
    correctAnswer: 'B'
  },
  {
    id: 16,
    category: 'numerical',
    question: '¿Cuántos minutos hay en 2.5 horas?',
    options: { A: '120', B: '130', C: '140', D: '150' },
    correctAnswer: 'D'
  },
  {
    id: 17,
    category: 'visual',
    question: 'Si rotas un cuadrado 90° en sentido horario, ¿cuántos grados has rotado en total después de 3 rotaciones?',
    options: { A: '180°', B: '270°', C: '360°', D: '90°' },
    correctAnswer: 'B'
  },
  {
    id: 18,
    category: 'visual',
    question: '¿Cuántos triángulos hay en una estrella de 5 puntas?',
    options: { A: '5', B: '8', C: '10', D: '12' },
    correctAnswer: 'C'
  },
  {
    id: 19,
    category: 'visual',
    question: 'Un cubo tiene ___ caras',
    options: { A: '4', B: '6', C: '8', D: '12' },
    correctAnswer: 'B'
  },
  {
    id: 20,
    category: 'visual',
    question: '¿Qué figura continúa? ○ ◇ ○ ◇ ○ ...',
    options: { A: '○', B: '◇', C: '□', D: '△' },
    correctAnswer: 'B'
  },
  {
    id: 21,
    category: 'visual',
    question: 'Si divides un círculo con 3 líneas, ¿cuál es el máximo de secciones que puedes crear?',
    options: { A: '4', B: '5', C: '6', D: '7' },
    correctAnswer: 'D'
  },
  {
    id: 22,
    category: 'visual',
    question: '¿Cuántas líneas de simetría tiene un cuadrado?',
    options: { A: '2', B: '4', C: '6', D: '8' },
    correctAnswer: 'B'
  },
  {
    id: 23,
    category: 'visual',
    question: 'Una pirámide de base cuadrada tiene ___ vértices',
    options: { A: '4', B: '5', C: '6', D: '8' },
    correctAnswer: 'B'
  },
  {
    id: 24,
    category: 'visual',
    question: '¿Qué forma NO es un polígono?',
    options: { A: 'Triángulo', B: 'Círculo', C: 'Hexágono', D: 'Pentágono' },
    correctAnswer: 'B'
  },
  {
    id: 25,
    category: 'logical',
    question: 'Si todos los A son B, y algunos B son C, entonces...',
    options: { A: 'Todos los A son C', B: 'Algunos A son C', C: 'No podemos saberlo', D: 'Ningún A es C' },
    correctAnswer: 'C'
  },
  {
    id: 26,
    category: 'logical',
    question: 'María es más alta que Juan. Juan es más alto que Pedro. ¿Quién es el más bajo?',
    options: { A: 'María', B: 'Juan', C: 'Pedro', D: 'No se puede saber' },
    correctAnswer: 'C'
  },
  {
    id: 27,
    category: 'logical',
    question: 'Si llueve, uso paraguas. Estoy usando paraguas, entonces...',
    options: { A: 'Está lloviendo', B: 'Podría estar lloviendo', C: 'No llueve', D: 'Hace sol' },
    correctAnswer: 'B'
  },
  {
    id: 28,
    category: 'logical',
    question: '¿Qué día es mañana si anteayer fue martes?',
    options: { A: 'Miércoles', B: 'Jueves', C: 'Viernes', D: 'Sábado' },
    correctAnswer: 'C'
  },
  {
    id: 29,
    category: 'logical',
    question: 'Si A > B y B > C, entonces A ___ C',
    options: { A: '=', B: '<', C: '>', D: 'ninguno' },
    correctAnswer: 'C'
  },
  {
    id: 30,
    category: 'logical',
    question: 'Un tren sale a las 14:30 y llega a las 17:15. ¿Cuánto duró el viaje?',
    options: { A: '2h 15min', B: '2h 30min', C: '2h 45min', D: '3h' },
    correctAnswer: 'C'
  },
  {
    id: 31,
    category: 'logical',
    question: '¿Cuál es la probabilidad de sacar cara en una moneda?',
    options: { A: '25%', B: '33%', C: '50%', D: '75%' },
    correctAnswer: 'C'
  },
  {
    id: 32,
    category: 'logical',
    question: 'Si hoy es lunes, ¿qué día será en 100 días?',
    options: { A: 'Lunes', B: 'Martes', C: 'Miércoles', D: 'Jueves' },
    correctAnswer: 'B'
  }
];
