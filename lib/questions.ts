export const positionQuestions = [
  {
    id: "goalkeeper",
    label: "What is the job of the goalkeeper?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "centerBack",
    label: "What is the job of a center back?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "fullBack",
    label: "What is the job of a full back, left back, or right back?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "centerDefensiveMid",
    label: "What is the job of a center defensive mid?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "centerAttackingMid",
    label: "What is the job of a center attacking mid?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "centerMid",
    label: "What is the job of a center mid?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "leftWinger",
    label: "What is the job of a left winger?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "rightWinger",
    label: "What is the job of a right winger?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
  {
    id: "leftStriker",
    label: "What is the job of a left striker?",
    hint: "Explain their purpose, where they usually are, and what choices they make during a game.",
  },
] as const;

export const tacticsQuestions = [
  {
    id: "formation341",
    label: "In a 3 - 4 - 1 formation, what do the 3, the 4, and the 1 represent?",
    hint: "Explain what each number means and how the team shape looks to you.",
  },
  {
    id: "formation251",
    label: "In a 2 - 5 - 1 formation, what do the 2, the 5, and the 1 represent?",
    hint: "Explain what each number means and how the team shape looks to you.",
  },
  {
    id: "attackingThird",
    label: "What happens in the attacking third?",
    hint: "Describe what your team is trying to do there and what players should notice.",
  },
  {
    id: "middleThird",
    label: "What happens in the middle third?",
    hint: "Describe what your team is trying to do there and what players should notice.",
  },
  {
    id: "defensiveThird",
    label: "What happens in the defensive third?",
    hint: "Describe what your team is trying to do there and what players should notice.",
  },
  {
    id: "leftChannel",
    label: "What happens in the left channel?",
    hint: "Describe what that space is for, who might be there, and what decisions matter.",
  },
  {
    id: "centerChannel",
    label: "What happens in the center channel?",
    hint: "Describe what that space is for, who might be there, and what decisions matter.",
  },
  {
    id: "rightChannel",
    label: "What happens in the right channel?",
    hint: "Describe what that space is for, who might be there, and what decisions matter.",
  },
  {
    id: "centerBackLocations",
    label: "Where are center backs usually in the thirds and channels?",
    hint: "Name the third and channel areas you think they use most, and explain when that changes.",
  },
  {
    id: "wingerLocations",
    label: "Where are wingers usually in the thirds and channels?",
    hint: "Name the third and channel areas you think they use most, and explain when that changes.",
  },
  {
    id: "midfielderLocations",
    label: "Where are midfielders usually in the thirds and channels?",
    hint: "Name the third and channel areas you think they use most, and explain when that changes.",
  },
  {
    id: "attackerLocations",
    label: "Where are attackers usually in the thirds and channels?",
    hint: "Name the third and channel areas you think they use most, and explain when that changes.",
  },
] as const;

export type AnswerMap = Record<string, string>;
