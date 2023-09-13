<template>
  <div class="wrapper">

    <h1>Nos catégories de produits</h1>
    <div class="products">

     

        <div v-for="collection in collections" :key="collection" class="product">
             <div>  <img :src="collection.node.image.url" class="img-product" alt=""></div> 

     <span class="title">{{collection.node.title}}</span>

 
     <button> <NuxtLink :to="'https://sylla-hair.myshopify.com/collections/'+collection.node.handle"> Commander</NuxtLink></button>
         </div>

          

    

    </div>
          <div> <button class="more"> <NuxtLink to="https://sylla-hair.myshopify.com/collections/all">Voir tous les articles</NuxtLink></button></div> 

  </div>
</template>

<script>
 
import axios from 'axios';

export default {
  data(){
    return {
            collections:''

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
  collections(first: 8) {
    edges {
      node {
        id
        handle
        title
        image {
          altText
          url
        }
      }
    }
  }
}
  `;

  try {
    const response = await axios.post(storefrontUrl, { query }, { headers });
    let collections = response.data.data.collections.edges;
    
    // Filter out the "services" collection
    collections = collections.filter(collection => collection.node.title.toLowerCase() !== "services");

    this.collections = collections;
  } catch (error) {
    console.error('Error fetching cart data:', error);
  }
}
  
  
    }

 }
</script>


<style lang="scss" scoped>

h1{
  font-size: 65px;
  padding: 15px 0;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
}

.products{
  display: flex;
  justify-content: space-evenly;
  padding: 25px;
    flex-wrap: wrap;

}
.product{
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 15px 0;
}

.img-product{
  height: 350px;
  width: 350px;
  object-fit: cover;
  border-radius: 400px 400px 0 0;
}

.title{
  font-size: 35px;
  padding: 10px ;
  font-family: 'Playfair', serif;
  font-weight: 400;
  text-align: center;
}

.price{
  font-size: 32px;
    font-family: 'Playfair', serif;
      padding: 10px 0;
  font-weight: 200;
  color:#000000;

}

 

.more{
display: flex;
justify-content: center;
}

@media (max-width:900px) {
  
  h1{
    font-size: 35px;
  }

  .img-product{
  height: 300px;
  width: 250px;
  object-fit: cover;
  border-radius: 400px 400px 0 0;
}
}
</style>