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
    videos?: { title: string; youtubeId: string }[];
    videoIntro?: string;
    afterVideosBody?: string;
    diagram?:
      | "get-wide-stay-wide"
      | "look-to-go-forward"
      | "create-2v1-and-3v1"
      | "get-compact-stay-compact"
      | "first-defender"
      | "cover-and-support"
      | "transition-win-secure"
      | "transition-win-safe"
      | "transition-win-forward"
      | "transition-lose-effort"
      | "transition-lose-press"
      | "transition-lose-cover";
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
        coachSays: "Your jersey number and your field number are two different things. The field number is your job — learn it and own it.",
        funFact: {
          title: "The 4-3-3 Goes Back a Long Way",
          body: "Brazil used a version of the 4-3-3 to win the 1970 World Cup — widely called the greatest team ever assembled. Pelé, Jairzinho, and Tostão all played in that shape. Ajax in the Netherlands then made it famous worldwide with Total Football, where every player could play every number.",
        },
        practice: {
          type: "true-false",
          statement: "Your jersey number is always the same as your field position number.",
          answer: false,
          explanation: "Your jersey number is just the number on your shirt — it could be anything. Your field number is the position you play. A player wearing jersey 23 can still play the number 9 striker role.",
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
        coachSays: "Defenders — protect the goal first, build the attack second. In that order, every single time.",
        practice: {
          type: "true-false",
          statement: "In a standard back four, the number 5 plays on the right side.",
          answer: false,
          explanation: "The bigger number is usually on the left. The 5 is the left center back and the 4 is the right center back. Same rule for fullbacks — the 3 is the left back, and the 2 is the right back.",
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
        coachSays: "The 6 protects. The 8 connects. The 10 creates. Three jobs, one midfield, one team.",
        practice: {
          type: "true-false",
          statement: "The number 10 is the deepest midfielder in a 4-3-3.",
          answer: false,
          explanation: "The 6 is the deepest midfielder — they sit closest to the defenders and protect the middle. The 10 plays highest, closest to the attackers, and looks to create chances.",
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
        coachSays: "7 wide right, 9 dangerous middle, 11 wide left. The front three only work when all three do their job.",
        funFact: {
          title: "The Famous Number 9",
          body: "The number 9 shirt has been worn by some of the greatest strikers ever — Ronaldo Nazário (Brazil), Robert Lewandowski, and Erling Haaland. In some countries, if a legendary 9 retires, the club unofficially retires the shirt number too. It is the most pressure-filled number on the field.",
        },
        practice: {
          type: "what-would-you-do",
          scenario: "You are playing striker (9). Your team wins the ball and you are near the opponent's goal. What do you do?",
          choices: [
            { label: "Sprint as far forward as possible right away", response: "Running too far too early can pull you offside or separate you from your teammates. A great striker times the run — stay connected, then burst into space the moment the pass is coming." },
            { label: "Stay connected and time your run as the ball comes forward", response: "Exactly. The best strikers do not just run fast — they run at the right moment. Stay connected, read when the pass is coming, then attack the space. Timing beats speed every time." },
            { label: "Drop back deep to help your team keep the ball", response: "Checking short can help sometimes, but your main job as the 9 is staying dangerous near goal. Let the midfielders handle possession — you hold the forward position and make defenders worry about you." },
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
        coachSays: "Defenders 1 to 5, midfielders 6-8-10, attackers 7-9-11. Say it out loud until you can say it in your sleep.",
        funFact: {
          title: "Why 10 Is The Magic Number",
          body: "The number 10 shirt is one of the most iconic in all of sports. Pelé wore it at the 1958 World Cup at just 17 years old and was already the best player in the tournament. Diego Maradona wore it. Lionel Messi wore it for Argentina. The number 10 became synonymous with the most creative, skillful player on the team.",
        },
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
        coachSays: "A formation tells you where to START — not where to freeze. Once the whistle goes, it is a game, not a photo.",
        practice: {
          type: "true-false",
          statement: "A 4-3-3 formation includes the goalkeeper in the numbers — so it actually means 4 defenders, 3 midfielders, 3 attackers, and 1 goalkeeper.",
          answer: false,
          explanation: "The goalkeeper is never counted in formation numbers because every team already has one. A 4-3-3 describes only the 10 field players — 4 defenders, 3 midfielders, 3 attackers. Add the keeper and you get all 11.",
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
        coachSays: "Three lines, one team. When the back line is organized, the midfield trusts. When midfield connects, the attack has options.",
        comparison: {
          left: { label: "Bad Spacing", items: ["Everyone crowds the ball", "Three players squeezed into the same channel", "Big empty gaps between the lines", "No options for the player on the ball"] },
          right: { label: "Good Spacing", items: ["Players spread across all three channels", "Each line covers its zone and stays connected", "Gaps between lines are small enough to pass through", "The player on the ball always has two or more options"] },
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
        coachSays: "The number tells you the job. The formation tells you the starting spot. The game tells you when and where to move.",
        practice: {
          type: "what-would-you-do",
          scenario: "Your coach tells you that you are playing as the 6 today, but the team is using a 3-5-2 instead of the usual 4-3-3. What should you expect?",
          choices: [
            { label: "My starting spot and job stay exactly the same as in a 4-3-3", response: "Close, but not quite. In a 3-5-2, the 6 might drop deeper alongside three center backs or play with a midfield partner. The idea of protecting the middle stays the same, but your exact starting position may shift." },
            { label: "My job might be slightly different — I should ask the coach before kickoff", response: "Smart. The 6 still protects the middle in most formations, but in a 3-5-2 the role can change. Asking the coach means you know your exact spot and responsibilities before the whistle, not after." },
            { label: "The number 6 always starts in the exact same place in every formation", response: "Not quite. The formation changes where you start. In a 4-3-3 the 6 is a single holding midfielder. In a 3-5-2 the 6 might play as one of five midfielders or even drop into the back three. Same number, different map." },
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
        coachSays: "Before kickoff, answer three questions: who is closest to me, who gives us width, and who connects our lines. That is your formation check.",
        practice: {
          type: "true-false",
          statement: "When reading a formation, you count the numbers starting from the attacking end — forwards first, then midfielders, then defenders.",
          answer: false,
          explanation: "Formation numbers are always read from your own goal forward. The first number is your defenders (closest to your goal), then midfielders, then attackers. So 4-3-3 means 4 defenders back, 3 midfielders in the middle, 3 attackers at the front.",
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
        coachSays: "7v7 is the perfect size to learn the game. You can see the whole team, every pass, and every space. Use it.",
        practice: {
          type: "true-false",
          statement: "A 7v7 team playing a 2-3-1 formation has a total of 7 players including the goalkeeper.",
          answer: true,
          explanation: "Correct! The formation numbers count only field players: 2 defenders + 3 midfielders + 1 forward = 6 field players. Add the goalkeeper and you have 7 total. The goalkeeper is never included in the formation number.",
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
        coachSays: "In 7v7 there is nowhere to hide — and that is a good thing. Every player touches the ball, every player makes decisions. Learn from it.",
        comparison: {
          left: { label: "Choose 2-3-1 When...", items: ["Your midfielders can defend hard and run back", "You want wide passing options in midfield", "Your team connects well through the center", "The opponent attacks mainly through the middle"] },
          right: { label: "Choose 3-2-1 When...", items: ["Your team needs more cover near goal", "Outside defenders are ready to step forward at the right time", "The opponent has a dangerous forward that needs extra attention", "Your two midfielders stay well organized and connected"] },
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
        coachSays: "When the field gets bigger, the new players need to solve real problems — more width, better cover, or a stronger connection. Add players in useful spots.",
        practice: {
          type: "true-false",
          statement: "The easiest way to grow a 2-3-1 into a 9v9 formation is to add two more defenders.",
          answer: false,
          explanation: "Adding two defenders to a 2-3-1 gives you 4-3-1, which crowds the back line without solving the bigger problem. The easiest growth path is adding two midfielders to create a 2-5-1 — more passing choices, more width, and the striker still has support.",
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
        coachSays: "More space means more decisions. The players who scan early and move before the ball arrives will always be one step ahead.",
        practice: {
          type: "what-would-you-do",
          scenario: "You just moved from 7v7 to 9v9. You are a midfielder. The ball is with your goalkeeper. What is different now?",
          choices: [
            { label: "Nothing changes — I do the same job as in 7v7", response: "The job idea is the same, but 9v9 is bigger. Passes travel farther, recovery runs take more effort, and you need to check your shoulder earlier because teammates are farther away. Same role, more ground to cover." },
            { label: "I need to scan earlier and expect longer passes", response: "Exactly. The bigger field means help takes longer to arrive. Check your shoulder before the ball gets to you, and be ready for passes that travel farther than they did in 7v7. Your timing has to be earlier." },
            { label: "I should sprint to the ball every time it moves", response: "Chasing every ball on a bigger field will tire you out fast. Read the game, scan early, and move to the right position — not just toward the ball. Good positioning beats running everywhere." },
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
        coachSays: "9v9 is where soccer starts to feel like the real game. Every habit you build here — spacing, scanning, covering — will make you better in 11v11.",
        practice: {
          type: "true-false",
          statement: "A 9v9 team playing a 3-4-1 formation has 3 defenders, 4 midfielders, 1 forward, and 1 goalkeeper — 9 players total.",
          answer: true,
          explanation: "Correct! 1 goalkeeper + 3 defenders + 4 midfielders + 1 forward = 9 players total. In 9v9, the formation number counts all 8 field players, plus the goalkeeper makes 9.",
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
        coachSays: "Shape gives you a starting point. The game gives you the actual choices. Know both.",
        comparison: {
          left: { label: "Choose 2-5-1 When...", items: ["Your midfielders are strong and can run both ways all game", "You want more passing choices around the ball", "Wide midfielders can recover quickly when the team loses the ball", "You want to keep the ball and build attacks from deep"] },
          right: { label: "Choose 3-4-1 When...", items: ["Your team needs more cover behind the ball", "The opponent has a dangerous forward who needs marking", "Outside midfielders can step forward at the right moments", "Your team works best with a secure back line behind them"] },
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
        coachSays: "Every role you have in 9v9 already has a matching role in 11v11. You are already learning the full game — you just need to add two players.",
        practice: {
          type: "true-false",
          statement: "A 2-5-1 in 9v9 can grow into a 4-3-3 in 11v11 by adding two fullbacks and pushing the wide midfielders forward into winger roles.",
          answer: true,
          explanation: "Exactly right. You keep the striker as the 9, keep three central midfielders as the 6, 8, and 10, and add a right back (2) and left back (3). The two wide midfielders step up into the 7 and 11 winger roles. The shape grows naturally.",
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
        coachSays: "The field gets big, but the game is still the same thing — get the ball, keep it, and put it in the goal. Stay calm and play your game.",
        funFact: {
          title: "How Far Do Players Run?",
          body: "On a full 11v11 field, Premier League players run an average of 7 miles per game. Some midfielders run more than 9 miles in a single match. That is why spacing matters so much — if you run to the wrong spot, you are wasting energy that you need later.",
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
        coachSays: "Our 2-5-1 is already teaching you the 4-3-3. The wide players, the striker, the connecting midfielders — it is all right there.",
        practice: {
          type: "what-would-you-do",
          scenario: "You are a wide midfielder in our 2-5-1. Your team wins the ball and the center midfielder has it with time. What is your job?",
          choices: [
            { label: "Move centrally to get close to the ball and help keep possession", response: "Moving central crowds the team and leaves the wide channel empty. In our 2-5-1, wide midfielders stretch the field by staying wide. Give the center midfielder a wide option — that is what opens up space and keeps the shape." },
            { label: "Push wide and give the center midfielder a wide passing option", response: "Exactly. In our attacking shape, wide players stretch the defense. When the center midfielder has the ball, push wide so they can play forward or out wide to feet. Your width creates the space others need." },
            { label: "Stay back and cover behind the center midfielder", response: "That is the job of the two defenders, not the wide midfielder. When the team wins the ball, your job is to push forward and wide to give options. One of the two defenders protects — not you." },
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
        coachSays: "When we defend, everyone defends. The striker guides the press from the front, midfield slides together, and the back three locks the door.",
        comparison: {
          left: { label: "Disorganized Defense", items: ["Players scattered randomly across the field", "Nobody presses the ball — the other team has time", "Big gaps open between the defensive and midfield lines", "The center is wide open for easy passes through"] },
          right: { label: "Organized 3-4-1 Defense", items: ["Back three covers the middle and wide spaces", "Midfield four slides together toward the ball", "Striker guides the press from the front to force mistakes", "Team stays compact so no dangerous gap opens between lines"] },
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
        coachSays: "Attack in 2-5-1. Defend in 3-4-1. React in one second. Learn those three things and you understand how our team plays.",
        practice: {
          type: "what-would-you-do",
          scenario: "Your team is attacking in 2-5-1 shape. The other team suddenly wins the ball. What happens first?",
          choices: [
            { label: "Keep pushing forward — the attack might still work", response: "If the ball just changed teams, your attack is over. Players who keep going forward leave the back line exposed and hand the other team a fast counterattack. React immediately — do not wait to see what happens." },
            { label: "The player nearest the ball presses while others recover toward 3-4-1", response: "Exactly. The closest player puts immediate pressure to slow the other team down. Everyone else recovers and reorganizes toward 3-4-1 as fast as possible. Pressure first, recover together." },
            { label: "Everyone runs back as fast as possible without pressing", response: "Getting back is important, but if nobody presses the ball first, the other team gets a free pass forward. One player must press right away to buy time while others recover behind them." },
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
        coachSays: "You do not need to know every position on the field. Know yours, know the players next to you, and know what happens when the ball moves.",
        practice: {
          type: "true-false",
          statement: "A wide midfielder in our 9v9 shape is most likely to become a central midfielder in 11v11.",
          answer: false,
          explanation: "A wide midfielder in our 2-5-1 is most likely to become a winger — the 7 or the 11 — in 11v11. They are already learning to stay wide, make runs, and be dangerous. That is exactly what the winger job in a 4-3-3 looks like.",
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
        coachSays: "After a goal, the score does not change your next job. Reset your shape, get back in position, and play the kickoff with a plan.",
        practice: {
          type: "true-false",
          statement: "On a kickoff, the ball must go forward — passing backward is not allowed.",
          answer: false,
          explanation: "The ball can go in any direction on a kickoff — forward, sideways, or backward. It is in play as soon as it is kicked and clearly moves. Many teams pass backward first to build a better attack from a safer position.",
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
        coachSays: "A legal throw is both hands, from behind the head, and both feet on the line. Referees watch carefully — practice it so it is automatic.",
        practice: {
          type: "true-false",
          statement: "A player cannot be offside directly from a throw-in.",
          answer: true,
          explanation: "Correct! Offside does not apply on the direct throw-in. A player can receive a throw-in even from an advanced position without being called offside. However, once another teammate touches the ball after the throw, normal offside rules apply again.",
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
        coachSays: "Corners are a team moment — every player has a job. Attackers move before the kick, defenders find their mark early. No standing around waiting.",
        practice: {
          type: "what-would-you-do",
          scenario: "You are defending a corner kick. A player on the other team is standing right next to you near goal. What do you do?",
          choices: [
            { label: "Watch only the ball coming in and react when it arrives", response: "Watching only the ball means losing the player next to you. A good marker checks both — they know where their player is AND they track the ball. The moment the kick is taken, go with your player." },
            { label: "Mark the player closely and go with their movement when the kick is taken", response: "Yes. Know your player and stay tight. When the kick is taken, follow them and compete for the ball. Do not let them get a free run in dangerous space near goal." },
            { label: "Leave them and protect the space near the penalty spot instead", response: "Space defending is a real tactic, but if a specific dangerous player is right next to you, marking them directly is usually better. Talk to teammates so nobody is left completely free." },
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
        coachSays: "Before every free kick, ask two questions: direct or indirect? Wait for whistle or can we go quick? Two questions. Every time.",
        practice: {
          type: "true-false" as const,
          statement: "On a direct free kick, the ball must touch another player before it can go into the goal.",
          answer: false,
          explanation: "That is the rule for an indirect free kick. A direct free kick can go straight into the opponent's goal from the kick. That is what makes it direct.",
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
        coachSays: "When you take a penalty, decide where you are shooting before your run starts. Then trust that decision and commit to it.",
        funFact: {
          title: "Penalty Kicks at the World Cup",
          body: "Goalkeepers save only about 20-25% of all penalty kicks. Yet one single save at the right moment can change everything — like Emiliano Martínez for Argentina in the 2022 World Cup semi-final shootout against the Netherlands, a save that helped send Argentina to the final they eventually won.",
        },
        practice: {
          type: "true-false",
          statement: "After taking a penalty kick, the kicker can follow up and play the rebound immediately if the goalkeeper saves it.",
          answer: false,
          explanation: "The kicker cannot play the ball again until another player has touched it first. If the goalkeeper saves it and the ball comes back, a different player from either team must touch it before the original kicker can play it — otherwise it is an indirect free kick for the other team.",
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
        coachSays: "Dropped ball means the referee is in charge of the restart. Listen, give space, and restart calmly. This is a moment to show respect for the game.",
        practice: {
          type: "true-false",
          statement: "If play stops inside the penalty area, the dropped ball goes to whichever field player last touched the ball.",
          answer: false,
          explanation: "When play stops inside the penalty area, the dropped ball goes to the goalkeeper — regardless of who last touched it. This is an important rule to know so you give the right player the space they need.",
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
        coachSays: "Back to the CM, then into the corner. Two passes, zero panic. Same plan every kickoff — do it with speed and purpose.",
        practice: {
          type: "what-would-you-do",
          scenario: "Your team is taking the kickoff. You are the center midfielder. The first pass comes back to you. What do you do next?",
          choices: [
            { label: "Shoot from the center circle — catch them off guard", response: "Shooting from center circle is extremely low percentage and usually just gives the ball straight back. Our kickoff plan is to play into the opponent's corner-flag space — not to shoot from distance." },
            { label: "Play the ball into the opponent's corner-flag space", response: "That is the plan. This moves the game as far from our goal as possible. The wide player can press immediately, and we start the game with the ball near their corner instead of ours. Safe and aggressive at the same time." },
            { label: "Pass it short again to a nearby midfielder", response: "Passing short again gives the other team time to organize around you. Once you receive the kickoff pass, the next job is clear — play it long into the corner-flag space. Be decisive." },
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
        coachSays: "Throw it fast, throw it forward, lead the runner. A slow throw-in hands the momentum right back to the other team.",
        practice: {
          type: "what-would-you-do",
          scenario: "Your winger takes a throw-in but all the nearby teammates are tightly marked. What should the winger do?",
          choices: [
            { label: "Hold the ball and wait for a teammate to get open", response: "You cannot wait long with a throw-in — the referee will award it to the other team if you hold too long. More importantly, waiting gives the defense even more time to organize. Act quickly." },
            { label: "Throw the ball into space for a teammate to run onto", response: "Exactly. If no one is immediately open, lead a runner into space. A throw that puts a sprinting teammate in space is better than waiting for the perfect option. Speed of play is our rule." },
            { label: "Throw it back to the goalkeeper to be safe", response: "That wastes the restart and gives the other team time to set up. Our plan is to keep the game moving forward. Throw into space, make the defense react to us — not the other way around." },
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
        coachSays: "Before you take any free kick, answer two questions: is it direct or indirect, and do we wait for the whistle? Get those right first.",
        practice: {
          type: "what-would-you-do",
          scenario: "Your team wins a free kick just outside the penalty area. The referee raises one arm in the air. What does this tell you?",
          choices: [
            { label: "It means we can take it quickly before the wall is set", response: "One arm raised during a free kick signals indirect — not permission to go quickly. Indirect means another player must touch the ball before a goal can count. Make sure a teammate is ready to receive the first pass." },
            { label: "It is an indirect free kick — a teammate must touch the ball before we can score", response: "Correct. One arm raised means indirect. If you shoot straight into goal from an indirect free kick, it does not count — it becomes a goal kick. Make sure you have the second-touch player in position first." },
            { label: "It means a card is coming and we should wait for the referee to finish", response: "One arm raised before the free kick signals indirect — not a card. Cards are shown by the referee holding up the card itself. An arm raised at free kick time means you need a second touch before scoring." },
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
        coachSays: "Three runners, three different spots. If all three go to the same place, defenders can mark you all with two players. Spread out and make them choose.",
        practice: {
          type: "what-would-you-do",
          scenario: "You are Runner 1 in our corner kick plan — the first player in the stack. The kicker gives the hand signal. Where do you run?",
          choices: [
            { label: "Run to the back of the box away from the kick — that is where the ball usually lands", response: "That is Runner 3's job. Runner 1 breaks forward toward the near-danger area. If runners swap targets, the whole plan falls apart and defenders can read you easily. Stick to your role." },
            { label: "Run forward toward the near-danger area", response: "That is your run. Runner 1 attacks forward — the most dangerous space near goal. Time it right so you arrive as the ball arrives. Attack it with confidence and be ready to shoot, redirect, or flick on." },
            { label: "Stay at the tip of the box and wait for a second ball", response: "Staying put leaves your run empty and makes the corner much easier to defend. The point of the three-runner plan is that all three go at the same time. Your run creates space for the others too." },
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
        coachSays: "Dropped ball — calm down, listen to the referee, get ready. One job: restart safely and give your team a clean start.",
        practice: {
          type: "true-false",
          statement: "A player can score directly from a dropped ball without anyone else touching it first.",
          answer: false,
          explanation: "A goal cannot be scored directly from a dropped ball. If the ball goes straight into goal without touching at least two players, the restart changes — the other team gets either a goal kick or a corner kick instead.",
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
        coachSays: "Hard is not the same as unfair. You can be tough and physical — just stay in control of your body. Control wins the ball; losing control loses it for the team.",
        practice: {
          type: "true-false",
          statement: "In most U11 youth games in the United States, players are not allowed to head the ball.",
          answer: true,
          explanation: "Correct. Most U.S. youth leagues ban heading at U11 and younger to protect player safety. If your game has a no-heading rule, let the ball drop and play it with your foot, thigh, or chest instead.",
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
        coachSays: "Shield with your body, not your arms. Body position plus balance equals legal. Arms flying out equals foul.",
        practice: {
          type: "what-would-you-do",
          scenario: "You have the ball near the sideline. A defender presses you hard from behind. You want to keep possession. What do you do?",
          choices: [
            { label: "Swing your arm back to push the defender away", response: "Using your arm to push is a foul — even if the defender is pressing unfairly. Shield with your body instead. Get your body between the ball and the defender with arms close to your sides." },
            { label: "Shield the ball with your body, keeping it close to your feet", response: "Exactly. Body between the defender and ball, arms in, small controlled touches to keep possession. That is a legal and effective shield — the defender has to go around you without getting a foul called on you." },
            { label: "Stop and wait for the referee to give you a free kick", response: "A defender pressing you hard from behind is not automatically a foul. They are allowed to challenge for the ball. Use your body to shield and stay moving — do not stop and wait for a call that might not come." },
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
        coachSays: "Careless gets a free kick. Reckless might get a yellow. Excessive force risks a red. Stay in control and none of those happen to you.",
        practice: {
          type: "true-false",
          statement: "A yellow card is automatically given for any careless foul.",
          answer: false,
          explanation: "Careless play usually results in just a free kick — not automatically a yellow card. A yellow is more likely for reckless play, where the player takes too much risk with an opponent's safety. Excessive force — truly dangerous challenges — is what risks a red card.",
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
        coachSays: "Defend with arms under control. The referee is not looking at the ball when you are in the box — they are watching your arms.",
        practice: {
          type: "true-false",
          statement: "Every time the ball touches a player's hand or arm, it is an automatic handball offence.",
          answer: false,
          explanation: "Not every touch is handball. Referees look at how it happened — was the arm deliberately moved to the ball, did the arm make the body unnaturally bigger, and was the position natural for that movement? A ball hitting a hand that is close to the body in a normal position is usually not called.",
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
        coachSays: "If heading is off, do not panic when the ball is in the air. Step back, let it drop, and use your feet. You have more time than you think.",
        practice: {
          type: "true-false" as const,
          statement: "If heading is not allowed and you accidentally head the ball, you are automatically sent off.",
          answer: false,
          explanation: "An accidental header is not a red card offence. The referee will stop play and handle the restart according to league rules. Stay calm, listen to the referee, and reset.",
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
        coachSays: "Offside is judged when your teammate plays the ball — not when you receive it. You can start onside and run behind after the pass. That is the whole game.",
        practice: {
          type: "true-false" as const,
          statement: "You can be called offside just for standing in an advanced position, even if you do not touch the ball.",
          answer: false,
          explanation: "Standing in an offside position is not an offence by itself. It only becomes an offside offence when you get involved — playing the ball, challenging an opponent, blocking play, or gaining an advantage from a rebound.",
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
        coachSays: "Level is onside. You do not have to be behind the defender — being even with them is fine. Use that. Start level and then run.",
        practice: {
          type: "true-false" as const,
          statement: "If you are level with the second-last defender when the ball is played, you are offside.",
          answer: false,
          explanation: "Level is onside. You only need to be behind the second-last defender to avoid offside — being exactly level with them is perfectly legal. Use that edge to time your runs.",
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
        coachSays: "The assistant referee freezes the picture at the moment your teammate plays the ball. Train yourself to be onside at that exact moment — then run as fast as you want.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You are a striker making a run behind the defense. You can see a gap, but you know you are slightly ahead of the last defender. Your teammate is about to play the ball.",
          choices: [
            { label: "Keep running — you might get lucky", response: "If you are offside when the ball is played, the assistant referee's flag goes up. You will not get the ball. Curve your run or step back onside before the pass is made." },
            { label: "Slow down and curve back onside, then go again", response: "Smart. Get level with the defender, then explode forward at the moment your teammate plays the ball. If you are onside at that moment, you can sprint as fast as you want. Timing beats speed." },
            { label: "Stop your run and call for the ball to feet", response: "That works too — sometimes dropping short to receive to feet is the right move. But if the gap behind is real, learn to time your run so you can attack it onside rather than giving it up entirely." },
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
        coachSays: "You cannot be offside from a throw-in — use that. But the moment a teammate touches the ball after the restart, the offside rule is fully back on. Stay sharp.",
        practice: {
          type: "true-false" as const,
          statement: "After a short corner, if your teammate passes to you inside the box, you can be called offside.",
          answer: true,
          explanation: "You cannot be offside directly from a corner kick — but the moment a teammate touches the ball after the initial kick, offside rules apply again. A short corner pass is a second touch, so yes, you can be offside from it.",
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
        coachSays: "When the referee stops play, your brain should not stop with it. Know the restart before it happens. You should be ready before the whistle goes again.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "Play has stopped for a long injury. You are standing by yourself near midfield while players from both teams wait around.",
          choices: [
            { label: "Just wait and watch what is happening with the injured player", response: "It is respectful to give the injured player space — but do not just stand there with your brain off. Use this time to breathe, look around at the shape, and think about the next restart." },
            { label: "Walk over to your team, talk about the game, and know the restart", response: "Exactly right. Long stoppages are team moments. Talk about what is working, what needs fixing, what the restart is, and who goes where. When play restarts you are already thinking." },
            { label: "Sit down and rest — it is a long stoppage", response: "Resting your legs is not the problem, but switching your brain off is. Use the time to connect with your team. The game starts again and you should be the most organized team on the field." },
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
        coachSays: "Give the hurt player space — that is respect. Then get with your team. That is how you honor them too. Do not just stand around waiting.",
        practice: {
          type: "true-false" as const,
          statement: "When a player is injured, the team with the ball should kick it out of play to stop the game.",
          answer: false,
          explanation: "Only the referee can officially stop the game. In youth soccer especially, the referee controls when play stops. While kicking the ball out is a sportsmanship tradition at some levels, players should not assume they must do it — listen to your coach and the referee.",
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
        coachSays: "A delay is not wasted time — it is free coaching time. Use it. When the game restarts you should be the most organized team on the field.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "There is a long delay because the referee is having a discussion with both coaches about the score. You are not sure how long it will take.",
          choices: [
            { label: "Kick the ball around and stay loose", response: "Staying physically loose is fine, but staying mentally loose is the mistake. Talk to your teammates. What third of the field are you dominating? What channel are they attacking? What is the restart going to be?" },
            { label: "Gather with your team and talk about what is working", response: "This is the right call. Use the time. Talk about shape, what is working, what the restart will be, and who needs to cover where. When the referee finishes, your team is already organized." },
            { label: "Ask the coach what they are discussing", response: "That is not your job during the game. Trust that the adults are handling it. Your job is to use the time to connect with your teammates and be mentally ready when play restarts." },
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
        coachSays: "If you disagree with a call, your job is to reset and play the next one. My job is to talk to the referee if needed. Do not make my job harder by arguing.",
        practice: {
          type: "true-false" as const,
          statement: "If the assistant referee raises their flag, play is automatically stopped and you should wait.",
          answer: false,
          explanation: "The assistant referee's flag is only a signal to the center referee. The center referee decides whether to stop play. Until you hear the whistle from the center referee, keep playing. Do not stop for a flag alone.",
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
        coachSays: "If you stop because someone yells and the referee does not call it, you just gave the other team a free advantage. Play every second until you hear that whistle.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You are driving toward goal. You feel contact from a defender behind you. You hear a teammate yell 'foul!' but no whistle has blown.",
          choices: [
            { label: "Stop and look at the referee to see if they call it", response: "The moment you stop, the chance is gone. If the referee does not call it, you just gave the ball away. Play through contact until you hear the whistle — then look up." },
            { label: "Keep playing through the contact and finish", response: "Yes. Play to the whistle. If the referee calls the foul, the game stops and you get the free kick. But if you keep going and score, the goal can stand. Never stop early." },
            { label: "Go down to the ground so the referee can see the foul", response: "Going down deliberately without being knocked down is simulation — that can earn you a yellow card. Stay on your feet, play hard, and let the contact speak for itself." },
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
    summary: "The team's principles for attacking, defending, transitions, restarts, and game scenarios.",
    importance: "Build Next",
    importanceTone: "low",
    imageSrc: "/module-images/team-tactical-principles.png",
    imagePrompt:
      "Youth soccer team moving together in organized shape during training, coach-style tactical feel, visible spacing and support angles, bright realistic sports image, no text, no logos, 16:9",
    lessons: [
      // Module 1: Attacking Principles
      {
        slug: "get-wide-stay-wide",
        title: "Get Wide, Stay Wide",
        summary: "Use the width of the field to stretch the defense.",
        body: "Our Shape: 3-4-1\n\nWe play out of a 3-4-1 — three defenders across the back, four players across midfield, and one player up top as our target. When we have the ball, this shape is our starting point for attacking. But the shape only works if players move into the right spaces once we are in possession.\n\nWhat 'Get Wide' Means\n\nGetting wide means moving toward the touchline and using the full width of the field. In our 3-4-1, this is mainly the job of our two wingers (LW and RW), but every player should understand it — the spacing of the whole team depends on it.\n\nGet Wide AND Get Open\n\nGetting wide is not just about standing near the touchline. If you are wide but hiding behind a defender, or standing somewhere a teammate cannot pass to you, you are not actually helping. Getting wide means finding a spot on the touchline where a teammate can see you and reach you — in front of the defender, in the gap between two defenders, or in the space behind the opponent's midfield line.\n\nStay Wide — Resist the Pull to the Middle\n\nWhen the ball is on the other side of the field, your instinct might be to drift toward the center to 'get involved.' Resist that pull. If you drift inside, the touchline space disappears and the field gets smaller for our team — which makes it easier for the defense. Stay in your channel. Trust that the ball will come to you.\n\nWhy We Get Wide: Stretch the Field\n\nThe purpose of width is to stretch the field — to make it as big as possible for the other team to defend. When both wide players hold the touchlines, the defense has to spread out to cover them. That stretching opens gaps between defenders and in the middle of the field for our central players to use.\n\nStaying Connected\n\nGetting wide does not mean playing alone out there. The team still needs to stay connected — close enough that passes are on, with players creating angles to support each other. When we are wide and connected, we can swing the ball from side to side, find gaps, and play forward into the space the other team is forced to leave open.",
        callouts: [
          { title: "Wide and open", body: "Getting wide only helps if a teammate can actually pass to you." },
          { title: "Stretch, don't shrink", body: "Holding your width stretches the defense and opens space centrally." },
        ],
        bullets: [
          {
            title: "Get wide checklist",
            items: [
              "Find the touchline in your channel.",
              "Make sure a teammate can see you and reach you with a pass.",
              "Do not stand directly behind a defender.",
              "Look for the gap between the opponent's lines.",
            ],
          },
          {
            title: "Stay wide habits",
            items: [
              "Do not drift inside just because the ball is on the other side.",
              "Hold your width until the ball or a teammate's run changes the picture.",
              "Trust the switch — the ball can find you across the field.",
              "If you do come inside, make sure a teammate fills your space.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Get-wide habit", "What it does"],
          rows: [
            ["Ball on your side", "Stay wide and show for the ball on the line.", "Gives the ball carrier a simple pass and keeps the field big."],
            ["Ball on the far side", "Hold your width — do not drift to the ball.", "Keeps the defense stretched so the far side stays open."],
            ["Defender steps to you", "Check into the gap they left behind.", "Creates a passing lane in the space the defender just vacated."],
            ["You are camped behind a defender", "Move so a teammate can see and reach you.", "Turns a hidden player into a real passing option."],
          ],
        },
        coachSays: "Width is not a place to disappear — it's a place to be dangerous. Get wide, stay open, and make the defense choose between you and the ball.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You are our left winger in the 3-4-1. The ball is on the right side of the field with our right winger. You start to drift toward the center to 'get involved.'",
          choices: [
            { label: "Keep drifting toward the ball so you are closer to the action", response: "If you drift to the ball side, both wide players end up in the same area and the left touchline disappears. The defense can shrink the field and crowd the ball. Hold your width — the switch can find you." },
            { label: "Stay wide on the left touchline and stay ready for the switch", response: "Yes. By holding your width, you keep the field stretched. If the ball switches to you, you have space to attack. If it doesn't, you are still pulling a defender wide, which opens room for your teammates centrally." },
            { label: "Move wide but tuck in just behind the opponent's wide defender", response: "Being wide only helps if a teammate can actually find you. If you are hidden directly behind a defender, the pass cannot reach you even if you are technically 'wide.' Get wide in a spot where you can be seen and played to." },
          ],
        },
        diagram: "get-wide-stay-wide",
      },
      {
        slug: "look-to-go-forward",
        title: "Look to Go Forward",
        summary: "Always check forward options first when you have the ball.",
        body: "Plan A: Go Forward\n\nWhen you receive the ball, your first look should be forward. Do not be afraid of it. Forward does not just mean a pass — it can be a dribble at a defender, a pass into a teammate's path, or even a straight breakaway if the space is there. Before you do anything else, ask: is there space in front of me, and can I or a teammate get into it?\n\nPlan B: Go Wide\n\nIf forward is not on, the next look is wide — the same width we talked about in Get Wide, Stay Wide. A switch to a winger who is wide and open can open up the field again and create a new forward option a moment later. Wide is not giving up on going forward. It is often the quickest way back to it.\n\nPlan C: Play It Back — But Only If Safe\n\nIf forward and wide are both covered, playing the ball backward to keep possession is okay. It is not a failure — it can be the smart choice. The key word is safe. A backward pass should be an easy, controlled pass to a teammate who has time and space, not a rushed ball that puts a teammate under pressure right in front of our own goal.\n\nPass Into Space, Not Just to Feet\n\nLooking forward is not only about finding a teammate standing in a good spot. Often the best forward pass is played into the space ahead of a teammate's run, so they can attack it at speed. A pass to feet can get a player marked tightly from behind. A pass into space lets them turn and run at the defense.\n\nThe One Place We Never Play It\n\nNo matter what — forward, wide, or back — there is one option that is never on: a pass to the other team. If you are under pressure and forward, wide, and back all look risky, take the safer option even if it feels less exciting. A simple pass into space toward our own goal is always better than forcing a pass that gets intercepted.",
        callouts: [
          { title: "Forward first", body: "Before anything else, check if you, or a teammate, can go forward — dribble, pass, or breakaway." },
          { title: "Never to them", body: "A pass to the other team is never the right choice, no matter how risky the alternatives look." },
        ],
        bullets: [
          {
            title: "Your decision order",
            items: [
              "1. Forward — can I dribble, pass forward, or send a teammate on a breakaway?",
              "2. Wide — if forward is covered, can I switch to a wide, open teammate?",
              "3. Back — if forward and wide are covered, is there a safe pass backward?",
              "Never — a pass that gives the ball to the other team.",
            ],
          },
          {
            title: "Passing into space checklist",
            items: [
              "Look for the run a teammate is about to make, not just where they are standing.",
              "Play the pass slightly ahead of them so they can run onto it.",
              "A pass into space lets a teammate turn and attack — a pass to feet can get them marked from behind.",
              "Weight the pass so it reaches the space before the defender does.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "What to look for", "Why"],
          rows: [
            ["Space in front of you", "Dribble forward or play a forward pass into space.", "The fastest way to create a chance is to attack space before the defense resets."],
            ["Forward is covered", "Switch wide to an open teammate.", "Width can stretch the defense and open a new forward option."],
            ["Forward and wide are covered", "Play a safe pass backward to keep possession.", "Keeping the ball is better than forcing a risky pass."],
            ["Under heavy pressure, no safe options", "Take the safest available option, even if it is less exciting.", "Losing the ball to the other team is always the worst outcome."],
          ],
        },
        coachSays: "Forward first — always. If it's not on, go wide. If that's not on, go back, but only if it's safe. The one thing that's never on is giving it to them.",
        diagram: "look-to-go-forward",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You receive the ball in the middle third. A teammate is making a run into open space ahead of you, but they are still a few steps from the ball reaching them. Another teammate is standing still, closely marked, a few yards away.",
          choices: [
            { label: "Pass it firmly to the feet of the closely marked teammate", response: "This pass is risky and does not gain much. The marked teammate has a defender right on them and little room to do anything useful with it." },
            { label: "Play the pass into the space ahead of your teammate's run", response: "Yes. This pass lets your teammate run onto the ball at speed, away from their marker, and keeps your team moving forward." },
            { label: "Play it backward to your goalkeeper to be safe", response: "Going backward isn't wrong when forward and wide are covered, but here a good forward option exists. Going backward when forward is on gives up good attacking ground for no reason." },
          ],
        },
      },
      {
        slug: "pass-to-feet-space-or-angles",
        title: "Pass to Feet, Space, or Angles",
        summary: "Know the three kinds of passes and when to use each.",
        body: "The Worst Thing You Can Do\n\nBefore anything else: passing the ball to the other team is the worst thing you can do on a soccer field. There are so many options on the ball that do not require panicking and kicking it away. Slow down, look at your choices, and pick one of them.\n\nPass to Feet\n\nIf a teammate is open and has space to receive, play it to their feet. A pass to feet is simple, controlled, and keeps possession moving. Before you pass, communicate — let your teammate know if an opponent is closing in behind them, or call them to come to the ball if they need to check toward you.\n\nPass to Space\n\nSometimes a pass straight to feet is not the best option, even if a teammate is technically open — maybe they are tightly marked and a pass to feet gets them in trouble immediately. In that case, play it slightly ahead of them, to their left or right, into the space where they can run onto it. A pass into space lets your teammate attack in the direction that helps the team most, instead of receiving the ball with their back to goal and a defender on top of them.\n\nPassing Angles — Breaking Lines\n\nA passing angle is a pass played through a gap in the defense to break their line — sending the ball past a row of opponents so a teammate can run onto it on the other side. A lot of these passes come from our four midfield players in the 3-4-1, threading the ball through the opposition's defensive line for a teammate to attack.\n\nWhen All Else Fails: The Tactical Clearance\n\nThis does not mean you can never just kick the ball. If you are in a tight 1v1 near your own goal, in the defensive third, under real pressure, and you cannot find a pass to feet, space, or through a gap — a tactical clearance is a smart choice. Get the ball away from danger, out of bounds, or up the field. A clearance is a thousand times better than panicking and giving the ball straight to the other team.",
        callouts: [
          { title: "Never to them", body: "Passing to the other team is the worst outcome on the field — there is almost always a better option." },
          { title: "Lead the run", body: "A pass into space lets a teammate attack forward instead of receiving with a defender on their back." },
        ],
        bullets: [
          {
            title: "Pass to feet — do this",
            items: [
              "Check that your teammate has time and space to receive.",
              "Communicate — call out if a defender is closing in behind them.",
              "Tell them to check to the ball if they need to come find it.",
              "Use a simple, controlled pass — no need to overcomplicate it.",
            ],
          },
          {
            title: "Pass to space — do this",
            items: [
              "Look at the direction your teammate can run that helps the team most.",
              "Play the ball slightly ahead of them, into that space.",
              "Weight the pass so it arrives as they arrive — not too far ahead, not too short.",
              "Use this when a pass to feet would put your teammate under immediate pressure.",
            ],
          },
        ],
        table: {
          columns: ["Pass type", "When to use it", "What it does"],
          rows: [
            ["To feet", "Teammate is open with time and space.", "Keeps possession simple and controlled."],
            ["Into space", "Teammate is marked or about to make a run.", "Lets a teammate attack forward at speed, away from pressure."],
            ["On an angle (breaking lines)", "There is a gap between opponents' lines, often from one of our midfielders.", "Sends a teammate through the defense to attack the space behind it."],
            ["Tactical clearance", "Tight 1v1 near our own goal, no pass available.", "Gets the ball to safety — far better than giving it to the other team."],
          ],
        },
        coachSays: "Giving it to them is never the answer. To feet, into space, through a gap, or away to safety — there's always something better than just kicking it to the other team.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You are one of our central midfielders in the 3-4-1 and you have the ball. You spot a teammate making a run between two opponents, into the space behind their midfield line.",
          choices: [
            { label: "Play it straight to your teammate's feet right now", response: "Your teammate is making a run, not standing still — a pass to feet here would slow them down and might get cut out by the defenders they're running past." },
            { label: "Thread the pass through the gap, into the space they're running into", response: "Yes. This is a passing angle that breaks the defensive line — your teammate runs onto the ball on the other side of the opponents, in space." },
            { label: "It feels risky, so just clear it up the field instead", response: "A clearance is for emergencies — tight spaces near your own goal with no options. Here you have a clear passing angle through the line. Take it." },
          ],
        },
      },
      {
        slug: "create-2v1-and-3v1",
        title: "Create 2v1 and 3v1 Situations",
        summary: "Use numbers-up situations to break down the defense.",
        body: "The Attacking Number Always Goes First\n\nWhen we talk about numbers on the field — 2v1, 3v2, 1v0 — the attacking number always comes first, and the defending number comes second. So a 3v2 means three attackers against two defenders — the attackers have the advantage. A 1v2 means one attacker against two defenders — the attacker is outnumbered. In this lesson, we are the attacking team, so our numbers are the ones listed first.\n\nFrom 1v2 to 3v2: Support the Run\n\nAfter we look to go forward and find space — whether it's a dribble or a pass into space — we are not done. The team's job now is to support the player on the ball and turn a bad number (1v2) into a good number (3v2, 2v1, or even 1v0, a clean breakaway).\n\nPicture our CM driving forward with the ball and space to run into, but two opposing center backs are between them and the goal. On their own, that's a 1v2 — the odds favor the defense. But our CAM and ST can recognize the moment and join the run, arriving alongside the CM. Now it's 3 attackers against their 2 defenders — a 3v2. The defenders cannot mark all three of us at once, and our CM has passing angles to break through.\n\nWhere Support Comes From\n\nSupport does not come from one fixed player every time. Often it's the CAM and ST, since they are already higher up the field. But depending on which side the ball is on, a winger nearby can also join the overload. The point is recognizing the moment — when a teammate goes forward into space, the players around them should be reading it and moving to create extra numbers.\n\nCommunication and Passing Angles\n\nNone of this works without communication and good passing angles. The player making the run should call for support or signal where they're going. The supporting players need to find an angle the ball carrier can actually use — not stand directly behind a defender, but in a spot that gives a clear passing lane. Together, that's how 1v2 becomes 3v2, and how 3v2 can turn into a 1v0 breakaway on goal.\n\nWhat Not to Do: Watch Alone\n\nThe worst version of this is doing nothing — watching a teammate try to beat two defenders by themselves with no support arriving. If our CM is stuck in a 1v2 and everyone else just watches, we are giving the defense an easy job. Numbers up does not happen by accident — it happens because teammates move to create it.",
        callouts: [
          { title: "Attacking number first", body: "2v1, 3v2, 1v2 — the attacking number always comes first, the defending number second." },
          { title: "Numbers up by choice", body: "A 3v2 doesn't happen on its own — teammates have to recognize the moment and move to create it." },
        ],
        bullets: [
          {
            title: "Turning 1v2 into 3v2",
            items: [
              "Recognize when a teammate has driven into space and is facing defenders alone.",
              "CAM, ST, or a nearby winger reads the moment and joins the run.",
              "Find an angle the ball carrier can actually pass to — not hidden behind a defender.",
              "Communicate — call for the ball or signal where you're going.",
            ],
          },
          {
            title: "What to avoid",
            items: [
              "Standing still and watching a teammate try to beat two defenders alone.",
              "Bunching up next to the ball carrier instead of finding a different angle.",
              "Arriving late, after the defenders have already recovered their shape.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "What it means", "What we do"],
          rows: [
            ["1v2", "One of us attacking, two of them defending — we are outnumbered.", "Look for support arriving before committing to take both defenders on."],
            ["2v1", "Two of us attacking, one of them defending — we have the advantage.", "Use the extra player to create a passing angle and break through."],
            ["3v2", "Three of us attacking, two of them defending — a strong overload.", "Spread out so the defenders can't cover every passing angle."],
            ["1v0", "A clean breakaway — only the goalkeeper to beat.", "The reward for turning the numbers in our favor."],
          ],
        },
        coachSays: "The attacking number always goes first. A 1v2 is a problem to solve together, not something one player has to win alone. Move, support, and turn it into a 3v2.",
        diagram: "create-2v1-and-3v1",
        practice: {
          type: "true-false" as const,
          statement: "If our CM is attacking and faces two defenders alone, that's a 1v2 — and a 3v2 means three attackers against two defenders.",
          answer: true,
          explanation: "The attacking number always goes first, the defending number second. A 1v2 means 1 attacker vs 2 defenders — outnumbered. A 3v2 means 3 attackers vs 2 defenders — numbers up for the attack.",
        },
      },
      {
        slug: "protect-support-attack",
        title: "Protect, Support, Attack",
        summary: "Once we have the ball: protect it, support the player on it, and attack with purpose.",
        body: "Protect: Win the First Touch\n\nThe moment the ball arrives, your first job is to protect it. Take a good first touch — away from pressure, and never into the other team. Before the ball even gets to you, scan the field so you know what's around you. If you already know where the pressure is coming from, a defender can't surprise you and win the ball easily.\n\nProtect: Take a Touch Into Space\n\nIf you're under pressure, take your touch into the space away from the defender — using your body to shield the ball if you need to. Once you have it under control, immediately think about what's next: can you dribble, can you keep controlling it, or is there space to break into? Do not freak out. A calm, protected first touch buys you time to make the next decision.\n\nSupport: Move, Don't Stand Still\n\nEveryone else on the team has a job too the moment we have the ball: support. Move into space, away from opponents, so you give the player on the ball an option. Never stand still — a player who isn't moving is easy to mark and gives no help at all. Good support means constantly adjusting your position based on where the ball and the defenders are.\n\nAttack with Purpose: Get It Moving\n\nOnce we have protected the ball and have support around us, the next step is to attack with purpose. If there's space, get the ball moving — don't slow the game down for no reason. Play with good speed, take clean controlling touches, and when the chance is there, don't be afraid to shoot. Every touch should be moving us closer to a goal, not just keeping the ball for the sake of it.",
        callouts: [
          { title: "Protect first", body: "A good first touch away from pressure is the foundation — everything else starts from there." },
          { title: "Never stand still", body: "If you don't have the ball, your job is to move and create an option for the player who does." },
        ],
        bullets: [
          {
            title: "Protect the ball",
            items: [
              "Scan before the ball arrives so you know where the pressure is.",
              "Take your first touch away from defenders — never into the other team.",
              "Use your body to shield the ball if a defender is close.",
              "Decide fast: dribble, keep controlling, or break into space.",
            ],
          },
          {
            title: "Support and attack with purpose",
            items: [
              "Move into space away from opponents — give the ball carrier an option.",
              "Never stand still — adjust your position as the ball moves.",
              "When there's space, get the ball moving with good speed.",
              "Take clean touches and don't be afraid to shoot when the chance is there.",
            ],
          },
        ],
        table: {
          columns: ["Job", "What to do", "Why it matters"],
          rows: [
            ["Protect", "Scan, take a good first touch away from pressure, shield if needed.", "A careless first touch is one of the easiest ways to give the ball away."],
            ["Support", "Move into space, never stand still.", "Gives the player on the ball a real option instead of leaving them alone."],
            ["Attack with purpose", "Get it moving with speed, take clean touches, shoot when it's on.", "Every attack should have a clear aim — scoring."],
          ],
        },
        coachSays: "Protect it, support each other, then go score. Calm first touch, keep moving, and when the chance is there — don't think twice, shoot.",
        practice: {
          type: "true-false" as const,
          statement: "If you're not the one with the ball, the best thing to do is stay where you are so your teammate always knows exactly where to find you.",
          answer: false,
          explanation: "Standing still makes you easy to mark and gives the ball carrier no real option. Support means moving into space away from opponents — your teammate needs you to create an angle, not just stay put.",
        },
      },
      // Module 2: Defending Principles
      {
        slug: "get-compact-stay-compact",
        title: "Get Compact, Stay Compact",
        summary: "Shrink the field for the other team — the opposite of getting wide.",
        body: "The Opposite of Getting Wide\n\nWhen we attack, we get wide and look to go forward to stretch the field and create space. When we defend, we do the exact opposite. Get compact, stay compact — pull our lines close together to shrink the field and take space away from the other team.\n\nOur Back Three: CB, CB, and CDM\n\nThe clearest example is our back three. In the 3-4-1, our central center back plays a more advanced, CDM-style role when we're attacking — but when we lose the ball, all three of our defenders need to come together as a compact back line. The two outside CBs and the central CB work as a unit, staying close enough that there is no clean gap between them for the other team to run or pass through.\n\nWhy Gaps Are Dangerous\n\nIf our back three is spread too wide apart, the space between each defender becomes a highway straight at our goal. An attacker only needs to find one of those gaps to run into dangerous space. When we are compact, those gaps close up — the attacker has nowhere clean to go, and it buys time for our midfielders to get back and help.\n\nStay Compact, Not Just Get Compact\n\nGetting compact for one moment isn't enough — we have to stay compact as the ball moves. If one CB steps to challenge, the other two need to shift and adjust so the line stays connected. Just like staying wide on attack, staying compact on defense is a constant adjustment, not a one-time fix.",
        callouts: [
          { title: "Shrink the field", body: "Compact defending takes away the space the other team needs to play through us." },
          { title: "Work as a unit", body: "Our back three moves together — when one shifts, the others shift with them." },
        ],
        bullets: [
          {
            title: "Get compact checklist",
            items: [
              "Close the gaps between our outside CBs and the central CB.",
              "Don't let one defender get isolated far from the other two.",
              "Match the other defenders' depth — don't be the one out of line.",
              "Communicate to keep the back three connected.",
            ],
          },
          {
            title: "Stay compact habits",
            items: [
              "When the ball moves, shift together — don't leave gaps behind.",
              "If a CB steps up to challenge, the others adjust to cover.",
              "Keep the line tight even when the ball is far away.",
              "Compactness buys time for midfielders to recover and help.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Stay-compact habit", "What it does"],
          rows: [
            ["Ball is switched wide", "Shift the back three together toward the ball side.", "Keeps the line connected instead of leaving the far side exposed."],
            ["A CB steps to pressure", "The other two CBs adjust to cover the gap left behind.", "Closes the space the attacker would otherwise run into."],
            ["Opponent looks to play through the middle", "Stay tight — don't let the gap between CBs open up.", "Removes the passing lane straight at our goal."],
          ],
        },
        coachSays: "When we attack, we make the field big. When we defend, we make it small. Stay close, stay connected — don't let them find a gap in our back three.",
        diagram: "get-compact-stay-compact",
        practice: {
          type: "true-false" as const,
          statement: "Getting compact means our back three should spread as wide as possible across the field, just like we do when attacking.",
          answer: false,
          explanation: "Getting compact is the opposite of getting wide. On defense, our back three pulls together to close gaps and shrink the space the other team can play through.",
        },
      },
      {
        slug: "prevent-going-forward",
        title: "Prevent Them from Going Forward",
        summary: "Closest player presses, everyone else marks tight and stays ready.",
        body: "The Opposite of Looking to Go Forward\n\nWhen we have the ball, our first instinct is to look forward. When the other team has it, our job is to take that option away from them — prevent them from going forward.\n\nThe Closest Player Goes\n\nThe player nearest to the ball is responsible for going to stop the opponent on the ball — closing them down so they cannot easily turn, dribble forward, or play a forward pass. We'll go deeper on exactly how the first defender does this in the next lesson.\n\nEveryone Else Marks Up and Stays Ready\n\nWhile the closest player presses, every other defender has a job too: mark the player closest to you, and stay on your toes. That means staying close enough to cut off a pass to your player, and being ready to step in and intercept if the ball comes their way. We'll cover the second and third defender's roles in more detail in the next lessons — for now, the idea is simple: one player presses, everyone else is alert and ready.\n\nForce It Sideways or Backward\n\nIf we do this well, the player on the ball won't find a clean way forward. Our pressure and our marking should force them to play sideways or backward instead — which is exactly what we want. A team that can't go forward can't hurt us.",
        callouts: [
          { title: "One presses, all stay ready", body: "The closest player goes to the ball — everyone else marks tight and watches for the chance to step in." },
          { title: "Force it backward", body: "If they can't go forward, they can't hurt us. Sideways and backward passes are a win for us." },
        ],
        bullets: [
          {
            title: "Closest player",
            items: [
              "Go to the player on the ball — don't wait and watch.",
              "Close down the space so they can't turn easily or play forward.",
              "Slow them down rather than diving in (more on this next lesson).",
            ],
          },
          {
            title: "Everyone else",
            items: [
              "Mark the player closest to you so they're not free for a pass.",
              "Stay on your toes — be ready to step and intercept.",
              "Watch for the moment a pass gives you the chance to win the ball.",
            ],
          },
        ],
        table: {
          columns: ["Role", "Job", "Goal"],
          rows: [
            ["Closest player", "Press the ball carrier immediately.", "Take away time and the forward option."],
            ["Every other defender", "Mark your player, stay ready to intercept.", "Take away easy passing options near the ball."],
            ["Whole team", "Force the ball sideways or backward.", "A team that can't go forward can't create danger."],
          ],
        },
        coachSays: "One of us goes to the ball — everyone else stays connected to their player, ready to pounce. If we do our jobs, they'll have nowhere forward to go.",
        practice: {
          type: "true-false" as const,
          statement: "When the other team has the ball, only the player closest to the ball has a job to do — everyone else can relax until the ball gets near them.",
          answer: false,
          explanation: "Every defender has a job at all times: the closest player presses, while everyone else marks their player tightly and stays ready to intercept a pass.",
        },
      },
      {
        slug: "first-defender-slows-them-down",
        title: "The First Defender Slows Them Down",
        summary: "The closest defender's job is to delay, not dive in.",
        body: "Who Is the First Defender?\n\nThe first defender is the player closest to the opponent on the ball who is between the ball and our goal. That second part matters: a player who is behind the ball — closer to the opponent's goal than the ball is — does not count as the first defender, even if they're technically close by. The only way that player helps now is to sprint back into the play. As Coach David puts it: you are not helping anyone if you're standing there while the ball goes toward our goal.\n\nStep Up — Do Not Dive\n\nIf you are the first defender, step up to the ball carrier immediately. And do not dive in. This cannot be stressed enough. Diving in means lunging for the ball — and if you miss, the opponent is straight through with nobody in front of them.\n\nSlow Them Down and Win the Battle\n\nInstead of diving, slow the attacker down. Get close enough to put them under pressure, stay on your feet, and wait. Wait for them to take a heavy touch or make a mistake, then get your body in front of them. This is a physical battle, and it's one we need to win — but with patience, not a desperate lunge.\n\nWhy Slowing Them Down Matters\n\nThe whole point of slowing the attacker down is to buy time — time for your teammates to recover and become the second and third defenders. If nobody presses the ball, the other team gets to dribble forward freely and build an attack with no resistance. One defender doing their job right can be the difference for the entire team's shape.\n\nOnly One Person Presses\n\nThis is also about communication: only one player presses the ball at a time. If two players rush in, that leaves another opponent completely free and unmarked. While the first defender presses, there should always be a teammate ready to support — just in case the first defender loses the 1v1.\n\nShape Our Pressure\n\nThe first defender's pressure isn't just about getting close — it's about shaping the pressure. That means using your body position to push the attacker toward a specific side, forcing them in one direction (usually away from the most dangerous space) while the rest of the team shifts to support and cover that direction.\n\nWhy This Role Is So Important\n\nIf the first defender dives in and gets beaten, it doesn't just affect that one player — it can break down the entire defensive shape. The team has no time to recover, gaps open everywhere, and the attack that follows can be very hard to stop. Doing this job right, every time, protects everyone behind you.",
        callouts: [
          { title: "Do not dive", body: "A missed dive leaves nobody between the attacker and our goal. Stay on your feet and wait." },
          { title: "Only one presses", body: "If two defenders rush the ball, another opponent is left completely free." },
        ],
        bullets: [
          {
            title: "Are you the first defender?",
            items: [
              "You are the first defender if you're the closest player between the ball and our goal.",
              "If you're behind the ball, you don't count — sprint back into the play instead.",
              "Standing still while the ball goes toward our goal helps nobody.",
            ],
          },
          {
            title: "What the first defender does",
            items: [
              "Step up immediately — don't wait and watch.",
              "Do not dive in — stay on your feet and slow them down.",
              "Wait for a heavy touch or mistake, then win the ball.",
              "Shape your pressure to push the attacker toward a specific side.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "First defender's job", "Why it matters"],
          rows: [
            ["You're closest, between ball and goal", "Step up and apply pressure — shape it toward one side.", "Slows the attack and buys time for teammates to recover."],
            ["You're closest, but behind the ball", "Sprint back into the play — you're not the first defender.", "Standing in place doesn't help if the ball is already past you."],
            ["You're tempted to dive in", "Stay on your feet and wait for a mistake.", "A missed tackle leaves nobody between the attacker and goal."],
            ["A teammate is already pressing", "Don't press too — get into a covering position instead.", "Two defenders on the ball leaves another opponent free."],
          ],
        },
        coachSays: "Step up, don't dive. Shape your pressure, push them where we want them, and trust your teammates to recover behind you. One missed dive can break the whole shape.",
        diagram: "first-defender",
        practice: {
          type: "true-false" as const,
          statement: "If an opponent with the ball runs past you and you're now behind the play, you are still the first defender as long as you're the closest defensive player to them.",
          answer: false,
          explanation: "The first defender must be between the ball and our goal. A player behind the ball doesn't count as the first defender, no matter how close they are — their job now is to sprint back into the play.",
        },
      },
      {
        slug: "cover-and-support-defending",
        title: "The Second and Third Defenders Cover and Support",
        summary: "Defending is a team job — everyone else has a role too.",
        body: "Everyone Else Is the Second and Third Defender\n\nThe second and third defender is not just two specific players — it's everyone else on the team. Once our first defender steps up to pressure the ball, every other player has a job: be active, stay on your mark, and be ready to help.\n\nCover: Block the Pass and Be Ready for the Next 1v1\n\nThe players closest to the action — the cover group — have two jobs at once. First, block the passing lanes to your mark so the ball carrier can't easily play out of the pressure. Second, stay ready to become the next first defender if our pressure gets beaten. Covering means staying active: tracking your mark, watching the ball, and being prepared to step into a 1v1 the moment it's needed.\n\nSupport: The Last Line, Ready for Anything\n\nSupport is everyone else — players who might not be near the ball right now but are still very important. These players are usually the last line of defense. Their job is to be ready for anything that gets through our first and second defenders, sliding across to help cover space on the far side of the field.\n\nAn Example: Ball in the Left Channel, Middle Third\n\nSay the ball is in our left channel, in the middle third. Our left winger is the first defender, pressuring the ball. Our CAM, CM, and left center back give cover — they block passing lanes to the winger's nearby opponents and stay ready for the next 1v1 if our LW gets beaten. Our support is the CDM, right center back, and right winger — they shift across from the right side to help out, ready to be the last line if the ball breaks through. If the ball were on the right side instead, it would be the same idea, just with the opposite positions.\n\nThe Big Rule\n\nFor every player on the field, ask three questions: Who's closest? Who's next closest? Who's furthest away? Whatever the answer, every single player has a job in that moment. The biggest thing to remember: everyone is active.",
        callouts: [
          { title: "Not just two players", body: "\"Second and third defender\" means everyone on the team — not literally two specific people." },
          { title: "Everyone is active", body: "Closest, next closest, or furthest away — every player has a job the moment we don't have the ball." },
        ],
        bullets: [
          {
            title: "Cover (closest group)",
            items: [
              "Block the passing lane to your mark.",
              "Track your mark and stay on your toes.",
              "Be ready to become the next first defender if our pressure is beaten.",
            ],
          },
          {
            title: "Support (everyone else)",
            items: [
              "Slide across as the last line of defense.",
              "Be ready for anything that gets through the first two layers.",
              "Stay connected to the rest of the team — don't get isolated.",
            ],
          },
        ],
        table: {
          columns: ["Group", "Who", "Job"],
          rows: [
            ["Pressure", "The first defender — closest to the ball, between it and our goal.", "Step up, slow them down, shape the pressure."],
            ["Cover", "The next closest players to the ball.", "Block passing lanes and be ready for the next 1v1."],
            ["Support", "Everyone else, often the last line.", "Slide across and be ready for anything that breaks through."],
          ],
        },
        coachSays: "Second and third defender isn't two players — it's everyone. Closest, next closest, or furthest away, ask yourself what your job is right now. Everyone is active.",
        diagram: "cover-and-support",
        practice: {
          type: "true-false" as const,
          statement: "If the ball is in the left channel and you play on the right side of the field, you have no defensive job to do until the ball comes to your side.",
          answer: false,
          explanation: "Even players far from the ball are part of the support group — the last line of defense. They slide across to help cover space and be ready for anything that breaks through. Everyone is active.",
        },
      },
      {
        slug: "create-1v2-and-1v3",
        title: "Create 1v2 and 1v3 Situations",
        summary: "On defense, the attacking number stays low and our defending number stays high — that's how we win the ball back.",
        body: "The Attacking Number Always Goes First\n\nSame rule as in attacking principles: the attacking number always comes first, the defending number second. The difference now is which side we're on. When we are defending, the opponent has the attacking number and we have the defending number. So a 1v2 means 1 attacker against 2 of our defenders — that's good for us. A 1v3 means 1 attacker against 3 of our defenders — even better.\n\nThis is the exact opposite of 2v1 and 3v1 from attacking principles. When we attack, we want big attacking numbers (2v1, 3v1) in our favor. When we defend, we want the attacker's number to stay as small as possible while ours stays high — 1v2, 1v3.\n\nHow We Get There\n\nThis is everything we've already covered, working together. Get compact, stay compact closes the gaps so the attacker can't easily find a second attacker to combine with. Prevent them from going forward and the first defender slowing them down buys time. The second and third defenders covering and supporting means that by the time the ball gets close to goal, it's not 1v1 anymore — it's 1v2 or 1v3 in our favor.\n\nWhy This Matters\n\nA lone attacker against one defender (1v1) is a coin flip. A lone attacker against two or three of our defenders (1v2, 1v3) is a situation we should win almost every time — as long as everyone stays organized and doesn't dive in recklessly. The goal of every defending principle in this module is to make sure the attacker is never facing fewer of us than they are facing of themselves.",
        callouts: [
          { title: "Attacking number first", body: "1v2, 1v3 — the attacking number is theirs, and it should stay small while ours stays high." },
          { title: "The mirror image", body: "Attacking wants 2v1 and 3v1 in our favor. Defending wants 1v2 and 1v3 in our favor — same idea, opposite side." },
        ],
        table: {
          columns: ["Situation", "What it means", "Why it's good for us"],
          rows: [
            ["1v1", "One attacker, one of our defenders.", "A coin flip — we want more cover before it gets here."],
            ["1v2", "One attacker, two of our defenders.", "The attacker is outnumbered — easy to win the ball back."],
            ["1v3", "One attacker, three of our defenders.", "Even safer — almost no way through for the attacker."],
          ],
        },
        coachSays: "Attacking principles, we chase 2v1 and 3v1 for ourselves. Defending principles, we chase 1v2 and 1v3 against them. Same rule, same numbers, just flipped.",
        practice: {
          type: "true-false" as const,
          statement: "If we are defending and it's a 1v2, that means 1 of our defenders is facing 2 attackers — bad for us.",
          answer: false,
          explanation: "The attacking number always goes first. A 1v2 while we're defending means 1 attacker facing 2 of our defenders — that's good for us, the same way 2v1 is good for us when we're attacking.",
        },
      },
      // Module 3a: Transition Principles — When We Win the Ball
      {
        slug: "secure-the-ball-first",
        title: "Secure the Ball First",
        summary: "The instant we win the ball, our first job is to keep it — calm down before speeding up.",
        body: "The Most Chaotic Moment in Soccer\n\nThe second the ball changes possession is the most chaotic moment in the game. One second ago you were defending — marking, pressing, recovering. Now, suddenly, you have the ball, your shape is scrambled, your teammates are still in defensive positions, and an opponent who was just attacking is right next to you, ready to pounce. This is the transition moment, and what we do in the very first second of it sets up everything that follows.\n\nControl Before Anything Else\n\nBefore you think about a forward pass, a dribble, or a big switch of play — control the ball. Take a good first touch away from the nearest opponent. If you're under immediate pressure, shield the ball with your body. This is the exact same skill from Protect, Support, Attack in our attacking principles — protect first, decide second. The only difference here is the timing: it happens the instant the ball arrives, with no warning.\n\nWhy Rushing Here Is So Costly\n\nIf you panic and try to do too much immediately — a risky first touch, a blind pass, a forced dribble — and it goes wrong, we don't just lose the ball. We lose it with our team completely disorganized, in the same scrambled shape we were just defending in. That's the worst possible moment to give the ball straight back. A clean, controlled first touch buys our team the half-second it needs to reset.\n\nCalm Down to Speed Up\n\nThis might sound like the opposite of \"go forward fast,\" but it isn't. Securing the ball first is what makes everything that comes next possible. A team that panics in transition gives the ball away constantly and never gets to use its speed. A team that secures the ball first gets to choose when to explode forward — on their terms, not by accident.",
        callouts: [
          { title: "Control first", body: "The instant the ball arrives in a transition, your only job is to get it under control — everything else waits." },
          { title: "Scrambled shape", body: "Right after winning the ball, our team shape is still in 'defending' positions. A turnover here is the most costly kind." },
        ],
        bullets: [
          {
            title: "The first second after winning the ball",
            items: [
              "Take a touch away from the nearest opponent — never into them.",
              "Shield the ball with your body if someone is close.",
              "Get your head up and scan once the ball is under control — not before.",
              "Stay calm — a clean first touch is worth more than a rushed forward ball.",
            ],
          },
        ],
        coachSays: "Win it, then control it. I don't care how good your next pass is if your first touch gives the ball straight back.",
        diagram: "transition-win-secure",
        practice: {
          type: "true-false" as const,
          statement: "The instant we win the ball back, our top priority should be to get it forward as fast as possible, even if our first touch is risky.",
          answer: false,
          explanation: "Securing the ball with a controlled first touch comes first — always. A risky touch that gives the ball away the instant we win it is the most costly kind of turnover, because our team shape is still scrambled.",
        },
      },
      {
        slug: "do-not-give-it-right-back",
        title: "Do Not Give It Right Back",
        summary: "The opponent who just lost the ball is still close — don't hand it straight back to them.",
        body: "The Worst Transition of All\n\nOnce the ball is secure, the very next danger is giving it right back to the team that just had it. Think about it from the opponent's point of view: they just lost the ball, but they're still in their attacking shape, still close by, and still thinking like attackers. If we immediately turn it over again, they're already in position to punish us — and now WE are the disorganized ones.\n\nRead Who's Around You\n\nRemember from Pass to Feet, Space, or Angles: passing to the opponent is the worst thing you can do on a soccer field. In a transition moment, that risk is even higher, because the opponents nearest the ball are the ones who just had it — they're close, they're alert, and they're hungry to win it straight back. Before playing any pass, scan for where those opponents are and avoid threading anything through them.\n\nSimple and Safe Beats Risky and Forward\n\nThis is the moment to choose the boring option on purpose. A simple pass sideways or back to an unmarked teammate keeps possession and gives our team time to organize. It might feel like we're \"wasting\" the moment, but we're not — we're protecting the advantage we just won. There will be a better moment to go forward, and Lesson 3 is all about finding it.\n\nComposure Wins Transitions\n\nTeams that panic in this moment turn the ball over again and again, and every one of those turnovers happens with their own shape still scrambled — which is exactly how easy goals get conceded. Teams that stay composed, secure the ball, and make the safe pass when it's needed are the ones who actually get to use their transition opportunities, instead of giving them away for free.",
        callouts: [
          { title: "They're still close", body: "The opponent who just lost the ball is right there, alert, and ready to win it straight back." },
          { title: "Boring on purpose", body: "A safe sideways or backward pass here isn't timid — it's protecting the possession we just won." },
        ],
        comparison: {
          left: {
            label: "Giving It Right Back",
            items: [
              "Forcing a pass through the player who just lost the ball",
              "Panicking and clearing it straight to an opponent",
              "Trying a risky forward ball before the team is ready",
            ],
          },
          right: {
            label: "Keeping It",
            items: [
              "Scanning for the opponents nearest the ball before passing",
              "Playing simple and safe to an unmarked teammate",
              "Waiting one more pass for the team shape to organize",
            ],
          },
        },
        coachSays: "We just worked hard to win that ball. Don't hand it back to them in the next five seconds because you were in a hurry.",
        diagram: "transition-win-safe",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You've just won the ball in midfield with a controlled first touch. The opponent who lost it is still right next to you, and there's a tempting gap behind them toward their goal — but your CB is also free and unmarked behind you.",
          choices: [
            { label: "Try to thread a pass through the gap, right past the opponent who just lost the ball", response: "Risky. That opponent is closest to the ball and most likely to win it straight back. If it's intercepted, we're turning the ball over with our shape still scrambled." },
            { label: "Play it simple and safe to your free CB, then look for the next opportunity", response: "Yes. This secures our advantage. The forward opportunity might still be there in a pass or two, once our team has organized — and now we're not gambling our shape to find out." },
          ],
        },
      },
      {
        slug: "transition-look-forward",
        title: "Look to Go Forward",
        summary: "Once the ball is safe, the seconds right after a turnover are the best chance all game to attack.",
        body: "The Golden Window\n\nHere's the secret about transitions: the moment right after we win the ball is often the BEST attacking opportunity of the entire game — better than most moments when we've had calm possession for a while. Why? Because the opponent was just attacking. Their shape is stretched out, their defenders are out of position, and they need a few seconds to recover and get organized. If we can go forward before they get those seconds, we can catch them completely unprepared.\n\nSame Plan A, B, C — Just Faster\n\nThis is the exact same decision-making from Look to Go Forward in our attacking principles: Plan A is forward into space, Plan B is wide to a winger, Plan C is back to an unmarked defender. Nothing changes about the priorities. What changes is the urgency — once the ball is secure and safe (Lessons 1 and 2), check for Plan A immediately. A forward pass that might be a 50/50 risk in normal possession can be the right choice here, because the reward — exploiting a disorganized defense — is so much higher.\n\nDon't Let the Window Close\n\nThe opponent's recovery clock starts the instant we win the ball. Every extra touch we take, every extra pass we play sideways, gives them more time to get back into shape. That doesn't mean rush and panic — Lessons 1 and 2 still come first. But once the ball is secure and safe, don't keep it forever just because we can. Look up, find the forward option, and go.\n\nWhy This Connects to Numbers Up\n\nRemember Create 2v1 and 3v1 Situations? A disorganized defense is exactly where those numbers-up moments are easiest to find. A defender who's still jogging back to position can't also be covering a passing lane. The fast transition is often the simplest way in the entire game to turn a 1v1 into a 2v1 or 3v1 — because the defense hasn't had time to set up yet.",
        callouts: [
          { title: "The golden window", body: "Right after winning the ball, the opponent's defense is disorganized — and it won't stay that way for long." },
          { title: "Same priorities, more urgency", body: "Forward into space, then wide, then back — the Look to Go Forward plan, just with the clock running." },
        ],
        bullets: [
          {
            title: "Once it's secure and safe, look for…",
            items: [
              "A teammate making a forward run into open space (Plan A).",
              "A winger with room to run on the flank (Plan B).",
              "Defenders who are still jogging back and out of position.",
              "A pass that breaks a line before the opponent can close it.",
            ],
          },
        ],
        funFact: {
          title: "Why coaches love transitions",
          body: "At every level of soccer, a huge share of goals come from transition moments — the few seconds right after possession changes. Defenses that are well-organized in calm possession are often at their most vulnerable in exactly this window.",
        },
        coachSays: "Secure it, keep it, then GO. That window doesn't stay open long — but don't open it before the first two steps are done.",
        diagram: "transition-win-forward",
        practice: {
          type: "true-false" as const,
          statement: "The seconds right after winning the ball are often a great moment to attack, because the opponent's defense is still disorganized from their own attack.",
          answer: true,
          explanation: "Exactly right. Once the ball is secure and safe, this is often the easiest moment in the whole game to find space and go forward — but only after Lessons 1 and 2 have happened first.",
        },
      },
      // Module 3b: Transition Principles — When We Lose the Ball
      {
        slug: "expend-max-effort",
        title: "Give Max Effort to Win It Back",
        summary: "The first few seconds after losing the ball are the best chance in the game to win it straight back.",
        body: "It's the Same Golden Window — for Them\n\nWe just learned that the moment right after winning the ball is a golden window to attack, because the other team is disorganized. Guess what — the moment right after WE lose the ball is that exact same golden window, except now it belongs to the other team. Their attack just started, and it's not organized yet either. If we react immediately, we have a real chance to win the ball straight back before they ever get going.\n\nDon't Hang Your Head\n\nThe single worst reaction to losing the ball is the one we see all the time: a player stops, puts their hands on their hips, maybe shouts in frustration — and jogs back. Every second of that is a free gift to the other team. It doesn't matter whose fault it was, or how unfair the call was, or how tired you are. The team that wins the ball back fastest after losing it is the team that reacts fastest, full stop.\n\nWhoever Lost It Has the Most Responsibility\n\nThis connects directly to something we said in The First Defender Slows Them Down: \"you are not helping anyone if you're standing there while the ball goes toward our goal.\" The player who lost the ball is almost always the closest player to the new attack. That player has the most responsibility to sprint back into the play immediately — not to dwell on the mistake, but to be part of fixing it.\n\nFive Seconds That Change the Game\n\nThink of it like a five-second alarm that goes off the moment we lose the ball. For those five seconds, every nearby player should be sprinting to close down space and recover positions — not walking, not complaining, sprinting. After that, if the ball isn't won back, we settle into our normal defensive shape (Get Compact, Stay Compact and onward). But those first five seconds, given with full effort, can turn a bad moment into a great one.",
        callouts: [
          { title: "Same window, flipped", body: "Right after we lose the ball, the opponent's attack is just as disorganized as ours was right after we won it." },
          { title: "Five-second sprint", body: "The first few seconds after losing the ball deserve full sprint effort — from everyone nearby, starting with whoever lost it." },
        ],
        bullets: [
          {
            title: "The instant we lose the ball",
            items: [
              "Don't stop, don't sulk — sprint back into the play immediately.",
              "The player who lost the ball is usually closest — they react first.",
              "Nearby teammates sprint to close space, not just jog.",
              "If the ball isn't won back in a few seconds, settle into our normal shape.",
            ],
          },
        ],
        coachSays: "I will never be mad about a mistake. I will be upset if you don't sprint back the second after it happens.",
        diagram: "transition-lose-effort",
        practice: {
          type: "true-false" as const,
          statement: "If a player makes a mistake and loses the ball, their best response is to take a moment to reset before getting back into the play.",
          answer: false,
          explanation: "The best response is to sprint back into the play immediately. The first few seconds after losing the ball are the best chance to win it straight back — every second of hesitation is a gift to the other team.",
        },
      },
      {
        slug: "closest-player-pressure",
        title: "The Closest Player Applies Pressure",
        summary: "The instant we lose the ball, the nearest player becomes the first defender — no waiting required.",
        body: "Same Job, New Moment\n\nWe already know this job from The First Defender Slows Them Down: the player closest to the opponent on the ball, and between that ball and our goal, is the first defender. Step up, don't dive in, slow them down, and shape the pressure to push them where we want them to go. Every single rule from that lesson still applies here. The only thing that's different is the moment it happens — instead of settling into it from our normal defensive shape, it happens in the chaos of the second right after we lost the ball.\n\nNo Time to Wait for the Team\n\nIn our normal defensive shape, the first defender steps up while the rest of the team is already organized behind them. In transition, that's not true yet — everyone is still recovering. But that doesn't mean the closest player should wait for everyone else to get ready first. Somebody has to delay the attacker right now, even if support isn't there yet, because every second without pressure is a second the opponent gets to run freely toward our goal.\n\nStill Just One Presser\n\nEven in the chaos of a transition, the rule from First Defender still holds: only one player presses at a time. It can be tempting for two or three players to all rush at the ball in a panic — but that just leaves other opponents completely free, and if the presser gets beaten, there's nobody else positioned to help. One player presses. Everyone else is doing Lesson 3's job: recovering into cover and support.\n\nWhy Speed Matters Here Specifically\n\nIn our normal defending shape, if the first defender is a half-second late, the team behind them can usually adjust. In transition, the team behind them is still scrambling — there's much less margin for error. A quick, controlled press from the closest player is often the difference between the opponent's counter-attack dying immediately and it turning into a real problem.",
        callouts: [
          { title: "Instant first defender", body: "The closest player between the ball and our goal becomes the first defender immediately — same rules, just faster." },
          { title: "Still only one", body: "Even in the chaos of a transition, only one player presses. Everyone else recovers into shape." },
        ],
        table: {
          columns: ["Rule from First Defender", "How it applies in transition"],
          rows: [
            ["Step up, don't dive in", "Especially important here — a missed dive leaves a scrambled team with nobody covering."],
            ["Slow them down, win the battle", "Buys the extra half-second the rest of the team desperately needs to recover."],
            ["Shape the pressure", "Push the attacker away from our most dangerous space while teammates recover that side."],
            ["Only one player presses", "Resist the urge to swarm — everyone else has a recovery job to do."],
          ],
        },
        coachSays: "Whoever's closest, that's you — go. Don't wait for the team to be perfect first. Slow them down NOW.",
        diagram: "transition-lose-press",
        practice: {
          type: "true-false" as const,
          statement: "In a transition moment, it's fine for two or three nearby players to all press the ball at once, since the team is still scrambling anyway.",
          answer: false,
          explanation: "Still just one presser — same rule as always. If multiple players rush the ball, other opponents are left completely free, and a scrambling team has even less cover if the press is beaten.",
        },
      },
      {
        slug: "cover-and-support-transition",
        title: "Everyone Else Covers and Supports",
        summary: "While the closest player presses, everyone else races to get compact and cover the danger.",
        body: "Same Roles, Faster Reaction\n\nThis is The Second and Third Defenders Cover and Support, applied the moment the ball is lost. While the closest player becomes the first defender and presses (Lesson 2), every other player has a job: the cover group blocks the most dangerous passing lanes and stays ready for the next 1v1, and the support group recovers into the last line, ready for anything that breaks through. Closest, next closest, furthest away — everyone is active, exactly like before.\n\nGet Compact, Fast\n\nHere's what makes this moment different: when we lose the ball, our team was just in its attacking shape — spread out, players forward, gaps everywhere. Get Compact, Stay Compact is always important, but right after losing the ball, it's urgent. Every player needs to recognize that the team shape that worked for attacking is now wide open for the opponent to exploit, and react by closing those gaps immediately.\n\nThe Goal: Make It 1v2 or 1v3\n\nRemember Create 1v2 and 1v3 Situations — when we're defending, we want the attacking number to stay low and our defending number to stay high. A transition moment, if we don't react, can easily become a 2v1 or 3v1 in the OPPONENT's favor, because our team is spread out attacking and they're breaking with numbers. But if everyone sprints back, gets compact, and covers the right spaces, that same moment can become a 1v2 or 1v3 in OUR favor within just a few seconds.\n\nThis Is the Whole Point\n\nThis is why all six of these transition lessons work together. Secure it, don't give it back, and look forward when WE win it. Max effort, closest player presses, everyone else covers when WE lose it. Both halves are really the same idea: the first few seconds after possession changes are the most important seconds in the game, and a team that reacts well in both directions will win far more of those moments than it loses.",
        callouts: [
          { title: "Spread out becomes a problem", body: "Our attacking shape is wide and spread — exactly what the opponent wants to attack the instant we lose the ball. Close it down fast." },
          { title: "Flip the numbers", body: "React fast enough, and a moment that could become 2v1 or 3v1 against us turns into 1v2 or 1v3 for us." },
        ],
        bullets: [
          {
            title: "While the closest player presses, everyone else…",
            items: [
              "Sprints to close the gaps left by our attacking shape — get compact now.",
              "Cover group blocks the most dangerous passing lanes near the ball.",
              "Support group recovers as the last line, ready for anything that breaks through.",
              "Communicates — closest, next closest, furthest away, everyone has a job.",
            ],
          },
        ],
        coachSays: "We just spent five lessons learning to win the ball back. This is the moment all of it is for — react together, and react fast.",
        diagram: "transition-lose-cover",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "We just lost the ball in the middle third while pushed forward in our attacking shape. Our CDM is sprinting to press the ball carrier. You're a CB on the far side, well away from the ball.",
          choices: [
            { label: "Stay where you are — the ball is far away and not your problem yet", response: "Risky. Our shape is spread out from attacking, and the opponent could break quickly into the space you're leaving uncovered. Standing still here is exactly the 'not helping anyone' mistake." },
            { label: "Sprint to get compact and cover the dangerous space, even though the ball isn't near you yet", response: "Yes. This is cover and support in transition — get compact fast, before the gaps in our attacking shape get exploited. By the time the ball gets close, you want it to be 1v2 or 1v3 in our favor." },
          ],
        },
      },
      // Module 4: Restart Scenarios
      {
        slug: "restart-goal-kicks",
        title: "Goal Kicks",
        summary: "Watch our goal kicks and opponent goal kicks.",
        body: "Watch both videos below to see exactly how we set up on our own goal kicks and how we approach it when the other team has a goal kick.",
        videos: [
          { title: "Our Goal Kicks", youtubeId: "8yyumq8I9HU" },
          { title: "Opponent Goal Kicks", youtubeId: "3v5zsOQeIHc" },
        ],
      },
      {
        slug: "restart-corners",
        title: "Corners",
        summary: "Watch our corners and opponent corners.",
        body: "Watch both videos below to see exactly how we set up on our own corner kicks and how we defend when the other team has a corner.",
        videos: [
          { title: "Our Corners", youtubeId: "gYoBwWaZyjc" },
          { title: "Opponent Corners", youtubeId: "DpPW91-pOPs" },
        ],
      },
      {
        slug: "restart-throw-ins",
        title: "Throw-Ins",
        summary: "Watch the throw-ins video.",
        body: "Watch the video below for our approach to throw-ins.",
        videos: [{ title: "Throw-Ins", youtubeId: "UeM_diD6anQ" }],
        afterVideosBody: "Defending Throw-Ins Against Us\n\nThere isn't a video for defending throw-ins because it's pretty self-explanatory — but that doesn't mean it's not important. Here's exactly what to focus on.\n\nDon't Let It Go Over Your Head\n\nThe single biggest mistake when defending a throw-in is letting the ball sail over your head into space behind you. The moment that happens, you're turning and sprinting back toward your own goal while the attacker is already facing forward — that's the worst possible position to be in. Always know where the thrower's target is before the ball is released, and get yourself in a spot where a ball over your head isn't even an option.\n\nBack Up Enough So You Don't Have to Turn and Run\n\nThis ties directly into the first point. If you're standing too tight to the man you're marking, any ball played over the top forces you to spin around and chase it down from behind — and a player running at full speed toward their own goal almost never wins that race. Give yourself a step or two of cushion so you can see both the ball and your mark, and so you're moving forward to meet any pass instead of backward to chase one.\n\nWin the 50/50 and the Second Ball — Be Brave\n\nA lot of throw-ins turn into scrappy, bouncing-ball situations where nobody has full control. In those moments, hesitation loses. Whoever commits first and goes to win the ball — header, foot, whatever it takes — usually comes away with it. Don't wait for someone else to deal with it and don't shy away from a 50/50 challenge. The same goes for second balls: if a throw-in is flicked on or knocked down, that loose ball is just as winnable as the first one, and being the first to react to it is what separates good defending from bad defending.",
      },
      {
        slug: "restart-free-kicks",
        title: "Free Kicks",
        summary: "Watch our free kicks and opponent free kicks.",
        body: "Watch both videos below to see exactly how we approach our own free kicks and how we defend when the other team has a free kick.",
        videos: [
          { title: "Our Free Kicks", youtubeId: "tIeaDUOa4gs" },
          { title: "Opponent Free Kicks", youtubeId: "5R96WUJQTUk" },
        ],
      },
      {
        slug: "restart-kickoff",
        title: "Kickoff",
        summary: "Watch our kickoffs and opponent kickoffs.",
        body: "Watch both videos below to see exactly how we approach our own kickoffs and how we approach it when the other team kicks off.",
        videos: [
          { title: "Our Kickoffs", youtubeId: "vL0EWtghcqA" },
          { title: "Opponent Kickoffs", youtubeId: "zO7Kp4W6UxA" },
        ],
      },
      // Module 5: Open Play Scenarios
      {
        slug: "open-play-defending-third",
        title: "Defending Third",
        summary: "Open play in our own third, split into the central channel and the wide channels — what we do when defending and when attacking.",
        body: "Two Channels, Two Jobs\n\nThe defending third is our own end of the field, closest to our goal. To keep it simple, we split it into two areas: the central channel through the middle, and the wide channels down each side. In each area we have a job when the other team has the ball — defending — and a job when we have it — attacking. Everything below comes straight from our team's defending and attacking principles, just applied to this part of the field.\n\nDefending the Central Channel\n\nThe middle of our defending third is the most dangerous space, because it points straight at our goal. This is where Get Compact, Stay Compact matters most. Our back three — the two outside center backs and the central center back, who plays the CDM-style role — pull together as a tight unit so there is no clean gap to run or pass through. When the ball moves, they shift together and stay connected.\n\nWe do not defend the middle with just three players. Our CM drops in to help, and sometimes our CAM comes back too, so the center is packed and compact. The more bodies we have connected in the middle, the fewer passing lanes and angles the other team can find. That extra cover is also how we turn a 1v1 into a 1v2 or 1v3 — the lone attacker in the middle should always be outnumbered by the time the ball gets near our goal.\n\nEven when we are compact, one player still has to be the first defender on the ball — the closest player between the ball and our goal. That player steps up to slow the attacker down but does not dive in, because a missed dive in the middle of our own third leaves nobody between the attacker and the goal. Only one player presses at a time; everyone else marks tight and stays ready. The aim is to prevent them from going forward and force the ball sideways or backward, away from the middle.\n\nDefending the Wide Channels\n\nBecause we play a 3-4-1, our only real width comes from our two wingers — so the wingers must drop back at all times and be a full part of our defense. When the other team moves the ball into a wide channel of our defending third, the winger on that side becomes the first defender and presses the ball, while the rest of the team stays compact and slides across. Someone is always pressuring the ball.\n\nThe winger's main job out wide is to slow the attacker down so there is no breakaway down the side — because a breakaway wide usually ends in a dangerous cross or a shot. Instead of diving in, the winger shapes the pressure to push the attacker into a space where we have help: either forcing them inside toward the center, where our center mids are waiting to defend, or steering them down the line and out of bounds. Either way — slow them down and send them where our team is.\n\nSometimes a center back has to shift out into the wide channel to deal with the ball. When that happens, the space behind them has to be covered — our central center back in the CDM role and the other center back slide over to fill in, staying compact so the move doesn't open a gap. The winger is still the first layer of help out wide, but the back three adjusting behind is what keeps us safe.\n\nAttacking Out of the Central Channel\n\nWhen we win the ball in the middle of our own defending third, our first job is Protect, Support, Attack. Take a calm first touch away from pressure — never into an opponent — and never force a risky pass in front of our own goal, because a giveaway here is the most dangerous kind. Our center backs, the central CDM, and the dropping center mids give close support so the player on the ball always has an option.\n\nOnce the ball is safe, we Look to Go Forward — forward first, then wide, then a safe pass back if forward and wide are covered. The difference in our own third is that 'safe' matters even more. If there is no good forward or wide option and pressure is coming, a backward pass to a teammate with time, or a tactical clearance when we are in a tight 1v1 near our goal with no pass on, is the smart choice. The one thing we never do is give the ball straight back to them in front of our goal.\n\nAttacking Out of the Wide Channels\n\nOur wingers are not just defenders — they are also our width in attack, and they give us a way out of our own third. When we have the ball in a wide channel, the winger gets wide and stays wide to stretch the field and become an outlet, so we can escape pressure down the side. A center back or the central CDM can play the ball out to that wide winger to relieve the pressure.\n\nFrom there we follow the same priorities: protect the ball, look to go forward into space up the line, and pass to feet, into space, or through an angle. If forward isn't on, the winger can play it back inside to a supporting center mid to switch the point of attack — the same idea as going wide, then central, to find a new forward option. And out wide near our own goal the same rule holds: a clean, safe pass beats a risky one every time, and we never play it straight to the other team.",
        callouts: [
          { title: "Compact in the middle", body: "Our back three, plus the CM and sometimes the CAM, pack the central channel so there are no passing lanes at our goal." },
          { title: "Wingers always drop back", body: "In a 3-4-1 the wingers are our only width — they defend and attack, slowing wide attackers so there is no breakaway." },
        ],
        bullets: [
          {
            title: "Defending the defending third",
            items: [
              "Stay compact — the back three (two CBs plus the central CDM) close the gaps in the middle.",
              "Our CM drops in, and sometimes the CAM, to outnumber attackers centrally (1v2, 1v3).",
              "One player is always the first defender on the ball — press, but never dive in.",
              "Wingers drop back and press wide, pushing attackers inside to our center mids or down the line out of bounds.",
              "If a CB shifts wide, the central CDM and other CB cover the space behind and stay compact.",
            ],
          },
          {
            title: "Attacking out of the defending third",
            items: [
              "Protect first — calm first touch away from pressure, never into an opponent.",
              "Look to go forward: forward, then wide, then a safe pass back.",
              "Use the wingers as our width to escape pressure down the sides.",
              "Near our own goal, safe wins — a backward pass or tactical clearance beats a risky one.",
              "Never give the ball straight back to them in front of our goal.",
            ],
          },
        ],
        table: {
          columns: ["Area", "Defending job", "Attacking job"],
          rows: [
            ["Central channel", "Back three plus CM/CAM stay compact; one player presses, never dives.", "Protect the ball, support close, look forward — but keep it safe near goal."],
            ["Wide channels", "Winger drops back and slows them down; force inside or down the line.", "Winger gets wide as our outlet; play up the line or back inside."],
            ["If a CB goes wide", "The central CDM and other CB cover the space behind and stay compact.", "Use the freed-up winger and center mids to play out of the pressure."],
          ],
        },
        coachSays: "In our own third, defending is all about staying compact and slowing them down — no diving in, and someone is always on the ball. When we win it, protect it first. Use your wingers to get wide, look forward — but never, ever hand it back to them in front of our goal.",
        diagram: "get-compact-stay-compact",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "The other team has the ball in a wide channel of our defending third. You are our winger and you have dropped back to defend. The attacker is dribbling at you down the side.",
          choices: [
            { label: "Dive in to win the ball before they can cross it", response: "Diving in is exactly what we don't do — if you miss, the attacker is past you with a breakaway down the side, and that usually ends in a cross or a shot. Stay on your feet and slow them down." },
            { label: "Slow them down and force them inside toward our center mids, or down the line and out of bounds", response: "Yes. Your job out wide is to slow the attacker down so there is no breakaway, and to shape your pressure to push them where we have help — inside to our center mids, or down the line and out of bounds." },
            { label: "Drop all the way back and let them cross it in", response: "Backing off and giving them a free cross is dangerous — that's the wide breakaway ending in a cross we're trying to prevent. Step up enough to pressure and slow them, just without diving in." },
          ],
        },
        videoIntro:
          "Watch the videos below, and make sure you read through everything above too — they go together.\n\nHere's the most important part: it can feel like a lot at once, so don't try to take it all in. Start by finding your own position in the video and just follow where that player goes and what they do. Once that makes sense, watch how they connect with the teammates around them, and you'll start to see how the whole team moves as one.\n\nYou don't need to memorize any of this or get it perfect. The goal is just to build a picture in your head, so that when you're out on the field learning it for real, it clicks faster and makes more sense. If something looks confusing, that's completely normal — watch your position first, get the big idea, and the rest will come with time.",
        videos: [
          { title: "Defending in Our Defending Third", youtubeId: "EQSX8lAlXBk" },
          { title: "Attacking in Our Defending Third", youtubeId: "tfZWJjiYMoQ" },
        ],
      },
      {
        slug: "open-play-middle-third",
        title: "Middle Third",
        summary: "Open play in the middle of the field, split into the central channel and the wide channels — what we do when defending and when attacking.",
        body: "Two Channels, Two Jobs\n\nThe middle third is the center of the field, and it is where we are at our strongest — because of our three central midfielders: the CAM, the CM, and the CDM. They each play a different role, but they are all connected to each other. Like every part of the field, we split the middle third into the central channel through the middle and the wide channels down each side, and in each area we have a defending job and an attacking job. It all comes straight from our defending and attacking principles.\n\nDefending the Central Channel\n\nThis is the very middle of the field, and our three central midfielders are our strongest suit here. When the other team has the ball through the middle, it comes down to The First Defender and The Second and Third Defenders doing their jobs. If our CAM is the first defender, they press and slow the ball down — without diving in. As they do, the CM and CDM are the cover and support behind them, blocking passing lanes and ready to become the next first defender if our pressure is beaten.\n\nWhile our midfielders defend the ball, our center backs stay alert for any long balls played into the central channel — they are the support layer, the last line, ready for anything that breaks through. Our striker usually stays as high as possible so we keep a forward outlet, but if the ball is higher up the field, the striker can get involved in the press too. Everyone is active — closest, next closest, or furthest away, each player has a job.\n\nDefending the Wide Channels\n\nIn the wide channels of the middle third, our wingers should already be dropping back to somewhere between the middle third and our defending third. Exactly how far back depends on the other team's winger. If their winger is playing high up the field, our winger has to follow and stay with them — if their number 7 is very high, our number 11 needs to be right there to defend that player. The wide channels are the wingers' responsibility, even this far up the field.\n\nOne thing to watch: our defenders should not get pulled out and close in too much, especially when the opponent is playing very wide. Getting dragged out wide opens gaps in our shape. The winger handles the wide attacker; the back line holds its position and stays compact behind.\n\nAttacking Out of the Central Channel\n\nWhen we come out through the center, 99% of the time it starts one of two ways: our center backs play into a central midfielder, or a winger finds a pocket of space in the center of the field. From there we look to Pass to Feet, Space, or Angles — specifically the angled passes that break the defensive line. We want to thread the ball through the defense so our wingers and our striker can run onto it, attacking the space behind. Breaking lines from the middle third into the attacking third is the whole goal.\n\nBecause we are in a safer area than our own defending third, don't be afraid to take on the 1v1 when it is there. But don't try to dribble through two defenders — a 1v2 — because beating two players alone is low-percentage. When you are outnumbered, it is easier and smarter to pass to an open teammate. Take the 1v1, but never force the 1v2.\n\nAttacking Out of the Wide Channels\n\nWhen our wingers have the ball in the wide channels of the middle third, we have two main looks. The first is to get it down the line — play the ball ahead into space and use speed to carry it down the wing, setting up a cross in the attacking third. The second is to play a ball over the heads of the defenders for our CAM or striker to run onto and go in for goal. Both are Look to Go Forward, carrying us into the final third.\n\nThere is one big warning here. If a winger loses the ball in the wide channel of the middle third, the transition is scary: we have just lost it, and the other team is in a great spot to counterattack down the field. So it is super, super important that our wingers protect the ball and do not lose it easily when they are in control out wide. Get wide, stay wide, look forward — but take care of the ball.",
        callouts: [
          { title: "Our strongest area", body: "Three central midfielders — CAM, CM, CDM — make the middle our strongest suit. First defender presses; the other two cover and support." },
          { title: "Don't lose it wide", body: "A winger losing the ball in the wide middle third hands the other team a counterattack. Protect the ball and don't give it away easily." },
        ],
        bullets: [
          {
            title: "Defending the middle third",
            items: [
              "Central: the first defender (often the CAM) presses and slows it down — no diving in.",
              "The CM and CDM cover and support behind, ready to be the next first defender.",
              "Center backs stay alert for long balls into the central channel.",
              "The striker stays high as an outlet, but can join the press if the ball is higher up.",
              "Wide: wingers drop back between the middle and defending third and track the opponent's winger.",
              "Don't let defenders get dragged out wide — the winger handles the wide attacker.",
            ],
          },
          {
            title: "Attacking out of the middle third",
            items: [
              "Central: build from the center backs into a midfielder, or a winger drops into a central pocket.",
              "Make angled, line-breaking passes for the wingers and striker to run onto.",
              "Take on the 1v1 here — it's safer than our own third — but don't force a 1v2; pass to an open teammate.",
              "Wide: get it down the line with speed for a cross, or play it over the top for the CAM or striker.",
              "Above all, wingers protect the ball — losing it wide invites a counterattack.",
            ],
          },
        ],
        table: {
          columns: ["Area", "Defending job", "Attacking job"],
          rows: [
            ["Central channel", "First defender presses (often the CAM); CM and CDM cover and support.", "Build through a midfielder; break lines with angled passes for runners."],
            ["Wide channels", "Wingers drop back and track the opponent's winger; don't drag defenders out.", "Get down the line for a cross, or play over the top — and don't lose it."],
            ["Behind it all", "Center backs watch for long balls; striker stays high.", "Take the 1v1, but pass out of a 1v2 to an open teammate."],
          ],
        },
        coachSays: "The middle third is our house — three center mids who press, cover, and support as a unit. When we win it, break lines into our runners and take on the 1v1. But wingers, take care of that ball out wide — lose it there and they're countering us.",
        diagram: "cover-and-support",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You are our CM with the ball in the central channel of the middle third. There is space ahead to break the line, but two defenders step toward you together. A teammate is open to your side.",
          choices: [
            { label: "Try to dribble through both defenders and break the line yourself", response: "That's taking on a 1v2 — beating two defenders alone is low-percentage, and losing it here lets them break the other way. When you're outnumbered, don't force it." },
            { label: "Pass to the open teammate instead of forcing it", response: "Yes. We take on the 1v1, but not the 1v2. When two defenders step to you, the smart, easy choice is to pass to an open teammate and keep the attack alive." },
            { label: "Boot it forward and hope a teammate runs onto it", response: "A hopeful boot when you have an open teammate is giving the ball away. We only clear like that in a tight spot near our own goal — here in the middle third, find the open pass." },
          ],
        },
        videoIntro:
          "Watch the videos below, and make sure you read through everything above too — they go together.\n\nHere's the most important part: it can feel like a lot at once, so don't try to take it all in. Start by finding your own position in the video and just follow where that player goes and what they do. Once that makes sense, watch how they connect with the teammates around them, and you'll start to see how the whole team moves as one.\n\nYou don't need to memorize any of this or get it perfect. The goal is just to build a picture in your head, so that when you're out on the field learning it for real, it clicks faster and makes more sense. If something looks confusing, that's completely normal — watch your position first, get the big idea, and the rest will come with time.",
        videos: [
          { title: "Defending in Our Middle Third", youtubeId: "OjT268Y245E" },
          { title: "Attacking in Our Middle Third", youtubeId: "KOhimYaRRYk" },
        ],
      },
      {
        slug: "open-play-attacking-third",
        title: "Attacking Third",
        summary: "Open play in the other team's end, split into the central channel and the wide channels — what we do when attacking and the moment we lose the ball.",
        body: "Two Channels, Two Jobs\n\nThe attacking third is the other team's end of the field, where we score our goals. We split it the same way as everywhere else — the central channel through the middle and the wide channels down each side. The difference here is that attacking comes first: this is where we want the ball most. But the second we lose it up here, our job flips instantly to stopping a counter-attack. Both halves come straight from our attacking principles and our transition principles for when we lose the ball.\n\nAttacking the Central Channel\n\nThis is our goal-scoring channel. It is where the box is and where Zone 14 sits — the area just outside the box where, statistically, most goals get scored. When we have the ball in the central channel of the attacking third, we almost always look for a shot. Connecting passes to get the best possible shot is important, but the goal is simple: take shots as much as we can. If a shot isn't on, playing out to the wide channels for a quick reset and a cross is never a bad idea.\n\nWho is in there matters. Our striker, CAM, and CM should all be in the central channel ready to attack. Our CDM most of the time should not be — they stay somewhere between the middle third and the attacking third, as our safety against a counter. And depending on the side, the far-side winger comes inside: if the ball is in the left channel, our right winger tucks into the central channel to attack the cross. Bring numbers into the box and create the overload — that's how we get the best chance.\n\nAttacking the Wide Channels\n\nIn the wide channels of the attacking third it is almost always a cross — from our winger, or from whoever is wide on the ball. If the wide player isn't a winger — say it's a CM or CAM who ended up out there — then the winger takes that player's spot and becomes a central option to attack the cross in the box. We don't want to waste the wide player who is already there.\n\nYour job off the ball depends on where you are. If you are away from the ball and you see a cross might be coming, join the central channel and attack the box. If you are waiting to see whether the ball comes out to you, get wide and stay wide so you're an option. And when in doubt, we find a pass out to the width — that buys us time to reset and try the cross again.\n\nDefending the Central Channel\n\nThe biggest thing we want to stop is a counter-attack the moment we lose the ball in the attacking third. A counter happens when one team loses the ball, is slow to get back on defense, and the other team takes advantage — breaking with numbers to create a 3v1 against us. That is exactly why our CDM and two center backs stay back to support at all times.\n\nBut that safety layer isn't always enough on its own. The instant we lose it, every player needs the intelligence to sprint back and defend the attack coming our way — whoever lost the ball has the most responsibility to react first. The other half is speed of winning it back: if we can pressure and steal it straight back from a center back who is still trying to turn defense into attack, we might win it high up the field and find a goal-scoring chance of our own. Closest player presses, everyone else gets compact behind them.\n\nDefending the Wide Channels\n\nThe far corner of the attacking third is usually the best place on the whole field for us to lose the ball — it's as far as possible from our own goal. So if our wingers lose it out wide up here, it should be an immediate attempt to win it straight back, with our center mids rushing over to support. We want it back fast, because a team that wins the ball in the wide channel of their own defensive corner usually doesn't have many options to play out of there.\n\nThat means our quick pressure often forces them into a tough spot. If they just kick it away to escape, that's fine — our CDM and a center back are ready behind, and they can go win that ball and maybe send it wide again to restart our attack. Win it back if we can; if not, the ball gets cleared a long way from our goal and we reset.",
        callouts: [
          { title: "Shoot in Zone 14", body: "The central channel of the attacking third — around Zone 14 and the box — is where most goals are scored. Connect passes, then shoot." },
          { title: "Counter-attack is the danger", body: "Lose the ball up here and the biggest threat is the counter. Sprint back, press the closest, and try to win it right back." },
        ],
        bullets: [
          {
            title: "Attacking in the attacking third",
            items: [
              "Central: this is our goal-scoring channel — connect passes for the best look, but shoot as much as possible.",
              "The striker, CAM, and CM fill the central channel; the CDM stays between the middle and attacking third.",
              "On a cross, the far-side winger comes inside — if the ball's on the left, the right winger attacks the box.",
              "Wide: it's almost always a cross from a winger or whoever is wide on the ball.",
              "If a CM or CAM is the wide player, the winger takes their spot as a central option for the cross.",
              "When in doubt, reset out to the width — get wide, stay wide — and try the cross again.",
            ],
          },
          {
            title: "Defending in the attacking third (we just lost it)",
            items: [
              "The biggest danger is a counter-attack — react the second we lose the ball.",
              "Whoever lost it sprints back first; the closest player presses, and only one presses.",
              "Try to win it back fast, before their center back can turn defense into attack.",
              "Our CDM and two center backs are the safety layer at all times — get compact behind the press.",
              "Wide: if a winger loses it, win it back immediately; the center mids rush over to support.",
              "The far corner is the best place to lose it — they have few options to play out, so press and win it back.",
            ],
          },
        ],
        table: {
          columns: ["Area", "Attacking job", "Defending job (we just lost it)"],
          rows: [
            ["Central channel", "Shoot — connect into Zone 14 and the box; striker, CAM, CM in there, CDM just behind.", "Stop the counter: sprint back, press the closest, CDM and CBs hold as the safety layer."],
            ["Wide channels", "Cross from the wide player; far-side winger comes inside; reset to width when in doubt.", "Win it back immediately; center mids rush to support — they have few options to play out."],
          ],
        },
        coachSays: "Get us into Zone 14 and shoot — that's how we score. But the second we lose it up here, it's a sprint: closest player presses, everyone gets back, and we try to win it right back before they can counter.",
        diagram: "create-2v1-and-3v1",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You are our winger and you just lost the ball in the wide channel of our attacking third — the far corner from our goal. The defender who won it is turning to play out.",
          choices: [
            { label: "Jog back and get into your defensive shape", response: "Jogging back is the gift we never want to give. This is the five-second window — the player who lost it is closest and has the most responsibility to react. Sprint and try to win it back now." },
            { label: "Immediately press to win the ball back before they can play out", response: "Yes. Losing it in the far corner is actually a good place to lose it — they have few options to play out. Press right away, with the center mids rushing to support, and we can win it straight back." },
            { label: "Foul the defender to stop them", response: "We don't stop a transition with a foul up there — that just gives them a free restart and lets their shape reset. Win it back the right way: immediate, controlled pressure with support arriving." },
          ],
        },
        videoIntro:
          "Watch the videos below, and make sure you read through everything above too — they go together.\n\nHere's the most important part: it can feel like a lot at once, so don't try to take it all in. Start by finding your own position in the video and just follow where that player goes and what they do. Once that makes sense, watch how they connect with the teammates around them, and you'll start to see how the whole team moves as one.\n\nYou don't need to memorize any of this or get it perfect. The goal is just to build a picture in your head, so that when you're out on the field learning it for real, it clicks faster and makes more sense. If something looks confusing, that's completely normal — watch your position first, get the big idea, and the rest will come with time.",
        videos: [
          { title: "Defending in Our Attacking Third", youtubeId: "7S-Km9zra9s" },
          { title: "Attacking in Our Attacking Third", youtubeId: "FVwYPZm_KQ8" },
        ],
      },
      // Module 6: Ball Recovery and Loss Scenarios
      {
        slug: "clearances",
        title: "Clearances",
        summary: "Whether we're clearing the ball or facing one, knowing what happens next — and where the ball is going — is everything.",
        body: "Always Know Where the Ball Is Going\n\nThere's one habit that matters more than anything else in this lesson, whether we're attacking or defending: always know where the ball is going. A clearance isn't the end of a play — it's the start of a new one, and the team that reacts first to where the ball is headed comes out ahead. Everything below is really just this one idea applied to three different situations.",
        callouts: [
          { title: "Our clearance", body: "We want to see it bounce — bounces mean distance, and distance is the whole point of clearing it." },
          { title: "Their clearance", body: "We don't want the bounce — get to it on the first or second bounce before it skips past or over us." },
          { title: "No belts", body: "Body in front, controlled direction. A smart clearance beats a wild full-power swing every time." },
        ],
        bullets: [
          {
            title: "When We Clear It (Attacking)",
            items: [
              "Bounces are good — they mean the ball is carrying distance away from our goal.",
              "Don't panic if our clearance bounces a few times before someone gets to it. That's it doing its job.",
              "In attack, we almost never want to clear the ball on purpose — this is a last resort, not a plan.",
              "Under pressure with no good option, a tactical clearance beats a careless pass that could go straight to them.",
              "Trust our midfielders and forwards to go win that ball in the air after a tactical clearance.",
            ],
          },
          {
            title: "When They Clear It (Defending)",
            items: [
              "We don't want the bounce — every bounce is a chance for it to skip past us or go over our heads.",
              "Get to it on the first or second bounce, every time. A third or fourth bounce is how this gets dangerous.",
              "On a windy day, the ball can carry, curve, or die unexpectedly — when in doubt, drop back.",
              "Dropping back gives you room to react to the ball instead of guessing and getting beaten by it.",
            ],
          },
          {
            title: "Winning the Ball Back",
            items: [
              "Track the flight, roll, and bounce early — know how far it's going and where it'll land before it arrives.",
              "Winning it out of the air takes confidence — get used to battling for it, because someone else wants it too.",
              "Time your jump and use your body. The more reps, the more natural it feels.",
              "If you have to clear it defensively, get your body in front and clear with control — no belts.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "What to do"],
          rows: [
            ["We clear it and it bounces", "Good — that's distance. React to where it rolls next."],
            ["They clear it toward us", "Get to it on the first or second bounce, no later."],
            ["Windy conditions, unsure flight", "When in doubt, drop back and let it come to you."],
            ["We're under pressure, no good option", "Tactical clearance — get it out, let our attackers win the air battle."],
            ["We have to clear it defensively", "Body in front, controlled direction — no belts."],
          ],
        },
        coachSays: "A clearance isn't the end of the play — it's the start of the next one. Know where the ball is going before it even gets there.",
        practice: {
          type: "true-false" as const,
          statement: "If the other team clears the ball and it's going to bounce a couple of times before we can get to it, that's totally fine — we can just wait for it to settle.",
          answer: false,
          explanation: "Waiting on their clearance is exactly how a ball ends up skipping past us or over our heads. We want to get to it on the first or second bounce, not let it run.",
        },
      },
      {
        slug: "second-balls",
        title: "Second Balls",
        summary: "Almost every duel that matters isn't won on the first try — it's won on the second, third, or fourth.",
        body: "What Is a Second Ball?\n\nPicture a 1v1 — you and an opponent both going for the same ball at the same time. Most of the time, neither player cleanly wins that challenge. The ball deflects off a leg, a foot, a shoulder, and pops loose into a nearby space that nobody controls yet. That loose ball is the second ball — and the moment it pops free, it's a brand new 50/50 that anyone can win.\n\nA Chain of 50/50s\n\nHere's the part that wins games: a second ball isn't the end of the contest — it's the start of another one. The first challenge creates a second ball. If that one is also a 50/50, it creates a third ball. Then a fourth. Most loose-ball situations are really a chain of small battles stacked back to back, and the team that keeps winning those small battles — over and over — is the team that ends up with the ball.\n\nWho Goes for the Second Ball?\n\nIt isn't always the same player who contested the first ball. Sometimes that player is the one who reacts quickest and wins it again. But just as often, it's a teammate nearby — someone who wasn't in the original challenge at all, but was close enough and alert enough to pounce on the loose ball the moment it broke free. Second balls are a team responsibility, not just a one-on-one rematch.\n\nAnticipate — But Don't Abandon Your Space\n\nThe best players sense that a 50/50 probably won't be won cleanly, so they're already leaning toward where the loose ball might land. But anticipating is not the same as automatically running off to chase it. If you're covering a space or marking a player, and you bolt the moment the first challenge happens, you've just opened up the exact space you were responsible for — and if the second ball doesn't come your way, that space is now empty. Anticipate with your eyes and your body position first. Only fully commit and leave your spot once you can see the second ball is actually there to be won.\n\nIf the First One Doesn't Go Your Way, Go Again\n\nThe most important mindset with second balls is this: losing the first challenge doesn't mean the play is over. If the ball pops loose, that's a fresh chance — for whoever is closest and best placed to win it, whether that's you or a teammate. Keep moving, keep competing, and go win the next one. Teams that give up after one lost challenge get beaten by second and third balls all game long. Teams that keep going after every loose ball — together, not just individually — are the teams that win.",
        callouts: [
          { title: "What it is", body: "The loose ball that pops free after a 50/50 — nobody owns it yet, and anyone can win it." },
          { title: "Who wins it", body: "Could be the same player going again, or a teammate nearby who reacts first. It's a team job." },
        ],
        bullets: [
          {
            title: "How to win second balls",
            items: [
              "Anticipate with your eyes and body shape — sense it's coming before it happens.",
              "Don't auto-run to chase it — if you leave your space too early and it doesn't come, that space is now open.",
              "Only fully commit and leave your spot once you can actually see the second ball is there to win.",
              "If you lose the first ball, stay ready — you or a nearby teammate can win the next one.",
              "Get your whole body into the contest when it's really there — second balls reward effort, not just skill.",
            ],
          },
        ],
        coachSays: "One lost challenge is not the end of the play. The second ball is a brand new fight — go win it.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You go in for a 50/50 challenge with an opponent. The ball deflects off both of you and bounces loose a few yards away — nobody has it.",
          choices: [
            { label: "Take a second to reset since the first challenge didn't work out", response: "That pause is exactly how second balls get lost. The moment the ball is loose, it's a brand new contest — the player who reacts first usually wins it." },
            { label: "Immediately react and go win the loose ball", response: "Yes. The first challenge being a 50/50 doesn't matter anymore — what matters now is who gets to the second ball first. Keep competing." },
          ],
        },
      },
      {
        slug: "rebounds",
        title: "Rebounds",
        summary: "There are only three ways a rebound happens — off a block, off the post, or off the goalkeeper. Know what to do for each.",
        body: "Three Ways a Rebound Happens\n\nA rebound only happens in one of three ways: the shot or pass gets blocked, it comes back off the post, or it comes back off the goalkeeper. That's it. Each one plays out a little differently, so let's go through them.\n\nRebounds Off a Block\n\nIf the ball gets blocked, it usually doesn't travel far — it's probably still close to where we already are. If that block lands in a spot where we can easily win it back, go for it, no matter what. Two other things can happen off a block, and both are fine outcomes: if it goes out for a throw-in, take that throw-in fast, before the defense resets. If it goes out for a corner, you've won us a corner — be happy about that. That's what I call \"getting us something.\" Overall, nothing crazy with blocks — just stay alert, go win it if it's winnable, and take whatever the ball gives us.\n\nRebounds Off the Post or Goalkeeper\n\nThis is the big one — always follow your shot. Whether you're a winger or a striker, always follow through on your shot — and everyone nearby should be doing the same, ready to attack a second ball off the rebound. Goalkeepers make a lot of saves where the ball doesn't get caught cleanly — it parries away, drops just in front of them, or clips the post and comes back out. Those moments happen constantly, and they're a huge chance if someone is there to react.\n\nThe Striker's Moment\n\nThink about it this way: a winger takes a shot, the goalkeeper gets a hand to it, and the ball spills out in front of the goal. That split second is the ultimate moment for a striker to arrive and finish the rebound. None of that happens if everyone just watches the first shot — but if the striker followed their run in, that loose ball in the six-yard box is now theirs to attack.",
        callouts: [
          { title: "Off a block", body: "Usually stays close — win it if you can, take a fast throw-in, or be happy with a corner. \"Getting us something\" is a good outcome." },
          { title: "Off the post or keeper", body: "Always follow your shot. The rebound is often the easiest chance of the entire sequence." },
        ],
        table: {
          columns: ["Rebound type", "What usually happens", "What we do"],
          rows: [
            ["Off a block", "Ball stays close by", "Win it back if it's winnable — no matter what."],
            ["Off a block → throw-in", "Ball goes out of bounds", "Take the throw-in fast, before they reset."],
            ["Off a block → corner", "Ball goes behind for a corner", "Good outcome — we 'got us something,' be happy."],
            ["Off the post", "Ball comes back into play", "Follow your shot — be ready to finish the second chance."],
            ["Off the goalkeeper", "Ball spills out in front", "Strikers especially — attack that loose ball immediately."],
          ],
        },
        coachSays: "Follow your shot. Every single time. The rebound is sometimes the easiest goal you'll ever score — but only if you're there for it.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "Our winger strikes a shot from the edge of the box. The goalkeeper gets a strong hand to it and the ball spills out a few yards in front of the goal. You're our striker, and you made a run in when the shot was taken.",
          choices: [
            { label: "Stay where you are — the keeper made the save, the chance is over", response: "The save isn't the end of the play — the ball spilling out in front is a brand new chance, often an easier one than the original shot. This is exactly the moment to attack." },
            { label: "Attack the loose ball immediately and try to score the rebound", response: "Yes. This is the striker's moment — the keeper couldn't hold it, and the ball is sitting in front of an open goal. Following your run in puts you right there to finish it." },
          ],
        },
      },
    ],
    sections: [
      {
        slug: "attacking-principles",
        title: "Module 1: Attacking Principles",
        summary: "Our core principles for when we have the ball.",
        lessonSlugs: [
          "protect-support-attack",
          "get-wide-stay-wide",
          "look-to-go-forward",
          "pass-to-feet-space-or-angles",
          "create-2v1-and-3v1",
        ],
      },
      {
        slug: "defending-principles",
        title: "Module 2: Defending Principles",
        summary: "Our core principles for when the other team has the ball.",
        lessonSlugs: [
          "get-compact-stay-compact",
          "prevent-going-forward",
          "first-defender-slows-them-down",
          "cover-and-support-defending",
          "create-1v2-and-1v3",
        ],
      },
      {
        slug: "transition-when-we-win",
        title: "Module 3: Transition Principles — When We Win the Ball",
        summary: "What we do in the moments right after winning possession.",
        lessonSlugs: [
          "secure-the-ball-first",
          "do-not-give-it-right-back",
          "transition-look-forward",
        ],
      },
      {
        slug: "transition-when-we-lose",
        title: "Module 3: Transition Principles — When We Lose the Ball",
        summary: "What we do in the moments right after losing possession.",
        lessonSlugs: [
          "expend-max-effort",
          "closest-player-pressure",
          "cover-and-support-transition",
        ],
      },
      {
        slug: "restart-scenarios",
        title: "Module 4: Restart Scenarios",
        summary: "How our principles apply to restarts.",
        lessonSlugs: [
          "restart-goal-kicks",
          "restart-corners",
          "restart-throw-ins",
          "restart-free-kicks",
          "restart-kickoff",
        ],
      },
      {
        slug: "open-play-scenarios",
        title: "Module 5: Open Play Scenarios",
        summary: "How our principles apply in open play.",
        lessonSlugs: [
          "open-play-defending-third",
          "open-play-middle-third",
          "open-play-attacking-third",
        ],
      },
      {
        slug: "ball-recovery-and-loss-scenarios",
        title: "Module 6: Ball Recovery and Loss Scenarios",
        summary: "Clearances, second balls, and rebounds.",
        lessonSlugs: ["clearances", "second-balls", "rebounds"],
      },
    ],
  },
  {
    slug: "player-tactical-principles",
    title: "Player Tactical Principles",
    summary: "Position-by-position principles for main play, transitions, ball recovery, and restarts.",
    importance: "Build Next",
    importanceTone: "low",
    imageSrc: "/module-images/team-tactical-principles.png",
    imagePrompt:
      "Youth soccer player scanning before receiving the ball with teammates creating support angles, bright realistic training image, no text, no logos, 16:9",
    lessons: [
      // GK
      {
        slug: "gk-main-principles",
        title: "GK (1): Main Principles",
        summary: "Core habits for the goalkeeper in open play.",
        body: "Watch the video below for the goalkeeper's main principles in our style of play.",
        videos: [{ title: "Goalkeeper", youtubeId: "GI07BwuS9F0" }],
      },
      {
        slug: "gk-transitions",
        title: "GK (1): Transitions",
        summary: "What the goalkeeper does the moment possession changes.",
        body: "The Calmest Head on the Field\n\nThe transition — the second the ball changes hands — is the most chaotic moment in the game. Everyone else is scrambling. You are the one player who can see the whole field in front of you, and the one player who is never in a rush. Your job in every transition is to be the calm head and the loudest voice while everyone around you reacts.\n\nWhen We Win It: Be the Safety Valve\n\nThe moment we win the ball, you become an option — the safe one. If a teammate wins it but is under pressure, you are the easy pass backward that keeps us out of trouble (Plan C from Look to Go Forward: back is fine, as long as it's safe). Take a clean touch or catch, get your head up, and then start the attack. If there's a quick forward or wide pass on, take it — the seconds after we win it are the golden window. If there isn't, stay calm and keep the ball; never force a risky ball, and never play it square across our own goal.\n\nWhen We Lose It: Sweeper and Organizer\n\nWhen we attack, we push up into a 2-5-1 and we are light at the back on purpose. That makes you the last line — and an extra defender. The instant we lose the ball, read for the ball played in behind our high defenders. If it's coming, come off your line and sweep it up before it turns into a breakaway. As the ball gets closer to our goal, drop back with it and get set.\n\nYour Voice Starts the Reaction\n\nYou can see what no one else can, so you start the defensive reaction. Call who presses — the closest player goes — and tell everyone else to get compact and recover. This is the five-second sprint from our transition principles, and you're the one who can see it and call it before your teammates even know it's happening.\n\nPosition Follows the Ball — But Home Is Your Box\n\nThe simple rule: mostly, you hang back and own your goal box — that's home. When we're committed forward in attack you can step up off your line a little to sweep up a ball played in behind, but stepping up is the exception, not the habit — and the instant we lose it, drop straight back. When they have it and are coming at us, get back toward your goal and get big. Your position moves with the ball, but home base is always your box.",
        callouts: [
          { title: "Secure, then start it", body: "When we win it, your first job is to be a safe option and calm the game — then begin the attack, forward or wide if it's on." },
          { title: "Sweep behind the line", body: "In our 2-5-1 we're light at the back. When we lose it, come off your line to clear a ball over the top before it becomes a breakaway." },
        ],
        bullets: [
          {
            title: "The moment we win the ball",
            items: [
              "Be the safe backward option for a teammate under pressure.",
              "Take a clean touch or catch, then get your head up and scan.",
              "Start the attack forward or wide if it's on — the window is open.",
              "If nothing's on, stay calm and keep it — never a risky ball, never square across our goal.",
            ],
          },
          {
            title: "The moment we lose the ball",
            items: [
              "Read for the ball played in behind our high line.",
              "Come off your line and sweep if you can get there first.",
              "Drop back toward goal as the ball gets closer and get set.",
              "Use your voice — call who presses, tell everyone else to get compact.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We just won it, teammate under pressure", "Offer a safe short option and secure it.", "Calms the chaos so we don't give it right back."],
            ["We won it with space ahead", "Distribute quickly, forward or wide.", "Starts the counter while they're still disorganized."],
            ["We're attacking, their defense is high", "Push up off your line, ready to sweep.", "Kills a ball over the top before it becomes a breakaway."],
            ["We just lost it", "Call the press and drop toward goal.", "One player presses, everyone else gets compact — and you can see it first."],
          ],
        },
        coachSays: "When everyone else is panicking, you're the calm one. Win it — be the safe option. Lose it — be the voice that starts everyone moving, and the sweeper behind the line.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "We just won the ball. Your left center back is under pressure near our box and plays it back to you. An opponent is closing you down, and the only 'easy' pass is square across the front of your own goal to the other center back.",
          choices: [
            { label: "Play the square pass across your goal to the other center back", response: "This is the one ball we never play. If it's read, their striker steps in and it's a tap-in — and it forces the whole team to rotate. There's always a safer choice." },
            { label: "Take a calm touch away from the pressure and play up the line or clear it to safety", response: "Yes. Secure it first, then send it away from danger — up the line to a wide teammate or safely clear. Calm beats forcing it, and it never goes across our own goal." },
            { label: "Hold the ball and wait for a teammate to come close", response: "Holding it with an opponent closing you down invites a mistake right in front of goal. Decide early — take your touch away from pressure and move it to safety." },
          ],
        },
      },
      {
        slug: "gk-ball-recovery",
        title: "GK (1): Ball Recovery",
        summary: "How the goalkeeper helps win the ball back.",
        body: "You Are the Last Line — and an Extra Defender\n\nWinning the ball back isn't only for the players up the field. As the goalkeeper, you help recover the ball every time you claim a cross, sweep up a through ball, or win a 1v1. You're the safety behind everyone, which is exactly what turns a scary moment into our ball.\n\nClaim What's Yours: Crosses and Loose Balls\n\nYour box is your house. When a ball comes into it that you can win, go and get it — and call it loudly ('keeper's!') so your defenders clear out of your way. Come with confidence: don't let the ball bounce in your own box if you can take it out of the air, because a bounce is a chance for it to skip past everyone. Catch it clean when you can. When you can't catch it, punch or parry it away — wide and away from goal, never spilled back into the middle where it's dangerous.\n\nSweeping Behind the Line\n\nBecause we push up to attack, balls get played in behind our defenders. Read the flight early — always know where the ball is going before it gets there — and come off your line to win it. Getting there first, even just to clear it, beats letting an attacker run onto it for a breakaway.\n\nThe 1v1: Slow Them Down, Don't Dive\n\nWhen an attacker breaks through alone, this is the first defender principle, just with you as the defender. Don't dive in. Stay on your feet, make yourself as big as possible, and close the space to cut down their angle. Force them wide, away from the middle, and wait for the touch or the shot — a keeper who dives early and misses is beaten, with the goal wide open behind them.\n\nClearing and Rebounds: Send It Away From Goal\n\nIf you have to clear with your feet, get your body behind it and clear with control — no wild belts. And remember rebounds: you'll make saves you can't hold cleanly, so when you parry, push the ball wide and away from goal, never back into the center. Then recover your feet and get set fast, because that loose ball is a brand-new 50/50 — talk to your defenders and get first to it.",
        callouts: [
          { title: "Catch it or send it away from goal", body: "When you can't hold it, punch or parry wide and away — never spill it back into the dangerous central space." },
          { title: "Big and patient in a 1v1", body: "Stay on your feet, make yourself big, and force the attacker wide. A dive you miss is a goal." },
        ],
        bullets: [
          {
            title: "Commanding your box",
            items: [
              "Call it loudly so defenders clear out of your way.",
              "Come for what you can win — don't let crosses bounce in your box.",
              "Catch clean when you can; punch or parry wide when you can't.",
              "Read the ball's flight early so you're moving before it arrives.",
            ],
          },
          {
            title: "Sweeping and 1v1s",
            items: [
              "Come off your line to win balls played in behind our high defenders.",
              "In a 1v1, stay big and stay on your feet — don't dive in.",
              "Force the attacker wide, away from the middle, and wait for their mistake.",
              "After a parry, recover fast — the rebound is a fresh 50/50.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["Cross into your box", "Call early; come and catch, or punch wide.", "Owning the box wins the ball back and stops a tap-in."],
            ["Through ball behind a high line", "Come off your line and sweep it up.", "Beat the attacker to it before it becomes a breakaway."],
            ["1v1, attacker through on goal", "Stay big, stay on your feet, force them wide.", "Forcing a mistake beats a dive you might miss."],
            ["A save you can't hold", "Parry or punch wide, away from the middle.", "Keeps the rebound out of the danger zone."],
            ["Loose or second ball in the box", "Claim it, or organize a clear with your defenders.", "First to react wins the chain of 50/50s."],
          ],
        },
        coachSays: "Your box is your house. Come get what's yours, and when you can't hold it, send it away from goal — never back into the middle. In a 1v1, stay big and make them blink first.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "An attacker beats our last defender and is running through on goal, one-on-one with you, from the edge of the box.",
          choices: [
            { label: "Rush out and dive at their feet as fast as you can", response: "Diving early is how keepers get beaten — one touch around you and the goal is wide open. Stay on your feet as long as you can." },
            { label: "Stay big, close the space to cut the angle, and force them wide while you wait for their touch", response: "Yes. This is the first defender principle: don't dive, make yourself big, take away the angle, and force them away from the middle. Patience wins the 1v1." },
            { label: "Back-pedal to your line and wait for the shot", response: "Backing all the way off gives the attacker time and a clear look at goal. You want to close the space and shrink their target — just without diving in early." },
          ],
        },
      },
      {
        slug: "gk-restarts",
        title: "GK (1): Restarts",
        summary: "The goalkeeper's role on restarts.",
        body: "You Have a Job on Every Restart\n\nEvery restart — ours and theirs — has a job for you. On our restarts you're often the one who starts the play; on theirs you're the commander of your box. Watch the team's restart videos for the full picture, and use this as your position-specific checklist.\n\nOur Goal Kicks: Start the Build, Stay Calm\n\nThis is your moment. Almost every time, you play short to a center back — the 4 or the 5 — to start building out. Only go to the 6 if there's no center back option. Here's the rule that matters most: never play the pass square across the front of your own goal. It's the most dangerous ball on the field. Stay calm, because on a goal kick we are always numbers-up — there is always an open man somewhere. And if you've ended up with no one open, a tactical reset is completely fine: drive the ball up to the 9 or 10 and let us reset our shape. A smart long ball beats forcing a short one into trouble.\n\nTheir Goal Kicks: Organize the Press\n\nWhen they have the goal kick, you're the eyes behind our press. We push up to trap them and win it high, so stay alert for the long ball played over the top — be ready to come off your line and sweep. Talk the team into the trap from behind.\n\nCorners — Ours: Stay Home\n\nOn our corners, you stay back with the center backs as our safety against a counter. You do not go up for the corner. If they win it and break, you're the one who's already set to deal with it.\n\nCorners — Theirs: Command Your Box\n\nDefending corners is chaos. Own your six-yard box: come for what you can win, organize your markers before the ball comes in, and be brave in the air — don't let it bounce. When you get it, catch it clean or punch it away, out and wide, never spilled into the middle.\n\nTheir Free Kicks Near Goal: Set the Wall\n\nWhen they have a free kick near our box, you build and position the wall — usually from our center mids. Line it up to cover one side, then take your position to guard the rest of the goal yourself. Get your hands in front of any low or chest-height ball. You can't do much about a perfect strike into the top corner — even real keepers can't — so don't worry about that one; just be set for everything else.\n\nOur Free Kicks & Kickoffs: Be the Reset\n\nOn our free kicks, you're part of the safety behind the ball, ready to be the reset option if we play it back. On our kickoffs, the team hits it long into their corner and pushes up — slide up off your line a little and stay alert as the last line. On their kickoffs, we press immediately, so be ready to sweep if they go long.\n\nThrow-Ins\n\nWe always throw up the line, never backward, so you're rarely the option on our throw-ins — your job is to organize and stay alert. When they throw it near our box, watch for a long throw played in like a corner, and be ready to command it.",
        callouts: [
          { title: "Never across your own goal", body: "On goal kicks, the square pass in front of your net is the one ball we never play. Short to a center back, or reset it long." },
          { title: "Own your box on their set pieces", body: "Corners and free kicks near goal: be loud, organize your markers, come for what you can, and send everything away from the middle." },
        ],
        bullets: [
          {
            title: "On our restarts (goal kicks, free kicks, kickoffs)",
            items: [
              "Goal kicks: play short to a center back (4 or 5), rarely the 6.",
              "Never play it square across the front of your own goal.",
              "Stay calm — we're always numbers-up on a goal kick.",
              "No one open? Tactical reset — drive it up to the 9 or 10.",
              "Free kicks and kickoffs: be the safety and the reset option behind the play.",
            ],
          },
          {
            title: "On their restarts (corners, free kicks, throw-ins)",
            items: [
              "Corners: command your box, organize markers, be brave in the air.",
              "Free kicks near goal: set and position the wall, guard the open side.",
              "Hands in front of low and chest-height balls.",
              "Send everything away from goal — never spill it into the middle.",
              "Watch for a long throw played into your box like a corner.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Our goal kick", "Short to a center back (4/5), never square across goal; stay calm — we're numbers-up. Reset long to the 9/10 if no one's open."],
            ["Their goal kick", "Organize the press from behind; watch for the long ball over the top, ready to sweep."],
            ["Our corner", "Stay back with the center backs as counter-safety — don't go up."],
            ["Their corner", "Command your box; come for what you can; don't let it bounce; send it out and wide."],
            ["Their free kick near goal", "Set and position the wall; guard the open side; hands in front of low/chest balls."],
            ["Our free kick", "Part of the safety behind the ball; be the reset option."],
            ["Kickoff (ours)", "Slide up as the team pushes for the long ball; stay alert as the last line."],
            ["Kickoff (theirs)", "Alert as we press high; ready to sweep a long ball."],
            ["Throw-in", "We throw up the line, never back; organize, and watch for a long throw into your box."],
          ],
        },
        coachSays: "On our goal kicks: calm, short, and never across your own goal — reset it long if you have to. On their set pieces: it's your box. Be loud, be brave, and send everything away from goal.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You have a goal kick. Your center backs are marked, the winger is covered, and the only 'open' pass is square across the front of your own goal to the other center back.",
          choices: [
            { label: "Play the square pass across your goal to the other center back", response: "Never this one. A square ball across your own goal is the most dangerous pass on the field — if it's read, it's a tap-in. There's always a safer choice." },
            { label: "Take the tactical reset — drive it up the field to the 9 or 10", response: "Yes. When nothing short is on, a smart long ball up to our striker or 10 lets us reset our shape. A tactical reset beats forcing a dangerous short pass every time." },
            { label: "Wait and hold the ball until someone gets open", response: "You can't hold a goal kick, and waiting just lets their press get set. If no short option is on, reset it long and let us reorganize." },
          ],
        },
      },
      // CB
      {
        slug: "cb-main-principles",
        title: "CB (4/5): Main Principles",
        summary: "Core habits for the center back in open play.",
        body: "Watch the video below for the center backs' main principles in our style of play.",
        videos: [{ title: "Center Backs", youtubeId: "a7VtVQrwvpU" }],
      },
      {
        slug: "cb-transitions",
        title: "CB (4/5): Transitions",
        summary: "What the center back does the moment possession changes.",
        body: "Secure First, Then Start the Build\n\nThe moment we win the ball, you are usually the one who starts our attack. Before anything else, protect it: take a calm first touch away from pressure, never into an opponent, and never force a risky pass in front of our own goal — a giveaway there is the most dangerous kind there is. Once it's safe, look to go forward.\n\nYou Are 99% of How We Start\n\nAlmost every attack we build begins with a center back. Nearly all the time, that means playing into one of our central midfielders, or switching out to a winger to escape pressure. So when the ball comes to you with time, stay calm and pick the right pass — to feet, into space, or through an angle. You don't have to do anything fancy; you have to be the calm, clean start of the attack.\n\nTactical Reset Is Allowed\n\nIf you look up and there's no good option, driving the ball long to reset our shape is completely fine. It is not a failure — it buys the whole team time to reorganize. A smart long ball beats forcing a dangerous short pass every time. The only thing we never do is give it straight to them in front of our goal.\n\nWhen We Lose It: Collapse and Cover\n\nWhen we attack, we push up into a 2-5-1, which leaves you and your center back partner as the safety layer. The instant we lose the ball, get compact: the two of you pull together to close the central gap so there's no clean lane at our goal. Whoever was closest sprints back. You are the players the whole team trusts to be there when it breaks down.\n\nStepping Out and Covering\n\nIf one of our wingers gets beaten down the side, the center back on that side steps out to press the wide attacker — but never both of you at once. While one steps out, the other center back and the 6 slide over to cover the space behind and keep us compact. And don't get dragged out chasing the ball: hold your position, watch for the ball over the top, and keep the middle protected.",
        callouts: [
          { title: "You start the build", body: "When we win it, almost every attack begins with a calm pass from you into a midfielder or out to a winger. Secure it first." },
          { title: "Collapse and cover", body: "When we lose it, the two center backs pull together to close the middle. Only the same-side CB steps out for a beaten winger — never both." },
        ],
        bullets: [
          {
            title: "When we win the ball",
            items: [
              "Calm first touch away from pressure — never into an opponent.",
              "Never force a risky pass in front of our own goal.",
              "Play into a central mid, or switch out to a winger to escape.",
              "No good option? Drive it long — a tactical reset is smart, not a failure.",
            ],
          },
          {
            title: "When we lose the ball",
            items: [
              "Get compact immediately — close the central gap with your partner.",
              "Whoever's closest sprints back; you're the safety layer in our 2-5-1.",
              "Step out to cover a beaten winger — but only the same-side CB.",
              "Don't get dragged out wide; hold the line and watch the ball over the top.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We win it under pressure near our goal", "Calm touch, safe pass to a mid or winger — never across goal.", "A giveaway in front of our goal is the most dangerous kind."],
            ["We win it with time", "Start the build into a central mid, or switch to a winger.", "That's how 99% of our attacks begin."],
            ["No good option on the ball", "Drive it long — tactical reset.", "Buys time to reset our shape; beats forcing it."],
            ["We just lost it", "Get compact, close the middle, sprint back.", "You're the safety layer in our 2-5-1."],
            ["A winger gets beaten wide", "Same-side CB steps out; partner and the 6 cover.", "Keeps us compact without both CBs pulled out."],
          ],
        },
        coachSays: "Almost everything we do starts with you — so be calm and pick the right pass, never across our goal. The second we lose it, squeeze together and cover. You're the safety the whole team trusts.",
        practice: {
          type: "true-false" as const,
          statement: "If one of our wingers gets beaten down the side, both center backs should step out together to win the ball back as fast as possible.",
          answer: false,
          explanation: "Only the same-side center back steps out to press the wide attacker. The other center back and the 6 slide over to cover behind and stay compact — if both CBs step out, the middle opens up right in front of our goal.",
        },
      },
      {
        slug: "cb-ball-recovery",
        title: "CB (4/5): Ball Recovery",
        summary: "How the center back helps win the ball back.",
        body: "Win the Ball Back as a Pair\n\nYou and your center back partner work as a unit. Get compact, stay compact — keep no clean gap between the two of you, because that gap is a straight lane to our goal. When the ball moves, you shift together; when one of you steps, the other adjusts to cover. Almost everything below comes from defending as a connected pair.\n\nFirst Defender Near Goal: Step Up, Never Dive\n\nA center back is often the first defender — the closest player between the ball and our goal. Step up to slow the attacker down, but do not dive in. This matters more for you than for anyone, because a missed dive leaves nobody between the attacker and the goal. Stay on your feet, stay patient, and wait for a heavy touch or a mistake before you go to win it.\n\nStagger to Kill the Through Ball\n\nWhen the other team has two strikers central, the smartest setup is often staggered: one of you steps to the striker on the ball, and the other drops a step behind to cover. That turns a risky 1v1 into a safe 1v2, and it blocks the through ball that would split you. Keeping the attacker outnumbered — 1v2 or 1v3 — is the whole goal of our defending.\n\nWin the Air, Win the Second Ball\n\nCenter backs own the central air. When a long ball comes into the middle, be brave: time your jump, use your body, and win the header. Winning it once isn't enough, though — react first to the second ball, because a flick-on or a knockdown is a brand-new 50/50 that's just as winnable as the first.\n\nClearing With Control — No Belts\n\nWhen you have to clear, get your body behind the ball and clear with control, away from goal — wide, never back across the middle. A clearance that bounces and carries is doing its job: distance away from our goal. And if you're stuck in a tight 1v1 near our goal with no pass on, a tactical clearance is a smart choice — getting it to safety beats a risky pass in front of our net.",
        callouts: [
          { title: "Step up, never dive", body: "As the last line, a missed dive leaves nobody behind you. Slow the attacker down and wait for the mistake." },
          { title: "Stagger to kill the through ball", body: "One CB on the striker, one behind, turns a risky 1v1 into a safe 1v2 and blocks the ball in behind." },
        ],
        bullets: [
          {
            title: "Defending as a pair",
            items: [
              "Stay compact — no clean gap between you and your partner.",
              "Shift together when the ball moves; cover when one of you steps.",
              "Keep the attacker outnumbered — 1v2 or 1v3.",
              "Don't get dragged out of position chasing the ball.",
            ],
          },
          {
            title: "Winning the ball",
            items: [
              "Step up to slow the first attacker — but never dive in.",
              "Win the aerial battle bravely: time it, use your body.",
              "React first to the second ball after a header.",
              "Clear with control, away from goal — no wild belts.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["Attacker running at our back line", "Step up, slow them down, don't dive.", "A missed dive leaves the goal open behind you."],
            ["Facing two strikers centrally", "Stagger: one on the ball, one behind.", "Stops a 1v1 becoming a 1v2 and blocks the through ball."],
            ["Long ball into the middle", "Be brave, win the header, use your body.", "Center backs own the central air."],
            ["After winning a header", "React first to the second ball.", "A flick-on or knockdown is a fresh 50/50."],
            ["Tight 1v1 near goal, no pass on", "Tactical clearance, away from goal.", "Safety beats a risky pass in front of our net."],
          ],
        },
        coachSays: "You and your partner are a unit — stay tight, cover each other, and never dive in front of your own goal. Win the air, win the second ball, and when in doubt, get it away from danger.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "The other team has two strikers playing centrally, and they're about to play a ball toward them through the middle. How should you and your center back partner set up?",
          choices: [
            { label: "Both step up tight to the strikers, side by side", response: "Side by side, a single through ball between you splits you both, and a 1v1 can quickly become a 1v2. Against two strikers you need cover, not a flat line." },
            { label: "Stagger — one steps to the ball-side striker, the other drops a step behind to cover", response: "Yes. Staggering turns a risky 1v1 into a safe 1v2 and blocks the through ball that would split a flat pair. This is exactly how we defend two central strikers." },
            { label: "Both drop deep to the goal line and wait", response: "Dropping all the way off invites them to run straight at you with time and space. Stay compact and staggered so you can step, cover, and keep them outnumbered." },
          ],
        },
      },
      {
        slug: "cb-restarts",
        title: "CB (4/5): Restarts",
        summary: "The center back's role on restarts.",
        body: "You Have a Job on Every Restart\n\nEvery restart, ours and theirs, has a job for you. On our goal kicks you're the first pass; on their set pieces you're one of the bravest defenders in the box. Watch the team's restart videos for the full picture, and use this as your position-specific checklist.\n\nOur Goal Kicks: You're the First Pass\n\nAlmost every goal kick comes to you — the 4 on the right, the 5 on the left. The most important thing: don't freak out when you get it, because on a goal kick we are always numbers-up, so there is always an open man somewhere. Receive it calmly, then play to the winger's feet, into the space for the 6 to run onto, or up the field. Never play the pass square across the front of our own goal. And if nobody is open, a tactical reset — driving it up to the 9 or 10 — is completely fine.\n\nTheir Goal Kicks: Be the Safety Behind the Press\n\nWhen they have the goal kick, we push up to press and trap them. That makes you the deepest player and the safety. Stay alert for the long ball played over our press, and be brave — win the aerial battle on the first or second bounce, don't let it run.\n\nOur Corners: Stay Home\n\nOn our corners, you stay back with the goalkeeper as our protection against a counter. You do not go up for the corner. If they win it and break, you're already set to stop it.\n\nTheir Corners: Defend the Central Area\n\nWhen they have a corner, come up a step off the goal line — you don't need to stand on the posts. Get compact, mark your player, and own the central area in front of goal. Be brave in the air, and when the ball comes in, get it out — and never let it bounce in your box.\n\nTheir Free Kicks: Defend Behind the Wall\n\nWhen they have a free kick near our goal, you defend behind the wall. Mark up, leave no one unmarked, and if they play the ball up into the box, be brave and be first to it.\n\nOur Free Kicks, Kickoffs & Throw-Ins\n\nOn our free kicks, you're part of the back-line safety, ready in case it breaks down — and on free kicks in the attacking third, you can push up into the box. On our kickoffs, hold as the last line while the team pushes up for the long ball. On kickoffs against us, be ready to defend a ball played long. And on throw-ins, shift across with the team and stay alert for a long throw played into your box.",
        callouts: [
          { title: "You're the first pass on goal kicks", body: "Almost every goal kick comes to you. Stay calm — we're numbers-up — and never play it square across your own goal." },
          { title: "Be brave in the air", body: "On their set pieces and long balls, win the header, get it out, and never let it bounce in your box." },
        ],
        bullets: [
          {
            title: "On our restarts (goal kicks, free kicks, kickoffs)",
            items: [
              "Receive goal kicks calmly — we're always numbers-up.",
              "Play to the winger, into space for the 6, or up the field.",
              "Never play it square across our own goal; reset long if stuck.",
              "Stay as the back-line safety on free kicks and kickoffs.",
            ],
          },
          {
            title: "On their restarts (corners, free kicks, throw-ins)",
            items: [
              "Corners: come a step off the line, stay compact, mark up, get it out.",
              "Free kicks: defend behind the wall, leave no one unmarked.",
              "Win the long ball in the air — be brave and first to it.",
              "Don't let the ball bounce in your box; watch for a long throw in.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Our goal kick", "You're the main receiver (4/5). Stay calm — numbers-up. Play to the winger, into space for the 6, or up; never square across goal; reset long if stuck."],
            ["Their goal kick", "Deepest safety behind our press; win the long ball in the air, be brave."],
            ["Our corner", "Stay back with the keeper as counter-safety — don't go up."],
            ["Their corner", "Come a step off the line, stay compact, mark up; get it out and don't let it bounce."],
            ["Their free kick near goal", "Defend behind the wall; mark up, leave no one unmarked, be first to a ball played up."],
            ["Our free kick", "Part of the back-line safety; push into the box on attacking-third free kicks."],
            ["Kickoff (ours)", "Hold as the last line while the team pushes up."],
            ["Kickoff (theirs)", "Ready to defend a long ball; win it in the air."],
            ["Throw-in", "Shift across with the team; watch for a long throw into your box."],
          ],
        },
        coachSays: "On our goal kicks, you're the first pass — calm, simple, and never across our goal. On their set pieces, be the bravest one in the box: win the header, get it out, don't let it bounce.",
        practice: {
          type: "true-false" as const,
          statement: "When defending a corner, the best spot for our center backs is standing right on the goal posts to guard the corners of the net.",
          answer: false,
          explanation: "We don't stand our center backs on the posts — at this age nobody is hitting it cleanly into the corner. Instead, come a step off the line, stay compact, mark up, and defend the central area so we can win the ball and get it out.",
        },
      },
      // CM
      {
        slug: "cm-main-principles",
        title: "CM (8): Main Principles",
        summary: "Core habits for the center midfielder in open play.",
        body: "Watch the video below for the center mid's main principles in our style of play.",
        videos: [{ title: "Center Mid", youtubeId: "VsoR_fI-xYQ" }],
      },
      {
        slug: "cm-transitions",
        title: "CM (8): Transitions",
        summary: "What the center midfielder does the moment possession changes.",
        body: "Box to Box: You Cover the Whole Field\n\nThe most important idea for our 8 is this: you are a box-to-box midfielder. That means you cover the entire field — from our own penalty box all the way to their penalty box, and back again. When we attack, you get forward to support and arrive in their box. When we defend, you sprint back to help protect our box. You are the engine that links our defense and our attack, and transitions are exactly where that engine matters most.\n\nWhen We Win It: Be the Link Forward\n\nThe second we win the ball, you connect the back to the front. Offer a supporting angle to the teammate who won it, and look to receive — a lot of our attacks come from a center back playing into a central midfielder, and that's you. Take a good first touch, get your head up, and look to go forward: break a line with a pass, or carry it. In the golden window right after we win it, push forward to support the counter and get yourself into their box.\n\nWhen We Lose It: Sprint Back First\n\nHere's the other half of box to box. When we attack we push up into a 2-5-1, so you're often high up the field when we lose the ball. The instant we lose it, your first job is to sprint back — get compact and protect the central lane before their counter can use the space behind us. An 8 who gets caught upfield and jogs back is how we get countered; an 8 who sprints back is how we kill it.\n\nThe Engine Never Stops\n\nBox to box means you are always moving. Support the attack, then recover to defend. Whether we have the ball or they do, you have a run to make — the worst thing an 8 can do is stand still and watch. Your legs and your reading of the game are what hold our two halves together.",
        callouts: [
          { title: "Box to box", body: "You cover the whole field — our box to theirs and back. You're the engine that links our defense and our attack." },
          { title: "Win it: link forward. Lose it: sprint back.", body: "That's your transition job in one line — and why your stamina is the team's secret weapon." },
        ],
        bullets: [
          {
            title: "When we win the ball",
            items: [
              "Offer a supporting angle to the teammate who won it.",
              "Receive from a center back to start the build — that's you.",
              "Good first touch, head up, look to go forward or break a line.",
              "Push forward in the golden window — arrive in their box.",
            ],
          },
          {
            title: "When we lose the ball",
            items: [
              "Sprint back first — don't get caught upfield from our 2-5-1.",
              "Get compact and protect the central lane.",
              "Become a cover-and-support defender behind the press.",
              "Help turn their counter into a 1v2 or 1v3 for us.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We just won it", "Offer an angle and link the ball forward.", "You connect our defense to our attack."],
            ["Golden window, space ahead", "Get forward, support the counter, arrive in the box.", "Box-to-box runs are how we score from transitions."],
            ["We just lost it", "Sprint back to get compact.", "You're a cover defender — don't get caught upfield."],
            ["Ball loose in midfield, either way", "Keep moving — never stand still.", "The engine of the team never stops."],
          ],
        },
        funFact: {
          title: "Why they call it 'box to box'",
          body: "The two penalty areas are called 'the boxes.' A box-to-box midfielder is one with the engine to run from defending in their own box one moment to attacking in the other team's box the next — covering the full length of the field, over and over, for the whole game. It's one of the hardest-working roles on the team.",
        },
        coachSays: "You're the engine — box to box, all game. Win it, you're the link forward. Lose it, you're the first one sprinting back. Never stand and watch; there's always a run to make.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "We've pushed up into our attacking shape and you, the 8, are high up the field near their box. We suddenly lose the ball, and they look to counter through the middle.",
          choices: [
            { label: "Stay high in case we win it straight back and you can attack again", response: "Staying high is how an 8 gets caught upfield. We're in our 2-5-1 and light at the back — if you don't recover, their counter runs right through the space you left. This is the moment to be box-to-box." },
            { label: "Sprint back immediately to get compact and protect the middle", response: "Yes. This is the box-to-box job: the instant we lose it, you're the first one sprinting back to close the central lane and help turn their counter into a 1v2 or 1v3 for us." },
            { label: "Jog back slowly to save energy for the next attack", response: "A slow jog is a gift to their counter. The five-second window after losing it is when full effort matters most — sprint back, then you can catch your breath once we're compact." },
          ],
        },
      },
      {
        slug: "cm-ball-recovery",
        title: "CM (8): Ball Recovery",
        summary: "How the center midfielder helps win the ball back.",
        body: "The Heart of Our Cover and Support\n\nWhen the other team has the ball in midfield, you are one of our key second-and-third defenders. While someone closer presses the ball — often our 10 — you give the cover and support behind them: block the passing lanes, stay on your toes, and be ready to become the next first defender the moment our pressure gets beaten. Defending in the middle is pressure, cover, support, and you are a huge part of the cover and support.\n\nForce Them Backward, Never Forward\n\nWhen we defend the middle, let the other team play backward and sideways all they want — that doesn't hurt us. The one thing we cannot allow is a clean ball forward. If their player turns and plays forward through us, that's the dangerous ball, because now we're scrambling. So press a forward turn hard — but do not dive in. A dive that misses in midfield can turn a 3v3 into a 5v5 with their wingers running, and we never want to be numbers-even on defense.\n\nWin the Second Ball — You're Everywhere\n\nBeing box to box means you're constantly around the ball, which makes you our best second-ball winner in midfield. When a header or a tackle pops the ball loose, anticipate where it's going and be first to react. Most midfield battles are really a chain of 50/50s, and the 8 who keeps winning the next one ends up with the ball.\n\nRecovery Runs Win the Ball Back\n\nYour stamina is a weapon on defense, not just in attack. When a runner breaks past our shape, track them all the way back, get goal-side, and nick the ball when the moment comes. A center back stepping out, a winger too tired to track — the 8 covering that ground with a recovery run is often what saves us and wins possession back.",
        callouts: [
          { title: "You're the cover and support", body: "When a teammate presses, you block the lane behind and get ready to be the next first defender." },
          { title: "Force them backward, never forward", body: "Let them go side to side; a forward turn is the danger. Press it hard — but never dive in." },
        ],
        bullets: [
          {
            title: "Cover and support in midfield",
            items: [
              "Block the passing lanes behind the player pressing the ball.",
              "Be ready to become the next first defender if we're beaten.",
              "Keep the attacker outnumbered — 1v2 or 1v3.",
              "Never let us be numbers-even in the middle.",
            ],
          },
          {
            title: "Winning the ball as the engine",
            items: [
              "Be first to second balls in midfield — anticipate where it pops out.",
              "Press a forward turn hard, but don't dive in.",
              "Make recovery runs to track runners and get goal-side.",
              "Use your stamina to cover for a stepping CB or a tired winger.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["A teammate presses the ball", "Cover behind and block the lane.", "Ready to be the next first defender if they're beaten."],
            ["They play backward or sideways", "Stay patient, hold your shape.", "They can't hurt us going backward."],
            ["They turn and play forward", "Press it hard — don't dive in.", "A forward ball is the danger; a missed dive makes it worse."],
            ["Loose ball in midfield", "React first, win the second ball.", "Box-to-box means you're already there."],
            ["A runner breaks past our shape", "Track them all the way back, get goal-side.", "Recovery runs are how we win it back."],
          ],
        },
        coachSays: "In the middle you're the cover and the support — block the lane, stay ready, and never dive. Win the second ball, track every runner, and use those lungs to save us.",
        practice: {
          type: "true-false" as const,
          statement: "When a teammate steps up to press the ball in midfield, the 8 should dive in too and double up to win it back faster.",
          answer: false,
          explanation: "Only one player presses the ball at a time. As the 8, your job is to cover behind — block the passing lane and be ready to become the next first defender. If you both dive in, another opponent is left free and we can get split open.",
        },
      },
      {
        slug: "cm-restarts",
        title: "CM (8): Restarts",
        summary: "The center midfielder's role on restarts.",
        body: "You're Our Main Set-Piece Taker\n\nOf all the field players, you have the biggest job on our restarts, because you take most of them. Watch the team's restart videos for the full picture — here's your position-specific checklist.\n\nOur Corners: You Take It\n\nMost of the time, you take our corners. Wait for the signal — the taker raises a hand, and on the hand coming down, the three stacked runners go: the first to the middle of the box, the second to the near post, the third to the far post. Deliver the ball in for them to attack, aiming for the ricochet off one of us into the goal. (If one of the other mids takes it instead, you fill their spot.)\n\nOur Free Kicks: You Take It\n\nYou take almost every free kick in our middle and defending third. Your job is to make the smart decision: play it short to the 6 so we can dribble out and build, long to the 11 out wide, or very long to the 9 up top. Play it up, play it smart, and never give it away. In the attacking third, the free kick can be decisive and the 9 might take it instead.\n\nOur Goal Kicks: Support the Build\n\nOn goal kicks, you're one of our rotating midfielders. As the press shifts and the 9 steps up to leave the 6 open, the rotations open you too — move into space to receive and keep supporting the ball-side channel so we can play out.\n\nOur Throw-Ins & Kickoffs\n\nOn throw-ins, move to create the throw up the line, and in the attacking third, attack the box like it's a corner. On our kickoffs, you push up high as we hit the long ball into their corner — go win it and support.\n\nDefending Their Restarts\n\nOn their corners, mark your player and defend the central area of the box — help smother it and get the ball out. On their free kicks near our goal, you're often one of the center mids in the wall (with the 10 and 6); if you're not in the wall, mark up tight. On their kickoffs we press immediately, so be ready, and on their throw-ins, mark up, stay compact, and win the second ball.",
        callouts: [
          { title: "You're our set-piece taker", body: "Most corners and free kicks are yours. Deliver smart, play it up, and never give it to the other team." },
          { title: "In the wall on their free kicks", body: "You're often one of the center mids in the wall with the 10 and 6 — otherwise, mark up tight." },
        ],
        bullets: [
          {
            title: "On our restarts",
            items: [
              "Corners: you usually take it — deliver for the three runners (near post, far post, middle).",
              "Free kicks: short to the 6, long to the 11, or very long to the 9 — smart and up.",
              "Goal kicks: rotate into space to receive and support the build.",
              "Throw-ins: create the throw up the line; attack the box in the attacking third.",
            ],
          },
          {
            title: "On their restarts",
            items: [
              "Corners: mark your player and defend the central box area.",
              "Free kicks near goal: be part of the wall, or mark up tight.",
              "Kickoffs: press immediately with the team.",
              "Throw-ins: mark up, stay compact, win the second ball.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Our corner", "You usually take it — deliver for the three runners (near post, far post, middle); aim for the ricochet."],
            ["Our free kick", "You take most of them (mid/def third). Short to the 6, long to the 11, or very long to the 9 — smart and up."],
            ["Our goal kick", "Support the build — rotate into space to receive when the press opens you up."],
            ["Our throw-in", "Move to create the throw up the line; in the attacking third, attack the box like a corner."],
            ["Our kickoff", "Push up high for the long ball into their corner; win it and support."],
            ["Their corner", "Mark your player; defend the central box area; help get it out."],
            ["Their free kick near goal", "Part of the wall (with the 10 and 6), or mark up tight."],
            ["Their kickoff", "Press immediately with the team."],
            ["Their throw-in", "Mark up, stay compact, win the second ball."],
          ],
        },
        coachSays: "Corners and free kicks are yours — deliver with quality and always play it up, never to them. When they have the set piece, get in the wall or mark up, and be first to every second ball.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You're standing over a free kick in our own defending third. The 6 is open and close by, the 11 is wide up the line, and the 9 is high up top. An opponent is shouting to rush you.",
          choices: [
            { label: "Blast it as far toward their goal as you can and hope someone gets on the end", response: "A hopeful blast with no target is just giving the ball away. You have real options — the 6, the 11, and the 9 are all available. Pick the smart one and play it up with purpose." },
            { label: "Make the smart choice — short to the 6 to build out, or up to the 11 or 9 in space", response: "Yes. As our free-kick taker, you decide: short to the 6 to dribble out and build, long to the 11 out wide, or very long to the 9. Play it up, play it smart, and don't give it away." },
            { label: "Tap it sideways with no real plan just to get it moving", response: "A sideways tap with no purpose wastes the restart and can put a teammate under pressure. Make a deliberate choice — build through the 6, or go up to the 11 or 9." },
          ],
        },
      },
      // CAM
      {
        slug: "cam-main-principles",
        title: "CAM (10): Main Principles",
        summary: "Core habits for the attacking midfielder in open play.",
        body: "Watch the video below for the center attacking mid's main principles in our style of play.",
        videos: [{ title: "Center Attacking Mid", youtubeId: "2bK36NbeGVg" }],
      },
      {
        slug: "cam-transitions",
        title: "CAM (10): Transitions",
        summary: "What the attacking midfielder does the moment possession changes.",
        body: "Live in Zone 14\n\nThe most important spot on the field for you is zone 14 — the area just outside the top of their box. It's not just us saying that; statistically, more goals are created from zone 14 than anywhere else, and it's where you and the 9 like to live. In every transition, this is the home base you're thinking about: when we win it, that's where you want the ball; when we lose it, that's often where you are to win it straight back.\n\nWhen We Win It: Be the Forward Outlet\n\nYou are the highest of our central midfielders, which makes you the link into the attack. The instant we win the ball, show for it in a pocket of space between their lines — not hidden behind a defender. Receive, turn, and go forward. In the golden window right after we win it, you and the 9 are the players who spring the counter: get into zone 14 and the box and become a goal threat before their defense can reorganize.\n\nWhen We Lose It: Be the First Presser, Then Recover\n\nBecause you play so high, when we lose the ball in their half you are very often the closest player to it. That makes you the first defender — press immediately to slow them down, don't dive in, and shape your pressure to push them where we have help. If the ball gets past your press, recover back into our shape. The one thing you can never do is stand and watch the ball go by.\n\nConnect the Press and the Counter\n\nThis is what makes your transitions special: you connect our defending and our attacking in the most dangerous area of the field. Win the ball back high near zone 14 and we have a great chance to score immediately; drop into a pocket and you're the outlet that links us forward. Either way, you're working right where goals are made.",
        callouts: [
          { title: "Live in zone 14", body: "The best place on the field to score from. In transition, that's where you want to receive — and where you want to win it back." },
          { title: "Highest mid = first presser", body: "When we lose it high, you're often the closest player. Press immediately to slow them, then recover if you're beaten." },
        ],
        bullets: [
          {
            title: "When we win the ball",
            items: [
              "Show in a pocket between their lines — not behind a defender.",
              "Receive, turn, and look to go forward.",
              "You and the 9 spring the counter in the golden window.",
              "Get into zone 14 and the box and become a goal threat.",
            ],
          },
          {
            title: "When we lose the ball",
            items: [
              "If you're closest (often the case high up), press immediately.",
              "Step up to slow them — don't dive in.",
              "Shape your pressure to push them toward our cover.",
              "If your press is beaten, recover into shape — never ball-watch.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We just won it", "Show in a pocket and link the ball forward.", "You're the highest mid — the outlet into attack."],
            ["Golden window, defense disorganized", "Get into zone 14 and the box.", "Best place to score, and they haven't reset."],
            ["We lose it high up", "Press immediately — you're often closest.", "Win it back fast and punish from zone 14."],
            ["Your press gets beaten", "Recover into our shape.", "Don't get caught ball-watching up the field."],
          ],
        },
        coachSays: "You live in zone 14 — the best place on the field to score. Win it, get in a pocket and link us forward. Lose it high, you're the first one pressing. Work where the goals are made.",
        practice: {
          type: "true-false" as const,
          statement: "When we lose the ball high up the field, the 10 should always drop straight back into our defensive shape before doing anything else.",
          answer: false,
          explanation: "If you're the closest player — which you often are when we lose it high — you press immediately to slow them down and try to win it back high near zone 14. You only recover into shape if the ball gets past your press.",
        },
      },
      {
        slug: "cam-ball-recovery",
        title: "CAM (10): Ball Recovery",
        summary: "How the attacking midfielder helps win the ball back.",
        body: "Often the First Defender in the Middle\n\nWhen the other team has the ball in the middle third, you are usually the one who pressures it. Step up to the ball carrier, slow them down, and do not dive in. Shape your pressure with your body so you push them away from the dangerous central space — toward a sideline or backward, where the rest of the team is waiting to help. You set the trap; your teammates spring it.\n\nPress High, Win It High\n\nHere's why your defending is so valuable: you do it high up the field. A ball you win back near zone 14 isn't just a stop — it's a scoring chance, because you're already in the best place on the field to score and their defense is disorganized from attacking. Winning the ball high is one of the most dangerous things we can do.\n\nCut the Central Ball\n\nYour pressure and your positioning take away the forward, central pass — the one thing we never let the other team have. Force them backward or out wide where we have cover. A team that can only go sideways and backward isn't hurting us.\n\nRecover and Cover When Beaten\n\nIf your press gets beaten, don't drop your head — get back. The 8 and 6 are behind you to cover, but you still have to recover into shape and help; we never want to be numbers-even on defense. Ball-watching after a lost press is how a small problem becomes a big one.\n\nWin the Second Ball in Dangerous Areas\n\nBecause you live around the box and zone 14, the loose balls near you are golden. A flick-on, a blocked shot, a knockdown — be first to react. A second ball won in zone 14 can become a shot a moment later.",
        callouts: [
          { title: "Press to win it high", body: "You defend high, so the ball you win can be a scoring chance right in zone 14 — the best place on the field." },
          { title: "Step up, don't dive", body: "Slow the ball carrier, shape them away from the middle toward our cover, and wait for the mistake." },
        ],
        bullets: [
          {
            title: "Pressing as the highest mid",
            items: [
              "Be the first defender in the middle third — step up to the ball.",
              "Shape your pressure to force them backward or wide.",
              "Take away the forward, central pass.",
              "Don't dive in — stay on your feet and wait for the mistake.",
            ],
          },
          {
            title: "Winning the ball",
            items: [
              "Win it high to punish them from zone 14.",
              "Be first to second balls near the box.",
              "Recover and cover if your press is beaten — never ball-watch.",
              "Keep us from ever being numbers-even on defense.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["They have it in the middle third", "Step up and press — don't dive.", "You're often our first defender there."],
            ["You're pressing the ball", "Shape it to force them backward or wide.", "Takes away the forward, central ball."],
            ["You win it high near zone 14", "Look to attack immediately.", "Best place to score, defense disorganized."],
            ["Your press gets beaten", "Recover into shape — don't ball-watch.", "The 8 and 6 cover, but you still have to help."],
            ["Loose ball near the box", "Be first to it.", "Second balls in dangerous areas become shots."],
          ],
        },
        coachSays: "You press in the most dangerous part of the field — so step up, shape them away from the middle, and never dive. Win it high near zone 14 and we're a step from a goal.",
        practice: {
          type: "true-false" as const,
          statement: "Winning the ball back high near zone 14 is usually a worse situation for us than winning it deep in our own half.",
          answer: false,
          explanation: "It's much better. Zone 14 is the best place on the field to score from, and when you win it high their defense is still disorganized from attacking. That's exactly why your high pressing is so valuable.",
        },
      },
      {
        slug: "cam-restarts",
        title: "CAM (10): Restarts",
        summary: "The attacking midfielder's role on restarts.",
        body: "Restarts Are a Big Deal for You\n\nBecause you live in zone 14 and the box, you have a real job on almost every restart — especially the attacking ones. Watch the team's restart videos for the full picture; here's your position-specific checklist.\n\nOur Free Kicks: Always in the Box\n\nThis is your signature restart job: on our free kicks, the 10 is always in the box. While others take it and others stay back as safety, you get into the box, find a pocket of space, and be ready to attack the delivery — win the header, pounce on a loose ball, and finish. When the ball comes in, you're the one we want arriving on it.\n\nOur Corners: Attack the Box\n\nOn our corners, you're one of the runners attacking the box. Time your run to the signal — when the taker's hand drops — and attack your spot (the middle, the near post, or the far post). Go hard for the ricochet or the finish. The whole set piece is built to get the ball to runners like you.\n\nTheir Goal Kicks: Cut the Central Ball\n\nWhen they have a goal kick and we press high, your job is to come in and mark their 6 so they can't play through the middle. Take away that central pass and you force them to go wide or long — right into our trap, where we win it and try to score quickly.\n\nTheir Free Kicks: In the Wall\n\nWhen they have a free kick near our goal, you're often one of the center mids in the wall, with the 8 and 6. Hold your spot in the wall, then defend once the ball is played.\n\nOur Goal Kicks, Kickoffs & Throw-Ins\n\nOn our goal kicks, support the build and stay high as an outlet — if we reset long, you and the 9 are the targets up top. On kickoffs, you move up into the attacking area for the long ball into their corner (and against us, you're up on the line pressing immediately). On throw-ins in the attacking third, attack the box like it's a corner.\n\nTheir Corners & Throw-Ins\n\nOn their corners, mark your player and defend the central area of the box — help smother it and get the ball out. On their throw-ins, mark up, stay compact, and be ready for the second ball.",
        callouts: [
          { title: "Always in the box on our free kicks", body: "That's your signature restart job — find a pocket, attack the delivery, and finish." },
          { title: "Cut the central ball on their goal kicks", body: "Mark their 6 so they can't play through the middle — force them wide or long into our press." },
        ],
        bullets: [
          {
            title: "On our restarts",
            items: [
              "Free kicks: always get into the box — attack the delivery and finish.",
              "Corners: be one of the runners attacking the box on the signal.",
              "Goal kicks: support the build and stay high as an outlet.",
              "Kickoffs: push up into the attacking area for the long ball.",
            ],
          },
          {
            title: "On their restarts",
            items: [
              "Goal kicks: mark their 6 to cut the central pass.",
              "Free kicks near goal: be one of the center mids in the wall.",
              "Corners: mark up and defend the central box area.",
              "Kickoffs: press immediately; throw-ins: mark up and win the second ball.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Our free kick", "Always in the box — find a pocket, attack the delivery, win the header or loose ball, finish."],
            ["Our corner", "One of the runners attacking the box (middle / near post / far post) on the signal — go for the finish."],
            ["Our goal kick", "Support the build and stay high as an outlet; a target up top with the 9 if we reset long."],
            ["Our throw-in", "In the attacking third, attack the box like a corner."],
            ["Our kickoff", "Move up into the attacking area for the long ball into their corner."],
            ["Their goal kick", "Mark their 6 to cut the central pass; force them wide or long."],
            ["Their free kick near goal", "One of the center mids in the wall (with the 8 and 6)."],
            ["Their corner", "Mark your player; defend the central box area; help get it out."],
            ["Their kickoff", "Up on the line; press immediately."],
            ["Their throw-in", "Mark up, stay compact, win the second ball."],
          ],
        },
        coachSays: "On our set pieces, get in that box — you're our zone-14 threat, so be the one arriving to finish. On theirs, hold the wall or mark up tight, and cut off their central ball on goal kicks.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "We win a free kick in the attacking third, in a good spot to deliver into the box. You're the 10. Where do you go?",
          choices: [
            { label: "Drop back toward the halfway line to help defend, just in case", response: "That's not your job here. On our free kicks the 10 is always in the box — if you drop back, we lose our best zone-14 threat right when we have a chance to score." },
            { label: "Get into the box, find a pocket of space, and be ready to attack the delivery and finish", response: "Yes. On our free kicks the 10 is always in the box. Find space, attack the ball when it comes in, and be the one arriving to win the header or the loose ball and finish." },
            { label: "Stand wide and watch to see what happens", response: "Standing and watching wastes your biggest strength. You live in the box and zone 14 — get in there and be ready to attack the delivery." },
          ],
        },
      },
      // CDM
      {
        slug: "cdm-main-principles",
        title: "CDM (6): Main Principles",
        summary: "Core habits for the defensive midfielder in open play.",
        body: "Watch the video below for the center defensive mid's main principles in our style of play.",
        videos: [{ title: "Center Defensive Mid", youtubeId: "0nPPJZuMXXU" }],
      },
      {
        slug: "cdm-transitions",
        title: "CDM (6): Transitions",
        summary: "What the defensive midfielder does the moment possession changes.",
        body: "You Are the Hinge of Our Whole Shape\n\nNo position lives in transition more than you do — because you are the player who changes our shape. When we attack, you push up into midfield and play more of an attacking role, and our 3-4-1 becomes a 2-5-1, giving us a fifth midfielder. When we defend, you drop into the back line and become the third center back of our back three. You are the hinge: push up and we're a 2-5-1, drop in and we're a back three. That's why your transitions matter more than anyone's on the team.\n\nSix Always Gets Back\n\nHere is your golden rule, and you'll hear it over and over: six always gets back. You're allowed to push up and play an attacking role — but the very moment we lose the ball, you are the first one getting home. You and the two center backs are the safety layer at all times, so you can never get caught too high. The whole team can take risks going forward because they trust that you'll always be there behind them.\n\nWhen We Win It: Be the Pivot Outlet\n\nThe second we win the ball, you become the safe, calm option in front of our defense. Show for it, take a controlled first touch, and start the build — into a center mid, out to a winger, or up the field. You're the player who calms the chaos and gets us organized to attack. Don't rush it; secure the ball first, then pick the smart pass. A team with a calm 6 in transition almost never gives the ball right back.\n\nWhen We Lose It: Drop and Protect First\n\nThe instant we lose it, your first job is to drop into the central space in front of our back line and protect the most dangerous area — the lane straight at our goal. Screen that lane, slow the counter, and become the third center back. You are the single biggest reason a counter-attack dies before it ever reaches our box.\n\nRead It Before It Happens\n\nThe best 6s feel the transition coming. When our attack starts to look risky, you're already dropping to cover before we even lose it. When we're about to win it back, you're already showing as the outlet. Always be a step ahead of the moment.",
        comparison: {
          left: {
            label: "When We Attack (2-5-1)",
            items: [
              "Push up into midfield as a fifth mid.",
              "Play more of an attacking role — the pivot.",
              "Be the calm outlet in front of the attack.",
              "Sit between the middle and attacking thirds as counter-insurance.",
            ],
          },
          right: {
            label: "When We Defend (3-4-1, back three)",
            items: [
              "Drop into the back line.",
              "Become the third center back.",
              "Screen the central lane in front of our goal.",
              "You and the two center backs are the safety layer.",
            ],
          },
        },
        callouts: [
          { title: "You are the hinge", body: "Push up and we're a 2-5-1; drop in and we're a back three. You transition our whole shape." },
          { title: "Six always gets back", body: "Your golden rule. Join the attack, but be the first one home the second we lose it." },
        ],
        bullets: [
          {
            title: "When we win the ball",
            items: [
              "Be the safe, calm outlet in front of our defense.",
              "Controlled first touch, then start the build — mid, winger, or up.",
              "Calm the chaos and get us organized to attack.",
              "Secure first, don't rush — a calm 6 rarely gives it right back.",
            ],
          },
          {
            title: "When we lose the ball",
            items: [
              "Drop into the central space and protect first.",
              "Screen the lane straight at our goal and slow the counter.",
              "Become the third center back of our back three.",
              "Never get caught high — you're the safety layer with the CBs.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We're attacking", "Push up, play the pivot — we become a 2-5-1.", "You give us a fifth midfielder."],
            ["We just won it", "Show as the safe outlet and start the build.", "You calm the game and get us organized."],
            ["We just lost it", "Drop in and protect the central lane.", "You're the counter-insurance — the counter dies on you."],
            ["We're defending deep", "Become the third center back.", "You complete our back-three defensive shape."],
          ],
        },
        coachSays: "You're the hinge of the whole team — push up and we're a 2-5-1, drop in and we're a back three. Everyone else takes risks because they trust one thing: six always gets back.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "We've pushed up into our 2-5-1 attacking shape and you, the 6, have joined the attack near the middle third. The attack breaks down and we lose the ball — they look to counter through the middle.",
          choices: [
            { label: "Stay forward and try to win it back high so we can attack again", response: "This is the one thing a 6 can't do. We're in our 2-5-1 and light at the back — if you don't get home, the counter goes straight through the middle you left open. Six always gets back." },
            { label: "Immediately drop back to protect the central space as our counter-insurance", response: "Yes. Six always gets back. The instant we lose it, you drop in, screen the lane at our goal, and become the third center back. You're the reason the counter dies before it reaches our box." },
            { label: "Drift wide to help the winger defend the flank", response: "Drifting wide leaves the most dangerous space — the middle — wide open. Your job is to protect the central lane first; the wide areas are the wingers' and center backs' responsibility." },
          ],
        },
      },
      {
        slug: "cdm-ball-recovery",
        title: "CDM (6): Ball Recovery",
        summary: "How the defensive midfielder helps win the ball back.",
        body: "The Screen in Front of the Back Line\n\nYour main defensive job is to protect the space in front of our center backs — the central lane that points straight at our goal. You are the screen: you break up attacks and cut out balls into their strikers before they ever reach our box. A lot of the time, the most important thing you do isn't a tackle at all — it's standing in the right place so their forward pass is never on.\n\nBecome the Third Center Back\n\nWhen we defend deep, you drop in and complete our back three. Now you defend like a center back: get compact with the two CBs so there's no gap, step up to slow an attacker but never dive in, and be brave to win the ball in the air. You're not just a midfielder who tracks back — in our shape, you literally become part of the back line.\n\nCover and Support — the Anchor\n\nYou are a key cover-and-support defender, and usually the anchor of it. When a midfielder ahead of you steps to press the ball, you stay behind them, holding the middle and blocking the central lane, ready to become the next first defender if our pressure is beaten. While others step, you hold.\n\nWin the Second Ball and the Long Ball\n\nSitting in the middle of everything, you're perfectly placed to mop up. Second balls off a header, loose passes, balls that pop out of a tackle — read them early, step in, and win them. A huge amount of your ball recovery is just being in the right spot and reacting first.\n\nDon't Dive, Stay Home\n\nYour discipline matters more than anyone's. You are the last midfield protection before our back line, so if you dive in and miss, the counter goes straight through the middle at our goal. Stay on your feet, hold your position, and screen the danger. The patient 6 who stays home wins us the ball far more often than the one who lunges.",
        callouts: [
          { title: "Screen the central lane", body: "Protect the space in front of our center backs and break up attacks before they reach our box." },
          { title: "Stay home, don't dive", body: "You're the last protection before the back line — a missed dive opens the middle straight to our goal." },
        ],
        bullets: [
          {
            title: "Protecting the middle",
            items: [
              "Screen the central lane in front of our center backs.",
              "Cut out balls played into their strikers.",
              "Drop in as the third center back when we defend deep.",
              "Stay compact with the back line — no gaps.",
            ],
          },
          {
            title: "Winning the ball",
            items: [
              "Be the cover-and-support anchor behind the press.",
              "Be first to second balls in the middle.",
              "Be brave and win the header on long balls.",
              "Don't dive — hold your position and screen the danger.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["They look to play through the middle", "Screen the central lane, block the pass.", "It's the most dangerous space on the field."],
            ["We're defending deep", "Drop in as the third center back.", "It completes our back three."],
            ["A teammate presses the ball", "Cover behind and hold the middle.", "You're ready to be the next first defender."],
            ["Loose or long ball in the center", "Read it early, step in and win it.", "You're already in the best spot to react."],
            ["Tempted to dive in", "Stay on your feet, hold position.", "A miss opens the middle straight to our goal."],
          ],
        },
        coachSays: "You're the screen in front of our defense — most of your job is being in the right spot so their forward pass is never on. Stay home, never dive, and hold that middle like it's your house.",
        practice: {
          type: "true-false" as const,
          statement: "As the 6, if you see a chance to dive in and win the ball in the middle, you should always go for it to break up the attack quickly.",
          answer: false,
          explanation: "You are the last midfield protection before our back line. If you dive in and miss, the counter goes straight through the middle at our goal. Stay on your feet, hold your position, and screen the danger — the patient 6 wins us the ball far more often.",
        },
      },
      {
        slug: "cdm-restarts",
        title: "CDM (6): Restarts",
        summary: "The defensive midfielder's role on restarts.",
        body: "Safety and the Calm Outlet\n\nOn restarts, your two themes are the same as everywhere else: be the safety, and be the calm option to play out. Watch the team's restart videos for the full picture; here's your position-specific checklist.\n\nOur Goal Kicks: The Central Outlet\n\nMost of the time the goalkeeper plays to a center back — they only come to you if there's no center back option. But you're still a key part of the build: you hang around the edge of the box as the safe central option, and as the press shifts and the 9 steps up to leave you open, drop into that space to receive and help us play out.\n\nOur Free Kicks: The Short Option & the Safety\n\nYou're our short option. The 8 can play it short to you so we can dribble out and start building. And when we don't go short, you hang back as part of the safety in case the free kick breaks down — always ready behind the play.\n\nTheir Free Kicks: In the Wall or Cover\n\nWhen they have a free kick near our goal, you're often one of the center mids in the wall with the 8 and 10. If we only need a two-person wall, you drop back to help defend behind it instead. Either way, you're part of protecting our goal.\n\nOur Corners & Kickoffs: Stay as the Safety\n\nOn our corners, you stay back with the center backs as our insurance against a counter — you do not go up for the corner. On our kickoffs, you nudge up a little as we push for the long ball, but you stay as protection behind the push. On kickoffs against us, be ready to drop and cover the middle.\n\nTheir Restarts: Defend and Be Ready to Spring Us\n\nOn their corners and goal kicks, defend the central area and help the press, but keep half a thought on the counter — if we win it and clear, you're the outlet who can settle it and start us forward again. On their throw-ins, cover, stay compact, and screen the middle.",
        callouts: [
          { title: "The safe central outlet", body: "On our goal kicks and free kicks, you're the calm option to receive and build — the short ball to you starts us playing out." },
          { title: "Always the safety", body: "On our set pieces you stay back as counter-insurance with the CBs; on theirs you're in the wall or covering behind it." },
        ],
        bullets: [
          {
            title: "On our restarts",
            items: [
              "Goal kicks: hang near the box as the central outlet — drop in to receive when the press opens you.",
              "Free kicks: be the short option for the 8, and stay back as safety.",
              "Corners: stay back with the center backs — don't go up.",
              "Kickoffs: nudge up but stay as protection behind the push.",
            ],
          },
          {
            title: "On their restarts",
            items: [
              "Free kicks near goal: in the wall with the 8 and 10, or drop back to cover.",
              "Goal kicks: help the press and stay as cover for a long ball.",
              "Corners: defend the central area; be the outlet if we win it.",
              "Throw-ins: cover, stay compact, screen the middle.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Our goal kick", "The safe central outlet — hang near the box; drop into space to receive when the press opens you."],
            ["Our free kick", "The short option (the 8 can play to you to build); also part of the safety behind."],
            ["Our corner", "Stay back with the center backs as counter-insurance — don't go up."],
            ["Our kickoff", "Nudge up but stay as protection behind the push."],
            ["Our throw-in", "Be the safe inside option; otherwise stay as cover."],
            ["Their free kick near goal", "In the wall (with the 8 and 10), or drop back to cover behind a short wall."],
            ["Their goal kick", "Help the press and stay as cover behind it for a long ball."],
            ["Their corner", "Defend the central area; be ready to be the outlet if we win it."],
            ["Their kickoff", "Ready to drop and cover the middle."],
            ["Their throw-in", "Cover, stay compact, screen the middle."],
          ],
        },
        coachSays: "On restarts you're the calm outlet and the safety — the short ball to you starts us playing out, and on our set pieces you stay home as the insurance. In the wall on theirs, or covering right behind it.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "We've won a corner and everyone's getting ready to attack the box. You're the 6. Where do you go?",
          choices: [
            { label: "Push up into the box to attack the corner with everyone else", response: "Not your job here. If you push up and we lose it, there's no one protecting the middle and they counter straight through us. The 6 stays back on our corners." },
            { label: "Stay back with the center backs as our insurance against a counter", response: "Yes. On our corners you stay back with the center backs as the safety. If they win it and try to break, you and the CBs are already set to stop the counter. Six always gets back — even on set pieces." },
            { label: "Go take the corner yourself", response: "The 8 takes our corners, not you. Your job is to stay back as the counter-insurance so the players in the box can attack it freely." },
          ],
        },
      },
      // ST
      {
        slug: "st-main-principles",
        title: "ST (9): Main Principles",
        summary: "Core habits for the striker in open play.",
        body: "Watch the video below for the striker's main principles in our style of play.",
        videos: [{ title: "Striker", youtubeId: "juQ7NB-GDEo" }],
      },
      {
        slug: "st-transitions",
        title: "ST (9): Transitions",
        summary: "What the striker does the moment possession changes.",
        body: "You Set the Tone in Both Directions\n\nAs our striker, you're the first attacker and the first defender at the same time. When we win the ball, you're the target who springs the counter. When we lose it high up the field, you're the first one pressing to win it back. Transitions are where you set the tone for the whole team.\n\nMove to Support — You're Not Just an Attacking-Third Player\n\nA striker who only ever stands in the attacking third, waiting, is easy to defend and gives us nothing. Your best weapon is to move to support the ball wherever it is. Drop into midfield to give a short option, drift into the channel where the ball is, come back to link the play — then spin off and attack the space again. Being in the channel with the ball is the key idea: when the ball is in a channel, get yourself into that same channel so the pass to you is short and easy, instead of forcing a long ball across the field. You're a moving, supporting threat, not a statue up top.\n\nWhen We Win It: Come to the Ball, Don't Just Stay High\n\nThe biggest mistake a striker makes on a counter is standing pinned high and waiting for a hopeful long ball. Instead, come into the channel with the ball so the pass to you is short and easy. Get into that ball-side space, show for it, and either hold it up to bring teammates into play or turn and run at their goal. A short pass to a striker who came to the ball is worth ten hopeful long balls over the top.\n\nStay Available for the Reset\n\nThere's a flip side: when we're stuck deep and have to play a tactical reset — a long ball up the field to reset our shape — you're the target. Stay high enough to be that option, and when it comes, battle to win it and bring others into the play. You're both the short outlet on a counter and the long target on a reset; read which one we need.\n\nWhen We Lose It: Press First, Stop the Counter\n\nThe instant we lose the ball in their half, you're usually the closest player to it. Press immediately to slow them down and try to win it back high — the best place on the field to win it. If you can't get it back, recover. The one thing you never do is watch your own giveaway turn into their counter while you stand still.\n\nRun in Behind a High Line\n\nWhen we have the ball in the middle and their defense is pushed up high, your run in behind is the most dangerous thing we can do. Time it, stay onside, and attack the space — a through ball or a long ball for you to run onto and go straight at goal is one of our best ways to score.",
        callouts: [
          { title: "Move to support, don't camp high", body: "You're not just an attacking-third player — drop in and move to support the ball wherever it is." },
          { title: "Be in the channel with the ball", body: "When the ball is in a channel, get into that same channel so the pass to you is short — not a long ball across the field." },
          { title: "Lose it high? Press first.", body: "When we lose it in their half, you're often closest — immediate pressure to win it back high." },
        ],
        bullets: [
          {
            title: "When we win the ball",
            items: [
              "Move to support wherever the ball is — don't camp in the attacking third.",
              "Come into the ball-side channel as a short, easy outlet.",
              "Hold it up to bring teammates in, or turn and run at goal.",
              "Stay available high as the target for a tactical reset.",
              "Threaten in behind in the golden window.",
            ],
          },
          {
            title: "When we lose the ball",
            items: [
              "Press immediately if you're closest — you usually are.",
              "Try to win it back high — the best place to win it.",
              "Recover if you can't get it back — never stand and watch.",
              "Make runs in behind when their defense is high.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We win it on a counter", "Come into the channel as a short outlet.", "A short pass beats a hopeful long ball."],
            ["We play a tactical reset", "Stay high, battle to win the long ball.", "You're the target up top."],
            ["We lose it high", "Press immediately to win it back.", "You're closest, and it's the best place to win it."],
            ["Their defense is high", "Make a run in behind.", "A through ball for you is our most dangerous attack."],
          ],
        },
        coachSays: "You set the tone both ways — first attacker, first defender. Come to the ball on a counter, run in behind a high line, and the second we lose it up there, you're the first one pressing.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "We win the ball deep in our own half. You're the striker, pinned high on their last defender, and a teammate is about to play out of the back.",
          choices: [
            { label: "Stay pinned high and call for a long ball over the top", response: "A hopeful long ball from deep is easy for their defenders to win. Pinned high, you're a long way from a short, safe pass — and we likely lose it." },
            { label: "Come into the ball-side channel to give a short, easy outlet", response: "Yes. Come to the ball so the pass to you is short and safe — then hold it up to bring teammates in, or turn and run. A short pass to a striker who came to the ball beats a hopeful long ball every time." },
            { label: "Drift wide to the touchline and wait there", response: "Drifting wide takes you away from the central danger and away from a short central outlet. Come into the ball-side channel where you can actually receive and threaten." },
          ],
        },
      },
      {
        slug: "st-ball-recovery",
        title: "ST (9): Ball Recovery",
        summary: "How the striker helps win the ball back.",
        body: "You Are Our First Defender Up Top\n\nWinning the ball back starts with you. Before our midfield or defense ever gets involved, your pressure on their defenders and goalkeeper is the first line of our defending. When you press well, you start everything; when you switch off, the whole press falls apart.\n\nShape the Press: Block the Switch\n\nThis is the most important idea for you. When you press a defender, do not run straight at them — angle your run so you take away one side. Usually that means blocking the switch to their far center back, so they can't escape across the field. By tightening your run and cutting off one direction, you force them down the side where the rest of our team is waiting to win it. Your run decides where the play goes.\n\nThe Whole Team Shifts With You\n\nHere's what makes it actually work: when you block off one side of the field, the whole team shifts across to the other side with you. We overload the ball side — everyone slides over to make it compact and crowded — and the side you blocked off goes dead, because the ball can't get there anymore. Your angled run is the trigger, and the team's shift is the trap. So shape your press knowing your teammates are sliding across behind you to close down every option on that side.\n\nImmediate Pressure Forces Mistakes\n\nThe moment the ball is played to one of their defenders, press immediately. We want them rushed, so they panic and make a bad decision — kick it straight to our winger, or boot it long where we win the battle. Immediate pressure is how we turn their build-up into our ball. A slow, late press lets them play out comfortably.\n\nWin It High, Score Quick\n\nA ball won high up the field, near their goal, is the best chance we get all game. When your press forces the mistake and we win it, go straight at goal — their defense is scrambled and there's nothing better than scoring off a high turnover.\n\nWhen We Lose It: Recover and Press Again\n\nIf we lose the ball in their half, you're our first line against the counter. Press to win it back right away, and if you can't, recover back into your pressing position. The forward who keeps pressing and never gives up on a lost ball wins us possession in dangerous areas over and over.",
        callouts: [
          { title: "Shape the press — block the switch", body: "Don't run straight on. Angle your run so they can only go one way — into our trap." },
          { title: "Immediate pressure forces mistakes", body: "The second the ball reaches a defender, press — make them panic into a bad decision." },
        ],
        bullets: [
          {
            title: "Leading the press",
            items: [
              "You're our first defender — press immediately when the ball reaches a defender.",
              "Shape your run to block the switch and force one direction.",
              "As you block one side, the whole team shifts across to overload the ball side.",
              "Make them panic into a bad decision.",
              "Take away the central option as you press.",
            ],
          },
          {
            title: "Winning it high",
            items: [
              "A ball won near their goal is our best chance — go straight at goal.",
              "When we lose it in their half, press to win it back.",
              "If you can't win it back, recover into your pressing position.",
              "Never give up on a lost ball.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["Ball played to their defender", "Press immediately.", "Forces a rushed, bad decision."],
            ["You're pressing a center back", "Shape your run to block the switch.", "Forces them one way into our trap."],
            ["They look to play through the middle", "Cut the central option as you press.", "Leaves them only the risky pass."],
            ["You win it high", "Go straight at goal.", "Best chance to score in the whole game."],
            ["We lose it in their half", "Press to win it back, then recover.", "You're our first line against the counter."],
          ],
        },
        coachSays: "Defending starts with you. Press the second the ball reaches a defender, and shape your run so they can only go where we want them. Win it high and we're already at their goal.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "Their goalkeeper plays a short goal kick out to a center back. You're the striker, stepping up to press. Their other center back is open across the field for a switch.",
          choices: [
            { label: "Sprint straight at the center back as fast as you can", response: "Running straight on lets them simply pass across to their open center back and escape your press. Your run has to take a side away." },
            { label: "Angle your run to block the switch, forcing them down one side into our trap", response: "Yes. Shape the press — tighten your run so they can't switch to the far center back. That forces them down one side, where the rest of our team is waiting to win it." },
            { label: "Hang back near the halfway line and wait for them to come to you", response: "Waiting lets them build out in comfort. We press immediately and shape it — your job is to step up now and force a bad decision." },
          ],
        },
      },
      {
        slug: "st-restarts",
        title: "ST (9): Restarts",
        summary: "The striker's role on restarts.",
        body: "You're Central to Restarts, Both Ways\n\nYou lead our press on their restarts and you're a goal threat on ours. Watch the team's restart videos for the full picture; here's your position-specific checklist.\n\nTheir Goal Kicks: Lead the Press\n\nThis is your biggest restart job. The moment the ball is played out to a defender, press immediately — and shape your run to block the switch, forcing them down one side. We want to rush them into a bad decision: a panicked kick to our winger, or a boot where we win the battle. If your press forces the mistake and we win it high, go straight at goal.\n\nOur Kickoffs: You Start It\n\nThe kickoff is yours to begin. You play the ball back to a teammate to start it, and then we hit it long into their corner — and you run in to go win it in their half. On kickoffs against us, you press immediately, the same idea as their goal kicks: force a mistake right away.\n\nOur Corners: Attack the Box\n\nOn our corners, you're one of the runners attacking the box. Time your run to the signal and attack your spot hard — go for the ricochet or the finish. You're exactly the kind of player the set piece is designed to find.\n\nOur Free Kicks: Battle Up Top\n\nOn our free kicks, you're a target up top — long balls will come to you, so battle to win them and bring teammates into the play. In the attacking third, a free kick can be decisive and you can take it yourself.\n\nOur Goal Kicks & Throw-Ins\n\nOn our goal kicks, stay high as the reset target — if we have to play it long, you're who we're aiming for, so battle to win it. On throw-ins, a winger pulling out can free you for a long throw down the line — take it down and turn it into a 1v1 or 1v2 at goal. In the attacking third, attack the box like a corner.\n\nTheir Corners & Free Kicks: Defend, Then Be the Outlet\n\nOn their corners, help defend the box — but the moment we win it, be the outlet to run onto our clearance and start a counter. On their free kicks near our goal, stay high with the 10 as our out-ball, ready to spring us forward if we win it.",
        callouts: [
          { title: "Lead the press on their goal kicks", body: "Immediate pressure, shape your run to block the switch, and force a bad decision. This is your biggest restart job." },
          { title: "You start our kickoff", body: "Play it back to begin the play, then run in for the long ball into their corner." },
        ],
        bullets: [
          {
            title: "On our restarts",
            items: [
              "Kickoffs: play the ball back to start it, then run in for the long ball.",
              "Corners: be one of the runners attacking the box.",
              "Free kicks: battle as the target up top; take it in the attacking third.",
              "Goal kicks: stay high as the reset target and battle to win it.",
              "Throw-ins: get free for a long throw down the line (1v1/1v2 to goal).",
            ],
          },
          {
            title: "On their restarts",
            items: [
              "Goal kicks: lead the press — shape it and block the switch.",
              "Kickoffs: press immediately to force a mistake.",
              "Corners: help defend, then be the outlet to run onto our clearance.",
              "Free kicks near goal: stay high with the 10 as our out-ball.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Their goal kick", "Lead the press — immediate pressure, shape your run to block the switch, force a bad decision; win it high."],
            ["Their kickoff", "Press immediately to force a mistake."],
            ["Our kickoff", "Play the ball back to start it, then run in for the long ball into their corner."],
            ["Our corner", "One of the runners attacking the box — go for the ricochet or finish."],
            ["Our free kick", "Battle as a target up top (long balls come to you); take it in the attacking third."],
            ["Our goal kick", "Stay high as the reset target — battle to win the long ball and bring others in."],
            ["Our throw-in", "Get free for a long throw down the line (1v1/1v2 to goal); attack the box in the attacking third."],
            ["Their corner", "Help defend the box, then be the outlet to run onto our clearance."],
            ["Their free kick near goal", "Stay high with the 10 as our out-ball; spring the counter if we win it."],
            ["Their throw-in", "Press or mark, and be ready to break."],
          ],
        },
        coachSays: "On their restarts you lead the press — shape it, block the switch, force the mistake. On ours, you're our box threat: start the kickoff, attack our corners, and battle for every ball up top.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "It's our kickoff to start the game. The ball is at your feet on the center spot. What do you do?",
          choices: [
            { label: "Dribble forward at their defense to start the attack yourself", response: "Dribbling straight into a set defense at kickoff is low-percentage — they're organized and waiting. We have a better plan." },
            { label: "Play it back to a teammate so we can hit the long ball into their corner, then run in to win it", response: "Yes. The striker plays it back to start our kickoff, then we hit it long into their corner — and you run in to win it in their half, catching them static and vulnerable at the start." },
            { label: "Pass it square to a teammate and build out slowly from the middle", response: "Building out slowly from a kickoff invites their press onto us in the middle of the field. Our plan is to play it back, then go long into their corner and chase it down." },
          ],
        },
      },
      // LW
      {
        slug: "lw-main-principles",
        title: "LW (11): Main Principles",
        summary: "Core habits for the left winger in open play.",
        body: "Watch the video below for the wingers' main principles in our style of play (left and right).",
        videos: [{ title: "Wingers (Left and Right)", youtubeId: "zcTxMTwB4qk" }],
      },
      {
        slug: "lw-transitions",
        title: "LW (11): Transitions",
        summary: "What the left winger does the moment possession changes.",
        body: "You Are Our Width — Get Wide, Stay Wide\n\nIn our 3-4-1, the wingers are our only real width — so the whole team's spacing depends on you. The instant we win the ball, your first thought is to get wide and stay wide, stretching the field and giving us an out-ball down the left. And the other half of the job is just as important: you have to drag all the way back to defend, because no one else covers your channel. You're a corner-to-corner player, every single play.\n\nWhen We Win It: The Out-Ball and the Counter\n\nWhen we win it on your side, you're the outlet to escape pressure — get wide, receive, and take it down the line on the counter, or play it back inside to a midfielder to switch the attack. When you can, be in the channel with the ball to give a short, supportable option rather than asking for a long ball across the field. Get it down the line with speed and look for the cross.\n\nFar Side? Tuck In\n\nHere's a key habit: when the ball is on the right side, you don't just stand out on the left touchline. You tuck inside — to attack a cross coming into the box, and to make us compact when we defend. This is you in the team's shift: as the ball moves to one side, the whole team slides across, and the far winger coming inside is a huge part of making that side compact.\n\nProtect the Ball Out Wide\n\nA warning that matters most for you: if you lose the ball in the wide channel of the middle third, you hand the other team a dangerous counter down our side. So when you have it out wide, protect it — don't try a low-percentage move and lose it cheaply. Get wide, stay wide, look forward, but take care of the ball.\n\nWhen We Lose It: Drag Back and Shift\n\nThe moment we lose it, get home. If it's lost on your side, you're the first defender out wide. If it's on the far side, you tuck inside and shift with the team to keep us compact. And know this: if you don't track back, one of our center backs has to step out to cover your channel, and that pulls our whole shape apart. Your recovery run protects everyone.",
        callouts: [
          { title: "You're our only width", body: "Get wide and stay wide in attack; drag all the way back in defense. Corner to corner, every play." },
          { title: "Far side? Tuck in.", body: "When the ball's on the other side, come inside to make us compact — that's you in the team shift." },
        ],
        bullets: [
          {
            title: "When we win the ball",
            items: [
              "Get wide and stay wide as our out-ball down the left.",
              "Take it down the line on the counter, or play back inside to switch.",
              "Be in the channel with the ball for a short, supportable option.",
              "Tuck in to attack the cross when the ball's on the far side.",
              "Protect the ball out wide — losing it there invites a counter.",
            ],
          },
          {
            title: "When we lose the ball",
            items: [
              "Drag all the way back — you're our only width.",
              "Be the first defender if it's lost on your side.",
              "Tuck inside and shift with the team if it's on the far side.",
              "Make your recovery run so a center back doesn't have to cover for you.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We win it on your side", "Get wide, take it down the line.", "You're the out-ball and the counter threat."],
            ["We win it on the far side", "Tuck in to attack the cross.", "Brings numbers into the box."],
            ["You have it in the wide middle third", "Protect it — don't lose it cheaply.", "Losing it wide invites a counter down our side."],
            ["We lose it on your side", "Drag back, be the first defender wide.", "You're our only width — no one else covers it."],
            ["We lose it on the far side", "Tuck inside, shift with the team.", "Makes us compact and blocks the ball side."],
          ],
        },
        coachSays: "You're our width both ways — wide and stretching them when we attack, all the way back when we defend. Take care of that ball out wide, and when the ball's on the far side, tuck in and shift with us.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "The ball is on the right side of the field, far from you, and we suddenly lose it there. You're our left winger, out wide on the left touchline.",
          choices: [
            { label: "Stay wide on your left touchline in case we win it back and you can attack", response: "Staying wide on the far side leaves us stretched and easy to play through. When the ball's on the other side and we lose it, your job is to come inside and make us compact." },
            { label: "Tuck inside to make us compact and shift across with the team", response: "Yes. As the far-side winger, you tuck in and shift with the team to overload and compact the ball side. That team shift is how one player's pressure becomes a trap." },
            { label: "Push high up the left wing to stay ready for a long counter", response: "Pushing high abandons your defensive job and leaves a gap. We're a 2-5-1 and need everyone compact when we lose it — tuck in and shift first." },
          ],
        },
      },
      {
        slug: "lw-ball-recovery",
        title: "LW (11): Ball Recovery",
        summary: "How the left winger helps win the ball back.",
        body: "First Defender in the Wide Channel\n\nWhen the other team has the ball in your wide channel, you are the first defender. Step up and press the wide attacker, slow them down, and make sure there is no breakaway down the side — because a wide breakaway almost always ends in a dangerous cross or a shot. Like every first defender: don't dive in. Stay on your feet and slow them down.\n\nShape Them Inside or Down the Line\n\nThis is your version of shaping the press. Don't just stand there — angle your body to force the attacker one of two ways: inside toward our center mids, where we're compact and waiting, or down the line and out of bounds. Either way, you're sending them where we have help. And as you block off the outside, the whole team shifts across with you — the far-side winger tucks in, and we make the ball side crowded. Your pressure is the trigger; the team's shift is the trap.\n\nYou Must Drag Back\n\nYou're our only width, so when the ball is in your area you have to recover all the way back to defend it. If you don't, one of our center backs is forced to step out and cover your channel, and that opens a gap in our shape. Corner-to-corner stamina isn't optional for a winger — it's the job.\n\nDon't Get Beaten — Protect the Cross\n\nStep up enough to pressure and slow the attacker, but don't dive in and don't back all the way off into a free cross. The balance is the whole skill: close enough to stop a clean cross or a breakaway, patient enough not to get beaten by a touch around you.\n\nWin It, Start the Counter\n\nWhen you win the ball out wide, that's often a great place to start a counter — and if you win it high in their corner, even better, because they have very few options to play out of there. Win it, and look to spring us forward fast.",
        callouts: [
          { title: "No breakaway wide", body: "Slow the wide attacker so there's no breakaway — a wide breakaway ends in a cross or a shot." },
          { title: "Shape them where we have help", body: "Force them inside to our center mids or down the line out of bounds, as the team shifts across behind you." },
        ],
        bullets: [
          {
            title: "Pressing in your channel",
            items: [
              "You're the first defender when the ball's in your wide channel.",
              "Slow them down — no breakaway, no clean cross.",
              "Don't dive in — stay on your feet.",
              "Shape them inside to our mids, or down the line and out.",
            ],
          },
          {
            title: "The shift and the recovery",
            items: [
              "As you block the outside, the team shifts and the far winger tucks in.",
              "Drag all the way back so a center back doesn't have to cover for you.",
              "Balance it — close enough to stop the cross, not so close you get beaten.",
              "Win it wide and start the counter — even better high in their corner.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["Ball in your wide channel", "Press, slow them, no breakaway.", "A wide breakaway ends in a cross or shot."],
            ["Attacker dribbling at you", "Shape them inside to our mids, or down the line out.", "Sends them where we have help."],
            ["You're pressing wide", "Trust the team to shift across behind you.", "We overload the ball side and block it off."],
            ["You get caught upfield", "Drag all the way back.", "A center back stepping out pulls our shape apart."],
            ["You win it wide", "Start the counter — or win it high in their corner.", "A great place to spring forward."],
          ],
        },
        coachSays: "In your channel you're the first defender — slow them down, no breakaway, and never dive. Force them inside to our help or down the line out, and trust the team to shift across with you.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "The other team has the ball in your wide channel and an attacker is dribbling straight at you down the left side. You've dropped back to defend.",
          choices: [
            { label: "Dive in to win the ball before they can cross it", response: "Diving in is exactly what we don't do — if you miss, they're past you with a breakaway, and that ends in a cross or a shot. Stay on your feet and slow them down." },
            { label: "Slow them down and shape them inside toward our center mids, or down the line and out", response: "Yes. Your job out wide is to slow the attacker so there's no breakaway, and to force them where we have help — inside to our mids, or down the line and out of bounds." },
            { label: "Drop all the way back and let them cross it in", response: "Backing off into a free cross is the danger we're trying to prevent. Step up enough to pressure and slow them, just without diving in." },
          ],
        },
      },
      {
        slug: "lw-restarts",
        title: "LW (11): Restarts",
        summary: "The left winger's role on restarts.",
        body: "Your Width Gives You a Big Restart Job\n\nBecause you're our width, you're heavily involved in restarts — taking throw-ins, being the out-ball, and helping our press. Watch the team's restart videos for the full picture; here's your position-specific checklist.\n\nOur Throw-Ins: You Usually Take It\n\nOn the left side, you usually take the throw-in. The two rules: throw it up the line, and throw it fast. Don't wait for everyone to get organized — a quick throw up the line catches the other team out. Never throw it backward. In the attacking third, you can throw it into the box and treat it like a corner.\n\nOur Goal Kicks: The First Out-Ball\n\nYou're often the first pass out of a goal kick — the center back plays out to you. Get wide, show for it, and once you have it, play forward down the line or back inside to a midfielder. You're a key way for us to escape their press and start playing.\n\nOur Corners: Sit for the Rebound\n\nOn our corners, you sit just outside the box, ready to attack a ball that runs through everyone — a shot or a loose rebound. Sometimes we play a short corner through a winger instead; be ready for that call too.\n\nTheir Goal Kicks: Block the Wide Angle\n\nWhen they have a goal kick and our striker presses, your job is to come out and block the angle to their winger on your side, so they can't play that wide pass. That makes us compact and forces them where we want — part of the trap that wins the ball high.\n\nTheir Corners: Block the Short Corner\n\nWhen they have a corner in your channel, you come in first to stop any short corner, then mark up and defend the box. Don't let them play a quick short one while we're getting set.\n\nFree Kicks & Kickoffs\n\nOn free kicks, both ours and theirs, you tuck in — wide but not isolated — to help and be ready to recover. On our kickoffs, you start wide on the side we've chosen for the long ball into their corner (or hold wide on the far side as insurance). On kickoffs against us, match their wide player and press immediately.",
        callouts: [
          { title: "Throw it up the line, fast", body: "On your side you take the throw — up the line, never back, and quick to catch them out." },
          { title: "Block the wide angle on their goal kicks", body: "Come out to cut the pass to their winger as the 9 presses, making us compact." },
        ],
        bullets: [
          {
            title: "On our restarts",
            items: [
              "Throw-ins: you take them on the left — up the line, fast, never back.",
              "Goal kicks: be the first out-ball — get wide, then play down the line or back inside.",
              "Corners: sit outside for the rebound; be ready for a short-corner call.",
              "Kickoffs: start wide on the chosen side for the long ball, or hold wide as insurance.",
            ],
          },
          {
            title: "On their restarts",
            items: [
              "Goal kicks: block the wide angle to their winger as the 9 presses.",
              "Corners: block the short corner in your channel, then mark up.",
              "Free kicks: tuck in to help defend.",
              "Kickoffs: match their wide player and press immediately.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Our throw-in (left side)", "You usually take it — throw it up the line, fast, never back; into the box in the attacking third."],
            ["Our goal kick", "The first out-ball — get wide, receive, play down the line or back inside."],
            ["Our corner", "Sit outside the box for the rebound or a shot; be ready for a short-corner call."],
            ["Our free kick", "Tuck in, wide but not isolated; be ready to recover for the cross."],
            ["Our kickoff", "Start wide on the chosen side for the long ball, or hold wide on the far side as insurance."],
            ["Their goal kick", "Block the wide angle to their winger as the 9 presses — make us compact."],
            ["Their corner", "In your channel, block the short corner; then mark up and defend."],
            ["Their free kick near goal", "Tuck in to help defend."],
            ["Their kickoff", "Match their wide player and press immediately."],
            ["Their throw-in", "Mark up, stay compact."],
          ],
        },
        coachSays: "On your side, the throw is yours — up the line and fast, never back. Be our out-ball on goal kicks, sit for the rebound on corners, and on their goal kicks, block that wide angle to make us compact.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You have a throw-in on the left side in the middle third. Your team is still getting organized, and a teammate near you is open but facing our own goal.",
          choices: [
            { label: "Throw it backward to the open teammate to keep possession", response: "We never throw it backward — that just invites pressure and forces a risky pass near our own goal. The ball should always go up the line." },
            { label: "Throw it up the line, fast, before the other team gets set", response: "Yes. On throw-ins we throw it up the line and we throw it fast — a quick throw up the line catches the other team out before they're organized." },
            { label: "Hold the ball and wait for the whole team to get into position", response: "Waiting lets the other team get set and kills the advantage. Throw it quickly up the line — speed is the whole point of a good throw-in." },
          ],
        },
      },
      // RW
      {
        slug: "rw-main-principles",
        title: "RW (7): Main Principles",
        summary: "Core habits for the right winger in open play.",
        body: "Watch the video below for the wingers' main principles in our style of play (left and right).",
        videos: [{ title: "Wingers (Left and Right)", youtubeId: "zcTxMTwB4qk" }],
      },
      {
        slug: "rw-transitions",
        title: "RW (7): Transitions",
        summary: "What the right winger does the moment possession changes.",
        body: "You Are Our Width — Get Wide, Stay Wide\n\nThis is the mirror of the left winger's job, just on the right. In our 3-4-1, the wingers are our only real width — so the whole team's spacing depends on you. The instant we win the ball, your first thought is to get wide and stay wide, stretching the field and giving us an out-ball down the right. And the other half is just as important: you drag all the way back to defend, because no one else covers your channel. You're a corner-to-corner player, every single play.\n\nWhen We Win It: The Out-Ball and the Counter\n\nWhen we win it on your side, you're the outlet to escape pressure — get wide, receive, and take it down the line on the counter, or play it back inside to a midfielder to switch the attack. When you can, be in the channel with the ball to give a short, supportable option rather than asking for a long ball across the field. Get it down the line with speed and look for the cross.\n\nFar Side? Tuck In\n\nHere's a key habit: when the ball is on the left side, you don't just stand out on the right touchline. You tuck inside — to attack a cross coming into the box, and to make us compact when we defend. This is you in the team's shift: as the ball moves to one side, the whole team slides across, and the far winger coming inside is a huge part of making that side compact.\n\nProtect the Ball Out Wide\n\nA warning that matters most for you: if you lose the ball in the wide channel of the middle third, you hand the other team a dangerous counter down our side. So when you have it out wide, protect it — don't try a low-percentage move and lose it cheaply. Get wide, stay wide, look forward, but take care of the ball.\n\nWhen We Lose It: Drag Back and Shift\n\nThe moment we lose it, get home. If it's lost on your side, you're the first defender out wide. If it's on the far side, you tuck inside and shift with the team to keep us compact. And know this: if you don't track back, one of our center backs has to step out to cover your channel, and that pulls our whole shape apart. Your recovery run protects everyone.",
        callouts: [
          { title: "You're our only width", body: "Get wide and stay wide in attack; drag all the way back in defense. Corner to corner, every play." },
          { title: "Far side? Tuck in.", body: "When the ball's on the other side, come inside to make us compact — that's you in the team shift." },
        ],
        bullets: [
          {
            title: "When we win the ball",
            items: [
              "Get wide and stay wide as our out-ball down the right.",
              "Take it down the line on the counter, or play back inside to switch.",
              "Be in the channel with the ball for a short, supportable option.",
              "Tuck in to attack the cross when the ball's on the far side.",
              "Protect the ball out wide — losing it there invites a counter.",
            ],
          },
          {
            title: "When we lose the ball",
            items: [
              "Drag all the way back — you're our only width.",
              "Be the first defender if it's lost on your side.",
              "Tuck inside and shift with the team if it's on the far side.",
              "Make your recovery run so a center back doesn't have to cover for you.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Your job", "Why it matters"],
          rows: [
            ["We win it on your side", "Get wide, take it down the line.", "You're the out-ball and the counter threat."],
            ["We win it on the far side", "Tuck in to attack the cross.", "Brings numbers into the box."],
            ["You have it in the wide middle third", "Protect it — don't lose it cheaply.", "Losing it wide invites a counter down our side."],
            ["We lose it on your side", "Drag back, be the first defender wide.", "You're our only width — no one else covers it."],
            ["We lose it on the far side", "Tuck inside, shift with the team.", "Makes us compact and blocks the ball side."],
          ],
        },
        coachSays: "You're our width both ways — wide and stretching them when we attack, all the way back when we defend. Take care of that ball out wide, and when the ball's on the far side, tuck in and shift with us.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "The ball is on the left side of the field, far from you, and we suddenly lose it there. You're our right winger, out wide on the right touchline.",
          choices: [
            { label: "Stay wide on your right touchline in case we win it back and you can attack", response: "Staying wide on the far side leaves us stretched and easy to play through. When the ball's on the other side and we lose it, your job is to come inside and make us compact." },
            { label: "Tuck inside to make us compact and shift across with the team", response: "Yes. As the far-side winger, you tuck in and shift with the team to overload and compact the ball side. That team shift is how one player's pressure becomes a trap." },
            { label: "Push high up the right wing to stay ready for a long counter", response: "Pushing high abandons your defensive job and leaves a gap. We're a 2-5-1 and need everyone compact when we lose it — tuck in and shift first." },
          ],
        },
      },
      {
        slug: "rw-ball-recovery",
        title: "RW (7): Ball Recovery",
        summary: "How the right winger helps win the ball back.",
        body: "First Defender in the Wide Channel\n\nThis mirrors the left winger's job on the right side. When the other team has the ball in your wide channel, you are the first defender. Step up and press the wide attacker, slow them down, and make sure there is no breakaway down the side — because a wide breakaway almost always ends in a dangerous cross or a shot. Like every first defender: don't dive in. Stay on your feet and slow them down.\n\nShape Them Inside or Down the Line\n\nThis is your version of shaping the press. Don't just stand there — angle your body to force the attacker one of two ways: inside toward our center mids, where we're compact and waiting, or down the line and out of bounds. Either way, you're sending them where we have help. And as you block off the outside, the whole team shifts across with you — the far-side winger tucks in, and we make the ball side crowded. Your pressure is the trigger; the team's shift is the trap.\n\nYou Must Drag Back\n\nYou're our only width, so when the ball is in your area you have to recover all the way back to defend it. If you don't, one of our center backs is forced to step out and cover your channel, and that opens a gap in our shape. Corner-to-corner stamina isn't optional for a winger — it's the job.\n\nDon't Get Beaten — Protect the Cross\n\nStep up enough to pressure and slow the attacker, but don't dive in and don't back all the way off into a free cross. The balance is the whole skill: close enough to stop a clean cross or a breakaway, patient enough not to get beaten by a touch around you.\n\nWin It, Start the Counter\n\nWhen you win the ball out wide, that's often a great place to start a counter — and if you win it high in their corner, even better, because they have very few options to play out of there. Win it, and look to spring us forward fast.",
        callouts: [
          { title: "No breakaway wide", body: "Slow the wide attacker so there's no breakaway — a wide breakaway ends in a cross or a shot." },
          { title: "Shape them where we have help", body: "Force them inside to our center mids or down the line out of bounds, as the team shifts across behind you." },
        ],
        bullets: [
          {
            title: "Pressing in your channel",
            items: [
              "You're the first defender when the ball's in your wide channel.",
              "Slow them down — no breakaway, no clean cross.",
              "Don't dive in — stay on your feet.",
              "Shape them inside to our mids, or down the line and out.",
            ],
          },
          {
            title: "The shift and the recovery",
            items: [
              "As you block the outside, the team shifts and the far winger tucks in.",
              "Drag all the way back so a center back doesn't have to cover for you.",
              "Balance it — close enough to stop the cross, not so close you get beaten.",
              "Win it wide and start the counter — even better high in their corner.",
            ],
          },
        ],
        table: {
          columns: ["Situation", "Do this", "Why"],
          rows: [
            ["Ball in your wide channel", "Press, slow them, no breakaway.", "A wide breakaway ends in a cross or shot."],
            ["Attacker dribbling at you", "Shape them inside to our mids, or down the line out.", "Sends them where we have help."],
            ["You're pressing wide", "Trust the team to shift across behind you.", "We overload the ball side and block it off."],
            ["You get caught upfield", "Drag all the way back.", "A center back stepping out pulls our shape apart."],
            ["You win it wide", "Start the counter — or win it high in their corner.", "A great place to spring forward."],
          ],
        },
        coachSays: "In your channel you're the first defender — slow them down, no breakaway, and never dive. Force them inside to our help or down the line out, and trust the team to shift across with you.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "The other team has the ball in your wide channel and an attacker is dribbling straight at you down the right side. You've dropped back to defend.",
          choices: [
            { label: "Dive in to win the ball before they can cross it", response: "Diving in is exactly what we don't do — if you miss, they're past you with a breakaway, and that ends in a cross or a shot. Stay on your feet and slow them down." },
            { label: "Slow them down and shape them inside toward our center mids, or down the line and out", response: "Yes. Your job out wide is to slow the attacker so there's no breakaway, and to force them where we have help — inside to our mids, or down the line and out of bounds." },
            { label: "Drop all the way back and let them cross it in", response: "Backing off into a free cross is the danger we're trying to prevent. Step up enough to pressure and slow them, just without diving in." },
          ],
        },
      },
      {
        slug: "rw-restarts",
        title: "RW (7): Restarts",
        summary: "The right winger's role on restarts.",
        body: "Your Width Gives You a Big Restart Job\n\nThis mirrors the left winger's restart job on the right. Because you're our width, you're heavily involved in restarts — taking throw-ins, being the out-ball, and helping our press. Watch the team's restart videos for the full picture; here's your position-specific checklist.\n\nOur Throw-Ins: You Usually Take It\n\nOn the right side, you usually take the throw-in. The two rules: throw it up the line, and throw it fast. Don't wait for everyone to get organized — a quick throw up the line catches the other team out. Never throw it backward. In the attacking third, you can throw it into the box and treat it like a corner.\n\nOur Goal Kicks: The First Out-Ball\n\nYou're often the first pass out of a goal kick — the center back plays out to you. Get wide, show for it, and once you have it, play forward down the line or back inside to a midfielder. You're a key way for us to escape their press and start playing.\n\nOur Corners: Attack or Play Short\n\nOn our corners, you're one of the attacking pieces — a runner attacking the box, and sometimes the one who plays a short corner before we deliver in. Be ready for whichever the call is, and attack the ball hard when it comes in.\n\nTheir Goal Kicks: Block the Wide Angle\n\nWhen they have a goal kick and our striker presses, your job is to come out and block the angle to their winger on your side, so they can't play that wide pass. That makes us compact and forces them where we want — part of the trap that wins the ball high.\n\nTheir Corners: Block the Short Corner\n\nWhen they have a corner in your channel, you come in first to stop any short corner, then mark up and defend the box. Don't let them play a quick short one while we're getting set.\n\nFree Kicks & Kickoffs\n\nOn free kicks, both ours and theirs, you tuck in — wide but not isolated — to help and be ready to recover. On our kickoffs, you start wide on the side we've chosen for the long ball into their corner (or hold wide on the far side as insurance). On kickoffs against us, match their wide player and press immediately.",
        callouts: [
          { title: "Throw it up the line, fast", body: "On your side you take the throw — up the line, never back, and quick to catch them out." },
          { title: "Block the wide angle on their goal kicks", body: "Come out to cut the pass to their winger as the 9 presses, making us compact." },
        ],
        bullets: [
          {
            title: "On our restarts",
            items: [
              "Throw-ins: you take them on the right — up the line, fast, never back.",
              "Goal kicks: be the first out-ball — get wide, then play down the line or back inside.",
              "Corners: attack the box as a runner, or play the short corner when it's the call.",
              "Kickoffs: start wide on the chosen side for the long ball, or hold wide as insurance.",
            ],
          },
          {
            title: "On their restarts",
            items: [
              "Goal kicks: block the wide angle to their winger as the 9 presses.",
              "Corners: block the short corner in your channel, then mark up.",
              "Free kicks: tuck in to help defend.",
              "Kickoffs: match their wide player and press immediately.",
            ],
          },
        ],
        table: {
          columns: ["Restart", "Your job"],
          rows: [
            ["Our throw-in (right side)", "You usually take it — throw it up the line, fast, never back; into the box in the attacking third."],
            ["Our goal kick", "The first out-ball — get wide, receive, play down the line or back inside."],
            ["Our corner", "Attack the box as a runner, or play the short corner when it's the call."],
            ["Our free kick", "Tuck in, wide but not isolated; be ready to recover for the cross."],
            ["Our kickoff", "Start wide on the chosen side for the long ball, or hold wide on the far side as insurance."],
            ["Their goal kick", "Block the wide angle to their winger as the 9 presses — make us compact."],
            ["Their corner", "In your channel, block the short corner; then mark up and defend."],
            ["Their free kick near goal", "Tuck in to help defend."],
            ["Their kickoff", "Match their wide player and press immediately."],
            ["Their throw-in", "Mark up, stay compact."],
          ],
        },
        coachSays: "On your side, the throw is yours — up the line and fast, never back. Be our out-ball on goal kicks, attack the box on corners, and on their goal kicks, block that wide angle to make us compact.",
        practice: {
          type: "what-would-you-do" as const,
          scenario: "You have a throw-in on the right side in the middle third. Your team is still getting organized, and a teammate near you is open but facing our own goal.",
          choices: [
            { label: "Throw it backward to the open teammate to keep possession", response: "We never throw it backward — that just invites pressure and forces a risky pass near our own goal. The ball should always go up the line." },
            { label: "Throw it up the line, fast, before the other team gets set", response: "Yes. On throw-ins we throw it up the line and we throw it fast — a quick throw up the line catches the other team out before they're organized." },
            { label: "Hold the ball and wait for the whole team to get into position", response: "Waiting lets the other team get set and kills the advantage. Throw it quickly up the line — speed is the whole point of a good throw-in." },
          ],
        },
      },
    ],
    sections: [
      {
        slug: "gk-position",
        title: "Module 1: GK (1) — Goalkeeper",
        summary: "Goalkeeper principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["gk-main-principles", "gk-transitions", "gk-ball-recovery", "gk-restarts"],
      },
      {
        slug: "cb-position",
        title: "Module 2: CB (4/5) — Center Back",
        summary: "Center back principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["cb-main-principles", "cb-transitions", "cb-ball-recovery", "cb-restarts"],
      },
      {
        slug: "cm-position",
        title: "Module 3: CM (8) — Center Midfielder",
        summary: "Center midfielder principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["cm-main-principles", "cm-transitions", "cm-ball-recovery", "cm-restarts"],
      },
      {
        slug: "cam-position",
        title: "Module 4: CAM (10) — Attacking Midfielder",
        summary: "Attacking midfielder principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["cam-main-principles", "cam-transitions", "cam-ball-recovery", "cam-restarts"],
      },
      {
        slug: "cdm-position",
        title: "Module 5: CDM (6) — Defensive Midfielder",
        summary: "Defensive midfielder principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["cdm-main-principles", "cdm-transitions", "cdm-ball-recovery", "cdm-restarts"],
      },
      {
        slug: "st-position",
        title: "Module 6: ST (9) — Striker",
        summary: "Striker principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["st-main-principles", "st-transitions", "st-ball-recovery", "st-restarts"],
      },
      {
        slug: "lw-position",
        title: "Module 7: LW (11) — Left Winger",
        summary: "Left winger principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["lw-main-principles", "lw-transitions", "lw-ball-recovery", "lw-restarts"],
      },
      {
        slug: "rw-position",
        title: "Module 8: RW (7) — Right Winger",
        summary: "Right winger principles for open play, transitions, ball recovery, and restarts.",
        lessonSlugs: ["rw-main-principles", "rw-transitions", "rw-ball-recovery", "rw-restarts"],
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
