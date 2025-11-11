// Nuestra base de datos ahora tiene más productos y un campo de "description".

// Exclusivo
import alimento1 from '../assets/images/exclusivos/galletas.png';
import alimento2 from '../assets/images/exclusivos/brownie.png';
import alimento3 from '../assets/images/exclusivos/rayitos de canela.jpg';
import alimento4 from '../assets/images/exclusivos/roscones de guayaba.jpg';
import alimento5 from '../assets/images/exclusivos/tostadas francesas.jpg';
import alimento6 from '../assets/images/exclusivos/volcan de chocolate.jpg';
import alimento7 from '../assets/images/exclusivos/beignets.png';
import alimento8 from '../assets/images/exclusivos/mochi.png';
import alimento9 from '../assets/images/exclusivos/Muss de vainilla francesa.png';
import alimento10 from '../assets/images/exclusivos/tres leches.png';
import alimento11 from '../assets/images/exclusivos/waffle con helado.png';

// Productos

import alimento2_1 from '../assets/images/productos/alfajores .jpg';
import alimento2_2 from '../assets/images/productos/almojabanas .jpg';
import alimento2_3 from '../assets/images/productos/buñuelos .jpg';
import alimento2_4 from '../assets/images/productos/croissant.jpg';
import alimento2_5 from '../assets/images/productos/mojicones .jpg';
import alimento2_6 from '../assets/images/productos/muffins .jpg';
import alimento2_7 from '../assets/images/productos/cheesecake de frutos amarillos.jpg';
import alimento2_8 from '../assets/images/productos/cheesecake de frutos rojos .jpg';
import alimento2_9 from '../assets/images/productos/donas con chocolate .jpg';
import alimento2_10 from '../assets/images/productos/hojas de hojaldre.jpg';
import alimento2_11 from '../assets/images/productos/pan aliñado .jpg';
import alimento2_12 from '../assets/images/productos/pan campesino .jpg';
import alimento2_13 from '../assets/images/productos/pan con semillas.jpg';
import alimento2_14 from '../assets/images/productos/pan de queso.jpg';
import alimento2_15 from '../assets/images/productos/pan de yuca .jpg';
import alimento2_16 from '../assets/images/productos/pan frances.jpg';
import alimento2_17 from '../assets/images/productos/pan integral.jpg';
import alimento2_18 from '../assets/images/productos/pandebonos .jpg';
import alimento2_19 from '../assets/images/productos/porcion de ponque .jpg';
import alimento2_20 from '../assets/images/productos/pretzels .jpg';
import alimento2_21 from '../assets/images/productos/rollos de canela .jpg';
import alimento2_22 from '../assets/images/productos/suspiros (merengones) .jpg';
import alimento2_23 from '../assets/images/productos/arepa de maiz con huevo .jpg';
import alimento2_24 from '../assets/images/productos/arepa de maiz con queso .jpg';
import alimento2_25 from '../assets/images/productos/pan de coco.jpg';
import alimento2_26 from '../assets/images/productos/Arroz con leche.png';
import alimento2_27 from '../assets/images/productos/bagel.png';
import alimento2_28 from '../assets/images/productos/pie.png';
import alimento2_29 from '../assets/images/productos/sandwich.png';





