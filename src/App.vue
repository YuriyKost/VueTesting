<template>
  <div id="app" >
    <RootComponent />
  </div>
</template>

<script>
import RootComponent from "@/components/RootComponent";


export default {
  name: 'App',
  components: {
    RootComponent,

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;



}
#app::before {
  content: '';
  position: fixed; /* Фиксируем на одном месте */
  left: 0; right: 0; /* Вся ширин */
  top: 0; bottom: 0; /* Вся высота */
  z-index: -1; /* Фон ниже текста */
  /* Параметры фона */
  background: url("./assets/bg3.jpg") center / cover no-repeat;
  filter: blur(5px); /* Размытие */
}


</style>
