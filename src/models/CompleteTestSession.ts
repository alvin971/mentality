/**
 * Modèle de session de test complet
 *
 * Reproduction exacte de lib/core/models/complete_test_session.dart
 */

import { AppConstants } from '../constants/AppConstants';

export interface CompleteTestSession {
  startTime: Date;
  endTime?: Date;

  // VCI Scores (Compréhension Verbale)
  similaritiesScore?: number;
  vocabularyScore?: number;
  informationScore?: number;

  // PRI Scores (Raisonnement Perceptif)
  cubesScore?: number;
  matricesScore?: number;
  visualPuzzlesScore?: number;

  // WMI Scores (Mémoire de Travail)
  digitSpanScore?: number;
  arithmeticScore?: number;

  // PSI Scores (Vitesse de Traitement)
  codingScore?: number;
  symbolSearchScore?: number;

  // Supplemental
  pictureSpanScore?: number;
  figureWeightsScore?: number;

  currentTestIndex: number;
  completedTests: string[];
}

export class CompleteTestSessionHelper {
  /**
   * Séquence des tests
   */
  static readonly TEST_SEQUENCE = AppConstants.TEST_SEQUENCE;

  /**
   * Crée une nouvelle session
   */
  static createNew(): CompleteTestSession {
    return {
      startTime: new Date(),
      currentTestIndex: 0,
      completedTests: [],
    };
  }

  /**
   * Vérifie si le test est complet
   */
  static isComplete(session: CompleteTestSession): boolean {
    return session.completedTests.length >= this.TEST_SEQUENCE.length;
  }

  /**
   * Calcule le pourcentage de progression
   */
  static getProgressPercentage(session: CompleteTestSession): number {
    return (session.completedTests.length / this.TEST_SEQUENCE.length) * 100;
  }

  /**
   * Obtient le nom du test actuel
   */
  static getCurrentTestName(session: CompleteTestSession): string | null {
    if (session.currentTestIndex >= this.TEST_SEQUENCE.length) {
      return null;
    }
    return this.TEST_SEQUENCE[session.currentTestIndex];
  }

  /**
   * Obtient le nom du prochain test
   */
  static getNextTestName(session: CompleteTestSession): string | null {
    const nextIndex = session.currentTestIndex + 1;
    if (nextIndex >= this.TEST_SEQUENCE.length) {
      return null;
    }
    return this.TEST_SEQUENCE[nextIndex];
  }

  /**
   * Enregistre le score d'un test
   */
  static setScore(
    session: CompleteTestSession,
    testName: string,
    score: number
  ): CompleteTestSession {
    const updated = { ...session };

    switch (testName) {
      case 'Cubes':
        updated.cubesScore = score;
        break;
      case 'Similitudes':
        updated.similaritiesScore = score;
        break;
      case 'Mémoire des Chiffres':
        updated.digitSpanScore = score;
        break;
      case 'Matrices':
        updated.matricesScore = score;
        break;
      case 'Vocabulaire':
        updated.vocabularyScore = score;
        break;
      case 'Arithmétique':
        updated.arithmeticScore = score;
        break;
      case 'Recherche de Symboles':
        updated.symbolSearchScore = score;
        break;
      case 'Puzzles Visuels':
        updated.visualPuzzlesScore = score;
        break;
      case 'Information':
        updated.informationScore = score;
        break;
      case 'Code':
        updated.codingScore = score;
        break;
      case 'Mémoire des Images':
        updated.pictureSpanScore = score;
        break;
      case 'Balances':
        updated.figureWeightsScore = score;
        break;
    }

    // Marquer le test comme complété
    if (!updated.completedTests.includes(testName)) {
      updated.completedTests.push(testName);
    }

    return updated;
  }

  /**
   * Passe au test suivant
   */
  static advanceToNextTest(session: CompleteTestSession): CompleteTestSession {
    return {
      ...session,
      currentTestIndex: session.currentTestIndex + 1,
    };
  }

  /**
   * Termine la session
   */
  static complete(session: CompleteTestSession): CompleteTestSession {
    return {
      ...session,
      endTime: new Date(),
    };
  }

  /**
   * Calcule la durée de la session en secondes
   */
  static getDurationSeconds(session: CompleteTestSession): number {
    const endTime = session.endTime || new Date();
    return Math.floor((endTime.getTime() - session.startTime.getTime()) / 1000);
  }

