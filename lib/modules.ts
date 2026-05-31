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
    imageSrc?: string;
    imageAspectRatio?: string;
    imageAfterParagraph?: number;
    callouts?: {
      title: string;
      body: string;
    }[];
    bullets?: {
      title: string;
      items: string[];
    }[];
    table?: {
      columns: string[];
      rows: string[][];
    };
    coachSays?: string;
    funFact?: { title: string; body: string };
    positionContent?: {
      prompt: string;
      positions: {
        id: string;
        label: string;
        number: number;
        body: string;
        bullets?: string[];
      }[];
    };
    comparison?: {
      left: { label: string; items: string[] };
      right: { label: string; items: string[] };
    };
    practice?:
      | "field-number-placement"
      | { type: "tap-the-zone"; prompt: string; zones: "thirds" | "channels"; answer: string }
      | { type: "what-would-you-do"; scenario: string; choices: { label: string; response: string }[] }
      | { type: "true-false"; statement: string; answer: boolean; explanation: string };
  }[];
};

export const learningModules: LearningModule[] = [
  {
    slug: "formations-and-number-positions",
    title: "Formations and Numbers",
    summary: "Learn the field numbers, the 4-3-3 shape, and how 11v11 roles connect to 9v9 and 7v7.",
    importance: "Start Here",
    importanceTone: "high",
    imageSrc: "/module-images/433-full-shape.png",
    imagePrompt:
      "Youth soccer tactical board from above, clean green pitch, numbered player markers arranged in a formation, bright daylight, modern sports education style, no text, no logos, 16:9",
    lessons: [
      {
        slug: "the-11-field-numbers",
        title: "The 11 Field Numbers",
        summary: "An intro to field numbers using a simple 4-3-3 shape.",
        imageSrc: "/module-images/433-full-shape.png",
        imageAspectRatio: "1166 / 1126",
        imageAfterParagraph: 4,
        body: "Intro to Field Numbers\n\nField numbers are a shortcut coaches use to talk about positions. The number is not always your jersey number. It is the number for a job on the field.\n\nWhy We Start With 11v11\n\nEven if you are not playing 11v11 yet, we start there because it gives us the full picture. When we play 9v9 or 7v7, we are mostly taking some numbers away from the 11v11 picture. If you know the big map first, the smaller maps make more sense.\n\nDo Not Worry If It Feels New\n\nThis can take time. You do not have to memorize every number today. The best place to start is your favorite position. Learn the number or numbers for that position first. Then learn the numbers next to you.\n\nOur Example: The 4-3-3\n\nWe are using the famous 4-3-3 formation. That means 4 defenders, 3 midfielders, and 3 attackers.\n\nIn our example, the defenders are 2, 3, 4, and 5. The center midfielders are 6, 8, and 10. The attackers are 7, 9, and 11.\n\nQuick History Fun Fact\n\nNo single person gets credit for creating the 4-3-3. It grew from older formations like the 4-2-4. Uruguay used early versions in the 1950s, Brazil used a 4-3-3 at the 1962 World Cup, and Ajax in the Netherlands later made it very famous with Total Football.",
        callouts: [
          {
            title: "Big idea",
            body: "Numbers help everyone know the job, not just the jersey.",
          },
          {
            title: "Start here",
            body: "Learn your favorite position first, then learn the numbers around you.",
          },
        ],
        bullets: [
          {
            title: "What to remember first",
            items: [
              "Your favorite position and its number.",
              "The numbers next to your position.",
              "Whether your number is mostly defensive, midfield, or attacking.",
            ],
          },
          {
            title: "Example: start with your favorite position",
            items: [
              "If your favorite position is center mid, start with 6, 8, and 10. Those are the main midfield numbers.",
              "If your favorite position is left wing, start with 11. Then learn 3 behind you and 9 in the middle.",
              "If your favorite position is striker, start with 9. Then learn 7, 10, and 11 because those players help you attack.",
            ],
          },
          {
            title: "How to read 4-3-3",
            items: [
              "4 defenders are closest to our goal.",
              "3 midfielders connect the team.",
              "3 attackers try to create chances and score.",
            ],
          },
        ],
        table: {
          columns: ["Number", "Position", "Main job"],
          rows: [
            ["1", "Goalkeeper", "Protect the goal and help start attacks."],
            ["2", "Right Back", "Defend the right side and support attacks wide."],
            ["3", "Left Back", "Defend the left side and support attacks wide."],
            ["4", "Center Back", "Defend central space and organize the back line."],
            ["5", "Center Back", "Win balls, cover teammates, and protect the goal."],
            ["6", "Defensive Midfielder", "Connect the back line to midfield and protect the middle."],
            ["7", "Right Winger", "Attack wide on the right and create chances."],
            ["8", "Center Midfielder", "Help attack and defend in the middle."],
            ["9", "Striker", "Stay dangerous near goal and try to score."],
            ["10", "Attacking Midfielder", "Create chances and connect midfield to attack."],
            ["11", "Left Winger", "Attack wide on the left and create chances."],
          ],
        },
      },
      {
        slug: "defensive-numbers",
        title: "Defensive Numbers",
        summary: "The numbers that usually protect the goal and build attacks from the back.",
        imageSrc: "/module-images/433-defensive-shape.png",
        imageAspectRatio: "1138 / 510",
        imageAfterParagraph: 4,
        body: "Defensive Numbers 1-5\n\nDefensive numbers are the players closest to our goal. Their first job is to protect the goal. Their second job is to help the team start the attack.\n\nThe Counting Rule\n\nWhen we count defenders, we usually count the fullbacks first, then the center backs. Fullbacks are the wide defenders. Center backs are the middle defenders.\n\nBigger Number Goes Left\n\nA simple rule is that the bigger number is usually on the left side. The left back is 3 because 3 is bigger than 2. The left center back is 5 because 5 is bigger than 4.\n\nNumber 1: Goalkeeper\n\nThe 1 is the goalkeeper. The goalkeeper protects the goal, talks to defenders, and can start attacks with throws, rolls, or passes.\n\nNumbers 2 and 3: Fullbacks\n\nThe 2 is the right back. The 3 is the left back. These players defend wide spaces and help the team when we attack on the outside.\n\nNumbers 4 and 5: Center Backs\n\nThe 4 and 5 are center backs. They defend the middle, win balls, cover teammates, and help keep the team organized.",
        callouts: [
          {
            title: "Big idea",
            body: "The defensive numbers are 1, 2, 3, 4, and 5.",
          },
          {
            title: "Counting rule",
            body: "Count the fullbacks first, then the center backs.",
          },
        ],
        bullets: [
          {
            title: "Remember the left-side rule",
            items: [
              "3 is bigger than 2, so 3 is the left back.",
              "5 is bigger than 4, so 5 is the left center back.",
              "When you get confused, find the wide defenders first.",
            ],
          },
          {
            title: "Quick defender jobs",
            items: [
              "Goalkeeper: protect the goal.",
              "Fullbacks: protect wide spaces.",
              "Center backs: protect the middle.",
            ],
          },
        ],
        table: {
          columns: ["Number", "Spot", "Main job"],
          rows: [
            ["1", "Goalkeeper", "Protect the goal and organize the defenders."],
            ["2", "Right Back", "Defend the right side and help wide attacks."],
            ["3", "Left Back", "Defend the left side and help wide attacks."],
            ["4", "Right Center Back", "Protect the middle and cover teammates."],
            ["5", "Left Center Back", "Protect the middle and win dangerous balls."],
          ],
        },
      },
      {
        slug: "midfield-numbers",
        title: "Midfield Numbers",
        summary: "The numbers that connect defending, possession, and attacking.",
        imageSrc: "/module-images/433-midfield-shape.png",
        imageAspectRatio: "1240 / 676",
        imageAfterParagraph: 4,
        body: "Midfield Numbers 6, 8, and 10\n\nMidfielders are the players who connect the whole team. They help defenders, support attackers, and are usually near the ball a lot.\n\nThe Midfield Triangle\n\nIn our 4-3-3, the midfield is a triangle. The 6 is the deepest midfielder. The 8 is a center midfielder. The 10 is the attacking midfielder.\n\nWhy Midfield Is Important\n\nMidfielders help the team keep the ball, win the ball back, and find passes forward. If the midfield works together, the whole team feels connected.\n\nNumber 6: Defensive Midfielder\n\nThe 6 plays closest to the defenders. The 6 protects the middle, helps win the ball back, and gives teammates a safe pass.\n\nNumber 8: Center Midfielder\n\nThe 8 helps on both sides of the game. The 8 can defend, pass, run forward, and support teammates.\n\nNumber 10: Attacking Midfielder\n\nThe 10 plays higher up the field. The 10 looks for chances to pass, dribble, combine, and help create goals.",
        callouts: [
          {
            title: "Big idea",
            body: "The midfield numbers are 6, 8, and 10.",
          },
          {
            title: "Main job",
            body: "Midfielders connect the defenders to the attackers.",
          },
        ],
        bullets: [
          {
            title: "Remember the midfield jobs",
            items: [
              "6 protects the middle.",
              "8 helps everywhere.",
              "10 creates chances.",
            ],
          },
          {
            title: "If you like center mid",
            items: [
              "Start by learning 6, 8, and 10.",
              "Ask if you are playing deeper, balanced, or higher.",
              "Look around before the ball comes to you.",
            ],
          },
        ],
        table: {
          columns: ["Number", "Spot", "Main job"],
          rows: [
            ["6", "Defensive Midfielder", "Protect the middle and connect passes."],
            ["8", "Center Midfielder", "Help defend, pass, and support attacks."],
            ["10", "Attacking Midfielder", "Create chances and connect to the striker."],
          ],
        },
      },
      {
        slug: "attacking-numbers",
        title: "Attacking Numbers",
        summary: "The numbers that usually create chances and finish attacks.",
        imageSrc: "/module-images/433-attacking-shape.png",
        imageAspectRatio: "1834 / 976",
        imageAfterParagraph: 4,
        body: "Attacking Numbers 7, 9, and 11\n\nThe attacking numbers are the players closest to the other team's goal. Their job is to create chances, make dangerous runs, and score goals.\n\nThe Front Three\n\nIn our 4-3-3, the front three are 7, 9, and 11. The 7 is the right winger. The 9 is the striker. The 11 is the left winger.\n\nHow They Work Together\n\nThe wingers stretch the field wide. The striker stays dangerous in the middle. When they move together, defenders have a harder time stopping them.\n\nNumber 7: Right Winger\n\nThe 7 attacks from the right side. The 7 can dribble, cross, pass inside, or run behind defenders.\n\nNumber 9: Striker\n\nThe 9 is the main forward in the middle. The 9 tries to score, hold the ball, and make runs near goal.\n\nNumber 11: Left Winger\n\nThe 11 attacks from the left side. The 11 can dribble, cross, combine with the left back, or cut inside to shoot.",
        callouts: [
          {
            title: "Big idea",
            body: "The attacking numbers are 7, 9, and 11.",
          },
          {
            title: "Front three",
            body: "7 is right, 9 is middle, and 11 is left.",
          },
        ],
        bullets: [
          {
            title: "Remember the attacking shape",
            items: [
              "7 starts wide on the right.",
              "9 stays dangerous in the middle.",
              "11 starts wide on the left.",
            ],
          },
          {
            title: "If you like attacking",
            items: [
              "If you like striker, start with 9.",
              "If you like right wing, start with 7.",
              "If you like left wing, start with 11.",
            ],
          },
        ],
        table: {
          columns: ["Number", "Spot", "Main job"],
          rows: [
            ["7", "Right Winger", "Attack wide, create chances, and cross or shoot."],
            ["9", "Striker", "Score goals and stay dangerous in the middle."],
            ["11", "Left Winger", "Attack wide, combine, cross, or cut inside."],
          ],
        },
      },
      {
        slug: "how-to-remember-the-numbers",
        title: "How to Remember the Numbers",
        summary: "Review the full field-number picture, then practice placing each number.",
        imageSrc: "/module-images/433-full-shape.png",
        imageAspectRatio: "1166 / 1126",
        imageAfterParagraph: 4,
        body: "Review: Use the Big Picture\n\nThis is the review for Module 1. Look at the full 4-3-3 picture again and try to see the team in three lines: defenders, midfielders, and attackers.\n\nDo Not Memorize Everything at Once\n\nStart with one small piece. Learn your favorite position first. Then learn the numbers next to you. Then learn the line in front of you or behind you.\n\nThe Three Number Groups\n\nThe defensive group is 1, 2, 3, 4, and 5. The midfield group is 6, 8, and 10. The attacking group is 7, 9, and 11.\n\nUse the Picture, Then Cover It\n\nFirst, use the picture to study. Say the numbers out loud. After that, try the game without copying the picture. The goal is to remember where the numbers live on the field.\n\nQuick Review Rule\n\nBigger numbers are usually on the left side for matching pairs. 3 is left back and 2 is right back. 5 is left center back and 4 is right center back. In attack, 11 is left wing and 7 is right wing.",
        callouts: [
          {
            title: "Review goal",
            body: "Know the number groups and where they usually start in a 4-3-3.",
          },
          {
            title: "Best trick",
            body: "Pick your favorite position first, then build the map around it.",
          },
        ],
        bullets: [
          {
            title: "Say it like this",
            items: [
              "1 is the goalkeeper.",
              "2, 3, 4, and 5 are defenders.",
              "6, 8, and 10 are midfielders.",
              "7, 9, and 11 are attackers.",
            ],
          },
          {
            title: "How to practice",
            items: [
              "Look at the full picture for 20 seconds.",
              "Cover the picture or look away.",
              "Try to name the numbers from back to front.",
              "Use the game below to check what you remember.",
            ],
          },
        ],
        table: {
          columns: ["Group", "Numbers", "What to remember"],
          rows: [
            ["Goalkeeper", "1", "The 1 starts in goal."],
            ["Defenders", "2, 3, 4, 5", "Fullbacks wide, center backs in the middle."],
            ["Midfielders", "6, 8, 10", "6 deeper, 8 center, 10 higher."],
            ["Attackers", "7, 9, 11", "7 right, 9 middle, 11 left."],
          ],
        },
        practice: "field-number-placement",
      },
      {
        slug: "what-formation-numbers-mean",
        title: "What Formation Numbers Mean",
        summary: "How a formation like 4-3-3 or 4-4-2 describes team lines.",
        imageSrc: "/module-images/formations-number-positions.png",
        imageAspectRatio: "1166 / 1126",
        imageAfterParagraph: 4,
        body: "Formation Numbers Are Team Lines\n\nFormation numbers tell us how many field players start in each line. A 4-3-3 means 4 defenders, 3 midfielders, and 3 attackers.\n\nWhy The Goalkeeper Is Missing\n\nThe goalkeeper is not counted in the formation number because every team already has one goalkeeper. So a 4-3-3 is really 1 goalkeeper plus 10 field players.\n\nRead From Back To Front\n\nAlways read formation numbers from your goal toward the other team's goal. The first number is defenders. The next number or numbers are midfielders. The last number is attackers.\n\nStarting Shape, Not A Statue\n\nA formation is where players usually start. It is not a rule that players freeze in one spot. Players still move to support, defend, attack, and cover space.\n\nExample: 4-3-3\n\nIn a 4-3-3, the team starts with four defenders, three midfielders, and three attackers. The defenders protect the goal, the midfielders connect the game, and the attackers create chances.",
        callouts: [
          {
            title: "Big idea",
            body: "Formation numbers count field-player lines from back to front.",
          },
          {
            title: "Remember",
            body: "The goalkeeper is not listed because every team has one.",
          },
        ],
        bullets: [
          {
            title: "How to say it",
            items: [
              "4-3-3 means four defenders, three midfielders, and three attackers.",
              "4-4-2 means four defenders, four midfielders, and two attackers.",
              "3-5-2 means three defenders, five midfielders, and two attackers.",
            ],
          },
          {
            title: "Do not forget",
            items: [
              "Read the numbers from your goal forward.",
              "The formation is a starting map.",
              "Players still move when the ball moves.",
            ],
          },
        ],
        table: {
          columns: ["Formation", "How to read it", "Simple picture"],
          rows: [
            ["4-3-3", "4 defenders, 3 midfielders, 3 attackers", "Balanced with three players high."],
            ["4-4-2", "4 defenders, 4 midfielders, 2 attackers", "Two lines of four with two forwards."],
            ["3-5-2", "3 defenders, 5 midfielders, 2 attackers", "More players across midfield."],
          ],
        },
      },
      {
        slug: "how-11v11-shapes-work",
        title: "How 11v11 Shapes Work",
        summary: "How defenders, midfielders, and attackers connect in a full-sided game.",
        imageSrc: "/module-images/433-full-shape.png",
        imageAspectRatio: "1166 / 1126",
        imageAfterParagraph: 4,
        body: "11v11 Has More Space\n\nIn 11v11, the field is bigger and there are more teammates to connect. That means players need better spacing, earlier scanning, and clearer communication.\n\nThe Back Line\n\nThe back line protects the goal first. It also helps start attacks by passing to midfielders, outside backs, or forwards checking back.\n\nThe Midfield Line\n\nThe midfield line connects the whole team. Midfielders help defenders when the team is under pressure and help attackers when the team goes forward.\n\nThe Attacking Line\n\nThe attacking line stretches the opponent. Wide attackers can make the field big, and central attackers can stay dangerous near goal.\n\nGood Shape Helps Everyone\n\nA good 11v11 shape gives the player on the ball passing choices. It also helps the team defend quickly if the ball is lost.",
        callouts: [
          {
            title: "Big idea",
            body: "11v11 shape helps teammates stay connected across a bigger field.",
          },
          {
            title: "Main job",
            body: "Each line has a job, but the lines must work together.",
          },
        ],
        bullets: [
          {
            title: "The three main lines",
            items: [
              "Defenders protect the goal and help start attacks.",
              "Midfielders connect defending to attacking.",
              "Attackers stretch the field and create chances.",
            ],
          },
          {
            title: "Good spacing means",
            items: [
              "Close enough to help your teammate.",
              "Spread enough to make the field big.",
              "Ready to react if the ball changes teams.",
            ],
          },
        ],
        table: {
          columns: ["Line", "Main job", "What players should notice"],
          rows: [
            ["Back line", "Protect goal and build attacks.", "Where the ball, goal, and nearest attacker are."],
            ["Midfield line", "Connect the team.", "Where pressure is coming from and where the next pass is."],
            ["Attacking line", "Create chances and score.", "Where space is behind or between defenders."],
          ],
        },
      },
      {
        slug: "how-numbers-change-by-formation",
        title: "How Numbers Change by Formation",
        summary: "Why the same number can look different in different systems.",
        body: "Numbers Have Jobs\n\nA field number usually keeps the same basic idea. But the exact starting spot can change when the formation changes.\n\nThe Five Shapes In This Lesson\n\nWe will compare 4-3-3, 4-4-2, 4-2-3-1, 3-5-2, and 5-4-1. These are common 11v11 shapes, and they move the same numbers into different jobs.\n\nThe Job Still Matters Most\n\nDo not only ask, Where do I stand? Ask, What is my job when we attack? What is my job when we defend? What do I do when the ball changes teams?\n\nBack-Line Changes\n\nIn a back four, the 2 and 3 are usually outside backs, and the 4 and 5 are center backs. In a back three or back five, the 6 can drop into the back line as another center back. In a back five, the 2 and 3 often defend deeper as wingbacks.\n\nMidfield Changes\n\nThe 6 is usually a midfielder in back-four shapes, but can become a defender in back-three or back-five shapes. The 8 may be a box-to-box runner, a deeper helper, or one of two central midfielders. The 10 may play high behind the striker, or may drop into a midfield line when the team defends.\n\nAttacking Changes\n\nThe 7 and 11 might be high wingers, wide midfielders, wingbacks, or narrow forwards. The 9 might play alone, with another striker, or with two wide forwards close by.\n\nSimple Rule\n\nThe formation changes the starting map. The number helps you remember the job. The game tells you when to move.",
        callouts: [
          {
            title: "Big idea",
            body: "The same number can start in a different line when the formation changes.",
          },
          {
            title: "Ask this",
            body: "What is my job when we attack, defend, and transition?",
          },
        ],
        bullets: [
          {
            title: "The five formations",
            items: [
              "4-3-3: back four, midfield three, front three.",
              "4-4-2: back four, midfield four, two strikers.",
              "4-2-3-1: back four, two holding mids, three attacking mids, one striker.",
              "3-5-2: back three, five across midfield, two strikers.",
              "5-4-1: back five, midfield four, one striker.",
            ],
          },
          {
            title: "Defenders: 2, 3, 4, 5, and sometimes 6",
            items: [
              "In a back four, 2 and 3 are usually right back and left back.",
              "In a back three, 4, 5, and 6 can be the three center backs.",
              "In 3-5-2, 2 and 3 can act like wingbacks outside the midfield.",
              "In 5-4-1, 2, 3, 4, 5, and 6 make the back five.",
              "In any shape, center backs still protect the middle first.",
            ],
          },
          {
            title: "Midfielders: 6, 7, 8, 10, and 11 can move",
            items: [
              "In 4-3-3, 6 is deeper, 8 is balanced, and 10 is higher.",
              "In 4-4-2, 7 and 11 may be wide midfielders, with 6 and 8 central.",
              "In 4-2-3-1, 6 often has another holding midfielder next to them.",
              "In 3-5-2, 2 and 3 can be wingbacks, with three central midfielders inside.",
              "In 5-4-1, 7, 8, 10, and 11 can make the midfield four.",
            ],
          },
          {
            title: "Attackers: 7, 9, and 11",
            items: [
              "In 4-3-3, 7 and 11 are high wingers around the 9.",
              "In 4-4-2, 7 and 11 may defend deeper as wide midfielders.",
              "In 3-5-2, one of 7, 10, or 11 might play as a second striker with the 9.",
              "In 5-4-1, 7 and 11 may start as wide midfielders and counterattack from deeper spots.",
            ],
          },
        ],
        table: {
          columns: ["Number", "4-3-3", "4-4-2", "4-2-3-1", "3-5-2", "5-4-1"],
          rows: [
            ["1", "Goalkeeper", "Goalkeeper", "Goalkeeper", "Goalkeeper", "Goalkeeper"],
            ["2", "Right back", "Right back", "Right back", "Right wingback", "Right wingback"],
            ["3", "Left back", "Left back", "Left back", "Left wingback", "Left wingback"],
            ["4", "Right center back", "Right center back", "Right center back", "Right center back", "Right center back"],
            ["5", "Left center back", "Left center back", "Left center back", "Center back", "Center back"],
            ["6", "Holding midfielder", "Central midfielder", "Holding midfielder with a partner", "Left center back", "Left center back"],
            ["7", "Right winger", "Right midfielder", "Right attacking mid", "Central midfielder or right mid", "Right midfielder"],
            ["8", "Box-to-box midfielder", "Central midfielder", "Holding mid or box-to-box mid", "Central midfielder", "Central midfielder"],
            ["9", "Striker", "One of two strikers", "Lone striker", "One of two strikers", "Lone striker"],
            ["10", "Attacking midfielder", "Second striker or central mid", "Attacking midfielder", "Central mid or second striker", "Central midfielder or counter attacker"],
            ["11", "Left winger", "Left midfielder", "Left attacking mid", "One of two strikers", "Left midfielder"],
          ],
        },
      },
      {
        slug: "how-to-read-11v11-formations",
        title: "How to Read 11v11 Formations",
        summary: "A player-friendly way to understand an 11v11 shape before the game starts.",
        imageSrc: "/module-images/formations-number-positions.png",
        imageAspectRatio: "1166 / 1126",
        imageAfterParagraph: 4,
        body: "Start With The Back Line\n\nTo read an 11v11 formation, start closest to your goal. Count the defenders first, then move forward to midfielders and attackers.\n\nFind The Wide Players\n\nNext, find the players who give the team width. They might be outside backs, wide midfielders, or wingers depending on the formation.\n\nFind The Central Players\n\nAfter that, look through the middle. Notice if the team has one holding midfielder, two holding midfielders, an attacking midfielder, one striker, or two strikers.\n\nAsk The Simple Questions\n\nBefore the game, players do not need a perfect scouting report. They need a simple picture of where teammates start and who is near them.\n\nUse It During The Game\n\nOnce the game starts, keep checking if the shape changes. Teams can look different when attacking, defending, or reacting after losing the ball.",
        callouts: [
          {
            title: "Big idea",
            body: "Read the shape from back to front, then find wide and central players.",
          },
          {
            title: "Game habit",
            body: "Check the shape again after the ball starts moving.",
          },
        ],
        bullets: [
          {
            title: "Read it in order",
            items: [
              "Count the defenders.",
              "Count the midfielders.",
              "Count the attackers.",
              "Find the wide players and central players.",
            ],
          },
          {
            title: "Three questions before kickoff",
            items: [
              "Who is closest to my position?",
              "Who gives us width?",
              "Who connects our lines?",
            ],
          },
        ],
        table: {
          columns: ["Step", "What to look for", "Example question"],
          rows: [
            ["1", "Back line", "Do we have three or four defenders?"],
            ["2", "Midfield shape", "Is there a 6, an 8, and a 10?"],
            ["3", "Attackers", "Do we have one striker or two?"],
            ["4", "Width", "Do outside backs or wingers make the field wide?"],
          ],
        },
      },
      {
        slug: "what-7v7-formations-mean",
        title: "What 7v7 Formations Mean",
        summary: "How smaller-sided shapes teach basic team structure.",
        body: "7v7 Is The Smaller Map\n\nA 7v7 formation has one goalkeeper and six field players. The formation numbers only count the six field players.\n\nTwo Shapes We Use\n\nIn this module, we will use 2-3-1 and 3-2-1. A 2-3-1 has two defenders, three midfielders, and one forward. A 3-2-1 has three defenders, two midfielders, and one forward.\n\nThe Field Is Smaller Too\n\nA common 7v7 field range is about 55-65 yards long and 35-45 yards wide. That is much smaller than 9v9 or 11v11, so players have less distance to run and decisions happen closer together.\n\nWhy 7v7 Helps\n\n7v7 is small enough for players to see the whole team. You can learn where support comes from, when to stay wide, and how defenders, midfielders, and forwards connect.\n\nThe Forward Gives Depth\n\nBoth 7v7 shapes use one forward. That player helps the team by staying high enough to stretch the field and give teammates a pass forward.\n\nThe Big Choice\n\nThe coach chooses between more midfield help or more defensive help. A 2-3-1 gives more midfield width. A 3-2-1 gives one more player in the back line.",
        callouts: [
          {
            title: "Big idea",
            body: "7v7 has one goalkeeper plus six field players.",
          },
          {
            title: "Our shapes",
            body: "We are focusing on 2-3-1 and 3-2-1.",
          },
        ],
        bullets: [
          {
            title: "How to read 7v7",
            items: [
              "2-3-1 means two defenders, three midfielders, and one forward.",
              "3-2-1 means three defenders, two midfielders, and one forward.",
              "The goalkeeper is not included in the formation number.",
            ],
          },
          {
            title: "What players should notice",
            items: [
              "Who is behind me if we lose the ball?",
              "Who is next to me if I need a short pass?",
              "Who is ahead of me if we can attack?",
            ],
          },
          {
            title: "Field-size reminder",
            items: [
              "7v7 is tight, so support can arrive quickly.",
              "A bad touch may be punished fast because players are close.",
              "The next field size will feel much more open.",
            ],
          },
        ],
        table: {
          columns: ["7v7 shape", "Field players", "What it teaches"],
          rows: [
            ["2-3-1", "2 defenders, 3 midfielders, 1 forward", "Width, passing support, and midfield connection."],
            ["3-2-1", "3 defenders, 2 midfielders, 1 forward", "Building from the back and protecting the middle."],
          ],
        },
      },
      {
        slug: "common-7v7-shapes",
        title: "Common 7v7 Shapes",
        summary: "Examples of simple 7v7 team shapes and what they teach.",
        body: "Shape 1: 2-3-1\n\nA 2-3-1 starts with two defenders, three midfielders, and one forward. It gives the team good width because the outside midfielders can stay wide.\n\nHow 2-3-1 Attacks\n\nThe two defenders can pass into midfield. The middle midfielder can turn and connect. The wide midfielders can stay outside or run forward. The striker gives the team depth.\n\nHow 2-3-1 Defends\n\nThe wide midfielders must run back and help. If they stay too high, the two defenders can become outnumbered.\n\nShape 2: 3-2-1\n\nA 3-2-1 starts with three defenders, two midfielders, and one forward. It can feel safer because the team has one more player near the goal.\n\nHow 3-2-1 Attacks\n\nThe outside defenders can step forward when there is space. The two midfielders need to show for the ball. The striker should stay available and help the team move up the field.\n\nHow 3-2-1 Defends\n\nThe back three protect the goal and cover wide spaces. The midfield two should stay connected so the middle does not become too open.\n\nNo Perfect Shape\n\nA shape does not play the game for you. Players still need to scan, talk, move, and help each other.",
        callouts: [
          {
            title: "2-3-1",
            body: "This shape gives the team more midfield width.",
          },
          {
            title: "3-2-1",
            body: "This shape gives the team more help in the back line.",
          },
        ],
        bullets: [
          {
            title: "Use 2-3-1 when",
            items: [
              "The team needs wide passing options.",
              "The midfielders are ready to run back and defend.",
              "The team wants to connect through the middle.",
            ],
          },
          {
            title: "Use 3-2-1 when",
            items: [
              "The team needs more cover near goal.",
              "The outside defenders can step forward at the right time.",
              "The midfielders can stay connected and support the striker.",
            ],
          },
        ],
        table: {
          columns: ["Shape", "Strength", "Watch out for"],
          rows: [
            ["2-3-1", "More midfield width and passing support.", "Only two defenders if wide mids do not recover."],
            ["3-2-1", "More defensive cover and easier build-out shape.", "Can feel narrow if outside defenders never step forward."],
          ],
        },
      },
      {
        slug: "how-7v7-numbers-connect-to-9v9",
        title: "How 7v7 Numbers Connect to 9v9",
        summary: "How player roles grow when two more players are added.",
        body: "9v9 Adds Two Field Players\n\n7v7 has six field players. 9v9 has eight field players. That means the team adds two new field players to the map.\n\nThe Jobs Stay Connected\n\nDefenders still protect and build. Midfielders still connect the team. The forward still gives depth and tries to create chances.\n\nFrom 2-3-1 To 2-5-1\n\nThe easiest way to grow a 2-3-1 into a 2-5-1 is to add two more midfield players. Those new players can give the team more width, more passing choices, and more help around the ball.\n\nFrom 3-2-1 To 3-4-1\n\nThe easiest way to grow a 3-2-1 into a 3-4-1 is to add two more midfield players. The back three stays familiar, and the midfield gets wider and stronger.\n\nWhy We Add Players In New Spots\n\nThe new players should not just stand near players who are already there. They should fill useful spaces: wide spaces, central support spaces, or covering spaces behind the ball.\n\nSimple Growth Rule\n\nWhen two players are added, ask what problem they solve. Do they help us keep the ball? Do they help us defend wide spaces? Do they help us connect to the striker?",
        callouts: [
          {
            title: "Big idea",
            body: "Moving from 7v7 to 9v9 adds two field players.",
          },
          {
            title: "Simple rule",
            body: "Add players where they create better support, width, or cover.",
          },
        ],
        bullets: [
          {
            title: "2-3-1 can become 2-5-1",
            items: [
              "Keep the two defenders.",
              "Keep the one forward.",
              "Add two midfielders to make the middle line bigger.",
              "Use the new players to help wide spaces and passing support.",
            ],
          },
          {
            title: "3-2-1 can become 3-4-1",
            items: [
              "Keep the three defenders.",
              "Keep the one forward.",
              "Add two midfielders to make the team wider.",
              "Use the new players to help the team connect from back to front.",
            ],
          },
        ],
        table: {
          columns: ["7v7 shape", "Add two players", "9v9 shape", "What changes"],
          rows: [
            ["2-3-1", "Two midfielders", "2-5-1", "The midfield gets wider and gives more passing support."],
            ["3-2-1", "Two midfielders", "3-4-1", "The back line stays strong and the midfield gets more help."],
            ["2-3-1", "One defender and one midfielder", "3-4-1", "The team adds more cover and still has four midfielders."],
            ["3-2-1", "One defender moves up, add two midfielders", "2-5-1", "The back line has two, and the midfield grows to five."],
          ],
        },
      },
      {
        slug: "what-changes-when-moving-to-9v9",
        title: "What Changes When Moving to 9v9",
        summary: "The bigger field, more teammates, and new decisions players must handle.",
        body: "The Field Feels Bigger\n\nIn 9v9, the field is bigger and there are two more teammates. Players have more space to use, but they also have more space to defend.\n\nHow Much Bigger\n\nA common 7v7 field range is about 55-65 by 35-45 yards. A common 9v9 field range is about 70-80 by 45-55 yards. Using middle examples, 9v9 can feel about one and a half times as much space as 7v7.\n\nThere Are More Passing Choices\n\nThe player with the ball should have more options. A teammate can support behind, a teammate can show wide, and the striker can stay higher as a forward option.\n\n2-5-1 Changes The Midfield\n\nA 2-5-1 has a big midfield line. That can help the team keep the ball, but the wide midfielders must still defend quickly when the ball is lost.\n\n3-4-1 Changes The Back Line\n\nA 3-4-1 keeps three defenders, so the team may feel more protected. The midfield four still needs to move together so the striker is not alone.\n\nPlayers Must Scan Earlier\n\nBecause there are more players and more grass, decisions can happen faster. Players should check their shoulder before the ball arrives and know where the next pass might go.\n\nThe Goal Is Still Simple\n\nThe team wants useful spacing. Be close enough to help, wide enough to stretch the field, and ready to react when the ball changes teams.",
        callouts: [
          {
            title: "Big idea",
            body: "9v9 adds space, teammates, and decisions.",
          },
          {
            title: "Stay simple",
            body: "Use the new players to create width, support, and cover.",
          },
        ],
        bullets: [
          {
            title: "What changes for defenders",
            items: [
              "There is more space behind and beside the back line.",
              "Defenders need to talk and pass into midfield.",
              "Outside defenders or wing players may have bigger running jobs.",
            ],
          },
          {
            title: "What changes with the field",
            items: [
              "Passes can travel longer distances.",
              "Players need to scan earlier because help is farther away.",
              "Recovery runs are longer when the ball is lost.",
            ],
          },
          {
            title: "What changes for midfielders",
            items: [
              "There are more teammates to connect with.",
              "Wide players must know when to stay wide and when to recover.",
              "Central players must scan before the ball arrives.",
            ],
          },
          {
            title: "What changes for the forward",
            items: [
              "The striker may feel alone at first.",
              "The striker should stay connected, not just run away.",
              "Midfielders need to support quickly when the team wins the ball.",
            ],
          },
        ],
        table: {
          columns: ["9v9 shape", "Main benefit", "Player reminder"],
          rows: [
            ["2-5-1", "Lots of midfield help and width.", "Wide midfielders must recover when defending."],
            ["3-4-1", "More cover in the back line.", "Midfielders must support the lone striker."],
          ],
        },
      },
      {
        slug: "what-9v9-formations-mean",
        title: "What 9v9 Formations Mean",
        summary: "How 9v9 shapes prepare players for full-sided soccer.",
        body: "9v9 Is The Bridge\n\nA 9v9 formation has one goalkeeper and eight field players. It is the bridge between small-sided soccer and full 11v11 soccer.\n\nThe Two Main 9v9 Shapes\n\nIn this module, we use 2-5-1 and 3-4-1. A 2-5-1 has a big midfield line. A 3-4-1 has one more defender and still keeps four midfielders.\n\nThe Field Gets Bigger Again\n\nA common 9v9 field range is about 70-80 yards long and 45-55 yards wide. A common youth 11v11 example is about 100 yards long and 65 yards wide. That is not just a little bigger. It can be close to twice as much space.\n\nWhy That Matters\n\nMore space means longer passes, longer recovery runs, and more time between teammates. Players must scan earlier and think about the next pass before the ball gets to them.\n\nWhat 9v9 Teaches\n\n9v9 teaches the habits that matter in 11v11: spacing, scanning, covering, supporting, and changing shape when the ball moves.",
        callouts: [
          {
            title: "Big idea",
            body: "9v9 teaches the habits players need before the full 11v11 field.",
          },
          {
            title: "Our shapes",
            body: "We are using 2-5-1 and 3-4-1 as the main 9v9 maps.",
          },
        ],
        bullets: [
          {
            title: "What 2-5-1 gives you",
            items: [
              "Two defenders behind the ball.",
              "Five midfielders to help keep and move the ball.",
              "One striker to give the team depth.",
            ],
          },
          {
            title: "What 3-4-1 gives you",
            items: [
              "Three defenders for more cover.",
              "Four midfielders to connect the team.",
              "One striker who needs quick support.",
            ],
          },
        ],
        table: {
          columns: ["9v9 shape", "Field players", "Main lesson"],
          rows: [
            ["2-5-1", "2 defenders, 5 midfielders, 1 forward", "Use width and midfield support."],
            ["3-4-1", "3 defenders, 4 midfielders, 1 forward", "Stay protected while still connecting forward."],
          ],
        },
      },
      {
        slug: "common-9v9-shapes",
        title: "Common 9v9 Shapes",
        summary: "Examples of 9v9 shapes and the roles they emphasize.",
        body: "Shape 1: 2-5-1\n\nA 2-5-1 starts with two defenders, five midfielders, and one forward. It is a midfield-heavy shape.\n\nHow 2-5-1 Attacks\n\nThe wide midfielders can stretch the field. The central midfielders can give short passing options. The striker stays high enough to help the team go forward.\n\nHow 2-5-1 Defends\n\nThe wide midfielders must recover fast. If they do not, the two defenders can be left with too much space to cover.\n\nShape 2: 3-4-1\n\nA 3-4-1 starts with three defenders, four midfielders, and one forward. It gives the team more cover behind the ball.\n\nHow 3-4-1 Attacks\n\nThe outside midfielders can give width. The central midfielders connect the back line to the striker. One defender can step forward when there is space.\n\nHow 3-4-1 Defends\n\nThe back three protect the middle and cover wide spaces. The midfield four should move together so the striker does not get separated from the team.\n\nBoth Shapes Can Grow\n\nBoth 9v9 shapes can grow into 11v11. The new players should fill useful spots instead of crowding the ball.",
        callouts: [
          {
            title: "2-5-1",
            body: "This shape gives the team a big midfield line.",
          },
          {
            title: "3-4-1",
            body: "This shape gives the team more back-line cover.",
          },
        ],
        bullets: [
          {
            title: "Use 2-5-1 when",
            items: [
              "The team needs more passing choices in midfield.",
              "Wide midfielders can run both ways.",
              "The striker can stay connected while still stretching the field.",
            ],
          },
          {
            title: "Use 3-4-1 when",
            items: [
              "The team needs more cover behind the ball.",
              "The back line can pass into midfield.",
              "The midfield four can support the lone striker quickly.",
            ],
          },
        ],
        table: {
          columns: ["Shape", "Strength", "Watch out for"],
          rows: [
            ["2-5-1", "More midfield numbers and width.", "Only two defenders if wide mids do not recover."],
            ["3-4-1", "More defensive cover and a clear back line.", "The striker can become isolated without support."],
          ],
        },
      },
      {
        slug: "how-9v9-numbers-connect-to-11v11",
        title: "How 9v9 Numbers Connect to 11v11",
        summary: "How the 9v9 roles become 11v11 numbers and responsibilities.",
        body: "11v11 Adds Two More Field Players\n\n9v9 has eight field players. 11v11 has ten field players. That means the team adds two new field players again.\n\nPath 1: 2-5-1 To 4-3-3\n\nThis is a simple attacking growth path. Add two fullbacks to make a back four. Then move the wide midfielders higher into the attack. The team becomes 4 defenders, 3 midfielders, and 3 attackers.\n\nPath 2: 2-5-1 To 4-4-2\n\nThis is a simple two-striker growth path. Add two fullbacks to make a back four. Keep the wide players in midfield. Move one central attacking player higher to become a second striker next to the 9.\n\nPath 3: 3-4-1 To 5-4-1\n\nThis is a simple defensive growth path. Keep the three defenders. Add two outside backs or wingbacks to make a back five. Keep the midfield four and keep the 9 as the lone striker.\n\nWhy These Paths Make Sense\n\nThe new 11v11 players should solve a real problem. Fullbacks help defend wide spaces. Extra attackers help stretch the opponent. A second striker gives the 9 a partner.\n\nThe Number Language Still Helps\n\nThe field gets bigger and the team gets more players, but the numbers still help players understand who is behind them, next to them, and ahead of them.",
        callouts: [
          {
            title: "Big idea",
            body: "Moving from 9v9 to 11v11 adds two more field players.",
          },
          {
            title: "Main paths",
            body: "2-5-1 can grow into 4-3-3 or 4-4-2, and 3-4-1 can grow into 5-4-1.",
          },
        ],
        bullets: [
          {
            title: "2-5-1 to 4-3-3",
            items: [
              "Add a right back and left back.",
              "Move the wide midfielders higher into the front line.",
              "Keep three central midfielders behind the front three.",
              "The striker stays as the 9.",
            ],
          },
          {
            title: "2-5-1 to 4-4-2",
            items: [
              "Add a right back and left back.",
              "Keep wide players in midfield.",
              "Move one central attacking player up as a second striker.",
              "The striker now has a partner.",
            ],
          },
          {
            title: "3-4-1 to 5-4-1",
            items: [
              "Keep the three center backs.",
              "Add two outside backs or wingbacks.",
              "Keep four midfielders in front of the back five.",
              "The 9 stays as the lone striker.",
            ],
          },
        ],
        table: {
          columns: ["9v9 start", "Add two players", "Move one line", "11v11 result"],
          rows: [
            ["2-5-1", "Add fullbacks", "Wide midfielders move up", "4-3-3"],
            ["2-5-1", "Add fullbacks", "One central player moves up as striker", "4-4-2"],
            ["3-4-1", "Add outside backs or wingbacks", "Midfield four stays connected", "5-4-1"],
          ],
        },
      },
      {
        slug: "what-changes-when-moving-to-11v11",
        title: "What Changes When Moving to 11v11",
        summary: "What players need to handle when the game becomes full-sided.",
        body: "The Field Gets Expansive\n\nIn 11v11, the field is much bigger. A common 9v9 field range is about 70-80 by 45-55 yards. A common youth 11v11 example is about 100 by 65 yards, and full 11v11 fields can vary by league and field space.\n\nHow Much Bigger\n\nUsing middle examples, 9v9 is about 3,750 square yards. An 11v11 field at 100 by 65 is about 6,500 square yards. That is about 1.7 times as much grass to cover.\n\nDistances Get Longer\n\nA pass across the field is longer. A recovery run back to goal is longer. The space between defenders, midfielders, and attackers is longer.\n\nPlayers Need To Scan Earlier\n\nIn 7v7 and 9v9, a teammate may be close enough to help quickly. In 11v11, help can be farther away. Players need to check before the ball arrives so they already know the next choice.\n\nRoles Get More Specific\n\nPlayers still attack, defend, and transition, but each role becomes more detailed. Fullbacks defend wide space and support attacks. Center backs organize. Midfielders connect. Wingers stretch. Strikers stay dangerous.\n\nThe Big Lesson\n\nDo not chase the ball just because the field is bigger. Keep the team shape, stay connected to nearby teammates, and move when the ball tells you to move.",
        callouts: [
          {
            title: "Big idea",
            body: "11v11 is not just more players; it is much more space.",
          },
          {
            title: "Best habit",
            body: "Scan early because teammates and opponents are farther apart.",
          },
        ],
        bullets: [
          {
            title: "What gets harder",
            items: [
              "Longer passes need better weight and direction.",
              "Recovery runs take more time and effort.",
              "Players must cover space without chasing everywhere.",
            ],
          },
          {
            title: "What players should do",
            items: [
              "Check shoulders before the ball arrives.",
              "Stay connected to the closest teammates.",
              "Use width when attacking and compactness when defending.",
              "Talk early because distances are bigger.",
            ],
          },
        ],
        table: {
          columns: ["Format", "Common example size", "What players feel"],
          rows: [
            ["7v7", "About 55-65 x 35-45 yards", "Tighter space and quicker support."],
            ["9v9", "About 70-80 x 45-55 yards", "More room, longer passes, more running."],
            ["11v11", "Example: about 100 x 65 yards", "Expansive field, bigger decisions, longer recovery runs."],
          ],
        },
      },
      {
        slug: "our-attacking-shape-connected-to-11v11",
        title: "Our Attacking Shape Connected to 11v11",
        summary: "How our team shape helps players understand attacking roles in the full game.",
        body: "Our Team Shape Starts Simple\n\nIn 7v7, our team shape is always 2-3-1. That gives us two defenders, three midfielders, and one forward.\n\nOur Main 9v9 Attacking Shape\n\nIn 9v9, our attacking shape is 2-5-1. We still have two defenders and one striker, but now we have five midfielders to help us keep the ball, use width, and support forward.\n\nWhy We Use 2-5-1 In Attack\n\nThe 2-5-1 gives the player on the ball more passing choices. We can have support behind the ball, central players near the ball, wide players stretching the field, and a striker giving us depth.\n\nHow This Connects To 4-3-3\n\nWhen our team grows to 11v11, our 2-5-1 attacking idea connects to a 4-3-3. The wide midfielders can become wide attackers. We add fullbacks behind them. The middle players become the 6, 8, and 10.\n\nThe Important Habit\n\nDo not think 2-5-1 is just a picture. It teaches 4-3-3 habits: width, support, a front player, and midfielders who connect the team.",
        callouts: [
          {
            title: "Our attack",
            body: "In 9v9, we attack from a 2-5-1 shape.",
          },
          {
            title: "Future shape",
            body: "Our 9v9 attacking shape helps players learn the 4-3-3.",
          },
        ],
        bullets: [
          {
            title: "In our 2-5-1 attack",
            items: [
              "The two defenders stay ready behind the ball.",
              "The wide midfielders give us width.",
              "The central midfielders help us connect passes.",
              "The striker gives us depth and a forward target.",
            ],
          },
          {
            title: "How it becomes 4-3-3",
            items: [
              "Add a right back and left back behind the wide players.",
              "Move the wide midfielders higher into the front line.",
              "Keep three midfielders connected in the middle.",
              "Keep the striker as the 9.",
            ],
          },
        ],
        table: {
          columns: ["Format", "Our attacking shape", "What players learn"],
          rows: [
            ["7v7", "2-3-1", "Basic width, support, and one striker."],
            ["9v9", "2-5-1", "A bigger midfield, wide players, and support around the ball."],
            ["11v11", "4-3-3", "Fullbacks, three midfielders, two wingers, and one striker."],
          ],
        },
      },
      {
        slug: "our-defending-shape-connected-to-11v11",
        title: "Our Defending Shape Connected to 11v11",
        summary: "How our defensive jobs connect to bigger team defending.",
        body: "Our Team Defends Together\n\nIn 9v9, our defensive shape is 3-4-1. That means we add more cover behind the ball when we do not have it.\n\nWhy We Defend In 3-4-1\n\nWhen the other team has the ball, we want better protection in the back line. The extra defender helps cover the middle, defend wide attacks, and protect the goal.\n\nThe Midfield Four Matters\n\nThe four midfielders cannot watch the back line do all the defending. They need to slide together, protect central space, and help the striker press when the time is right.\n\nHow This Connects To 4-3-3\n\nEven though our defensive 9v9 shape is 3-4-1, the habits still help our future 4-3-3. In 11v11, the fullbacks and center backs protect the back line, while midfielders slide, cover, and stay compact.\n\nDefending Is Not Just Standing Back\n\nDefending means pressure, cover, balance, and compactness. The closest player presses. The next player covers. The rest of the team protects dangerous space.",
        callouts: [
          {
            title: "Our defense",
            body: "In 9v9, we defend from a 3-4-1 shape.",
          },
          {
            title: "Main habit",
            body: "Defend together, not as separate players.",
          },
        ],
        bullets: [
          {
            title: "In our 3-4-1 defense",
            items: [
              "The back three protect the goal and cover dangerous space.",
              "The midfield four slide together with the ball.",
              "The striker helps guide pressure from the front.",
              "Everyone stays close enough to help.",
            ],
          },
          {
            title: "Defending words to know",
            items: [
              "Pressure: the closest player goes to the ball.",
              "Cover: the next player helps behind the press.",
              "Balance: the far-side players protect space away from the ball.",
              "Compact: the team stays close enough to defend together.",
            ],
          },
        ],
        table: {
          columns: ["Moment", "Our 9v9 shape", "Main job"],
          rows: [
            ["When we attack", "2-5-1", "Use width, keep the ball, and support the striker."],
            ["When we defend", "3-4-1", "Add cover, protect the middle, and defend together."],
            ["Future 11v11", "4-3-3", "Use fullbacks, midfielders, wingers, and striker in connected lines."],
          ],
        },
      },
      {
        slug: "how-we-change-shape-in-the-game",
        title: "How We Change Shape in the Game",
        summary: "Why our team shape looks different when attacking, defending, and transitioning.",
        body: "The Game Changes The Shape\n\nA team does not stay in one picture for the whole game. Our 9v9 team changes between 2-5-1 and 3-4-1 depending on who has the ball.\n\nWhen We Have The Ball\n\nWhen we have the ball, we want to look more like 2-5-1. The wide midfielders can get wider and higher. Central players show for passes. The striker stays connected but gives us depth.\n\nWhen We Lose The Ball\n\nWhen we lose the ball, we need to react fast. One player may drop or recover so we can protect the back line and look more like 3-4-1.\n\nWhen We Win The Ball\n\nWhen we win the ball, we do not all sprint forward at once. First, secure the ball. Then find width, support, and the striker.\n\nWhy This Matters For U11\n\nAt U11, the biggest lesson is not memorizing a perfect picture. The biggest lesson is knowing the moment. Do we have the ball? Did we lose it? Did we win it? Where does my team need me now?\n\nThe Simple Team Rule\n\nAttack in 2-5-1. Defend in 3-4-1. Learn the habits that will grow into 4-3-3.",
        callouts: [
          {
            title: "With ball",
            body: "We want to look like 2-5-1 when we attack.",
          },
          {
            title: "Without ball",
            body: "We want to look like 3-4-1 when we defend.",
          },
        ],
        bullets: [
          {
            title: "If we have the ball",
            items: [
              "Wide players make the field bigger.",
              "Central players show for passes.",
              "The striker gives us a forward option.",
              "Defenders stay ready behind the ball.",
            ],
          },
          {
            title: "If we lose the ball",
            items: [
              "React right away.",
              "The closest player pressures the ball.",
              "Nearby players cover and recover.",
              "The team protects the middle first.",
            ],
          },
          {
            title: "If we win the ball",
            items: [
              "Take care of the first pass.",
              "Find a teammate who can face forward.",
              "Get wide again.",
              "Support the striker quickly.",
            ],
          },
        ],
        table: {
          columns: ["Game moment", "Shape idea", "Player question"],
          rows: [
            ["We have the ball", "2-5-1", "How can I give width, support, or depth?"],
            ["We lose the ball", "Change toward 3-4-1", "Can I press, cover, or recover?"],
            ["We defend", "3-4-1", "Am I connected to the players near me?"],
            ["We win the ball", "Change toward 2-5-1", "Where is the first safe pass?"],
          ],
        },
      },
      {
        slug: "how-our-players-learn-11v11-roles",
        title: "How Our Players Learn 11v11 Roles",
        summary: "How smaller-sided roles prepare players for the full game over time.",
        body: "We Learn 11v11 Through Our 9v9 Shape\n\nOur most important bridge to 11v11 is the move from 2-5-1 to 4-3-3. That is how our U11 players can start seeing future 11v11 roles.\n\nStart With Your Current Job\n\nPlayers should first learn their current 9v9 job. Wide midfielder, central midfielder, defender, and striker all have clear jobs in our 2-5-1 and 3-4-1.\n\nThen Learn The 4-3-3 Connection\n\nIn 11v11, the 2-5-1 grows into a 4-3-3. The wide midfielders can become 7 and 11. The striker becomes 9. The central midfielders connect to 6, 8, and 10. The added fullbacks become 2 and 3.\n\nDo Not Learn Everything At Once\n\nPlayers do not need to master every 11v11 position today. Learn your role first. Then learn the roles next to you. Then learn the line in front of you and behind you.\n\nThe Team Goal\n\nThe goal is not to memorize formations. The goal is to understand how our 9v9 decisions prepare us for full soccer.",
        callouts: [
          {
            title: "Main bridge",
            body: "Our 2-5-1 attacking shape grows into the 4-3-3.",
          },
          {
            title: "Learn slowly",
            body: "Learn your role first, then the roles around you.",
          },
        ],
        bullets: [
          {
            title: "2-5-1 to 4-3-3 role connections",
            items: [
              "Wide midfielders can become the 7 and 11 wingers.",
              "The striker connects to the 9.",
              "Central midfielders connect to 6, 8, and 10.",
              "The new fullbacks connect to 2 and 3.",
            ],
          },
          {
            title: "What U11 players should focus on",
            items: [
              "Know your job in our 9v9 shape.",
              "Know who is next to you.",
              "Know who supports you when you have the ball.",
              "Know where to recover when we lose the ball.",
            ],
          },
        ],
        table: {
          columns: ["Current 9v9 role", "Future 4-3-3 role", "Simple connection"],
          rows: [
            ["Wide midfielder", "7 or 11 winger", "Learn width, 1v1 attacking, and recovery runs."],
            ["Striker", "9 striker", "Stay dangerous, connect passes, and attack goal."],
            ["Central midfielder", "6, 8, or 10", "Connect the team and scan before receiving."],
            ["Defender", "4 or 5 center back", "Protect the middle and start attacks."],
            ["Added fullback", "2 or 3 fullback", "Defend wide space and support attacks from behind."],
          ],
        },
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
        slug: "the-three-thirds",
        title: "The Three Thirds",
        summary: "The field is split into three zones from goal to goal.",
        body: "What Is a Third\n\nA third is one of three equal zones that run across the field from your goal to the other team's goal.\n\nHow They Are Named\n\nThe names come from your team's point of view. The defending third is near your goal. The middle third is the center of the field. The attacking third is near the other team's goal.\n\nWhy Thirds Matter\n\nThirds help you know your job. When you are in the defending third, your job is to protect. When you are in the middle third, your job is to connect and transition. When you are in the attacking third, your job is to create chances and score.\n\nEvery Player Uses Thirds\n\nIt does not matter what position you play. Thirds apply to everyone. A striker can drop into the middle third to help. A defender can push into the attacking third on a corner. Knowing your third helps you make the right decision fast.",
        practice: { type: "tap-the-zone", prompt: "Tap the attacking third", zones: "thirds", answer: "attacking" },
        imageSrc: "/module-images/field-thirds-channels.png",
        imageAfterParagraph: 3,
        callouts: [
          {
            title: "Split in three",
            body: "The field is cut into thirds from your goal to the other team's goal.",
          },
          {
            title: "Your job changes",
            body: "What you do depends on which third the ball is in.",
          },
        ],
        table: {
          columns: ["Third", "Where it is", "Main idea"],
          rows: [
            ["Defending third", "Near your goal", "Protect the goal and clear danger."],
            ["Middle third", "Center of the field", "Connect passes and transition."],
            ["Attacking third", "Near the opponent's goal", "Create chances and score."],
          ],
        },
      },
      {
        slug: "attacking-third",
        title: "The Attacking Third",
        funFact: { title: "Zone 14", body: "Scouts at professional clubs track every touch on the field using a grid system. Zone 14 is the square right in front of the penalty box. It consistently shows up in data as the zone where the most goals are set up from. Some clubs count Zone 14 touches as a key performance stat for attacking midfielders and strikers. Messi, Iniesta, and Zidane all dominated Zone 14." },
        summary: "This is where goals happen — here is how to play like you belong here.",
        body: "Where It Is\n\nThe attacking third starts the moment you cross into the opponent's half and goes all the way to their goal line. You are in their territory now.\n\nWhat to Do With the Ball\n\nEvery touch you take in the attacking third should make the goalkeeper nervous. Shoot when you have a real chance. Pass into space for a teammate making a run. Drive to the back of the box when room opens up. Do not waste time — defenders close fast in this zone.\n\nWhat to Do Without the Ball\n\nIf you do not have the ball, be a problem anyway. Stay wide to pull defenders out of position. Time your run behind the last defender when your teammate has space to play. The best attackers are already moving before the ball arrives.\n\nRisk vs. Reward\n\nHere is the best part: you can take more risks in the attacking third than anywhere else on the field. A bad pass up here is not a disaster. A bad pass in your own defending third can cost your team a goal. So be brave. Be direct. Go for it.\n\nZone 14 — The Magic Spot\n\nCoaches and scouts have a name for the most dangerous area in the attacking third: Zone 14. It is the space right in front of the penalty box, between the penalty arc and the top of the box. Why is it special? Because a player with the ball there can shoot, play a through ball, or slide a pass to either side of the box. Defenders hate Zone 14 because there is no easy answer. Messi, Iniesta, and Zidane all loved operating in Zone 14. Next time you are near the top of the box, remember — you are standing in one of the most dangerous spots on a soccer field.",
        callouts: [
          {
            title: "Be dangerous",
            body: "In the attacking third, every touch should make the goalkeeper nervous.",
          },
          {
            title: "Zone 14",
            body: "The space just outside the penalty box is called Zone 14 — pros call it the most dangerous spot on the field.",
          },
        ],
        bullets: [
          {
            title: "What to do in the attacking third",
            items: [
              "Shoot when you have a real chance — do not wait for a perfect moment.",
              "Drive to the back of the box when space opens up.",
              "Stay wide until a gap appears, then cut inside.",
              "Time your run so you arrive as the ball arrives — not too early.",
              "If you find Zone 14, look to shoot or play someone in behind.",
            ],
          },
        ],
      },
      {
        slug: "middle-third",
        title: "The Middle Third",
        summary: "The middle third is where the game connects — use it to move the ball forward.",
        body: "Where It Is\n\nThe middle third covers the center of the field between both teams' halves. It is the busiest zone on the pitch.\n\nWhy It Matters\n\nThe middle third links your defense to your attack. If your team cannot move the ball through the middle third, it is very hard to create scoring chances.\n\nHow to Move to Help\n\nAlways offer a passing option. Show for the ball by moving into space. Look forward first before passing sideways or back. Keep your head up so you know what is around you before the ball arrives.\n\nWhat Mistakes to Avoid\n\nDo not stand still in the middle third. Defenders can mark a player who is not moving. Do not clump together with two or three teammates in the same spot. Spread out and give the player on the ball different angles to pass to.",
        callouts: [
          {
            title: "Connect play",
            body: "The middle third links your defense to your attack.",
          },
          {
            title: "Keep moving",
            body: "If you stand still in the middle third, defenders can mark you easily.",
          },
        ],
        bullets: [
          {
            title: "Middle third habits",
            items: [
              "Always show for the pass — give your teammate an option.",
              "Keep your head up before the ball arrives.",
              "Look forward first before passing sideways or back.",
              "Keep your spacing from teammates so the field stays open.",
            ],
          },
        ],
      },
      {
        slug: "defending-third",
        title: "The Defending Third",
        coachSays: "If you are not sure what to do in the defending third, keep it simple. A safe pass or a cleared ball is better than losing the ball near your own goal.",
        summary: "The defending third is where mistakes cost goals — stay organized and clear the danger.",
        body: "Where It Is\n\nThe defending third is the zone nearest your own goal. It includes your penalty box and the area just in front of it.\n\nHow to Defend Without Panicking\n\nStay calm. Do not lunge at the ball unless you are sure you will win it. Mark the nearest opponent. Keep your body between the ball and your goal. Talk to your goalkeeper and teammates.\n\nForwards in the Defending Third\n\nIf you are a forward and the ball is in your team's defending third, your job is to press high on the opponent's defense. You are not defending in your own box. You are making it harder for them to play it back and build again.\n\nCommunication Is Everything\n\nCall out what you see. Tell your teammates who has the runner. Tell the goalkeeper if a shot is coming. The defending third is where talking wins games.",
        callouts: [
          {
            title: "No risks",
            body: "In the defending third, do not try to dribble past players.",
          },
          {
            title: "Goal first",
            body: "Clearing the ball safely matters more than keeping it.",
          },
        ],
        table: {
          columns: ["Role", "Job in the defending third"],
          rows: [
            ["Goalkeeper", "Organizes the box and commands the defense."],
            ["Defenders", "Mark runners, win headers, and clear the ball."],
            ["Midfielders", "Track back, block passing lanes, and help the defense."],
            ["Forwards", "Press high on the opponent to slow their buildup."],
          ],
        },
      },
      {
        slug: "spacing-in-thirds",
        title: "Spacing in Thirds",
        coachSays: "I would rather see you hold your position in the right zone than sprint to the ball and leave a gap behind you.",
        comparison: {
          left: {
            label: "Bad Spacing",
            items: [
              "All three midfielders chase the ball into the attacking third.",
              "The middle third is completely empty.",
              "If the team loses the ball, nobody is there to win it back.",
              "The opponent has a free path to goal.",
            ],
          },
          right: {
            label: "Good Spacing",
            items: [
              "One midfielder supports the attack in the attacking third.",
              "One midfielder holds the middle third.",
              "One midfielder stays closer to the defending third.",
              "If the team loses the ball, the shape is already set.",
            ],
          },
        },
        practice: {
          type: "what-would-you-do",
          scenario: "Your team has the ball in the attacking third. You are a midfielder who just ran up to support. You look around and see three teammates already in the attacking third and nobody in the middle third. What do you do?",
          choices: [
            {
              label: "Keep pushing forward to help the attack",
              response: "Your attacking instinct is great — but four players in the attacking third means the middle is completely empty. If your team loses the ball now, the other team has a clear run forward. The right call is to hold your position back.",
            },
            {
              label: "Drop back to the middle third",
              response: "Yes! The middle third needs coverage. If your team loses the ball up top, you are already in position to slow the counter or win it back. This is what it means to keep the team's shape.",
            },
            {
              label: "Go wide into the left channel to stretch the defense",
              response: "Going wide could create width — but the bigger problem is that the middle third has no cover. Dropping back to balance the team is more important here. Width helps when the team already has good shape.",
            },
          ],
        },
        summary: "Good spacing means your team is never too bunched up in one zone.",
        body: "What Bad Spacing Looks Like\n\nWhen all your players chase the ball into the same third, your team loses its shape. The other team can win the ball and play into the empty zones you left behind.\n\nWhat Good Spacing Looks Like\n\nGood teams always have players ready in every third. Someone holds the defending third, someone supports in the middle third, and someone threatens in the attacking third. Even when the ball moves fast, the shape stays connected.\n\nHow to Check Your Own Spacing\n\nAsk yourself: is the area behind me empty? If you leave your zone to follow the ball, make sure a teammate has covered where you left. Look around before you move forward. If two teammates are already there, stay back and hold the balance.",
        callouts: [
          {
            title: "Spread out",
            body: "If all your players are in the same third, your team has no shape.",
          },
          {
            title: "Cover all three",
            body: "Your team should always have players ready in every third.",
          },
        ],
        bullets: [
          {
            title: "Spacing rules",
            items: [
              "Do not follow the ball into a zone that is already crowded.",
              "Stay in your third unless the whole team shifts together.",
              "When in doubt, one player pushes forward and one stays back.",
              "Look for the empty space on your team's side before moving.",
            ],
          },
        ],
      },
      {
        slug: "the-three-channels",
        title: "The Three Channels",
        practice: { type: "tap-the-zone", prompt: "Tap the center channel", zones: "channels", answer: "center" },
        summary: "The field is also split left to right into three vertical channels.",
        body: "What Is a Channel\n\nA channel is a vertical lane that runs from your goal to the other team's goal. While thirds cut the field side to side, channels cut the field top to bottom.\n\nHow They Are Named\n\nThe three channels are the left channel, the center channel, and the right channel. They are named from the perspective of the team attacking.\n\nWhy Channels Are Different From Thirds\n\nThirds tell you how far up the field you are. Channels tell you how wide you are. A player in the left channel near their own goal is in the left channel of the defending third. Both things are true at the same time.\n\nWidth Changes Everything\n\nUsing all three channels forces the defense to spread out. When the defense spreads, gaps open up in the center. When the defense collapses into the center, the wide channels open up.",
        imageSrc: "/module-images/field-thirds-channels.png",
        imageAfterParagraph: 2,
        callouts: [
          {
            title: "Up and down",
            body: "Channels run from goal to goal, splitting the field into left, center, and right.",
          },
          {
            title: "Width matters",
            body: "Using all three channels makes your team hard to defend.",
          },
        ],
        table: {
          columns: ["Channel", "Where it is", "Who usually plays there"],
          rows: [
            ["Left", "Left side of the field", "Left back and left winger"],
            ["Center", "Middle of the field", "Central midfielders and striker"],
            ["Right", "Right side of the field", "Right back and right winger"],
          ],
        },
      },
      {
        slug: "left-channel",
        title: "The Left Channel",
        summary: "The left channel is used by the left back and left winger to stretch the defense.",
        body: "Who Plays Here\n\nThe left back and left winger are the main players in the left channel. They share the space, but they should not be in the same spot at the same time.\n\nWhen to Use Width\n\nStay wide when your team has the ball in the center. A wide player pulls a defender out of the middle and creates space for the striker or central midfielder.\n\nWhen to Cut Inside\n\nCut into the center only when a gap opens up. If you cut in too early, you take the space away from your central players and you are not in the left channel anymore.\n\nThe Left Back's Role\n\nWhen the left winger cuts inside, the left back can overlap into the left channel and deliver a cross. This movement confuses defenders because they do not know who to follow.",
        callouts: [
          {
            title: "Own your lane",
            body: "The left winger and left back share the left channel but should not crowd it.",
          },
          {
            title: "Go wide",
            body: "A wide player in the left channel pulls a defender away from the center.",
          },
        ],
        bullets: [
          {
            title: "Left channel rules",
            items: [
              "Stay wide when your team has the ball in the center.",
              "Support the left back when they push forward into your channel.",
              "Cut inside only when a clear gap opens up.",
              "Do not drift so far that you lose your connection to the left channel.",
            ],
          },
        ],
      },
      {
        slug: "right-channel",
        title: "The Right Channel",
        summary: "The right channel mirrors the left — your right back and right winger use it together.",
        body: "Who Plays Here\n\nThe right back and right winger work the right channel together. Like the left side, one should push forward while the other provides support or cover.\n\nThe Overlap Run\n\nWhen the right winger cuts inside toward the center, the right back can make an overlapping run into the right channel behind them. The defender has to choose between following the winger or tracking the right back. Either choice leaves someone open.\n\nWhen to Hold and When to Go\n\nIf the team is under pressure, the right back should hold their position and not push forward. If the team has the ball and is attacking, look for the right moment to overlap or join the attack.\n\nSupporting a Teammate\n\nIf the right winger has the ball wide and is 1v1, hold your run and give them a pass-back option. Do not run past them before they are ready to release the ball.",
        callouts: [
          {
            title: "Mirror the left",
            body: "The right side works the same way as the left — stretch the defense and overlap.",
          },
          {
            title: "Overlap chance",
            body: "When the right winger cuts inside, the right back can run into the space behind.",
          },
        ],
        bullets: [
          {
            title: "Right channel rules",
            items: [
              "Stay wide when the team attacks through the center.",
              "Overlap when the winger cuts inside and space opens up.",
              "Hold your run if the winger needs a pass-back option first.",
              "Track back quickly if your team loses the ball.",
            ],
          },
        ],
      },
      {
        slug: "center-channel",
        title: "The Center Channel",
        funFact: { title: "Pro fact", body: "In professional soccer, the team that wins more duels in Zone 14 — the space just outside the penalty box in the center channel — wins the match around 70% of the time. That number is why coaches and scouts obsess over controlling the center channel. Every game at every level, teams are fighting for this exact space." },
        summary: "The center channel is the most dangerous lane on the field — here is why pros fight for it every game.",
        body: "Why It Is the Most Dangerous\n\nThe center channel runs straight from one goal to the other. A player with the ball in the center has the best shooting angle, the most passing options, and the fastest path to goal. That is why every team in the world tries to control it.\n\nZone 14 Lives Here\n\nThe most dangerous spot in the entire center channel has a name: Zone 14. It is the area right in front of the penalty box — the space between the penalty arc and the top of the box. From Zone 14, a player can shoot, play a through ball, or slip a pass to either side of the penalty area. Scouts track how often players get into Zone 14 and what they do there. If you find Zone 14 in a game, something good is about to happen.\n\nHow to Attack Through the Center\n\nThe center is the most guarded lane on the field, so you cannot just dribble straight through it. Use combinations. A wall pass, a third-man run, or a quick one-two can open the center in a second. The striker holds their position as a target. Midfielders time their runs late so defenders do not pick them up early. Patience wins the center channel.\n\nHow to Protect the Center\n\nWhen the other team has the ball, your first job is to close the center. Force them wide where the shooting angle gets harder. Two defenders covering the center channel is almost always more important than one defender chasing the ball wide. The team that wins the center channel usually wins the game.",
        callouts: [
          {
            title: "Most dangerous",
            body: "The center channel leads straight to goal — the team that controls it usually wins the game.",
          },
          {
            title: "Zone 14",
            body: "The space just outside the penalty box in the center channel is called Zone 14 — pros fight to get there every game.",
          },
        ],
        bullets: [
          {
            title: "Playing through the center",
            items: [
              "Use a wall pass or one-two before trying to go central alone.",
              "The striker holds position in Zone 14 as a target for midfielders.",
              "Time your run late so defenders do not see you coming.",
              "When defending, close the center channel first before chasing wide.",
              "Two defenders in the center beats one defender everywhere.",
            ],
          },
        ],
      },
      {
        slug: "spacing-in-channels",
        title: "Spacing in Channels",
        comparison: {
          left: {
            label: "Bad Channel Spacing",
            items: [
              "Three players drift into the center channel.",
              "Left and right channels are empty.",
              "Defense packs the middle and blocks every passing lane.",
              "No width, no threat from the sides, no way through.",
            ],
          },
          right: {
            label: "Good Channel Spacing",
            items: [
              "One player holds each channel.",
              "Defense has to stretch across the full width.",
              "Gaps open in the center as defenders move wide.",
              "Ball can switch quickly from channel to channel.",
            ],
          },
        },
        practice: {
          type: "true-false",
          statement: "If three players are in the center channel, the defense has a harder job covering them.",
          answer: false,
          explanation: "Three players in the same channel actually makes the defense easier — they can mark everyone with fewer defenders. Width is what stretches the defense and creates gaps. Spread across all three channels and the defense has to cover the whole field.",
        },
        summary: "Use all three channels so the defense cannot block every option.",
        body: "What It Looks Like When a Team Uses All Three Channels\n\nWhen your team spreads into all three channels, the defense has to stretch to cover the width. That creates gaps. The wider your team plays, the harder it is for three or four defenders to cover everything at once.\n\nWhat Happens When Everyone Goes Central\n\nIf all your attacking players drift into the center channel, the defense can pack in and block every passing lane. The wide channels become completely empty. There is no width, no threat from the sides, and no way in.\n\nHow to Fix Bad Channel Spacing\n\nIf you notice your team is bunched in the middle, the simplest fix is for one player to push wide and hold the channel. That single movement stretches the defense and creates space for everyone else.",
        callouts: [
          {
            title: "Use the width",
            body: "When your team spreads into all three channels, the defense has to stretch too.",
          },
          {
            title: "Do not crowd",
            body: "Three players in the center channel makes it easier for the defense, not harder.",
          },
        ],
        table: {
          columns: ["Situation", "Good spacing", "Bad spacing"],
          rows: [
            ["Ball in center", "Wide players stay wide in their channels.", "Everyone cuts inside to help."],
            ["Ball on the left", "Right player holds the right channel.", "Right player drifts left to watch."],
            ["Team attacking", "Players spread across all three channels.", "Everyone crowds around the ball."],
          ],
        },
      },
      {
        slug: "what-third-are-you-in",
        title: "What Third Are You In?",
        positionContent: {
          prompt: "Select your position — find out which thirds you play in.",
          positions: [
            {
              id: "GK", label: "GK", number: 1,
              body: "You almost always operate in the defending third. Your whole game is built around protecting that zone. Stay near your line, command the box, and organize your defense. The only time you enter the middle third is on a goal kick buildup — and you get back as soon as possible.",
              bullets: ["Command the box in the defending third at all times.", "Push up to the edge of your penalty area when your team attacks.", "Get back to your line the moment the ball returns to your defending third."],
            },
            {
              id: "RB", label: "RB", number: 2,
              body: "You split your time between the defending third and the middle third. When your team defends, hold the right side of the defending third and track the left winger. When your team attacks, push into the middle third. On a good overlap run you might enter the attacking third to deliver a cross — then sprint back.",
              bullets: ["Defending third when the opponent attacks — track the winger.", "Middle third when your team has the ball — stay connected.", "Attacking third only on overlap runs — recover immediately after."],
            },
            {
              id: "CB", label: "CB", number: 4,
              body: "You live in the defending third. Your job is to protect the space in front of the goal, win headers, and mark the striker. You can step briefly into the middle third to play out from the back — but never get caught high up the field. Stay organized and keep your defensive line.",
              bullets: ["Stay in the defending third and hold your position.", "Step into the middle third only to receive the ball from the goalkeeper.", "Never push into the attacking third during open play."],
            },
            {
              id: "LB", label: "LB", number: 3,
              body: "You split your time between the defending third and the middle third, just like the right back on the opposite side. When defending, stay in the defending third and track the right winger. When your team attacks, push into the middle third and join the play. Attack the space the wide winger leaves.",
              bullets: ["Defending third when marking the winger.", "Middle third when your team builds up — offer a wide passing option.", "Attacking third on overlap runs — deliver and recover."],
            },
            {
              id: "CDM", label: "CDM", number: 6,
              body: "You are the defensive wall of the middle third. Your job is to sit between the midfielders and defenders, win the ball, and protect the center. You rarely enter the attacking third — your value comes from owning the middle third and cleaning up anything that breaks through.",
              bullets: ["Own the middle third — this is your zone.", "Cover the space in front of the center backs.", "Only enter the attacking third on set pieces or rare chances — recover immediately."],
            },
            {
              id: "CM", label: "CM", number: 8,
              body: "You work the middle third from end to end. You support the attack and track back to defend. When your team has the ball, push toward the attacking third and arrive late into the box. When your team loses the ball, get back into the middle third and rebuild the shape.",
              bullets: ["Middle third is your base — you leave it to attack or defend.", "Push into the attacking third on late runs without the ball.", "When the team loses the ball, your first job is to win it back in the middle third."],
            },
            {
              id: "CAM", label: "CAM", number: 10,
              body: "You operate on the edge between the middle third and attacking third — right in Zone 14 territory. Your job is to receive the ball in dangerous areas, turn quickly, and create chances. When your team defends, track back to the middle third and press to help win the ball.",
              bullets: ["Live on the line between the middle and attacking third.", "Zone 14 — the space just outside the penalty box — is your main area.", "Track back to the middle third when the team defends."],
            },
            {
              id: "LW", label: "LW", number: 11,
              body: "You spend most of your time in the attacking third, staying wide on the left side. When the team has the ball, hold high and be a threat. When the team loses the ball, press from the front and then track back to the middle third if the opponent builds quickly.",
              bullets: ["Attacking third is your home — stay wide and high.", "Press from the front when the team loses the ball.", "Drop to the middle third only if the opponent builds quickly past your press."],
            },
            {
              id: "RW", label: "RW", number: 7,
              body: "You stay high in the attacking third, holding the right side wide. Your job is to stretch the defense, make runs behind the right back, and deliver or cut inside. When your team loses the ball, press immediately — then track back to the middle third if needed.",
              bullets: ["Attacking third is your zone — stay high and wide.", "Make runs behind the right back when the ball is played forward.", "Press the nearest defender when the team loses the ball."],
            },
            {
              id: "ST", label: "ST", number: 9,
              body: "You are the furthest forward player and you live in the attacking third. Make runs behind defenders, hold the ball up under pressure, and finish chances. You can drop into the middle third to receive and turn — but always push back into the attacking third to be a goal threat.",
              bullets: ["Attacking third is your zone — stay central and be a constant threat.", "Drop into the middle third to receive the ball and turn.", "Always push back into the attacking third — you are the team's finisher."],
            },
          ],
        },
        practice: {
          type: "true-false",
          statement: "A striker should always stay in the attacking third no matter where the ball is.",
          answer: false,
          explanation: "Strikers can drop into the middle third to receive a pass, hold the ball, or help the team keep possession. Where you should be depends on the ball, your team's shape, and what the game needs — not just your position name.",
        },
        summary: "Learn to quickly identify which third you are in during a game.",
        body: "Ask Yourself Before Every Touch\n\nBefore you receive the ball, ask yourself: what third am I in right now? This takes one second and changes your whole decision.\n\nWhat That Changes\n\nIf you are in the defending third, your first job is safety. Clear the danger, play a simple pass, do not risk losing the ball near your goal. If you are in the middle third, your job is to connect play and move the ball forward. If you are in the attacking third, look to shoot, cross, or play a final pass.\n\nExamples by Position\n\nA center back receiving the ball in the defending third should play it simple to a midfielder. That same center back arriving in the attacking third on a corner kick can attack the ball and head it on target. A striker dropping into the middle third to receive a pass should turn quickly and drive forward into the attacking third.",
        callouts: [
          {
            title: "Ask yourself",
            body: "Before you touch the ball, ask: what third am I in right now?",
          },
          {
            title: "Third = job",
            body: "Your third tells you whether your job is to protect, connect, or attack.",
          },
        ],
        bullets: [
          {
            title: "Quick check by position",
            items: [
              "Defender in the defending third — stay, protect, and clear.",
              "Midfielder in the middle third — connect, support, and look forward.",
              "Forward in the attacking third — run, threaten, and finish.",
              "Any player in the wrong third — get back to your zone quickly.",
            ],
          },
        ],
      },
      {
        slug: "what-channel-are-you-in",
        title: "What Channel Are You In?",
        positionContent: {
          prompt: "Select your position — find out which channel is yours.",
          positions: [
            {
              id: "GK", label: "GK", number: 1,
              body: "You operate in the center channel. Stay central to protect the goal. You rarely need to go wide — only to sweep a ball that has gone outside your box. The center channel is your zone to command at all times.",
              bullets: ["Center channel — stay central and protect the goal.", "Only go wide to sweep a ball outside the penalty box.", "Organize your defense to protect the center channel."],
            },
            {
              id: "RB", label: "RB", number: 2,
              body: "You own the right channel. When defending, track the left winger into your channel and stop crosses. When attacking, push up the right channel and look to deliver. If the right winger cuts inside, the right channel belongs to you — overlap and get to the byline.",
              bullets: ["Right channel is yours — own it going both ways.", "When the winger cuts inside, the channel opens up for your overlap.", "Defend the right channel first — stop crosses before they start."],
            },
            {
              id: "CB", label: "CB", number: 4,
              body: "You cover the center channel. Your job is to block passes played through the middle and stop forwards getting in behind. Never follow an opponent into a wide channel — hold the center and let your fullbacks deal with wide players.",
              bullets: ["Center channel — hold it and block through balls.", "Do not follow opponents into the wide channels.", "Stay central and let the fullbacks cover wide."],
            },
            {
              id: "LB", label: "LB", number: 3,
              body: "You own the left channel. When defending, track the right winger who attacks your channel. When attacking, push up and deliver crosses from the left. If the left winger cuts inside into the center channel, the left channel opens up — that space is yours to attack.",
              bullets: ["Left channel is yours — defend it and attack it.", "When the left winger cuts inside, the left channel is open for you.", "Defend the channel first — track the winger before you think about attacking."],
            },
            {
              id: "CDM", label: "CDM", number: 6,
              body: "You protect the center channel in front of the defense. Block passing lanes through the middle, step to the ball to press, and get back into the center channel quickly if you are drawn wide. The center channel is the most dangerous zone — you are its guardian.",
              bullets: ["Center channel — you are its protector.", "Block central passing lanes and win the ball.", "If you are drawn wide, get back to the center channel immediately."],
            },
            {
              id: "CM", label: "CM", number: 8,
              body: "You move through all three channels — that is what makes a good center midfielder so hard to mark. Your base is the center channel, but when the ball goes wide you should often follow it into that channel to give a passing option or create a combination. When the opposite winger has the ball, you can drift to the far side to be ready for a switch. Read what the team needs and fill the space.",
              bullets: ["Center channel is your starting point — but do not stay there rigidly.", "Move into wide channels when the ball is there and a combination is possible.", "When the ball is on one side, you might drift to the other side to receive the switch."],
            },
            {
              id: "CAM", label: "CAM", number: 10,
              body: "You operate in the center channel just outside the penalty box — this is Zone 14. From there you can shoot, play a through ball, or slide a pass to either winger. Receive the ball in the center channel and use your vision to find the right option.",
              bullets: ["Center channel — Zone 14 is your main area.", "Use your position in the center to play left, right, or straight at goal.", "Receive, turn, and make something happen — that is your job in this channel."],
            },
            {
              id: "LW", label: "LW", number: 11,
              body: "The left channel is your home — you own it. Your default is wide, stretching the defense and making runs down the left side. There are moments you move inside — when the ball switches to the far right and you drift centrally to be a switch option, or when you see a gap to cut into. These moments happen and they can be devastating. But they are exceptions. Get to the left channel first and be a threat there. Move inside when the timing is right.",
              bullets: ["Ball on the left — be wide in the left channel and make yourself a threat.", "You can cut inside when a real gap opens up — but do not drift in just to follow the ball.", "The left channel is yours. Hold it so the defense has to deal with you."],
            },
            {
              id: "RW", label: "RW", number: 7,
              body: "The right channel is your home — you own it. Your default is wide on the right side, stretching the defense and attacking down the line. There are moments you move inside — when the ball is on the far left and you drift centrally to be a switch option, or when you see a lane to cut into and shoot. These moments happen and they are dangerous. But they are exceptions. Start wide, be a threat in the right channel, and move inside when the moment is right.",
              bullets: ["Ball on the right — be wide in the right channel and make yourself a threat.", "You can cut inside when a real gap opens up — but do not drift in just to follow the ball.", "The right channel is yours. Hold it so the defense has to deal with you."],
            },
            {
              id: "ST", label: "ST", number: 9,
              body: "The center channel is your home — that is where you are most dangerous and where you live. Your job is to be a target in the middle, hold up the ball, and score. Sometimes you pull wide to drag a center back out of position and open space in the middle. A run into a wide channel can create a gap for a teammate to run into. These moments are real and useful — but they are not your default. Your default is central. Be in the center channel and make the defense deal with you there first.",
              bullets: ["Center channel is your home — be there and be a threat.", "Pulling wide can drag a defender and open space, but do it with a purpose.", "When you go wide, get back central quickly — the center is where you score from."],
            },
          ],
        },
        summary: "Your channel tells you how wide you are and who your nearest support is.",
        body: "How to Identify Your Channel\n\nGlance at the nearest sideline. If you are right next to it, you are in a wide channel. If you are in the center of the field, you are in the center channel. This is a quick check you can do in less than a second.\n\nWhy It Matters for Support\n\nKnowing your channel tells you who should be nearby. In the left channel, your support usually comes from the left back behind you or the center midfielder to your right. In the center channel, you have options on both sides.\n\nWhen It Is Okay to Switch Channels\n\nYou can move into a different channel when space opens up there and your original channel is covered by a teammate. Do not switch channels just to follow the ball. Switch because there is a better position to be in.",
        callouts: [
          {
            title: "Left, center, right",
            body: "At any moment you should know if you are in the left, center, or right channel.",
          },
          {
            title: "Stay in your lane",
            body: "Staying in your channel gives your team predictable width and spacing.",
          },
        ],
        bullets: [
          {
            title: "Channel awareness habits",
            items: [
              "Glance at the sideline to quickly know how wide you are.",
              "If a teammate is already in your channel, one of you should adjust.",
              "Call your channel so teammates know where you are.",
              "Only switch channels when space opens up and your zone is covered.",
            ],
          },
        ],
      },
      {
        slug: "moving-with-the-ball",
        title: "Moving as the Ball Moves",
        positionContent: {
          prompt: "Select your position — find out how you shift when the ball moves.",
          positions: [
            {
              id: "GK", label: "GK", number: 1,
              body: "When the ball moves to the left, shift slightly left to cover the near post. When it moves right, shift right. When your team attacks and the ball is in the opponent's third, push to the edge of your penalty area so you can sweep long balls. When the ball returns to your defending third, get back to your line quickly.",
              bullets: ["Shift left or right to stay on the line between ball and goal.", "Push to the edge of your box when the team attacks.", "Get back to your line immediately when the ball returns."],
            },
            {
              id: "RB", label: "RB", number: 2,
              body: "When the ball goes to the right side, push forward in the right channel and become an attacking option. When the ball goes to the left side, tuck in toward the center and cover behind the center backs. When the team attacks, push your line forward. When the team loses the ball, sprint back to the right channel immediately.",
              bullets: ["Ball on the right — push forward and join the attack.", "Ball on the left — tuck into center and cover the right center back.", "Ball lost — sprint back into the right channel first."],
            },
            {
              id: "CB", label: "CB", number: 4,
              body: "When the ball moves to one side, the nearest center back pushes out to cover, and the other shifts to hold the center. When your team attacks, push your line forward to compress space. Never push so high that a long ball over the top catches you — stay connected to your goalkeeper.",
              bullets: ["Nearest CB covers wide, other CB holds the center.", "Push the line forward when the team attacks.", "Never get caught too high — the long ball is your biggest danger."],
            },
            {
              id: "LB", label: "LB", number: 3,
              body: "When the ball goes to the left side, push forward in the left channel and support the attack. When the ball goes to the right side, tuck in toward the center and cover behind the center backs. When the team attacks, join the play. When the ball is lost, recover into the left channel immediately.",
              bullets: ["Ball on the left — push forward and become an option.", "Ball on the right — tuck into center and cover.", "Ball lost — recover into the left channel right away."],
            },
            {
              id: "CDM", label: "CDM", number: 6,
              body: "When the ball moves to either side, shift with it — but stay slightly behind the play. You are the defensive screen. When the team attacks, hold your position in the middle third and do not push into the attacking third. Your job is to be the first to win the ball back when it is lost.",
              bullets: ["Shift with the ball but stay behind the action.", "Hold the middle third when the team attacks — do not push up.", "When the ball is lost, you are the first to press and win it back."],
            },
            {
              id: "CM", label: "CM", number: 8,
              body: "When the ball goes left, move left to support. When it goes right, move right. When the team attacks, join the attack and time your runs to arrive late into the box. When the team loses the ball, track back into the middle third quickly. You run all game long — that is the job.",
              bullets: ["Shift with the ball — left and right, all game.", "Join the attack with late runs into the box.", "Track back first when the ball is lost — your job never stops."],
            },
            {
              id: "CAM", label: "CAM", number: 10,
              body: "When the ball is wide, move to the inside of that channel so you are available for a layoff into the center. When the ball is in the center, drive toward the attacking third. When the team loses the ball, press the nearest opponent immediately — your press from the front sets the tone for the whole team.",
              bullets: ["Ball wide — move inside and be available for the layoff.", "Ball central — drive into the attacking third.", "Ball lost — press immediately and set the team's defensive tone."],
            },
            {
              id: "LW", label: "LW", number: 11,
              body: "The left channel is your home and that does not change when the ball moves. When the ball is in the left channel with you, drive forward — attack the space, look to cross or cut inside, and be a threat. When the ball switches to the right side, hold your width in the left channel. Do not follow the ball centrally. Your job is to stretch the defense across the whole field so the right side has room. Stay wide, stay patient, and be ready when the switch comes back to you. When the team loses the ball, press the nearest defender immediately — your pressing from the front sets the team's defensive shape.",
              bullets: ["Ball on the left — attack, drive forward, and be dangerous in your channel.", "Ball on the right — hold the left channel wide to stretch the defense.", "Do not drift centrally just to follow the ball — hold your width.", "Ball lost — press immediately and trigger the team's defensive press."],
            },
            {
              id: "RW", label: "RW", number: 7,
              body: "The right channel is your home — that is where you do your damage. When the ball is on the right with you, attack forward. Look to deliver a cross, cut inside, or beat your defender one-on-one. When the ball goes to the left side, hold your width in the right channel. Stay wide and stay ready. You are there as the switch option — when the ball comes back to the right, you need to be in position to receive it and attack. If you drift inside to follow the ball, you lose your width and the whole right side collapses in. When the team loses the ball, press the nearest defender — you and the left winger are the first two defenders on the team.",
              bullets: ["Ball on the right — attack forward in your channel.", "Ball on the left — hold the right channel wide and be ready for the switch.", "Do not drift inside just because the ball is far away — your width matters.", "Ball lost — press immediately with the left winger."],
            },
            {
              id: "ST", label: "ST", number: 9,
              body: "When the ball is in the defending third, do not track all the way back. Hold your position in the middle or attacking third and pin the center backs. You are the long ball option — if you drop back there is no one for the goalkeeper or defenders to play to. When the ball moves into the middle third, drop your line slightly and show for the pass. When it enters the attacking third, time your run — arrive as the ball arrives, not before. If you sprint too early, the defender catches you. Good timing beats pace every time. You can occasionally pull wide to drag a center back out of position and open the center, but your default is central. Get back there fast if you do move wide.",
              bullets: ["Ball in defending third — stay in the middle or attacking third and pin the defenders.", "Do not drop into your own half — stay as the long ball target.", "Ball in middle third — show for the pass and link the play.", "Ball in attacking third — time your run late so you arrive with the ball."],
            },
          ],
        },
        coachSays: "When the ball moves, everyone moves. That is what separates a team from eleven players just standing around.",
        practice: {
          type: "what-would-you-do",
          scenario: "The ball is on the left side in your team's attacking third. You are the right back. What do you do?",
          choices: [
            {
              label: "Sprint across to the left side to help the attack",
              response: "Moving all the way left might feel helpful, but it leaves the entire right channel open. If the ball switches quickly, the opponent can attack behind you with no one there to stop them.",
            },
            {
              label: "Hold the right channel and push slightly forward",
              response: "Exactly right. When your team attacks down the left, you stay wide in the right channel but move forward a little. You give the team width on the far side and a target if the ball switches. That is how a team keeps its shape while attacking.",
            },
            {
              label: "Stay back in the defending third just in case",
              response: "Staying back is safe, but it leaves the right channel empty and gives your team no option on that side. If you hold your position in the right channel and push up slightly, you are still available if needed without abandoning your zone.",
            },
          ],
        },
        summary: "When the ball shifts to a new third or channel, your whole team shifts with it.",
        body: "The Ball Is Your Reference\n\nThe ball tells you whether to push forward, hold your position, or drop back. Every player on the team reads the same ball, so the whole team moves together.\n\nShifting When the Ball Goes Wide\n\nWhen the ball moves to the left channel, your whole team shifts left. The center players cover the space between the left and center channels. The players on the right tuck in to cover the center. The team compresses toward the ball without leaving the far side completely open.\n\nShifting When the Ball Goes Forward\n\nWhen the ball enters the attacking third, push your line forward to stay close and support. Do not stay back if the rest of your team is attacking. When the ball drops into the defending third, drop and compress quickly. Get organized before the opponent can play forward.\n\nStay Connected\n\nAlways keep yourself connected to the nearest two teammates. If there is a big gap between you and your teammates, the opponent can pass through that gap. Close the spaces and shift as a unit.",
        callouts: [
          {
            title: "Team moves together",
            body: "When the ball moves, every player adjusts — not just the one closest to the ball.",
          },
          {
            title: "Ball is the reference",
            body: "The ball tells you whether to push forward, hold, or drop back.",
          },
        ],
        bullets: [
          {
            title: "Shifting rules",
            items: [
              "When the ball goes left, the whole team shifts left together.",
              "When the ball enters the attacking third, push your line forward.",
              "When the ball enters the defending third, drop back and get organized.",
              "Always stay connected to the two nearest teammates with no big gaps.",
            ],
          },
        ],
        table: {
          columns: ["Ball location", "Your team should…"],
          rows: [
            ["Defending third", "Drop back, compress together, and stay organized."],
            ["Middle third", "Stay connected, look to transition, and move the ball forward."],
            ["Attacking third", "Push forward, stay wide, and create chances."],
            ["Left channel", "Shift left — right side covers the center."],
            ["Right channel", "Shift right — left side covers the center."],
          ],
        },
      },
    ],
    sections: [
      {
        slug: "field-thirds",
        title: "Module 1: Field Thirds",
        summary: "Defensive, middle, and attacking thirds from a player point of view.",
        lessonSlugs: [
          "the-three-thirds",
          "attacking-third",
          "middle-third",
          "defending-third",
          "spacing-in-thirds",
        ],
      },
      {
        slug: "field-channels",
        title: "Module 2: Field Channels",
        summary: "Left, center, and right channels and how they affect spacing.",
        lessonSlugs: [
          "the-three-channels",
          "left-channel",
          "right-channel",
          "center-channel",
          "spacing-in-channels",
        ],
      },
      {
        slug: "where-you-should-be",
        title: "Module 3: Where You Should Be",
        summary: "How to decide your position as the ball, teammates, and opponents move.",
        lessonSlugs: [
          "what-third-are-you-in",
          "what-channel-are-you-in",
          "moving-with-the-ball",
        ],
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
        slug: "kickoff-rules",
        title: "Kickoff Rules",
        summary: "How kickoffs start the game, restart after goals, and what players must do.",
        body: "What A Kickoff Is\n\nA kickoff starts the game, starts the second half, and restarts play after a goal. It happens from the center mark.\n\nHow It Happens\n\nThe ball is placed on the center mark. Each team must be in its own half. The team not taking the kickoff must stay outside the center circle until the ball is kicked.\n\nThe Ball Can Go Any Direction\n\nThe player taking the kickoff can pass forward, sideways, or backward. The ball is in play when it is kicked and clearly moves.\n\nAfter A Goal\n\nAfter one team scores, the other team gets the kickoff. Use that moment to reset your shape and remember the score does not change your next job.\n\nCan You Score From Kickoff\n\nA goal can be scored directly against the opponent from a kickoff. But the smarter play for young teams is usually to keep the ball and connect the first pass.\n\nWhat The Referee Checks\n\nThe referee checks that the ball is on the center mark, players are in the correct halves, opponents are outside the center circle, and the ball clearly moves.\n\nWhat Players Can Ask\n\nIf you are confused, ask calmly: Is it our kickoff? Do we wait for the whistle? Are we in the right half?",
        callouts: [
          {
            title: "Big idea",
            body: "A kickoff starts play from the center mark.",
          },
          {
            title: "Reset fast",
            body: "After a goal, get back into shape before the kickoff.",
          },
        ],
        bullets: [
          {
            title: "Legal kickoff checklist",
            items: [
              "Ball is on the center mark.",
              "Each team is in its own half.",
              "Opponents are outside the center circle.",
              "The ball is kicked and clearly moves.",
            ],
          },
          {
            title: "Player habits",
            items: [
              "Know if your team is kicking off or defending.",
              "Look for a simple first pass.",
              "Do not enter the other half early.",
              "Listen for the whistle if the referee wants one.",
            ],
          },
        ],
        table: {
          columns: ["Moment", "Who kicks", "What to remember"],
          rows: [
            ["Start of game", "Team chosen by coin toss or referee process.", "Wait until the referee starts play."],
            ["Start of second half", "Usually the other team from the first half.", "Reset shape before the kick."],
            ["After a goal", "Team that gave up the goal.", "Do not argue; get ready."],
          ],
        },
      },
      {
        slug: "throw-in-rules",
        title: "Throw-In Rules",
        summary: "When throw-ins happen, how to throw legally, and how teammates should help.",
        body: "What A Throw-In Is\n\nA throw-in restarts play when the whole ball crosses the sideline, either on the ground or in the air.\n\nWho Gets The Throw\n\nThe team that did not touch the ball last gets the throw-in. If the ball touches a player and goes out, the other team throws it in.\n\nHow To Throw Legally\n\nFace the field. Use both hands. Bring the ball from behind and over your head. Keep part of both feet on the line or outside the field. Do not jump while throwing.\n\nWhere To Throw From\n\nThe throw should happen from the spot where the ball went out. The referee may allow a small difference, but players should not steal big yards.\n\nOffside Reminder\n\nA player cannot be offside directly from a throw-in. But after a teammate touches the ball, offside can matter again.\n\nWhat The Referee Checks\n\nThe referee looks for the correct team, correct spot, both hands, ball from behind the head, and legal feet.\n\nWhat Players Can Ask\n\nAsk calmly: Whose throw? From here? Ref, can I go now?",
        callouts: [
          {
            title: "Big idea",
            body: "A throw-in happens when the whole ball crosses the sideline.",
          },
          {
            title: "Help teammate",
            body: "Do not hide; move to give the thrower an easy option.",
          },
        ],
        bullets: [
          {
            title: "Legal throw checklist",
            items: [
              "Face the field.",
              "Use both hands.",
              "Throw from behind and over the head.",
              "Keep part of both feet on or behind the sideline.",
            ],
          },
          {
            title: "Teammate jobs",
            items: [
              "One player checks short.",
              "One player can run into space.",
              "One player stays behind for safety.",
              "Talk early so the thrower has choices.",
            ],
          },
        ],
        table: {
          columns: ["Referee checks", "Legal", "Problem"],
          rows: [
            ["Feet", "Both feet have some contact on or behind the line.", "Jumping or stepping fully onto the field."],
            ["Hands", "Both hands throw together.", "One-handed throw."],
            ["Ball path", "From behind and over the head.", "Side-arm or from the chest."],
            ["Spot", "Near where the ball went out.", "Stealing a lot of distance."],
          ],
        },
      },
      {
        slug: "corner-kick-rules",
        title: "Corner Kick Rules",
        summary: "When corners happen, how to restart legally, and what attackers and defenders do.",
        body: "What A Corner Kick Is\n\nA corner kick happens when the defending team touches the ball last and the whole ball crosses their own end line without a goal.\n\nWhere The Ball Goes\n\nThe ball is placed in the corner area on the side closest to where it went out. The attacking team takes the kick.\n\nHow The Ball Becomes Live\n\nThe ball is in play when it is kicked and clearly moves. It does not need to leave the corner area.\n\nShort Or Long Corner\n\nA long corner sends the ball toward goal. A short corner is a pass to a nearby teammate. Both are legal if the ball clearly moves.\n\nCan You Score From A Corner\n\nYes. A goal can be scored directly from a corner kick against the opponent.\n\nWhat Defenders Must Do\n\nDefenders must give the required distance. In many games that means 10 yards, but youth field rules can use different distances. Listen to the referee.\n\nWhat The Referee Checks\n\nThe referee checks that it is the correct restart, the ball is in the corner area, defenders are the correct distance, and the ball clearly moves.\n\nWhat Players Can Ask\n\nAsk calmly: Which corner? Can I take it short? Ref, is that enough distance?",
        callouts: [
          {
            title: "Big idea",
            body: "A corner is an attacking restart from the corner area.",
          },
          {
            title: "Be ready",
            body: "Attackers move before the kick; defenders mark and protect goal.",
          },
        ],
        bullets: [
          {
            title: "Attacking jobs",
            items: [
              "Decide short or long before the kick.",
              "One player can come short.",
              "Players near goal should move, not stand still.",
              "Be ready for rebounds outside the box.",
            ],
          },
          {
            title: "Defending jobs",
            items: [
              "Know who you are marking.",
              "Protect dangerous space near goal.",
              "Do not stand too close to the kick.",
              "Clear the ball wide or upfield when possible.",
            ],
          },
        ],
        table: {
          columns: ["Corner type", "What happens", "Player reminder"],
          rows: [
            ["Short corner", "Kick is passed to a nearby teammate.", "The ball must clearly move."],
            ["Long corner", "Kick goes toward goal or far post.", "Attack the ball with timing."],
            ["Low corner", "Kick is played on the ground.", "Be ready for a first-time shot or pass."],
          ],
        },
      },
      {
        slug: "free-kick-rules",
        title: "Free Kick Rules",
        summary: "Direct and indirect free kicks, walls, quick kicks, ceremonial kicks, and referee checks.",
        body: "What A Free Kick Is\n\nA free kick restarts play after a foul or some rule mistakes. The referee gives the kick to the team that was fouled or treated unfairly by the rule mistake.\n\nDirect Free Kick\n\nA direct free kick can go straight into the opponent's goal. Many contact fouls are direct free kicks, like tripping, kicking, pushing, holding, or a careless tackle.\n\nIndirect Free Kick\n\nAn indirect free kick must touch another player before a goal can count. The referee usually raises one arm to show it is indirect.\n\nQuick Free Kick\n\nSometimes the team can kick quickly before the defense is organized. But if the referee says wait for the whistle, then the team must wait.\n\nCeremonial Free Kick\n\nA ceremonial free kick is when the referee manages the distance, moves a wall, or tells players to wait for the whistle. This often happens near goal.\n\nThe Wall\n\nDefenders may make a wall, but they must be the correct distance away. Players should not creep forward before the kick.\n\nWhat The Referee Checks\n\nThe referee checks the spot of the kick, whether it is direct or indirect, whether the ball is still before the kick, whether defenders are the correct distance, and whether the kicker waited if told to wait.\n\nWhat Players Can Ask\n\nAsk calmly: Ref, direct or indirect? Wait for whistle? Can we go quick? Is the wall back far enough?",
        callouts: [
          {
            title: "Big idea",
            body: "Know if the free kick is direct or indirect before you shoot.",
          },
          {
            title: "Ask clearly",
            body: "Direct or indirect? Wait for whistle? Those are smart questions.",
          },
        ],
        bullets: [
          {
            title: "Direct free kick clues",
            items: [
              "Usually for contact fouls.",
              "Can score straight into the opponent's goal.",
              "If it happens by the defense in their own penalty area, it may become a penalty kick.",
            ],
          },
          {
            title: "Indirect free kick clues",
            items: [
              "Referee raises one arm.",
              "Another player must touch the ball before a goal can count.",
              "Can happen for some goalkeeper or restart rule mistakes.",
            ],
          },
          {
            title: "Legal restart checklist",
            items: [
              "Ball is stopped.",
              "Kick is from the correct spot.",
              "Defenders give the required distance.",
              "If the referee says wait, wait for the whistle.",
            ],
          },
        ],
        table: {
          columns: ["Free kick type", "Can score directly?", "What players should ask"],
          rows: [
            ["Direct", "Yes, into the opponent's goal.", "Ref, is it direct?"],
            ["Indirect", "No, another player must touch it.", "Ref, is your arm up?"],
            ["Quick", "Depends if direct or indirect.", "Can we go?"],
            ["Ceremonial", "Depends if direct or indirect.", "Wait for whistle?"],
          ],
        },
      },
      {
        slug: "penalty-kick-rules",
        title: "Penalty Kick Rules",
        summary: "When penalties happen, where players stand, and what the referee watches.",
        body: "What A Penalty Kick Is\n\nA penalty kick happens when a defending player commits a direct-free-kick foul inside their own penalty area.\n\nWhere It Happens\n\nThe ball is placed on the penalty mark. One kicker takes the kick. The goalkeeper defends the goal.\n\nWhere Everyone Stands\n\nAll players except the kicker and goalkeeper must stay outside the penalty area, outside the penalty arc, behind the penalty mark, and on the field until the kick is taken.\n\nGoalkeeper Rules\n\nThe goalkeeper must stay on the goal line, facing the kicker, until the ball is kicked. Rules can be strict here, so goalkeepers should listen to the referee.\n\nThe Kicker\n\nThe kicker may shoot when the referee signals. The ball is in play when it is kicked and clearly moves forward.\n\nRebounds\n\nIf the goalkeeper saves it or the ball hits the post and comes back, players can usually play the rebound after the kick. If the kicker touches it again before anyone else, that is not allowed.\n\nWhat The Referee Checks\n\nThe referee checks the ball placement, goalkeeper position, kicker readiness, other players outside the area, and whether players enter early.\n\nWhat Players Can Ask\n\nAsk calmly: Ref, wait for whistle? Where should we stand? Can we follow the rebound?",
        callouts: [
          {
            title: "Big idea",
            body: "A penalty is for a direct-free-kick foul by the defense inside the box.",
          },
          {
            title: "Stay out",
            body: "Everyone except the kicker and goalkeeper waits outside until the kick.",
          },
        ],
        bullets: [
          {
            title: "Kicker habits",
            items: [
              "Wait for the referee's signal.",
              "Know where you want to shoot.",
              "Do not touch the ball twice before another player touches it.",
              "Be ready for a rebound if it is legal to play.",
            ],
          },
          {
            title: "Other player habits",
            items: [
              "Stay outside the penalty area and arc.",
              "Stay behind the penalty mark.",
              "Do not run in early.",
              "React after the ball is kicked.",
            ],
          },
        ],
        table: {
          columns: ["Person", "Legal action", "Referee watches for"],
          rows: [
            ["Kicker", "Waits for whistle and kicks forward.", "Double touch or illegal feint."],
            ["Goalkeeper", "Starts on the goal line.", "Leaving too early."],
            ["Other players", "Wait outside until the kick.", "Entering early."],
            ["Referee", "Signals when ready.", "Fair and legal restart."],
          ],
        },
      },
      {
        slug: "dropped-ball-rules",
        title: "Dropped Ball Rules",
        summary: "When dropped balls happen, who gets the ball, and how players should restart fairly.",
        body: "What A Dropped Ball Is\n\nA dropped ball is a restart when the referee stops play and there is no normal restart like a throw-in, corner, goal kick, free kick, or penalty.\n\nCommon Reasons\n\nDropped balls can happen after an injury stoppage, outside interference, a problem on the field, or when the ball touches the referee and changes possession, starts a promising attack, or goes into the goal.\n\nWho Gets The Ball\n\nIf play is stopped inside the penalty area, the dropped ball usually goes to the goalkeeper. Outside the penalty area, it usually goes to a player from the team that last touched the ball where it was last touched.\n\nOther Players Give Space\n\nAll other players must be away from the dropped ball. A common distance is 4 meters. Players should not crowd the referee.\n\nWhen The Ball Is In Play\n\nThe ball is in play when it touches the ground. The receiving player should wait for the drop.\n\nCan You Score From A Dropped Ball\n\nA player cannot score directly from a dropped ball without the ball touching at least two players. If it goes straight into a goal, the restart changes.\n\nWhat The Referee Checks\n\nThe referee checks why play stopped, who should receive the ball, where the ball should be dropped, whether other players are far enough away, and that the ball touches the ground first.\n\nWhat Players Can Ask\n\nAsk calmly: Ref, whose ball? Do we need to back up? Is it dropped to the keeper? Where should we stand?",
        callouts: [
          {
            title: "Big idea",
            body: "A dropped ball is used when the referee stopped play without a normal restart.",
          },
          {
            title: "Be fair",
            body: "Do not crowd the referee or steal the dropped ball.",
          },
        ],
        bullets: [
          {
            title: "Dropped ball can happen when",
            items: [
              "A player is injured and play must stop.",
              "Something outside the game interferes.",
              "The ball hits the referee and changes the play.",
              "The referee must stop play but no team committed a normal foul.",
            ],
          },
          {
            title: "Player habits",
            items: [
              "Listen for whose ball it is.",
              "Back up if the referee tells you.",
              "Let the ball touch the ground.",
              "Restart calmly and fairly.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Who usually gets it", "Player reminder"],
          rows: [
            ["Stopped in penalty area", "Goalkeeper.", "Give the goalkeeper space."],
            ["Stopped outside penalty area", "Team that last touched it.", "Listen for the referee's direction."],
            ["Ball hits referee and changes play", "Team based on the law and location.", "Do not argue; reset quickly."],
            ["Injury stoppage", "Depends where and who had it.", "Safety comes first."],
          ],
        },
      },
      {
        slug: "our-kickoff-strategy",
        title: "Our Kickoff Strategy",
        summary: "Our safe kickoff plan: play back to the CM, then into the far corner-flag space.",
        body: "Our Kickoff Plan\n\nOn our kickoff, we are not trying to dribble through the other team right away. We want a safe, organized start.\n\nStep 1: Play Back To The CM\n\nThe first pass goes back to a center midfielder. This gives the team a cleaner angle and keeps us from forcing a risky pass straight into pressure.\n\nStep 2: CM Plays To The Corner-Flag Space\n\nThe center midfielder looks to play the ball toward the other team's corner-flag space. This is a safe area because it is far away from our goal and hard for the other team to turn into a quick counterattack.\n\nWhy We Do It\n\nOur research and team plan say this is a safe kickoff choice for us. If the other team wins it, they usually win it near their own corner instead of near our goal.\n\nWhat Everyone Else Does\n\nPlayers must be ready to run after the ball, press, and keep the other team pinned on that side. The kick is not finished after the long ball. The next job is pressure and support.\n\nIf The Referee Makes Us Wait\n\nWait for the whistle. Do not start early. Once the referee allows the kickoff, run the plan with speed.",
        callouts: [
          {
            title: "Team rule",
            body: "Kickoff goes back to the CM, then into the opponent's corner-flag space.",
          },
          {
            title: "Why",
            body: "It starts the game safely and moves danger away from our goal.",
          },
        ],
        bullets: [
          {
            title: "Player jobs",
            items: [
              "Kickoff player: make a clean pass back to the CM.",
              "CM: play the ball into the corner-flag space.",
              "Wide players: sprint to pressure and support.",
              "Defenders: stay ready behind the play.",
            ],
          },
          {
            title: "Ask the referee",
            items: [
              "Do we wait for the whistle?",
              "Are we in the right half?",
              "Is the ball on the center mark?",
            ],
          },
        ],
        table: {
          columns: ["Step", "Action", "Reason"],
          rows: [
            ["1", "Pass back to CM.", "Avoid forcing the ball into pressure."],
            ["2", "CM plays to corner-flag space.", "Move the ball far from our goal."],
            ["3", "Team presses and supports.", "Try to win the next ball high up the field."],
          ],
        },
      },
      {
        slug: "our-throw-in-strategy",
        title: "Our Throw-In Strategy",
        summary: "Play throw-ins as quickly as possible, even if the throw has to lead a runner into space.",
        body: "Our Throw-In Plan\n\nWe want to take throw-ins as quickly as possible. Speed of play is everything for our throw-ins.\n\nWho Usually Throws\n\nThe winger usually takes the throw-in if they are near the right spot. If the winger is too far away, the closest prepared player should take it instead.\n\nWhy Quick Matters\n\nA slow throw-in gives the other team time to mark everyone. A quick throw can catch defenders before they are ready.\n\nForce The Speed\n\nIf no teammate is open, we still do not want to stand and wait. Put the ball into space for a teammate to run onto. The throw should lead the runner, not just go to feet.\n\nWhere Teammates Go\n\nOne teammate checks short. One teammate runs into space. One teammate stays behind the ball for safety. If the thrower has no easy feet option, the runner into space becomes the target.\n\nWhat The Referee Watches\n\nThe referee checks the spot, both hands, both feet, and whether the throw comes from behind and over the head.",
        callouts: [
          {
            title: "Team rule",
            body: "Throw quickly and keep the game moving.",
          },
          {
            title: "Usual thrower",
            body: "The winger usually throws if they are already near the right spot.",
          },
        ],
        bullets: [
          {
            title: "Thrower jobs",
            items: [
              "Get the ball fast.",
              "Check the referee's direction.",
              "Use legal feet and both hands.",
              "Pick the first open teammate or lead a runner into space.",
            ],
          },
          {
            title: "Teammate jobs",
            items: [
              "Move right away; do not stand still.",
              "Give one short option.",
              "Make one hard run into space.",
              "Keep one safety option behind the ball.",
            ],
          },
          {
            title: "Ask the referee",
            items: [
              "Whose throw?",
              "From here?",
              "Can I go?",
            ],
          },
        ],
        table: {
          columns: ["If this happens", "Our choice", "Why"],
          rows: [
            ["Winger is near the spot", "Winger throws quickly.", "Fast and organized."],
            ["Winger is far away", "Closest prepared player throws.", "Do not waste time."],
            ["Nobody is open", "Throw into space for a runner.", "Speed of play keeps pressure on the other team."],
          ],
        },
      },
      {
        slug: "our-free-kick-strategy",
        title: "Our Free Kick Strategy",
        summary: "ST or CM usually takes it while teammates stay onside and close to goal.",
        body: "Our Free Kick Plan\n\nMost of the time, our striker or center midfielder takes free kicks. Those players should be ready before the game so we do not waste time arguing.\n\nFirst Question: Direct Or Indirect\n\nBefore we shoot, we need to know if the kick is direct or indirect. Direct can go straight in. Indirect needs another touch before a goal can count.\n\nSecond Question: Wait Or Go Quick\n\nSometimes we can go quickly. Sometimes the referee tells us to wait for the whistle. If the referee says wait, we wait.\n\nWhere Teammates Stand\n\nThe rest of the attackers should stay onside and get as close to goal as they legally can. Do not stand past the second-last defender and waste the restart.\n\nWhat We Want\n\nWe want pressure near goal. The kick can be a shot, a pass, or a ball into dangerous space, depending on distance and angle.\n\nWhat The Referee Watches\n\nThe referee checks ball spot, direct or indirect signal, defender distance, whether the ball is stopped, and whether we waited if told to wait.",
        callouts: [
          {
            title: "Team rule",
            body: "ST or CM usually takes our free kicks.",
          },
          {
            title: "Stay onside",
            body: "Attackers get close to goal, but stay legal.",
          },
        ],
        bullets: [
          {
            title: "Kicker jobs",
            items: [
              "Ask if it is direct or indirect.",
              "Ask if we wait for the whistle.",
              "Make sure the ball is stopped.",
              "Choose shot, pass, or dangerous service.",
            ],
          },
          {
            title: "Other player jobs",
            items: [
              "Get onside as close to goal as possible.",
              "Be ready for rebounds.",
              "Do not block the keeper illegally.",
              "Do not run early if the referee is setting the wall.",
            ],
          },
          {
            title: "Ask the referee",
            items: [
              "Direct or indirect?",
              "Wait for whistle?",
              "Is the wall back?",
              "Is this the spot?",
            ],
          },
        ],
        table: {
          columns: ["Free kick situation", "Our likely taker", "Team job"],
          rows: [
            ["Near goal", "ST or CM", "Stay onside and attack rebounds."],
            ["Farther away", "CM", "Serve into space or keep possession."],
            ["Quick chance", "Closest ST or CM", "Go fast only if the referee allows it."],
            ["Indirect", "ST or CM with helper", "Plan the second touch."],
          ],
        },
      },
      {
        slug: "our-corner-kick-strategy",
        title: "Our Corner Kick Strategy",
        summary: "CM takes it, attackers stack at the top of the box, and runners break on the hand signal.",
        body: "Our Corner Kick Plan\n\nOur center midfielder usually takes corner kicks unless the coach says otherwise. Everyone should know the run before the kick.\n\nStarting Shape\n\nThe striker and other midfielders stack at the tip of the box. That means they start close together near the top point of the penalty area.\n\nWinger Jobs\n\nThe wingers take the edges of the box. They are ready for second balls, rebounds, and balls that pop out wide.\n\nThe Hand Signal\n\nThe kicker uses a hand motion to start the runs. Do not run too early. Wait for the signal so the group moves together.\n\nThe Three Stack Runs\n\nThe first player in the stack runs forward toward the near-danger area. The second player runs toward the side of the kick. The third player moves to the back of the box away from the kick.\n\nWhy The Runs Split\n\nIf all players run to the same place, defenders can mark us easily. Three different runs stretch the defense and give the kicker more targets.\n\nWhat The Referee Watches\n\nThe referee checks the ball in the corner area, defenders giving distance, legal contact in the box, and the ball clearly moving on the kick.",
        callouts: [
          {
            title: "Team rule",
            body: "CM usually takes our corner kicks unless told otherwise.",
          },
          {
            title: "Run timing",
            body: "Wait for the kicker's hand signal, then break to three spots.",
          },
        ],
        bullets: [
          {
            title: "Starting spots",
            items: [
              "CM takes the corner.",
              "ST and other mids stack at the tip of the box.",
              "Wingers start on the edges of the box.",
              "Everyone watches the kicker's hand signal.",
            ],
          },
          {
            title: "Three stack runs",
            items: [
              "First runner goes forward.",
              "Second runner goes to the side of the kick.",
              "Third runner goes to the back of the box away from the kick.",
              "Wingers stay ready for second balls and rebounds.",
            ],
          },
          {
            title: "Ask the referee",
            items: [
              "Is the ball okay here?",
              "Can they move back?",
              "Do we wait for the whistle?",
            ],
          },
        ],
        table: {
          columns: ["Player/group", "Starting spot", "Run or job"],
          rows: [
            ["CM", "Corner area", "Take the kick after the hand signal."],
            ["Runner 1", "Tip of box stack", "Run forward."],
            ["Runner 2", "Tip of box stack", "Run to the side of the kick."],
            ["Runner 3", "Tip of box stack", "Run to the back of the box away from the kick."],
            ["Wingers", "Edges of box", "Win second balls and rebounds."],
          ],
        },
      },
      {
        slug: "our-dropped-ball-strategy",
        title: "Our Dropped Ball Strategy",
        summary: "Closest eligible player gets ready, listens to the referee, and restarts calmly.",
        body: "Our Dropped Ball Plan\n\nFor dropped balls, our team rule is simple: the closest eligible player gets ready to receive it.\n\nThe Referee Still Decides\n\nThe referee decides who receives the dropped ball based on the laws and where play stopped. So our closest player gets ready, but we do not steal it or argue if the referee gives it somewhere else.\n\nWhat The Closest Player Does\n\nGet near the correct spot, listen to the referee, and be ready for the ball to touch the ground. Do not kick it before it is dropped.\n\nWhat Everyone Else Does\n\nBack up if the referee tells you. Give the required space. Be ready to support after the ball is live.\n\nHow We Restart\n\nIf we receive the dropped ball, our first idea is safety. Take the first clean touch or pass. Do not force a risky dribble right away.\n\nWhat The Referee Watches\n\nThe referee checks who should get the ball, where the drop happens, whether other players give space, and whether the ball touches the ground first.",
        callouts: [
          {
            title: "Team rule",
            body: "Closest eligible player gets ready for the dropped ball.",
          },
          {
            title: "Ref decides",
            body: "Listen first, because the referee controls who receives it.",
          },
        ],
        bullets: [
          {
            title: "Closest player jobs",
            items: [
              "Ask whose ball it is.",
              "Stand where the referee tells you.",
              "Wait for the ball to touch the ground.",
              "Restart with a safe first touch or pass.",
            ],
          },
          {
            title: "Other player jobs",
            items: [
              "Back up and give space.",
              "Do not crowd the referee.",
              "Get ready to support once the ball is live.",
              "Stay calm if the referee gives it to the other team.",
            ],
          },
          {
            title: "Ask the referee",
            items: [
              "Whose ball?",
              "Do I take it?",
              "Where should I stand?",
              "Do we need to back up?",
            ],
          },
        ],
        table: {
          columns: ["Moment", "Our action", "Why"],
          rows: [
            ["Referee stops play", "Closest eligible player gets ready.", "We are organized quickly."],
            ["Referee explains", "Listen and follow directions.", "The referee controls dropped balls."],
            ["Ball is dropped", "Wait until it touches the ground.", "That makes the restart legal."],
            ["We receive it", "Play safe first.", "Avoid giving the ball away right after a stoppage."],
          ],
        },
      },
      {
        slug: "fouls-contact",
        title: "Fouls and Contact",
        summary: "Fair challenges, unsafe contact, handball, and youth heading rules.",
        body: "Soccer Has Contact\n\nSoccer is not a no-contact game. Players can use their body to shield, challenge shoulder-to-shoulder, and compete for the ball.\n\nFair Contact\n\nFair contact is controlled and usually aimed at winning the ball. A strong challenge can be legal if it is not careless, reckless, or dangerous.\n\nFouls\n\nA foul happens when a player trips, kicks, pushes, holds, charges, jumps into, or tackles an opponent in an unfair way. The referee decides based on what they see.\n\nCareless, Reckless, Dangerous\n\nCareless means the player was not careful enough. Reckless means the player took too much risk and may get a yellow card. Using excessive force can be a red card because it puts someone in danger.\n\nHandball\n\nHandball is not every time the ball touches a hand or arm. Referees look for things like: did the player deliberately use the hand or arm, did the arm make the body unnaturally bigger, or did the player score right after the ball hit their hand or arm?\n\nHeaders In Youth Soccer\n\nFor many U.S. youth games, players at U11 and younger are not allowed to head the ball. Some leagues also use no-heading rules for U12. If heading is not allowed in your game, do not try to head the ball. Let it drop, use your chest, thigh, foot, or move out of the way.\n\nPlay Safe First\n\nIf a player is hurt, stop trying to win the moment and give space. The referee and coaches will handle the injury.",
        callouts: [
          {
            title: "Big idea",
            body: "Good defenders play hard, but stay in control.",
          },
          {
            title: "Youth safety",
            body: "If your age group has no heading, do not head the ball.",
          },
        ],
        bullets: [
          {
            title: "Usually fouls",
            items: [
              "Tripping or kicking an opponent.",
              "Pushing with hands or arms.",
              "Holding a shirt, arm, or body.",
              "Charging into a player without control.",
              "Tackling through the player instead of winning the ball.",
            ],
          },
          {
            title: "Handball clues",
            items: [
              "Did the player move the hand or arm to the ball?",
              "Was the arm far away from the body in an unnatural way?",
              "Did the player score right after it hit the hand or arm?",
              "Was the player just protecting themselves with arms close to the body?",
            ],
          },
          {
            title: "No-heading habits",
            items: [
              "Do not jump to head the ball.",
              "Let the ball drop if you have time.",
              "Use your foot, thigh, or chest when safe.",
              "Listen to the referee because leagues can handle heading rules differently.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Usually okay", "Usually a problem"],
          rows: [
            ["Shoulder challenge", "Side-by-side and controlled.", "Charging from behind or with too much force."],
            ["Tackle", "Winning the ball with control.", "Going through the player or using dangerous force."],
            ["Shielding", "Body between opponent and ball.", "Holding or pushing with arms."],
            ["Hand/arm contact", "Arm close to body and not deliberate.", "Arm makes body bigger or moves to the ball."],
            ["Header rule", "Avoid heading if your age group bans it.", "Trying to head the ball when it is not allowed."],
          ],
        },
      },
      {
        slug: "fair-contact",
        title: "Fair Contact",
        summary: "How players can challenge, shield, and play strong without fouling.",
        body: "Soccer Has Contact\n\nSoccer is not a no-contact game. Players can be strong, shield the ball, and challenge shoulder-to-shoulder.\n\nFair Shoulder Contact\n\nA shoulder challenge is usually fair when players are side-by-side, both are near the ball, and the contact is controlled.\n\nShielding The Ball\n\nShielding means putting your body between the opponent and the ball. You can use your body position, but you cannot hold, push, or swing your arms into the opponent.\n\nStrong But Controlled\n\nA good defender can be strong without being wild. Stay balanced, keep your eyes on the ball, and do not crash through the player.\n\nWhat The Referee Watches\n\nThe referee watches if the contact is fair, if both players can play the ball, if arms are used unfairly, and if the challenge is careless or dangerous.",
        callouts: [
          {
            title: "Big idea",
            body: "Strong contact can be fair when it is controlled and near the ball.",
          },
          {
            title: "Stay balanced",
            body: "If you are out of control, the referee is more likely to call a foul.",
          },
        ],
        bullets: [
          {
            title: "Usually fair",
            items: [
              "Shoulder-to-shoulder while playing the ball.",
              "Shielding with your body.",
              "Standing strong without pushing.",
              "Winning the ball with control.",
            ],
          },
          {
            title: "Usually not fair",
            items: [
              "Pushing with hands or arms.",
              "Charging from behind.",
              "Using your body when the ball is not playable.",
              "Going through the player to get the ball.",
            ],
          },
        ],
        table: {
          columns: ["Contact", "Usually okay", "Usually a foul"],
          rows: [
            ["Shoulder", "Side-by-side and controlled.", "From behind or too hard."],
            ["Shielding", "Body between opponent and ball.", "Holding with arms."],
            ["Tackle", "Ball first and controlled.", "Through the player."],
          ],
        },
      },
      {
        slug: "foul-types-and-cards",
        title: "Foul Types and Cards",
        summary: "Common fouls, careless or reckless play, and why cards happen.",
        body: "What A Foul Is\n\nA foul is unfair contact or unfair play against an opponent while the ball is in play. The referee decides based on what they see.\n\nCommon Fouls\n\nPlayers can be called for tripping, kicking, pushing, holding, jumping into someone, charging unfairly, or tackling carelessly.\n\nCareless\n\nCareless means the player did not show enough attention or control. This usually means a free kick, but not always a card.\n\nReckless\n\nReckless means the player took too much risk with an opponent's safety. This can be a yellow card.\n\nExcessive Force\n\nExcessive force means the challenge is dangerous and can seriously hurt someone. This can be a red card.\n\nPlayer Habit\n\nIf you lose the ball, do not panic-tackle. Run, recover, slow down, and defend with control.",
        callouts: [
          {
            title: "Big idea",
            body: "Most fouls happen when players lose control.",
          },
          {
            title: "Best habit",
            body: "Recover first, then challenge with balance.",
          },
        ],
        bullets: [
          {
            title: "Common foul actions",
            items: [
              "Trip.",
              "Push.",
              "Hold.",
              "Charge unfairly.",
              "Tackle carelessly.",
            ],
          },
          {
            title: "Card language",
            items: [
              "Careless: not careful enough.",
              "Reckless: too risky and may be yellow.",
              "Excessive force: dangerous and may be red.",
            ],
          },
        ],
        table: {
          columns: ["Level", "What it means", "Possible result"],
          rows: [
            ["Careless", "Not enough control.", "Free kick."],
            ["Reckless", "Too much risk.", "Free kick and possible yellow card."],
            ["Excessive force", "Dangerous force.", "Free kick and possible red card."],
          ],
        },
      },
      {
        slug: "handball-rules",
        title: "Handball Rules",
        summary: "When hand or arm contact matters and what referees look for.",
        body: "Not Every Touch Is Handball\n\nThe ball touching a hand or arm is not always a handball offence. The referee looks at how it happened.\n\nDeliberate Handball\n\nIf a player moves the hand or arm to the ball on purpose, that is usually handball.\n\nMaking The Body Bigger\n\nIf the arm is away from the body in a way that makes the player bigger, the referee may call handball even if the player did not mean to do it.\n\nNatural Position\n\nIf the arm is close to the body or in a natural position for the movement, it may not be handball.\n\nAttacking Handball\n\nIf an attacking player scores right after the ball hits their hand or arm, referees may call it back.\n\nPlayer Habit\n\nDefend with arms under control. Do not make yourself bigger with your arms.",
        callouts: [
          {
            title: "Big idea",
            body: "Handball depends on what the arm does and how the contact happens.",
          },
          {
            title: "Defend smart",
            body: "Keep arms controlled when blocking or turning.",
          },
        ],
        bullets: [
          {
            title: "Referee looks for",
            items: [
              "Did the hand or arm move to the ball?",
              "Did the arm make the body unnaturally bigger?",
              "Was the arm in a natural position for that movement?",
              "Did the attacker score right after hand or arm contact?",
            ],
          },
          {
            title: "Player tips",
            items: [
              "Do not defend with arms spread wide.",
              "Turn with arms close when blocking.",
              "Do not slap or push the ball with your hand.",
              "Keep playing until the referee calls it.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Less likely handball", "More likely handball"],
          rows: [
            ["Arm position", "Close to body.", "Stretched away from body."],
            ["Movement", "Ball hits arm unexpectedly.", "Arm moves to ball."],
            ["Blocking", "Natural body movement.", "Arm makes body bigger."],
          ],
        },
      },
      {
        slug: "no-heading-youth-rules",
        title: "No-Heading Youth Rules",
        summary: "What U11 and U12 players should know about heading restrictions.",
        body: "Heading Rules Protect Players\n\nMany U.S. youth games do not allow heading for U11 and younger players. Some leagues also use no-heading rules for U12.\n\nWhat That Means\n\nIf heading is not allowed in your game, do not try to head the ball. Let it drop, use your foot, thigh, chest when safe, or move away.\n\nIf You Accidentally Head It\n\nDo not panic. Stop and listen to the referee. The restart can depend on the league rule.\n\nHow To Play Balls In The Air\n\nGet your body behind the ball. Let it drop if you have time. Use your first touch to bring it under control.\n\nAsk Before The Game\n\nIf you are not sure, ask your coach or referee if heading is allowed in that game.",
        callouts: [
          {
            title: "Safety first",
            body: "If your age group has no heading, do not head the ball.",
          },
          {
            title: "Ask early",
            body: "Heading rules can vary by age group and league.",
          },
        ],
        bullets: [
          {
            title: "Instead of heading",
            items: [
              "Let the ball drop.",
              "Use your foot.",
              "Use your thigh.",
              "Use your chest only when safe and allowed.",
            ],
          },
          {
            title: "Game habit",
            items: [
              "Know the rule before kickoff.",
              "Do not jump into headers if heading is banned.",
              "Listen if the referee stops play.",
              "Stay safe first.",
            ],
          },
        ],
        table: {
          columns: ["Age/rule situation", "Player choice", "Reminder"],
          rows: [
            ["Heading not allowed", "Do not head the ball.", "Use another body part or let it drop."],
            ["Not sure", "Ask coach or referee.", "Know before the ball is in the air."],
            ["Accidental header", "Listen and reset.", "The referee handles the restart."],
          ],
        },
      },
      {
        slug: "offside",
        title: "Offside Basics",
        summary: "Timing runs and understanding the defensive line.",
        body: "Offside Is About Timing\n\nOffside is not just where you stand. It is where you are when your teammate plays or touches the ball, and whether you get involved in the play.\n\nThe Simple Picture\n\nYou can be offside if you are in the other team's half, closer to their goal than both the ball and the second-last defender, and then you get involved in play.\n\nThe Second-Last Defender\n\nUsually the goalkeeper is the last defender, so players look at the second-last defender as the offside line. Sometimes the goalkeeper comes out, so the second-last defender might be someone else.\n\nLevel Is Onside\n\nIf you are even with the second-last defender, you are onside. You do not have to be behind them. Level is okay.\n\nStanding Offside Is Not Always A Foul\n\nIt is not an offence just to stand in an offside position. It becomes an offside offence when you play the ball, challenge an opponent, block their ability to play, or gain an advantage from a rebound or deflection.\n\nNo Offside On Some Restarts\n\nYou cannot be offside directly from a throw-in, goal kick, or corner kick. But after another teammate touches the ball, offside can matter again.\n\nThe Best Player Habit\n\nBefore you run behind defenders, check the line. Time your run so you are onside when your teammate passes.",
        callouts: [
          {
            title: "Big idea",
            body: "Offside is about position, timing, and joining the play.",
          },
          {
            title: "Best habit",
            body: "Check the defensive line before you run behind it.",
          },
        ],
        bullets: [
          {
            title: "You need these pieces",
            items: [
              "You are in the opponent's half.",
              "You are closer to goal than the ball.",
              "You are closer to goal than the second-last defender.",
              "You get involved in the play.",
            ],
          },
          {
            title: "You are not offside if",
            items: [
              "You are in your own half.",
              "You are level with the second-last defender.",
              "You are behind the ball when it is played.",
              "You receive it directly from a throw-in, goal kick, or corner kick.",
            ],
          },
          {
            title: "Forward tips",
            items: [
              "Look across the line before the pass.",
              "Curve your run instead of standing behind defenders.",
              "Wait until your teammate is ready to pass.",
              "If you are offside, step back onside before asking for the ball.",
            ],
          },
        ],
        table: {
          columns: ["Question", "Onside answer", "Offside danger"],
          rows: [
            ["Where are you?", "In your own half.", "In the opponent's half."],
            ["Where is the ball?", "You are behind or level with the ball.", "You are ahead of the ball."],
            ["Where is the line?", "Level with the second-last defender.", "Past the second-last defender."],
            ["Are you involved?", "You do not play or challenge.", "You play the ball, challenge, block, or gain advantage."],
            ["What restart?", "Throw-in, goal kick, or corner kick direct to you.", "A teammate passes after the restart."],
          ],
        },
      },
      {
        slug: "offside-position",
        title: "Offside Position",
        summary: "Where the offside line is and why level is onside.",
        body: "Position Comes First\n\nBefore offside can happen, the player must be in an offside position. That means the player is in the opponent's half and closer to the opponent's goal than both the ball and the second-last defender.\n\nThe Second-Last Defender\n\nUsually the goalkeeper is the last defender, so the second-last defender is the offside line. But if the goalkeeper comes out, the line can be a different defender. A better way to think is: find the second-last opponent, not just the goalkeeper.\n\n7v7 And The Build-Out Line\n\nIn 7v7, many leagues use a build-out line. That line can help players understand when the other team can pressure and where offside may start in that format. It is a teaching line for younger players.\n\n9v9 Has No Build-Out Line\n\nIn 9v9, there is no build-out line. Players need to use the real offside line: the second-last opponent, or the ball if the ball is closer to the goal line than the defender. For U11 9v9, this is an important habit.\n\nLevel Is Onside\n\nIf you are level with the second-last defender, you are onside. You do not have to be behind them. Level is okay.\n\nBehind The Ball Is Onside\n\nIf you are behind the ball when your teammate plays it, you are onside even if you are ahead of defenders.\n\nPlayer Habit\n\nLook across the field before the pass. Do not just look at the ball. For 9v9, train your eyes to find the last defender line quickly.",
        callouts: [
          {
            title: "Big idea",
            body: "Level with the second-last defender is onside.",
          },
          {
            title: "Check line",
            body: "In 9v9, use the second-last opponent because there is no build-out line.",
          },
        ],
        bullets: [
          {
            title: "Onside if",
            items: [
              "You are in your own half.",
              "You are level with the second-last defender.",
              "You are behind the ball.",
              "You are not involved in play.",
            ],
          },
          {
            title: "7v7 vs 9v9",
            items: [
              "7v7 may use a build-out line.",
              "9v9 does not use a build-out line.",
              "In 9v9, find the second-last opponent.",
              "If you are level with that opponent, you are onside.",
            ],
          },
        ],
        table: {
          columns: ["Question", "Safe answer", "Danger answer"],
          rows: [
            ["Which half?", "Your own half.", "Opponent's half."],
            ["Where is the ball?", "You are behind it.", "You are ahead of it."],
            ["Where is the defender?", "You are level.", "You are past the line."],
            ["What format?", "7v7 may use build-out line.", "9v9 uses second-last opponent."],
          ],
        },
      },
      {
        slug: "offside-timing-and-involvement",
        title: "Offside Timing and Involvement",
        summary: "Why the pass timing matters and when standing offside becomes an offence.",
        body: "Timing Matters\n\nThe referee and assistant referee judge offside when your teammate plays or touches the ball. Not when you receive it. This is the part that confuses many players.\n\nThe Pass Moment\n\nFreeze the picture at the moment your teammate kicks or touches the ball. Were you onside at that moment? If yes, you can run behind after the pass.\n\nStanding Offside Is Not Enough\n\nIt is not an offence just to stand in an offside position. It becomes an offence when you get involved.\n\nGetting Involved\n\nYou are involved if you play the ball, challenge an opponent, block a defender or goalkeeper, or gain an advantage from a rebound or deflection.\n\nRuns Behind\n\nA great run starts onside and arrives behind the defense after the pass. Do not stand offside and wait. Start level, then explode into the space when the pass is about to happen.\n\nFor Wingers And Strikers\n\nDo not stare only at the ball. Check the defender line, then check the passer. Your run needs both pieces: the line and the pass timing.\n\nPlayer Habit\n\nCurve your run. Wait until the passer is ready. Time the run so you are onside when the ball is played.",
        callouts: [
          {
            title: "Big idea",
            body: "Offside is judged when the teammate plays the ball.",
          },
          {
            title: "Run smart",
            body: "Start onside, then run behind.",
          },
        ],
        bullets: [
          {
            title: "Involved means",
            items: [
              "You play the ball.",
              "You challenge for the ball.",
              "You block an opponent's play.",
              "You gain an advantage from a rebound.",
            ],
          },
          {
            title: "Forward habits",
            items: [
              "Check the line.",
              "Wait for the passer's touch.",
              "Curve your run.",
              "Step back onside if you went too early.",
            ],
          },
          {
            title: "9v9 habit",
            items: [
              "Find the second-last opponent before you ask for the ball.",
              "Start level, not past the defender.",
              "Run after the pass is being played.",
              "If you are early, bend your run or come back onside.",
            ],
          },
        ],
        table: {
          columns: ["Moment", "What matters", "Player habit"],
          rows: [
            ["Before pass", "Your starting position.", "Check the line."],
            ["Pass is played", "Offside is judged now.", "Be level or onside."],
            ["After pass", "Run onto the ball.", "Use speed after timing."],
            ["If too early", "You may be offside.", "Curve back or reset onside."],
          ],
        },
      },
      {
        slug: "offside-restarts-and-exceptions",
        title: "Offside Restarts and Exceptions",
        summary: "Restarts where offside does not apply directly and what happens after.",
        body: "Some Restarts Are Different\n\nYou cannot be offside directly from a throw-in, goal kick, or corner kick.\n\nThrow-In\n\nYou can receive a throw-in behind the defense without being offside. This is why quick throw-ins into space can be dangerous. But once another teammate touches the ball, offside can apply again.\n\nGoal Kick\n\nYou can receive a goal kick in an advanced position without being offside directly from that kick. In 9v9, this can help teams play out or find space quickly.\n\nCorner Kick\n\nYou cannot be offside directly from a corner kick because the ball starts on the end line. After a short corner or second pass, offside can matter again.\n\nAfter The Next Touch\n\nAfter a teammate touches the ball from one of those restarts, normal offside rules come back. This is very important on short corners, quick throw-ins, and second balls.\n\n7v7 Build-Out Line Reminder\n\nIn 7v7, the build-out line can change how young players see space and pressure. In 9v9, remove that picture from your head and use the real defender line.\n\nPlayer Habit\n\nKnow when you can be aggressive, but do not forget the next pass can make offside matter again.",
        callouts: [
          {
            title: "Big idea",
            body: "No offside directly from a throw-in, goal kick, or corner kick.",
          },
          {
            title: "Next touch",
            body: "After another teammate touches it, offside can matter again.",
          },
        ],
        bullets: [
          {
            title: "No direct offside from",
            items: [
              "Throw-in.",
              "Goal kick.",
              "Corner kick.",
            ],
          },
          {
            title: "Remember",
            items: [
              "A teammate's next touch can restart offside decisions.",
              "Stay aware after short corners.",
              "Do not assume you are safe forever.",
            ],
          },
          {
            title: "9v9 reminder",
            items: [
              "No build-out line.",
              "Use the second-last opponent.",
              "Throw-ins, goal kicks, and corners have special direct-offside exceptions.",
              "The next teammate touch brings normal offside back.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Offside directly?", "After teammate touch?"],
          rows: [
            ["Throw-in", "No.", "Yes, offside can apply again."],
            ["Goal kick", "No.", "Yes, offside can apply again."],
            ["Corner kick", "No.", "Yes, offside can apply again."],
          ],
        },
      },
      {
        slug: "injuries-stoppages-and-referees",
        title: "Injuries, Stoppages, and Referees",
        summary: "What to do when play stops, someone is hurt, or referees make a call.",
        body: "Some Stops Are Bigger Than Restarts\n\nSometimes play stops for an injury, a long delay, a weather issue, a referee discussion, a substitution, or something outside the game. Players should know how to act in those moments.\n\nWhen Someone Is Hurt\n\nIf a player is hurt, give them space. Do not crowd around. Take a knee or move away if your coach asks. Let the referee and coaches handle it.\n\nLong Stoppages\n\nA long stoppage can make players lose focus. Use the time to breathe, listen to your coach, drink water if allowed, and remember the next job.\n\nCenter Referee\n\nThe center referee is the main referee on the field. They call fouls, manage safety, decide restarts, keep time, and control the game.\n\nSideline Referees\n\nSideline referees are usually assistant referees. They help with ball out of play, offside, direction of throw-ins, substitutions, and things the center referee may not see. Some youth games may use club line judges, who usually only help signal when the ball goes out.\n\nPlay To The Whistle\n\nPlayers should not stop just because a parent, coach, or teammate yells. Keep playing until the referee stops the game.\n\nRespect Helps The Game\n\nYou can be confused by a call and still show respect. Look at the referee, listen, reset, and get ready for the next play.",
        callouts: [
          {
            title: "Safety first",
            body: "If someone is hurt, give space and listen.",
          },
          {
            title: "Play on",
            body: "Keep playing until the referee stops the game.",
          },
        ],
        bullets: [
          {
            title: "If there is an injury",
            items: [
              "Stop if the referee stops play.",
              "Give the hurt player space.",
              "Let coaches and referees handle it.",
              "Use the break to breathe and refocus.",
            ],
          },
          {
            title: "Referee jobs",
            items: [
              "Center referee: controls the game and makes final decisions.",
              "Assistant referee: helps from the sideline with offside and ball-out calls.",
              "Club line judge: may only help signal when the ball fully leaves the field.",
            ],
          },
          {
            title: "Other helpful rules",
            items: [
              "Advantage means the referee may let play continue after a foul if the fouled team still has a good attack.",
              "Substitutions happen when the referee allows them, not whenever players feel like switching.",
              "If the ball hits the referee and changes the play, the referee may stop for a dropped ball.",
              "Bad weather, field problems, or outside interference can also stop the game.",
            ],
          },
        ],
        table: {
          columns: ["Moment", "What players should do", "Why it matters"],
          rows: [
            ["Injury", "Give space and listen.", "Safety matters more than the next play."],
            ["Long stoppage", "Breathe, reset, and hear the coach.", "The next restart still matters."],
            ["Referee whistle", "Stop and look for the restart.", "The referee controls when play stops."],
            ["Sideline flag", "Keep playing unless the referee stops it.", "The center referee makes the final call."],
            ["Confusing call", "Stay calm and get ready.", "Arguing does not help the team."],
          ],
        },
      },
      {
        slug: "injury-stoppages",
        title: "Injury Stoppages",
        summary: "What players should do when someone is hurt.",
        body: "Safety Comes First\n\nIf someone is hurt, safety matters more than the next play. Give the player space and listen to the referee and coaches.\n\nDo Not Crowd\n\nDo not surround the hurt player. Move away from the injury area. Kneeling by yourself does not help the injured player or your team learn what to do next.\n\nUse The Moment As A Team\n\nIf there is time and the coach calls you over, get with your team. Talk about how the game is going, what is working, and what needs to be better.\n\nWhen Play Stops\n\nThe referee decides when play stops. Sometimes play stops right away. Sometimes the referee waits a moment if the injury is not serious and the ball is still in play.\n\nAfter The Stop\n\nUse the break to breathe, refocus, and organize. Ask: What is the restart? What shape are we in? What is our next job?\n\nPlayer Habit\n\nBe respectful to the hurt player, but use the stoppage wisely. Give space, then reconnect with your team.",
        callouts: [
          {
            title: "Safety first",
            body: "Give injured players space and listen.",
          },
          {
            title: "Reset",
            body: "Use injury stoppages to talk with your team and refocus.",
          },
        ],
        bullets: [
          {
            title: "If someone is hurt",
            items: [
              "Stop if the referee stops play.",
              "Give space.",
              "Let coaches help.",
              "Get with your team if the coach calls you over.",
              "Talk about the next job before the restart.",
            ],
          },
          {
            title: "Team talk questions",
            items: [
              "Are we organized?",
              "What is working?",
              "What do we need to fix?",
              "What is the restart?",
            ],
          },
        ],
        table: {
          columns: ["Moment", "Player action", "Reason"],
          rows: [
            ["Player down", "Give space.", "Safety and respect."],
            ["Coach enters", "Stay clear.", "Let adults help."],
            ["Long enough pause", "Get with the team and talk.", "Use the moment to improve."],
            ["Restart coming", "Know the restart and get shape.", "Be ready to play."],
          ],
        },
      },
      {
        slug: "long-stoppages-and-delays",
        title: "Long Stoppages and Delays",
        summary: "How to stay focused during long breaks in play.",
        body: "Long Stops Happen\n\nGames can stop for injuries, substitutions, referee discussions, weather, field problems, or outside interference.\n\nDo Not Switch Off\n\nA long stoppage can make players lose focus. Do not just kneel and wait with your brain off. That does not help the injured player, and it does not help the team.\n\nUse The Time Well\n\nIf the stoppage is long, get with your team when the coach calls you. Talk about the game. Are we pressing well? Are we finding width? Are we winning first and second balls? What do we need to work on right now?\n\nKnow The Restart\n\nBefore play starts again, know the restart. Is it a dropped ball, free kick, throw-in, corner, goal kick, or kickoff?\n\nPlayer Habit\n\nWhen the referee is ready, you should already know your position, the restart, and your first job.",
        callouts: [
          {
            title: "Big idea",
            body: "Long stoppages are team-talk moments, not empty waiting moments.",
          },
          {
            title: "Be ready",
            body: "Know the restart before the game starts again.",
          },
        ],
        bullets: [
          {
            title: "During a delay",
            items: [
              "Breathe.",
              "Get with your team if the coach calls you.",
              "Talk about what is working and what needs to improve.",
              "Check your position.",
              "Ask what the restart is if you are unsure.",
            ],
          },
        ],
        table: {
          columns: ["Delay reason", "What to do", "What not to do"],
          rows: [
            ["Injury", "Give space.", "Crowd the player."],
            ["Referee discussion", "Talk with your team.", "Argue."],
            ["Substitution", "Reset shape.", "Turn your back on play."],
            ["Weather or field issue", "Listen to adults.", "Ignore instructions."],
          ],
        },
      },
      {
        slug: "referee-roles",
        title: "Referee Roles",
        summary: "The difference between center referees, assistant referees, and club line judges.",
        body: "Center Referee\n\nThe center referee is the main referee on the field. They control the game and make the final decisions.\n\nAssistant Referees\n\nAssistant referees are on the sideline. They help with ball out of play, offside, fouls the center referee may not see, substitutions, and direction of restarts.\n\nClub Line Judges\n\nSome youth games use club line judges instead of official assistant referees. Club line judges usually only help signal when the ball fully leaves the field.\n\nWho Makes The Final Call\n\nThe center referee makes the final call. A flag helps, but players should keep playing until the referee stops play.\n\nDo Not Talk Back\n\nPlayers should never talk back to the referee. If there is a problem, the coach handles that work. Your job is to play, listen, and reset.\n\nPlayer Habit\n\nDo not stop because you see a flag or hear someone yell. Play to the whistle. If a call is confusing, look to the coach and get ready for the next play.",
        callouts: [
          {
            title: "Big idea",
            body: "The center referee makes the final decision.",
          },
          {
            title: "Play on",
            body: "Never talk back; keep playing until the whistle.",
          },
        ],
        bullets: [
          {
            title: "Referee jobs",
            items: [
              "Center referee: controls the game.",
              "Assistant referee: helps from the sideline.",
              "Club line judge: may only signal ball out.",
              "Players: listen, do not talk back, and keep playing.",
              "Coach: handles referee questions if needed.",
            ],
          },
          {
            title: "Player rule",
            items: [
              "Do not argue with the referee.",
              "Do not complain about calls.",
              "Do not make faces or gestures.",
              "Let the coach handle referee communication.",
            ],
          },
        ],
        table: {
          columns: ["Official", "Where they are", "Main job"],
          rows: [
            ["Center referee", "On the field.", "Controls the game and final decisions."],
            ["Assistant referee", "Sideline.", "Helps with offside, ball out, and fouls."],
            ["Club line judge", "Sideline.", "Usually only helps with ball out."],
            ["Coach", "Technical area or sideline.", "Handles referee communication when needed."],
          ],
        },
      },
      {
        slug: "playing-to-the-whistle",
        title: "Playing To The Whistle",
        summary: "Why players should keep going until the referee stops play.",
        body: "Do Not Stop Early\n\nPlaying to the whistle is one of our most important team rules. Players should not stop just because a parent, coach, teammate, or opponent yells. Keep playing until the referee stops the game.\n\nTeam Rule 1\n\nIt is always our ball until the referee says otherwise. If the ball might be out, keep playing. If the other team thinks it is theirs, keep playing. Let the referee decide.\n\nTeam Rule 2\n\nIt is a foul when the referee calls it. Otherwise, keep going. Do not stop to ask for a call while the ball is still live.\n\nWhy It Matters\n\nIf you stop early and the referee does not call it, the other team can keep playing. That can create an easy chance.\n\nWhen You Hear The Whistle\n\nStop, look at the referee, and find the restart. Do not kick the ball away or argue.\n\nIf You Are Confused\n\nAsk calmly if needed: What is the restart? Whose ball? Where is the spot? But if the ball is live, keep playing.\n\nPlayer Habit\n\nPlay hard until the whistle. Reset fast after it.",
        callouts: [
          {
            title: "Team habit",
            body: "It is always our ball until the referee says otherwise.",
          },
          {
            title: "Foul rule",
            body: "It is a foul when the referee calls it; otherwise keep going.",
          },
        ],
        bullets: [
          {
            title: "Do this",
            items: [
              "Keep playing through yelling.",
              "Treat loose balls as ours until the referee says otherwise.",
              "Keep going through contact unless the referee calls a foul.",
              "Stop when the whistle goes.",
              "Look at the referee.",
              "Reset for the restart.",
            ],
          },
          {
            title: "Do not do this",
            items: [
              "Stop because someone yells handball.",
              "Stop because a teammate thinks it is out.",
              "Stop because you think you got fouled.",
              "Kick the ball away after the whistle.",
              "Argue instead of getting ready.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Good reaction", "Bad reaction"],
          rows: [
            ["Someone yells foul", "Keep playing.", "Stop and watch."],
            ["Flag goes up", "Keep going until whistle.", "Assume play is dead."],
            ["Ball might be out", "Play it until referee says out.", "Let it go and complain."],
            ["Contact happens", "Keep going unless referee calls it.", "Stop and ask for a foul."],
            ["Whistle blows", "Stop and reset.", "Kick ball away."],
          ],
        },
      },
    ],
    sections: [
      {
        slug: "restart-rules",
        title: "Module 1: Restart Rules",
        summary: "Kickoffs, throw-ins, goal kicks, corners, free kicks, penalties, and dropped balls.",
        lessonSlugs: [
          "kickoff-rules",
          "throw-in-rules",
          "corner-kick-rules",
          "free-kick-rules",
          "penalty-kick-rules",
          "dropped-ball-rules",
        ],
      },
      {
        slug: "our-restart-strategies",
        title: "Module 2: Our Restart Strategies",
        summary: "Our team plans for kickoffs, throw-ins, free kicks, corners, and dropped balls.",
        lessonSlugs: [
          "our-kickoff-strategy",
          "our-throw-in-strategy",
          "our-free-kick-strategy",
          "our-corner-kick-strategy",
          "our-dropped-ball-strategy",
        ],
      },
      {
        slug: "fouls-contact-and-safety",
        title: "Module 3: Fouls, Contact, and Safety",
        summary: "Fair challenges, unsafe contact, handball, and no-heading rules for youth soccer.",
        lessonSlugs: [
          "fair-contact",
          "foul-types-and-cards",
          "handball-rules",
          "no-heading-youth-rules",
        ],
      },
      {
        slug: "offside-basics",
        title: "Module 4: Offside Basics",
        summary: "Timing runs, checking the defensive line, and knowing when offside applies.",
        lessonSlugs: [
          "offside-position",
          "offside-timing-and-involvement",
          "offside-restarts-and-exceptions",
        ],
      },
      {
        slug: "stoppages-and-referees",
        title: "Module 5: Injuries, Stoppages, and Referees",
        summary: "Injuries, long stoppages, referee roles, sideline flags, and playing to the whistle.",
        lessonSlugs: [
          "injury-stoppages",
          "long-stoppages-and-delays",
          "referee-roles",
          "playing-to-the-whistle",
        ],
      },
    ],
  },
  {
    slug: "team-tactical-principles",
    title: "Team Tactical Principles",
    summary: "Learn team ideas for attacking, defending, support, and transition moments.",
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
    sections: [
      {
        slug: "team-with-the-ball",
        title: "Module 1: Team With The Ball",
        summary: "Spacing and support when your team has possession.",
        lessonSlugs: ["with-the-ball"],
      },
      {
        slug: "team-without-the-ball",
        title: "Module 2: Team Without The Ball",
        summary: "Pressure, cover, and team shape when defending.",
        lessonSlugs: ["without-the-ball"],
      },
      {
        slug: "team-transitions",
        title: "Module 3: Team Transition Moments",
        summary: "What to do right after the ball changes teams.",
        lessonSlugs: ["transitions"],
      },
    ],
  },
  {
    slug: "player-tactical-principles",
    title: "Player Tactical Principles",
    summary: "Learn individual habits for scanning, first touch, 1v1 decisions, and support.",
    importance: "Build Next",
    importanceTone: "low",
    imageSrc: "/module-images/team-tactical-principles.png",
    imagePrompt:
      "Youth soccer player scanning before receiving the ball with teammates creating support angles, bright realistic training image, no text, no logos, 16:9",
    lessons: [
      {
        slug: "scanning-before-the-ball",
        title: "Scanning Before The Ball",
        summary: "Check your shoulder before the ball arrives.",
        body: "Scanning means looking before the ball gets to you. You are trying to see pressure, open teammates, open space, and where your first touch should go.\n\nA good scan happens early. Look before the pass is played, look again while the ball is traveling if you can, then make your decision faster when the ball arrives.\n\nSimple rule: know what is behind you before you receive.",
      },
      {
        slug: "first-touch-decisions",
        title: "First Touch Decisions",
        summary: "Use your first touch to protect, pass, or go forward.",
        body: "Your first touch should help your next action. Sometimes that means touching forward into space. Sometimes it means touching away from pressure. Sometimes it means stopping the ball so you can pass safely.\n\nDo not take the same first touch every time. Decide based on pressure, space, and your body shape.\n\nSimple rule: first touch should make the second touch easier.",
      },
      {
        slug: "one-v-one-decisions",
        title: "1v1 Decisions",
        summary: "Know when to dribble, pass, shield, or turn away.",
        body: "A 1v1 does not always mean you must beat the player. You can dribble if there is space, pass if a teammate is open, shield if pressure is tight, or turn away if the risk is too high.\n\nThe best players read the defender's speed and body shape. If the defender is off balance, attack. If the defender is set, move the ball or use support.\n\nSimple rule: do not force the hard play when an easy play helps the team.",
      },
      {
        slug: "supporting-teammates",
        title: "Supporting Teammates",
        summary: "Move into useful space when a teammate has the ball.",
        body: "Support means moving where your teammate can actually use you. Do not hide behind a defender. Move to an angle where the passer can see you and reach you.\n\nGood support can be close, wide, behind, or forward depending on pressure. If your teammate is under pressure, give a safe option. If your teammate has time, stretch the field and create space.\n\nSimple rule: if your teammate has the ball, your job is to become useful.",
      },
    ],
    sections: [
      {
        slug: "scanning",
        title: "Module 1: Scanning",
        summary: "Check your shoulder before the ball arrives.",
        lessonSlugs: ["scanning-before-the-ball"],
      },
      {
        slug: "first-touch",
        title: "Module 2: First Touch",
        summary: "Use your first touch to protect, pass, or go forward.",
        lessonSlugs: ["first-touch-decisions"],
      },
      {
        slug: "one-v-one",
        title: "Module 3: 1v1 Decisions",
        summary: "Know when to dribble, pass, shield, or turn away.",
        lessonSlugs: ["one-v-one-decisions"],
      },
      {
        slug: "support",
        title: "Module 4: Support",
        summary: "Move into useful space when a teammate has the ball.",
        lessonSlugs: ["supporting-teammates"],
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
  void learningModule;
  void sectionSlug;
  void completedLessonSlugs;

  return true;
}

export function moduleCompletionPercent(learningModule: LearningModule, completedLessonSlugs: Set<string>) {
  const progressLessonSlugs = learningModule.sections
    ? learningModule.sections.flatMap((section) => section.lessonSlugs)
    : learningModule.lessons.map((lesson) => lesson.slug);

  if (progressLessonSlugs.length === 0) {
    return 0;
  }

  const completedCount = progressLessonSlugs.filter((lessonSlug) => completedLessonSlugs.has(lessonSlug)).length;
  return Math.round((completedCount / progressLessonSlugs.length) * 100);
}
