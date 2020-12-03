<template>
<div class="FAQ">
<div class="about_wrap">
    <div class="about_con">
      <h1 class="about_header">Runner Rankings</h1>
    </div>
  </div>

  <div class="home">
    <section class="image-gallery">
      <div class="image" v-for="item in items" :key="item.id">
        <h2>{{item.name}}</h2>
        <img :src="item.path" />
        <p>Age: {{item.age}}</p>
        <p>Recent Races Won: {{item.won}}</p>
      </div>
    </section>
  </div>


</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Rankings',
  data() {
    return {
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.image img{
  max-height: 200px;
}
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
  width: 375px;
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
