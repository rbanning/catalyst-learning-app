export const challengeLevelList = ['Novice', 'Intermediate', 'Advanced'] as const;
export type ChallengeLevel = typeof challengeLevelList[number];

export const challengePhaseKeyList = ['approach', 'solution', 'framing'] as const;
export type ChallengePhaseKey = typeof challengePhaseKeyList[number];

export const challengePhaseQualityList = ['weak', 'partial', 'strong'] as const;
export type ChallengePhaseQuality = typeof challengePhaseQualityList[number];


export type ChallengePhaseOption = {
  text: string;
  quality: ChallengePhaseQuality;
  feedback: string;
}

export type ChallengePhase = {
  question: string;
  options: ChallengePhaseOption[];
}

export type Challenge = {
  id: number;
  title: string;
  level: ChallengeLevel;
  scenario: string;
  stakeholders: string[];
  phases: Record<ChallengePhaseKey, ChallengePhase>;
}