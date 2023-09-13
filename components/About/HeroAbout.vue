<template>
  <div class="wrapper">
     <div class="hero-container">

                <transition name="nested">

        <div  v-if="showText==true" class="hero-text">

                <h1>Notre combat : votre satisfaction</h1>

                <p class="description">Chez Massi Hair, nous sommes convaincus que toutes les femmes ont le droit à des soins et des produits capillaires de qualité supérieure à des prix abordables.</p>

                <button @click="nav('about')">En savoir plus</button>
        </div>

                </transition>


                <transition name="nested">

        <img v-if="showImage==true" src="/portrait-lovely-good-looking-curly-haired-young-woman-keeps-hand-chin-smiles-pleasantly-has-glad-expression-dressed-casual-jumper-isolated-beige-background-authentic-emotions.webp" class="cover-img" alt="">
                </transition>
    
    </div>
  </div> 
</template>

<script>
 
 import { useHead } from 'unhead';

export default {

    data(){
        return {
        
            showText:false,
            showImage:false

        }
    },

    mounted(){

            this.showText=true;
            this.showImage=true;

            useHead({
  title: 'Massi Hair Coiffure : Notre combat, votre satisfaction',
    htmlAttrs: {
                lang: 'fr',
            },
   meta: [
    { name: 'description', content: 'Massi Hair est un salon de coiffure spécialisé dans les soins capillaires de haut standing ainsi que dans la commercialisation de cheveux vietnamiens de qualité supérieure, de perruques et perruques médicales accessibles à toutes.'},
        { name: 'og:description', content: 'Massi Hair est un salon de coiffure spécialisé dans les soins capillaires de haut standing ainsi que dans la commercialisation de cheveux vietnamiens de qualité supérieure, de perruques et perruques médicales accessibles à toutes.'},
         { name: 'og:title', content: 'Massi Hair Coiffure, Soins, Produits Capillaires,Cheveux Vietnamiens, Perruques et Perruques médicales' },
       //  { name: 'og:image', content:' image.value' },
                  { name: 'og:url', content: "https://Massi-Hair.fr" },
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
    align-items: center;
        background-color: #ffffff;

}

h1{
    font-size: 78px;
    text-align: left;
    margin: auto;
    font-weight: 200;
}
button{
    background: #005f3b;
    padding: 10px;
    border: none;
    font-size: 18px;
  font-family: 'Manrope', sans-serif;
  color: white;
  font-weight: 600;
  width: 250px;
  margin: auto;
  cursor: pointer;
}
.green{
        color: #005f3b;

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
.cover-img{
     object-fit: cover;
    width: 50%;
    min-height: 100vh;
     border-radius: 0 500px 500px 0;
 
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