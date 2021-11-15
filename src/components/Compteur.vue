<template>
    <div>
        <h5>Le compteur</h5>

    <p>
        Le total général from VueX est de {{ totalGeneral }}
    </p><hr>

    <p>
        Le double du total est de {{ doubleDuTotal}}
    </p>
    <p>
        <button v-on:click.prevent="increment"> + </button>
        <button v-on:click.prevent="decrement"> - </button>
    </p>
    </div>
</template>


<script>
export default {
    name: 'Compteur',
    data(){
        return {
            total: 10
        }
    },
    computed: {
      totalGeneral(){
          return this.$store.state.totalFromVueX;
      },
      doubleDuTotal(){
          return this.$store.getters.doubleDuTotal;
      }
    },
    methods: {
        increment(){
            // this.totalFromVueX += 1;
            this.$store.commit('setTotalFromVueX', this.totalGeneral += 1);

        },
        decrement(){
            this.$store.commit('setTotalFromVueX', this.totalGeneral -= 1)
        }
    }
}
</script>