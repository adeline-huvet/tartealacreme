<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        
        <li><router-link to="/page1">Page1</router-link></li>
        
        <li><router-link to="/page2">Page2</router-link></li>
        
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import Link from './Link.vue';
export default {
  name: "NavBar",
  
};
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 5px;
    }
    li {
        margin: 5px;
    }
</style>