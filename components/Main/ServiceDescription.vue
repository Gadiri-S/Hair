<template>
  <div class="wrapper">

    <div class="service-container">

        <div class="service-text">
     <h1>Des produits <span class="green">&</span> soins de qualité pour des résultats époustouflants</h1>
     
     <p class="description">Nous sommes spécialisés dans les services de coiffures classiques tels que les soins capillaires, les tresses, les tissages, les nattes mais aussi la confection et la commercialisation de perruques et perruques médicales de qualités à des prix abordables.</p>
     <p class="description">Nous commercialisons aussi des cheveux naturels vietnamiens de très grande qualité.</p>

  
     </div>
       <img src="/Bouncy.jpg" class="portrait" alt="">
 
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
    padding: 10px;
}
.green{
        color: #ebb010;
}

.service-container{
    display: flex;
 
}

.service-text{
    width: 50%;
        background-color: #fcf0db;
        padding: 2%;

}

.description{
    font-size: 22px;
        padding: 10px;
        text-align: left;

}

.portrait{
    width: 50%;
    object-fit: cover;
         z-index: 1;
       border-radius:  0 400px 400px 0;
       background: white;
 
}

.container-img{
    width: 50%;
}

 
 

@media (max-width:1000px) {
    .service-container{
        flex-direction: column;
    }

    .service-text,.portrait{
        width: 100%;
        padding: 0;
    }

    h1{
        font-size: 45px;
    }

    .portrait{
        border-radius: 0 0 400px 400px;
    }

    .description{
    font-size: 20px;
        
}
}
 
</style>