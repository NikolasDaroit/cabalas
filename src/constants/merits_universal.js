const MERITS_UNIVERSAL = [
  // Mental Merits
  {
    category: "Mental",
    name: "Advanced Library",
    rating: "• to •••••",
    prerequisites: "Library •••, ≤ Safe Place",
    description: "Your library is vast enough to contain useful, direct information about supernatural topics. Choose a topic per Advanced Library dot. Every story, once per topic, you can take the Informed Condition when you consult your library about that topic."
  },
  {
    category: "Mental",
    name: "Area of Expertise",
    rating: "•",
    prerequisites: "Resolve ••",
    description: "Raise one Specialty's die bonus to +2."
  },
  {
    category: "Mental",
    name: "Common Sense",
    rating: "•••",
    prerequisites: "",
    description: "Once per chapter, roll Wits + Composure as an instant action to ask the Storyteller a question about risks and choices."
  },
  {
    category: "Mental",
    name: "Danger Sense",
    rating: "••",
    prerequisites: "",
    description: "+2 bonus to detect an ambush."
  },
  {
    category: "Mental",
    name: "Direction Sense",
    rating: "•",
    prerequisites: "",
    description: "Keep perfect track of your relative location and direction, and ignore penalties to navigate or find your way."
  },
  {
    category: "Mental",
    name: "Eidetic Memory",
    rating: "••",
    prerequisites: "",
    description: "Ignore rolls for recall or memory. +2 bonus to recall minute facts buried in other information."
  },
  {
    category: "Mental",
    name: "Encyclopedic Knowledge",
    rating: "••",
    prerequisites: "",
    description: "Roll Intelligence + Wits to recall useful trivia relating to a particular field or pursuit."
  },
  {
    category: "Mental",
    name: "Eye for the Strange",
    rating: "••",
    prerequisites: "Resolve ••, Occult •",
    description: "Roll Intelligence + Composure to identify evidence of supernatural involvement."
  },
  {
    category: "Mental",
    name: "Fast Reflexes",
    rating: "• to •••",
    prerequisites: "Wits or Dexterity •••",
    description: "Add Fast Reflexes dots to Initiative."
  },
  {
    category: "Mental",
    name: "Good Time Management",
    rating: "•",
    prerequisites: "Academics or Science ••",
    description: "Make extended action rolls in half the necessary time."
  },
  {
    category: "Mental",
    name: "Holistic Awareness",
    rating: "•",
    prerequisites: "",
    description: "Roll Wits + Survival to substitute woodland scavenging for equipment when treating patients with Medicine, unless the patient suffers non-bashing wound penalties."
  },
  {
    category: "Mental",
    name: "Human Prey",
    rating: "••",
    prerequisites: "",
    description: "React instinctively to danger. May suffer Insane to boost Strength, suffer Beaten Down but gain 8-Again to flee, or suffer Stunned but recover Willpower."
  },
  {
    category: "Mental",
    name: "Hypervigilance",
    rating: "•",
    prerequisites: "",
    description: "Take 8-Again to perceive traps or ambushes, but on exceptional success, suffer the Spooked Condition."
  },
  {
    category: "Mental",
    name: "Indomitable",
    rating: "••",
    prerequisites: "Resolve •••",
    description: "+2 to a contesting dice pool or resistance trait applied against supernatural mental influence."
  },
  {
    category: "Mental",
    name: "Interdisciplinary Specialty",
    rating: "•",
    prerequisites: "Any Skill •••",
    description: "Choose a Specialty in the corresponding Skill. Apply the Specialty's bonus die to relevant rolls of any Skill, except unskilled rolls."
  },
  {
    category: "Mental",
    name: "Investigative Aide",
    rating: "•",
    prerequisites: "Any Skill •••",
    description: "When you roll the selected Skill to uncover clues, achieve exceptional success with only three successes. Add a bonus element to any clues uncovered with this Skill."
  },
  {
    category: "Mental",
    name: "Investigative Prodigy",
    rating: "• to •••••",
    prerequisites: "Wits •••, Investigation •••",
    description: "When you roll to uncover clues, you uncover a clue per success, capped by your dots in Investigative Prodigy. Clues from extra successes never have more than one element each."
  },
  {
    category: "Mental",
    name: "Language",
    rating: "•",
    prerequisites: "",
    description: "You can speak, read and write in a chosen language."
  },
  {
    category: "Mental",
    name: "Library",
    rating: "• to •••",
    prerequisites: "",
    description: "You have a cache of information relating to a particular Skill. Add your dots in Library to relevant extended rolls."
  },
  {
    category: "Mental",
    name: "Lucid Dreamer",
    rating: "••",
    prerequisites: "Resolve •••",
    description: "You may roll Resolve + Composure while asleep to dream lucidly, and may wake up at will."
  },
  {
    category: "Mental",
    name: "Meditative Mind",
    rating: "•, ••, or ••••",
    prerequisites: "",
    description: "Ignore environmental and wound penalties on meditation rolls. At ••, meditation grants +3 to Resolve + Composure rolls for the rest of the day. At ••••, meditation rolls only need one success."
  },
  {
    category: "Mental",
    name: "Multilingual",
    rating: "•",
    prerequisites: "",
    description: "You can speak conversationally in two chosen languages. Roll Intelligence + Academics for reading comprehension."
  },
  {
    category: "Mental",
    name: "Object Fetishism",
    rating: "• to •••••",
    prerequisites: "",
    description: "You obsess over a possession related to a Specialty. Recover Willpower each session from your obsession; spending Willpower to roll that Specialty exaggerates both failure and success."
  },
  {
    category: "Mental",
    name: "Patient",
    rating: "•",
    prerequisites: "",
    description: "Add +2 to your maximum number of allowed rolls on extended actions."
  },
  {
    category: "Mental",
    name: "Renowned Artisan",
    rating: "•••",
    prerequisites: "Crafts ••• with specialty",
    description: "Once per chapter, you may reroll a relevant Crafts action due to ancient Iremite guild knowledge."
  },
  {
    category: "Mental",
    name: "Scarred",
    rating: "•",
    prerequisites: "Integrity ≤ 5",
    description: "Suffer a Persistent Condition which prevents you from recovering Integrity, but inures you from a particular breaking point."
  },
  {
    category: "Mental",
    name: "Tolerance for Biology",
    rating: "•",
    prerequisites: "Resolve •••",
    description: "Ignore Resistance rolls from witnessing biological grotesquerie."
  },
  {
    category: "Mental",
    name: "Trained Observer",
    rating: "• or •••",
    prerequisites: "Wits or Composure •••",
    description: "Take 9-Again, or 8-Again with three dots, on Perception rolls."
  },
  {
    category: "Mental",
    name: "Vice-Ridden",
    rating: "••",
    prerequisites: "Vice",
    description: "Take a second Vice."
  },
  {
    category: "Mental",
    name: "Virtuous",
    rating: "••",
    prerequisites: "Virtue",
    description: "Take a second Virtue."
  },

  // Physical Merits
  {
    category: "Physical",
    name: "Ambidextrous",
    rating: "•••",
    prerequisites: "",
    description: "Ignore offhand penalties. Character creation only."
  },
  {
    category: "Physical",
    name: "Automotive Genius",
    rating: "•",
    prerequisites: "Crafts •••, Drive •, Science •",
    description: "Raise maximum modifications to a vehicle to thrice Crafts rating, plus number of relevant Crafts Specialties."
  },
  {
    category: "Physical",
    name: "Covert Operative",
    rating: "•",
    prerequisites: "Wits •••, Dexterity •••, Stealth ••",
    description: "When launching an ambush, deny 10-Again to notice it, and take +3 Initiative on the first turn."
  },
  {
    category: "Physical",
    name: "Crack Driver",
    rating: "•• or •••",
    prerequisites: "Drive •••",
    description: "When not taking any non-Drive actions, add Composure to Drive rolls. With three dots, take a reflexive Drive action once per turn."
  },
  {
    category: "Physical",
    name: "Demolisher",
    rating: "• to •••",
    prerequisites: "Strength or Intelligence •••",
    description: "When breaking objects, ignore a point of Durability per dot of Demolisher."
  },
  {
    category: "Physical",
    name: "Double Jointed",
    rating: "••",
    prerequisites: "Dexterity •••",
    description: "Dislodge joints at will. Escape mundane bondage automatically. When grappled and not acting aggressively, penalize opponent's overpowering rolls by your Dexterity."
  },
  {
    category: "Physical",
    name: "Fleet of Foot",
    rating: "• to •••",
    prerequisites: "Athletics ••",
    description: "Add dots in Fleet of Foot to Speed. Penalize pursuit rolls in foot chases by your dots."
  },
  {
    category: "Physical",
    name: "Freediving",
    rating: "•",
    prerequisites: "Athletics ••",
    description: "Add Athletics to Stamina when holding breath. Exceptional success on 3 successes when resisting gasp reflex."
  },
  {
    category: "Physical",
    name: "Giant",
    rating: "•••",
    prerequisites: "",
    description: "+1 Size. Character creation only."
  },
  {
    category: "Physical",
    name: "Greyhound",
    rating: "•",
    prerequisites: "Athletics •••, Wits •••, Stamina •••",
    description: "Succeed exceptionally on 3 successes in chase action."
  },
  {
    category: "Physical",
    name: "Hardy",
    rating: "• to •••",
    prerequisites: "Stamina •••",
    description: "Add Hardy dots as bonus to resist disease, poison, deprivation, suffocation, and unconsciousness."
  },
  {
    category: "Physical",
    name: "Iron Skin",
    rating: "• to ••",
    prerequisites: "Brawl ••, Stamina •••",
    description: "Gain general Armor equal to dots vs. bashing. Spend Willpower to downgrade lethal to bashing."
  },
  {
    category: "Physical",
    name: "Iron Stamina",
    rating: "• to •••",
    prerequisites: "Stamina or Resolve •••",
    description: "Ignore penalties from fatigue or wounds up to rating in Iron Stamina."
  },
  {
    category: "Physical",
    name: "Punch Drunk",
    rating: "••",
    prerequisites: "Willpower ••••••",
    description: "Spend Willpower to preserve last Health point, upgrading damage instead."
  },
  {
    category: "Physical",
    name: "Quick Draw",
    rating: "•",
    prerequisites: "Wits •••",
    description: "Draw a weapon with a chosen Specialty as a reflexive action when Defense is available."
  },
  {
    category: "Physical",
    name: "Relentless",
    rating: "•",
    prerequisites: "Athletics ••, Stamina •••",
    description: "Add 2 to the successes needed against you in a chase."
  },
  {
    category: "Physical",
    name: "Roadkill",
    rating: "•••",
    prerequisites: "Aggressive Driving ••",
    description: "When you try to run someone over, Knock Down even if you miss, and double your velocity bonus."
  },
  {
    category: "Physical",
    name: "Seizing the Edge",
    rating: "••",
    prerequisites: "Wits •••, Composure •••",
    description: "You get the Edge in the first turn of a chase, and if your opponent fails a roll as if being ambushed, you can calculate your target successes without their Speed or Initiative."
  },
  {
    category: "Physical",
    name: "Sleight of Hand",
    rating: "••",
    prerequisites: "Larceny •••",
    description: "You can take a Larceny instant action reflexively once per turn, and victims of your Larceny can't notice your attempts if they aren't specifically looking for them."
  },
  {
    category: "Physical",
    name: "Small-Framed",
    rating: "••",
    prerequisites: "",
    description: "-1 Size. Take a +2 bonus to hide, go unnoticed, or otherwise benefit from your size. Character creation only."
  },
  {
    category: "Physical",
    name: "Survivalist",
    rating: "•",
    prerequisites: "Survival •••, Iron Stamina •••",
    description: "You can resist Extreme Cold and Extreme Heat for hours equal to your Stamina."
  },

  // Social Merits
  {
    category: "Social",
    name: "Air of Menace",
    rating: "••",
    prerequisites: "Intimidation ••",
    description: "You wear a history of violence on your sleeve. +2 to menace others, and less rough characters must spend Willpower to pick a fight, but social maneuvering is harder."
  },
  {
    category: "Social",
    name: "Allies",
    rating: "• to •••••",
    prerequisites: "",
    description: "You have influence and goodwill with a chosen group proportional to your dots in this Merit. Each session, you can call on your Allies for favors of a value rated 1 to 5 by the Storyteller, up to your rating in the Merit. Favors in excess require a roll of Manipulation + Persuasion + Allies."
  },
  {
    category: "Social",
    name: "Alternate Identity",
    rating: "• to •••",
    prerequisites: "",
    description: "You've laid groundwork establishing a false identity: an informal history with one dot, a veneer of documentation with two, or an airtight paper trail with three. +1 to Subterfuge rolls to maintain the false identity, or +2 with three dots."
  },
  {
    category: "Social",
    name: "Anonymity",
    rating: "• to •••••",
    prerequisites: "No Fame",
    description: "Penalize attempts to find you by paper trail or living evidence by a die per Anonymity dot."
  },
  {
    category: "Social",
    name: "Barfly",
    rating: "••",
    prerequisites: "Socialize ••",
    description: "You can get into nearly any venue. Penalize attempts to recognize you as out of place by your Socialize dots."
  },
  {
    category: "Social",
    name: "Beneath Notice",
    rating: "•••",
    prerequisites: "",
    description: "Appear as a servant. Don't need to roll Stealth around those who see you as lower status. +3 to eavesdrop on them."
  },
  {
    category: "Social",
    name: "Closed Book",
    rating: "• to •••••",
    prerequisites: "Manipulation •••, Resolve •••",
    description: "Add dots to your number of Doors and to rolls to resist Social assessment."
  },
  {
    category: "Social",
    name: "Cohesive Unit",
    rating: "• to •••",
    prerequisites: "Presence •••",
    description: "+2 to teamwork. With 2 dots, confer bonus dice each scene. With 3 dots, confer rerolls."
  },
  {
    category: "Social",
    name: "Contacts",
    rating: "• to •••••",
    prerequisites: "",
    description: "For each dot, choose a group. Roll to gather information or dirt from contacts in that group."
  },
  {
    category: "Social",
    name: "Defender",
    rating: "• to •••",
    prerequisites: "",
    description: "Bonus Willpower to protect loved ones. Losing them causes crisis of grief or retribution."
  },
  {
    category: "Social",
    name: "Den of Vice",
    rating: "••",
    prerequisites: "",
    description: "Have a location reflecting your Vice that restores all Willpower once per chapter. Risk Addicted condition on failure."
  },
  {
    category: "Social",
    name: "Empath",
    rating: "••",
    prerequisites: "Empathy ••",
    description: "Contest Wits + Empathy vs Manipulation + Subterfuge to gain insight into mental state, which can open Doors or ease breaking points."
  },
  {
    category: "Social",
    name: "Fame",
    rating: "• to •••",
    prerequisites: "No Anonymity",
    description: "You're known for something. Add Fame as dice bonus on Social rolls with those impressed by reputation."
  },
  {
    category: "Social",
    name: "Fixer",
    rating: "••",
    prerequisites: "Contacts ••, Wits •••",
    description: "Obtain services as if one Availability dot lower."
  },
  {
    category: "Social",
    name: "Friends in Low Places",
    rating: "• to •••••",
    prerequisites: "",
    description: "An alternate version of Status, representing influence among society's outcasts and criminals."
  },
  {
    category: "Social",
    name: "Hobbyist Clique",
    rating: "••",
    prerequisites: "Any Skill ••",
    description: "Your fellow hobbyists give you 9-Again with the skill and +2 dice to extended actions with it."
  },
  {
    category: "Social",
    name: "Inspiring",
    rating: "•••",
    prerequisites: "Presence •••",
    description: "Roll Presence + Expression to confer the Inspired Condition."
  },
  {
    category: "Social",
    name: "Iron Will",
    rating: "••",
    prerequisites: "Resolve ••••",
    description: "Substitute Resolve for Willpower when contesting or resisting Social influence. 8-Again on contested rolls."
  },
  {
    category: "Social",
    name: "Mentor",
    rating: "• to •••••",
    prerequisites: "",
    description: "You have a guide who provides help and expects something in return. Grants aid once per session in chosen areas."
  },
  {
    category: "Social",
    name: "Mobster",
    rating: "•",
    prerequisites: "",
    description: "You're connected to organized crime. Access to their areas and resources, but you gain enemies too."
  },
  {
    category: "Social",
    name: "Moonlighting",
    rating: "••",
    prerequisites: "",
    description: "Once per story, gain 2 dots in temporary Resources from a likely illegal side hustle."
  },
  {
    category: "Social",
    name: "Peacemaker",
    rating: "•• to •••",
    prerequisites: "Wits •••, Empathy •••",
    description: "Spend Willpower to use Social Maneuvering to negotiate peace. With 3 dots, calm supernatural rages."
  },
  {
    category: "Social",
    name: "Pusher",
    rating: "•",
    prerequisites: "Persuasion ••",
    description: "Improve impression during Social Maneuvering as if you also satisfied the mark's Vice."
  },
  {
    category: "Social",
    name: "Resources",
    rating: "• to •••••",
    prerequisites: "",
    description: "Disposable income to acquire goods and services of Availability up to your rating, once per session."
  },
  {
    category: "Social",
    name: "Retainer",
    rating: "• to •••••",
    prerequisites: "",
    description: "You have a follower or assistant. Their dice pool equals twice their rating in relevant actions, or their rating if not."
  },
  {
    category: "Social",
    name: "Safe Place",
    rating: "• to •••••",
    prerequisites: "",
    description: "A secure location. Grants Initiative bonuses, penalizes break-ins, and can include traps based on Crafts."
  },
  {
    category: "Social",
    name: "Small Unit Tactics",
    rating: "••",
    prerequisites: "Presence •••",
    description: "Spend Willpower to give teamwork bonus to a number of allies up to your Presence rating once per scene."
  },
  {
    category: "Social",
    name: "Spin Doctor",
    rating: "•",
    prerequisites: "Manipulation •••, Subterfuge ••",
    description: "Using Tainted Clues inflicts -1 penalty instead of consuming any successes."
  },
  {
    category: "Social",
    name: "Staff",
    rating: "• to •••••",
    prerequisites: "",
    description: "You have employees. Each dot gives access to one automatic success in an assigned Skill."
  },
  {
    category: "Social",
    name: "Status",
    rating: "• to •••••",
    prerequisites: "",
    description: "Influence in an organization. Adds dice to Social rolls, access to facilities, and can block lower Social Merits."
  },
  {
    category: "Social",
    name: "Striking Looks",
    rating: "• to ••",
    prerequisites: "",
    description: "Noteworthy appearance. Bonus to Social rolls involving appearance and to be noticed or remembered."
  },
  {
    category: "Social",
    name: "Support Network",
    rating: "• to •••••",
    prerequisites: "Appropriate Social Merit",
    description: "Tie to a Social Merit group. Spend Willpower to use this Merit as bonus dice when resisting breaking points."
  },
  {
    category: "Social",
    name: "Sympathetic",
    rating: "••",
    prerequisites: "",
    description: "Accept a Condition like Leveraged or Swooning to immediately open two Doors in Social Maneuvering."
  },
  {
    category: "Social",
    name: "Table Turner",
    rating: "•",
    prerequisites: "Composure •••, Manipulation •••, Wits •••",
    description: "Spend Willpower to preemptively respond to Social Maneuvering with your own Social action."
  },
  {
    category: "Social",
    name: "Takes One to Know One",
    rating: "•",
    prerequisites: "Vice",
    description: "When investigating something that resonates with your Vice, gain +2 dice, 9-Again, and satisfy your Vice on success."
  },
  {
    category: "Social",
    name: "Taste",
    rating: "•",
    prerequisites: "Crafts ••",
    description: "Roll Wits + relevant Skill to analyze artistic or crafted works within a chosen Specialty."
  },
  {
    category: "Social",
    name: "True Friend",
    rating: "•••",
    prerequisites: "",
    description: "An unbreakable bond. Rolls to influence your friend against you suffer −5. Recover 1 Willpower per story with meaningful interaction."
  },
  {
    category: "Social",
    name: "Tutelage",
    rating: "•••",
    prerequisites: "",
    description: "Meet your student/mentor once per story. Student gains 1 XP (restricted use); teacher reduces next purchase by 1 XP."
  },
  {
    category: "Social",
    name: "Untouchable",
    rating: "•",
    prerequisites: "Manipulation •••, Subterfuge ••",
    description: "Investigation into your actions requires an exceptional success or results in Incomplete Clues."
  },

  // Fighting Merits
  {
    category: "Fighting",
    name: "Armed Restraint",
    rating: "••",
    prerequisites: "Staff Fighting •••",
    description: "Use a hooking pole when grappling to instantly Hold and penalize your opponent by its weapon rating."
  },
  {
    category: "Fighting",
    name: "Body as Weapon",
    rating: "••",
    prerequisites: "Stamina •••, Brawl ••",
    description: "Unarmed strikes add one point of bashing damage on a successful hit."
  },
  {
    category: "Fighting",
    name: "Boot Party",
    rating: "••",
    prerequisites: "Brawl ••",
    description: "Attack a prone target at -3 to deal lethal damage unarmed."
  },
  {
    category: "Fighting",
    name: "Cheap Shot",
    rating: "••",
    prerequisites: "Street Fighting •••, Subterfuge ••",
    description: "During a fight, you can reflexively contest Dexterity + Subterfuge against Wits + Composure to deny an opponent Defense next turn through dirty tricks and distractions."
  },
  {
    category: "Fighting",
    name: "Choke Hold",
    rating: "••",
    prerequisites: "Brawl ••",
    description: "After a successful Hold, add the Choke grapple maneuver: accumulates successes across multiple turns to knock unconscious for a few minutes."
  },
  {
    category: "Fighting",
    name: "Clinch Strike",
    rating: "•",
    prerequisites: "Brawl ••",
    description: "Use the Damage maneuver instantly in a grapple."
  },
  {
    category: "Fighting",
    name: "Defensive Combat",
    rating: "•",
    prerequisites: "Brawl • or Weaponry •",
    description: "You can substitute the chosen Skill for Athletics when calculating your Defense, as long as you're currently equipped to make attacks with that Skill."
  },
  {
    category: "Fighting",
    name: "Fighting Finesse",
    rating: "••",
    prerequisites: "Dexterity •••",
    description: "You can substitute Dexterity for Strength when making rolls with a chosen Brawl or Weaponry Specialty."
  },
  {
    category: "Fighting",
    name: "Ground and Pound",
    rating: "•••",
    prerequisites: "Brawl ••",
    description: "Take the rote quality to strike a prone target with Brawl, falling prone yourself."
  },
  {
    category: "Fighting",
    name: "Ground Fighter",
    rating: "•••",
    prerequisites: "Wits •••, Dexterity •••, Brawl ••",
    description: "Deny close combat bonuses from being prone, and gain the Stand Up grapple maneuver."
  },
  {
    category: "Fighting",
    name: "Gunslinger",
    rating: "•, •••, or •••••",
    prerequisites: "Wits •••, Firearms •••, Firearms(Revolvers) specialty",
    description: "At one dot, can perform short bursts with revolvers. At three dots, can make a medium burst with revolvers, but doesn't gain an attack bonus. At five dots, with offhand revolver, medium burst can hit targets not close together, for an additional -2 penalty."
  },
  {
    category: "Fighting",
    name: "Headbutt",
    rating: "•",
    prerequisites: "Brawl ••",
    description: "Gain the Headbutt grapple maneuver: inflict Stunned."
  },
  {
    category: "Fighting",
    name: "Iron Chin",
    rating: "•• or ••••",
    prerequisites: "Resolve •••, Stamina •••",
    description: "Don't suffer Beaten Down from bashing damage. With four dots, never suffer Beaten Down."
  },
  {
    category: "Fighting",
    name: "Killer Instinct",
    rating: "• to •••",
    prerequisites: "Composure •••, Wits •••, Medicine •",
    description: "You can take an instant action to size up a target's most vulnerable parts, which also counts as an aiming action. When attacking the target afterward, each dot of this Merit can ignore 1/1 Armor, ignore a point of Defense, or convert a point of bashing to lethal damage."
  },
  {
    category: "Fighting",
    name: "Loaded for Bear",
    rating: "• to ••",
    prerequisites: "Athletics •, Survival •",
    description: "Gain extra reloads on weapons, including single shot weapons."
  },
  {
    category: "Fighting",
    name: "Phalanx Fighter",
    rating: "••",
    prerequisites: "Weapon and Shield ••, Spear and Bayonet •",
    description: "Wield a spear with a shield, substituting it in Weapon and Shield maneuvers."
  },
  {
    category: "Fighting",
    name: "Retain Weapon",
    rating: "••",
    prerequisites: "Wits ••, Brawl ••",
    description: "Reduce successes on a Control Weapon or Disarm maneuver against you by your Brawl."
  },
  {
    category: "Fighting",
    name: "Shiv",
    rating: "• or ••",
    prerequisites: "Street Fighting ••, Weaponry •",
    description: "You can conceal a 0L brawling weapon with one dot, or 1L with two, on your person. Penalize rolls to detect it by your Weaponry."
  },
  {
    category: "Fighting",
    name: "Subduing Strikes",
    rating: "•",
    prerequisites: "Weaponry ••",
    description: "You can pull blows with a weapon to deal bashing damage without spending Willpower."
  },
  {
    category: "Fighting",
    name: "Transfer Maneuver",
    rating: "• to •••",
    prerequisites: "Intelligence ••, Wits •••, Brawl ••, Weaponry ••",
    description: "Cross-apply a Brawling maneuver to a Weaponry Style, or vice-versa."
  },
  {
    category: "Fighting",
    name: "Trigger Discipline",
    rating: "•",
    prerequisites: "Wits ••, Firearms ••",
    description: "Increase a firearm's effective capacity, or allow an additional long burst at high capacity."
  },
  {
    category: "Fighting",
    name: "Trunk Squeeze",
    rating: "••",
    prerequisites: "Brawl ••",
    description: "Gain the Trunk Squeeze grapple maneuver: deal bashing damage and cumulatively penalize the opponent's contesting rolls."
  },

  // Supernatural Merits
  {
    category: "Supernatural",
    name: "Esoteric Armory",
    rating: "• to •••••",
    prerequisites: "",
    description: "You've collected enough esoterica to supply the banes of ephemeral entities with a Rank up to your rating in this Merit."
  },
  {
    category: "Supernatural",
    name: "Relic",
    rating: "• to •••••",
    prerequisites: "",
    description: "You possess an incorruptible item sorcerously crafted with the world's life force, with unique cursed powers."
  },
  {
    category: "Supernatural",
    name: "Sandglass",
    rating: "••",
    prerequisites: "",
    description: "Your soul can instinctively roll Wits + Composure to sense ripples in the waters of time like the Arisen, spending Willpower instead of Pillars and Willpower dots instead of Sekhem."
  },
  {
    category: "Supernatural",
    name: "Vestige",
    rating: "• to •••••",
    prerequisites: "",
    description: "You possess vessels for the world's life force which can be called upon for cursed strength."
  }
];

export default MERITS_UNIVERSAL;