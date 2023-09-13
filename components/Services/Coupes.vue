<template>
  <div class="wrapper">
    <div class="container" id='services'>

        <div v-for="service in services" :key="service" class="coupe">
<img :src="service.node.images.edges[0].node.src" class="img-cover" alt="">
<h3>{{service.node.title}}</h3>
 <span class="price">à partir de {{Math.trunc(service.node.priceRange.minVariantPrice.amount)}}€</span>
        </div>

 

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
  const storefrontUrl = 'https://massi-hair.myshopify.com/api/2023-04/graphql.json';
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


<style lang="scss" scoped>

.container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2%;
}

.coupe{
    display: flex;
    flex-direction: column;
align-items: center;
}

.img-cover{

    height: 350px;
    width: 400px;
    border-radius: 0 0 500px 500px;
     margin: 5px;
    object-fit: cover;

}

h3{
    font-size: 35px;
    margin: 5px 0;
}
.description{
    font-size: 22px;
}
.price{
    font-family: 'Playfair', serif;
    font-size: 30px;
}
</style>