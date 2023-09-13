<template>
  <div class="wrapper">
     <div  class="hero-container">

<transition name='fade'>
 
        <div     class="hero-text">

                <h1 >La meilleure solution en matière de soins <span class="green">&</span> produits capillaires</h1>

                <p class="description">Chez Sylla Hair, nous croyons en la qualité et l'excellence. C'est pourquoi nous proposons une vaste gamme de produits et de services pour répondre à l'ensemble de vos attentes en matière de soins et produits capillaires.</p>

          <button>     <NuxtLink to="https://sylla-hair.myshopify.com/"> Voir notre magasin</NuxtLink></button> 
        </div>

</transition>


             <transition   name="nested">           


        <video v-if="showImage"  muted autoplay loop id="cover-img" alt="">
         <!-- <source src="../assets/pexels-mikhail-nilov-7626732.webm" type="video/mp4"> -->
                             <source src="/pexels-mikhail-nilov-7626450.mp4" type="video/mp4">

                    <source src="/pexels-mikhail-nilov-7626450.mp4" type="video/mp4">

        </video>
     </transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
 import { useHead } from 'unhead';
 

export default {

components:{
    Header
},
data() {
    return {
      showImage: false,
      showText:false
    };
  },
  mounted() {
this.showImage = true; 
this.showText=true;
useHead({
  title: 'Sylla Hair - Vente de Perruques & Salon de Coiffure Afro',
    htmlAttrs: {
                lang: 'fr',
            },
   meta: [
    { name: 'description', content: 'Sylla Hair est un salon de coiffure spécialisé dans les soins capillaires de haut standing ainsi que dans la commercialisation de cheveux vietnamiens de qualité supérieure, de perruques et perruques médicales accessibles à toutes.'},
        { name: 'og:description', content: 'Sylla Hair est un salon de coiffure spécialisé dans les soins capillaires de haut standing ainsi que dans la commercialisation de cheveux vietnamiens de qualité supérieure, de perruques et perruques médicales accessibles à toutes.'},
         { name: 'og:title', content: 'Sylla Hair Coiffure, Soins, Produits Capillaires,Cheveux Vietnamiens, Perruques et Perruques médicales' },
       //  { name: 'og:image', content:' image.value' },
                  { name: 'og:url', content: "https://Sylla-Hair.fr" },
           { name: 'keywords', content: ["Coiffure,Mèches,Tissages,Perruques,Perruques médicales,Confection de perruques,Coloration,Brushing,Shampoing,Cheveux Vietnamiens,Ethique,Haut standing,E-commerce,Shopify,Mèches de bonne qualité, Tissage de bonne qualité, Coiffure de bonne qualité, Salon Afro, Cheveux Afro, Knotless, Vanille, Braids, Sur rendez-vous,Paris, Île-de-France, IDF, France"]  },

 
 

  ],
})
    },

components:{
 },
 methods:{
             nav(id) {
  
  const position = document.getElementById(id).offsetTop;
    // smooth scroll
   window.scrollTo({ top: position, behavior: "smooth" });  
  }
}

}
</script>

<style lang="scss" scoped>

.hero-container{
    display: flex;
         background-color: #ffffff;

}

h1{
    font-size: 78px;
    text-align: left;
    margin: auto;
    font-weight: 200;
}
button{
 
  margin: 15px auto;
 }
.green{
        color: #000000;

}
.hero-text{
 display: flex;
 flex-direction: column;
 justify-content: space-between;
         width: 50%;
         padding: 0 25px;
    background-color: #fcf0db;
    min-height: 100vh;
 
 }

 .description{
    font-size: 20px;
        text-align: left;
        padding: 15px 0;
margin: auto;
 }
  #cover-img{
  object-fit: cover;
    width: 50%;
  border-radius: 0 500px 500px 0;
 min-height: 100vh; 
}
 .nested-enter-active, .nested-leave-active {
    transition: all 1s ease-in-out;
  }
  /* delay leave of parent element */
  .nested-leave-active {
    transition-delay: 0.25s;
  }
  
  .nested-enter-from,
  .nested-leave-to {
    opacity: 0;
  }
  
  /* we can also transition nested elements using nested selectors */
  .nested-enter-active .inner,
  .nested-leave-active .inner { 
    transition: all 1s ease-in-out;
  }
  /* delay enter of nested element */
  .nested-enter-active .inner {
      transition-delay: 0.25s;
  }
  
  .nested-enter-from .inner,
  .nested-leave-to .inner {
    /*
        Hack around a Chrome 96 bug in handling nested opacity transitions.
      This is not needed in other browsers or Chrome 99+ where the bug
      has been fixed.
    */
    opacity: 0.001;
  }


@media (max-width:1200px) {
    
    h1{
        font-size: 60px;
    }

  
}

   @media (max-width:750px) {
        .hero-container{
            flex-direction: column-reverse;
        }

h1{
    font-size: 40px;
}
        #cover-img{
     object-fit: cover;
    width: 100%;
    min-height: 100vh;
     border-radius:  300px 300px 0 0 ;
 
}

.hero-text{
 display: flex;
 flex-direction: column;
          width: auto;
         padding: 0 25px;
    background-color: #fcf0db;
    min-height: auto;
 
 }

    }
</style>