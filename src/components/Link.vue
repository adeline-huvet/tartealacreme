<template>
    <div>
        <li>
            <router-link to="/route">
                {{ nom }}
            </router-link>
        </li>
    </div>
</template>

<script>
export default {
   name: "Link",
   props: [
       "route",
       "nom",
   ] 
}
</script>

<style lang="scss" scoped>

</style>