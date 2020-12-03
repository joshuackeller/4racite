<template>
<div class="FAQ">
<div class="about_wrap">
    <div class="about_con">
      <h1 class="about_header">Runners</h1>
    </div>
  </div>
  <h2 class="addr">Add a Runner</h2>
  <div class="add">
    <div class="form">
        <input v-model="name" placeholder="Name"><p></p>
        <input v-model="age" placeholder="Age"><p></p>
        <input v-model="won" placeholder="Recent Races Won"><p></p>
        <h5>Photo</h5>
        <input type="file" name ="photo" @change="fileChanged">
        <div class="upload" v-if="addItem">
          <h2>{{addItem.name}}</h2>
          <img :src="addItem.path" />
        </div>
        <button class="but" @click="upload">Upload</button>
    </div>
  </div>

  <h2 class="deleter">Delete an Item</h2>
    <div class="add">
      <div class="form">
        <input v-model="findName" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.name}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.name">
        <p></p>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <button class="but" @click="deleteItem(findItem)">Delete</button>
      </div>
    </div>


    <h2 class="deleter">Edit an Item</h2>
    <div class="add">
      <div class="form">
        <input v-model="findName" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectEditItem(s)">{{s.name}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findEditItem">
        <input v-model="findEditItem.name">
        <input v-model="findEditItem.age">
        <input v-model="findEditItem.won">
        <p></p>
        <img :src="findEditItem.path" />
      </div>
      <div class="actions" v-if="findEditItem">
        <button class="but" @click="editItem(findEditItem)">Edit</button>
      </div>
    </div>

</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FAQ',
  data() {
    return {
      name: "",
      age: "",
      won: "",
      file: null,
      addItem: null,
      items: [],
      findName: "",
      findItem: null,
      findEditItem: null,
    }
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return items.sort((a, b) => a.name > b.name);
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          name: this.name,
          won: this.won,
          age: this.age,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
        }
    },
    selectItem(item) {
      this.findName = "";
      this.findItem = item;
    },
    selectEditItem(item) {
      this.findName = "";
      this.findEditItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          name: this.findEditItem.name,
          won: this.findEditItem.won,
          age: this.findEditItem.age,
        });
        this.findEditItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>


<style scoped>
.upload img {
  max-height: 200px;
}
.but {
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  background: #EFEFEF;
  margin: 0px 0px 0px 0px;
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid gray;
  margin-top: 5px;
}

.but:hover {
  background: transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  background: #DBDBDB;
  margin: 0px 0px 0px 0px;
  padding: 2px 8px;
  border-radius: 3px;
  border: 1px solid gray;
  margin-top: 5px;
}

.but:active {
  outline: none;
  border: none;
}

.but:focus {
  outline: 0;
}
.upload {
  margin-left: 5%;
}
.actions {
 margin-left: 5%;
}
.deleter {
  margin-top: 50px;
  margin-left: 5%;
}
.addr {
  margin-top: 25px;
  margin-left: 5%;
}
.form {
 margin-left: 5%;
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
  width: 170px;
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
