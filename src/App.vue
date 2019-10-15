<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

    import {Container,Sprite,Graphics} from 'pixi.js';
    export default {
        name: 'App',
        data () {
            return {
            }
        },
        components:{
            End,
            Pend
        },
        computed:{

        },
        mounted() {

        }
    }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: black;
  }

  #app {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
</style>
