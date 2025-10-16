export type CompetencyCategory = 'BEHAVIOUR' | 'SKILL' | 'KNOWLEDGE';

export interface Competency {
  id: string;
  category: CompetencyCategory;
  friendlyName: string;
  tooltipText: string;
  displayOrder: number;
}

export const COMPETENCIES: Competency[] = [
  // BEHAVIOURS (9)
  {
    id: 'b1',
    category: 'BEHAVIOUR',
    friendlyName: 'I work well with my teammates',
    tooltipText: 'I help my teammates, pass the ball, and support others on the pitch',
    displayOrder: 1
  },
  {
    id: 'b2',
    category: 'BEHAVIOUR',
    friendlyName: 'I keep trying even when things are tough',
    tooltipText: "When I make a mistake or we're losing, I don't give up and keep going",
    displayOrder: 2
  },
  {
    id: 'b3',
    category: 'BEHAVIOUR',
    friendlyName: 'I have fun playing rugby',
    tooltipText: "I smile, laugh, and feel happy when I'm playing rugby",
    displayOrder: 3
  },
  {
    id: 'b4',
    category: 'BEHAVIOUR',
    friendlyName: 'I follow the rules and listen to coaches',
    tooltipText: 'I do what the coach asks, follow the laws of rugby, and control my emotions',
    displayOrder: 4
  },
  {
    id: 'b5',
    category: 'BEHAVIOUR',
    friendlyName: 'I respect everyone in the game',
    tooltipText: "I'm kind to opponents, accept the referee's decisions, and win/lose with grace",
    displayOrder: 5
  },
  {
    id: 'b6',
    category: 'BEHAVIOUR',
    friendlyName: 'I try new things in games',
    tooltipText: 'I look for different ways to solve problems and make decisions on the pitch',
    displayOrder: 6
  },
  {
    id: 'b7',
    category: 'BEHAVIOUR',
    friendlyName: "I know what's happening around me",
    tooltipText: 'I look up, see where my teammates and opponents are, and spot space',
    displayOrder: 7
  },
  {
    id: 'b8',
    category: 'BEHAVIOUR',
    friendlyName: 'I make good choices quickly',
    tooltipText: 'I decide what to do with the ball - pass, run, or kick - at the right time',
    displayOrder: 8
  },
  {
    id: 'b9',
    category: 'BEHAVIOUR',
    friendlyName: 'I help organize myself and others',
    tooltipText: 'I get ready without being told and help my team get into position',
    displayOrder: 9
  },
  
  // SKILLS (10)
  {
    id: 's1',
    category: 'SKILL',
    friendlyName: 'I can change direction quickly',
    tooltipText: 'I can dodge, sidestep, and move in different directions fast',
    displayOrder: 1
  },
  {
    id: 's2',
    category: 'SKILL',
    friendlyName: 'I stay on my feet',
    tooltipText: "I don't fall over easily when running, turning, or being tackled",
    displayOrder: 2
  },
  {
    id: 's3',
    category: 'SKILL',
    friendlyName: 'My body parts work well together',
    tooltipText: 'My hands, feet, and eyes work as a team when I play',
    displayOrder: 3
  },
  {
    id: 's4',
    category: 'SKILL',
    friendlyName: 'I have quick, clever feet',
    tooltipText: 'I can step, skip, and move my feet in different patterns',
    displayOrder: 4
  },
  {
    id: 's5',
    category: 'SKILL',
    friendlyName: 'I can pass and catch the ball well',
    tooltipText: 'I catch the ball cleanly and pass it accurately to my teammates',
    displayOrder: 5
  },
  {
    id: 's6',
    category: 'SKILL',
    friendlyName: 'I can tackle safely and effectively',
    tooltipText: 'I can bring down an opponent safely, low and with good technique',
    displayOrder: 6
  },
  {
    id: 's7',
    category: 'SKILL',
    friendlyName: 'I can run and play for the whole game',
    tooltipText: "I don't get too tired and can keep playing hard throughout training and matches",
    displayOrder: 7
  },
  {
    id: 's8',
    category: 'SKILL',
    friendlyName: 'I control how my body moves',
    tooltipText: 'I can control my body when running, jumping, falling, and changing direction',
    displayOrder: 8
  },
  {
    id: 's9',
    category: 'SKILL',
    friendlyName: 'I have a strong middle',
    tooltipText: 'My stomach and back muscles are strong, helping me stay balanced and powerful',
    displayOrder: 9
  },
  {
    id: 's10',
    category: 'SKILL',
    friendlyName: 'I can stretch and move easily',
    tooltipText: 'I can bend, stretch, and move in different ways without hurting myself',
    displayOrder: 10
  },
  
  // KNOWLEDGE (10)
  {
    id: 'k1',
    category: 'KNOWLEDGE',
    friendlyName: 'I know the offside rule',
    tooltipText: "I understand where I'm allowed to stand and when I can join in",
    displayOrder: 1
  },
  {
    id: 'k2',
    category: 'KNOWLEDGE',
    friendlyName: 'I know the basic rule of rugby',
    tooltipText: 'I run towards the try line but pass the ball backwards to my teammates',
    displayOrder: 2
  },
  {
    id: 'k3',
    category: 'KNOWLEDGE',
    friendlyName: 'I understand scrums',
    tooltipText: 'I know what a scrum is, what my job is, and how to do it safely',
    displayOrder: 3
  },
  {
    id: 'k4',
    category: 'KNOWLEDGE',
    friendlyName: 'I understand lineouts',
    tooltipText: 'I know what a lineout is, where to stand, and what I need to do',
    displayOrder: 4
  },
  {
    id: 'k5',
    category: 'KNOWLEDGE',
    friendlyName: 'I know the different positions',
    tooltipText: 'I understand what different players do (like forwards and backs)',
    displayOrder: 5
  },
  {
    id: 'k6',
    category: 'KNOWLEDGE',
    friendlyName: 'I know where to stand in defense',
    tooltipText: 'I understand where I should be when the other team has the ball',
    displayOrder: 6
  },
  {
    id: 'k7',
    category: 'KNOWLEDGE',
    friendlyName: 'I know where to stand in attack',
    tooltipText: 'I understand where I should be when my team has the ball',
    displayOrder: 7
  },
  {
    id: 'k8',
    category: 'KNOWLEDGE',
    friendlyName: 'I understand when to kick',
    tooltipText: 'I know when and why we might kick the ball instead of running or passing',
    displayOrder: 8
  },
  {
    id: 'k9',
    category: 'KNOWLEDGE',
    friendlyName: 'I know the rules for my age group',
    tooltipText: 'I understand the special rules for U10 rugby (like number of players, field size)',
    displayOrder: 9
  },
  {
    id: 'k10',
    category: 'KNOWLEDGE',
    friendlyName: 'I understand rucks and mauls',
    tooltipText: 'I know what happens when players compete for the ball on the ground or standing up',
    displayOrder: 10
  }
];

export const getCategoryEmoji = (category: CompetencyCategory): string => {
  switch (category) {
    case 'BEHAVIOUR':
      return '😊';
    case 'SKILL':
      return '💪';
    case 'KNOWLEDGE':
      return '🧠';
  }
};

export const getCategoryTitle = (category: CompetencyCategory): string => {
  switch (category) {
    case 'BEHAVIOUR':
      return 'BEHAVIOURS';
    case 'SKILL':
      return 'SKILLS';
    case 'KNOWLEDGE':
      return 'KNOWLEDGE';
  }
};

export const getCategorySubtitle = (category: CompetencyCategory): string => {
  switch (category) {
    case 'BEHAVIOUR':
      return 'What kind of player am I?';
    case 'SKILL':
      return 'What can my body do?';
    case 'KNOWLEDGE':
      return 'What do I understand?';
  }
};
