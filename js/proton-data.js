// Anti-cheat game compatibility database
// STEAM_CDN: https://cdn.cloudflare.steamstatic.com/steam/apps/{appId}/header.jpg

const STEAM_CDN = "https://cdn.cloudflare.steamstatic.com/steam/apps";

const ANTI_CHEAT_GAMES = [
  // === BLOCKED: Kernel-level anti-cheat, no Linux support ===
  {
    name: "Fortnite",
    appId: null,
    status: "blocked",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "Epic Games has not enabled EAC Linux support. CEO Tim Sweeney has publicly opposed Linux gaming.",
    category: "Battle Royale"
  },
  {
    name: "Valorant",
    appId: null,
    status: "blocked",
    antiCheat: "Vanguard (Kernel)",
    reason: "Vanguard is a kernel-level driver with no Linux equivalent. Riot has stated no plans for Linux support.",
    category: "Tactical Shooter"
  },
  {
    name: "Destiny 2",
    appId: 1085660,
    status: "blocked",
    antiCheat: "BattlEye",
    reason: "Bungie uses BattlEye without Linux support. Playing via Proton results in an instant ban.",
    category: "Looter Shooter"
  },
  {
    name: "Apex Legends",
    appId: 1172470,
    status: "blocked",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "Linux support blocked by EA since October 2024. Previously worked via Proton.",
    category: "Battle Royale"
  },
  {
    name: "Call of Duty",
    appId: 1938090,
    status: "blocked",
    antiCheat: "Ricochet (Kernel)",
    reason: "Ricochet is kernel-level anti-cheat. Activision has never supported Linux for any COD title.",
    category: "FPS"
  },
  {
    name: "Rainbow Six Siege",
    appId: 359550,
    status: "blocked",
    antiCheat: "BattlEye",
    reason: "Ubisoft has not enabled BattlEye Linux support despite community requests.",
    category: "Tactical Shooter"
  },
  {
    name: "PUBG: BATTLEGROUNDS",
    appId: 578080,
    status: "limited",
    antiCheat: "BattlEye / Wellbia",
    reason: "Multiple anti-cheat layers. Works inconsistently — may be blocked patch by patch.",
    category: "Battle Royale"
  },
  {
    name: "Rust",
    appId: 252490,
    status: "blocked",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "Facepunch has not enabled EAC Linux support. Game will not launch.",
    category: "Survival"
  },
  {
    name: "Dead by Daylight",
    appId: 381210,
    status: "blocked",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "Behaviour Interactive disabled EAC Linux support. Previously Platinum on ProtonDB.",
    category: "Horror"
  },
  {
    name: "Hunt: Showdown 1896",
    appId: 594650,
    status: "blocked",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "Crytek has not enabled EAC Linux. Blocked since engine update.",
    category: "Extraction Shooter"
  },
  {
    name: "Paladins",
    appId: 444090,
    status: "blocked",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "Hi-Rez has not enabled Linux EAC support.",
    category: "Hero Shooter"
  },
  {
    name: "The Finals",
    appId: 2073850,
    status: "blocked",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "Embark Studios has not enabled EAC Linux support.",
    category: "FPS"
  },
  {
    name: "War Thunder",
    appId: 236390,
    status: "limited",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "EAC Linux support enabled, but custom launcher can cause issues.",
    category: "Combat"
  },
  {
    name: "Escape from Tarkov",
    appId: null,
    status: "blocked",
    antiCheat: "BattlEye",
    reason: "Not on Steam. BattlEye without Linux support. Launcher requires Windows.",
    category: "Extraction Shooter"
  },
  {
    name: "League of Legends",
    appId: null,
    status: "blocked",
    antiCheat: "Vanguard (Kernel)",
    reason: "Vanguard anti-cheat added in 2024. No Linux support. Riot uses kernel-level drivers.",
    category: "MOBA"
  },

  // === LIMITED: Works with caveats ===
  {
    name: "GTA V Online",
    appId: 271590,
    status: "limited",
    antiCheat: "BattlEye",
    reason: "BattlEye Linux support is enabled, but Rockstar's launcher requires workarounds.",
    category: "Open World"
  },
  {
    name: "Arma 3",
    appId: 107410,
    status: "limited",
    antiCheat: "BattlEye",
    reason: "BattlEye Linux enabled. Some community servers block Linux clients manually.",
    category: "Military Sim"
  },
  {
    name: "PlanetSide 2",
    appId: 218230,
    status: "limited",
    antiCheat: "BattlEye",
    reason: "BattlEye Linux support is enabled but flagged inconsistently by server admins.",
    category: "MMOFPS"
  },

  // === WORKING: Popular games that prove Steam Machine can game ===
  {
    name: "Elden Ring",
    appId: 1245620,
    status: "works",
    antiCheat: "Easy Anti-Cheat (EAC)",
    reason: "EAC Linux fully enabled. Platinum on ProtonDB. Works perfectly.",
    category: "Action RPG"
  },
  {
    name: "Baldur's Gate 3",
    appId: 1086940,
    status: "works",
    antiCheat: "None",
    reason: "Native Linux support + Proton. No anti-cheat. Platinum on ProtonDB.",
    category: "CRPG"
  },
  {
    name: "Cyberpunk 2077",
    appId: 1091500,
    status: "works",
    antiCheat: "None",
    reason: "No anti-cheat. Platinum on ProtonDB. Works at 1080p High on 8GB VRAM.",
    category: "Action RPG"
  },
  {
    name: "HELLDIVERS 2",
    appId: 553850,
    status: "works",
    antiCheat: "GameGuard",
    reason: "GameGuard added in 2024 but Linux is supported via GameGuard version update.",
    category: "Co-op Shooter"
  },
  {
    name: "Palworld",
    appId: 1623730,
    status: "works",
    antiCheat: "None",
    reason: "No anti-cheat. Works via Proton. Good at 1440p on 8GB VRAM.",
    category: "Survival"
  },
  {
    name: "Monster Hunter Wilds",
    appId: 2246340,
    status: "works",
    antiCheat: "None",
    reason: "No kernel anti-cheat. Works via Proton at 1080p. VRAM-hungry — use Medium textures.",
    category: "Action RPG"
  },
  {
    name: "Hades II",
    appId: 2161740,
    status: "works",
    antiCheat: "None",
    reason: "No anti-cheat. Lightweight — runs flawlessly on 8GB VRAM.",
    category: "Roguelike"
  },
  {
    name: "Red Dead Redemption 2",
    appId: 1174180,
    status: "works",
    antiCheat: "Rockstar Launcher",
    reason: "Works via Proton. Launcher can be finicky on first boot but stable after.",
    category: "Open World"
  },
  {
    name: "Hogwarts Legacy",
    appId: 990080,
    status: "works",
    antiCheat: "Denuvo (removed)",
    reason: "Denuvo removed in 2024 patch. Works via Proton at 1080p High.",
    category: "Action RPG"
  },
  {
    name: "Stardew Valley",
    appId: 413150,
    status: "works",
    antiCheat: "None",
    reason: "Native Linux build. Works perfectly.",
    category: "Farming Sim"
  },
  {
    name: "Civilization VII",
    appId: 289070,
    status: "works",
    antiCheat: "None",
    reason: "Linux native. No anti-cheat. Runs on any hardware.",
    category: "Strategy"
  },
  {
    name: "Counter-Strike 2",
    appId: 730,
    status: "works",
    antiCheat: "VAC",
    reason: "Native Linux. VAC fully supports Linux. Valve's own game — works perfectly.",
    category: "FPS"
  }
];

// Top 20 for homepage display (sorted: blocked first, then limited, then working)
const TOP_BLOCKED = ANTI_CHEAT_GAMES.filter(g => g.status === 'blocked').slice(0, 15);
const TOP_LIMITED = ANTI_CHEAT_GAMES.filter(g => g.status === 'limited').slice(0, 3);
const TOP_WORKING = ANTI_CHEAT_GAMES.filter(g => g.status === 'works').slice(0, 5);
