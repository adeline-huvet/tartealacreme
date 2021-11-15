<template>
  <div>
    <nav>
      <ul>
        <Link/>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Link from './Link.vue';
export default {
  name: "NavBar",
  components:{
    Link
  }
};
</script>

<style lang="scss" scoped>

</style>