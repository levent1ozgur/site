const prompts = {
  portraitPrompts: {
    ageRange: ["teenager", "young", "adult", "middle aged", "elderly"],
    gender: ["man", "woman"],
    facialExpressions: [
      "serious",
      "happy",
      "thoughtful",
      "surprised",
      "pensive"
    ],
    ethnicity: ["caucasian", "african", "asian", "hispanic", "middle eastern"],
    occupation: [
      "business professional",
      "artist",
      "doctor",
      "athlete",
      "musician"
    ],
    clothingStyle: [
      "formal attire",
      "casual",
      "vintage fashion",
      "sports attire",
      "cultural attire"
    ],
    accessories: ["glasses", "hat", "scarf", "jewelry", "tattoo"],
    backgroundSetting: [
      "urban backdrop",
      "natural scenery",
      "indoor setting",
      "studio background",
      "abstract background"
    ],
    mood: ["romantic", "mysterious", "confident", "playful", "dramatic"],
    hairStyle: ["short hair", "long hair", "curly hair", "straight hair"],

    timePeriod: ["contemporary", "retro", "vintage", "futuristic", "timeless"]
  },
  landscapePrompts: {
    timeOfDay: ["sunrise", "morning", "afternoon", "sunset", "night"],
    weatherConditions: ["clear sky", "cloudy", "rainy", "snowy", "stormy"],
    season: [
      "spring bloom",
      "summer warmth",
      "autumn foliage",
      "winter snowscape"
    ],
    geographicalFeatures: [
      "mountains",
      "valleys",
      "rivers",
      "lakes",
      "waterfalls"
    ],
    urbanElements: [
      "city skyline",
      "suburban neighborhood",
      "industrial area",
      "parks and gardens"
    ],
    floraAndFauna: [
      "forest with wildlife",
      "desert landscape",
      "meadow with flowers",
      "coastal scene with seagulls"
    ],
    architectureIntegration: [
      "ancient ruins",
      "modern buildings",
      "castles",
      "bridges"
    ],
    colorPalette: [
      "vibrant colors",
      "pastel tones",
      "earthy tones",
      "monochrome"
    ],
    timePeriod: [
      "historical landscape",
      "futuristic cityscape",
      "modern urban scene"
    ],
    viewpoint: [
      "aerial view",
      "ground level perspective",
      "waterfront view",
      "cliffside panorama"
    ]
  },
  characterPrompts: {
    characterType: [
      "humanoid",
      "animal like",
      "extraterrestrial",
      "robotic",
      "mythical"
    ],
    personalityTraits: [
      "heroic",
      "villainous",
      "playful",
      "mysterious",
      "wise"
    ],
    clothingAndAccessories: [
      "sci fi armor",
      "casual attire",
      "fantasy robes",
      "futuristic accessories",
      "weaponry"
    ],
    poseAndAction: [
      "fighting stance",
      "a running",
      "a jumping",
      "a casting a spell",
      "interacting with an object"
    ],
    environmentSetting: [
      "sci fi cityscape",
      "fantasy realm",
      "futuristic laboratory",
      "post apocalyptic world",
      "underwater kingdom"
    ],
    facialExpressions: ["stoic", "smiling", "angry", "sad", "confused"],
    ageAppearance: ["young", "middle aged", "elderly", "alien", "mechanical"],
    genre: ["sci fi", "fantasy", "steampunk", "cyberpunk", "horror"],
    emotionalState: [
      "confident",
      "fearful",
      "curious",
      "determined",
      "mischievous"
    ]
  },
  abstractConceptPrompts: {
    colorPalette: [
      "vibrant and bold colors",
      "monochromatic hues",
      "pastel tones",
      "dark and moody shades"
    ],
    shapesAndForms: [
      "geometric shapes",
      "organic forms",
      "abstract patterns",
      "symmetry or asymmetry"
    ],
    emotions: ["joy", "sadness", "anger", "serenity", "confusion"],
    energyMovement: [
      "dynamic and energetic",
      "still and calm",
      "chaotic and turbulent",
      "flowing and rhythmic"
    ],
    texture: [
      "smooth and sleek",
      "rough and textured",
      "soft and velvety",
      "metallic and shiny"
    ],
    contrast: [
      "light and shadow",
      "high contrast",
      "low contrast",
      "gradations"
    ],
    depthPerspective: [
      "flat and two dimensional",
      "three dimensional space",
      "overlapping elements"
    ],
    time: [
      "frozen in time",
      "time passing",
      "timelessness",
      "past, present, future"
    ],
    natureElements: [
      "water inspired",
      "fire inspired",
      "earth inspired",
      "air inspired"
    ],
    scale: [
      "macroscopic view",
      "microscopic view",
      "human scale",
      "cosmic scale"
    ],
    sensations: [
      "warmth",
      "coldness",
      "tactile sensations",
      "sensory overload"
    ],
    conceptualPairings: [
      "order and chaos",
      "creation and destruction",
      "harmony and discord",
      "birth and decay"
    ]
  },
  lifeScenePrompts: {
    timeOfDay: ["morning", "afternoon", "evening", "nighttime"],
    setting: [
      "an indoor living room",
      "an outdoor garden",
      "a public park",
      "a city street"
    ],
    socialInteractions: ["family gathering", "friends hanging out"],
    celebrations: [
      "birthday party",
      "holiday celebration",
      "graduation ceremony",
      "special occasion"
    ],
    weatherConditions: ["sunny", "rainy", "snowy", "windy"],
    pets: ["dog", "cat"],
    fashionStyle: ["casual wear", "formal attire", "lounge wear"]
  },
  seasonalThemePrompts: {
    specificHolidays: [
      "christmas",
      "thanksgiving",
      "halloween",
      "easter",
      "new years eve"
    ],
    culturalFestivals: [
      "diwali",
      "hanukkah",
      "lunar new year",
      "oktoberfest",
      "carnival"
    ],
    outdoorActivities: [
      "summer beach day",
      "winter snowball fight",
      "spring picnic",
      "autumn leaf raking"
    ],
    weatherConditions: ["clear", "cloudy", "rainy", "snowy", "stormy"],
    colorsTones: [
      "pastel tones",
      "vibrant colors",
      "warm earth tones",
      "cool tones"
    ]
  },
  historicalContextPrompts: {
    specificTimePeriods: [
      "ancient egypt",
      "renaissance",
      "industrial revolution",
      "roaring twenties",
      "victorian era"
    ],
    architecturalStyles: [
      "gothic architecture",
      "baroque buildings",
      "classical columns",
      "medieval castles"
    ],
    clothingAndFashion: [
      "regal attire",
      "colonial fashion",
      "traditional kimono",
      "revolutionary war uniforms"
    ],
    occupationsAndTrades: [
      "blacksmith",
      "apothecary",
      "printmaker",
      "explorer"
    ],
    dailyLife: ["bazaar", "town square", "village"],
    artAndLiteratureMovements: [
      "renaissance art",
      "romantic literature",
      "neoclassical paintings",
      "baroque sculptures"
    ]
  },
  futuristicConceptPrompts: {
    technologicalElements: [
      "holographic displays",
      "augmented reality interfaces",
      "advanced robotics",
      "neural interfaces"
    ],
    transportation: [
      "flying cars",
      "high speed trains",
      "hyperloop systems",
      "personalized transport pods"
    ],
    architecturalStyles: [
      "futuristic skyscrapers",
      "eco friendly buildings",
      "underwater habitats",
      "biomorphic structures"
    ],
    biotechnology: [
      "genetic modifications",
      "bioengineered organisms",
      "medical advancements",
      "cyborg enhancements"
    ],
    fashionAndWearables: [
      "smart clothing",
      "augmented reality glasses",
      "biometric wearables"
    ]
  },
  colorThemePrompts: {
    monochromaticHues: [
      "shades of blue",
      "variations of red",
      "grayscale tones",
      "earthy browns"
    ],
    contrastingColors: [
      "complementary colors",
      "high contrast combinations",
      "vibrant opposites",
      "warm and cool contrasts"
    ],
    pastelPalette: [
      "soft pinks and blues",
      "gentle yellows and greens",
      "subdued lavender and peach",
      "minty and powdery tones"
    ],
    neonLights: [
      "vibrant neon colors",
      "futuristic glow",
      "cyberpunk neon",
      "nighttime cityscape"
    ],
    earthyTones: [
      "terracotta and clay",
      "forest greens",
      "sandy neutrals",
      "stone grays"
    ],
    seasonalColors: [
      "springtime pastels",
      "summery brights",
      "autumnal warmth",
      "wintery cool tones"
    ],
    natureInspiredPalette: [
      "ocean blues and greens",
      "sunset oranges and purples",
      "desert hues",
      "rainforest richness"
    ],
    metallicShades: [
      "shiny gold and silver",
      "copper accents",
      "bronze highlights",
      "metallic gradients"
    ],
    vintageColorScheme: [
      "sepia tones",
      "faded retro colors",
      "vintage film look",
      "antique parchment hues"
    ],
    highLowKeyLighting: [
      "high key brightness",
      "low key darkness",
      "dramatic chiaroscuro",
      "subtle lighting"
    ],
    culturalColorInfluences: [
      "traditional asian color palette",
      "african tribal colors",
      "indian festival colors",
      "native american hues"
    ],
    psychologicalImpact: [
      "calming blues and greens",
      "energizing reds and yellows",
      "soothing purples",
      "neutral and calming grays"
    ]
  },
  adventureScenarioPrompts: {
    fantasyQuests: [
      "epic journey to defeat a dragon",
      "quest for a mythical artifact",
      "rescue mission in a magical realm",
      "exploration of hidden lands"
    ],
    explorationAndDiscovery: [
      "deep sea exploration",
      "jungle expedition",
      "arctic exploration",
      "space exploration and discovery"
    ],
    treasureHunts: [
      "buried pirate treasure",
      "ancient treasure map quest",
      "searching for lost relics",
      "underwater treasure hunt"
    ],
    survivalStories: [
      "stranded on a deserted island",
      "wilderness survival",
      "post apocalyptic survival",
      "arctic survival expedition"
    ],
    mysteryAndIntrigue: [
      "detective solving a crime",
      "unraveling a conspiracy",
      "investigating a haunted mansion",
      "solving a historical mystery"
    ],
    timeTravelAdventures: [
      "time traveling explorer",
      "historical time periods",
      "future dystopian era",
      "alternate reality exploration"
    ],
    undergroundExpeditions: [
      "cave exploration",
      "underground city discovery",
      "dwarven mines adventure",
      "subterranean mysteries"
    ],
    interdimensionalTravel: [
      "portal to other dimensions",
      "parallel universe exploration",
      "interdimensional creatures",
      "meeting alternate versions of oneself"
    ],
    magicalRealms: [
      "fairy tale adventure",
      "journey through enchanted forest",
      "quest in a wizard's tower",
      "mythical creature encounters"
    ],
    steampunkAdventures: [
      "airship expedition",
      "mechanical inventions quest",
      "steampunk city exploration",
      "clockwork and gears adventure"
    ],
    epicBattles: [
      "battle against hordes of monsters",
      "interstellar warfare",
      "clash of fantasy armies",
      "sci fi space battles"
    ],
    desertExpeditions: [
      "sahara desert adventure",
      "ancient desert civilizations",
      "lost oasis discovery",
      "nomadic desert journey"
    ]
  },
  magicalRealmsPrompts: {
    enchantedForests: [
      "mystical creatures and spirits",
      "whispering trees and talking animals",
      "hidden fairy communities",
      "glowing flowers and magical flora"
    ],
    wizardsAndSorcery: [
      "wizard's tower in the clouds",
      "potion making laboratory",
      "magical duels and spellcasting",
      "ancient tomes and scrolls"
    ],
    mythicalCreatures: [
      "unicorn sanctuary",
      "dragon's lair",
      "griffin roost",
      "mermaid kingdom"
    ],
    fairyTaleKingdoms: [
      "castle in the clouds",
      "kingdom ruled by fairies",
      "magical royal court",
      "cinderella like transformations"
    ],
    journeyThroughPortals: [
      "magical portals to other realms",
      "doorways to alternate worlds",
      "cross dimensional adventures",
      "keyholes leading to secret realms"
    ],
    mysticalLakesAndRivers: [
      "lake of wishes",
      "river of dreams",
      "water nymphs and spirits",
      "waterfalls with magical properties"
    ],
    undergroundRealms: [
      "dwarven mines and cities",
      "caverns with bioluminescent fungi",
      "gnome workshops and homes",
      "subterranean magical societies"
    ],
    celestialRealms: [
      "moonlit landscapes",
      "starlit skies with constellations",
      "celestial beings and deities",
      "galactic palaces and observatories"
    ],
    magicalMarketplaces: [
      "marketplace with enchanted goods",
      "shops selling magical artifacts",
      "potion stalls and spellbook vendors",
      "bazaars of rare and mythical items"
    ],
    hauntedEnvironments: [
      "ghostly castles",
      "wandering spirits and phantoms",
      "haunted forests",
      "magical haunting phenomena"
    ],
    seasonalMagic: [
      "seasonal fairies and sprites",
      "seasonal transitions and rituals",
      "seasonal celebrations and festivals",
      "magical seasons changing at will"
    ],
    magicalTransportation: [
      "flying carpets",
      "levitating islands",
      "magical chariots and carriages",
      "brooms and flying creatures as mounts"
    ]
  }
};

