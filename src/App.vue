<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #app .component-container {
    max-width: 780px;
    margin: 0 auto;
  }
  
  #app .centered-content {
    height: 80vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
