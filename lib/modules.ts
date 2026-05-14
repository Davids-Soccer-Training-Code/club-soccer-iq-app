export type LearningModule = {
  slug: string;
  title: string;
  summary: string;
  importance: "Start Here" | "Do Early" | "Keep Learning" | "Build Next";
  importanceTone: "high" | "medium" | "low";
  imageSrc: string;
  imagePrompt: string;
  sections?: {
    slug: string;
    title: string;
    summary: string;
    lessonSlugs: string[];
  }[];
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
    summary: "Work through field numbers, formation numbers, and how smaller-sided roles connect to 11v11.",
    importance: "Start Here",
    importanceTone: "high",
    imageSrc: "/module-images/formations-number-positions.png",
    imagePrompt:
      "Youth soccer tactical board from above, clean green pitch, numbered player markers arranged in a formation, bright daylight, modern sports education style, no text, no logos, 16:9",
    lessons: [
      {
        slug: "the-11-field-numbers",
        title: "The 11 Field Numbers",
        summary: "A simple overview of the soccer number system from 1 through 11.",
        body: "Field numbers give players and coaches a shared language. The numbers do not have to match the jersey number. They describe the job on the field.\n\nThe common numbers are 1 goalkeeper, 2 right back, 3 left back, 4 center back or holding midfielder, 5 center back, 6 defensive midfielder, 7 right winger, 8 central midfielder, 9 striker, 10 attacking midfielder, and 11 left winger.",
      },
      {
        slug: "defensive-numbers",
        title: "Defensive Numbers",
        summary: "The numbers that usually protect the goal and build attacks from the back.",
        body: "Defensive numbers usually include the 1, 2, 3, 4, and 5. These players protect space near goal, help the team stay organized, and start attacks with smart passes.\n\nThe 1 is the goalkeeper. The 2 and 3 are outside backs. The 4 and 5 are usually central defenders, though some teams use the 4 as a holding midfielder.",
      },
      {
        slug: "midfield-numbers",
        title: "Midfield Numbers",
        summary: "The numbers that connect defending, possession, and attacking.",
        body: "Midfield numbers are usually 6, 8, and 10. These players connect defending, possession, and attacking because they are often near the ball in both phases of the game.\n\nThe 6 helps protect the back line and organize possession. The 8 runs box to box and supports both sides of the ball. The 10 looks for chances to create, combine, and play forward.",
      },
      {
        slug: "attacking-numbers",
        title: "Attacking Numbers",
        summary: "The numbers that usually create chances and finish attacks.",
        body: "Attacking numbers usually include 7, 9, 10, and 11. These players help the team create danger in wide spaces, central spaces, and near goal.\n\nThe 7 and 11 are wide attackers. The 9 is the striker. The 10 often plays underneath the striker and helps connect midfield to the attack.",
      },
      {
        slug: "how-to-remember-the-numbers",
        title: "How to Remember the Numbers",
        summary: "A simple way to remember numbers by line and role.",
        body: "A useful memory trick is to group numbers by lines. The 1 is in goal. The 2, 3, 4, and 5 are usually defensive players. The 6, 8, and 10 are midfield players. The 7, 9, and 11 are attacking players.\n\nPlayers do not need to memorize everything at once. Start by remembering your number, the numbers next to you, and the numbers directly in front of or behind you.",
      },
      {
        slug: "what-formation-numbers-mean",
        title: "What Formation Numbers Mean",
        summary: "How a formation like 4-3-3 or 4-4-2 describes team lines.",
        body: "Formation numbers describe how many field players are in each line. A 4-3-3 has four defenders, three midfielders, and three attackers. The goalkeeper is not included because every team has one goalkeeper.\n\nThe numbers are a starting shape, not a rule that players freeze in place. Players still move, rotate, and adjust as the ball moves.",
      },
      {
        slug: "how-11v11-shapes-work",
        title: "How 11v11 Shapes Work",
        summary: "How defenders, midfielders, and attackers connect in a full-sided game.",
        body: "In 11v11, the field is bigger and the team has more lines to connect. The back line protects goal and starts attacks. The midfield line connects the game. The attacking line stretches the opponent and creates chances.\n\nA good shape keeps useful spacing between teammates. Players should be close enough to help, but spread enough to make the field big when attacking.",
      },
      {
        slug: "how-numbers-change-by-formation",
        title: "How Numbers Change by Formation",
        summary: "Why the same number can look different in different systems.",
        body: "A player number keeps the same basic idea, but the location can change by formation. A 7 may start high and wide in a 4-3-3, but may defend deeper in a 4-4-2.\n\nThe important question is not just where the number starts. Players should ask what the job is when the team attacks, defends, and transitions.",
      },
      {
        slug: "how-to-read-11v11-formations",
        title: "How to Read 11v11 Formations",
        summary: "A player-friendly way to understand an 11v11 shape before the game starts.",
        body: "To read an 11v11 formation, start from the back and move forward. Count the defenders, then midfielders, then attackers. After that, look for the wide players, central players, and the player who connects lines.\n\nPlayers should also notice whether the team has one striker or two, one holding midfielder or two, and how much width comes from outside backs or wingers.",
      },
      {
        slug: "what-7v7-formations-mean",
        title: "What 7v7 Formations Mean",
        summary: "How smaller-sided shapes teach basic team structure.",
        body: "A 7v7 formation describes six field players plus a goalkeeper. Common shapes might use two defenders, three midfielders, and one forward, or three defenders, two midfielders, and one forward.\n\nThe purpose is to help players understand width, depth, support, and basic roles without the full complexity of 11v11.",
      },
      {
        slug: "common-7v7-shapes",
        title: "Common 7v7 Shapes",
        summary: "Examples of simple 7v7 team shapes and what they teach.",
        body: "Common 7v7 shapes include 2-3-1 and 3-2-1. A 2-3-1 can help players learn width in midfield. A 3-2-1 can help players feel more secure when building from the back.\n\nNo shape is perfect. The best shape is the one that helps players understand their jobs and support each other.",
      },
      {
        slug: "how-7v7-numbers-connect-to-9v9",
        title: "How 7v7 Numbers Connect to 9v9",
        summary: "How player roles grow when two more players are added.",
        body: "When moving from 7v7 to 9v9, players usually see more defined lines. The team may add another defender, another midfielder, or another attacker depending on the shape.\n\nThe ideas stay connected: defenders still protect and build, midfielders still connect, and attackers still stretch the field and create chances.",
      },
      {
        slug: "what-changes-when-moving-to-9v9",
        title: "What Changes When Moving to 9v9",
        summary: "The bigger field, more teammates, and new decisions players must handle.",
        body: "In 9v9, the field is bigger and players have more teammates to connect with. There is usually more space between lines, so scanning and communication become more important.\n\nPlayers need to learn when to stay wide, when to come inside, when to support behind the ball, and when to make a forward run.",
      },
      {
        slug: "what-9v9-formations-mean",
        title: "What 9v9 Formations Mean",
        summary: "How 9v9 shapes prepare players for full-sided soccer.",
        body: "A 9v9 formation describes eight field players plus a goalkeeper. It usually starts to look more like full soccer because the team can have a clearer back line, midfield line, and attacking line.\n\nPlayers should use 9v9 to learn the habits that will matter in 11v11: spacing, scanning, covering, supporting, and changing shape with the ball.",
      },
      {
        slug: "common-9v9-shapes",
        title: "Common 9v9 Shapes",
        summary: "Examples of 9v9 shapes and the roles they emphasize.",
        body: "Common 9v9 shapes include 3-3-2, 3-2-3, and 4-3-1. A 3-3-2 can give balance through the field. A 3-2-3 can create attacking width. A 4-3-1 can help a team defend with more numbers behind the ball.\n\nPlayers should learn what their shape gives the team and what it asks each player to do.",
      },
      {
        slug: "how-9v9-numbers-connect-to-11v11",
        title: "How 9v9 Numbers Connect to 11v11",
        summary: "How the 9v9 roles become 11v11 numbers and responsibilities.",
        body: "Many 9v9 roles connect directly to 11v11 numbers. Outside defenders connect to the 2 and 3. Central defenders connect to the 4 and 5. Central midfielders connect to the 6, 8, or 10. Wide attackers connect to the 7 and 11.\n\nThe player count changes, but the language stays useful because it helps players understand where they fit in the team.",
      },
      {
        slug: "what-changes-when-moving-to-11v11",
        title: "What Changes When Moving to 11v11",
        summary: "What players need to handle when the game becomes full-sided.",
        body: "In 11v11, the field is bigger, the distances are longer, and there are more decisions before each pass, run, or defensive movement. Players must scan earlier and understand the space around them.\n\nThe biggest change is detail. Players still attack, defend, and transition, but each role becomes more specific.",
      },
      {
        slug: "our-attacking-shape-connected-to-11v11",
        title: "Our Attacking Shape Connected to 11v11",
        summary: "How our team shape helps players understand attacking roles in the full game.",
        body: "Our attacking shape should help players see how their current role connects to 11v11. When we have the ball, we want useful width, depth, support behind the ball, and players who can receive between lines.\n\nPlayers should understand which 11v11 number their attacking job connects to, even if the current field size is smaller.",
      },
      {
        slug: "our-defending-shape-connected-to-11v11",
        title: "Our Defending Shape Connected to 11v11",
        summary: "How our defensive jobs connect to bigger team defending.",
        body: "Our defending shape should teach pressure, cover, balance, and compactness. The closest player presses, nearby players cover, and the rest of the team protects dangerous spaces.\n\nThese habits connect directly to 11v11 because players must defend together, not as separate individuals.",
      },
      {
        slug: "how-we-change-shape-in-the-game",
        title: "How We Change Shape in the Game",
        summary: "Why our team shape looks different when attacking, defending, and transitioning.",
        body: "A team does not stay in one picture for the whole game. The shape changes when we win the ball, lose the ball, build from the back, defend deep, or attack near goal.\n\nPlayers should learn the starting shape, but they also need to learn the moments that tell them when to move, support, cover, or stretch the field.",
      },
      {
        slug: "how-our-players-learn-11v11-roles",
        title: "How Our Players Learn 11v11 Roles",
        summary: "How smaller-sided roles prepare players for the full game over time.",
        body: "Players learn 11v11 roles step by step. First they learn their own job. Then they learn the jobs near them. Over time, they learn how the whole team connects.\n\nThe goal is not to memorize every formation. The goal is to understand the game well enough to make smart decisions in any shape.",
      },
    ],
    sections: [
      {
        slug: "field-numbers",
        title: "Module 1: Field Numbers",
        summary: "The 11 field numbers, defensive numbers, midfield numbers, attacking numbers, and memory tips.",
        lessonSlugs: [
          "the-11-field-numbers",
          "defensive-numbers",
          "midfield-numbers",
          "attacking-numbers",
          "how-to-remember-the-numbers",
        ],
      },
      {
        slug: "11v11-formation-numbers",
        title: "Module 2: 11v11 Formation Numbers",
        summary: "What formation numbers mean and how 11v11 shapes work.",
        lessonSlugs: [
          "what-formation-numbers-mean",
          "how-11v11-shapes-work",
          "how-numbers-change-by-formation",
          "how-to-read-11v11-formations",
        ],
      },
      {
        slug: "7v7-to-9v9",
        title: "Module 3: 7v7 to 9v9",
        summary: "What 7v7 means, common 7v7 shapes, and how 7v7 connects to 9v9.",
        lessonSlugs: [
          "what-7v7-formations-mean",
          "common-7v7-shapes",
          "how-7v7-numbers-connect-to-9v9",
          "what-changes-when-moving-to-9v9",
        ],
      },
      {
        slug: "9v9-to-11v11",
        title: "Module 4: 9v9 to 11v11",
        summary: "What 9v9 means, common 9v9 shapes, and how 9v9 connects to 11v11.",
        lessonSlugs: [
          "what-9v9-formations-mean",
          "common-9v9-shapes",
          "how-9v9-numbers-connect-to-11v11",
          "what-changes-when-moving-to-11v11",
        ],
      },
      {
        slug: "our-team-shape-connected-to-11v11",
        title: "Module 5: Our Team Shape from 7v7 to 9v9 to 11v11",
        summary: "Our attacking shape, defending shape, shape changes, and how players learn roles.",
        lessonSlugs: [
          "our-attacking-shape-connected-to-11v11",
          "our-defending-shape-connected-to-11v11",
          "how-we-change-shape-in-the-game",
          "how-our-players-learn-11v11-roles",
        ],
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

export function getModuleSectionLessons(learningModule: LearningModule) {
  if (!learningModule.sections) {
    return [];
  }

  return learningModule.sections.map((section) => ({
    ...section,
    lessons: section.lessonSlugs
      .map((lessonSlug) => learningModule.lessons.find((lesson) => lesson.slug === lessonSlug))
      .filter((lesson): lesson is LearningModule["lessons"][number] => Boolean(lesson)),
  }));
}

export function getLessonSection(learningModule: LearningModule, lessonSlug: string) {
  return learningModule.sections?.find((section) => section.lessonSlugs.includes(lessonSlug));
}

export function isModuleSectionUnlocked(
  learningModule: LearningModule,
  sectionSlug: string,
  completedLessonSlugs: Set<string>,
) {
  const sections = learningModule.sections;

  if (!sections) {
    return true;
  }

  const sectionIndex = sections.findIndex((section) => section.slug === sectionSlug);

  if (sectionIndex <= 0) {
    return sectionIndex === 0;
  }

  return sections
    .slice(0, sectionIndex)
    .every((section) => section.lessonSlugs.every((lessonSlug) => completedLessonSlugs.has(lessonSlug)));
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