export const allProducts = [
    // --- Exclusivos ---
    { id: 101, name: 'Galletas de la casa', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 3500, imageUrl: alimento1},
    { id: 102, name: 'Brownies de la casa', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 5000, imageUrl: alimento2},
    { id: 103, name: 'Rayitos de canela', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 15000, imageUrl: alimento3},
    { id: 104, name: 'Roscones de guayaba', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 15000, imageUrl: alimento4},
    { id: 105, name: 'Tostadas francesas', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 15000, imageUrl: alimento5},
    { id: 106, name: 'Volcan de chocolate', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 15000, imageUrl: alimento6},
    { id: 107, name: 'Beignets', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 5000, imageUrl: alimento7},
    { id: 108, name: 'Mochi', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 5000, imageUrl: alimento8},
    { id: 109, name: 'Muss de vainilla francesa', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 15000, imageUrl: alimento9},
    { id: 110, name: 'Tres leches', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 10000, imageUrl: alimento10},
    { id: 111, name: 'waffle con helado', category: 'Exclusivos', subCategory: 'Postres', color: ' ', price: 15000, imageUrl: alimento11},

    // --- Productos ---
    { id: 201, name: 'Alfajores', category: 'Productos', subCategory: 'Pan', color: ' ', price: 5000, imageUrl: alimento2_1 },
    { id: 202, name: 'Almojábanas', category: 'Productos', subCategory: 'Pan', color: ' ', price: 1000, imageUrl: alimento2_2},
    { id: 203, name: 'Buñuelos', category: 'Productos', subCategory: 'Pan', color: ' ', price: 600, imageUrl: alimento2_3},
    { id: 204, name: 'Croissant', category: 'Productos', subCategory: 'Postres', color: ' ', price: 7000, imageUrl: alimento2_4},
    { id: 205, name: 'Mojicones', category: 'Productos', subCategory: 'Postres', color: ' ', price: 7000, imageUrl: alimento2_5},
    { id: 206, name: 'Muffins', category: 'Productos', subCategory: 'Postres', color: ' ', price: 7000, imageUrl: alimento2_6},
    { id: 207, name: 'Cheesecake de frutos amarillos', category: 'Productos', subCategory: 'Postres', color: ' ', price: 20000, imageUrl: alimento2_7},
    { id: 208, name: 'Cheesecake de frutos rojos', category: 'Productos', subCategory: 'Postres', color: ' ', price: 20000, imageUrl: alimento2_8},
    { id: 209, name: 'Donas con chocolate', category: 'Productos', subCategory: 'Postres', color: ' ', price: 4000, imageUrl: alimento2_9},
    { id: 210, name: 'Hojas de hojaldre', category: 'Productos', subCategory: 'Postres', color: ' ', price: 5000, imageUrl: alimento2_10},
    { id: 211, name: 'Pan aliñado', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_11},
    { id: 212, name: 'Pan campesino', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_12},
    { id: 213, name: 'Pan con semillas', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_13},
    { id: 214, name: 'Pan de queso', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_14},
    { id: 215, name: 'Pan de yuca', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_15},
    { id: 216, name: 'Pan frances', category: 'Productos', subCategory: 'Postres', color: ' ', price: 5000, imageUrl: alimento2_16},
    { id: 217, name: 'Pan integral', category: 'Productos', subCategory: 'Postres', color: ' ', price: 2000, imageUrl: alimento2_17},
    { id: 218, name: 'Pandebono', category: 'Productos', subCategory: 'Postres', color: ' ', price: 1000, imageUrl: alimento2_18},
    { id: 219, name: 'Porcion de ponque', category: 'Productos', subCategory: 'Postres', color: ' ', price: 5000, imageUrl: alimento2_19},
    { id: 220, name: 'Pretzels', category: 'Productos', subCategory: 'Postres', color: ' ', price: 5000, imageUrl: alimento2_20},
    { id: 221, name: 'Rollos de canela', category: 'Productos', subCategory: 'Postres', color: ' ', price: 8000, imageUrl: alimento2_21},
    { id: 222, name: 'Suspiros', category: 'Productos', subCategory: 'Postres', color: ' ', price: 1500, imageUrl: alimento2_22},
    { id: 223, name: 'Arepa de maiz con huevo', category: 'Productos', subCategory: 'Salado', color: ' ', price: 10000, imageUrl: alimento2_23},
    { id: 224, name: 'Arepa de maiz con queso', category: 'Productos', subCategory: 'Salado', color: ' ', price: 10000, imageUrl: alimento2_24},
    { id: 225, name: 'Pan de coco', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_25},
    { id: 226, name: 'Arroz con leche', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_26},
    { id: 227, name: 'Bagel', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_27},
    { id: 228, name: 'Pie', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_28},
    { id: 229, name: 'Sandwich', category: 'Productos', subCategory: 'Postres', color: ' ', price: 3000, imageUrl: alimento2_29},


];
                        