// Helper function to get a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Updated generateRandomPrompt function
function generateRandomPrompt(promptType) {
  const prompt = prompts[promptType];
  const description = {};

  // Randomly select a value for each category in the prompt type
  for (const key in prompt) {
    description[key] = getRandomItem(prompt[key]);
  }

  // Format and return the description based on the prompt type
  if (promptType === "portraitPrompts") {
    return `
      A ${description.mood} portrait of a ${description.ageRange}, ${description.hairStyle}, ${description.ethnicity}, ${description.occupation}, ${description.gender}  wearing ${description.clothingStyle} with a ${description.accessories} and ${description.facialExpressions} expression, in a ${description.backgroundSetting} with ${description.timePeriod} vibes. 
    `;
  }

  if (promptType === "landscapePrompts") {
    return `
      A ${description.weatherConditions} ${description.timeOfDay} landscape in the ${description.season}, with majestic ${description.geographicalFeatures} in the background and a ${description.urbanElements} nested in. A ${description.floraAndFauna} thrives in the foreground, while ${description.architectureIntegration} stand as a testament to the passage of time. The entire scene is bathed in a palette of ${description.colorPalette}, creating a breathtaking ${description.timePeriod}, captured from ${description.viewpoint}.
    `;
  }

  if (promptType === "characterPrompts") {
    return `
      A ${description.emotionalState} ${description.ageAppearance} ${description.characterType} character with a ${description.personalityTraits} personality, wearing ${description.clothingAndAccessories}, in ${description.poseAndAction} pose with ${description.facialExpressions} facial expression, setting in a ${description.environmentSetting} with ${description.genre} vibes.
    `;
  }

  if (promptType === "abstractConceptPrompts") {
    return `An artwork featuring ${description.colorPalette} with ${description.shapesAndForms}, expressing ${description.emotions} through ${description.energyMovement} movement. The composition has ${description.texture} textures with ${description.contrast} elements, creating a ${description.depthPerspective}. The piece captures a moment ${description.time} with ${description.natureElements} elements at a ${description.scale}. It evokes ${description.sensations} and explores the theme of ${description.conceptualPairings}.`;
  }

  if (promptType === "lifeScenePrompts") {
    return `A scene set in ${description.setting} during a ${description.celebrations}. ${description.socialInteractions} in ${description.fashionStyle} on a ${description.weatherConditions} ${description.timeOfDay}. A ${description.pets} is lounging nearby.`;
  }
  if (promptType === "seasonalThemePrompts") {
    return `A ${description.specificHolidays} celebration featuring a ${description.outdoorActivities} on a ${description.weatherConditions} day. The scene is bathed in ${description.colorsTones}.`;
  }
  if (promptType === "historicalContextPrompts") {
    return `
    A ${description.occupationsAndTrades} wearing ${description.clothingAndFashion}, from ${description.specificTimePeriods}, featuring architectural styles like ${description.architecturalStyles}, set against of a bustling ${description.artAndLiteratureMovements} at the ${description.dailyLife}. The scene is infused with the vibrant energy of the era, capturing the essence of daily life during this pivotal period in history. 
  `;
  }
  if (promptType === "futuristicConceptPrompts") {
    return `
    A scene depicting ${description.technologicalElements}, where sleek ${description.transportation} glide through the streets of a futuristic city where people have ${description.biotechnology} wearing ${description.fashionAndWearables}, surrounded by towering ${description.architecturalStyles}. 
  `;
  }
  if (promptType === "colorThemePrompts") {
    return `
    The scene is bathed in a color palette of ${description.monochromaticHues}, featuring contrasting colors like ${description.contrastingColors}. The soft tones of ${description.pastelPalette} blend seamlessly with the neon lights of ${description.neonLights}. Earthy tones like ${description.earthyTones} ground the composition, while the seasonal colors, including ${description.seasonalColors}, highlight the time of year. Nature-inspired palettes like ${description.natureInspiredPalette} bring a natural feel, while metallic shades like ${description.metallicShades} add a futuristic touch. Vintage color schemes such as ${description.vintageColorScheme} evoke a sense of nostalgia, and the lighting sets the mood with ${description.highLowKeyLighting}. Cultural influences in color like ${description.culturalColorInfluences} deepen the context, and the psychological impact is felt through tones such as ${description.psychologicalImpact}.
  `;
  }
  if (promptType === "adventureScenarioPrompts") {
    return `
    The adventure begins with a fantasy quest like ${description.fantasyQuests}, or perhaps an exploration and discovery such as ${description.explorationAndDiscovery}. The hunt for treasure includes ${description.treasureHunts}, or a survival story could unfold with ${description.survivalStories}. There might be a mystery or intrigue surrounding ${description.mysteryAndIntrigue}, or even a thrilling time travel adventure like ${description.timeTravelAdventures}. Underground expeditions, such as ${description.undergroundExpeditions}, could reveal hidden worlds, or the journey could involve interdimensional travel like ${description.interdimensionalTravel}. Magical realms beckon, featuring adventures like ${description.magicalRealms}, while steampunk adventures such as ${description.steampunkAdventures} bring mechanical wonders. Epic battles like ${description.epicBattles} could shape the story, or the setting could take place in a desert expedition, like ${description.desertExpeditions}.
  `;
  }
  if (promptType === "magicalRealmsPrompts") {
    return `
    The realm features an enchanted forest with ${description.enchantedForests}, or it could be a place of wizards and sorcery with settings like ${description.wizardsAndSorcery}. The mystical creatures like ${description.mythicalCreatures} roam the land, or perhaps the story takes place in a fairy tale kingdom, such as ${description.fairyTaleKingdoms}. Journey through magical portals to realms like ${description.journeyThroughPortals}, or discover mystical lakes and rivers with ${description.mysticalLakesAndRivers}. Beneath the surface, underground realms like ${description.undergroundRealms} are full of wonders, while the celestial realms offer landscapes like ${description.celestialRealms}. Magical marketplaces bustling with ${description.magicalMarketplaces} await, or haunting environments such as ${description.hauntedEnvironments} provide eerie settings. Seasonal magic like ${description.seasonalMagic} weaves throughout, and magical transportation like ${description.magicalTransportation} allows for swift travel across these fantastical lands.
  `;
  }
}

