<template>
  <div id="app">
  <div class="header_wrap">
<div class="header">
  <div id="main_logo">
  <router-link to="/">
    <div class="logo_wrap">
        <a id="home_link">Racite</a>
    </div>
    </router-link>
  </div>
</div>
</div>


<div class="navBarWrap">
  <ul class="navBar">
    <li class="navItem">
      <router-link to="/">
        <a class="navLink">Home Page <span class="sr-only">(current)</span></a>
      </router-link>
    </li>
    <li class="navItem active">
    <router-link to="/races">
      <a class="navLink">Races <span class="sr-only">(current)</span></a>
      </router-link>
    </li>
    <li class="navItem active">
      <router-link to="/about">
      <a class="navLink" href="../About/about.html">Favorites<span class="sr-only">(current)</span></a>
      </router-link>
    </li>
    <li class="navItem active">
      <router-link to="/FAQ">
      <a class="navLink" href="../FAQ/faq.html">Add a Runner<span class="sr-only">(current)</span></a>
      </router-link>
    </li>
    <li class="navItem active">
      <router-link to="/Rankings">
      <a class="navLink" href="../Rankings/rankings.html">Runners<span class="sr-only">(current)</span></a>
      </router-link>
    </li>
  </ul>
</div>
<div class="line">
<hr class="myline">
</div>
<router-view />
  <footer class="page-footer text-center py-3">This is a link to my githup repository: <a class="link" href="https://github.com/joshuackeller/4racite.git">https://github.com/joshuackeller/4racite.git</a></footer>
  
</div>
</template>

<style>
a:link {
text-decoration: none;
}
a:visited {
text-decoration: none;
}
a:hover {
text-decoration: none;
}
a:active {
text-decoration: none;
}
body {
  font-family: 'Kumbh Sans', sans-serif;
  margin: 0px;
  padding: 0px;
}
@font-face {
    font-family: "ChunkFive-Regular";
    src: url("./assets/ChunkFive-Regular.otf");
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
#main_logo {
    display: flex;
    justify-content: center;
}
.logo_wrap {
  width: 230px;
  margin-top: 30px;
}
.nav a{
  font-weight: bold;
  color: black;
  text-decoration: none!important;
}
.nav a:hover {
  color: #8656df!important;
}
#home_link {
    width: 2px;
    margin-top: 30px;
    font-family: "ChunkFive-Regular"!important;
    font-size: 400%;
    color: #8656df;
    background-color: #FFB800;
    text-shadow: -3px 3px 1px #ffffff;
    text-align: center;
    padding: 0px 15px 0px 15px;
    border: solid;
    border-width: 2px;
    border-color: #FF2121;
    border-radius: 10px;
    text-decoration: none;
}
#home_link:hover{
text-decoration: none;
}
.line {
  margin-top: 15px;
  width: auto;
}
.carousel, .carousel-inner {
  height: 550px;
}
.bg-light {
    background-color: white!important;
}
.collapse {
  display: flex!important;
  justify-content: center;
}
.thething{
  color: red!important!;
}
.myLine {
  background-color: #FF2121;
}
.options_wrap {
display: flex;
justify-content: center;
width: 100%;
margin-top: 20px;
}
.options_con {
display: flex;
justify-content: center;
flex-wrap: wrap;
}
.options_item {
  margin-top: 20px;
  height: 500px;
  width: 45%;
  margin: 5px;
}
.options_item p {
  width: 90%;
}
.option3 {
  text-align: center;
}
.option2{
  text-align: center;
}
@media only screen and (max-width: 400px) {
  .carousel, .carousel-inner {
    height: 250px;
  }
  .options_item {
    width: 90%;
    height: 400px;
  }
  .navBar{
    width: 360px;
  }
}
.navBarWrap{
  display: flex;
  justify-content: center;
}
.navBar{
  padding: 0px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
}
.navItem a{
    color: #8656df!important;
    font-size: 18px;
}
.navLink:hover{
  text-decoration: none;
  color: #FFB800!important;
}
router-link:hover{
 text-decoration: none;
 }
 .logo_wrap:hover {
 text-decoration: none;
 }
</style>
