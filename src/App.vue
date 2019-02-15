<template>
  <div id="app">
    <Fitty :options="options">
      <template v-slot:content>
        <h1>Huge text</h1>
      </template>
    </Fitty>
  </div>
</template>

<script>
import Fitty from "./components/Fitty.vue";


export default {
  name: "app",
  data: () => ({
    options: {
      minSize: 18,
      maxSize: 120
    }
    
  }),
  components: {
    Fitty
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: 0;
}
img {
  width: 100%;
  margin: 0;
}
body,
html {
  padding: 0;
  margin: 0;
}
</style>
