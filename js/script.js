const storyScenes = [
  {
    id: "intro",
    text: "Oscar was 15 years old. He lived in a small apartment in the city that felt too quiet, like a house holding its breath. His parents had been sent to prison, and everything in his life had changed.",
    next: "school",
    timeout: 4000
  },
  {
    id: "school",
    text: "At school, whispers followed him down the hallways. The looks from other students felt heavy. Oscar felt ashamed and angry.",
    choices: [
      {
        text: "Ignore them and focus on football",
        next: "football"
      },
      {
        text: "Quit the team and avoid everyone",
        next: "quitFootball"
      }
    ]
  },
  {
    id: "football",
    text: "He stayed on the football team. The field still felt like a stage, but running helped him clear his mind.",
    next: "olderBoys",
    timeout: 4000
  },
  {
    id: "quitFootball",
    text: "He quit the football team. The field that once felt like freedom now felt like a place of judgment.",
    next: "olderBoys",
    timeout: 4000
  },
  {
    id: "olderBoys",
    text: "He started hanging out with older boys who acted like nothing mattered. One day, they asked if he wanted to try smoking weed.",
    choices: [
      {
        text: "Say no and walk away",
        next: "walkAway"
      },
      {
        text: "Try it to escape the pain",
        next: "tryWeed"
      }
    ]
  },
  {
    id: "walkAway",
    text: "Oscar walked away. The storm inside him was still loud, but he felt a small spark of strength.",
    next: "messageFromMom",
    timeout: 4000
  },
  {
    id: "tryWeed",
    text: "When he smoked, the storm inside him became quiet. For a little while, he felt light, almost like he was floating.",
    choices: [
      {
        text: "Stop here before it gets worse",
        next: "messageFromMom"
      },
      {
        text: "Try something stronger",
        next: "pills"
      }
    ]
  },
  {
    id: "pills",
    text: "Soon it wasn’t just weed. He tried pills too. The comfort slowly turned into chains. He skipped school and lied to his aunt.",
    next: "messageFromMom",
    timeout: 5000
  },
  {
    id: "messageFromMom",
    text: "One evening, he got a message from his mom saying she missed him and hoped he was doing well. A tight knot formed in his stomach.",
    choices: [
      {
        text: "Ignore the message",
        next: "mirror"
      },
      {
        text: "Reply honestly",
        next: "mirror"
      }
    ]
  },
  {
    id: "mirror",
    text: "He looked at himself in the mirror. The boy staring back looked like a stranger. Fear crept into him.",
    choices: [
      {
        text: "Keep going down this path",
        next: "badEnding"
      },
      {
        text: "Ask someone for help",
        next: "nurseOffice"
      }
    ]
  },
  {
    id: "badEnding",
    text: "He kept going. The fog grew thicker, and the storm louder. He felt himself slipping further away from who he used to be.",
    next: null
  },
  {
    id: "nurseOffice",
    text: "With heavy legs, he walked to the school nurse’s office. At first, the words were stuck in his throat. Then the truth poured out.",
    next: "healing",
    timeout: 5000
  },
  {
    id: "healing",
    text: "Healing was slow. Some days were harder than others. But little by little, the fog began to lift.",
    next: "hope",
    timeout: 4000
  },
  {
    id: "hope",
    text: "Oscar learned that his parents’ mistakes were not chains around his future. Asking for help was like turning on a light in a dark room.",
    next: null
  }
];