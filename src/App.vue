<template>
    <div id="app">
        <NavBar/>
        <Compteur/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Compteur from './components/Compteur.vue';


export default {
    name: 'app',
    components: {
        NavBar,
        Compteur,
        
        
    }
}
</script>