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
        en: "This is a standard L-shaped corner brace, crafted from polished silver-toned metal. It features a precise 90-degree bend with two pre-drilled holes on each arm for secure fastening. The smooth, rounded edges and uniform finish offer both durability and versatility, making it ideal for reinforcing right-angle joints in construction, cabinetry, and furniture projects.Available in three sizes: 110 × 15 × 1.5 mm, 90 × 15 × 1.5 mm, 70 × 15 × 1.5 mm. Choose the size that best fits your application needs.",
        fr: "Il s'agit d'une équerre d'angle standard en L, fabriquée en métal argenté poli. Elle présente un angle précis de 90 degrés et deux trous pré-percés sur chaque branche pour une fixation sûre. Ses bords lisses et arrondis et sa finition uniforme offrent durabilité et polyvalence, ce qui la rend idéale pour renforcer les assemblages à angle droit dans les projets de construction, d'ébénisterie et de mobilier. Disponible en trois tailles : 110 × 15 × 1,5 mm, 90 × 15 × 1,5 mm, 70 × 15 × 1,5 mm. Choisissez la taille la mieux adaptée à vos besoins.",
      },
      images: ["/corner2holes.png?height=400&width=400", "/corner2holes.webp?height=400&width=400", "/corner2holes2.png?height=400&width=400"],
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
        en: "This is a robust L-shaped corner brace, constructed from brushed silver-toned metal, showcasing a clean and modern aesthetic. It features a precise 90-degree angle, with each arm containing three evenly spaced, pre-drilled holes for secure and stable fastening. The brushed finish adds a touch of sophistication, making it suitable for both functional reinforcement and visible applications in furniture, shelving, or structural projects. Dimensions: 62 × 36 × 1.8 mm.",
        fr: "Cette équerre robuste en L, fabriquée en métal argenté brossé, affiche une esthétique épurée et moderne. Elle présente un angle précis de 90 degrés, chaque branche étant dotée de trois trous pré-percés régulièrement espacés pour une fixation sûre et stable. Sa finition brossée lui confère une touche de sophistication, idéale aussi bien pour le renforcement fonctionnel que pour les applications visibles, que ce soit pour l'ameublement, les étagères ou les projets structurels. Dimensions : 62 × 36 × 1,8 mm.",
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
        en: "This is a sturdy L-shaped corner brace, fabricated from brushed silver-toned metal, designed for robust structural support. It features a precise 90-degree angle, with each arm containing four strategically placed, pre-drilled holes for maximum fastening strength. The top arm has a rounded end, adding a subtle design element to its functional form. This brace is ideal for heavy-duty applications requiring strong, reliable corner reinforcement. Available in two sizes: 130 × 24 × 1.5 mm, 110 × 24 × 1.5 mm.",
        fr: "Cette équerre robuste en forme de L, fabriquée en métal argenté brossé, offre un soutien structurel robuste. Elle présente un angle précis de 90 degrés et chaque branche est dotée de quatre trous pré-percés stratégiquement placés pour une fixation optimale. L'extrémité arrondie de la branche supérieure ajoute une touche de design subtile à sa forme fonctionnelle. Cette équerre est idéale pour les applications lourdes nécessitant un renforcement d'angle solide et fiable. Disponible en deux tailles : 130 × 24 × 1,5 mm et 110 × 24 × 1,5 mm.",
      },
      images: ["/corner4holes.jpg?height=400&width=400", "/corner4holes2.jpg?height=400&width=400"],
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
        en: "This is a flat, V-shaped corner brace, presented in a sleek, matte dark gray finish. It features a precise 90-degree angle, with five pre-drilled holes strategically placed for secure fastening. The minimalist design and dark color make it a versatile and discreet option for reinforcing corners in furniture, frames, or other structural applications where a clean aesthetic is desired. Available in two sizes: 90 × 20 × 1.3 mm, 70 × 20 × 1.3 mm.",
        fr: "Il s'agit d'une équerre plate en V, présentée dans une élégante finition gris foncé mat. Elle présente un angle précis de 90 degrés et cinq trous pré-percés stratégiquement placés pour une fixation sûre. Son design minimaliste et sa couleur foncée en font une option polyvalente et discrète pour renforcer les angles de meubles, de cadres ou d'autres applications structurelles nécessitant une esthétique épurée. Disponible en deux tailles : 90 × 20 × 1,3 mm et 70 × 20 × 1,3 mm.",
      },
      images: ["/cornervshapelast-1.webp?height=400&width=400","/corner5holes.png?height=400&width=400" ],
      isNew: true,
      category: "Tools",
      shipping: true,
      warranty: false,
      returns: false,
    },
  ]
  