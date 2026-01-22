/**
 * Palette de couleurs de l'application Mentality
 *
 * Utilise Material Design 3 avec des couleurs accessibles
 * et adaptées à tous les groupes d'âge
 *
 * Reproduction exacte de lib/core/theme/app_colors.dart
 */

export class AppColors {
  // ========================================
  // COULEURS PRIMAIRES
  // ========================================

  /** Couleur primaire principale (violet/indigo pour intelligence) */
  static readonly primary = '#6366F1'; // Indigo-500

  /** Variante plus claire de la couleur primaire */
  static readonly primaryLight = '#818CF8'; // Indigo-400

  /** Variante plus foncée de la couleur primaire */
  static readonly primaryDark = '#4F46E5'; // Indigo-600

  /** Couleur primaire conteneur */
  static readonly primaryContainer = '#E0E7FF'; // Indigo-100

  // ========================================
  // COULEURS SECONDAIRES
  // ========================================

  /** Couleur secondaire (turquoise pour créativité) */
  static readonly secondary = '#06B6D4'; // Cyan-500

  /** Variante claire */
  static readonly secondaryLight = '#22D3EE'; // Cyan-400

  /** Variante foncée */
  static readonly secondaryDark = '#0891B2'; // Cyan-600

  /** Couleur secondaire conteneur */
  static readonly secondaryContainer = '#CFFAFE'; // Cyan-100

  // ========================================
  // COULEURS TERTIAIRES
  // ========================================

  /** Couleur tertiaire (rose pour engagement émotionnel) */
  static readonly tertiary = '#EC4899'; // Pink-500

  /** Variante claire */
  static readonly tertiaryLight = '#F472B6'; // Pink-400

  /** Variante foncée */
  static readonly tertiaryDark = '#DB2777'; // Pink-600

  // ========================================
  // COULEURS DE FEEDBACK
  // ========================================

  /** Succès (vert) */
  static readonly success = '#10B981'; // Green-500
  static readonly successLight = '#34D399'; // Green-400
  static readonly successContainer = '#D1FAE5'; // Green-100

  /** Erreur (rouge) */
  static readonly error = '#EF4444'; // Red-500
  static readonly errorLight = '#F87171'; // Red-400
  static readonly errorContainer = '#FEE2E2'; // Red-100

  /** Avertissement (orange) */
  static readonly warning = '#F59E0B'; // Amber-500
  static readonly warningLight = '#FBBF24'; // Amber-400
  static readonly warningContainer = '#FEF3C7'; // Amber-100

  /** Information (bleu) */
  static readonly info = '#3B82F6'; // Blue-500
  static readonly infoLight = '#60A5FA'; // Blue-400
  static readonly infoContainer = '#DBEAFE'; // Blue-100

  // ========================================
  // COULEURS NEUTRES
  // ========================================

  /** Blanc pur */
  static readonly white = '#FFFFFF';

  /** Noir pur */
  static readonly black = '#000000';

  /** Échelle de gris */
  static readonly grey50 = '#F9FAFB';
  static readonly grey100 = '#F3F4F6';
  static readonly grey200 = '#E5E7EB';
  static readonly grey300 = '#D1D5DB';
  static readonly grey400 = '#9CA3AF';
  static readonly grey500 = '#6B7280';
  static readonly grey600 = '#4B5563';
  static readonly grey700 = '#374151';
  static readonly grey800 = '#1F2937';
  static readonly grey900 = '#111827';

  // ========================================
  // COULEURS DE SURFACE (Light Mode)
  // ========================================

  static readonly background = '#FAFAFA';
  static readonly surface = '#FFFFFF';
  static readonly surfaceVariant = '#F3F4F6';

  // ========================================
  // COULEURS DE SURFACE (Dark Mode)
  // ========================================

  static readonly backgroundDark = '#121212';
  static readonly surfaceDark = '#1E1E1E';
  static readonly surfaceVariantDark = '#2C2C2C';

  // ========================================
  // COULEURS PAR INDICE COGNITIF
  // ========================================

  /** Compréhension Verbale (bleu-violet) */
  static readonly indexVCI = '#8B5CF6'; // Violet-500

