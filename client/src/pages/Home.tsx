import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  Building2,
  CheckCircle2,
  Clock3,
  Droplets,
  Instagram,
  Layers3,
  MapPin,
  Menu,
  Paintbrush,
  PackageCheck,
  Phone,
  Send,
  ShoppingBag,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const media = {
  logo: "/manus-storage/st-logo_d1c4ec5a.jpg",
  hero: "/manus-storage/shop-front_fc0a2af2.webp",
  shelves: "/manus-storage/shop-shelves_0626e9e9.webp",
  counter: "/manus-storage/shop-counter_9a205212.webp",
  store: "/manus-storage/shop-display_2a565464.webp",
  paint: "/manus-storage/shop-paints_3c1c5c5b.webp",
  fittings: "/manus-storage/shop-fittings_1ae77786.webp",
  details: "/manus-storage/shop-details_8348f12d.webp",
  portrait: "/manus-storage/shop-portrait_3b6cdd0a.webp",
};

type Category = {
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  image: string;
  accent: string;
};

const categories: Category[] = [
  {
    title: "Cement & core materials",
    eyebrow: "01 / Build strong",
    description: "Dependable cement and essential construction supplies for the work behind every good home.",
    icon: Building2,
    image: media.store,
    accent: "sun",
  },
  {
    title: "Colours & paints",
    eyebrow: "02 / Finish beautifully",
    description: "Interior and exterior paints, primers and finishing products that make a space feel like yours.",
    icon: Paintbrush,
    image: media.paint,
    accent: "blue",
  },
  {
    title: "Bath fittings",
    eyebrow: "03 / Everyday ease",
    description: "Taps, showers, accessories and sanitary essentials chosen for modern everyday living.",
    icon: Bath,
    image: media.fittings,
    accent: "violet",
  },
  {
    title: "Plumbing & allied",
    eyebrow: "04 / Flow smart",
    description: "Pipes, fittings and water-management essentials to keep every connection working right.",
    icon: Wrench,
    image: media.details,
    accent: "mint",
  },
];

const gallery = [
  { src: media.hero, alt: "Swastik Trading shop exterior and materials display", label: "A place to start", category: "Store" },
  { src: media.shelves, alt: "Shelves stocked with paints, tools and building essentials", label: "The everyday edit", category: "Products" },
  { src: media.counter, alt: "Product counter inside Swastik Trading", label: "Chosen with care", category: "Store" },
  { src: media.paint, alt: "Paint and colour products at Swastik Trading", label: "Colour your next move", category: "Paints" },
  { src: media.fittings, alt: "Bath fittings and sanitary products", label: "Details matter", category: "Bath fittings" },
  { src: media.portrait, alt: "Building essentials arranged at Swastik Trading", label: "Built for real work", category: "Products" },
];

