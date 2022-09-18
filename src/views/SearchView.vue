<template>
  <Header></Header>
  <Search></Search>
  <Footer></Footer>
</template>
<script>
import Search from "@/components/SearchComponet.vue"
import Footer from "@/components/FooterComponent.vue"
import Header from "@/components/HeaderComponent.vue"
export default {
  components: {
    Search,
    Footer,
    Header,
  },
}
</script>
