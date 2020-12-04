<template>
<div class="Wser">
<div class="about_wrap">
    <div class="about_con">
      <h1 class="about_header">Western States</h1>
    </div>
  </div>

  <div class="wphoto_wrap">
   <img class="wphoto" src="/Images/states.jpg" alt="Western States">
</div>
<div class="info_wrap">
   <div class="info_con">
     <div class="race_inf">
       <h2 class="wserHeader">Race Info</h2>
       <p>Date: June 26-27, 2021</p>
       <p>Distance: 100 miles</p>
       <p>Participants: 369</p>
       <p>Record Time: 14:09:28 (Jim Walmsley, 2019)</p>
     </div>
     <div class="race_loc">
       <h2 class="wserHeader">Race Location</h2>
       <p>Start: Olympic Valley, CA</p>
       <div id="map"></div>
     </div>
   </div>
 </div>


 <div class="comments_wrap">
 <div class="comments_con">
  <div class="comment-header">
 <h2>Comments</h2>
 </div>
 <div class="home">
  <section class="comment-gallery">
    <div class="comment" v-for="citem in citems" :key="citem.id">
      <h4>{{citem.cname}}</h4>
      <h6>{{citem.comment}}</h6>
      <p>--{{citem.time}}</p>
      <hr>
    </div>
  </section>
</div>
 </div>
 </div>


 <div class="acomments_wrap">
 <div class="acomments_con">
 <hr>
 <h2>Add a Comment</h2>
 <div class="add">
    <div class="form">
        <input v-model="cname" placeholder="Name"><p></p>
        <textarea v-model="comment" placeholder="Comments about the race"></textarea>
        <p></p>
        <button class="but" @click="cUpload">Add Comment</button>
    </div>
  </div>
 </div>
 </div>

    
     <div class="dcomments_wrap">
        <div class="dcomments_con">
        <h2>Delete a comment</h2>
        <input v-model="findCname" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.cname}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findcItem">
        <input v-model="findcItem.cname">
        <p></p>
      </div>
      <div class="actions" v-if="findcItem">
        <button class="but" @click="deleteItem(findcItem)">Delete</button>
      </div>
    </div>

    
    <div class="dcomments_wrap">
     <div class="dcomments_con">
      <h2 class="deleter">Edit an Item</h2>
        <input v-model="findEditCname" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectEditItem(s)">{{s.cname}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findEditcItem">
        <input v-model="findEditcItem.cname">
        <p></p>
        <textarea v-model="findEditcItem.comment"></textarea>
        <p></p>
      </div>
      <div class="actions" v-if="findEditcItem">
        <button class="but" @click="editItem(findEditcItem)">Edit</button>
      </div>
    </div>


</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Wser',
  data() {
    return {
      cname: "",
      comment: "",
      addItem: null,
      time: "",
      citems: [],
      findCname: "",
      findcItem: null,
      findEditCname: "",
      findEditcItem: null,
    }
  },
  computed: {
    suggestions() {
      let citems = this.citems.filter(citem => citem.cname.toLowerCase().startsWith(this.findCname.toLowerCase()));
      return citems.sort((a, b) => a.cname > b.cname);
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async cUpload() {
      try {
        let r2 = await axios.post('/api/comments', {
          cname: this.cname,
          comment: this.comment,
          time: new Date().toLocaleString()
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/comments");
        this.citems = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findCname = "";
      this.findcItem = item;
    },
    selectEditItem(item) {
      this.findEditCname = "";
      this.findEditcItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/comments/" + item._id);
        this.findcItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(citem) {
      try {
        await axios.put("/api/comments/" + citem._id, {
          cname: this.findEditcItem.cname,
          comment: this.findEditcItem.comment
        });
        this.findEditcItem = null;
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
.dcomments_wrap{
    margin-left: 5%;
    margin-top: 50px;
}
.acomments_wrap{
    margin-left: 5%;
}
.comment-header {
    display: flex;
    justify-content: center;
}
.comment-gallery {
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
  width: 300px;
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
.title_wrap {
  display: flex;
  justify-content: center;
}


.races_wrap {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}
.races_con {
  width: 900px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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


.title_wrap {
  display: flex;
  justify-content: center;
}

.race_title {
  width: 300px;
  font-family: "ChunkFive-Regular";
  text-align: center;
}
.races_wrap {
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}
.races_con {
  width: 900px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
.wphoto {
  padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
}
.info_con {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.race_inf {
  width: 400px;
  height: 250px;
  margin: 40px;
}
.race_loc {
  width: 400px;
  height: 250px;
  margin: 40px;
}
.wserHeader{
  text-align: center;
}
@media only screen and (max-width: 400px) {
  .races_item {
    width: 300px;
    height: 380px;
  }
}
#map {
  height: 300px;
  width: 350px;
}
.acomments_wrap {
margin-top: 150px;
}

</style>

