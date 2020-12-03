<template>
  <div class="home">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/Images/hard.jpg" alt="First slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="options_wrap">
  <div class="options_con">
    <div class="options_item option2">
      <h1 class="thething">New to Racite?</h1>
      <p>Wondering what Racite is? Are you an athlete? Are
      you a race director? Do you want to start your own
      race? If you answered yes to any of those questions,
      you're in the right place. Learn more about why we can
      help you by clicking the link below.</p>
      <router-link to="/FAQ">
      <a href="../About/about.html">Learn More ></a>
      </router-link>
    </div>
    <div class="options_item option3">
      <h1>Races</h1>
      <p>Racite gives complete customization to races.
      We allow races to customize their own pages. Setting
      up a website is difficult, expensive, and time consuming.
      This makes it difficult for races and athletes to have
      an pleasant experience. We are here to take the pain out
      Follow the link below to see what races you can sign up for.</p>
      <router-link to="/races">
      <a href="../Races/races.html">See our races ></a>
      </router-link>
    </div>
  </div>

</div>


  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'*/

export default {
  name: 'Home',
  components: {
    /*HelloWorld*/
  }
}

</script>

<style scoped>
.bannerImage {
max-width: 2500px;
max-height: 650px;


}
</style>
