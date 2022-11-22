export const items = [
  {
    id: "1",
    name: "Grano de Cafe Arabico",
    description: "Descripcion del producto",
    price: 15000,
    img: "https://thumbs.dreamstime.com/b/granos-de-caf%C3%A9-arabica-28189044.jpg",
  },

  {
    id: "2",
    name: "Grano de Cafe Robusto",
    description: "Descripcion del producto",
    price: 15000,
    img: "https://previews.123rf.com/images/foodandmore/foodandmore1401/foodandmore140100170/25166737-%EB%8B%AB%EA%B8%B0-%EC%98%A4%EB%9E%98-%EB%90%9C-%EB%82%98%EB%AC%B4-%ED%85%8C%EC%9D%B4%EB%B8%94%EC%97%90-%EB%A1%9C%EB%B6%80%EC%8A%A4%ED%83%80-%EC%BB%A4%ED%94%BC-%EC%BD%A9%EC%9D%98-%EA%B7%B8%EB%A6%87%EC%9D%98-%EC%B5%9C%EB%8C%80.jpg",
  },
];


export const getData = () =>{
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(items)
    },2000)
  })
 };