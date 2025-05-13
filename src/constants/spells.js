export const SPELLS_BY_ARCANUM = {
  DEATH: {
    1: [ // Initiate - Compelling/Knowing/Unveiling
        {
        name: "Ectoplasmic Shaping",
        practice: "Compelling",
        primaryFactor: "Duration",
        withstand: "Resolve",
        roteSkills: ["Crafts", "Occult", "Larceny"],
        description: "Shape and mold ectoplasm, or create Open Condition on an object/location for ghost Manifestation. +1 Reach: Create both shaping and Open Condition simultaneously.",
        source: "MtAw2 p128"
        },
        {
        name: "Deepen Shadows",
        practice: "Compelling",
        primaryFactor: "Duration",
        roteSkills: ["Occult", "Intimidation", "Expression"],
        description: "Apply Poor Light Tilt in area. +1 Reach: Apply Blinded Tilt in area.",
        source: "MtAw2 p128"
        },
        {
        name: "Forensic Gaze",
        practice: "Knowing",
        primaryFactor: "Potency",
        roteSkills: ["Medicine", "Investigation", "Expression"],
        description: "Learn how a subject died. +1 Reach: Witness final moments of corpse's life.",
        source: "MtAw2 p128"
        },
        {
        name: "Shadow Sculpting",
        practice: "Compelling",
        primaryFactor: "Duration",
        roteSkills: ["Crafts", "Science", "Expression"],
        description: "Shape shadows to your liking. +1 Reach: Both shape and animate shadows.",
        source: "MtAw2 p128"
        },
        {
        name: "Soul Marks",
        practice: "Unveiling",
        primaryFactor: "Potency",
        withstand: "Resolve",
        roteSkills: ["Medicine", "Occult", "Empathy"],
        description: "Learn about subject's soul. +1 Reach: Use on unattached souls.",
        source: "MtAw2 p128"
        },
        {
        name: "Speak with the Dead",
        practice: "Unveiling",
        primaryFactor: "Duration",
        roteSkills: ["Socialize", "Expression", "Investigation"],
        description: "Sense/communicate with Twilight ghosts. +1 Reach: Determine anchor type +2 Reach: Cross language barriers.",
        source: "MtAw2 p128"
        }
    ],
    2: [
        {
        name: "Corpse Mask",
        practice: "Veiling",
        primaryFactor: "Duration",
        roteSkills: ["Subterfuge", "Crafts", "Medicine"],
        description: "Alter corpse's apparent time/cause of death. +1 Reach: Affect injured living subjects +2 Reach: Change age/sex completely",
        source: "MtAw2 p129"
        },
        {
        name: "Decay",
        practice: "Ruling",
        primaryFactor: "Potency",
        roteSkills: ["Subterfuge", "Science", "Occult"],
        description: "Age objects to lower Durability. +1 Reach: Decrease Structure instead",
        source: "MtAw2 p129"
        },
        {
        name: "Ectoplasm",
        practice: "Ruling",
        primaryFactor: "Duration",
        roteSkills: ["Occult", "Expression", "Academics"],
        description: "Create ectoplasm from caster's orifices or corpses",
        source: "MtAw2 p129"
        },
        {
        name: "Ghost Shield",
        practice: "Shielding",
        primaryFactor: "Potency",
        roteSkills: ["Occult", "Expression", "Academics"],
        description: "Protects from ghostly Numina/Influences. +1 Reach: Block physical ghost attacks",
        source: "MtAw2 p129"
        },
        {
        name: "Sacrificial Relinquishment",
        practice: "Ruling",
        primaryFactor: "Potency",
        roteSkills: ["Intimidation", "Medicine", "Streetwise"],
        description: "Relinquish spells via blood sacrifice (dozens of animals/few humans)",
        source: "SoS 73"
        },
        {
        name: "Shape Ephemera",
        practice: "Ruling",
        primaryFactor: "Duration",
        withstand: "Stamina",
        roteSkills: ["Crafts", "Expression", "Science"],
        description: "Shape Death-attuned ephemera into objects/armor",
        source: "MtAw2 p129"
        },
        {
        name: "Soul Armor",
        practice: "Shielding",
        primaryFactor: "Duration",
        roteSkills: ["Academics", "Occult", "Survival"],
        description: "Protects soul from hostile magic",
        source: "MtAw2 p129"
        },
        {
        name: "Soul Jar",
        practice: "Ruling",
        primaryFactor: "Duration",
        withstand: "Resolve",
        roteSkills: ["Crafts", "Occult", "Persuasion"],
        description: "Trap unattached souls. +1 Reach: Bind to Soulless host +2 Reach: Make lasting with Mana",
        source: "MtAw2 p129"
        },
        {
        name: "Suppress Aura",
        practice: "Veiling",
        primaryFactor: "Duration",
        withstand: "Resolve",
        roteSkills: ["Subterfuge", "Intimidation", "Medicine"],
        description: "Hide Nimbus from Mage Sight, penalize emotion reading",
        source: "MtAw2 p129"
        },
        {
        name: "Suppress Life",
        practice: "Veiling",
        primaryFactor: "Duration",
        roteSkills: ["Subterfuge", "Medicine", "Academics"],
        description: "Appear as corpse. +2 Reach: Cast reflexively with Mana",
        source: "MtAw2 p130"
        },
        {
        name: "Touch of the Grave",
        practice: "Ruling",
        primaryFactor: "Duration",
        roteSkills: ["Survival", "Crafts", "Persuasion"],
        description: "Interact with Death-Twilight, pull objects to material world",
        source: "MtAw2 p130"
        },
        {
        name: "Without a Trace",
        practice: "Veiling",
        primaryFactor: "Duration",
        roteSkills: ["Science", "Stealth", "Subterfuge"],
        description: "Leave no forensic evidence (fingerprints/DNA/etc)",
        source: "MtAw2 p130"
        }
    ],
    3: [
        {
        name: "Cold Snap",
        practice: "Weaving",
        primaryFactor: "Duration",
        roteSkills: ["Survival", "Intimidation", "Science"],
        description: "Apply Ice Tilt to area. +1 Reach: Add Extreme Cold Tilt",
        source: "MtAw2 p130"
        },
        {
        name: "Damage Ghost",
        practice: "Fraying",
        primaryFactor: "Potency",
        roteSkills: ["Occult", "Intimidation", "Brawl"],
        description: "Deal bashing damage to ghosts in Twilight",
        source: "MtAw2 p130"
        },
        {
        name: "Death Touched Item",
        practice: "Perfecting",
        primaryFactor: "Duration",
        roteSkills: ["Crafts", "Occult", "Subterfuge"],
        description: "Create items that interact with Death-ephemera (Prime •• required). Lasts while in Twilight.",
        source: "SoS 64"
        },
        {
        name: "Devouring the Slain",
        practice: "Fraying",
        primaryFactor: "Potency",
        withstand: "Resolve",
        roteSkills: ["Intimidation", "Medicine", "Persuasion"],
        description: "Steal Willpower/Scour from injured. +1 Reach: Affect healthy subjects +2 Reach: Bypass daily Scour limit +3 Reach: Target ghosts",
        source: "MtAw2 p130"
        },
        {
        name: "Ghost Gate",
        practice: "Weaving",
        primaryFactor: "Duration",
        roteSkills: ["Occult", "Academics", "Expression"],
        description: "Create 2D portal to Death-Twilight. +1 Reach: Direct transformation without portal",
        source: "MtAw2 p130"
        },
        {
        name: "Ghost Summons",
        practice: "Perfecting",
        primaryFactor: "Duration",
        withstand: "Rank",
        roteSkills: ["Persuasion", "Socialize", "Occult"],
        description: "Summon local ghost. +1 Reach: Create Open Condition +2 Reach: Complex commands +3 Reach: Summon from Underworld",
        source: "MtAw2 p131"
        },
        {
        name: "Reaping Relinquishment",
        practice: "Fraying",
        primaryFactor: "Potency",
        roteSkills: ["Intimidation", "Medicine", "Occult"],
        description: "Destroy soul to relinquish spell (Prime •• allows soul stone use)",
        source: "SoS 73"
        },
        {
        name: "Quicken Corpse",
        practice: "Weaving",
        primaryFactor: "Duration",
        roteSkills: ["Medicine", "Crafts", "Persuasion"],
        description: "Create basic zombie. +1 Reach: Combat-ready zombie +2 Reach: Enhanced physical prowess",
        source: "MtAw2 p131"
        },
        {
        name: "Quicken Ghost",
        practice: "Perfecting",
        primaryFactor: "Potency",
        roteSkills: ["Persuasion", "Socialize", "Medicine"],
        description: "Boost ghost Attributes/heal. +2 Reach: Increase Rank (1 Mana cost)",
        source: "MtAw2 p131"
        },
        {
        name: "Rotting Flesh",
        practice: "Perfecting",
        primaryFactor: "Potency",
        roteSkills: ["Intimidation", "Occult", "Empathy"],
        description: "Inflict bashing damage. +1 Reach: Social penalty",
        source: "MtAw2 p132"
        },
        {
        name: "Sever Soul",
        practice: "Fraying",
        primaryFactor: "Potency",
        withstand: "Resolve",
        roteSkills: ["Intimidation", "Athletics", "Expression"],
        description: "Remove soul (Soulless Condition). +1 Reach: Enervated +2 Reach: Thrall Condition",
        source: "MtAw2 p132"
        },
        {
        name: "Shadow Crafting",
        practice: "Weaving",
        primaryFactor: "Duration",
        roteSkills: ["Academics", "Intimidation", "Occult"],
        description: "Shape shadows into solid objects/armor",
        source: "MtAw2 p132"
        },
        {
        name: "Unliving Vessel",
        practice: "Weaving",
        primaryFactor: "Duration",
        withstand: "Resistance",
        roteSkills: ["Crafts", "Occult", "Expression"],
        description: "Prepare undead/ghostly items for Imbue Item (Prime ••• required)",
        source: "SoS 69"
        }
    ],
    4: [
        {
        name: "Enervation",
        practice: "Unraveling",
        primaryFactor: "Potency",
        withstand: "Stamina",
        roteSkills: ["Occult", "Intimidation", "Subterfuge"],
        description: "Inflict Leg Wrack/Arm Wrack Tilt. +1 Reach: Apply Immobilized Tilt",
        source: "MtAw2 p132"
        },
        {
        name: "Exorcism",
        practice: "Unraveling",
        primaryFactor: "Potency",
        withstand: "Rank",
        roteSkills: ["Brawl", "Expression", "Occult"],
        description: "Destroy ghost's Manifestation Conditions. Add Mind 2: Affects Goetia +1 Reach: Block condition recreation",
        source: "MtAw2 p132"
        },
        {
        name: "Goetic Evocation (Death Substitute)",
        practice: "Patterning",
        primaryFactor: "Duration",
        withstand: "Rank",
        roteSkills: ["Intimidation", "Occult", "Persuasion"],
        description: "Convert soul stone fragments into Rank 1 ghost",
        source: "SoS 90"
        },
        {
        name: "Haunted Grimoire",
        practice: "Patterning",
        primaryFactor: "Potency",
        withstand: "Total Arcanum + Rank",
        roteSkills: ["Crafts", "Intimidation", "Occult"],
        description: "Bind ghost to grimoire (Prime • required). Grants Open/Resonant Conditions. Wisdom sin against Understanding",
        source: "SoS 86"
        },
        {
        name: "Revenant",
        practice: "Patterning",
        primaryFactor: "Duration",
        withstand: "Rank",
        roteSkills: ["Craft", "Brawl", "Intimidation"],
        description: "Grant ghost Manifestation Condition. Add Mind 4: Affects Goetia",
        source: "MtAw2 p132"
        },
        {
        name: "Scribe Daimonomikon",
        practice: "Patterning",
        primaryFactor: "Potency",
        withstand: "Rank + (10 - Gnosis)",
        roteSkills: ["Crafts", "Expression", "Occult"],
        description: "Create Legacy tome (Prime • required). +1 Reach: Lasting with Mana",
        source: "SoS 87"
        },
        {
        name: "Shadow Flesh",
        practice: "Patterning",
        primaryFactor: "Duration",
        withstand: "Stamina",
        roteSkills: ["Occult", "Medicine", "Subterfuge"],
        description: "Transform subject into 2D/3D shadow form",
        source: "MtAw2 p132"
        },
        {
        name: "Soul Grafting",
        practice: "Patterning",
        primaryFactor: "Duration",
        withstand: "Composure",
        roteSkills: ["Crafts", "Empathy", "Occult"],
        description: "Fuse soul stones (Prime •••• required). Grants Gnosis bonuses - Wisdom sin against Falling",
        source: "SoS 90"
        },
        {
        name: "Withering",
        practice: "Unraveling",
        primaryFactor: "Potency",
        roteSkills: ["Intimidation", "Medicine", "Science"],
        description: "Inflict lethal damage. +1 Reach: Spend Mana for aggravated damage",
        source: "MtAw2 p133"
        }
    ],
    5: [
        {
        name: "Create Anchor",
        practice: "Making",
        primaryFactor: "Duration",
        withstand: "Resolve",
        roteSkills: ["Crafts", "Occult", "Persuasion"],
        description: "Supernaturally bind subject as ghost's anchor (Anchor Condition)",
        source: "MtAw2 p133"
        },
        {
        name: "Create Avernian Gate",
        practice: "Making",
        primaryFactor: "Duration",
        roteSkills: ["Occult", "Crafts", "Persuasion"],
        description: "Create permanent gateway to Underworld (Death Resonance + Gateway Condition). +1 Reach: Connect to known Underworld locations",
        source: "MtAw2 p133"
        },
        {
        name: "Create Ghost",
        practice: "Making",
        primaryFactor: "Duration",
        roteSkills: ["Occult", "Expression", "Academics"],
        description: "Create Rank 1 loyal ghost. +1 Reach: Spend 1 Mana for Rank 2 ghost",
        source: "MtAw2 p133"
        },
        {
        name: "Deny the Reaper",
        practice: "Unmaking",
        primaryFactor: "Potency",
        roteSkills: ["Medicine", "Occult", "Subterfuge"],
        description: "Reverse aging/decay (months = Potency). +1 Reach: Resurrect recently dead (Soulless Condition)",
        source: "MtAw2 p133"
        },
        {
        name: "Empty Presence",
        practice: "Unmaking",
        primaryFactor: "Duration",
        roteSkills: ["Subterfuge", "Persuasion", "Stealth"],
        description: "Erase all evidence of subject's existence. Ends if subject commits violence",
        source: "MtAw2 p133"
        },
        {
        name: "Sever the Awakened Soul",
        practice: "Unmaking",
        primaryFactor: "Potency",
        withstand: "Resolve",
        roteSkills: ["Crafts", "Intimidation", "Medicine"],
        description: "Remove Awakened mage's soul (Soulless). +1 Reach: Enervated +2 Reach: Thrall Condition",
        source: "MtAw2 p133"
        }
    ]
  },
  FATE: {
    1: [ // Initiate - Compelling/Knowing/Unveiling
        {
        name: "Interconnections",
        practice: "Unveiling",
        primaryFactor: "Potency",
        withstand: "Composure",
        roteSkills: ["Empathy", "Investigation", "Medicine"],
        description: "Reveal sympathetic connections/oath violations. +1 Reach: Detect supernatural mind control +2 Reach: Read destiny aspects",
        source: "MtAw2 p134"
        },
        {
        name: "Oaths Fulfilled",
        practice: "Knowing",
        primaryFactor: "Duration",
        roteSkills: ["Occult", "Politics", "Investigation"],
        description: "Know when subject breaks/fulfills oath. +1 Reach: Vision of event +2 Reach: Track subject",
        source: "MtAw2 p135"
        },
        {
        name: "Quantum Flux",
        practice: "Compelling",
        primaryFactor: "Duration",
        roteSkills: ["Crafts", "Firearms", "Occult"],
        description: "Negate penalties or bank bonuses. 1 turn wait for +3 bonus",
        source: "MtAw2 p135"
        },
        {
        name: "Reading the Outmost Eddies",
        practice: "Compelling",
        primaryFactor: "Potency",
        withstand: "Composure",
        roteSkills: ["Computer", "Persuasion", "Subterfuge"],
        description: "Create minor boon/hex. +1 Reach: Effect within 1 hour",
        source: "MtAw2 p135"
        },
        {
        name: "Serendipity",
        practice: "Knowing",
        primaryFactor: "Potency",
        roteSkills: ["Academics", "Crafts", "Survival"],
        description: "Reveal path to goal. +1 Reach: Substitute Skills +2 Reach: Any Skill substitution",
        source: "MtAw2 p135"
        }
    ],
      2: [
        {
            name: "Exceptional Luck",
            practice: "Ruling",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Intimidation", "Occult", "Socialize"],
            description: "Subject receives boon/hex. +2 Reach: Affects spellcasting +2 Reach: Reflexive cast (1 Mana)",
            source: "MtAw2 p136"
        },
        {
            name: "Fabricate Fortune",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Larceny", "Occult", "Subterfuge"],
            description: "Conceal/falsify fate/destiny signatures. Foils conditional spell triggers",
            source: "MtAw2 p136"
        },
        {
            name: "Fools Rush In",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Socialize", "Streetwise"],
            description: "Ignore untrained penalties. +1 Reach: Gain dice bonus +3 Reach: Bonus to spellcasting",
            source: "MtAw2 p136"
        },
        {
            name: "Lucky Number",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Investigation", "Larceny", "Science"],
            description: "Guarantee first-try success on codes/combinations",
            source: "MtAw2 p136"
        },
        {
            name: "Malleable Thorns",
            practice: "Ruling",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Empathy", "Survival"],
            description: "Alter Hedge paths (Mind •• required). +1 Reach: Create paradigm shifts",
            source: "DE2 p377"
        },
        {
            name: "Shifting the Odds",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Investigation", "Politics", "Subterfuge"],
            description: "Find specific person/place/thing. +1 Reach: 1 hour timeframe",
            source: "MtAw2 p136"
        },
        {
            name: "Warding Gesture",
            practice: "Shielding",
            primaryFactor: "Duration",
            roteSkills: ["Brawl", "Occult", "Subterfuge"],
            description: "Protect against fate-altering magic. +1 Reach: Exclude from caster's spells +2 Reach: Area protection",
            source: "MtAw2 p136"
        }
    ],
      3: [
        {
            name: "Grave Misfortune",
            practice: "Fraying",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Intimidation", "Occult", "Weaponry"],
            description: "Amplify next damage suffered (Potency = extra damage). Immediate resistance roll allowed",
            source: "MtAw2 p137"
        },
        {
            name: "Monkey's Paw",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Drive", "Crafts", "Science"],
            description: "Bless/curse object's equipment bonus. +1 Reach: Affect wielder +1 Reach: Exceed 5-dice cap with Mana",
            source: "MtAw2 p137"
        },
        {
            name: "Shared Fate",
            practice: "Weaving",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Medicine", "Persuasion", "Politics"],
            description: "Link subjects' damage/Conditions. +1 Reach: One-way link +2 Reach: Reflect harm dealt",
            source: "MtAw2 p137"
        },
        {
            name: "Superlative Luck",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Crafts", "Occult"],
            description: "Gain Rote Quality (1 Mana). +2 Reach: Affects rituals (doubles casting time)",
            source: "MtAw2 p137"
        },
        {
            name: "Sworn Oaths",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Occult", "Politics"],
            description: "Supernatural geas enforcement. Boon for compliance/hex for breaking. +1 Reach: Monitor status",
            source: "MtAw2 p137"
        },
        {
            name: "The Right Tool",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Stealth", "Expression"],
            description: "Transform object into needed tool (equipment bonus = Potency). Base 0 for inappropriate items",
            source: "SoS 64"
        },
        {
            name: "Wyrdbound Oaths",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Politics", "Socialize"],
            description: "Enforce fae-style oaths (Mind •• required). Failure inflicts Oathbreaker. +2 Reach: Lasting effect",
            source: "DE2 p379"
        }
    ],
      4: [
        {
            name: "Atonement",
            practice: "Unraveling",
            primaryFactor: "Potency",
            withstand: "Countered Effect's Potency",
            roteSkills: ["Academics", "Occult", "Subterfuge"],
            description: "Lift curses through quest completion. +1 Reach: Others can complete quest for subject",
            source: "MtAw2 p137"
        },
        {
            name: "Chaos Mastery",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Occult", "Science"],
            description: "Control probability outcomes (Potency = simultaneous effects). Examples: Induce seizures, redirect car crashes, reduce actions to chance die",
            source: "MtAw2 p138"
        },
        {
            name: "Divine Intervention",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Resolve",
            roteSkills: ["Intimidation", "Occult", "Subterfuge"],
            description: "Replace Aspiration with magical compulsion. Ill luck when ignoring compulsion/reversed",
            source: "MtAw2 p138"
        },
        {
            name: "Masking the False Fae",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Empathy", "Larceny", "Socialize"],
            description: "Enable Fae Contracts with Supernal beings (Mind • required). Add Death/Mind/Spirit ••••: Ghost/Goetia/Spirit contracts",
            source: "DE2 p376"
        },
        {
            name: "Scribe Daimonomikon",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Rank + (10 - Gnosis)",
            roteSkills: ["Crafts", "Expression", "Occult"],
            description: "Create Legacy manual (Prime • required). +1 Reach: Lasting with 1 Mana",
            source: "SoS 87"
        },
        {
            name: "Strings of Fate",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Academics", "Persuasion", "Stealth"],
            description: "Engineer specific event for subject. +1 Reach: Daily opportunity vs weekly",
            source: "MtAw2 p138"
        },
        {
            name: "Sever Oaths",
            practice: "Unraveling",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Occult", "Subterfuge", "Weaponry"],
            description: "Break supernatural oaths/bindings. +2 Reach: Make dissolution permanent",
            source: "MtAw2 p138"
        }
    ],
      5: [
        {
            name: "Forge Destiny",
            practice: "Making",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Intimidation", "Occult", "Persuasion"],
            description: "Grant supernatural Merits/alter existing ones. Impose Aspirations/Obsessions/Dooms. Wisdom sin against Wisdom 7+",
            source: "MtAw2 p139"
        },
        {
            name: "Miracle",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Persuasion", "Subterfuge"],
            description: "Gain Intercessions (Potency = uses). +1 Reach: Spend Willpower for unlikely events +2 Reach: Spend Mana+Willpower for impossible feats",
            source: "MtAw2 p140"
        },
        {
            name: "Pariah",
            practice: "Unmaking",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Investigation", "Medicine", "Politics"],
            description: "Global hostility toward subject. +1 Reach: Tune curse sensitivity (selective persecution)",
            source: "MtAw2 p139"
        },
        {
            name: "Swarm of Locusts",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Intimidation", "Occult", "Science"],
            description: "Create chaotic Environmental Tilts (player's choice). Forces Sleeper breaking points",
            source: "MtAw2 p140"
        }
    ]
  },
  FORCES: {
    1: [
        {
            name: "Influence Electricity",
            practice: "Compelling",
            primaryFactor: "Duration",
            roteSkills: ["Computers", "Crafts", "Science"],
            description: "Operate/shut down electrical devices. Basic on/off/guidance of currents",
            source: "MtAw2 p140"
        },
        {
            name: "Influence Fire",
            practice: "Compelling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Science", "Survival"],
            description: "Control flame paths. +1 Reach: Modify flame size (up/down 1 Size)",
            source: "MtAw2 p140"
        },
        {
            name: "Kinetic Efficiency",
            practice: "Compelling",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Science", "Survival"],
            description: "Enhance physical movement: +Speed, jump distance, lifting capacity",
            source: "MtAw2 p141"
        },
        {
            name: "Influence Heat",
            practice: "Compelling",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Science", "Survival"],
            description: "Control thermal flow. Protect vs Environments: Lv2 +1 Reach: Lv3 +2 Reach: Lv4",
            source: "MtAw2 p141"
        },
        {
            name: "Nightvision",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Investigation", "Science", "Stealth"],
            description: "Ignore darkness penalties. +1 Reach: Immune to blinding flashes",
            source: "MtAw2 p141"
        },
        {
            name: "Receiver",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Empathy", "Investigation", "Science"],
            description: "Hear subsonic/ultrasonic frequencies",
            source: "MtAw2 p141"
        },
        {
            name: "Tune In",
            practice: "Knowing",
            primaryFactor: "Duration",
            roteSkills: ["Computers", "Empathy", "Science"],
            description: "Perceive electromagnetic transmissions (WiFi/radio/cell signals)",
            source: "MtAw2 p141"
        }
    ],
      2: [
        {
            name: "Control Electricity",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Computers", "Science"],
            description: "Redirect/divide currents (no amplification). Example: Steal building's power for single outlet",
            source: "MtAw2 p142"
        },
        {
            name: "Control Fire",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Science", "Survival"],
            description: "Adjust flame size/heat (Size ±1 per Potency). Create fire from existing sources",
            source: "MtAw2 p142"
        },
        {
            name: "Control Gravity",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Occult", "Science"],
            description: "Redirect gravity vectors (up/sideways). 45° angles default, sharper with Reach",
            source: "MtAw2 p142"
        },
        {
            name: "Control Heat",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Science", "Survival"],
            description: "Modify temperatures (create Extreme Environment). +1 Reach: Gradual changes",
            source: "MtAw2 p142"
        },
        {
            name: "Control Light",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Investigation", "Science"],
            description: "Focus/disperse light, alter wavelengths. +1 Reach: Create Blinded Tilt/substantial cover",
            source: "MtAw2 p142"
        },
        {
            name: "Control Sound",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Stealth", "Science"],
            description: "Amplify/muffle sounds. +1 Reach: Echo effects (-Stealth) +1 Reach: Boost hearing perception",
            source: "MtAw2 p142"
        },
        {
            name: "Control Weather",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Science", "Survival"],
            description: "Modify local weather (Extreme Environment 4 max). +1 Reach: Slow transitions +2 Reach: Drastic changes",
            source: "MtAw2 p143"
        },
        {
            name: "Environmental Shield",
            practice: "Shielding",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Science", "Survival"],
            description: "Resist Environmental Tilts/Conditions. Stack with armor",
            source: "MtAw2 p143"
        },
        {
            name: "Invisibility",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Larceny", "Science", "Stealth"],
            description: "Full visual cloaking. Doesn't mask sound/scent",
            source: "MtAw2 p143"
        },
        {
            name: "Kinetic Blow",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Brawl", "Science"],
            description: "Boost unarmed damage. +1 Reach: Knocked Down +1 Reach: Stunned +1 Reach: Affect weapons +2 Reach: Armor Piercing bullets",
            source: "MtAw2 p143"
        },
        {
            name: "Transmission",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Expression", "Science"],
            description: "Hijack/redirect signals. +1 Reach: Encrypt communications",
            source: "MtAw2 p144"
        },
        {
            name: "Zoom In",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Investigation", "Science", "Survival"],
            description: "Magnify vision. +1 Reach: Miles-range +1 Reach: Microscopic +1 Reach: Ignore atmospheric penalties +2 Reach: Molecular-level sight",
            source: "MtAw2 p144"
        }
    ],
    3: [
        {
            name: "Call Lightning",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Firearms", "Science"],
            description: "Summon lightning from existing storm. +1 Reach: Create storm simultaneously (requires Control Weather)",
            source: "MtAw2 p144"
        },
        {
            name: "Data Hog",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Computer", "Larceny", "Persuasion"],
            description: "Boost/reduce device data processing by Potency. Affects storage/transfer/acceptance capabilities",
            source: "SoS 65"
        },
        {
            name: "Energize Object",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Larceny", "Science"],
            description: "Prime objects to store spells (Prime •• required). 1 Mana to activate stored effect. Potency = max spell level",
            source: "SoS 69"
        },
        {
            name: "Gravitic Supremacy",
            practice: "Fraying/Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Science", "Survival"],
            description: "Increase/decrease gravity in area. Potency = multiplier (2x, 0.5x, etc)",
            source: "MtAw2 p144"
        },
        {
            name: "Perpetual Motion",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Science", "Survival"],
            description: "Remove energy requirements for devices. Infinite operation while spell lasts",
            source: "SoS 65"
        },
        {
            name: "Rapid Access Memory",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Larceny", "Science"],
            description: "Imbue software with spell effects (Prime ••• required). Activates when run on computer",
            source: "SoS 69"
        },
        {
            name: "Telekinesis",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Brawl", "Science"],
            description: "Remote object manipulation. Potency split between Strength/Dexterity. +1 Reach: Split between 2 Attributes +2 Reach: Any Physical split",
            source: "MtAw2 p144"
        },
        {
            name: "Telekinetic Strike",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Firearms", "Science"],
            description: "Kinetic attack deals bashing. +1 Reach: Apply Knocked Down/Stunned Tilt",
            source: "MtAw2 p145"
        },
        {
            name: "Turn Momentum",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Firearms", "Science"],
            description: "Deflect projectiles. +1 Reach: Reflexive cast +1 Reach: Control deflection angle +2 Reach: Reverse trajectories Add Time 1: Affect hypervelocity objects",
            source: "MtAw2 p145"
        },
        {
            name: "Velocity Control",
            practice: "Fraying/Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Firearms", "Science"],
            description: "Alter object speed. Decrease for defense boost/increase for damage",
            source: "MtAw2 p145"
        }
    ],
  4: [
        {
            name: "Electromagnetic Pulse",
            practice: "Unraveling",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Computers", "Science"],
            description: "EMP blast fries electronics. Military/shielded devices resist. Magical items: Clash of Wills. Living targets take damage as attack spell",
            source: "MtAw2 p145"
        },
        {
            name: "Levitation",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Stamina",
            roteSkills: ["Athletics", "Science", "Survival"],
            description: "Float subject in place. +1 Reach: Retain momentum +1 Reach: Free flight (Speed = Gnosis + Potency)",
            source: "MtAw2 p145"
        },
        {
            name: "Rend Friction",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Drive", "Science"],
            description: "Modify friction. Increase: Lethal damage from heat. Decrease: Objects slide endlessly",
            source: "MtAw2 p145"
        },
        {
            name: "Thunderbolt",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Firearms", "Science"],
            description: "Deal lethal lightning damage. +1 Reach: Ignite flammables +1 Reach: 1 Mana for aggravated damage",
            source: "MtAw2 p146"
        },
        {
            name: "Transform Energy",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Occult", "Science"],
            description: "Convert energy types (e.g., heat→light). +1 Reach: Downgrade energy +1 Reach: Split streams +1 Reach: 1 Mana to upgrade energy",
            source: "MtAw2 p146"
        }
    ],
    5: [
        {
            name: "Adverse Weather",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Occult", "Science"],
            description: "Create Extreme Environments (any type, Lv4 max). +1 Reach: Ignore local climate norms",
            source: "MtAw2 p146"
        },
        {
            name: "Create Energy",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Occult", "Science"],
            description: "Generate energy ex nihilo (sunlight/radiation/etc). Duration dictates total output",
            source: "MtAw2 p146"
        },
        {
            name: "Eradicate Energy",
            practice: "Unmaking",
            primaryFactor: "Potency",
            roteSkills: ["Intimidation", "Science", "Survival"],
            description: "Annihilate energy explosively. Lethal to living subjects (instant death). Roll Potency vs Durability for objects",
            source: "MtAw2 p146"
        },
        {
            name: "Earthquake",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Science", "Survival"],
            description: "Structural damage in area. Earthquake-resistant buildings subtract Durability from damage",
            source: "MtAw2 p147"
        },
        {
            name: "Self-Repairing Machine",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Medicine", "Occult"],
            description: "Machine heals Structure: Potency/day. +1 Reach: Hourly +2 Reach: Every 15min",
            source: "MtAw2 p159"
        }
    ]
    // Continue through Forces 5...
  },
  LIFE: {
    1: [
        {
            name: "Analyze Life",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Medicine", "Investigation", "Survival"],
            description: "Study biological patterns. Learn species/age/sex/health. Supernatural beings show as 'unknown'. +1 Reach: Specific Physical Attribute assessment",
            source: "MtAw2 p148"
        },
        {
            name: "Cleanse the Body",
            practice: "Compelling",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Medicine", "Survival"],
            description: "Enhance toxin resistance. +1 Reach: Immediate resistance roll",
            source: "MtAw2 p148"
        },
        {
            name: "Heightened Senses",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Empathy", "Investigation", "Survival"],
            description: "Sharpen chosen senses. +1 Reach: Track by scent +2 Reach: 360° awareness",
            source: "MtAw2 p149"
        },
        {
            name: "Speak With Beasts",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Animal Ken", "Empathy", "Survival"],
            description: "Communicate with specific species. +1 Reach: All animals",
            source: "MtAw2 p148"
        },
        {
            name: "Web of Life",
            practice: "Knowing",
            primaryFactor: "Duration",
            roteSkills: ["Investigation", "Medicine", "Survival"],
            description: "Detect lifeforms by type in area. Differentiate species",
            source: "MtAw2 p148"
        }
    ],
    2: [
        {
            name: "Body Control",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Medicine", "Survival"],
            description: "Slow metabolism/heartrate. Effects: ↑Initiative, eliminate odors, ½ bashing heal time. +1 Reach: 1/0 Armor +2 Reach: ½ lethal heal time",
            source: "MtAw2 p148"
        },
        {
            name: "Control Instincts",
            practice: "Ruling",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Animal Ken", "Intimidation", "Persuasion"],
            description: "Trigger instinctual responses (fight/flight/feed). Supernaturals resist with Clash of Wills",
            source: "MtAw2 p149"
        },
        {
            name: "Lure and Repel",
            practice: "Ruling",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Animal Ken", "Persuasion", "Survival"],
            description: "Create attraction/repulsion field. +1 Reach: Simple favors +1 Reach: Social first impression modifier",
            source: "MtAw2 p149"
        },
        {
            name: "Mutable Mask",
            practice: "Veiling",
            primaryFactor: "Duration",
            withstand: "Stamina",
            roteSkills: ["Medicine", "Stealth", "Subterfuge"],
            description: "Illusory appearance changes. +2 Reach: Perfect replica (fingerprints/biometrics)",
            source: "MtAw2 p149"
        },
        {
            name: "Purge Illness",
            practice: "Ruling",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Medicine", "Survival"],
            description: "Cure diseases. Potency vs disease rating: Reduce/eliminate infection",
            source: "MtAw2 p149"
        }
    ],
      3: [
        {
            name: "Bruise Flesh",
            practice: "Fraying",
            primaryFactor: "Potency",
            roteSkills: ["Brawl", "Intimidation", "Medicine"],
            description: "Inflict bashing damage. +1 Reach: -1 penalty to wound penalties",
            source: "MtAw2 p150"
        },
        {
            name: "Contact High",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Medicine", "Occult", "Science"],
            description: "Create contact toxin. Potency = Initiative boost/penalty. Affects touchers +1 Reach: Caster immunity",
            source: "SoS 65"
        },
        {
            name: "Degrading the Form",
            practice: "Fraying",
            primaryFactor: "Duration",
            withstand: "Stamina",
            roteSkills: ["Brawl", "Medicine", "Survival"],
            description: "Reduce Physical Attribute. +1 Reach: Affect second Attribute",
            source: "MtAw2 p150"
        },
        {
            name: "Honing the Form",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Medicine", "Survival"],
            description: "Boost Physical Attribute (max normal). +1 Reach: Two Attributes +1 Reach: 1 Mana to exceed limits",
            source: "MtAw2 p150"
        },
        {
            name: "Knit",
            practice: "Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Medicine", "Survival"],
            description: "Heal 2 bashing per Potency. +1 Reach: Cure Tilts +1 Reach: Heal deprivation +1 Reach: 2 lethal/Potency",
            source: "MtAw2 p150"
        },
        {
            name: "Living Vessel",
            practice: "Weaving",
            primaryFactor: "Duration",
            withstand: "Stamina",
            roteSkills: ["Academics", "Medicine", "Persuasion"],
            description: "Prepare living subjects for Imbue Item (Prime ••• required)",
            source: "SoS 69"
        },
        {
            name: "Many Faces",
            practice: "Weaving",
            primaryFactor: "Duration",
            withstand: "Stamina",
            roteSkills: ["Medicine", "Stealth", "Subterfuge"],
            description: "Physical transformation (no limb restoration). Add Time 3: Age manipulation",
            source: "MtAw2 p150"
        },
        {
            name: "Steal Life Force",
            practice: "Fraying",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Crafts", "Medicine", "Persuasion"],
            description: "Corrupt Imbued Items to damage users (1L per missing Mana)",
            source: "SoS 72"
        },
        {
            name: "Transform Life",
            practice: "Weaving",
            primaryFactor: "Potency",
            withstand: "Stamina",
            roteSkills: ["Animal Ken", "Science", "Survival"],
            description: "Grant biological features (gills/claws/etc). +2 Reach: Heritable changes",
            source: "MtAw2 p150"
        }
    ],
  4: [
        {
            name: "Accelerate Growth",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Stamina",
            roteSkills: ["Animal Ken", "Medicine", "Science"],
            description: "Rapid aging. Death if exceeding lifespan. +1 Reach: Stressful de-aging (Stamina roll)",
            source: "MtAw2 p151"
        },
        {
            name: "Animal Minion",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Stamina",
            roteSkills: ["Animal Ken", "Science", "Survival"],
            description: "Full-body puppetry. Caster body inert. +1 Reach: Natural behavior masking",
            source: "MtAw2 p151"
        },
        {
            name: "Life-Force Assault",
            practice: "Unraveling",
            primaryFactor: "Potency",
            roteSkills: ["Brawl", "Intimidation", "Medicine"],
            description: "Deal lethal damage. +1 Reach: -2 wound penalties +1 Reach: 1 Mana for aggravated",
            source: "MtAw2 p152"
        },
        {
            name: "Living Grimoire",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Medicine", "Occult"],
            description: "Tattoo rotes on living flesh (Prime •••• required). Wisdom sin against Understanding",
            source: "SoS 85"
        },
        {
            name: "Mend",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Medicine", "Survival"],
            description: "Heal 2 lethal/Potency. +1 Reach: Erase scars +1 Reach: 1 Mana for aggravated healing",
            source: "MtAw2 p152"
        },
        {
            name: "Regeneration",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Medicine", "Survival"],
            description: "Regrow limbs/organs (1 Mana cost)",
            source: "MtAw2 p152"
        },
        {
            name: "Shapechanging",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Stamina",
            roteSkills: ["Animal Ken", "Science", "Survival"],
            description: "Transform into creature. Add Matter 4: Gear transformation +1 Reach: Swarm form +1 Reach: Retain cognition",
            source: "MtAw2 p152"
        }
    ],
  5: [
        {
            name: "Create Life",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Medicine", "Science", "Survival"],
            description: "Design organisms. Add Mind 5: True intelligence. +1 Reach: Inheritable features",
            source: "MtAw2 p153"
        },
        {
            name: "Contagion",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Medicine", "Occult", "Science"],
            description: "Engineer diseases. +1 Reach: Novel pathogens (Wisdom sin)",
            source: "MtAw2 p153"
        },
        {
            name: "Salt the Earth",
            practice: "Unmaking",
            primaryFactor: "Duration",
            roteSkills: ["Medicine", "Science", "Survival"],
            description: "Create lifeless zone (Extreme Environment = Potency). +1 Reach: Additional -1 wound penalty",
            source: "MtAw2 p153"
        }
    ]
  },
  MATTER: {
    1: [ // Initiate - Compelling/Knowing/Unveiling
        {
            name: "Craftsmen's Eye",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Investigation", "Science"],
            description: "Analyze object's purpose/defects. +1 Reach: 8-Again usage +2 Reach: All uses revealed Add Fate 1: Task-specific object detection",
            source: "MtAw2 p154"
        },
        {
            name: "Detect Substance",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Investigation", "Science"],
            description: "Sense specific materials. Add Time 1: Track historical presence Add Forces 1: Detect data types",
            source: "MtAw2 p154"
        },
        {
            name: "Discern Composition",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Investigation", "Science"],
            description: "Reveal material properties. +1 Reach: Hidden compartments +1 Reach: Weak spots (-Durability) Add Space 2: Origin analysis",
            source: "MtAw2 p154"
        },
        {
            name: "Lodestone",
            practice: "Compelling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Larceny", "Science"],
            description: "Attract/repel substance type. Size limit based on Scale",
            source: "MtAw2 p154"
        },
        {
            name: "Remote Control",
            practice: "Compelling",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Drive", "Intimidation"],
            description: "Operate machines remotely. +1 Reach: Complex operations",
            source: "MtAw2 p155"
        }
    ],
    2: [ // Apprentice - Ruling/Shielding/Veiling
        {
            name: "Alchemist's Touch",
            practice: "Shielding",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Survival", "Persuasion"],
            description: "Immunity to material harm. +1 Reach: Additional materials +2 Reach: Aggravated protection Add Forces 2: Thermal resistance",
            source: "MtAw2 p155"
        },
        {
            name: "Find the Balance",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Persuasion", "Science"],
            description: "Enhance tools (9-Again). +1 Reach: 8-Again quality",
            source: "MtAw2 p155"
        },
        {
            name: "Hidden Hoard",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Larceny", "Occult", "Subterfuge"],
            description: "Conceal objects from detection. Clash vs supernatural senses",
            source: "MtAw2 p156"
        },
        {
            name: "Machine Invisibility",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Larceny", "Science", "Stealth"],
            description: "Hide from sensors. +1 Reach: Affect magical constructs",
            source: "MtAw2 p156"
        },
        {
            name: "Shaping",
            practice: "Ruling",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Expression", "Persuasion"],
            description: "Mold liquids/gases. +1 Reach: Alter solids (-equipment) +1 Reach: Reduce craft time +2 Reach: Environmental Tilts",
            source: "MtAw2 p156"
        }
    ],
    3: [ // Disciple - Fraying/Perfecting/Weaving
        {
            name: "Aegis",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Crafts", "Science"],
            description: "Enhance armor: ±Ballistic/General armor, ±Defense penalty. +1 Reach: Ignore Armor Piercing",
            source: "MtAw2 p156"
        },
        {
            name: "Alter Conductivity",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Computer", "Science", "Subterfuge"],
            description: "Modify electrical resistance. +1 Reach: Other energy types",
            source: "MtAw2 p156"
        },
        {
            name: "Alter Integrity",
            practice: "Fraying/Perfecting",
            primaryFactor: "Potency",
            withstand: "Durability",
            roteSkills: ["Crafts", "Medicine", "Subterfuge"],
            description: "Change Durability/Structure. +1 Reach: Ignore Durability +2 Reach: Lasting effect",
            source: "MtAw2 p156"
        },
        {
            name: "Crucible",
            practice: "Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Occult", "Science"],
            description: "Enhance tools (8-Again). +1 Reach: Rote quality (Mana) +1 Reach: Triple Availability",
            source: "MtAw2 p157"
        },
        {
            name: "Nigredo and Albedo",
            practice: "Fraying/Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Brawl", "Medicine"],
            description: "Repair/damage Structure. +1 Reach: Bypass Durability",
            source: "MtAw2 p157"
        },
        {
            name: "Shrink and Grow",
            practice: "Weaving",
            primaryFactor: "Potency",
            withstand: "Durability",
            roteSkills: ["Crafts", "Expression", "Science"],
            description: "Resize objects. Add Life 3: Affect living subjects",
            source: "MtAw2 p157"
        },
        {
            name: "Spell Potion",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Medicine", "Subterfuge"],
            description: "Store spells in consumables (Prime •• required). Mana activation",
            source: "SoS 70"
        },
        {
            name: "State Change",
            practice: "Weaving",
            primaryFactor: "Duration",
            withstand: "Durability",
            roteSkills: ["Crafts", "Persuasion", "Science"],
            description: "Alter matter states. +1 Reach: Sublimation Add Forces 3: Plasma conversion",
            source: "MtAw2 p157"
        },
        {
            name: "Windstrike",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Brawl", "Crafts"],
            description: "Air blast deals bashing. +1 Reach: Environmental Tilt",
            source: "MtAw2 p157"
        },
        {
            name: "Wonderful Machine",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Politics", "Science"],
            description: "Combine machines. Add Life 3: Merge with biology",
            source: "MtAw2 p157"
        }
    ],
    4: [ // Adept - Patterning/Unraveling
        {
            name: "Endless Bounty",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Science", "Streetwise"],
            description: "Never run out of small consumables (ammo/fuel/etc)",
            source: "SoS 66"
        },
        {
            name: "Forge Dumanium",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Expression", "Persuasion"],
            description: "Create mana-storing alloy (1 Mana). +2 Reach: Lasting perfection",
            source: "SoS 62"
        },
        {
            name: "Forge Sophis",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Occult", "Science"],
            description: "Create mana-scavenging alloy. +2 Reach: Lasting perfection",
            source: "SoS 62"
        },
        {
            name: "Forge Thaumium",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Occult", "Survival"],
            description: "Create magic-resistant alloy. +2 Reach: Lasting perfection Add Other Arcanum 2: Specific resistance",
            source: "SoS 62"
        },
        {
            name: "Ghostwall",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Occult", "Stealth"],
            description: "Make objects intangible. Add Death/Mind/Spirit 3: Phase into Twilight",
            source: "MtAw2 p158"
        },
        {
            name: "Golem",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Expression", "Occult"],
            description: "Animate objects. Add Death/Spirit 4: Spirit intelligence Add Mind 5: True sentience",
            source: "MtAw2 p158"
        },
        {
            name: "Piercing Earth",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Brawl", "Crafts"],
            description: "Deal lethal damage. +1 Reach: Environmental Tilt +1 Reach: Aggravated (Mana)",
            source: "MtAw2 p158"
        },
        {
            name: "Transubstantiation",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Empathy", "Science"],
            description: "Transform matter types. +1 Reach: Multiple materials Add Life 4: Create life",
            source: "MtAw2 p158"
        }
    ],
    5: [ // Master - Making/Unmaking
        {
            name: "Annihilate Matter",
            practice: "Unmaking",
            primaryFactor: "Potency",
            withstand: "Durability",
            roteSkills: ["Athletics", "Intimidation", "Science"],
            description: "Destroy matter. +1 Reach: Destroy magic items (Mana)",
            source: "MtAw2 p158"
        },
        {
            name: "Ex Nihilo",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Expression", "Science"],
            description: "Create objects from nothing. +1 Reach: Complex electronics",
            source: "MtAw2 p158"
        },
        {
            name: "Self-Repairing Machine",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Medicine", "Occult"],
            description: "Automatic Structure repair. +1 Reach: Hourly +2 Reach: 15min intervals",
            source: "MtAw2 p159"
        }
    ]
  },
  MIND: {
    1: [
        {
            name: "Know Nature",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Science", "Subterfuge"],
            description: "Reveal Virtue/Vice/Mental+Social Attributes. +1 Reach: Aspirations/Obsessions",
            source: "MtAw2 p159"
        },
        {
            name: "Mental Scan",
            practice: "Unveiling",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Empathy", "Investigation", "Occult"],
            description: "Read emotional/mental state. +1 Reach: Surface thought snippets",
            source: "MtAw2 p159"
        },
        {
            name: "One Mind, Two Thoughts",
            practice: "Compelling",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Expression", "Science"],
            description: "Simultaneous Mental/Social tasks. +1 Reach: Dual instant actions +2 Reach: Astral physical actions",
            source: "MtAw2 p159"
        },
        {
            name: "Perfect Recall",
            practice: "Unveiling",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Expression", "Investigation"],
            description: "Photographic memory retrieval",
            source: "MtAw2 p160"
        }
    ],
    2: [
        {
            name: "Alter Mental Pattern",
            practice: "Veiling",
            primaryFactor: "Potency",
            roteSkills: ["Science", "Stealth", "Subterfuge"],
            description: "Mask surface thoughts/emotions. Clash vs supernatural perception",
            source: "MtAw2 p160"
        },
        {
            name: "Dream Reaching",
            practice: "Ruling",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Empathy", "Medicine", "Persuasion"],
            description: "Enter/affect dreams. +1 Reach: Lucid dreaming",
            source: "MtAw2 p160"
        },
        {
            name: "Emotional Urging",
            practice: "Ruling",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Empathy", "Intimidation", "Subterfuge"],
            description: "Open/close Social Doors",
            source: "MtAw2 p160"
        },
        {
            name: "First Impressions",
            practice: "Ruling",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Crafts", "Socialize", "Subterfuge"],
            description: "Modify initial Impression levels",
            source: "MtAw2 p160"
        },
        {
            name: "Incognito Presence",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Empathy", "Stealth", "Subterfuge"],
            description: "Psychic invisibility. Clash vs supernatural detection",
            source: "MtAw2 p160"
        },
        {
            name: "Memory Hole",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Medicine", "Subterfuge"],
            description: "Suppress memories (Potency = number hidden)",
            source: "MtAw2 p160"
        },
        {
            name: "Mental Shield",
            practice: "Shielding",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Intimidation", "Survival"],
            description: "Block mental attacks. +1 Reach: Physical goetic defense",
            source: "MtAw2 p160"
        }
    ],
    3: [
        {
            name: "Augment Mind",
            practice: "Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Expression", "Survival"],
            description: "Boost Mental/Social Attributes. +1 Reach: Multiple Attributes +2 Reach: Exceed limits (Mana)",
            source: "MtAw2 p161"
        },
        {
            name: "Befuddle",
            practice: "Fraying",
            primaryFactor: "Potency",
            withstand: "Composure/Resolve",
            roteSkills: ["Intimidation", "Persuasion", "Science"],
            description: "Reduce Mental/Social Attributes. +1 Reach: Multiple Attributes",
            source: "MtAw2 p163"
        },
        {
            name: "Clear Thoughts",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Empathy", "Intimidation", "Persuasion"],
            description: "Suppress Conditions/Tilts. +1 Reach: Gain Willpower +2 Reach: Lasting",
            source: "MtAw2 p161"
        },
        {
            name: "Enhance Skill",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Expression", "Survival"],
            description: "Boost Skills (existing dots). +1 Reach: Multiple Skills +2 Reach: Exceed limits (Mana)",
            source: "MtAw2 p161"
        },
        {
            name: "Imposter",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Persuasion", "Stealth", "Subterfuge"],
            description: "Perfect disguise. Manipulation+Subterfuge to maintain",
            source: "MtAw2 p162"
        },
        {
            name: "Psychic Assault",
            practice: "Fraying",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Intimidation", "Medicine"],
            description: "Bashing damage + mental penalties. Potency = damage",
            source: "MtAw2 p162"
        },
        {
            name: "Universal Language",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Investigation", "Persuasion"],
            description: "Understand any communication form. No High Speech writing/speaking",
            source: "MtAw2 p162"
        }
    ],
    4: [
        {
            name: "Gain Skill",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Expression", "Science"],
            description: "Temporarily acquire Skills. +1 Reach: Multiple Skills +1 Reach: Exceed limits (Mana)",
            source: "MtAw2 p163"
        },
        {
            name: "Hallucination",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Academics", "Persuasion", "Subterfuge"],
            description: "Create multisensory illusions. +1 Reach: Tactile elements",
            source: "MtAw2 p163"
        },
        {
            name: "Mind Flay",
            practice: "Unraveling",
            primaryFactor: "Potency",
            roteSkills: ["Expression", "Intimidation", "Science"],
            description: "Lethal damage + Insane Tilt. +2 Reach: Aggravated (Mana)",
            source: "MtAw2 p164"
        },
        {
            name: "Psychic Reprogramming",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Resolve",
            roteSkills: ["Intimidation", "Medicine", "Persuasion"],
            description: "Alter Virtue/Vice/Aspirations. +1 Reach: Swap Social Attributes",
            source: "MtAw2 p164"
        },
        {
            name: "Terrorize",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Expression", "Intimidation", "Medicine"],
            description: "Inflict Insensate Tilt. +1 Reach: Broken Condition",
            source: "MtAw2 p164"
        }
    ],
    5: [
        {
            name: "Amorality",
            practice: "Unmaking",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Crafts", "Empathy", "Expression"],
            description: "Remove Virtue/Vice. Without Vice: No breaking points",
            source: "MtAw2 p164"
        },
        {
            name: "Mind Wipe",
            practice: "Unmaking",
            primaryFactor: "Potency",
            withstand: "Resolve",
            roteSkills: ["Academics", "Intimidation", "Occult"],
            description: "Erase memories (Potency = months). +1 Reach: Selective +2 Reach: Permanent",
            source: "MtAw2 p164"
        },
        {
            name: "Psychic Genesis",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Expression", "Science"],
            description: "Create Rank 1 Goetia. +1 Reach: Sleepwalker assistant +1 Reach: Rank 2 (Mana)",
            source: "MtAw2 p165"
        },
        {
            name: "Social Networking",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Persuasion", "Politics", "Socialize"],
            description: "Gain temporary Merits (Allies/Contacts/Status)",
            source: "MtAw2 p165"
        }
    ]
  },
  PRIME: {
    1: [
        {
            name: "Dispel Magic",
            practice: "Compelling",
            primaryFactor: "Potency",
            withstand: "Spell's Arcanum",
            roteSkills: ["Athletics", "Intimidation", "Occult"],
            description: "Suppress/destroy active spells. Add Fate 1: Selective suppression +2 Reach: Lasting effect",
            source: "MtAw2 p165"
        },
        {
            name: "Nimbus Tuning",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Investigation", "Occult"],
            description: "Analyze spell signatures: Gnosis/Wisdom/Path/Obsession/Paradox",
            source: "SoS 94"
        },
        {
            name: "Pierce Deception",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Investigation", "Medicine", "Occult"],
            description: "See through illusions/mundane lies. +1 Reach: Sense core truth",
            source: "MtAw2 p165"
        },
        {
            name: "Sacred Geometry",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Occult", "Survival"],
            description: "Detect ley lines/nodes. +1 Reach: Hallows Add Death/Spirit 1: Avernian Gates/Loci",
            source: "MtAw2 p166"
        },
        {
            name: "Scribe Grimoire",
            practice: "Compelling",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Expression", "Occult"],
            description: "Create rote repository. +1 Reach: Permanent Add Forces 2: Ethereal transcription",
            source: "MtAw2 p166"
        },
        {
            name: "Shared Mage Sight",
            practice: "Unveiling",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Expression", "Investigation", "Occult"],
            description: "Grant Mage Sight to others. Prime 4: Works on Sleepwalkers",
            source: "SoS 28"
        },
        {
            name: "Supernal Signature",
            practice: "Compelling",
            primaryFactor: "Potency",
            roteSkills: ["Expression", "Intimidation", "Politics"],
            description: "Mark subjects with Nimbus signature. Impedes Social maneuvering",
            source: "SoS 93"
        },
        {
            name: "Supernal Vision",
            practice: "Unveiling",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Occult", "Survival"],
            description: "See Supernal truth. +1 Reach: Detect other magic types",
            source: "MtAw2 p166"
        },
        {
            name: "Word of Command",
            practice: "Compelling",
            primaryFactor: "Potency",
            roteSkills: ["Craft", "Occult", "Persuasion"],
            description: "Activate magical triggers. Add Any Arcanum 1: Cross-splat activation",
            source: "MtAw2 p166"
        }
    ],
    2: [
        {
            name: "As Above, So Below",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Occult", "Politics"],
            description: "Empower Yantras: 9-again → 8-again",
            source: "MtAw2 p166"
        },
        {
            name: "Cloak Nimbus",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Politics", "Stealth", "Subterfuge"],
            description: "Hide magical aura. +1 Reach: Mask Gnosis/Mana/Arcana ratings",
            source: "MtAw2 p167"
        },
        {
            name: "Fractured Grimoire",
            practice: "Ruling",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Investigation", "Occult"],
            description: "Split grimoire into parts (1 Mana). +1 Reach: Multiple fragments",
            source: "SoS 84"
        },
        {
            name: "Invisible Runes",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Intimidation", "Persuasion"],
            description: "High Speech inscriptions visible only to Mage Sight",
            source: "MtAw2 p167"
        },
        {
            name: "Light Under a Bushel",
            practice: "Shielding",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Investigation", "Subterfuge"],
            description: "Delay Nimbus leakage into Mysteries",
            source: "SoS 28"
        },
        {
            name: "Nimbus Forgery",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Larceny", "Subterfuge"],
            description: "Imitate others' Nimbus. +1 Reach: Full triad forgery",
            source: "SoS 94"
        },
        {
            name: "Path to Jerusalem",
            practice: "Veiling",
            primaryFactor: "Potency",
            roteSkills: ["Expression", "Larceny", "Subterfuge"],
            description: "Obfuscate Mysteries. +1 Reach: Plant false Clues",
            source: "SoS 28"
        },
        {
            name: "Supernal Veil",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Subterfuge", "Survival"],
            description: "Hide supernatural phenomena. Clash vs Active Mage Sight",
            source: "MtAw2 p168"
        },
        {
            name: "Sustain Nimbus",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Investigation", "Survival"],
            description: "Preserve Signature Nimbus. +2 Reach: Lasting",
            source: "SoS 93"
        },
        {
            name: "Words of Truth",
            practice: "Ruling",
            primaryFactor: "Potency",
            roteSkills: ["Expression", "Intimidation", "Persuasion"],
            description: "Universal communication + social manipulation. Potency = Doors removed/impression levels",
            source: "MtAw2 p168"
        }
    ],
    3: [
        {
            name: "Aetheric Winds",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Expression", "Occult"],
            description: "Supernal wind attack. +1 Reach: Destroy Mana instead of damage",
            source: "MtAw2 p168"
        },
        {
            name: "Camera Obscura",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Craft", "Expression", "Science"],
            description: "Record Supernal energies (1 Mana). +2 Reach: Lasting recordings",
            source: "SoS 28"
        },
        {
            name: "Channel Mana",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Occult", "Politics", "Socialize"],
            description: "Transfer Mana between vessels. +1 Reach: Bypass per-turn limits",
            source: "MtAw2 p168"
        },
        {
            name: "Cleanse Pattern",
            practice: "Fraying",
            primaryFactor: "Potency",
            roteSkills: ["Investigation", "Occult", "Stealth"],
            description: "Remove Nimbus/Signature traces",
            source: "MtAw2 p168"
        },
        {
            name: "Display of Power",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Brawl", "Occult", "Socialize"],
            description: "Reveal Imagos. +2 Reach: Rote counterspelling Add Fate 1: Expose fae Contracts",
            source: "MtAw2 p168"
        },
        {
            name: "Geomancy",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Expression", "Occult"],
            description: "Redirect ley lines/change Node Resonance",
            source: "MtAw2 p169"
        },
        {
            name: "Imbue Room",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Larceny", "Occult", "Science"],
            description: "Prepare space for spell storage (Space 3 required)",
            source: "SoS 69"
        },
        {
            name: "Mana Battery",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Occult", "Subterfuge"],
            description: "Create Mana storage items. Successes = Mana capacity",
            source: "SoS 70"
        },
        {
            name: "Platonic Form",
            practice: "Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Crafts", "Expression"],
            description: "Create Tass objects (1+ Mana). +1 Reach: Tool bonus +2 Reach: Complex devices",
            source: "MtAw2 p169"
        },
        {
            name: "Primary Subject",
            practice: "Weaving",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Intimidation", "Occult", "Subterfuge"],
            description: "Force Imbued Items to target user (1+ Mana)",
            source: "SoS 72"
        },
        {
            name: "Reveal Marks",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Expression", "Investigation"],
            description: "Expose all Nimbus signatures. +1 Reach: Bonus to Clashes",
            source: "SoS 74"
        },
        {
            name: "Scribe Palimpsest",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Expression", "Occult"],
            description: "Hide rotes in erased grimoires (1 Mana). +1 Reach: Lasting",
            source: "SoS 84"
        },
        {
            name: "Spirit Vessel",
            practice: "Weaving",
            primaryFactor: "Duration",
            withstand: "Resistance",
            roteSkills: ["Academics", "Intimidation", "Occult"],
            description: "Prepare spirits for Imbue Item (Spirit 3 required)",
            source: "SoS 69"
        },
        {
            name: "Steal Mana",
            practice: "Fraying",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Occult", "Subterfuge"],
            description: "Corrupt Imbued Items to siphon life (1 Mana)",
            source: "SoS 72"
        },
        {
            name: "Stealing Fire",
            practice: "Perfecting",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Expression", "Larceny", "Persuasion"],
            description: "Temporarily make Sleepwalkers. Paradox on failure",
            source: "MtAw2 p168"
        }
    ],
    4: [
        {
            name: "Apocalypse",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Occult", "Persuasion", "Socialize"],
            description: "Grant Sleepers Mage Sight. Add Any Arcanum 1: Expanded perception",
            source: "MtAw2 p169"
        },
        {
            name: "Celestial Fire",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Expression", "Occult"],
            description: "Lethal/Aggravated damage. +1 Reach: Ignite objects +1 Reach: Destroy Mana",
            source: "MtAw2 p170"
        },
        {
            name: "Destroy Tass",
            practice: "Unraveling",
            primaryFactor: "Potency",
            withstand: "Durability",
            roteSkills: ["Brawl", "Intimidation", "Occult"],
            description: "Annihilate Tass. Releases stored Mana",
            source: "MtAw2 p170"
        },
        {
            name: "Hallow Dance",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Hallow Rating",
            roteSkills: ["Expression", "Occult", "Survival"],
            description: "Suppress/activate Hallows. +2 Reach: Lasting (1 Mana)",
            source: "MtAw2 p170"
        },
        {
            name: "Primal Transfer",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Crafts", "Empathy", "Subterfuge"],
            description: "Transfer spell control. +2 Reach: Imbue redirect control",
            source: "SoS 71"
        },
        {
            name: "Scribe Daimonomikon",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Rank + (10 - Gnosis)",
            roteSkills: ["Crafts", "Expression", "Occult"],
            description: "Create Legacy tome (1 Mana). +1 Reach: Permanent (1 Mana)",
            source: "SoS 87"
        },
        {
            name: "Supernal Dispellation",
            practice: "Unraveling",
            primaryFactor: "Potency",
            withstand: "Spell's Arcanum",
            roteSkills: ["Athletics", "Intimidation", "Occult"],
            description: "Superior dispelling. Add Fate 1: Selective +2 Reach: Lasting",
            source: "MtAw2 p170"
        },
        {
            name: "Transfer Soul Stone",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Occult", "Persuasion"],
            description: "Move soul stones between vessels. +2 Reach: Permanent",
            source: "SoS 91"
        }
    ],
    5: [
        {
            name: "Blasphemy",
            practice: "Unmaking",
            primaryFactor: "Potency",
            withstand: "Hallow Rating",
            roteSkills: ["Athletics", "Occult", "Survival"],
            description: "Sever Supernal connections. +2 Reach: Permanent",
            source: "MtAw2 p170"
        },
        {
            name: "Create Truth",
            practice: "Making",
            primaryFactor: "Duration",
            withstand: "Hallow Rating",
            roteSkills: ["Expression", "Occult", "Persuasion"],
            description: "Forge Hallows (5 Mana/Potency). +2 Reach: Permanent (5 Mana)",
            source: "MtAw2 p170"
        },
        {
            name: "Eidolon",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Crafts", "Occult"],
            description: "Create animated Tass. +1 Reach: Retainer Merit Add Forces 3/Mind 5: Enhancements",
            source: "MtAw2 p171"
        },
        {
            name: "Forge Purpose",
            practice: "Making",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Empathy", "Expression", "Medicine"],
            description: "Implant Obsessions. +1 Reach: New Obsession creation",
            source: "MtAw2 p171"
        },
        {
            name: "Word of Unmaking",
            practice: "Unmaking",
            primaryFactor: "Potency",
            withstand: "Merit/Durability",
            roteSkills: ["Intimidation", "Occult", "Weaponry"],
            description: "Destroy magical items. +2 Reach: Explosive backlash",
            source: "MtAw2 p171"
        }
    ]
  },
  SPACE: {
    1: [
        {
            name: "Correspondence",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Empathy", "Medicine"],
            description: "Reveal sympathetic links. +1 Reach: Follow connection +2 Reach: Specify link type",
            source: "MtAw2 p172"
        },
        {
            name: "Ground Eater",
            practice: "Compelling",
            primaryFactor: "Potency",
            withstand: "Stamina",
            roteSkills: ["Athletics", "Science", "Survival"],
            description: "Alter movement Speed ±Potency (min 1)",
            source: "MtAw2 p173"
        },
        {
            name: "Isolation",
            practice: "Compelling",
            primaryFactor: "Potency",
            withstand: "Composure",
            roteSkills: ["Academics", "Intimidation", "Subterfuge"],
            description: "Social isolation curse. Willpower cost for interaction",
            source: "MtAw2 p173"
        },
        {
            name: "Locate Object",
            practice: "Knowing",
            primaryFactor: "Duration",
            roteSkills: ["Empathy", "Occult", "Science"],
            description: "Find subject in area. +1 Reach: Track beyond area",
            source: "MtAw2 p173"
        },
        {
            name: "The Outward and Inward Eye",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Firearms", "Investigation", "Occult"],
            description: "360° perception. +2 Reach: See through spatial warps",
            source: "MtAw2 p174"
        }
    ],
    2: [
        {
            name: "Borrow Threads",
            practice: "Ruling",
            primaryFactor: "Duration",
            withstand: "Sympathy",
            roteSkills: ["Larceny", "Occult", "Subterfuge"],
            description: "Transfer sympathetic links. +1 Reach: Copy instead of move",
            source: "MtAw2 p174"
        },
        {
            name: "Break Boundary",
            practice: "Ruling",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Larceny", "Persuasion"],
            description: "Bypass physical barriers. +1 Reach: Fit through narrow spaces +2 Reach: Teleport trapped subjects",
            source: "MtAw2 p174"
        },
        {
            name: "Lying Maps",
            practice: "Veiling",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Academics", "Politics", "Survival"],
            description: "False path conviction. Automatically fail navigation",
            source: "MtAw2 p174"
        },
        {
            name: "Scrying",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Computers", "Occult", "Subterfuge"],
            description: "Remote viewing/casting. Add Fate 2: Selective visibility",
            source: "MtAw2 p174"
        },
        {
            name: "Secret Door",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Stealth", "Subterfuge"],
            description: "Hide passageways. +1 Reach: Keyed access",
            source: "MtAw2 p175"
        },
        {
            name: "Veil Sympathy",
            practice: "Veiling",
            primaryFactor: "Duration",
            withstand: "Sympathy",
            roteSkills: ["Politics", "Subterfuge", "Survival"],
            description: "Mask connections. +2 Reach: Suppress all links",
            source: "MtAw2 p175"
        },
        {
            name: "Ward",
            practice: "Shielding",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Subterfuge", "Weaponry"],
            description: "Block spatial manipulation. +1 Reach: Keyed exception +2 Reach: Protect Irises",
            source: "MtAw2 p176"
        }
    ],
    3: [
        {
            name: "Co-Location",
            practice: "Weaving",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Science", "Stealth"],
            description: "Overlap locations. +1 Reach: Visible overlap +2 Reach: Portal creation",
            source: "MtAw2 p176"
        },
        {
            name: "Forced Sympathy",
            practice: "Weaving",
            primaryFactor: "Duration",
            withstand: "Resolve",
            roteSkills: ["Crafts", "Medicine", "Persuasion"],
            description: "Redirect Imbued Item targeting to strongest sympathy",
            source: "SoS 73"
        },
        {
            name: "Optimal Container",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Larceny", "Science", "Subterfuge"],
            description: "Expand container capacity (Size = 5 + Potency)",
            source: "SoS 66"
        },
        {
            name: "Perfect Sympathy",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Empathy", "Larceny"],
            description: "Enhance sympathetic actions. +1 Reach: Sympathetic spell redirect",
            source: "MtAw2 p176"
        },
        {
            name: "Warp",
            practice: "Fraying",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Brawl", "Medicine"],
            description: "Spatial distortion damage. +1 Reach: Limb Tilts",
            source: "MtAw2 p177"
        },
        {
            name: "Web-Weaver",
            practice: "Perfecting",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Crafts", "Empathy", "Persuasion"],
            description: "Strengthen sympathetic bonds. Add Time 2: Temporal sympathy",
            source: "MtAw2 p177"
        }
    ],
    4: [
        {
            name: "Alter Direction",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Firearms", "Persuasion"],
            description: "Redefine spatial axes. Potency = directions changed",
            source: "MtAw2 p177"
        },
        {
            name: "Collapse",
            practice: "Unraveling",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Firearms", "Intimidation"],
            description: "Forced superposition damage. +1 Reach: Internalized objects",
            source: "MtAw2 p177"
        },
        {
            name: "Cut Threads",
            practice: "Unraveling",
            primaryFactor: "Potency",
            withstand: "Sympathy",
            roteSkills: ["Persuasion", "Politics", "Weaponry"],
            description: "Sever connections. +2 Reach: Remove sympathetic names",
            source: "MtAw2 p177"
        },
        {
            name: "Secret Room",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Expression", "Science", "Survival"],
            description: "Alter spatial dimensions. Scale = size modification steps",
            source: "MtAw2 p178"
        },
        {
            name: "Teleportation",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Larceny", "Persuasion", "Science"],
            description: "Instant relocation. +1 Reach: Object swap +2 Reach: Dual sympathy",
            source: "MtAw2 p178"
        }
    ],
    5: [
        {
            name: "Create Sympathy",
            practice: "Making",
            primaryFactor: "Potency",
            withstand: "Sympathy",
            roteSkills: ["Empathy", "Persuasion", "Politics"],
            description: "Forge new connections. +1 Reach: Permanent links",
            source: "MtAw2 p178"
        },
        {
            name: "Forge No Chains",
            practice: "Unmaking",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Subterfuge", "Survival"],
            description: "Block new sympathetic links. +2 Reach: Obscure spell origins",
            source: "MtAw2 p178"
        },
        {
            name: "Pocket Dimension",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Expression", "Survival"],
            description: "Create isolated space. Add Death/Spirit/Mind 2: Twilight layers",
            source: "MtAw2 p178"
        },
        {
            name: "Quarantine",
            practice: "Unmaking",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Larceny", "Socialize"],
            description: "Erase spatial presence. Add Mind 4/Time 5: Memory/History rewrite",
            source: "MtAw2 p179"
        },
        {
            name: "Unnaming",
            practice: "Unmaking",
            primaryFactor: "Duration",
            withstand: "Composure",
            roteSkills: ["Empathy", "Expression", "Occult"],
            description: "Erase sympathetic identity. Add Prime 5: Shadow Name purge",
            source: "SoS 94"
        }
    ]
  },
  SPIRIT: {
    1: [
        {
            name: "Coaxing the Spirits",
            practice: "Compelling",
            primaryFactor: "Potency",
            withstand: "Composure/Rank",
            roteSkills: ["Politics", "Athletics", "Expression"],
            description: "Compel spirit to act according to its nature. Cannot force self-destruction",
            source: "MtAw2 p180"
        },
        {
            name: "Exorcist's Eye",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Survival", "Socialize"],
            description: "See/spirit to spirits in Twilight/possession. Add Death/Mind 1: Ghosts/Goetia",
            source: "MtAw2 p180"
        },
        {
            name: "Gremlins",
            practice: "Compelling",
            primaryFactor: "Potency",
            roteSkills: ["Larceny", "Politics", "Subterfuge"],
            description: "Curse objects with spirit interference. Potency = dramatic failures",
            source: "MtAw2 p180"
        },
        {
            name: "Invoke Bane",
            practice: "Compelling",
            primaryFactor: "Duration",
            withstand: "Rank",
            roteSkills: ["Brawl", "Intimidation", "Occult"],
            description: "Force spirit to avoid bane. Willpower cost to approach",
            source: "MtAw2 p180"
        },
        {
            name: "Know Spirit",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Brawl", "Socialize"],
            description: "Learn spirit's Rank/Manifestations/Numina/Ban",
            source: "MtAw2 p180"
        }
    ],
    2: [
        {
            name: "Cap the Well",
            practice: "Shielding",
            primaryFactor: "Duration",
            roteSkills: ["Politics", "Survival", "Persuasion"],
            description: "Block essence feeding. Clash vs spirit attempts",
            source: "MtAw2 p180"
        },
        {
            name: "Channel Essence",
            practice: "Ruling",
            primaryFactor: "Potency",
            roteSkills: ["Occult", "Persuasion", "Survival"],
            description: "Transfer Essence between sources. +1 Reach: Steal from spirits",
            source: "MtAw2 p180"
        },
        {
            name: "Command Spirit",
            practice: "Ruling",
            primaryFactor: "Potency",
            withstand: "Rank",
            roteSkills: ["Medicine", "Athletics", "Persuasion"],
            description: "Order spirit actions (Potency = number)",
            source: "MtAw2 p181"
        },
        {
            name: "Ephemeral Shield",
            practice: "Shielding",
            primaryFactor: "Duration",
            roteSkills: ["Animal Ken", "Medicine", "Stealth"],
            description: "Protect from spirit powers. +1 Reach: Block physical attacks",
            source: "MtAw2 p181"
        },
        {
            name: "Gossamer Touch",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Brawl", "Crafts", "Intimidation"],
            description: "Interact physically with Twilight spirits. +1 Reach: Affect carried objects",
            source: "MtAw2 p181"
        },
        {
            name: "Opener of the Way",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Computers", "Socialize"],
            description: "Convert Resonant/Open Conditions",
            source: "MtAw2 p181"
        },
        {
            name: "Shadow Walk",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Stealth", "Streetwise"],
            description: "Hide from spirit detection. Clash vs supernatural senses",
            source: "MtAw2 p181"
        },
        {
            name: "Slumber",
            practice: "Ruling",
            primaryFactor: "Duration",
            withstand: "Rank",
            roteSkills: ["Expression", "Occult", "Weaponry"],
            description: "Slow spirit essence recovery (1/ Potency days)",
            source: "MtAw2 p181"
        }
    ],
    3: [
        {
            name: "Bolster Spirit",
            practice: "Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Medicine", "Occult", "Expression"],
            description: "Heal/empower spirits. +1 Reach: Boost Attributes +2 Reach: Increase Rank (Mana)",
            source: "MtAw2 p181"
        },
        {
            name: "Erode Resonance",
            practice: "Fraying",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Brawl", "Intimidation"],
            description: "Destroy Resonant/Open Conditions. Lasting effect",
            source: "MtAw2 p181"
        },
        {
            name: "Howl From Beyond",
            practice: "Fraying",
            primaryFactor: "Potency",
            roteSkills: ["Expression", "Firearms", "Medicine"],
            description: "Spirit-energy attack. +1 Reach: Create Open Condition",
            source: "MtAw2 p182"
        },
        {
            name: "Place of Power",
            practice: "Fraying/Perfecting",
            primaryFactor: "Potency",
            withstand: "Gauntlet Strength",
            roteSkills: ["Academics", "Expression", "Survival"],
            description: "Modify Gauntlet strength. +1 Reach: Asymmetrical adjustment",
            source: "MtAw2 p182"
        },
        {
            name: "Reaching",
            practice: "Weaving",
            primaryFactor: "Duration",
            withstand: "Gauntlet Strength",
            roteSkills: ["Athletics", "Medicine", "Socialize"],
            description: "Cross Gauntlet. +1 Reach: Create Iris +2 Reach: Materialize spirit",
            source: "MtAw2 p182"
        },
        {
            name: "Rouse Spirit",
            practice: "Perfecting",
            primaryFactor: "Potency",
            withstand: "Rank",
            roteSkills: ["Athletics", "Expression", "Investigation"],
            description: "Awaken dormant spirit. +1 Reach: Extra Corpus healing",
            source: "MtAw2 p182"
        },
        {
            name: "Spiritual Tool",
            practice: "Perfecting",
            primaryFactor: "Duration",
            roteSkills: ["Empathy", "Occult", "Survival"],
            description: "Enhance items for spirit interaction. Functions in Twilight/Shadow",
            source: "SoS 66"
        },
        {
            name: "Spirit Summons",
            practice: "Perfecting",
            primaryFactor: "Duration",
            withstand: "Rank",
            roteSkills: ["Persuasion", "Socialize", "Occult"],
            description: "Call local spirit. +1 Reach: Open Condition +2 Reach: Complex commands",
            source: "MtAw2 p182"
        }
    ],
    4: [
        {
            name: "Banishment",
            practice: "Unraveling",
            primaryFactor: "Potency",
            withstand: "Rank",
            roteSkills: ["Brawl", "Expression", "Occult"],
            description: "Strip Manifestations. Add Mind/Death 4: Affect Goetia/Ghosts +1 Reach: Duration block",
            source: "MtAw2 p182"
        },
        {
            name: "Bind Spirit",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Rank",
            roteSkills: ["Crafts", "Brawl", "Intimidation"],
            description: "Grant Manifestation Conditions. Add Mind/Death 4: Other entities",
            source: "MtAw2 p183"
        },
        {
            name: "Craft Fetish",
            practice: "Patterning",
            primaryFactor: "Duration",
            withstand: "Rank",
            roteSkills: ["Crafts", "Occult", "Persuasion"],
            description: "Create spirit-bound object. Holds Numina/Influences (Potency = number)",
            source: "MtAw2 p183"
        },
        {
            name: "Familiar",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Athletics", "Expression", "Intimidate"],
            description: "Create spirit companion (Rank ≤ 2). Add Death/Mind 4: Ghost/Goetia bonds",
            source: "MtAw2 p183"
        },
        {
            name: "Haunted Grimoire",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Rank + Arcanum",
            roteSkills: ["Crafts", "Intimidation", "Occult"],
            description: "Bind spirit to grimoire (Prime • required). Wisdom sin risk",
            source: "SoS 86"
        },
        {
            name: "Shadow Scream",
            practice: "Unraveling",
            primaryFactor: "Potency",
            roteSkills: ["Expression", "Firearms", "Medicine"],
            description: "Deal lethal spirit damage. +1 Reach: Aggravated (Mana) +1 Reach: Cross Gauntlet",
            source: "MtAw2 p183"
        },
        {
            name: "Shape Spirit",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Rank",
            roteSkills: ["Crafts", "Medicine", "Persuasion"],
            description: "Alter spirit traits (Numina/Influences/Ban). Lasts Duration",
            source: "MtAw2 p184"
        },
        {
            name: "Twilit Body",
            practice: "Patterning",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Subterfuge", "Survival"],
            description: "Become spirit-ephemeral. +1 Reach: Function in Twilight-dead zones",
            source: "MtAw2 p184"
        },
        {
            name: "World Walker",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Gauntlet Strength",
            roteSkills: ["Athletics", "Persuasion", "Survival"],
            description: "Cross Gauntlet with subjects. +1 Reach: Materialize companion",
            source: "MtAw2 p184"
        }
    ],
    5: [
        {
            name: "Annihilate Spirit",
            practice: "Unmaking",
            primaryFactor: "Potency",
            withstand: "Rank",
            roteSkills: ["Intimidation", "Science", "Weaponry"],
            description: "Destroy spirit permanently. Clash of Wills (spirit spends Essence)",
            source: "MtAw2 p184"
        },
        {
            name: "Birth Spirit",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Medicine", "Expression"],
            description: "Create Rank 1 spirit. +1 Reach: Rank 2 (1 Mana)",
            source: "MtAw2 p184"
        },
        {
            name: "Create Locus",
            practice: "Making",
            primaryFactor: "Duration",
            withstand: "Gauntlet Strength",
            roteSkills: ["Crafts", "Empathy", "Survival"],
            description: "Forge new locus from Resonant area. +1 Reach: Generate Essence",
            source: "MtAw2 p184"
        },
        {
            name: "Essence Fountain",
            practice: "Making",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Expression", "Occult"],
            description: "Generate Essence with chosen Resonance. +1 Reach: Multiple Resonances",
            source: "MtAw2 p185"
        },
        {
            name: "Spirit Manse",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Expression", "Survival"],
            description: "Create spirit sanctum (Safe Place Merit). +1 Reach: Iris link",
            source: "MtAw2 p185"
        }
    ]
  },
  TIME: {
    1: [
        {
            name: "Divination",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Empathy", "Investigation"],
            description: "Ask yes/no questions about future. +1 Reach: Specific questions",
            source: "MtAw2 p186"
        },
        {
            name: "Green Light/Red Light",
            practice: "Compelling",
            primaryFactor: "Duration",
            roteSkills: ["Computer", "Larceny", "Subterfuge"],
            description: "Manipulate timing - accelerate delays or force pauses",
            source: "MtAw2 p187"
        },
        {
            name: "Momentary Flux",
            practice: "Knowing",
            primaryFactor: "Potency",
            roteSkills: ["Investigation", "Streetwise", "Survival"],
            description: "Predict beneficial/baneful outcomes. Potency = Initiative bonus",
            source: "MtAw2 p187"
        },
        {
            name: "Perfect Timing",
            practice: "Unveiling",
            primaryFactor: "Duration",
            roteSkills: ["Empathy", "Socialize", "Streetwise"],
            description: "Optimal action timing. Potency = bonus to next roll",
            source: "MtAw2 p187"
        },
        {
            name: "Postcognition",
            practice: "Unveiling",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Empathy", "Investigation"],
            description: "View subject's past. +1 Reach: Control vision playback",
            source: "MtAw2 p187"
        }
    ],
    2: [
        {
            name: "Choose the Thread",
            practice: "Ruling",
            primaryFactor: "Potency",
            withstand: "Resolve",
            roteSkills: ["Occult", "Science", "Subterfuge"],
            description: "Reroll failed action. +2 Reach: Affect spellcasting",
            source: "MtAw2 p187"
        },
        {
            name: "Constant Presence",
            practice: "Shielding",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Persuasion", "Survival"],
            description: "Resist timeline changes. Clash of Wills vs temporal effects",
            source: "MtAw2 p187"
        },
        {
            name: "Hung Spell",
            practice: "Ruling",
            primaryFactor: "Duration",
            roteSkills: ["Crafts", "Occult", "Expression"],
            description: "Delay spell activation. Potency = spells held",
            source: "MtAw2 p188"
        },
        {
            name: "Shield of Chronos",
            practice: "Veiling",
            primaryFactor: "Duration",
            roteSkills: ["Academics", "Stealth", "Subterfuge"],
            description: "Hide from temporal scrutiny. +1 Reach: False history",
            source: "MtAw2 p188"
        },
        {
            name: "Tipping the Hourglass",
            practice: "Ruling",
            primaryFactor: "Potency",
            withstand: "Resolve",
            roteSkills: ["Athletics", "Crafts", "Investigation"],
            description: "Alter Initiative. Potency = +/- modifier",
            source: "MtAw2 p188"
        }
    ],
    3: [
        {
            name: "Acceleration",
            practice: "Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Drive", "Stealth"],
            description: "Multiply Speed. Potency split between Str/Dex",
            source: "MtAw2 p189"
        },
        {
            name: "Chronos' Curse",
            practice: "Fraying",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Occult", "Intimidation"],
            description: "Slow target. Potency = Speed divisor/action time multiplier",
            source: "MtAw2 p190"
        },
        {
            name: "Shifting Sands",
            practice: "Fraying",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Occult", "Survival"],
            description: "Localized time reversal (Potency = turns). Retain injuries",
            source: "MtAw2 p190"
        },
        {
            name: "Temporal Summoning",
            practice: "Weaving",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Investigation", "Persuasion"],
            description: "Retrieve past versions. Limited lifespan restoration",
            source: "MtAw2 p190"
        },
        {
            name: "Weight of Years",
            practice: "Perfecting",
            primaryFactor: "Potency",
            roteSkills: ["Crafts", "Intimidation", "Medicine"],
            description: "Age objects/people. Potency = Structure damage/Athletics penalty",
            source: "MtAw2 p191"
        }
    ],
    4: [
        {
            name: "Present as Past",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Empathy", "Investigation", "Streetwise"],
            description: "Control turn order. +1 Reach: Social Door removal",
            source: "MtAw2 p191"
        },
        {
            name: "Prophecy",
            practice: "Patterning",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Expression", "Investigation"],
            description: "Detailed future visions. Potency = questions answered",
            source: "MtAw2 p191"
        },
        {
            name: "Rend Lifespan",
            practice: "Unraveling",
            primaryFactor: "Potency",
            roteSkills: ["Athletics", "Medicine", "Intimidation"],
            description: "Inflict lethal age damage",
            source: "MtAw2 p191"
        },
        {
            name: "Rewrite History",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Resolve",
            roteSkills: ["Expression", "Investigation", "Persuasion"],
            description: "Alter personal timeline. +2 Reach: Affect supernatural templates",
            source: "MtAw2 p191"
        },
        {
            name: "Temporal Stutter",
            practice: "Patterning",
            primaryFactor: "Potency",
            withstand: "Stamina",
            roteSkills: ["Intimidation", "Science", "Survival"],
            description: "Remove subject from time. Knocked Down on reappearance",
            source: "MtAw2 p192"
        }
    ],
    5: [
        {
            name: "Blink of an Eye",
            practice: "Unmaking",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Crafts", "Occult"],
            description: "Compress extended actions. +2 Reach: Boost ritual casting",
            source: "MtAw2 p192"
        },
        {
            name: "Corridors of Time",
            practice: "Unmaking",
            primaryFactor: "Potency",
            roteSkills: ["Academics", "Investigation", "Persuasion"],
            description: "Retrocognitive possession. Alter past events",
            source: "MtAw2 p192"
        },
        {
            name: "Temporal Pocket",
            practice: "Making",
            primaryFactor: "Duration",
            roteSkills: ["Occult", "Science", "Stealth"],
            description: "Create frozen time bubble. Ends on violent action",
            source: "MtAw2 p192"
        }
    ]
  }
};

// Access patterns:
// SPELLS_BY_ARCANUM.DEATH[1] - All Death 1 spells
// SPELLS_BY_ARCANUM.TIME[5] - All Time 5 spells