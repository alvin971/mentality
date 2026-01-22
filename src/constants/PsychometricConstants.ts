/**
 * Constantes psychométriques
 *
 * Reproduction exacte de lib/core/constants/psychometric_constants.dart
 */

export class PsychometricConstants {
  // ========================================
  // PARAMÈTRES IRT (Item Response Theory)
  // ========================================

  static readonly INITIAL_THETA = 0.0;
  static readonly INITIAL_SE = 1.0;
  static readonly SE_STOPPING_CRITERION = 0.3;
  static readonly MAX_ADAPTIVE_ITEMS = 15;
  static readonly MIN_ADAPTIVE_ITEMS = 5;

  // ========================================
  // STANDARDISATION DES SCORES
  // ========================================

  // Scores des subtests
  static readonly SUBTEST_MEAN = 10;
  static readonly SUBTEST_STD_DEV = 3;
  static readonly SUBTEST_MIN_SCORE = 1;
  static readonly SUBTEST_MAX_SCORE = 19;

  // Scores de QI
  static readonly IQ_MEAN = 100;
  static readonly IQ_STD_DEV = 15;
  static readonly IQ_MIN_SCORE = 40;
  static readonly IQ_MAX_SCORE = 160;

  // ========================================
  // RÈGLES D'ARRÊT (DISCONTINUATION)
  // ========================================

  static readonly CONSECUTIVE_FAILURES_MATRICES = 4;
  static readonly CONSECUTIVE_FAILURES_CUBES = 2;
  static readonly CONSECUTIVE_FAILURES_DEFAULT = 4;
  static readonly FAILURES_IN_LAST = 4;
  static readonly DISCONTINUATION_WINDOW = 5;

  // ========================================
  // LIMITES DE TEMPS (secondes)
  // ========================================

  static readonly TIME_LIMIT_CODING = 120;
  static readonly TIME_LIMIT_SYMBOL_SEARCH = 120;
  static readonly TIME_LIMIT_CANCELLATION = 45;
  static readonly TIME_LIMIT_BLOCK_DESIGN_EASY = 30;
  static readonly TIME_LIMIT_BLOCK_DESIGN_MEDIUM = 60;
  static readonly TIME_LIMIT_BLOCK_DESIGN_HARD = 120;
  static readonly TIME_LIMIT_FIGURE_WEIGHTS = 30;
  static readonly TIME_LIMIT_VISUAL_PUZZLES = 30;
  static readonly TIME_LIMIT_MATRIX_REASONING = 45; // indicatif

  // ========================================
  // CLASSIFICATIONS QI
  // ========================================

  static readonly IQ_CLASSIFICATIONS = {
    EXTREMELY_LOW: { min: 0, max: 69, label: 'Extrêmement bas' },
    BORDERLINE: { min: 70, max: 79, label: 'Limite' },
    LOW_AVERAGE: { min: 80, max: 89, label: 'Moyen faible' },
    AVERAGE: { min: 90, max: 109, label: 'Moyen' },
    HIGH_AVERAGE: { min: 110, max: 119, label: 'Moyen fort' },
    SUPERIOR: { min: 120, max: 129, label: 'Supérieur' },
    VERY_SUPERIOR: { min: 130, max: 999, label: 'Très supérieur' },
  };

  /**
   * Retourne la classification QI
   */
  static getIQClassification(iq: number): string {
    const classifications = Object.values(this.IQ_CLASSIFICATIONS);
    const found = classifications.find(c => iq >= c.min && iq <= c.max);
    return found?.label || 'Non déterminé';
  }

  /**
   * Retourne le percentile approximatif basé sur le QI
   */
  static getPercentile(iq: number): number {
    // Distribution normale: z = (x - mean) / sd
    const z = (iq - this.IQ_MEAN) / this.IQ_STD_DEV;

    // Approximation du percentile basée sur la fonction de répartition normale
    // Formule simplifiée pour le web
    const percentile = 0.5 * (1 + this.erf(z / Math.sqrt(2)));
    return Math.round(percentile * 100);
  }

  /**
   * Fonction d'erreur (approximation)
   */
  private static erf(x: number): number {
    // Approximation de la fonction d'erreur
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);

    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return sign * y;
  }
}
