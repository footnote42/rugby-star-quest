import { useState, useEffect } from 'react';

export interface PlayerProfile {
  id: string;
  name: string;
  goal: string;
  createdDate: number;
}

export interface Assessment {
  id: string;
  competencyId: string;
  targetLevel: number;
  currentLevel: number;
  gap: number;
  assessmentDate: number;
}

const STORAGE_KEYS = {
  PLAYER: 'rugby-player-profile',
  ASSESSMENTS: 'rugby-assessments'
};

export const usePlayerProfile = () => {
  const [profile, setProfile] = useState<PlayerProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.PLAYER);
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const saveProfile = (newProfile: PlayerProfile) => {
    localStorage.setItem(STORAGE_KEYS.PLAYER, JSON.stringify(newProfile));
    setProfile(newProfile);
  };

  return { profile, saveProfile };
};

export const useAssessments = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.ASSESSMENTS);
    if (stored) {
      setAssessments(JSON.parse(stored));
    }
  }, []);

  const saveAssessment = (assessment: Omit<Assessment, 'id' | 'gap' | 'assessmentDate'>) => {
    const newAssessment: Assessment = {
      ...assessment,
      id: `assessment-${Date.now()}-${Math.random()}`,
      gap: assessment.targetLevel - assessment.currentLevel,
      assessmentDate: Date.now()
    };

    const updated = [
      ...assessments.filter(a => a.competencyId !== assessment.competencyId),
      newAssessment
    ];

    localStorage.setItem(STORAGE_KEYS.ASSESSMENTS, JSON.stringify(updated));
    setAssessments(updated);
  };

  const getAssessmentForCompetency = (competencyId: string): Assessment | undefined => {
    return assessments.find(a => a.competencyId === competencyId);
  };

  const getTopGaps = (limit: number = 3): Assessment[] => {
    return [...assessments]
      .filter(a => a.gap > 0)
      .sort((a, b) => b.gap - a.gap)
      .slice(0, limit);
  };

  return { assessments, saveAssessment, getAssessmentForCompetency, getTopGaps };
};
