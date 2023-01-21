const product = {
  data: [
   {
     "namaProduct": "Celana Cewe Pink",
     "category": "celana",
     "price": "100.000",
     "image": "./image/11.jpg",
   },
  {
     "namaProduct": "Baju Santai",
     "category": "baju",
     "price": "150.000",
     "image": "./image/12.jpg",
    },
  {
    "namaProduct": "Baju polos putih",
    "category": "baju",
    "price": "100.000",
    "image": "./image/14.jpg",
  },
  {
    "namaProduct": "Celana cowo",
    "category": "celana",
    "price": "190.000",
    "image": "./image/13.jpg",
  },
  {
    "namaProduct": "Jam Rolex",
    "category": "jam",
    "price": "10.000.000",
    "image": "./image/15.jpg",
  },
  {
    "namaProduct": "Jaket Coklat",
    "category": "jaket",
    "price": "300.000",
    "image": "./image/16.jpg",
  },
 ]}

for(let i of product.data){
  const card = document.createElement("div");
  card.classList.add("card",i.category,"hide");
  
  const container = document.createElement("div");
  
  container.classList.add("img-container");
  
  const imgContainer = document.createElement("img");
  imgContainer.setAttribute("src",i.image);
  imgContainer.classList.add('images')
  
 container.appendChild(imgContainer);
 card.appendChild(container);
  
  const productTeks = document.createElement("h5");
  productTeks.classList.add("teks-five")
  productTeks.innerHTML = i.namaProduct.toUpperCase();
  container.appendChild(productTeks);
  const harga = document.createElement("h6");
  
  harga.innerHTML = "Rp " + i.price;
  container.appendChild(harga)
  
  let cart = document.createElement('button');
  cart.textContent = 'Add Cart';
  cart.classList.add('cartt');
  container.appendChild(cart)
  
  
  document.getElementById("product").appendChild(card);
  
  
  
  
  const keranjang = document.querySelector('.keranjang');

  cart.addEventListener('click',function(){
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const images = document.createElement('img');
    images.classList.add('img-item')
    images.setAttribute('src',i.image);
    cartItem.appendChild(images);
    
    const productContent = document.createElement('div');
    productContent.classList.add('product-content');
    
    
    const itemTeks = document.createElement('h4');
    itemTeks.classList.add('item-teks');
    itemTeks.innerHTML = i.namaProduct;
    productContent.appendChild(itemTeks);
    
    const hargaProduct = document.createElement('p');
    hargaProduct.innerHTML = i.price;
    productContent.appendChild(hargaProduct)
    
    cartItem.appendChild(productContent)
    
   keranjang.appendChild(cartItem);
  
  })
  
}

const kr = document.querySelector('.keranjang')
const bt = document.querySelector('.bt');

bt.addEventListener('click',function(){
  kr.classList.add('act')
})

const closee = document.querySelector('.closee');
closee.addEventListener('click',function(){
  kr.classList.remove('act')
})

function productt(value) {
  const valueBtn = document.querySelectorAll(".value-btn");
  valueBtn.forEach(va => {
    if(value.toUpperCase() == va.innerHTML.toUpperCase()){
       va.classList.add("active")
    }
    else{
      va.classList.remove("active")
    }
  })
  
  
  let cards = document.querySelectorAll(".card");
  
  cards.forEach(cr => {
  
    if (value == 'semua'){
      cr.classList.remove('hide')
    }
    else{
      if(cr.classList.contains(value)){
        cr.classList.remove('hide')
      }else{
        cr.classList.add('hide')
      }
    }
  })
}


document.querySelector("#value-btn").addEventListener("click",function(){
  let inputV = document.querySelector("#inputV").value;
  let card = document.querySelectorAll(".card");
  let teksFive = document.querySelectorAll(".teks-five");
  
  
  teksFive.forEach((teks,index) => {
    if(teks.innerText.includes(inputV.toUpperCase())){
      card[index].classList.remove("hide")
    }
    else{
      card[index].classList.add("hide")
    }
  })
})



window.onload = () => {
  productt("semua");
}

let carts = document.querySelector('.carts');
const cartt = document.querySelectorAll('.cartt');

let count = 0;
cartt.forEach(cartt => {
  cartt.addEventListener('click',function(){
    
    count += 1;
    carts.innerHTML = count;
    
  })
})


//ketika tombol diklik masukkan keranjangl
  
