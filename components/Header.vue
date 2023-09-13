<template>
  <div class="wrapper">

    <!-- Header Desktop -->
<!---->
 <header class="desktop">

    <div class="logo">
     <NuxtLink to='/'>   <img src="/logo.webp" class="logo" alt=""> </NuxtLink>
    </div>

            <nav>
    <ul>
        <li> <NuxtLink to="/"> Accueil</NuxtLink> </li>
         <li> <NuxtLink to="/services"> Services Coiffure & Soins </NuxtLink> </li>       
         <li><NuxtLink to="https://sylla-hair.myshopify.com/"> Boutique en ligne</NuxtLink></li>
        <button> <NuxtLink to='/contact'> Contact </NuxtLink> </button>
    </ul></nav>

    <div class="cart">
        <img src="/shopping-bag.webp" class="icon" alt="">
    </div>
 </header> 
     <!-- Header Desktop End -->





     <!-- Header Mobile -->


 <header class="mobile">

<div class="first-row">
    <div class="logo">
   <NuxtLink to ="/">  <img src="/logo.webp" class="logo" alt=""> </NuxtLink>
    </div>
                <img src="/menu.webp" class="menu-icon" alt="" @click="showMenu">
     </div>

    
            <nav>

              
                  <transition name="nested">

    <div v-if=show>
    <ul class="nav-mobile">
           <li> <NuxtLink to="/"> Accueil</NuxtLink> </li>
         <li> <NuxtLink to="/services"> Services Coiffure & Soins </NuxtLink> </li>       
         <li><NuxtLink to="https://sylla-hair.myshopify.com/"> Boutique en ligne</NuxtLink></li>
        <li> <NuxtLink to="/contact"> Contact </NuxtLink> </li>       
    </ul></div>
                  </transition>
    </nav>

   
 </header>



     <!-- Header Mobile End -->
  </div>
</template>

<script>
export default {

    data(){
        return {
            show:false
        }
    },
    methods:{
        showMenu(){
            this.show = !this.show;
        }
    }

}
</script>

<style lang="scss" scoped>

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}

 
.logo{
    height: 65px;
 }
ul{
        display: flex;
        align-items: center;

    li{
        list-style: none;
        font-size: 20px;
        margin: 0 15px;
    }
}

button{
    background: #000000;
    padding: 10px;
    border: none;
        font-size: 20px;
  font-family: 'Manrope', sans-serif;
  color: white;
  font-weight: 400;
  width: 150px;
  margin: auto;

  a{
    color: white;
  }
}


.cart{

    padding: 0 15px;
.icon{
    height: 35px;
}}


.mobile {
display: none;
}

@media (max-width:1200px) {
    
    .desktop{
        display: none;
    }
    .mobile{
        display: block
    }
}

.first-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.menu-icon{
    height: 40px;
    background: #000000;
    padding: 5px;
    cursor: pointer;
}

.nav-mobile{
    flex-direction: column;
    align-items: flex-start;
    background-color: #fcf0db;
 
    li{
        font-size: 22px;
        padding: 10px;
     }
}

 .nested-enter-active, .nested-leave-active {
      transition: all 0.3s ease-in-out;
  }
  /* delay leave of parent element */
  .nested-leave-active {
    transition-delay: 0.25s;
  }
  
  .nested-enter-from,
  .nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
  }
  
  /* we can also transition nested elements using nested selectors */
  .nested-enter-active .inner,
  .nested-leave-active .inner { 
    transition: all 0.3s ease-in-out;
  }
  /* delay enter of nested element */
  .nested-enter-active .inner {
      transition-delay: 0.25s;
  }
  
  .nested-enter-from .inner,
  .nested-leave-to .inner {
    transform: translateX(30px);
    /*
        Hack around a Chrome 96 bug in handling nested opacity transitions.
      This is not needed in other browsers or Chrome 99+ where the bug
      has been fixed.
    */
    opacity: 0.001;
  }
</style>