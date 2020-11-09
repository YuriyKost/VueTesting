<template>
<div id="ActiveBar">
  im ActiveBar
  <router-view />
  <SuiSegment />

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
  background-color: #204254;
}

</style>