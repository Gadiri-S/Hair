<template>
  <div class="container">
 
<h1>Nos services Coiffure</h1>

<div class="coupes-container">

  <div class="div1">

    <ul>
<li v-for="service in services" :key="service"> <div class="col"> <h3 class="title">{{service.node.title}}</h3>  </div> <span class="price">à partir de {{Math.trunc(service.node.priceRange.minVariantPrice.amount)}}€</span></li>



</ul>  
<button><NuxtLink to='/services'>En savoir plus</NuxtLink></button> 

  </div>


         
  <img src="/kante.jpg" alt="" id="cover-img" />
  
<!---->
 

</div>
   </div>
</template>

<script>
 
import axios from 'axios';

export default {
  data(){
    return {
            services:''

    }
  },
  mounted(){
this.getServices()
  },
  methods:{

async getServices(){
  const storefrontUrl = 'https://sylla-hair.myshopify.com/api/2023-04/graphql.json';
      const headers = {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': 'e3ea223df9fcaf45d5e3f2b8db88d043',
      };
      const query = `
  {
  collectionByHandle(handle: "Services") {
    title
    handle
    description
    products(first: 30, sortKey: PRICE, reverse: true) {
      edges {
        node {
          title

             description
                      priceRange {
                        minVariantPrice {
                          amount
                          currencyCode
                        }
                      }

                       images(first: 10) {  # Adjust "first" to the maximum number of images you want
                        edges {
                          node {
                            src
                          }
                        }
                      }
        }
      }
    }
  }
}
      `;

      try {
        const response = await axios.post(storefrontUrl, { query }, { headers });
       // const cartData = response.data.data.shop.cart;
      //  const cartQuantity = cartData.lines.reduce((total, line) => total + line.quantity, 0);
    //    this.cartQuantity = cartQuantity;

    console.log(response.data.data.collectionByHandle)

    const services = response.data.data.collectionByHandle.products.edges;
    this.services = services;
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    },
  
  
    }

 }
</script>

<style lang='scss' scoped>

.container{
  
     background-size: cover;
    background-position: center;
       overflow: auto; /* make the main content scrollable */

      color: rgb(0, 0, 0);
     // background-color: #DBDDFF;
        padding: 2%;}
 
        h1{
  font-size: 65px;
  padding: 15px 0;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
     }

    .coupes-container {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;

margin-left: 25px;
 
background: white;
}

.div1 {  grid-area: 1 / 1 / 2 / 2; 
min-height:250px;
display: flex;
flex-direction: column;
justify-content: center;
}



#cover-img { 
  grid-area: 1 / 2 / 2 / 3;
min-height: 250px;
width: 100%;
height: 100%;
     object-fit: cover;
  border-radius: 0 500px 500px 0;
     // object-position: top; /* This will ensure the top of the image is visible */

}

ul{
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;

list-style: inside;
 
      font-size: 20px;
      padding: 10px;
      border-bottom: 1px dotted black;

      .price{
        font-weight: 400;
            font-family: 'Playfair', serif;
    font-size: 25px;
      }

     
}
}

.col{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title{
  font-size: 30px;

}

.name{
  font-size: 20px;
}

.more{
    font-size: 22px;
    margin: 10px 0;
    font-weight: 600;
    border-bottom: 2px solid black;
    padding: 10px;
    width: 250px;
    background-color: white;
    color: black;
    cursor: pointer;
}

@media (max-width:1100px) {
  .header{
  display: block;
 }
h1{
  font-size: 35px;
}
    .coupes-container {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;

margin: auto;
 
background: white;
}
}

@media (max-width:1000px) {

  .coupes-container{
    display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
  }

  .div1{
    grid-area: 1 / 1 / 2 / 2;
    padding: 0;
  }
  
#cover-img{
     grid-area: 2 / 1 / 3 / 2;
     border-radius: 0 0 400px 400px;
  }
}
</style>