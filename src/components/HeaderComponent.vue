<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">page top</router-link> |</li>
        <li><router-link to="/search">let's Ice</router-link> |</li>
        <li><router-link to="/iceChart">Ice-chart</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
* {
  color: #1a405f;
  background-color: #ffbebd;
}
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}
li {
  margin-left: 20px;
}
nav a.router-link-exact-active {
  color: #1a405f;
}
</style>
