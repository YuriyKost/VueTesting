<template>
<div id="ActiveBar">
  im ActiveBar
  <router-view />
</div>
</template>

<script>
export default {
name: "ActiveBar"
}
</script>

<style scoped>
#ActiveBar{
  grid-area: ActiveBar;
  background-color: cadetblue;
}

</style>