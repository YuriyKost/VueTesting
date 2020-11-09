<template>
  <div id="NavBar">
    <div>
      <div>Название</div>
    </div>
    <router-link tag="div" to="/information" > Видео</router-link>
    <router-link tag="div" to="/profile" > профиль</router-link>
    <router-link tag="div" to="/tests" > тесты</router-link>

  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#NavBar {
  grid-area: navbar;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>