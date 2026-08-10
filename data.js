// ==========================================================================
// ARCHIVO DE DATOS DE LA GALERÍA
// ==========================================================================
// Para agregar, editar o eliminar una obra, simplemente modifica esta lista.
// 
// Instrucciones:
// 1. "imagen": Escribe el nombre exacto de la imagen que guardaste en la carpeta assets/images/
// 2. "titulo": El nombre de la obra.
// 3. "tecnica": La descripción de los materiales.
// 4. "precio": El precio de la obra.
// 5. "serie": (Opcional) El nombre de la serie a la que pertenece.
// 6. "tamaño": (Opcional) Dimensiones reales en cm, formato 'anchoXalto' (ej: '120x100').
//              Esto ajustará automáticamente la escala visual en la galería.
// 
// Si quieres eliminar una obra de la página web, borra todo el bloque { ... }, que le corresponde.

const obrasDeArte = [
    {
        imagen: 'assets/images/AmericaAmazonas.png',
        titulo: 'Amazonas',
        tecnica: 'Acrílico sobre tela, Díptico',
        año: '2025',
        precio: 'No Disponible',
        tamaño: '50x100',
        serie: 'America'
    },
    {
        imagen: 'assets/images/AmericaCalifornia.png',
        titulo: 'California',
        tecnica: 'Acrílico sobre tela',
        año: '2026',
        precio: 'USD 3000',
        tamaño: '150x200',
        serie: 'America'
    },
    {
        imagen: 'assets/images/AmericaCordillera.png',
        titulo: 'Cordillera',
        tecnica: 'Acrílico sobre tela, Díptico',
        año: '2023',
        precio: 'No Disponible',
        tamaño: '50x100',
        serie: 'America'
    },
    {
        imagen: 'assets/images/AmericaEl Valle I.png',
        titulo: 'El Valle I',
        tecnica: 'Acrílico sobre tela, Díptico',
        año: '2023',
        precio: 'USD 250',
        tamaño: '30x60',
        serie: 'America'
    },
    {
        imagen: 'assets/images/EmocionesN10.png',
        titulo: 'N10',
        tecnica: 'Acrílico sobre tela',
        año: '2022',
        precio: 'No Disponible',
        tamaño: '100x100',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN11.png',
        titulo: 'N11',
        tecnica: 'Acrílico sobre tela',
        año: '2023',
        precio: 'No Disponible',
        tamaño: '110x100',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN12.png',
        titulo: 'N12',
        tecnica: 'Acrílico sobre tela',
        año: '2023',
        precio: 'No Disponible',
        tamaño: '100x80',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN14.png',
        titulo: 'N14',
        tecnica: 'Acrílico sobre tela, Díptico',
        año: '2024',
        precio: 'No Disponible',
        tamaño: '30x60',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN2.png',
        titulo: 'N2',
        tecnica: 'Acrílico sobre tela, Díptico',
        año: '2024',
        precio: 'USD 500',
        tamaño: '58x42',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN3.png',
        titulo: 'N3',
        tecnica: 'Acrílico sobre tela',
        año: '2024',
        precio: 'USD 960',
        tamaño: '78x62',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN4.png',
        titulo: 'N4',
        tecnica: 'Acrílico sobre tela, 9 obras',
        año: '2022',
        precio: 'USD 950',
        tamaño: '87x75',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN5.png',
        titulo: 'N5',
        tecnica: 'Acrílico sobre tela',
        año: '2024',
        precio: 'USD 1200',
        tamaño: '120x100',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN6.png',
        titulo: 'N6',
        tecnica: 'Acrílico sobre tela',
        año: '2024',
        precio: 'USD 800',
        tamaño: '100x80',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN7.png',
        titulo: 'N7',
        tecnica: 'Acrílico sobre tela',
        año: '2023',
        precio: 'No Disponible',
        tamaño: '110x110',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN8.png',
        titulo: 'N8',
        tecnica: 'Acrílico sobre tela',
        año: '2022',
        precio: 'USD 1000',
        tamaño: '100x100',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/EmocionesN9.png',
        titulo: 'N9',
        tecnica: 'Acrílico sobre tela',
        año: '2022',
        precio: 'USD 1300',
        tamaño: '130x100',
        serie: 'Emociones'
    },
    {
        imagen: 'assets/images/JaponesesN2.png',
        titulo: 'N2',
        tecnica: 'Acrílico sobre tela',
        año: '2021',
        precio: 'No Disponible',
        tamaño: '150x230',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesN3.png',
        titulo: 'N3',
        tecnica: 'Acrílico sobre tela',
        año: '2022',
        precio: 'No Disponible',
        tamaño: '150x200',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesN4.png',
        titulo: 'Playa',
        tecnica: 'Acrílico sobre tela',
        año: '2023',
        precio: 'USD 1500',
        tamaño: '130x120',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesN5.png',
        titulo: 'Retrató Familiar',
        tecnica: 'Acrílico sobre tela',
        año: '2023',
        precio: 'USD 1500',
        tamaño: '120x130',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesN7.png',
        titulo: 'N7',
        tecnica: 'Acrílico sobre tela',
        año: '2025',
        precio: 'No Disponible',
        tamaño: '100x120',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesN9.png',
        titulo: 'N9',
        tecnica: 'Acrílico sobre tela',
        año: '2020',
        precio: 'No Disponible',
        tamaño: '100x100',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesPartituras.png',
        titulo: 'Partituras',
        tecnica: 'Acrílico sobre tela',
        año: '2024',
        precio: 'USD 1200',
        tamaño: '120x100',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesSelva.png',
        titulo: 'Selva',
        tecnica: 'Acrílico sobre tela, Díptico',
        año: '2022',
        precio: 'USD 2200',
        tamaño: '120x200',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/JaponesesSueños.png',
        titulo: 'Sueños',
        tecnica: 'Acrílico sobre tela',
        año: '2024',
        precio: 'USD 3000',
        tamaño: '150x200',
        serie: 'Japoneses'
    },
    {
        imagen: 'assets/images/TierraCalingasta.png',
        titulo: 'Calingasta',
        tecnica: 'Acrílico sobre tela',
        año: '2022',
        precio: 'No Disponible',
        tamaño: '40x40',
        serie: 'Tierra'
    },
    {
        imagen: 'assets/images/TierraMadero.png',
        titulo: 'Madero',
        tecnica: 'Acrílico sobre tela',
        año: '2026',
        precio: 'No Disponible',
        tamaño: '160x90',
        serie: 'Tierra'
    },
    {
        imagen: 'assets/images/TierraRodeo.png',
        titulo: 'Rodeo',
        tecnica: 'Acrílico sobre tela',
        año: '2022',
        precio: 'USD 1000',
        tamaño: '110x120',
        serie: 'Tierra'

    },
    {
        imagen: 'assets/images/TierraMisiones.png',
        titulo: 'Misiones',
        tecnica: 'Acrílico sobre tela, Díptico',
        año: '2022',
        precio: 'No Disponible',
        tamaño: '40x80',
        serie: 'Tierra'
    },
    {
        imagen: 'assets/images/TierraMarDelPlata.png',
        titulo: 'Mar Del Plata',
        tecnica: 'Acrílico sobre tela, Tríptico',
        año: '2026',
        precio: 'No Disponible',
        tamaño: '30x90',
        serie: 'Tierra'
    },
    {
        imagen: 'assets/images/TierraZonda.png',
        titulo: 'Zonda',
        tecnica: 'Acrílico sobre tela',
        año: '2026',
        precio: 'No Disponible',
        tamaño: '40x40',
        serie: 'Tierra'
    }
];
