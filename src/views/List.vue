<template>
    <div>
        <h1>La liste ma gueule !</h1>

        <ul>
            <li v-for="article in articles" v-bind:key="article.id">
                {{article.title}} {{article.price}} €
            <button v-on:click.prevent="ajouter(article)">Add</button>
            <button v-on:click.prevent="supprimer(id)">remove</button>
                
            </li>

        </ul>
        <div class="cart">
            <h1>Le panier</h1>
            <div v-for="article in cart" v-bind:key="article.id">
                <h5>{{article.title}} : {{article.price}} €</h5>
                

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data(){
        return {
            articles: [
                {
                    id: 1,
                    title: "Penderie",
                    price: 100,
                },
                {
                    id: 2 ,
                    title: "Bureau",
                    price: 90,
                },
                {
                    id: 3,
                    title: "Console",
                    price: 399,
                },
                 {
                    id: 4 ,
                    title: "Pc portable Asus",
                    price: 400,
                },
                 {
                    id: 5,
                    title: "Niche",
                    price: 5,
                },
                 {
                    id: 6,
                    title: "Télévision",
                    price: 735,
                },
            ],
            cart: [],
        }
    },
    methods: {
        ajouter(article){
            for(let i = 0; i < this.cart.length; i++){
                if(this.cart[i].id === article.id){
                    return this.cart[i]
                }
            }
            this.cart.push({
                title: article.title,
                price: article.price,
                id: article.id,
            })
            
        },
        supprimer(id){
            this.$delete(this.cart, id)
        }

    }
}
</script>

<style lang="scss" scoped>

</style>