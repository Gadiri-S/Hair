<template>
  <div class="wrapper">
    <h1>Nos marques</h1>

    <div class="brands">

        <div class="brand">
            <img src="/Lancome.webp" class="logo-brand" alt="">
                        <img src="/John_Frieda.webp" class="logo-brand" alt="">
            <img src="/Lakmé.webp" class="logo-brand" alt="">
                        <img src="/LOreal.webp" class="logo-brand" alt="">

 
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
  text-align: center;
}

.brands{
  display: flex;
  justify-content: space-around;
}

.logo-brand{
  height: 45px;
  padding: 25px;
}


@media (max-width:900px) {
  
   h1{
    font-size: 35px;
  }

  .logo-brand{
    height: 25px;
  }
}
</style>