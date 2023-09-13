<template>
  <div class="wrapper">
<div class="container" id='about'>

    <div class="container-text">
        <h1>Notre philosophie</h1>
        <p class="description">Chez Massi Hair nous croyons en l'importance de l'accessibilité aux soins capillaires pour tous types de cheveux. Nos services sont à la pointe de la technologie pour permettre à toutes de trouver satisfaction.</p>

        <p class="description">Soucieux de permettre à toutes les femmes de se sentir belles et épanouïes, nous avons décidés de répondre à une demande très forte mais malheureusement trop négligée de perruques médicales de très grande qualité à des prix abordables.</p>

        <p class="description">Notre pari est celui de la qualité, du professionnalisme et de l'excellence!</p>

     </div>
    <div class="img-container">

                         <img src="/yellow-wall-texture-with-scratches.webp" class="img-background" alt="">

        <img src="/ali-pazani-3w14X-Yxffk-unsplash.webp" class="img" alt="">
     </div>
    
    
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

 
        h1{
  font-size: 65px;
  padding: 15px 0;
  letter-spacing: 10px;
  text-transform: uppercase;
     }

.container{
    display: flex;
    flex-direction: row-reverse;
    padding: 2%;
        background-color: #fcf0db;

 }
 


.img-background{
      position: relative;
  top: 0;
  left: 0;
     height: 450px;
           width: 450px;
           z-index: 0;
}

.img-container{
  position: relative;
  top: 0;
  left: -75px;
 
}


.img{
 position: absolute;
  top: 30px;
  left: 30px;/**/
       height: 450px;
           width:450px;
    object-fit: cover;  bottom: 425px;
right: -25px;
z-index: 99;
}
.more{
    font-size: 22px;
    margin: 10px 0;
    font-weight: 600;
    border-bottom: 1px solid black;
}
.container-text{
width: 50%;
    h1{
        font-size: 35px;
    }
}

.description{
    font-size: 22px;
    text-align: left;
    padding: 10px 0;
}

@media (max-width:1100px) {
    .img-container{
        display: none;
    }

    .container-text{
        width: auto;
    }

    h1{
        font-size: 30px;
    }

    .description{
        font-size: 22px;
    }
}
</style>