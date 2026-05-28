import { motion } from "framer-motion";
import { ArrowRight, CircleDot, ExternalLink, Heart, Music2, ShoppingBag, Sparkles } from "lucide-react";

const colorways = [
  { name: "Pink", tone: "Velvet blush", color: "#eaa0c0", x: "12%", y: "7%" },
  { name: "Cream", tone: "Warm vanilla", color: "#ece0c9", x: "58%", y: "19%" },
  { name: "Silver", tone: "Chrome flash", color: "#c8c8c8", x: "9%", y: "52%" },
  { name: "Pastel blue", tone: "Soft ice", color: "#a9e2e6", x: "58%", y: "54%" },
  { name: "Brown", tone: "Mocha track", color: "#52352e", x: "9%", y: "64%" },
  { name: "Black", tone: "Night pink", color: "#15191d", x: "9%", y: "84%" },
  { name: "Animal", tone: "Leopard mood", color: "#b37a45", x: "10%", y: "73%" }
];

const outfits = [
  {
    label: "baggy denim + headphones",
    note: "airport-core",
    rotate: "-3deg",
    crop: "50% 9%"
  },
  {
    label: "mini skirt + oversized jacket",
    note: "city girl lap",
    rotate: "2deg",
    crop: "20% 44%"
  },
  {
    label: "tote bag + low-rise denim",
    note: "coffee walk",
    rotate: "-1deg",
    crop: "74% 35%"
  }
];

const products = [
  {
    name: "Blush Drift",
    price: "$92",
    detail: "pink suede / cream stripe",
    shop: "https://us.puma.com/us/en/search?q=speedcat",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/405355/08/sv01/fnd/PNA/fmt/png/Speedcat-Premium-Women's-Sneakers"
  },
  {
    name: "Milk Chrome",
    price: "$98",
    detail: "silver mirror / white sole",
    shop: "https://us.puma.com/us/en/search?q=speedcat",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/406881/02/sv01/fnd/PNA/fmt/png/Speedcat-Silver-Women's-Sneakers"
  },
  {
    name: "Cocoa Sprint",
    price: "$96",
    detail: "brown suede / racing black",
    shop: "https://us.puma.com/us/en/search?q=speedcat",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/401287/06/sv01/fnd/PNA/fmt/png/Speedcat-Ballet-Suede-Women's-Sneakers"
  },
  {
    name: "Blue Lap",
    price: "$90",
    detail: "pastel blue / gum finish",
    shop: "https://us.puma.com/us/en/search?q=speedcat",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/405355/02/sv01/fnd/PNA/fmt/png/Speedcat-Premium-Women's-Sneakers"
  }
];

const webShoes = [
  {
    name: "Speedcat Premium",
    shade: "Cool light gray",
    url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/405355/02/sv01/fnd/PNA/fmt/png/Speedcat-Premium-Women's-Sneakers"
  },
  {
    name: "Speedcat Premium",
    shade: "Poised pink",
    url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/405355/08/sv01/fnd/PNA/fmt/png/Speedcat-Premium-Women's-Sneakers"
  },
  {
    name: "Speedcat Silver",
    shade: "Alpine snow",
    url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/406881/02/sv01/fnd/PNA/fmt/png/Speedcat-Silver-Women's-Sneakers"
  },
  {
    name: "Speedcat Ballet",
    shade: "Black white",
    url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/401287/06/sv01/fnd/PNA/fmt/png/Speedcat-Ballet-Suede-Women's-Sneakers"
  },
  {
    name: "Speedcat Venus",
    shade: "Pearl pink",
    url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/406249/01/sv01/fnd/PNA/fmt/png/Speedcat-Venus-Women's-Sneakers"
  },
  {
    name: "Wicked Silver",
    shade: "Metallic ballet",
    url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/407135/01/sv01/fnd/PNA/fmt/png/PUMA-x-WICKED-Speedcat-Ballet-Silver-Slippers-Women's-Sneakers"
  }
];

const socials = [
  ["Instagram", "https://www.instagram.com/puma/"],
  ["YouTube", "https://www.youtube.com/puma"],
  ["X", "https://x.com/PUMA"],
  ["Pinterest", "https://www.pinterest.com/puma/"],
  ["Facebook", "https://www.facebook.com/PUMA/"]
];

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
};

