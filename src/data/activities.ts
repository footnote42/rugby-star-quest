export interface DevelopmentActivity {
  competencyId: string;
  activities: string[];
}

export const DEVELOPMENT_ACTIVITIES: DevelopmentActivity[] = [
  {
    competencyId: 'b1',
    activities: [
      'Always look to pass before running',
      "Call your teammate's name when you pass",
      'Support the ball carrier every time',
      'Celebrate when teammates do well'
    ]
  },
  {
    competencyId: 'b2',
    activities: [
      'Set yourself a small challenge each game',
      'When you make a mistake, take a deep breath and try again',
      'Think of something positive after each play',
      'Remember: even the best players make mistakes!'
    ]
  },
  {
    competencyId: 'b3',
    activities: [
      'Try a new skill or trick each practice',
      'Play tag rugby with friends outside of training',
      'Watch fun rugby videos together with family',
      'Remember to smile - rugby is a game!'
    ]
  },
  {
    competencyId: 'b4',
    activities: [
      'Listen carefully when the coach is talking',
      'Ask questions if you don\'t understand something',
      'Help remind teammates of the rules',
      'Count to 5 before reacting if you feel frustrated'
    ]
  },
  {
    competencyId: 'b5',
    activities: [
      'Shake hands with opponents before and after games',
      'Say "well done" to opponents who play well',
      'Accept the referee\'s decisions without arguing',
      'Be kind to everyone on the pitch'
    ]
  },
  {
    competencyId: 's5',
    activities: [
      'Practice passing against a wall for 10 minutes',
      'Play catch with family members daily',
      'Focus on soft hands - cushion the ball as you catch',
      'Pass to both left and right sides'
    ]
  },
  {
    competencyId: 's6',
    activities: [
      'Practice on tackle bags - get low, head to side',
      'Work on your footwork - get your feet close',
      'Focus on wrapping your arms tight',
      'Always tackle below the waist'
    ]
  },
  {
    competencyId: 's7',
    activities: [
      'Go for a 15-minute jog twice a week',
      'Play active games with friends (tag, chase games)',
      'Do 3 sets of star jumps and burpees daily',
      'Practice running and changing direction quickly'
    ]
  },
  {
    competencyId: 'k6',
    activities: [
      'Stand shoulder-to-shoulder with teammates',
      'Move forward together as a line - no gaps',
      "Talk to teammates: 'I've got this player!'",
      'Watch where the ball is and stay organized'
    ]
  },
  {
    competencyId: 'k7',
    activities: [
      'Look for space on the field before you get the ball',
      'Spread out - don\'t bunch together',
      'Support the ball carrier from different angles',
      'Call for the ball when you\'re in space'
    ]
  },
  {
    competencyId: 'k2',
    activities: [
      'Remember: run forward, pass backward!',
      'Practice passing backwards while running forward',
      'Watch rugby on TV and notice the passing direction',
      'Play games that help you practice this skill'
    ]
  },
  {
    competencyId: 's1',
    activities: [
      'Set up cones and practice sidestepping',
      'Play dodging games with friends',
      'Practice changing direction quickly without slowing down',
      'Try different footwork patterns at training'
    ]
  }
];

export const getActivitiesForCompetency = (competencyId: string): string[] => {
  const activity = DEVELOPMENT_ACTIVITIES.find(a => a.competencyId === competencyId);
  return activity?.activities || [
    'Practice this skill during training',
    'Ask your coach for specific drills',
    'Watch videos of players who are good at this',
    'Keep working on it - you\'ll improve!'
  ];
};
