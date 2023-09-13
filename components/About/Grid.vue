<template>
  <div class="container">
<div class="div1"></div>
<div class="div2"></div>
<div class="div3">
        <img src="/geranium.webp" class="icon" alt="">

    <h1>Massi Hair c'est l'assurance de recevoir des services et produits de qualité premium à des prix abordables.</h1>
</div>
<div class="div4"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 25px;
grid-row-gap: 25px;

        background-color: #fcf0db;

}

.div1 { grid-area: 1 / 2 / 3 / 3; 
 background: url('/fleur-kaan-e7jpGYe7OtU-unsplash.webp');
background-size: cover;
}
.div2 { grid-area: 3 / 2 / 5 / 3;
 background: url('/benyamin-bohlouli-dDhWJLXEZ5I-unsplash.webp');
background-size: cover;
}
.div3 { grid-area: 1 / 1 / 2 / 2;
height: 100%;
 }
.div4 { grid-area: 2 / 1 / 5 / 2;
background: url('/andrea-donato-MGt5tcLebds-unsplash.webp');
background-size: cover;
}

h1{
    padding: 20px;
    text-align: left;
    font-weight: 300;
}

.icon{
    height: 80px;
    margin: 15px 0;
}


@media (max-width:1000px) {

    .container{
        display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
    }

    .div1 { grid-area: 1 / 1 / 2 / 2;
 background: url('/fleur-kaan-e7jpGYe7OtU-unsplash.webp');
 background-position: center;
background-size: cover;
}
.div2 { grid-area: 2 / 1 / 3 / 2; 
 background: url('/benyamin-bohlouli-dDhWJLXEZ5I-unsplash.webp');
  background-position: center;

background-size: cover;
}
.div3 { grid-area: 3 / 1 / 4 / 2;
height: 100%;
 }
.div4 { grid-area: 4 / 1 / 5 / 2;
background: url('/andrea-donato-MGt5tcLebds-unsplash.webp');
background-size: cover;
}
    
} 
</style>
