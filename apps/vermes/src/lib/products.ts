import { delay, shuffleArray } from "@/lib/utils";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  size?: string;
  category: string;
  description?: string;
  featured?: boolean;
};

export const silkProducts: Product[] = [
  {
    id: "ready-go-scarf-45",
    name: "Ready... Go! scarf",
    price: "$285",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/893822S%2006_flat_wm_3?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    size: "45",
    category: "womens-silk",
    description:
      "Scarf in silk twill with hand-rolled edges (100% silk).\n\n" +
      "Whether it's in your hair, around your neck or on a bag, this small-sized scarf is easy to wear and instantly transforms your look.\n\n" +
      "Made in France\n\n" +
      "Designed by Baptiste Virot\n\n" +
      'Dimensions: 16.5" x 16.9" | As this scarf is hand-rolled, the dimensions indicated may vary.\n',
  },
  {
    id: "carrick-a-pompe-scarf-45",
    name: "Carrick a Pompe scarf",
    price: "$285",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/893933S%2003_flat_wm_3?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    size: "45",
    category: "womens-silk",
    description:
      "Scarf in silk twill with hand-rolled edges (100% silk).\n\n" +
      "Whether it's in your hair, around your neck or on a bag, this small-sized scarf is easy to wear and instantly transforms your look.\n\n" +
      "Made in France\n\n" +
      "Designed by Philippe Ledoux\n\n" +
      'Dimensions: 16.5" x 16.9" | As this scarf is hand-rolled, the dimensions indicated may vary.',
  },
  {
    id: "les-tresors-dun-artiste-scarf-45",
    name: "Les Tresors d'un Artiste scarf",
    price: "$285",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/893119S%2003_flat_wm_3?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    size: "45",
    category: "womens-silk",
    description:
      "Scarf in silk twill with hand-rolled edges (100% silk).\n\n" +
      "Whether it's in your hair, around your neck or on a bag, this small-sized scarf is easy to wear and instantly transforms your look.\n\n" +
      "Made in France\n\n" +
      "Designed by Pierre Marie\n\n" +
      'Dimensions: 16.5" x 16.9" | As this scarf is hand-rolled, the dimensions indicated may vary.',
  },
  {
    id: "brides-de-gala-tattoo-cotton-applique-scarf-90",
    name: "Brides de Gala Tattoo Cotton Appliqué scarf",
    price: "$2,150",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/594146S%2002_flat_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    size: "90",
    category: "womens-silk",
    description:
      "Scarf in silk twill with hand-rolled edges (100% silk), cotton appliqué (100% cotton).\n\n" +
      "The iconic Brides de Gala design highlighted this season has been interpreted in a tattoo version. A lightweight, colored cotton voile is satin-stitched for a summery double-face look.\n\n" +
      "Made in France\n\n" +
      "Designed by Hugo Grygkar\n\n" +
      'Dimensions: 34.8" x 34.8" | As this scarf is hand-rolled, the dimensions indicated may vary.',
    featured: true,
  },
  {
    id: "ivresse-au-vent-scarf-70",
    name: "Ivresse Au Vent scarf",
    price: "$460",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/984122S%2005_worn_4?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    size: "70",
    category: "womens-silk",
    description:
      "Scarf in silk with hand-rolled edges (100% silk).\n\n" +
      "Immerse yourself in captivating silk, where a sense of lightness, boldness and boundless playfulness intertwine. The 70 scarf is modern and effortless, with its versatile, creative and playful ways of wearing.\n\n" +
      "Made in France\n\n" +
      "Designed by Takashi Nakamura\n\n" +
      'Dimensions: 25" x 25" | As this scarf is hand-rolled, the dimensions indicated may vary.',
  },
  {
    id: "nous-sommes-inseparables-scarf-90",
    name: "Nous Sommes Inseparables scarf",
    price: "$620",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/004149S%2004_flat_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700\n",
    size: "90",
    category: "womens-silk",
    description:
      "Scarf in silk twill with hand-rolled edges (100% silk).\n" +
      "This iconic Hermès piece embodies the essence of powerful beauty and charismatic femininity. The 90 scarf symbolizes the boundless freedom of constantly renewed creation, unlimited emotion and the unique expression of a personal narrative waiting to be written.\n" +
      "Made in France\n" +
      "Designed by Florence Manlik\n" +
      'Dimensions: 34.8" x 34.8" | As this scarf is hand-rolled, the dimensions indicated may vary.',
  },
  {
    id: "festival-des-amazones-bandana-shawl-140",
    name: "Festival des Amazones Bandana shawl",
    price: "$740",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/244217S%2001_worn_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    size: "140",
    category: "womens-silk",
    description:
      "Shawl in cashmere and silk with hand-rolled edges (70% cashmere, 30% silk).\n\n" +
      "Experience an inherent elegance and an effortless sense of confidence with this captivating 140 shawl. Crafted to perfection, this supple, lightweight accessory effortlessly elevates your look, making it the perfect companion for any occasion.\n\n" +
      "Made in France\n\n" +
      "Designed by Henri d'Origny\n\n" +
      'Dimensions: 53" x 54" | As this shawl is hand-rolled, the dimensions indicated may vary.',
    featured: true,
  },
];
export const womensShoesProducts: Product[] = [
  {
    id: "chypre-sandal",
    name: "Chypre sandal",
    price: "$1,050",
    category: "womens-shoes",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/222297Z%205K_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Techno-sandal in suede goatskin with anatomical rubber sole and adjustable strap.\n\n" +
      "A sleek design for a comfortable and casual look.\n\n" +
      "Made in Italy\n\n" +
      'Heel height: 0.5"',
  },
  {
    id: "oran-sandal",
    name: "Oran sandal",
    price: "$920",
    category: "womens-shoes",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251047Z%20A3_worn_3?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Sandal in fringed linen canvas with iconic "H" cut-out detail.\n\n' +
      "For a chic look, perfect for summer.\n\n" +
      "Made in Italy",
  },
  {
    id: "jolly-ballet-flat",
    name: "Jolly ballet flat",
    price: "$1,125",
    category: "womens-shoes",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/252296Z%205K_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Ballet flat in suede goatskin and calfskin with signature wrap-around ankle strap.\n\n" +
      "For a modern and elegant look.\n\n" +
      "Made in Italy",
  },
  {
    id: "kamilla-60-pump",
    name: "Kamilla 60 Pump",
    price: "$1,300",
    category: "womens-shoes",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251270Z%201W_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'High heel Mary Jane shoe in goatskin and Nappa leather with signature "H" buckle and contrasting piping.\n\n' +
      "For a delicate feminine look.\n\n" +
      "Made in Italy\n\n" +
      'Heel height: 2.4"',
  },
  {
    id: "santorini-sandal",
    name: "Santorini Sandal",
    price: "1,075",
    category: "womens-shoes",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251069Z%20A3_worn_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Sandal in fringed linen canvas with iconic "H" cut-out detail and adjustable ankle strap.\n\n' +
      "For a chic look, perfect for summer.\n\n" +
      "Made in Italy",
  },
];
export const tablewareProducts: Product[] = [
  {
    id: "grand-attelage-dinner-fork",
    name: "Grand Attelage dinner fork",
    price: "$650",
    category: "tableware",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/008902P_worn_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Dinner fork in gold-plated metal\n\n" +
      "Original in shape and form, the Grand Attelage set is inspired by the saddle key, a piece used in multi-horse carriages. This gold-plated collection comprises 15 pieces of cutlery: for dinner, dessert and for serving.\n\n" +
      "Made in France\n\n" +
      "Designed by Philippe Mouquet\n\n" +
      'Measures 7.9" long',
  },
  {
    id: "interligne-napkin",
    name: "Interligne Napkin",
    price: "$210",
    category: "tableware",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/103979M%2006_flat_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Napkin in embroidered linen\n\n" +
      "- 100% linen\n\n" +
      "- Cross-stitch machine embroidery (100% polyester)\n\n" +
      "- Woven in Italy and embroidered in Germany\n\n" +
      "Made in Germany\n\n" +
      "Designed by Hermès Studio\n\n" +
      'Dimensions: 17.7" x 17.7"',
  },
  {
    id: "grand-attelage-dinner-knife",
    name: "Grand Attelage dinner knife",
    price: "$690",
    category: "tableware",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/008903P_worn_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Dinner knife in gold-plated metal\n\n" +
      "Original in shape and form, the Grand Attelage set is inspired by the saddle key, a piece used in multi-horse carriages. This gold-plated collection comprises 15 pieces of cutlery: for dinner, dessert and for serving.\n\n" +
      "Made in France\n\n" +
      "Designed by Philippe Mouquet\n\n" +
      'Measures 8.9" long',
  },
];
export const jewelryProducts: Product[] = [
  {
    id: "mini-pop-h-pendant",
    name: "Mini Pop H pendant",
    price: "$510",
    category: "jewelry",
    featured: true,
    image:
      "https://assets.hermes.com/is/image/hermesproduct/147992F%20B7_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Pendant in lacquered metal.\n\n" +
      "The curves of the iconic Pop H model are revisited in this mini version.\n\n" +
      "Made in France\n\n" +
      "Metallic finish: Yellow gold plated\n\n" +
      'Total chain length: 15.7" | Pendant size: 0.35" x 0.28"',
  },
  {
    id: "athena-earrings",
    name: "Athena earrings",
    price: "$1,525",
    category: "jewelry",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/500345FC10_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Earrings in Epsom calfskin and metal.\n\n" +
      "The Athena line celebrates our emblematic Medor signature, delicately reinterpreting the stud on a range of metal and leather jewelry.\n\n" +
      "Made in France\n\n" +
      "Metallic finish: Others\n\n" +
      'Diameter: 1.8" | Width: 0.16" | Weight of one earring: 0.6 oz',
  },
  {
    id: "athena-bracelet",
    name: "Athena bracelet",
    price: "$910",
    category: "jewelry",
    featured: true,
    image:
      "https://assets.hermes.com/is/image/hermesproduct/500373FC89_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Bracelet in Epsom calfskin and metal.\n\n" +
      "The Athena line celebrates our emblematic Medor signature, reinterpreting the stud on a range of metal and leather jewelry.\n\n" +
      "Thin bracelets are perfect for stacking!\n\n" +
      "Made in France\n\n" +
      "Metallic finish: Rose gold plated\n\n" +
      'Wrist size from 5.3" to 5.7" | Width: 0.12"',
  },
  {
    id: "mini-maillon-earrings",
    name: "Mini Maillon earrings",
    price: "$770",
    category: "jewelry",
    featured: true,
    image:
      "https://assets.hermes.com/is/image/hermesproduct/100052FE12_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Pendant in metal.\n\n" +
      "The Mini Maillon line borrows the signature Chaine d'Ancre clasp and echoes our nautical inspiration. Everyday jewelry available in a wide range of colors, to be worn alone or stacked. An adjustment ring allows the length of the pendant to be altered.\n\n" +
      "Made in France\n\n" +
      "Metallic finish: Cold yellow gold plated\n\n" +
      'Adjustable length: 16.5"-18.9" | Pendant size: 0.79" x 0.47',
  },
  {
    id: "athena-simple-stud-ring",
    name: "Athena simple stud ring",
    price: "$385",
    category: "jewelry",
    featured: true,
    image:
      "https://assets.hermes.com/is/image/hermesproduct/500347FC89_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Simple stud ring in Madame calfskin and metal.\n\n" +
      "The Athena line celebrates our emblematic Medor signature, delicately reinterpreting the stud on a range of metal and leather jewelry. These new refined rings can be worn alone but are also perfect for stacking.\n\n" +
      "Made in France\n\n" +
      "Metallic finish: Others\n\n" +
      'Width: 0.27"',
  },
  {
    id: "h-equipe-earrings",
    name: "H Equipe earrings",
    price: "$580",
    category: "jewelry",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/057086FL20_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Earrings in lacquered horn with Clou de Selle detail.\n\n" +
      "Made in Vietnam\n\n" +
      "Metallic finish: Others\n\n" +
      'Total length: 2.4" | Pendant width: 2" | Weight of one earring: 0.28 oz',
  },
  {
    id: "h-equipe-pendant",
    name: "H Equipe pendant",
    price: "$460",
    category: "jewelry",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/057087FL20_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Pendant in lacquered horn.\n\n" +
      "Made in Vietnam\n\n" +
      "Metallic finish: Others\n\n" +
      'Total cord length: 30.7" | Pendant size: 3.3" x 2.7"',
  },
];
export const readyToWearProducts: Product[] = [
  {
    id: "bride-de-gala-en-fleurs",
    name: '"Bride de Gala en Fleurs" shirt',
    price: "$4,050",
    category: "ready-to-wear",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/5E0647DQ2Y_worn_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Shirt in "Brides de Gala en Fleurs" printed silk (100% silk)\n' +
      "- Middle front hidden button facing fastening with Clou de Selle engraved mother-of-pearl buttons\n\n" +
      "- Button facing, cuffs and collar lining in plain light silk twill\n\n" +
      "This piece is slim fit, size up for a looser fit.\n\n" +
      "Made in France",
  },
  {
    id: "elaia-swimsuit",
    name: "Elaia swimsuit",
    price: "$670",
    category: "ready-to-wear",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/5E3717D1AY_worn_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Swimsuit in plain jersey (62% polyamide, 38% elastane)\n\n" +
      "- Bustier\n\n" +
      "- Removable shoulder straps\n\n" +
      '- Front with "Clou Medor" Rilsan®-coated metal detail\n\n' +
      "- Front with anti-slip strap\n\n" +
      "- Lining in cotton jersey\n\n" +
      "This piece runs large, size down for a slimmer fit.\n\n" +
      "Made in France",
  },
  {
    id: "brides-de-gala-en-fleurs-twillaine-nightgown-dress",
    name: '"Brides de Gala en Fleurs" twillaine nightgown dress',
    price: "$5,400",
    category: "ready-to-wear",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/5E2819DQ2Y_worn_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Twillaine nightgown dress in silk and scarf with "Brides de Gala en Fleurs" printed silk (100% silk, knit: 100% silk)\n\n' +
      "- Top with rib trim\n\n" +
      "- Straps with floral-inspired stitches\n\n" +
      '- Front body and back in "Bride de Gala en Fleurs" printed silk\n\n' +
      "This piece runs true-to-size.\n\n" +
      "Made in Italy",
  },
];
export const leatherProducts: Product[] = [
  {
    id: "customizable-calvi-card-holder",
    name: "Customizable Calvi card holder",
    price: "$435",
    category: "leather",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/258723AA00_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Card holder\n\n" +
      "- Palladium-plated snap closure\n\n" +
      "- Two credit card slots on each side\n\n" +
      "Made in France\n\n" +
      'Dimensions: L 7 x H 10.5 x D 1.3 cm / L 2.8" x H 4.1" x D 0.5".\n' +
      "Made in France",
  },
  {
    id: "customizable-bastia-coin-purse",
    name: "Customizable Bastia coin purse",
    price: "$295",
    category: "leather",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/264142AA00_above_wm_4?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Folded change purse\n\n" +
      "- Palladium-plated snap closure\n\n" +
      "Made in France\n\n" +
      'Dimensions: L 8.5 x H 8 cm / L 3.3" x H 3.1"\n' +
      "Made in France",
  },
  {
    id: "medor-card-holder",
    name: "Medor card holder",
    price: "$1,050",
    category: "leather",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/084730CK18_above_wm_4?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Card holder in Madame calfskin\n\n" +
      "- Clou Medor closure\n\n" +
      "- 2 credit card slots on each side\n\n" +
      "Made in France\n\n" +
      "Metallic finish: Palladium plated\n\n" +
      'Dimensions: L 4.1" x H 3.1" x D 0.6"',
  },
  {
    id: "sursoie-to-go-pouch",
    name: "Sursoie To Go pouch",
    price: "$2,900",
    category: "leather",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/086361CCAA_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=800&hei=800",
    description:
      'Pouch in "Brides de Gala Bayadere" printed Silky silk and Swift calfskin, design by Hugo Grygkar\n' +
      "- Adjustable strap\n\n" +
      "- Can be carried over the shoulder or across the body\n\n" +
      "Made in France\n\n" +
      "Metallic finish: Yellow gold plated\n\n" +
      'Dimensions: L 8.9" x H 6.7" x D 1.2"',
  },
  {
    id: "silk-in-change-purse",
    name: "Silk'In change purse",
    price: "$790",
    category: "leather",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/086425CKAC_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Change purse in Evercolor and Barenia calfskin\n\n" +
      "- Zip closure\n\n" +
      '- Lining in "Della Cavalleria" printed silk twill\n' +
      "Made in France\n\n" +
      "Metallic finish: Palladium plated\n\n" +
      'Dimensions: L 3.1" x H 3.1" x D 0.4"',
  },
];
export const hairProducts: Product[] = [
  {
    id: "sangles-en-zigzag-bandana-grenelle-pm-hair-clip",
    name: '"Sangles en Zigzag Bandana" Grenelle PM hair clip',
    price: "$710",
    category: "hair",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/241015G%20RA_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Bow hair clip in silk twill with "Sangles en Zigzag Bandana" print.\n\n' +
      "Each cut and assembly is unique. Design placement may vary.\n" +
      "Made in France\n" +
      'Length: 5.3"',
  },
  {
    id: "gloria-cigales-hat",
    name: "Gloria Cigales hat",
    price: "$4,975",
    category: "hair",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251083N%20N7_worn_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Hat in braided thin straw with "Le Chant des Cigales" motif by Jan Bajtlik.\n\n' +
      "Several layers of acrylic paint are hand-applied with stencils, before a protective top coat.\n\n" +
      "Made in France\n\n" +
      'Brim length: 6.3"',
  },
  {
    id: "sangles-en-zigzag-bandana-eclipse-pm-hair-clip",
    name: '"Sangles en Zigzag Bandana" Eclipse PM hair clip',
    price: "$590",
    category: "hair",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/241017G%20RA_back_wm_4?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Hair clip in silk twill with "Sangles en Zigzag Bandana" print.\n\n' +
      "Each cut and assembly is unique. Design placement may vary.\n\n" +
      "Made in France\n\n" +
      'Width: 0.6"| Length: 3.7"',
  },
  {
    id: "grace-silk-bloom-headband",
    name: "Grace Silk Bloom headband",
    price: "$1,075",
    category: "hair",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251037G%20CB_front_wm_2?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      'Headband in Swift calfskin with braided spaghetti cords in silk twill with "Planifleurs" print by Christine Henry on the sides, interior Rocabar woven ribbon and polished palladium-plated Clou de Selle detail.\n\n' +
      "Each cut and assembly is unique. Design placement may vary.\n\n" +
      "Made in Italy\n\n" +
      'Width: 1.8"',
  },
];
export const mensShoesProducts: Product[] = [
  {
    id: "chypre-sandal",
    name: "Chypre sandal",
    price: "$1,050",
    category: "mens-shoes",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251890ZHE5_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Techno-sandal in suede goatskin with anatomical rubber sole and adjustable strap.\n\n" +
      "A sleek design for a comfortable and casual look.\n\n" +
      "Made in Italy\n\n" +
      'Heel height: 0.5"',
  },
  {
    id: "bouncing-sneaker",
    name: "Bouncing sneaker",
    price: "$1,050",
    category: "mens-shoes",
    featured: true,
    image:
      "https://assets.hermes.com/is/image/hermesproduct/232856ZH1J_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Buy with Apple Pay\n\n" +
      "Product description\n\n" +
      "Sneaker in graphic mesh and suede goatskin.\n\n" +
      "Light sole with contrasting design for a versatile and modern look.\n\n" +
      "A second pair of strings is included.\n\n" +
      "Made in Italy\n\n" +
      'Sole height: 1.6"',
  },
  {
    id: "paris-loafer",
    name: "Paris loafer",
    price: "$1,375",
    category: "mens-shoes",
    featured: true,
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251855ZAE5_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Loafer in suede calfskin with signature Paris buckle.\n\n" +
      "For a chic look.\n\n" +
      "Made in Italy\n\n" +
      'Heel height: 0.8"',
  },
  {
    id: "trip-espadrille",
    name: "Trip espadrille",
    price: "$880",
    category: "mens-shoes",
    featured: true,
    image:
      "https://assets.hermes.com/is/image/hermesproduct/211874ZHE5_worn_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
    description:
      "Espadrille in suede goatskin with rope sole.\n\n" +
      "A casual style perfect for summer.\n\n" +
      "Made in Spain",
  },
  {
    id: "junior-sandal",
    name: "Junior sandal",
    price: "$1,100",
    featured: true,
    category: "mens-shoes",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/251988ZH90_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=700&hei=700",
  },
];

