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
    image?: string
    images?: string[]
    category: string
    isNew?: boolean
    shipping?: boolean
    warranty?: boolean
    returns?: boolean
  }
  
  export const products: Product[] = [
    {
      id: "lock-with-rod",
      name: {
        en: "High security lock with rod",
        fr: "Serrure a haute sécurité avec tige",
      },
      description: {
        en: "This is a robust, high-security door lock with a rod, featuring a durable bronze-finished rectangular body and a multi-point locking mechanism with four cylindrical steel bolts. It is equipped with a prominent black keyhole and an integrated latch for enhanced security.",
        fr: "C'est une serrure robuste, de haute sécurité avec une tige, avec une boîte rectangulaire en bronze dur et un mécanisme de verrouillage multi-points avec des bâtons en acier cylindrique. Elle est équipée d'un trou noir prominent et d'un verrou intégré pour une sécurité accrue.",
      },
      image: "/blokus.png?height=400&width=400",
      category: "locks",
      isNew: false,
      shipping: true,
      warranty: true,
      returns: true,
    },
    {
      id: "lock",
      name: {
        en: "High security lock without rod",
        fr: "Serrure a haute sécurité sans tige",
      },
      description: {
        en: "This is a robust, high-security door lock, featuring a durable bronze-finished rectangular body and a multi-point locking mechanism with four cylindrical steel bolts. It is equipped with a prominent black keyhole and an integrated latch for enhanced security.",
        fr: "C'est une serrure robuste, de haute sécurité, avec une boîte rectangulaire en bronze dur et un mécanisme de verrouillage multi-points avec des bâtons en acier cylindrique. Elle est équipée d'un trou noir prominent et d'un verrou intégré pour une sécurité accrue.",
      },
      image: "/blokusSansTige.png?height=400&width=400",
      category: "locks",
      shipping: true,
      warranty: true,
      returns: true,
    },
    {
      id: "verrous",
      name: {
        en: "Locks",
        fr: "Verrous",
      },
      description: {
        en: "Those are two robust, bronze metal security bolts, designed for heavy-duty applications. Each bolt features a flat, elongated body with a rounded, protruding end, suggesting a secure locking mechanism. The mounting plates at the top of each bolt are equipped with multiple screw holes, indicating a strong and stable installation. The overall design conveys durability and enhanced security for various entry points.",
        fr: "Voici deux bâtons de métal de sécurité robustes, de bronze, conçus pour des applications lourdes. Chaque bâton comporte un corps plat, élargi et un extrémité arrondi, suggérant un mécanisme de verrouillage sûr. Les plaques de montage en haut de chaque bâton sont équipées de trous multiples, indiquant une installation forte et stable. Le design global indique la durabilité et la sécurité accrue pour diverses entrées.",
      },
      image: "/verrous.png?height=400&width=400",
      category: "locks",
      shipping: true,
      warranty: true,
      returns: true,
    },
    {
      id: "corner-brace1",
      name: {
        en: "Corner Brace",
        fr: "Renfort d'angle",
      },
      description: {
        en: "This is a standard L-shaped corner brace, crafted from polished silver-toned metal. It features a precise 90-degree bend, with each arm containing two pre-drilled holes for secure fastening. The smooth, rounded edges and uniform finish indicate a durable and versatile component suitable for reinforcing right-angle joints in various construction and furniture applications.",
        fr: "C'est un renfort d'angle standard en forme de L, fabriqué à partir de métal poli et de couleur argent. Il comporte un angle précis de 90 degrés, avec chaque bras contenant deux trous pré-drillés pour une sécurité sûre. Les bords lisses et ronds et leur uniforme fin indiquent un composant durable et versatile adapté pour renforcer les articulations d'angles droits dans diverses applications de construction et d'équipement.",
      },
      images: ["/corner2holes.png?height=400&width=400", "/corner2holes.webp?height=400&width=400"],
      isNew: true,
      category: "Tools",
      shipping: true,
      warranty: false,
      returns: false,
    },
    {
      id: "corner-brace3",
      name: {
        en: "Corner Brace",
        fr: "Renfort d'angle",
      },
      description: {
        en: "This is a robust L-shaped corner brace, constructed from brushed silver-toned metal, showcasing a clean and modern aesthetic. It features a precise 90-degree angle, with each arm containing three evenly spaced, pre-drilled holes for secure and stable fastening. The brushed finish adds a touch of sophistication, making it suitable for both functional reinforcement and visible applications in furniture, shelving, or structural projects.",
        fr: "C'est un renfort d'angle en forme de L robuste, conçu à partir de métal brossé à soie d'argent, présentant une belle et moderne apparence. Il comporte un angle précis de 90 degrés, avec chaque bras contenant trois trous espacés de manière équitable, pré-drillés pour une sécurité et une stabilité sûres. Le brossage ajoute une touche de sophistication, adapté à des applications fonctionnelles ou visibles dans les meubles, les étagères ou les projets de construction.",
      },
      image: "/corner3holes.jpg?height=400&width=400",
      category: "Tools",
      isNew: true,
      shipping: true,
      warranty: false,
      returns: false,
    },
    {
      id: "corner-brace4",
      name: {
        en: "Corner Brace",
        fr: "Renfort d'angle",
      },
      description: {
        en: "This is a sturdy L-shaped corner brace, fabricated from brushed silver-toned metal, designed for robust structural support. It features a precise 90-degree angle, with each arm containing four strategically placed, pre-drilled holes for maximum fastening strength. The top arm has a rounded end, adding a subtle design element to its functional form. This brace is ideal for heavy-duty applications requiring strong, reliable corner reinforcement.",
        fr: "C'est un renfort d'angle en forme de L robuste, fabriqué à partir de métal brossé à soie d'argent, conçu pour une sécurité structurale robuste. Il comporte un angle précis de 90 degrés, avec chaque bras contenant quatre trous pré-drillés stratégiquement pour une forte sécurité de l'accroissement. Le bras supérieur a une extrémité arrondie, ajoutant un élément de design subtil à sa forme fonctionnelle. Ce renfort est idéal pour des applications lourdes qui nécessitent une résistance de renfort robuste et fiable.",
      },
      images: ["/corner4holes.jpg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
      category: "Tools",
      isNew: true,
      shipping: true,
      warranty: false,
      returns: false,
    },
    {
      id: "corner-brace5",
      name: {
        en: "Corner Brace",
        fr: "Renfort d'angle",
      },
      description: {
        en: "This is a flat, V-shaped corner brace, presented in a sleek, matte dark gray finish. It features a precise 90-degree angle, with five pre-drilled holes strategically placed for secure fastening. The minimalist design and dark color make it a versatile and discreet option for reinforcing corners in furniture, frames, or other structural applications where a clean aesthetic is desired.",
        fr: "Une tranchante, forme de V, présentée en un teint de soie et de gris foncé, avec cinq trous pré-drillés stratégiquement placés pour une accroche sûre. Le design minimaliste et la couleur sombre le rendent une option versatile et discrète pour renforcer les angles dans les meubles, les cadres ou d'autres applications structurantes où un élément de beauté pur et propre est souhaité.",
      },
      images: ["/corner5holes.png?height=400&width=400", "/placeholder.svg?height=400&width=400"],
      isNew: true,
      category: "Tools",
      shipping: true,
      warranty: false,
      returns: false,
    },
  ]
  