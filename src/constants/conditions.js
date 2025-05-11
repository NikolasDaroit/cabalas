// src/constants/conditions.js
export const CONDITIONS = [
  // Universal/Mundane Conditions
  {
    name: "Addicted",
    persistent: true,
    description: "Your character is addicted to something, such as a substance or destructive behavior."
  },
  {
    name: "Amnesia",
    persistent: true,
    description: "You've lost a large swath of memory."
  },
  {
    name: "Broken",
    persistent: true,
    description: "Your will is broken and you back down from everything."
  },
  {
    name: "Confused",
    persistent: false,
    description: "You can't think straight."
  },
  {
    name: "Deprived",
    persistent: false, // Can become persistent
    description: "You're weakened by an unfed addiction."
  },
  {
    name: "Guilty",
    persistent: false,
    description: "Feelings of remorse leave you emotionally vulnerable."
  },
  {
    name: "Informed",
    persistent: false,
    description: "You're well equipped to tackle a given subject."
  },
  {
    name: "Inspired",
    persistent: false,
    description: "The spirit moves you to confident action."
  },
  {
    name: "Obsession",
    persistent: false, // Can become persistent
    description: "Something controls your attention and distracts from all else."
  },
  {
    name: "Shaken",
    persistent: false,
    description: "You're shocked or deeply rattled, unsteadying your hand."
  },
  {
    name: "Steadfast",
    persistent: false,
    description: "Your resolve to act is steeled and ready."
  },
  {
    name: "Swooned",
    persistent: false,
    description: "You're charmed or bedazzled by a particular person."
  },

  // Mage-Specific Conditions
  {
    name: "Defeated",
    persistent: false,
    description: "A rival has won magical advantage over you in the Duel Arcane."
  },
  {
    name: "Degenerate Mana",
    persistent: true,
    description: "You can no longer regenerate mana without performing an Act of Hubris."
  },
  {
    name: "Humbled",
    persistent: false,
    description: "Someone stands to you as a valuable reminder of the power of humanity."
  },
  {
    name: "Mage Hunter",
    persistent: true,
    description: "You are obsessed with hunting and destroying magic in all its forms."
  },
  {
    name: "Megalomaniacal",
    persistent: false,
    description: "You are blinded by hubris."
  },
  {
    name: "Mystery Commands",
    persistent: true,
    description: "You receive the arcane will of the Exarchs."
  },
  {
    name: "Rampant",
    persistent: false,
    description: "Your spellcasting is ruled by a cavalier, reckless attitude."
  },
  {
    name: "Soul Shocked",
    persistent: false,
    description: "Your sense of self is healing after experiencing death outside the body."
  },
  {
    name: "Strained",
    persistent: false,
    description: "You've held back the shock of witnessing supernal sorcery, but the pressure remains."
  },
  {
    name: "Supernal Harrowing",
    persistent: true,
    description: "Your soul has been contaminated by a Harrowed Banisher."
  },
  {
    name: "Tainted Aspiration",
    persistent: true,
    description: "One or more of your Aspirations have been tainted by an Abyssal curse."
  },
  {
    name: "Thrall",
    persistent: true,
    description: "You have succumbed to the effects of soullessness, a mere shell of who you once were."
  },
  {
    name: "Triumphant",
    persistent: false,
    description: "You carry your victory in the Duel Arcane with you in Awakened society."
  },

  // Paradox Conditions
  {
    name: "Abyssal Backlash",
    persistent: false,
    description: "A Paradox casts a shadow over you, threatening to break through on the next spell that gives it an opening."
  },
  {
    name: "Abyssal Debilitation",
    persistent: false,
    description: "You are hampered as a result of exposing your soul to the Abyss."
  },
  {
    name: "Abyssal Imago",
    persistent: false,
    description: "A Paradox intrudes upon the spells you envision, compelling dangerous Reach."
  },
  {
    name: "Abyssal Nimbus",
    persistent: false,
    description: "A Paradox has leaked across your Nimbus and invites Abyssal manifestations."
  },

  // Social Conditions
  {
    name: "Leveraged",
    persistent: false,
    description: "A particular character is holding something over your head to compel you."
  },
  {
    name: "Notoriety",
    persistent: false,
    description: "Odious blame follows you, whether true or not."
  },
  {
    name: "Watched",
    persistent: true,
    description: "Someone is stalking you, suspicious of an unnatural secret you hide."
  }
];