const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Plans", path: "/plans" },
  { label: "Store", path: "/store" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

export const featureRows = [
  {
    title: "Structured Programming",
    description:
      "Periodized training blocks cycling strength, hypertrophy, and conditioning so every session has a purpose."
  },
  {
    title: "Coach-Level Feedback",
    description:
      "Technique checks, load adjustments, and practical guidance that help members progress with confidence."
  },
  {
    title: "Serious Training Culture",
    description:
      "A focused gym environment built for consistency, accountability, and long-term performance."
  }
];

export const programs = [
  {
    title: "Lean Start",
    level: "Beginner · 8 Weeks",
    description:
      "Three full-body training days per week to build strength, confidence, and durable movement patterns.",
    image: asset("assets/images/program-beginner.jpg")
  },
  {
    title: "Strength Engine",
    level: "Intermediate · 12 Weeks",
    description:
      "Barbell-focused programming with controlled volume and steady progression for reliable strength gains.",
    image: asset("assets/images/product-dumbbells.jpg")
  },
  {
    title: "Shred Phase",
    level: "Advanced · 6 Weeks",
    description:
      "A disciplined cut designed to maintain output and muscle while dialing in conditioning and recovery.",
    image: asset("assets/images/hero-fallback.jpg")
  }
];

export const plans = [
  {
    name: "Basic",
    summary: "For people starting out.",
    price: "₹999/month",
    image: asset("assets/images/program-beginner.jpg"),
    features: ["Gym access", "Beginner program", "Basic support"]
  },
  {
    name: "Standard",
    summary: "For consistent lifters.",
    price: "₹1499/month",
    image: asset("assets/images/hero-fallback.jpg"),
    featured: true,
    features: ["Gym + class access", "Custom plan", "Weekly check-ins"]
  },
  {
    name: "Elite",
    summary: "For serious athletes.",
    price: "₹2499/month",
    image: asset("assets/images/hero-athlete.jpg"),
    features: ["All access", "1:1 coaching", "Performance testing"]
  }
];

export const storeProducts = [
  {
    name: "Dumbbells Set",
    detail: "Adjustable · Steel",
    price: "₹3,499",
    image: asset("assets/images/product-dumbbells.jpg")
  },
  {
    name: "Whey Protein",
    detail: "1KG · Chocolate",
    price: "₹1,899",
    image: asset("assets/images/product-protein.jpg")
  },
  {
    name: "Workout Mat",
    detail: "Non-slip · 10mm",
    price: "₹999",
    image: asset("assets/images/product-mat.jpg")
  }
];

export const aboutSections = [
  {
    title: "Our Mission",
    description:
      "We build a training environment where people can progress without distractions or gimmicks. Structure, consistency, and smart coaching lead the way.",
    image: asset("assets/images/about-hero.jpg")
  },
  {
    title: "How We Work",
    description:
      "Every member trains with intent. From beginner to advanced, each phase is guided by clear programming, progression, and steady support.",
    image: asset("assets/images/hero-athlete.jpg"),
    reverse: true
  }
];

export const contactDetails = [
  "Email: abc@fitnesshub.com",
  "Phone: +91 1111111111",
  "Address: DY Patil College Ambi"
];

export const socialLinks = [
  { href: "https://www.facebook.com/", icon: asset("assets/facebook.svg"), label: "Facebook" },
  { href: "https://www.instagram.com/", icon: asset("assets/instagram.svg"), label: "Instagram" },
  { href: "https://x.com/?lang=en-in", icon: asset("assets/twitter.svg"), label: "Twitter" },
  { href: "https://www.youtube.com/", icon: asset("assets/youtube.svg"), label: "YouTube" }
];