export const categoryProductsMap: Record<string, Product[]> = {
  "womens-silk": silkProducts,
  "womens-shoes": womensShoesProducts,
  tableware: tablewareProducts,
  jewelry: jewelryProducts,
  "ready-to-wear": readyToWearProducts,
  leather: leatherProducts,
  hair: hairProducts,
  "mens-shoes": mensShoesProducts,
};

export const categoryNames: Record<string, string> = {
  "womens-silk": "Women's Silk",
  "womens-shoes": "Women's Shoes",
  tableware: "Tableware",
  jewelry: "Fashion Jewelry",
  "ready-to-wear": "Women's Ready to Wear",
  leather: "Small Leather Goods",
  hair: "Hair Accessories",
  "mens-shoes": "Men's Shoes",
};

export function getAllCategories(): string[] {
  return Object.keys(categoryNames).flat();
}

export function getProductsByCategory(category: string): Product[] {
  return categoryProductsMap[category] || [];
}

export function getCategoryName(category: string): string | undefined {
  return categoryNames[category];
}

export function getAllProducts(): Product[] {
  return Object.values(categoryProductsMap).flat();
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((product) => product.id === id);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = getAllProducts();

  const lowerCaseQuery = query.toLowerCase();

  const nameMatches: Product[] = [];
  const idMatches: Product[] = [];
  const descriptionMatches: Product[] = [];

  for (const product of products) {
    if (product.name.toLowerCase().includes(lowerCaseQuery)) {
      nameMatches.push(product);
    } else if (product.id.toLowerCase().includes(lowerCaseQuery)) {
      idMatches.push(product);
    } else if (product?.description?.toLowerCase().includes(lowerCaseQuery)) {
      descriptionMatches.push(product);
    }
  }

  await delay(500);

  return [...nameMatches, ...idMatches, ...descriptionMatches];
}

export function getFeaturedProducts(categoryId: string) {
  const categoryProducts = getProductsByCategory(categoryId);

  return categoryProducts.filter((product) => product.featured);
}

export async function getPartnerProducts(id: string): Promise<Product[]> {
  const allProducts = getAllProducts();
  const shuffled = shuffleArray(allProducts);

  await delay(500);

  return shuffled.slice(0, 4);
}
