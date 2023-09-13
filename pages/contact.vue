<template>
  <div class="wrapper">


     <div class="hero-container">

<transition name="nested">


        <div v-if="showText==true" class="hero-text">

                <h1>Contact</h1>

                <p class="description">Pour toute prise de rendez-vous ou demande d'informations supplémentaires veuillez nous contacter par email ou directement par téléphone.</p>
       
       <div class="contacts">
        <div class="contact">
                   <div> <img src="/geranium.webp" class="icon" alt=""></div>

            <p>Email : Sylla-Hair@gmail.com</p>
        </div>

             <div class="contact">
                       <div> <img src="/geranium.webp" class="icon" alt=""></div>

            <p>Teléphone : 01 42 42 42 42</p>
        </div>
       </div>
       
       
       

            <div class="socials">
                    <img src="/facebook.webp" class="icon" alt="">
                    <img src="/tik-tok.webp" class="icon" alt="">
                    <img src="/instagram.webp" class="icon" alt="">

                </div>
         </div>
         </transition>
<transition name="nested">
<iframe v-if="showImage==true" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10492.934545043014!2d2.354644299999986!3d48.89188440803472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e6413af57d9%3A0x33fdb5d52d2d5e9c!2s10%20Rue%20Marcadet%2C%2075018%20Paris!5e0!3m2!1sfr!2sfr!4v1688748508482!5m2!1sfr!2sfr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </transition>

 
 </div>
  
  
  </div>
</template>

<script>
 
 import { useHead } from 'unhead';

export default {

components:{
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
  title: 'Massi Hair Coiffure : Nous sommes à votre écoute',
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
methods:{
    anim(){
     this.showImage = true;
     this.showText = true;
    
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
    border-radius: 500px 500px 0 0;
 
 }

 .description{
    font-size: 20px;
        text-align: left;
        padding: 15px 0;
margin: auto;
 }
iframe{
     object-fit: cover;
    width: 50%;
    min-height: 100vh;
     border-radius: 0 0 500px 500px;
 
}
.icon{
    height: 40px;
}

.socials{
    display: flex;
    justify-content: center;
 
    .icon{
        height: 30px;
        padding: 10px 25px 10px 0;
        margin: 10px;
    }
}

.contacts{
    display: flex;
    flex-direction: column;
}
.contact{
    display: flex;
        align-items: center;
         font-size: 22px;

         p{
                     margin-left: 15px;

         }

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

    @media (max-width:750px) {
        .hero-container{
            flex-direction: column;
        }

h1{
    font-size: 40px;
}
        iframe{
     object-fit: cover;
    width: 100%;
    min-height: 100vh;
     border-radius: 0 0  300px 300px ;
 
}

.hero-text{
 display: flex;
 flex-direction: column;
 justify-content: space-between;
         width: auto;
         padding: 0 25px;
    background-color: #fcf0db;
    min-height: 100vh;
 
 }

    }
}
</style>