<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Top</router-link></li>
        <li><router-link to="/search">Let's Ice</router-link></li>
        <li><router-link to="/iceChart">Ice-chart</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
* {
  color: white;
  background-color: #ffbebd;
  text-decoration: none;
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
  color: white;
  text-decoration: underline;
}
</style>
