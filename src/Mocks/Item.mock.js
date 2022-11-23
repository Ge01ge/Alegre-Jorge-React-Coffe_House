export const items = [
  {
    id: "1",
    name: "Prensa Francesa Gadnic!",
    description: "la prensa francesa Gadnic prepara una taza de café premium en solo 5 minutos, simplemente agregue café molido, agua caliente y presione. No requiere filtros de papel ni cápsulas de plástico. Para los amantes del café: ahora puedes tener una gran taza de café en casa!",
    category: "accesorio",
    stock: 10,
    price: 8730.0,
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/CAFETE02/1200x900-CAFETE02-5.jpg&w=500&q=100",
  },
  {
    id: "2",
    name: "Molino Manual MUELAS de ceramica Inox",
    description: "Fácilmente ajustable al tipo de molienda deseada (espresso, filtro, prensa francesa, etc.).Sencillo de lavar y desmontar.Manija extraíble que permite dejar el café en el frasco tapado.Capacidad: 50gr (Made in China)",
    category: "accesorio",
    stock: 10,
    price: 11399.99,
    img: "https://www.modobarista.com/product_images/w/148/molino-inox-1__09915_zoom.jpg",
  },

  {
    id: "3",
    name: "NESCAFE DOLCA ORIGINAL",
    description: "Cafe Instantáneo DOYPACK de 225gr",
    category: "insumo",
    stock: 10,
    price: 1020.00,
    img: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/1/5/1/151ffa3f587f4fef975a033323613760",
  },
  {
    id: "4",
    name: "LA MORENITA INTENSO",
    description: "Cafe Instantáneo FRASCO de 100gr",
    category: "insumo",
    stock: 10,
    price: 360.50,
    img: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/c/c/8/cc8c16b40ddc39074e4c175d093a2d02",
  },
  // {
  //   id: "5",
  //   name: "lalala",
  //   description: "Cafe Instantáneo FRASCO de 100gr",
  //   category: "insumo",
  //   stock: 10,
  //   price: 360.50,
  //   img: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/c/c/8/cc8c16b40ddc39074e4c175d093a2d02",
  // },
];


export const getData = () =>{
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(items)
    },2000)
  })
 };