const filters = ["All", "Store", "Products", "Paints", "Bath fittings"];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
    return () => revealObserver.disconnect();
  }, []);

  const filteredGallery = useMemo(
    () => (activeFilter === "All" ? gallery : gallery.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span><Sparkles size={14} /> Latur’s building essentials, brought together.</span>
          <a href="tel:+917249527777">Talk to the store <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand-lockup" href="#top" aria-label="Swastik Trading home">
            <span className="brand-mark"><img src={media.logo} alt="Swastik Trading logo" /></span>
            <span className="brand-copy"><strong>SWASTIK</strong><small>TRADING / LATUR</small></span>
          </a>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            <a href="#categories" onClick={() => setMenuOpen(false)}>What we stock</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Swastik</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Inside the store</a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
          </nav>
          <div className="header-actions">
            <a className="header-phone" href="tel:+917249527777"><Phone size={16} /> <span>72495 27777</span></a>
            <a className="button button-dark button-small" href="#visit">Get in touch <ArrowUpRight size={15} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={menuOpen}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Building materials / Latur</div>
              <h1>Everything your<br /><em>next space</em> needs.</h1>
              <p className="hero-lede">Cement. Colours. Bath fittings. Building essentials. A considered mix of trusted brands, practical choices and dependable service — all under one roof.</p>
              <div className="hero-actions">
                <button className="button button-sun" onClick={() => scrollToSection("categories")}>Explore the range <ArrowRight size={17} /></button>
                <a className="text-link light-link" href="tel:+917249527777">Call 72495 27777 <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-proof"><span className="proof-line" /><span>For building, renovation & home finishing</span></div>
            </div>
            <div className="hero-visual reveal reveal-delay-2">
              <div className="hero-image-frame">
                <img src={media.hero} alt="Swastik Trading building materials store" />
                <div className="hero-image-shade" />
                <div className="hero-image-caption"><span>01</span><span>Materials for the<br />way you live</span></div>
              </div>
              <div className="floating-card floating-card-top"><span className="floating-icon"><PackageCheck size={18} /></span><span><strong>Quality first</strong><small>Practical product choices</small></span></div>
              <div className="floating-card floating-card-bottom"><span className="floating-number">01</span><span>Vivekanand<br />Chowk, Latur</span><MapPin size={18} /></div>
            </div>
          </div>
          <div className="hero-ticker" aria-label="Product categories">
            <div className="ticker-track"><span>CEMENT</span><i>✦</i><span>COLOURS</span><i>✦</i><span>BATH FITTINGS</span><i>✦</i><span>PLUMBING</span><i>✦</i><span>HOME FINISHING</span><i>✦</i><span>CEMENT</span><i>✦</i><span>COLOURS</span><i>✦</i><span>BATH FITTINGS</span></div>
          </div>
        </section>

        <section className="intro-section section-padding">
          <div className="container intro-grid">
            <div className="section-kicker reveal"><span>01</span><span className="kicker-rule" /><span>The Swastik way</span></div>
            <div className="intro-statement reveal reveal-delay-1"><p>For the first brick, the final tap, and every <span>in-between decision.</span></p></div>
            <div className="intro-body reveal reveal-delay-2"><p>Swastik Trading is your local building-materials trading and retail destination — bringing essential categories and trusted brands closer to the people building, renewing and finishing their spaces.</p><a className="text-link dark-link" href="#why-us">Why shop with us <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="category-section section-padding" id="categories">
          <div className="container">
            <div className="section-heading reveal"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> What we stock</div><h2>A better build<br /><em>starts here.</em></h2></div><p>From core construction to the finishing details, find the products that move your project forward.</p></div>
            <div className="category-layout">
              <div className="category-feature reveal">
                <img src={media.shelves} alt="Swastik Trading shelves with assorted building and finishing products" />
                <div className="feature-gradient" />
                <div className="feature-content"><span className="feature-label">The full shelf, not just the highlights.</span><h3>More choice.<br /><em>Fewer stops.</em></h3><button className="circle-button" onClick={() => scrollToSection("visit")} aria-label="Visit Swastik Trading"><ArrowUpRight size={21} /></button></div>
              </div>
              <div className="category-list">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return <article className={`category-row reveal reveal-delay-${Math.min(index + 1, 3)}`} key={category.title}>
                    <div className={`category-icon icon-${category.accent}`}><Icon size={23} strokeWidth={1.7} /></div>
                    <div className="category-copy"><span className="category-eyebrow">{category.eyebrow}</span><h3>{category.title}</h3><p>{category.description}</p></div>
                    <div className="category-thumb"><img src={category.image} alt={category.title} /><span><ArrowUpRight size={16} /></span></div>
                  </article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="principles-section" id="why-us">
          <div className="container principles-layout">
            <div className="principles-copy reveal"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> The reason to return</div><h2>Good advice is<br /><em>part of the product.</em></h2><p>We keep the selection useful, the guidance clear, and the experience grounded in what customers actually need for a home, a project or a repair.</p><a className="button button-outline-light" href="tel:+917249527777">Speak to the store <Phone size={16} /></a></div>
            <div className="principles-list">
              <div className="principle-item reveal reveal-delay-1"><span className="principle-icon"><CheckCircle2 size={22} /></span><div><span className="principle-number">01</span><h3>Trusted brands</h3><p>Products sourced from reliable names, selected to earn their place on your shelf.</p></div></div>
              <div className="principle-item reveal reveal-delay-2"><span className="principle-icon"><Layers3 size={22} /></span><div><span className="principle-number">02</span><h3>One useful roof</h3><p>Multiple building and home-finishing categories, brought together for a simpler purchase.</p></div></div>
              <div className="principle-item reveal reveal-delay-3"><span className="principle-icon"><ShoppingBag size={22} /></span><div><span className="principle-number">03</span><h3>Reliable service</h3><p>A straightforward, local retail experience that respects your time and your project.</p></div></div>
            </div>
          </div>
        </section>

        <section className="quote-section section-padding">
          <div className="container quote-grid"><div className="quote-mark reveal">“</div><div className="quote-copy reveal reveal-delay-1"><p>Building better isn’t about buying more. It’s about finding the right things, from people who understand the job.</p><div className="quote-signature"><span className="signature-line" /> Swastik Trading <span className="signature-place">/ Vivekanand Chowk, Latur</span></div></div></div>
        </section>

        <section className="gallery-section section-padding" id="gallery">
          <div className="container">
            <div className="gallery-heading reveal"><div><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> A closer look</div><h2>Inside the<br /><em>everyday edit.</em></h2></div><p>A glimpse of the products, shelves and details that make up your local building-materials destination.</p></div>
            <div className="filter-row reveal reveal-delay-1" role="tablist" aria-label="Filter store photos">
              {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}
            </div>
            <div className="gallery-grid">
              {filteredGallery.map((item, index) => <button className={`gallery-tile tile-${index + 1} reveal reveal-delay-${Math.min((index % 3) + 1, 3)}`} key={item.src} onClick={() => setSelectedImage(item)} aria-label={`Open image: ${item.label}`}><img src={item.src} alt={item.alt} /><span className="gallery-overlay"><span>{item.label}</span><ArrowUpRight size={17} /></span></button>)}
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="container visit-layout">
            <div className="visit-copy reveal"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Come by the counter</div><h2>Let’s make the<br /><em>next step easy.</em></h2><p>Tell us what you’re building, fixing or finishing. We’ll help you find the right place to start.</p><div className="visit-actions"><a className="button button-sun" href="tel:+917249527777">Call the store <Phone size={16} /></a><a className="button button-outline-light" href="https://www.google.com/maps/search/?api=1&query=Vivekanand+Chowk%2C+Latur" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a></div></div>
            <div className="visit-card reveal reveal-delay-2"><div className="visit-card-top"><span className="visit-card-tag">Find us</span><NavigationIcon /></div><div className="map-art"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-pin"><MapPin size={22} fill="currentColor" /></span><span className="map-label">VIVEKANAND<br />CHOWK</span></div><div className="visit-card-bottom"><div><span className="mini-label">Address</span><strong>Vivekanand Chowk,<br />Latur, Maharashtra</strong></div><div><span className="mini-label">Phone</span><a href="tel:+917249527777">72495 27777</a></div></div></div>
          </div>
        </section>

        <section className="closing-section section-padding"><div className="container closing-inner reveal"><div className="closing-meta"><span>Est. for your next project</span><span>ST / 01</span></div><h2>Building Better.<br /><em>Together.</em></h2><a className="text-link dark-link" href="https://www.instagram.com/swastiktradinglatur/" target="_blank" rel="noreferrer">Follow along on Instagram <Instagram size={16} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><a className="brand-lockup footer-brand" href="#top"><span className="brand-mark"><img src={media.logo} alt="Swastik Trading logo" /></span><span className="brand-copy"><strong>SWASTIK</strong><small>TRADING / LATUR</small></span></a><div className="footer-message">Cement, colours, bath fittings,<br />building essentials — all under one roof.</div><div className="footer-links"><a href="https://www.instagram.com/swastiktradinglatur/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a><a href="tel:+917249527777"><Phone size={16} /> 72495 27777</a><a href="https://wa.me/918888396239?text=Hello%20NayankStudios%2C%20I%20would%20like%20to%20discuss%20a%20design%20project." target="_blank" rel="noreferrer"><Phone size={16} /> WhatsApp design</a><a href="#top"><Send size={16} /> Back to top</a></div></div><div className="container footer-bottom"><span>© 2026 Swastik Trading. Local retail for better spaces.</span><span>Quality products. Trusted brands. Reliable service.</span><span className="creator-credit">Website creator & graphic designer: <a href="https://www.instagram.com/official.nayankstudios/" target="_blank" rel="noreferrer">NAYANK PATEL / NayankStudios</a><span className="credit-divider"> · </span><a href="https://wa.me/918888396239?text=Hello%20NayankStudios%2C%20I%20would%20like%20to%20discuss%20a%20design%20project." target="_blank" rel="noreferrer">WhatsApp: 8888396239</a></span></div></footer>

      {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.label} onClick={() => setSelectedImage(null)}><div className="lightbox-card" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image"><X size={22} /></button><img src={selectedImage.src} alt={selectedImage.alt} /><div className="lightbox-caption"><span>{selectedImage.category}</span><strong>{selectedImage.label}</strong></div></div></div>}
    </div>
  );
}

function NavigationIcon() {
  return <span className="navigation-icon"><MapPin size={16} /></span>;
}
