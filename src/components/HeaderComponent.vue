<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">page top</router-link> |</li>
        <li><router-link to="/search">let's ice</router-link> |</li>
        <li><router-link to="/iceChart">ice-chart</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
* {
  color: #e68cb6;
  background-color: rgb(255, 240, 240);
}
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}
li {
  margin-left: 20px;
}
</style>
