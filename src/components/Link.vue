<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link.title">
        <router-link :to="link.route">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {
        //eventuelement connection a une base de donnée pour la creation dynamique de liens
      links: [
        {
          title: "Home",
          route: "/"
        },
        {
          title: "Page1",
          route: "/page1"
        },
        {
          title: "Page2",
          route: "/page2"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 5px;
    }

    li{
        margin: 5px;
    }
</style>
