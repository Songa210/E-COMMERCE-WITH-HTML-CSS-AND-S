const product = [
    {
    id: 1,
    image: 'image/A.webp',
    title: 'Bruethooth',
    price: '$20',
},
{
    id: 2,
    image: 'image/B.webp',
    title: 'Drumkit',
    price: '$45', 
},
 {
     id: 3,
    image: 'image/C.webp',
     title: 'Projector',
     price: '$30'
 },
]
const procuct = [
    {
     id: 4,
    image: 'image/D.jpg',
    title: 'peaker',
   price: '$70',
 },
 {
     id: 5,
   image: 'image/E.jpg',
     title: 'Headphone',
     price: '$60',
 },
{
    id: 6,
   image: 'image/F.jpg',
     title: 'Ecouter',
     price: '$35'
 },
]


const categories = [...new Set(product.map((item)=>
    {return item}))]

    let cart = document.getElementById('root')
    cart.innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class="box">
            <div class="img-box">
            <img src=${image}></img>
            </div>
            <div class="left">
            <p>${title}</p>
            <p2>${price}</p2>
            <button>Buy Now</button>
            </div>
            </div>`
            
        )
    })
    

