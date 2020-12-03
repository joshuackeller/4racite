<template>
<div>
<div class="title_wrap">
  <div class="title_con">
    <h1 class="race_title">Races</h1>
  </div>
</div>
<HelloWorld :races="races"/>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    races () {
    return this.$root.$data.races
    }
  }
}
</script>

<style scoped>

@font-face {
    font-family: "ChunkFive-Regular";
    src: url("/assets/ChunkFive-Regular.otf");
}
.title_wrap {
  display: flex;
  justify-content: center;
}
.race_title {
  font-family: "ChunkFive-Regular";
  width: 100px;
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
