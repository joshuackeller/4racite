<template>
<div class="about">
<div class="about_wrap">
  <div class="about_con">
    <h1 class="about_header">Favorites</h1>
  </div>
</div>
<Favorites :races="races"/>
</div>
</template>

<script>
// @ is an alias to /src
import Favorites from '@/components/Favorites.vue'

export default {
  name: 'Home',
  components: {
    Favorites
  },
  computed: {
    races () {
    return this.$root.$data.favs
    }
  }
}
</script>

<style scoped>

@font-face {
    font-family: "ChunkFive-Regular";
    src: url("/assets/ChunkFive-Regular.otf");
}
.about_con {
  display: flex;
  justify-content: center;
}
.about_header {
  font-family: "ChunkFive-Regular";
  width: 179px;
}
.about_p_wrap {
  display: flex;
  justify-content: center;
}
.about_p {
  margin: 20px;
  margin-left: 50px;
  margin-bottom: 30px;
  width: 800px;
}
@media only screen and (max-width: 400px) {
  .about_p {
    margin: 20px;
    width: 300px;
  }
}
</style>
