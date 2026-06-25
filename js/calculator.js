// Build-vs-buy budget calculator
// Maps (region, budget) → suggested self-built PC specs

const BUILD_SPECS = {
  us: [
    { max: 700, gpu: "RX 7600 8GB", cpu: "Ryzen 5 7600", ram: "16GB DDR5", storage: "1TB NVMe",
      note: "Matches Steam Machine performance at lower price. Good for 1080p gaming." },
    { max: 900, gpu: "RX 7700 XT 12GB", cpu: "Ryzen 5 7600X", ram: "16GB DDR5", storage: "1TB NVMe",
      note: "12GB VRAM — better than Steam Machine for 1440p. Strong value." },
    { max: 1100, gpu: "RX 7800 XT 16GB", cpu: "Ryzen 7 7700X", ram: "32GB DDR5", storage: "2TB NVMe",
      note: "16GB VRAM. Dominates 1440p, capable 4K. Beats Steam Machine on every spec." },
    { max: 1500, gpu: "RX 7900 XT 20GB", cpu: "Ryzen 7 7800X3D", ram: "32GB DDR5", storage: "2TB NVMe",
      note: "20GB VRAM. 4K gaming with headroom. Overkill for SteamOS use case." }
  ],
  uk: [
    { max: 600, gpu: "RX 7600 8GB", cpu: "Ryzen 5 7600", ram: "16GB DDR5", storage: "1TB NVMe",
      note: "£600-650 range. Solid 1080p build." },
    { max: 800, gpu: "RX 7700 XT 12GB", cpu: "Ryzen 5 7600X", ram: "16GB DDR5", storage: "1TB NVMe",
      note: "12GB VRAM at £750-800. Better value than Steam Machine." },
    { max: 1000, gpu: "RX 7800 XT 16GB", cpu: "Ryzen 7 7700X", ram: "32GB DDR5", storage: "2TB NVMe",
      note: "£950-1000. 16GB VRAM. Beats Steam Machine." },
    { max: 1300, gpu: "RX 7900 XT 20GB", cpu: "Ryzen 7 7800X3D", ram: "32GB DDR5", storage: "2TB NVMe",
      note: "20GB VRAM. 4K capable." }
  ],
  eu: [
    { max: 700, gpu: "RX 7600 8GB", cpu: "Ryzen 5 7600", ram: "16GB DDR5", storage: "1TB NVMe",
      note: "~€650-700. Solid 1080p build." },
    { max: 900, gpu: "RX 7700 XT 12GB", cpu: "Ryzen 5 7600X", ram: "16GB DDR5", storage: "1TB NVMe",
      note: "12GB VRAM at ~€850. Better value." },
    { max: 1100, gpu: "RX 7800 XT 16GB", cpu: "Ryzen 7 7700X", ram: "32GB DDR5", storage: "2TB NVMe",
      note: "~€1050. 16GB VRAM. Beats Steam Machine." },
    { max: 1500, gpu: "RX 7900 XT 20GB", cpu: "Ryzen 7 7800X3D", ram: "32GB DDR5", storage: "2TB NVMe",
      note: "20GB VRAM. 4K capable." }
  ]
};

const STEAM_MACHINE_PRICE = { us: 1049, uk: 899, eu: 1049 };
const STEAM_MACHINE_SPEC = "8GB AMD semi-custom GPU, Zen 4 CPU, 1TB NVMe, SteamOS";

function calculateBuild(region, budget) {
  var specs = BUILD_SPECS[region];
  var match = specs[specs.length - 1]; // default: highest tier
  for (var i = 0; i < specs.length; i++) {
    if (budget <= specs[i].max) { match = specs[i]; break; }
  }
  return match;
}
