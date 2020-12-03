<template>
  <div class="hello">
  <div class="wrapper">
  <div class="races_wrap">
    <div class="races_con" v-for="race in races" :key="race.id">
    <div class="races_item race1">
      <img :src="'/Images/' + race.image" class="race_photo" >
      <h5>{{race.name}}</h5>
      <p>{{race.date}}</p>
      <button v-on:click="addToFavs(race)" class="auto">Add to Favorites</button>
    </div>
  </div>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    races: Array
  },
  methods: {
      addToFavs(race) {
        if (!this.$root.$data.races[race.id].fav) {
          this.$root.$data.favs.push(race)
          this.$root.$data.races[race.id].fav = true;
          }
      }
  }
}
</script>

<style scoped>
button {
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
}

.auto {
  margin-left: auto;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title_wrap {
  display: flex;
  justify-content: center;
}
@font-face {
    font-family: "ChunkFive-Regular";
    src: url("/assets/ChunkFive-Regular.otf");
}
.race_title {
  width: 100px;
  font-family: "ChunkFive-Regular";
  font-size: 42px;
}
.races_wrap {
  width: 900px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

}
.races_con {
  width: 350px;
  margin: 22px;
}
.races_item {
  width: 350px;
  height: 380px;
  margin: 50px;
}
.race_photo {
  width: 324px;
  height: 324px;
  margin-bottom: 10px;
}
@media only screen and (max-width: 400px) {
  .races_item {
    width: 300px;
    height: 380px;
  }
}
</style>