  /** Visuo-Spatial (cyan) */
  static readonly indexVSI = '#06B6D4'; // Cyan-500

  /** Raisonnement Fluide (indigo) */
  static readonly indexFRI = '#6366F1'; // Indigo-500

  /** Mémoire de Travail (vert) */
  static readonly indexWMI = '#10B981'; // Green-500

  /** Vitesse de Traitement (orange) */
  static readonly indexPSI = '#F59E0B'; // Amber-500

  /** QI Total (violet foncé) */
  static readonly indexFSIQ = '#7C3AED'; // Violet-600

  // ========================================
  // COULEURS PAR GROUPE D'ÂGE (UI)
  // ========================================

  /** Préscolaire (couleurs vives et joyeuses) */
  static readonly preschoolPrimary = '#F59E0B'; // Orange vif
  static readonly preschoolSecondary = '#EC4899'; // Rose
  static readonly preschoolAccent = '#10B981'; // Vert

  /** Enfant (couleurs énergiques) */
  static readonly childPrimary = '#3B82F6'; // Bleu
  static readonly childSecondary = '#8B5CF6'; // Violet
  static readonly childAccent = '#06B6D4'; // Cyan

  /** Adulte (couleurs professionnelles) */
  static readonly adultPrimary = '#6366F1'; // Indigo
  static readonly adultSecondary = '#0891B2'; // Cyan foncé
  static readonly adultAccent = '#64748B'; // Slate

  // ========================================
  // COULEURS DE CLASSIFICATION QI
  // ========================================

  /** Extrêmement bas (<70) */
  static readonly iqExtremelyLow = '#DC2626'; // Red-600

  /** Limite (70-79) */
  static readonly iqBorderline = '#F59E0B'; // Amber-500

  /** Moyen faible (80-89) */
  static readonly iqLowAverage = '#FBBF24'; // Amber-400

  /** Moyen (90-109) */
  static readonly iqAverage = '#10B981'; // Green-500

  /** Moyen fort (110-119) */
  static readonly iqHighAverage = '#06B6D4'; // Cyan-500

  /** Supérieur (120-129) */
  static readonly iqSuperior = '#3B82F6'; // Blue-500

  /** Très supérieur (130+) */
  static readonly iqVerySuperior = '#8B5CF6'; // Violet-500

  // ========================================
  // OPACITÉS
  // ========================================

  static readonly opacityDisabled = 0.38;
  static readonly opacityMedium = 0.60;
  static readonly opacityHigh = 0.87;

  // ========================================
  // MÉTHODES UTILITAIRES
  // ========================================

  /**
   * Retourne la couleur d'un indice par son code
   */
  static getIndexColor(indexCode: string): string {
    switch (indexCode) {
      case 'VCI':
        return this.indexVCI;
      case 'VSI':
        return this.indexVSI;
      case 'FRI':
        return this.indexFRI;
      case 'WMI':
        return this.indexWMI;
      case 'PSI':
        return this.indexPSI;
      case 'FSIQ':
        return this.indexFSIQ;
      default:
        return this.grey500;
    }
  }

  /**
   * Retourne la couleur selon le score QI
   */
  static getIQClassificationColor(iq: number): string {
    if (iq < 70) return this.iqExtremelyLow;
    if (iq < 80) return this.iqBorderline;
    if (iq < 90) return this.iqLowAverage;
    if (iq < 110) return this.iqAverage;
    if (iq < 120) return this.iqHighAverage;
    if (iq < 130) return this.iqSuperior;
    return this.iqVerySuperior;
  }

  /**
   * Convertit une couleur hex en rgba avec opacité
   */
  static withOpacity(color: string, opacity: number): string {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  /**
   * Retourne un gradient CSS
   */
  static primaryGradient(): string {
    return `linear-gradient(135deg, ${this.primary} 0%, ${this.primaryLight} 100%)`;
  }

  static successGradient(): string {
    return `linear-gradient(135deg, ${this.success} 0%, ${this.successLight} 100%)`;
  }

  static preschoolGradient(): string {
    return `linear-gradient(135deg, ${this.preschoolPrimary} 0%, ${this.preschoolSecondary} 100%)`;
  }
}
