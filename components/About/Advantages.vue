<template>
  <div class="container">

          <div class="shape-container">
    <div class="shape"><img src="/lovely-curly-haired-woman-enjoys-coziness-wears-new-warm-sweater-embraces-herself-feels-cozy-looks-tenderly-camera-smiles-gently-with-love-isolated-beige-background-hugging-own-body.webp" class="pic" alt=""></div>
       <div> <img src="/rose.webp" class="icon" alt=""></div>

    <span class="title">élégance</span>
    
    </div>

        <div class="shape-container">
    <div class="shape"><img src="/thai-asian-model-smile-with-natural-makeup-beige-background.webp" class="pic" alt=""></div>
    <span class="title">Naturel</span>
       <div> <img src="/rose.webp" class="icon" alt=""></div>

    </div>

         <div class="shape-container">
    <div class="shape"><img src="/kamila-maciejewska-b2bXKspL5MY-unsplash.webp" class="pic" alt=""></div>
   <div> <img src="/rose.webp" class="icon" alt=""></div>
    <span class="title">Professionnel</span>
    
    </div>

  </div>
</template>

<script>
export default {


}
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
        background-color: #fcf0db;
        padding: 25px 0;

  }

  .shape-container{
    display: flex;
    flex-direction: column;
  }

.pic{
    height: 500px;
    width: 350px;
     border-radius: 0 0 500px 500px;
    margin: 15px;
    object-fit: cover;
}

.title{
  font-size: 35px;
  padding: 10px ;
  font-family: 'Playfair', serif;
  font-weight: 400;
  text-transform: capitalize;
}

.icon{
    height: 45px;
}

</style>