function ShoeCutout({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`shoe-cutout ${className}`}
      initial={{ opacity: 0, y: 28, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-espresso">
      <div className="grain" />

      <section className="relative min-h-screen px-5 pb-16 pt-6 sm:px-8 lg:px-12">
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between border-b border-espresso/15 pb-4 text-[0.68rem] uppercase tracking-[0.28em]">
          <span>Speedcat dossier</span>
          <span className="hidden sm:block">Puma campaign study</span>
          <span>SS / 26</span>
        </nav>

        <div className="absolute left-4 top-28 z-10 hidden h-28 w-9 rotate-[-8deg] rounded-full border border-espresso/45 lg:block" />
        <div className="tape left-[64%] top-28 rotate-3" />
        <div className="tape left-[8%] top-[72%] -rotate-6" />

        <motion.p
          className="absolute left-1/2 top-[9.5rem] z-0 -translate-x-1/2 whitespace-nowrap font-serif text-[24vw] font-semibold leading-none text-blush/35"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
        >
          SPEED
        </motion.p>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 pt-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85 }}>
            <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.12em]">
              <span className="rounded-full border border-espresso/30 px-4 py-2">motorsport made soft</span>
              <span className="rounded-full bg-espresso px-4 py-2 text-cream">y2k revival</span>
            </div>
            <h1 className="max-w-4xl font-serif text-[clamp(4.4rem,13vw,12rem)] font-semibold uppercase leading-[0.75] tracking-normal">
              Puma
              <br />
              Speedcat
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-cocoa/80">
              The racing sneaker turned fashion icon. Built for pit lanes, restyled for mini skirts, baggy denim,
              gloss lips, tote bags, and city walks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="editorial-button bg-espresso text-cream" href="#featured">
                Shop Now <ShoppingBag size={17} />
              </a>
              <a className="editorial-button border border-espresso/25 bg-porcelain text-espresso" href="#colorways">
                Explore Colors <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <div className="relative min-h-[38rem]">
            <motion.div
              className="poster-card absolute right-0 top-0 h-[31rem] w-[min(76vw,30rem)] overflow-hidden bg-mocha"
              initial={{ opacity: 0, rotate: 4, y: 34 }}
              animate={{ opacity: 1, rotate: 2, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              <img className="h-full w-full object-cover" src="/assets/speedcat-colorways.png" alt="Puma Speedcat colorway collage" />
            </motion.div>
            <motion.div
              className="poster-card absolute bottom-0 left-0 h-[31rem] w-[min(78vw,27rem)] overflow-hidden bg-blush"
              initial={{ opacity: 0, rotate: -5, y: 44 }}
              animate={{ opacity: 1, rotate: -3, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 }}
            >
              <img
                className="h-full w-full object-cover object-top"
                src="/assets/samba-editorial-reference.webp"
                alt="Fashion editorial poster reference"
              />
            </motion.div>
            <ShoeCutout className="absolute left-[18%] top-[34%] z-20 w-[78%]" delay={0.45} />
            <div className="hand-note absolute right-[6%] top-[52%] z-30 rotate-3">racing ballet flat energy</div>
            <div className="paperclip absolute right-[18%] top-[7%]" />
          </div>
        </div>
      </section>

      <section id="colorways" className="relative bg-porcelain px-5 py-24 sm:px-8 lg:px-12">
        <motion.div className="mx-auto max-w-7xl" {...fadeUp}>
          <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="section-kicker">Trending colorways</p>
              <h2 className="section-title">Pick a soft statement.</h2>
            </div>
            <p className="max-w-2xl text-cocoa/75">
              Candy suede, chrome shine, warm vanilla, racing brown, and animal print. Small shoes with a sharp
              silhouette and a very saved-to-board kind of energy.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {colorways.map((item, index) => (
              <motion.article
                className="color-card group"
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
              >
                <div className="relative h-44 overflow-hidden rounded-[1.25rem] bg-oat">
                  <img
                    className="absolute inset-0 h-[520%] w-[520%] max-w-none object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: `${item.x} ${item.y}` }}
                    src="/assets/speedcat-colorways.png"
                    alt={`${item.name} Puma Speedcat reference crop`}
                  />
                  <span className="absolute left-4 top-4 h-5 w-5 rounded-full border border-white/70 shadow-sticker" style={{ background: item.color }} />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <h3 className="font-serif text-3xl leading-none">{item.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.16em] text-cocoa/55">{item.tone}</p>
                  </div>
                  <Heart className="opacity-50 transition group-hover:fill-blush group-hover:text-rosewood group-hover:opacity-100" size={21} />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative bg-cream px-5 py-24 sm:px-8 lg:px-12">
        <motion.div className="mx-auto max-w-7xl" {...fadeUp}>
          <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="section-kicker">Official web selects</p>
              <h2 className="section-title">More Speedcat textures.</h2>
            </div>
            <p className="max-w-2xl text-cocoa/75">
              A cleaner product-image moment layered into the moodboard: silver, pink, ballet straps, cream tones,
              and glossy racing details from Puma's current Speedcat universe.
            </p>
          </div>
          <div className="web-shoe-grid">
            {webShoes.map((shoe, index) => (
              <motion.article
                className="web-shoe-card group"
                key={`${shoe.name}-${shoe.shade}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative h-56 overflow-hidden rounded-[1.3rem] bg-porcelain">
                  <img
                    className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-110"
                    src={shoe.url}
                    alt={`${shoe.name} ${shoe.shade}`}
                  />
                </div>
                <div className="flex items-end justify-between gap-4 pt-4">
                  <div>
                    <h3 className="font-serif text-3xl leading-none">{shoe.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cocoa/55">{shoe.shade}</p>
                  </div>
                  <span className="font-script text-2xl text-rosewood">saved</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative bg-blush px-5 py-24 text-porcelain sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 font-serif text-[18vw] leading-none text-porcelain/12">STYLE</div>
        <motion.div className="relative mx-auto max-w-7xl" {...fadeUp}>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker text-porcelain/70">Street style / outfit inspo</p>
              <h2 className="section-title max-w-3xl">A Pinterest board you can wear.</h2>
            </div>
            <p className="max-w-md text-porcelain/75">
              Baggy denim, micro hems, oversized jackets, wired sound, and tote bags. The Speedcat reads soft,
              sporty, and slightly cinematic on the street.
            </p>
          </div>
          <div className="grid gap-7 lg:grid-cols-3">
            {outfits.map((outfit, index) => (
              <motion.article
                className="polaroid"
                key={outfit.label}
                style={{ rotate: outfit.rotate }}
                whileHover={{ y: -10, rotate: "0deg" }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <div className="relative h-80 overflow-hidden bg-cream">
                  <img
                    className="h-full w-full object-cover"
                    style={{ objectPosition: outfit.crop }}
                    src="/assets/samba-editorial-reference.webp"
                    alt={outfit.label}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-porcelain px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-espresso">
                    look 0{index + 1}
                  </span>
                </div>
                <div className="px-5 py-5 text-espresso">
                  <p className="font-script text-3xl text-rosewood">{outfit.note}</p>
                  <h3 className="mt-1 text-sm uppercase tracking-[0.18em]">{outfit.label}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative bg-espresso px-5 py-24 text-cream sm:px-8 lg:px-12">
        <motion.div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]" {...fadeUp}>
          <div>
            <p className="section-kicker text-blush">Culture / history</p>
            <h2 className="section-title">From pit lane to moodboard.</h2>
            <p className="mt-6 leading-8 text-cream/70">
              Speedcat began as a low-profile motorsport shoe: slim, grounded, and made for control. Its comeback
              lands perfectly in the Y2K cycle, where narrow silhouettes, Mary Jane straps, racing references, and
              streetwear styling keep resurfacing across TikTok and Pinterest.
            </p>
          </div>
          <div className="magazine-spread">
            <div className="font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.75] text-blush">01</div>
            <div className="space-y-6">
              <div className="history-line">
                <span>motorsport heritage</span>
                <p>Low sole, curved panels, track-coded attitude.</p>
              </div>
              <div className="history-line">
                <span>Y2K revival</span>
                <p>Glossy, compact sneakers are back under loose denim and micro skirts.</p>
              </div>
              <div className="history-line">
                <span>social proof</span>
                <p>Outfit grids, thrift styling, and saved pins turned the shoe into a soft-luxury uniform.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="featured" className="bg-cream px-5 py-24 sm:px-8 lg:px-12">
        <motion.div className="mx-auto max-w-7xl" {...fadeUp}>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Featured products</p>
              <h2 className="section-title">Objects of motion.</h2>
            </div>
            <div className="flex gap-3">
              <a className="editorial-button bg-espresso text-cream" href="#colorways">
                Shop Now <ExternalLink size={16} />
              </a>
              <a className="editorial-button border border-espresso/25 bg-porcelain text-espresso" href="#colorways">
                Explore Colors <Sparkles size={16} />
              </a>
            </div>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-6">
            {products.map((product) => (
              <motion.article className="product-card group snap-start" key={product.name} whileHover={{ y: -8 }}>
                <div className="relative h-72 overflow-hidden rounded-[1.5rem] bg-mink">
                  <img
                    className="h-full w-full object-contain p-8 opacity-95 transition duration-500 group-hover:scale-110"
                    src={product.image}
                    alt={`${product.name} Speedcat`}
                  />
                  <div className="puma-mark absolute left-5 top-5">PUMA</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-70" />
                  <CircleDot className="absolute right-5 top-5 text-porcelain" />
                </div>
                <div className="pt-5">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-serif text-4xl leading-none">{product.name}</h3>
                    <span className="font-mono text-sm">{product.price}</span>
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-cocoa/60">{product.detail}</p>
                  <div className="mt-5 flex gap-3">
                    <a
                      className="mini-action bg-espresso text-cream"
                      href={product.shop}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shop
                    </a>
                    <a className="mini-action border border-espresso/20 text-espresso" href="#colorways">
                      Colors
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-espresso/15 bg-porcelain px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-cocoa/70 md:grid-cols-[1fr_1.2fr_1fr] md:items-end">
          <div>
            <p className="font-serif text-3xl text-espresso">Puma Speedcat</p>
            <p className="mt-2 uppercase tracking-[0.18em]">fashion editorial landing</p>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-espresso">Puma socials</p>
            <div className="flex flex-wrap gap-3">
              {socials.map(([label, url]) => (
                <a className="social-pill" href={url} key={label} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-[1.1rem] border border-espresso/15 bg-cream p-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-espresso">Práctica de GitHub y Netlify</p>
            <p className="mt-2 font-serif text-2xl leading-none text-espresso">Nathalie Brenda Ramirez Olivera</p>
            <p className="mt-3 inline-flex items-center gap-2 uppercase tracking-[0.18em]"><Music2 size={14} /> student project</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
