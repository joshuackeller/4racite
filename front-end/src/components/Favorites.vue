<template>
  <div class="hello">
  <div class="wrapper" v-if="this.$root.$data.favs.length > 0">
  <div class="races_wrap">
    <div class="races_con" v-for="race in races" :key="race.id">
    <div class="races_item race1">
      <img :src="'/Images/' + race.image" class="race_photo" >
      <h5>{{race.name}}</h5>
      <p>{{race.date}}</p>
      <button v-on:click="removeRace(race)" class="auto">Remove</button>
    </div>
  </div>
</div>
</div>
<div class="nofavs" v-else>
  <h2>You have not selected any favorites.</h2>
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
      removeRace(race) {
      let raceIndex = this.$root.$data.favs.indexOf(race)
      this.$root.$data.favs.splice(raceIndex,1)
      this.$root.$data.races[race.id].fav = false;
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
.nofavs{
display: flex;
justify-content: center;
}
@media only screen and (max-width: 400px) {
  .races_item {
    width: 300px;
    height: 380px;
  }
}
</style>