  /**
   * Formate la durée
   */
  static getFormattedDuration(session: CompleteTestSession): string {
    const seconds = this.getDurationSeconds(session);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}min ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}min ${secs}s`;
    } else {
      return `${secs}s`;
    }
  }

  /**
   * Calcule le score brut ICV (Indice de Compréhension Verbale)
   * Similitudes + Vocabulaire + Information
   */
  static getICVRawScore(session: CompleteTestSession): number | null {
    const scores = [
      session.similaritiesScore,
      session.vocabularyScore,
      session.informationScore,
    ];

    if (scores.some(s => s === undefined)) {
      return null;
    }

    return scores.reduce((sum, score) => sum! + score!, 0)!;
  }

  /**
   * Calcule le score brut IRP (Indice de Raisonnement Perceptif)
   * Cubes + Matrices + Puzzles Visuels
   */
  static getIRPRawScore(session: CompleteTestSession): number | null {
    const scores = [
      session.cubesScore,
      session.matricesScore,
      session.visualPuzzlesScore,
    ];

    if (scores.some(s => s === undefined)) {
      return null;
    }

    return scores.reduce((sum, score) => sum! + score!, 0)!;
  }

  /**
   * Calcule le score brut IMT (Indice de Mémoire de Travail)
   * Mémoire des Chiffres + Arithmétique
   */
  static getIMTRawScore(session: CompleteTestSession): number | null {
    const scores = [session.digitSpanScore, session.arithmeticScore];

    if (scores.some(s => s === undefined)) {
      return null;
    }

    return scores.reduce((sum, score) => sum! + score!, 0)!;
  }

  /**
   * Calcule le score brut IVT (Indice de Vitesse de Traitement)
   * Code + Recherche de Symboles
   */
  static getIVTRawScore(session: CompleteTestSession): number | null {
    const scores = [session.codingScore, session.symbolSearchScore];

    if (scores.some(s => s === undefined)) {
      return null;
    }

    return scores.reduce((sum, score) => sum! + score!, 0)!;
  }

  /**
   * Estimation simplifiée du QI
   *
   * NOTE: Cette formule est TRÈS simplifiée et ne reflète PAS
   * la vraie standardisation WAIS-IV. En production, utiliser
   * les tables normatives officielles.
   */
  static getEstimatedIQ(session: CompleteTestSession): number | null {
    const icv = this.getICVRawScore(session);
    const irp = this.getIRPRawScore(session);
    const imt = this.getIMTRawScore(session);
    const ivt = this.getIVTRawScore(session);

    if (icv === null || irp === null || imt === null || ivt === null) {
      return null;
    }

    // Estimation très simplifiée
    // En production: utiliser les tables de conversion normatives
    const totalRawScore = icv + irp + imt + ivt;

    // Score moyen attendu: 10 * 10 subtests = 100 points bruts
    // Écart-type attendu: environ 30 points
    const meanExpected = 100;
    const sdExpected = 30;

    const zScore = (totalRawScore - meanExpected) / sdExpected;
    const estimatedIQ = Math.round(100 + zScore * 15);

    // Limiter entre 40 et 160
    return Math.max(40, Math.min(160, estimatedIQ));
  }

  /**
   * Obtient tous les scores sous forme d'objet
   */
  static getAllScores(session: CompleteTestSession) {
    return {
      // VCI
      similarities: session.similaritiesScore,
      vocabulary: session.vocabularyScore,
      information: session.informationScore,

      // PRI
      cubes: session.cubesScore,
      matrices: session.matricesScore,
      visualPuzzles: session.visualPuzzlesScore,

      // WMI
      digitSpan: session.digitSpanScore,
      arithmetic: session.arithmeticScore,

      // PSI
      coding: session.codingScore,
      symbolSearch: session.symbolSearchScore,

      // Supplemental
      pictureSpan: session.pictureSpanScore,
      figureWeights: session.figureWeightsScore,

      // Indices
      icv: this.getICVRawScore(session),
      irp: this.getIRPRawScore(session),
      imt: this.getIMTRawScore(session),
      ivt: this.getIVTRawScore(session),

      // QI estimé
      estimatedIQ: this.getEstimatedIQ(session),
    };
  }
}
