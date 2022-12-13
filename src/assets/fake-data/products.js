const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "Playera para desarrolladores",
        price: '400',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "playeras",
        colors: ["negro"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"],
        description: `La camiseta tradicional de toda la vida <br>
        Corte recto, clásico y holgado <br>
        El modelo mide 1,83 m (6'0") y lleva la talla M <br>
        La modelo mide 1,73 m (5'8") y lleva una S <br>
        Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. <br>
        El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. <br>
        Cuello y dobladillos con doble puntada para una mayor durabilidad <br>`
    },
    {
        title: "GitHub Logo Pullover Hoodie",
        price: '1000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "sudadera",
        colors: [["negro"], ["blanco"], ["verde"], ["azul"]],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"],
        description: `
        Peso pesado 8.25 oz. (~280 g/m²) vellón rico en algodón <br>
        Los colores sólidos son 80% algodón, 20% poliéster. Heather Grey es 70% algodón, 30% poliéster. Charcoal Heather es 60% algodón, 40% poliéster <br>
        Bolsillo tipo canguro en la parte delantera, cordón ajustable y puños acanalados a juego <br>
        De origen ético siguiendo los estándares mundiales de prácticas de vestimenta responsable <br>
        Nota: si te gustan las sudaderas holgadas, compra 2 tallas más <br>`
    },
    {
        title: "reactjs react",
        price: '395',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "playeras",
        colors: [["azul"], ["blanco"], ["verde"], ["negro"]],
        slug: "ao-thun-dinosaur-03",
        size: ["m"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Playera Para Programadores Js Logo",
        price: '300',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "playeras",
        colors: [["blanco"], ["azul"], ["verde"], ["negro"]],
        slug: "ao-thun-polo-04",
        size: ["xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Linux Mascot Tux the Penguin I Am Root - Sudadera con capucha para hombre y mujer",
        price: '1000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "sudadera",
        colors: [["azul"], ["verde"], ["blanco"], ["negro"]], 
        slug: "ao-thun-polo-05",
        size: ["xxl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "kali linux logo blanco Sudadera ligera con capucha",
        price: '999',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "sudadera",
        colors:[ ["negro"], ["blanco"], ["verde"], ["azul"]],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Sudadera con estampado de gato y slogan con forro térmico",
        price: '850',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "sueter",
        colors: [["negro"], ["verde"], ["azul"], ["blanco"]],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Touch my Elf Ugly Christmas Sweater Gift Lightweight Hoodie",
        price: '569',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "sudadera",
        colors: [["negro"], ["verde"], ["azul"], ["blanco"]],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "para hombre y mujer Programadores JAVA Terry sudadera programando fanáticos de ropa",
        price: '459',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "sueter",
        colors: [["negro"], ["blanco"], ["azul"], ["verde"]],
        slug: "ao-somi-tay-dai-09",
        size: ["m"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Playera para desarrolladores",
        price: '400',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "playeras",
        colors: ["negro"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"],
        description: `La camiseta tradicional de toda la vida <br>
        Corte recto, clásico y holgado <br>
        El modelo mide 1,83 m (6'0") y lleva la talla M <br>
        La modelo mide 1,73 m (5'8") y lleva una S <br>
        Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. <br>
        El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. <br>
        Cuello y dobladillos con doble puntada para una mayor durabilidad <br>`
    },
    {
        title: "GitHub Logo Pullover Hoodie",
        price: '1000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "sudadera",
        colors: [["negro"], ["blanco"], ["verde"], ["azul"]],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"],
        description: `
        Peso pesado 8.25 oz. (~280 g/m²) vellón rico en algodón <br>
        Los colores sólidos son 80% algodón, 20% poliéster. Heather Grey es 70% algodón, 30% poliéster. Charcoal Heather es 60% algodón, 40% poliéster <br>
        Bolsillo tipo canguro en la parte delantera, cordón ajustable y puños acanalados a juego <br>
        De origen ético siguiendo los estándares mundiales de prácticas de vestimenta responsable <br>
        Nota: si te gustan las sudaderas holgadas, compra 2 tallas más <br>`
    },
    {
        title: "reactjs react",
        price: '395',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "playeras",
        colors: [["azul"], ["blanco"], ["verde"], ["negro"]],
        slug: "ao-thun-dinosaur-03",
        size: ["m"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Playera Para Programadores Js Logo",
        price: '300',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "playeras",
        colors: [["blanco"], ["azul"], ["verde"], ["negro"]],
        slug: "ao-thun-polo-04",
        size: ["xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Linux Mascot Tux the Penguin I Am Root - Sudadera con capucha para hombre y mujer",
        price: '1000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "sudadera",
        colors: [["azul"], ["verde"], ["blanco"], ["negro"]], 
        slug: "ao-thun-polo-05",
        size: ["xxl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "kali linux logo blanco Sudadera ligera con capucha",
        price: '999',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "sudadera",
        colors:[ ["negro"], ["blanco"], ["verde"], ["azul"]],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Sudadera con estampado de gato y slogan con forro térmico",
        price: '850',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "sueter",
        colors: [["negro"], ["verde"], ["azul"], ["blanco"]],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "Touch my Elf Ugly Christmas Sweater Gift Lightweight Hoodie",
        price: '569',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "sudadera",
        colors: [["negro"], ["verde"], ["azul"], ["blanco"]],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
    {
        title: "para hombre y mujer Programadores JAVA Terry sudadera programando fanáticos de ropa",
        price: '459',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "sueter",
        colors: [["negro"], ["blanco"], ["azul"], ["verde"]],
        slug: "ao-somi-tay-dai-09",
        size: ["m"],
        description: `
        Colores sólidos: 100% Algodón; Gris jaspeado: 90 % algodón, 10 % poliéster; Todos los demás jaspeados: 50 % algodón, 50 % poliéster <br>
        Importado <br>
        Cierre de Pull On <br>
        Lavar a maquina con agua fria con colores similares, secar en secadora a temperatura baja <br>
        ¿Usas reacciones? Entonces te encantará esta jugadora. Cuenta con el logotipo oficial de reaccionar en él, por lo que es perfecto para fans. REACCIONAR hace que sea fácil de construir una sola página aplicaciones (spas). Con Libros, guías y tutoriales, reaccionar es muy fácil de aprender. <br>
        REACCIONAR es uno de los más populares marcos transparentes JavaScript. Un grande, vibrantes Comunidad hace que reaccione con una excelente opción. Debido a su popularidad, la reacción tiene muchos tutoriales en línea para principiantes, por lo que es fácil para empezar. <br>
        Ligero, corte clásico, mangas y dobladillo inferior <br>
        `
    },
  
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData
