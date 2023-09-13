<template>
  <div class="wrapper">
     <div class="hero-container">

                <transition name='nested'>

        <div v-if='showText==true' class="hero-text">

                <h1>Expertise et excellence à votre service</h1>

                <p class="description">Découvrez l'excellence de la coiffure et des soins capillaires chez Massi Hair, votre destination de confiance pour une beauté sans compromis. Spécialistes des coiffures afro haut de gamme, notre équipe expérimentée allie expertise et professionnalisme pour vous offrir des services exceptionnels.

</p>
                <p class="description">Plongez dans une expérience de coiffure unique, où chaque touche révèle l'art et l'attention portée à vos cheveux. Notre engagement envers la qualité supérieure se reflète dans chaque coiffure soigneusement réalisée, célébrant votre individualité.



</p>

                <p class="description">Nous comprenons l'importance de soigner vos cheveux. Nos soins capillaires de premier plan nourrissent et revitalisent vos mèches, révélant leur éclat naturel. Notre fondatrice expérimentée veille à ce que chaque étape de votre parcours capillaire soit empreinte de professionnalisme et d'expérience.



</p>

                <p class="description">Massi Hair, c'est bien plus qu'un salon : c'est un espace où votre beauté rayonne grâce à notre dévouement envers l'excellence. Rejoignez-nous pour une expérience capillaire qui allie qualité, expertise et passion.

.

</p>
                <p class="description">Bienvenue dans l'univers Massi Hair, où chaque coiffure est une œuvre d'art et chaque soin est une célébration de votre beauté.






</p>

                <button @click="nav('services')">En savoir plus</button>
        </div>

                </transition>


        <transition name='nested'>
          <!----> <img src="/braids-hairstyles-2021-pictures-ipdddirj8oijvqdk.jpg" id="cover-img"> 
 
         </transition>
    
    </div>
  </div>
</template>

<script>
  import { useHead } from 'unhead';


export default {

    data(){
        return {
showImage:'',
showText:''
        }
    },

components:{
 },
   mounted() {
this.showImage = true; 
this.showText=true;

useHead({
  title: 'Sylla Hair - Une gamme de services à la hauteur de vos exigences',
    htmlAttrs: {
                lang: 'fr',
            },
   meta: [
    { name: 'description', content: 'Massi Hair est un salon de coiffure spécialisé dans les soins capillaires de haut standing ainsi que dans la commercialisation de cheveux vietnamiens de qualité supérieure, de perruques et perruques médicales accessibles à toutes.'},
        { name: 'og:description', content: 'Massi Hair est un salon de coiffure spécialisé dans les soins capillaires de haut standing ainsi que dans la commercialisation de cheveux vietnamiens de qualité supérieure, de perruques et perruques médicales accessibles à toutes.'},
         { name: 'og:title', content: 'Massi Hair Coiffure, Soins, Produits Capillaires,Cheveux Vietnamiens, Perruques et Perruques médicales' },
       //  { name: 'og:image', content:' image.value' },
                  { name: 'og:url', content: "https://Sylla-Hair.fr" },
           { name: 'keywords', content: ["Coiffure,Mèches,Tissages,Perruques,Perruques médicales,Confection de perruques,Coloration,Brushing,Shampoing,Cheveux Vietnamiens,Ethique,Haut standing,E-commerce,Shopify,Mèches de bonne qualité, Tissage de bonne qualité, Coiffure de bonne qualité, Salon Afro, Cheveux Afro, Knotless, Vanille, Braids, Sur rendez-vous,Paris, Île-de-France, IDF, France"]  },

 
 

  ],
})
},
  methods:{
             nav(id) {
  
  const position = document.getElementById(id).offsetTop;
    // smooth scroll
   window.scrollTo({ top: position, behavior: "smooth" });  
  },
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