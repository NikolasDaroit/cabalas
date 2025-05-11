const MERITS_MAGE = [
  // General Mage Merits
  {
    category: "Mage",
    name: "Adamant Hand",
    rating: "••",
    prerequisites: "Arrow Status •, Athletics or Brawl or Weaponry •••",
    description: "Allows use of prerequisite Skill as reflexive Order tool Yantra in combat."
  },
  {
    category: "Mage",
    name: "Artifact",
    rating: "•••+",
    prerequisites: "",
    description: "Own a magical item that can cast spells and stores dots x2 Mana, and can act as a Path tool Yantra worth +1 die for Mages of the path of highest spell effect stored"
  },
  {
    category: "Mage",
    name: "Astral Adept",
    rating: "•••",
    prerequisites: "",
    description: "Can enter Astral Realms from any location if a ceremony is performed and a Willpower point spent."
  },
  {
    category: "Mage",
    name: "Astral Intruder",
    rating: "•••",
    prerequisites: "Astral Adept, Resolve •••",
    description: "Make a Clash of Wills to meditate into the Oneiros of a mage whose soul stone you possess, instead of your own."
  },
  {
    category: "Mage",
    name: "Awakened Status",
    rating: "• to •••••",
    prerequisites: "",
    description: "Hold status in a Consilium or Order. You may temporarily requisition dots of Alternate Identity, Retainer, Imbued Item, Artifact, Grimoire, Mentor, Hallow, Sanctum, Library, Advanced Library, Safe Place, Familiar, and Resources."
  },
  {
    category: "Mage",
    name: "Between the Ticks",
    rating: "••",
    prerequisites: "Wits •••, Time •",
    description: "Once per scene can take -1 from Initiative to add +1 to an action for a turn, or vice versa"
  },
  {
    category: "Mage",
    name: "Broad Dedication",
    rating: "•",
    prerequisites: "Prime •",
    description: "Instill your nimbus into a specific Yantra that aligns with your spellcasting, making your Dedicated Tool any kind of Yantra."
  },
  {
    category: "Mage",
    name: "Cabal Theme",
    rating: "•",
    prerequisites: "Must be taken by entire cabal",
    description: "All members of the cabal are counted as one dot higher in Shadow Name Merit for purposes of personal Yantras"
  },
  {
    category: "Mage",
    name: "Cognoscente",
    rating: "••",
    prerequisites: "Prime •••, Academics or Occult ••",
    description: "Your character has perfected the art of scribing grimoires. Anyone casting from his tomes may do so without the doubled ritual casting time. He may also imprint his own signature nimbus into the rote imago when scribing the spell. Doing so causes the rote to show his own nimbus instead of hiding the caster's. Once per story, gain +2 to a Social roll that relies on this fame and enjoy the benefits of Occultation •••."
  },
  {
    category: "Mage",
    name: "Daimonomikon",
    rating: "• to •••••",
    prerequisites: "",
    description: "Your character possesses a Daimonomikon for a particular legacy. Each dot corrosponds to the Attainment within the Legacy that can be learned from the Daimonomikon."
  },
  {
    category: "Mage",
    name: "Destiny",
    rating: "• to •••••",
    prerequisites: "",
    description: "Gain a pool of rerolls or rote-quality rolls on mundane actions per chapter, but have an associated Doom"
  },
  {
    category: "Mage",
    name: "Dominant Soul",
    rating: "• to •••••",
    prerequisites: "Composure •••",
    description: "When your character has another mage's soul stone you can counterspell any Arcanum from its owner, applying Merit dots as your Arcanum rating. If used as a Yantra during a Prime dispellation, reduce Withstand by dots in this Merit."
  },
  {
    category: "Mage",
    name: "Dream",
    rating: "• to •••••",
    prerequisites: "Wits •••, Composure •••",
    description: "Have a number of questions answered directly per chapter."
  },
  {
    category: "Mage",
    name: "Echo Chamber",
    rating: "••••",
    prerequisites: "Empathy ••",
    description: "See flashbacks of a soul stone's owner. Gain exceptional success off 3 dice for active mage sight to investigate a mystery based on the soul stone's Path. Once per story, meditate on the soul stone to ask yes or no questions about the mystery."
  },
  {
    category: "Mage",
    name: "Enhanced Item",
    rating: "•+",
    prerequisites: "",
    description: "Own an item enhanced by spells."
  },
  {
    category: "Mage",
    name: "Enriched Item",
    rating: "•• or ••••",
    prerequisites: "",
    description: "Your character owns an item with a natural enhancement or one permanently altered through multiple uses of the same enchantment."
  },
  {
    category: "Mage",
    name: "Epiphany Stone",
    rating: "••••",
    prerequisites: "Dream or Astral Adept, Mind ••",
    description: "Spend Mana while using active mage sight to roll Clash of Wills to check if you are under some form of illusion, hallucination, forced astral journey or other supernatural power that separates you from reality."
  },
  {
    category: "Mage",
    name: "Familiar",
    rating: "•• or ••••",
    prerequisites: "",
    description: "Bound to an ephemeral familiar with Rank equal to half this Merit"
  },
  {
    category: "Mage",
    name: "Fast Spells",
    rating: "••",
    prerequisites: "Firearms ••, Time •",
    description: "Opponents Defend against your aim spells as they do against firearms"
  },
  {
    category: "Mage",
    name: "Fire Keeper",
    rating: "•",
    prerequisites: "Ancient Obrimos",
    description: "Environmental causes can't fully snuff flames in your presence unless you will it."
  },
  {
    category: "Mage",
    name: "Fluent High Speech",
    rating: "•••",
    prerequisites: "Awakened, Presence ••••, Expression•••",
    description: "You may converse at length in High Speech. Persuasion and Intimidation rolls with mages and supernal entities that use the High Speech gain +2, and Expression rolls are not reduced to chance dice. Participating in a supernal summoning reduces the target number by two."
  },
  {
    category: "Mage",
    name: "Grimoire",
    rating: "• to •••••",
    prerequisites: "",
    description: "Own a Grimoire with two spells per dot"
  },
  {
    category: "Mage",
    name: "Hidden High Speech",
    rating: "•",
    prerequisites: "Awakened, Manipulation •••, Expression •••",
    description: "Your character may use mundane language to conceal a message in High Speech. Sleepers or Sleepwalkers who hear or read the message do not hear glossolalia or read gibberish. Use at no cost when writing, though speaking this way is taxing and requires a point of Willpower"
  },
  {
    category: "Mage",
    name: "High Speech",
    rating: "•",
    prerequisites: "",
    description: "Use High Speech as a Yantra."
  },
  {
    category: "Mage",
    name: "Imbued Ally",
    rating: "•+",
    prerequisites: "",
    description: "You have imbued a spell with indefinite duration into a person or creature who is bound to you. The creature has a single spell and Mana in which to cast it."
  },
  {
    category: "Mage",
    name: "Imbued Item",
    rating: "•+",
    prerequisites: "",
    description: "Own a item imbued with spells it can cast"
  },
  {
    category: "Mage",
    name: "Imposing Nimbus",
    rating: "•••",
    prerequisites: "",
    description: "Your characters Nimbus is a true force of Nature. Whenever someone succumbs to their Nimbus Tilt spend a point of willpower to convert the Tilt into a Persistent Condition for that person. That condition gains an extra resolution option of successfully defeating your character on a contested roll or causing her harm."
  },
  {
    category: "Mage",
    name: "Infamous Mentor",
    rating: "• to •••••",
    prerequisites: "≤ Mentor",
    description: "Call on Mentor's status and Social Merits by name-dropping"
  },
  {
    category: "Mage",
    name: "Inheritance",
    rating: "••",
    prerequisites: "Fame •",
    description: "The Mage can use their bloodline as a +1 Yantra to any spell appropriate to their ancestors' reputation. If the spell is cast on a subject who knows their heritage and is aware of the spell being cast, this becomes +2."
  },
  {
    category: "Mage",
    name: "Keen Periphery",
    rating: "••",
    prerequisites: "Wits •••",
    description: "Your Peripheral Mage Sight is unusually perceptive. When sensing an effect via Peripheral Mage Sight you can also sense the Arcanum under which the effect falls"
  },
  {
    category: "Mage",
    name: "Legacy Pedagogue",
    rating: "•",
    prerequisites: "Prime •••, Gnosis •••",
    description: "Your character's connection to a Legacy is so forceful that when scribing a Daimonomikon part of him remains with it. When characters initiate themselves into the Legacy by your Daimonomika, gain one arcane beat as if you tutored the character yourself."
  },
  {
    category: "Mage",
    name: "Lex Magica",
    rating: "••",
    prerequisites: "Ladder Status •",
    description: "Resist Social Maneuvering and the use of Willpower to influence your behavior. Use half your Awakened Status as a Yantra when enforcing the Lex Magica."
  },
  {
    category: "Mage",
    name: "Mana Battery",
    rating: "•+",
    prerequisites: "",
    description: "Your character has an Item imbued with a Mana pool which she can use instead of her own"
  },
  {
    category: "Mage",
    name: "Mana Sensitivity",
    rating: "•",
    prerequisites: "Wits •••, Prime •",
    description: "Sense Hallows and tass with Peripheral Mage Sight."
  },
  {
    category: "Mage",
    name: "Masque",
    rating: "••",
    prerequisites: "Guardian Status •",
    description: "Define an additional persona with the Masque Style Merit below."
  },
  {
    category: "Mage",
    name: "Mystery Cult Influence",
    rating: "••• to •••••",
    prerequisites: "",
    description: "Rule a mystery cult and benefit from its Mystery Cult Initiation."
  },
  {
    category: "Mage",
    name: "Occultation",
    rating: "• to •••",
    prerequisites: "No Fame",
    description: "Penalize attempts to track or identify you by your Nimbus by dots in this Merit."
  },
  {
    category: "Mage",
    name: "Order Archive",
    rating: "• to •••••",
    prerequisites: "Consilium/Order Status •",
    description: "Your character has access to an archive of information and resources belonging to her Order or Caucus. This Merit doesn't reflect the character's ability to requisition these materials, but indicates what her Order Caucus has available to its members."
  },
  {
    category: "Mage",
    name: "Perfected Item",
    rating: "••",
    prerequisites: "",
    description: "Your Character owns an item made from a Perfected Metal, Amalgam or Alloy with perminant duration"
  },
  {
    category: "Mage",
    name: "Persistent Nimbus",
    rating: "•",
    prerequisites: "",
    description: "Your characters Nimbus effects linger for longer than most. Her Long-Term Nimbus continues to affect an area for one day per dot of Gnosis. When flaring her Immediate nimbus without casting, it lasts turns equal to Gnosis. Signature nimbus persists on subjects of her Magic one week per dot of gnosis as well."
  },
  {
    category: "Mage",
    name: "Piercing Glance",
    rating: "•• or ••••",
    prerequisites: "Gnosis ••",
    description: "You may undertake a Clash of Wills to sense a concealed effect with Peripheral Mage Sight. For •• you suffer a -2 penalty to the roll, for •••• you suffer no penalty to the roll"
  },
  {
    category: "Mage",
    name: "Plunder Mana",
    rating: "••",
    prerequisites: "Prime •, Resolve ••",
    description: "Take 10 minutes ti perform an Oblation at a Hallow. Regain one Mana if you successfully Counter a spell with any Mana cost."
  },
  {
    category: "Mage",
    name: "Potent Nimbus",
    rating: "• or ••",
    prerequisites: "",
    description: "Add as a bonus to flare your Nimbus. Determine your Nimbus Tilt as if your Gnosis were raised by twice dots in this Merit."
  },
  {
    category: "Mage",
    name: "Potent Soul",
    rating: "•••",
    prerequisites: "Awakened, Presence •••",
    description: "When holding another Mage's Soul Stone any Social rolls against its owner gain 9-agains, Any social maneuvering automatically opens one Extra Door on every success"
  },
  {
    category: "Mage",
    name: "Potent Resonance",
    rating: "••",
    prerequisites: "Gnosis •••",
    description: "Characters scrutinizing your Nimbus are subject to your Nimbus Tilt."
  },
  {
    category: "Mage",
    name: "Profane Tool",
    rating: "•",
    prerequisites: "Prelacy ••",
    description: "Your character may choose one of the following as a Dedicated Path tool; Scepters, Robes, Crowns, Thrones and Rings. This Merit may be purchased multiple times"
  },
  {
    category: "Mage",
    name: "Profligate Dedication",
    rating: "••",
    prerequisites: "",
    description: "Your character may have up to three Dedicated Magical tools but can only use up to 2 at a time. You have no penalty for using only one (or none) of your Dedicated tools when casting"
  },
  {
    category: "Mage",
    name: "Sea's Hunger",
    rating: "•",
    prerequisites: "Ancient Moros",
    description: "Heal twice as quickly each day you destroy an object with magic."
  },
  {
    category: "Mage",
    name: "Second-Person High Speech",
    rating: "•••",
    prerequisites: "Awakened, Presence •••, Expression •••, High Speech",
    description: "Provide your own High Speech as a Yantra for others. If you meet the required Arcanum for the cast spell give +2 dice as a bonus, If you have at least one dot in the Primary Arcanum but not all dots give a +1. You can also use High Speech to gain a Dice Bonus on Imbued Items and Artifacts. This does not stack if the Caster is using High Speech as a Yantra"
  },
  {
    category: "Mage",
    name: "Shadow Name",
    rating: "• to •••",
    prerequisites: "",
    description: "Determine Shadow Name and symbolism, may use those symbols as a persona tool worth the merit's dots. Apply dots as a Withstand rating against spells that identify or target via Sympathy while in mundane persona."
  },
  {
    category: "Mage",
    name: "Shadow Self",
    rating: "••",
    prerequisites: "Shadow Name •••••?, Mind •",
    description: "Your Shadow Name isn't just a persona its a legend. Anyone who succumbs to the nimbus tilt takes a -2 penalty to all contested rolls against him for the rest of the scene as long as it aligns with the Shadow Name Identity. If your Shadow Name reflects a Mythological or Divine entity thats well known enough to have a presence in the Temenos he enjoys a +2 bonus to attempts to summon said Goetia."
  },
  {
    category: "Mage",
    name: "Sky's Whispers",
    rating: "•",
    prerequisites: "Ancient Acanthus",
    description: "Read the open sky as an instant action to predict the day's weather and take +3 to endure it."
  },
  {
    category: "Mage",
    name: "Soul Dealer",
    rating: "• to •••••",
    prerequisites: "Streetwise •••",
    description: "You character has contacts in the Black Market soul trade or is a soul trader himself. Once per story your character can obtain a soul stone as though you were a member of any order status one for one to dots in this merit"
  },
  {
    category: "Mage",
    name: "Soul Stone",
    rating: "• or ••",
    prerequisites: "",
    description: "Your character owns another Mage's soul stone. One dot is equal or lesser Gnosis to your own. 2 dots is greater"
  },
  {
    category: "Mage",
    name: "Spirit Warden",
    rating: "••",
    prerequisites: "Ancient Thyrsus",
    description: "Spirits must spend Willpower to attack you for a scene."
  },
  {
    category: "Mage",
    name: "Stalwart Soul",
    rating: "• or ••",
    prerequisites: "Composure •••",
    description: "A soul stone created by you gains Durability equal to twice your dots in this merit and gains the same bonus to withstand against spells that would harm or destroy it"
  },
  {
    category: "Mage",
    name: "Supernal Taxonomy",
    rating: "••",
    prerequisites: "Intelligence ••, Occult •••",
    description: "You possess a deep understanding of Active Mage Sight. When observing phenomena in either similar effect or origin to one already scrutinized she can recognize the similarity"
  },
  {
    category: "Mage",
    name: "Supernal Watcher",
    rating: "•• or ••••",
    prerequisites: "",
    description: "You have gained the attention of a supernal entity at rank 1 for 2 dots and rank 2 for 4 dots. When summoning your watcher you only need 5 successes, they appear when using Active mage sight and you may use it as a Path tool Yantra"
  },
  {
    category: "Mage",
    name: "Techné",
    rating: "••",
    prerequisites: "Councillor Status •",
    description: "Choose a focus that counts as an Order tool, and can treat Sleepers using it as a separate Order tool as long as the spell is subtle."
  },
  {
    category: "Mage",
    name: "Trail Walker",
    rating: "••",
    prerequisites: "Ancient Mastigos",
    description: "Double your rate of travel across forests."
  },

  // Style Merits
  {
    category: "Style",
    name: "Egregore •",
    rating: "•",
    prerequisites: "Mysterium Status •",
    description: "If all mages in a ritual possess this Merit, contribute by teamwork regardless of Arcanum, and contribute an extra success."
  },
  {
    category: "Style",
    name: "Egregore ••",
    rating: "••",
    prerequisites: "Mysterium Status •",
    description: "Apply your full Status in foreign Caucuses."
  },
  {
    category: "Style",
    name: "Egregore •••",
    rating: "•••",
    prerequisites: "Mysterium Status •",
    description: "Psychically consult your cabal and Caucus's Libraries. Once per session, intuit knowledge about a member of the Caucus."
  },
  {
    category: "Style",
    name: "Egregore ••••",
    rating: "••••",
    prerequisites: "Mysterium Status •",
    description: "For each spellcasting, treat any one magical tool as Dedicated."
  },
  {
    category: "Style",
    name: "Egregore •••••",
    rating: "•••••",
    prerequisites: "Mysterium Status •",
    description: "While in an Order Sanctum, assume a Medium sympathetic connection to other Mystagogues."
  },
  {
    category: "Style",
    name: "Masque •",
    rating: "•",
    prerequisites: "Guardian Status •",
    description: "Define a symbolic persona, and assume it with Willpower to benefit from these maneuvers."
  },
  {
    category: "Style",
    name: "Masque ••",
    rating: "••",
    prerequisites: "Guardian Status •",
    description: "Choose a Virtue and Vice. Use the Masque's rather than your own."
  },
  {
    category: "Style",
    name: "Masque •••",
    rating: "•••",
    prerequisites: "Guardian Status •",
    description: "Choose a Skill Specialty for every dot of this Style. Use the Masque's rather than your own."
  },
  {
    category: "Style",
    name: "Masque ••••",
    rating: "••••",
    prerequisites: "Guardian Status •",
    description: "Choose a Signature Nimbus. Use the Masque's rather than your own."
  },
  {
    category: "Style",
    name: "Masque •••••",
    rating: "•••••",
    prerequisites: "Guardian Status •",
    description: "Choose two Acts of Hubris the Masque does not risk degeneration for."
  },
  {
    category: "Style",
    name: "Prelacy •",
    rating: "•",
    prerequisites: "Seer Status •••",
    description: "Choose an Exarch to invite into your soul. Take the Mystery Commands Condition."
  },
  {
    category: "Style",
    name: "Prelacy ••",
    rating: "••",
    prerequisites: "Seer Status •••",
    description: "Use the chains of your Exarch as a Yantra equal to half your Prelacy dots."
  },
  {
    category: "Style",
    name: "Prelacy •••",
    rating: "•••",
    prerequisites: "Seer Status •••",
    description: "Receive your Exarch's Patron Attainment."
  },
  {
    category: "Style",
    name: "Prelacy ••••",
    rating: "••••",
    prerequisites: "Seer Status •••",
    description: "Demesnes incorporating your soul stones open Exarchal Verges attuned to your master."
  },
  {
    category: "Style",
    name: "Prelacy (Eye)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Resist Occultation with the Space Arcanum. Take a minimum Weak connection when casting at Sympathetic Range."
  },
  {
    category: "Style",
    name: "Prelacy (Father)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Heal resistant damage with Mana. Store Mana as if your Gnosis were increased by your Prime."
  },
  {
    category: "Style",
    name: "Prelacy (General)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Resist Fighting Merits with the Forces Arcanum. Raise Mage Armor without spending Mana."
  },
  {
    category: "Style",
    name: "Prelacy (Unity)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Resist Doors with the Mind Arcanum. Gain an additional Vice, and recover Mana through your Vices."
  },
  {
    category: "Style",
    name: "Prelacy (Chancellor)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Can use Availability instead of a tool or weapon's normal bonus. Can spend Willpower after taking from a Mana source to make it inert for your days equal to Matter dots."
  },
  {
    category: "Style",
    name: "Prelacy (Raptor)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Ignore a surrender without Willpower cost. Never suffer the Beaten Down Tilt or wound penalties. Add Life Arcanum to Doors."
  },
  {
    category: "Style",
    name: "Prelacy (Prophet)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Gain Strong connection to your past when targeted with Temporal Sympathy. Don't suffer from changes to your past for Time Arcanum in turns."
  },
  {
    category: "Style",
    name: "Prelacy (Nemesis)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "Ephemeral entities are subject to Quiescence. When other mages Scrutinize your magic, spells with ratings up to your Spirit count as rotes."
  },
  {
    category: "Style",
    name: "Prelacy (Ruin)",
    rating: "•••••",
    prerequisites: "Seer Status •••",
    description: "If targeted with a spell, Attainment, Scrutiny, or other supernatural effect that spent Mana or Willpower, steal 1 point of resource(s) spent from caster."
  }
];
 export default MERITS_MAGE;