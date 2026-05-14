export type LearningModule = {
  slug: string;
  title: string;
  summary: string;
  importance: "Start Here" | "Do Early" | "Keep Learning" | "Build Next";
  importanceTone: "high" | "medium" | "low";
  imageSrc: string;
  imagePrompt: string;
  lessons: {
    slug: string;
    title: string;
    summary: string;
    body: string;
  }[];
};

export const learningModules: LearningModule[] = [
  {
    slug: "formations-and-number-positions",
    title: "Formations and Number Positions",
    summary: "Learn how formations are written and how number positions describe roles.",
    importance: "Start Here",
    importanceTone: "high",
    imageSrc: "/module-images/formations-number-positions.png",
    imagePrompt:
      "Youth soccer tactical board from above, clean green pitch, numbered player markers arranged in a formation, bright daylight, modern sports education style, no text, no logos, 16:9",
    lessons: [
      {
        slug: "7v7-to-9v9",
        title: "Transition from 7v7 Formations to 9v9",
        summary: "How the field, player count, and team shape change when players move up.",
        body: "Content coming soon. This lesson will explain what changes when players move from 7v7 to 9v9 and what ideas stay the same.",
      },
      {
        slug: "formation-examples",
        title: "What Some Formations Look Like",
        summary: "Examples of common 9v9 shapes and how they appear on the field.",
        body: "Content coming soon. This lesson will show examples of different formations and what the shape looks like from a tactical board view.",
      },
      {
        slug: "players-in-formations",
        title: "What Each Player Is in Each Formation",
        summary: "How roles fit into a formation and why names can change by system.",
        body: "Content coming soon. This lesson will connect player roles to their spots inside each formation.",
      },
      {
        slug: "our-formation",
        title: "What Formation We Will Use and Why",
        summary: "The team shape we will focus on and the reason behind it.",
        body: "Content coming soon. This lesson will explain the formation this team will use and why it helps players learn the game.",
      },
      {
        slug: "field-numbers",
        title: "What the Numbers on the Field Mean",
        summary: "How player numbers help coaches and teammates talk about roles.",
        body: "Content coming soon. This lesson will explain soccer position numbers and how players can use them to understand jobs on the field.",
      },
    ],
  },
  {
    slug: "field-thirds-channels",
    title: "Splitting the Field and Where You Should Be",
    summary: "Use thirds and channels to understand field location and player spacing.",
    importance: "Keep Learning",
    importanceTone: "medium",
    imageSrc: "/module-images/field-thirds-channels.png",
    imagePrompt:
      "Top-down soccer field divided into thirds and vertical channels with subtle colored overlays, youth training board style, clear field markings, no text, no logos, 16:9",
    lessons: [
      {
        slug: "thirds",
        title: "Thirds",
        summary: "Defensive, middle, and attacking thirds from a player point of view.",
        body: "Thirds split the field from your goal to the opponent goal. Players should understand what part of the field they are in before choosing what to do next.",
      },
      {
        slug: "channels",
        title: "Channels",
        summary: "Left, center, and right channels and how they affect spacing.",
        body: "Channels split the field from left to right. They help players talk about width, central space, and where support should come from.",
      },
      {
        slug: "where-to-be",
        title: "Your Position",
        summary: "How to decide where you should be as the ball moves.",
        body: "Where you stand depends on the ball, your teammates, the opponent, and your role. Good players keep checking these things as the game changes.",
      },
    ],
  },
  {
    slug: "rules-of-the-game",
    title: "Rules of the Game",
    summary: "Build a simple understanding of the rules players need during games.",
    importance: "Do Early",
    importanceTone: "high",
    imageSrc: "/module-images/rules-of-the-game.png",
    imagePrompt:
      "Youth soccer referee scene on a clean field, ball near touchline, players learning restart rules, friendly educational sports illustration, no text, no logos, 16:9",
    lessons: [
      {
        slug: "restarts",
        title: "Restart Rules",
        summary: "Throw-ins, corners, goal kicks, free kicks, and kickoffs.",
        body: "Players should know what causes throw-ins, goal kicks, corner kicks, free kicks, and kickoffs.",
      },
      {
        slug: "fouls-contact",
        title: "Fouls and Contact",
        summary: "How to challenge fairly and avoid bad fouls.",
        body: "Understanding fair challenges helps players defend with control and avoid giving away easy restarts.",
      },
      {
        slug: "offside",
        title: "Offside Basics",
        summary: "Timing runs and understanding the defensive line.",
        body: "Offside is about timing, position, and involvement in play. Players should learn to check the line before running behind defenders.",
      },
    ],
  },
  {
    slug: "team-tactical-principles",
    title: "Team Player Tactical Principles",
    summary: "Learn basic team ideas for attacking, defending, support, and decision-making.",
    importance: "Build Next",
    importanceTone: "low",
    imageSrc: "/module-images/team-tactical-principles.png",
    imagePrompt:
      "Youth soccer team moving together in organized shape during training, coach-style tactical feel, visible spacing and support angles, bright realistic sports image, no text, no logos, 16:9",
    lessons: [
      {
        slug: "with-the-ball",
        title: "With the Ball",
        summary: "Spacing and support when your team has possession.",
        body: "A team with the ball needs useful spacing, passing options, and players who can recognize when to keep the ball or go forward.",
      },
      {
        slug: "without-the-ball",
        title: "Without the Ball",
        summary: "Pressure, cover, and team shape when defending.",
        body: "A team without the ball needs pressure, cover, balance, and communication so opponents do not get easy chances.",
      },
      {
        slug: "transitions",
        title: "Transition Moments",
        summary: "What to do right after the ball changes teams.",
        body: "The moment the ball changes teams is important. Players should react quickly and understand the next job.",
      },
    ],
  },
];

export function getLearningModule(slug: string) {
  return learningModules.find((learningModule) => learningModule.slug === slug);
}

export function getModuleLesson(moduleSlug: string, lessonSlug: string) {
  return getLearningModule(moduleSlug)?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function moduleCompletionPercent(learningModule: LearningModule, completedLessonSlugs: Set<string>) {
  if (learningModule.lessons.length === 0) {
    return 0;
  }

  const completedCount = learningModule.lessons.filter((lesson) =>
    completedLessonSlugs.has(lesson.slug),
  ).length;
  return Math.round((completedCount / learningModule.lessons.length) * 100);
}
