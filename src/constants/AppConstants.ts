/**
 * Constantes de l'application Mentality
 *
 * Reproduction exacte de lib/core/constants/app_constants.dart
 */

export class AppConstants {
  // ========================================
  // INFORMATIONS APPLICATION
  // ========================================

  static readonly APP_NAME = 'Mentality';
  static readonly APP_VERSION = '1.0.0';
  static readonly APP_TAGLINE = 'Évaluation cognitive adaptative par IA';

  // ========================================
  // TYPES D'EXERCICES (12 TESTS WAIS-IV)
  // ========================================

  static readonly EXERCISE_MATRICES = 'matrix_reasoning';
  static readonly EXERCISE_BALANCES = 'figure_weights';
  static readonly EXERCISE_PUZZLES = 'visual_puzzles';
  static readonly EXERCISE_CUBES = 'block_design';
  static readonly EXERCISE_CODING = 'coding';
  static readonly EXERCISE_SYMBOLS = 'symbol_search';
  static readonly EXERCISE_DIGIT_SPAN = 'digit_span';
  static readonly EXERCISE_PICTURE_MEMORY = 'picture_memory';
  static readonly EXERCISE_VOCABULARY = 'vocabulary';
  static readonly EXERCISE_SIMILARITIES = 'similarities';
  static readonly EXERCISE_INFORMATION = 'information';
  static readonly EXERCISE_ARITHMETIC = 'arithmetic';

  // ========================================
  // ÉTATS D'ÉVALUATION
  // ========================================

  static readonly STATE_NOT_STARTED = 'not_started';
  static readonly STATE_IN_PROGRESS = 'in_progress';
  static readonly STATE_PAUSED = 'paused';
  static readonly STATE_COMPLETED = 'completed';
  static readonly STATE_ABANDONED = 'abandoned';

  // ========================================
  // DURÉES D'ANIMATION (ms)
  // ========================================

  static readonly SHORT_ANIMATION_DURATION = 200;
  static readonly MEDIUM_ANIMATION_DURATION = 400;
  static readonly LONG_ANIMATION_DURATION = 600;

  // ========================================
  // SÉQUENCE DES TESTS COMPLETS
  // ========================================

  static readonly TEST_SEQUENCE = [
    'Cubes',              // 1. Block Design
    'Similitudes',        // 2. Similarities
    'Mémoire des Chiffres', // 3. Digit Span
    'Matrices',           // 4. Matrix Reasoning
    'Vocabulaire',        // 5. Vocabulary
    'Arithmétique',       // 6. Arithmetic
    'Recherche de Symboles', // 7. Symbol Search
    'Puzzles Visuels',    // 8. Visual Puzzles
    'Information',        // 9. Information
    'Code',               // 10. Coding
    'Mémoire des Images', // 11. Picture Span
    'Balances',           // 12. Figure Weights
  ];

  // ========================================
  // DURÉES ESTIMÉES
  // ========================================

  static readonly SPLASH_DURATION_MS = 3000; // 3 secondes
  static readonly COMPLETE_TEST_DURATION_MIN = 60; // 60-90 minutes
  static readonly COMPLETE_TEST_DURATION_MAX = 90;

  // ========================================
  // DIMENSIONS DE DESIGN
  // ========================================

  static readonly DESIGN_WIDTH = 375;  // iPhone 11 Pro
  static readonly DESIGN_HEIGHT = 812;

  static readonly BORDER_RADIUS = 16;
  static readonly BORDER_RADIUS_SMALL = 12;
  static readonly BORDER_RADIUS_LARGE = 24;

  static readonly PADDING = 24;
  static readonly PADDING_SMALL = 16;
  static readonly PADDING_LARGE = 32;

  static readonly SPACING = 16;
  static readonly SPACING_SMALL = 8;
  static readonly SPACING_LARGE = 24;
}
