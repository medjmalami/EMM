export interface Product {
    id: string
    name: {
      en: string
      fr: string
    }
    description: {
      en: string
      fr: string
    }
    price: number
    image: string
    category: string
    isNew?: boolean
  }
  
  export const products: Product[] = [
    {
      id: "drill-set-pro",
      name: {
        en: "Professional Drill Set",
        fr: "Ensemble de Perceuses Professionnel",
      },
      description: {
        en: "Complete 18V cordless drill set with multiple bits and carrying case. Perfect for professional and home use.",
        fr: "Ensemble de perceuse sans fil 18V complet avec plusieurs mèches et étui de transport. Parfait pour un usage professionnel et domestique.",
      },
      price: 149.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Power Tools",
      isNew: false,
    },
    {
      id: "wrench-set-metric",
      name: {
        en: "Metric Wrench Set",
        fr: "Ensemble de Clés Métriques",
      },
      description: {
        en: "High-quality chrome vanadium steel wrench set with sizes from 8mm to 24mm. Includes storage rack.",
        fr: "Ensemble de clés en acier chrome vanadium de haute qualité avec des tailles de 8mm à 24mm. Comprend un support de rangement.",
      },
      price: 89.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Hand Tools",
    },
    {
      id: "screwdriver-precision",
      name: {
        en: "Precision Screwdriver Kit",
        fr: "Kit de Tournevis de Précision",
      },
      description: {
        en: "32-piece precision screwdriver set for electronics, watches, and small appliances. Magnetic tips included.",
        fr: "Ensemble de 32 tournevis de précision pour l'électronique, les montres et les petits appareils. Pointes magnétiques incluses.",
      },
      price: 34.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Precision Tools",
    },
    {
      id: "hammer-claw-steel",
      name: {
        en: "Steel Claw Hammer",
        fr: "Marteau à Griffe en Acier",
      },
      description: {
        en: "16oz steel claw hammer with ergonomic grip handle. Perfect balance for framing and general construction.",
        fr: "Marteau à griffe en acier de 16oz avec poignée ergonomique. Équilibre parfait pour l'encadrement et la construction générale.",
      },
      price: 24.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Hand Tools",
    },
    {
      id: "level-laser-digital",
      name: {
        en: "Digital Laser Level",
        fr: "Niveau Laser Numérique",
      },
      description: {
        en: "Self-leveling laser level with digital display. 30m range with accuracy of ±1mm. Includes tripod mount.",
        fr: "Niveau laser auto-nivelant avec affichage numérique. Portée de 30m avec précision de ±1mm. Comprend un support de trépied.",
      },
      price: 199.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Measuring Tools",
      isNew: false,
    },
    {
      id: "pliers-set-professional",
      name: {
        en: "Professional Pliers Set",
        fr: "Ensemble de Pinces Professionnel",
      },
      description: {
        en: "4-piece professional pliers set including needle nose, standard, wire cutters, and locking pliers.",
        fr: "Ensemble de 4 pinces professionnelles comprenant bec effilé, standard, coupe-fil et pinces de verrouillage.",
      },
      price: 64.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Hand Tools",
    },
    {
      id: "socket-set-universal",
      name: {
        en: "Universal Socket Set",
        fr: "Ensemble de Douilles Universel",
      },
      description: {
        en: "42-piece socket set with both metric and imperial sizes. Includes ratchet handle and extension bars.",
        fr: "Ensemble de 42 douilles avec tailles métriques et impériales. Comprend poignée à cliquet et barres d'extension.",
      },
      price: 119.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Socket Tools",
    },
    {
      id: "multimeter-digital-pro",
      name: {
        en: "Digital Pro Multimeter",
        fr: "Multimètre Numérique Pro",
      },
      description: {
        en: "Professional digital multimeter with auto-ranging, true RMS, and data logging capabilities. Safety rated CAT III.",
        fr: "Multimètre numérique professionnel avec gamme automatique, RMS vraie et capacités d'enregistrement de données. Classé sécurité CAT III.",
      },
      price: 79.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Electrical Tools",
    },
    {
      id: "saw-circular-cordless",
      name: {
        en: "Cordless Circular Saw",
        fr: "Scie Circulaire Sans Fil",
      },
      description: {
        en: "20V cordless circular saw with 6.5-inch blade. LED light and laser guide for precise cuts. Battery included.",
        fr: "Scie circulaire sans fil 20V avec lame de 6,5 pouces. Éclairage LED et guide laser pour des coupes précises. Batterie incluse.",
      },
      price: 179.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Power Tools",
      isNew: false,
    },
    {
      id: "toolbox-mobile-pro",
      name: {
        en: "Mobile Pro Toolbox",
        fr: "Boîte à Outils Mobile Pro",
      },
      description: {
        en: "Heavy-duty mobile toolbox with multiple drawers and compartments. Weather-resistant with secure locking system.",
        fr: "Boîte à outils mobile robuste avec plusieurs tiroirs et compartiments. Résistante aux intempéries avec système de verrouillage sécurisé.",
      },
      price: 299.99,
      image: "/placeholder.svg?height=400&width=400",
      category: "Storage",
    },
  ]
  