<template>
    <div>
        Listar
        <div v-for="pokemon in pokemons" :key="pokemon.id">
            <div>{{pokemon.name}}</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            pokemons:[]
        }
    },
    created:function(){
        this.consultarPokemon();
    },
    methods:{
        //https://pokeapi.co/api/v2/pokemon/
        consultarPokemon(){
            axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((response)=>{
                //console.log(response.data)
                this.pokemons = response.data.results;
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }    
}
</script>

<style scoped>

</style>