// Button Event Listeners
document.getElementById("generateButton1").addEventListener("click", () => {
  const description = generateRandomPrompt("portraitPrompts");
  document.getElementById("generatedDescription1").textContent = description;
});

document.getElementById("generateButton2").addEventListener("click", () => {
  const description = generateRandomPrompt("landscapePrompts");
  document.getElementById("generatedDescription2").textContent = description;
});

document.getElementById("generateButton3").addEventListener("click", () => {
  const description = generateRandomPrompt("characterPrompts");
  document.getElementById("generatedDescription3").textContent = description;
});

document.getElementById("generateButton4").addEventListener("click", () => {
  const description = generateRandomPrompt("abstractConceptPrompts");
  document.getElementById("generatedDescription4").textContent = description;
});

document.getElementById("generateButton5").addEventListener("click", () => {
  const description = generateRandomPrompt("lifeScenePrompts");
  document.getElementById("generatedDescription5").textContent = description;
});

document.getElementById("generateButton6").addEventListener("click", () => {
  const description = generateRandomPrompt("seasonalThemePrompts");
  document.getElementById("generatedDescription6").textContent = description;
});

document.getElementById("generateButton7").addEventListener("click", () => {
  const description = generateRandomPrompt("historicalContextPrompts");
  document.getElementById("generatedDescription7").textContent = description;
});

document.getElementById("generateButton8").addEventListener("click", () => {
  const description = generateRandomPrompt("futuristicConceptPrompts");
  document.getElementById("generatedDescription8").textContent = description;
});

document.getElementById("generateButton9").addEventListener("click", () => {
  const description = generateRandomPrompt("colorThemePrompts");
  document.getElementById("generatedDescription9").textContent = description;
});

document.getElementById("generateButton10").addEventListener("click", () => {
  const description = generateRandomPrompt("adventureScenarioPrompts");
  document.getElementById("generatedDescription10").textContent = description;
});

document.getElementById("generateButton11").addEventListener("click", () => {
  const description = generateRandomPrompt("magicalRealmsPrompts");
  document.getElementById("generatedDescription11").textContent = description;
});
