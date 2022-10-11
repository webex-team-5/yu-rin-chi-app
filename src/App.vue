<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>
<script>
import Footer from "@/components/FooterComponent.vue"
import Header from "@/components/HeaderComponent.vue"
export default {
  components: {
    Footer,
    Header,
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaisei+Decol&display=swap");

#app {
  font-family: "Kaisei Decol", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
