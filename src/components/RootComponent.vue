<template>
  <div id="RootComponent">
    <NavBar />
    <ActiveBar />
    <SideBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ActiveBar from "@/components/ActiveBar";
import SideBar from "@/components/SideBar";


export default {
  name: 'RootComponent',
  components: {
    SideBar,
    ActiveBar,

    NavBar,
  }
}
</script>

<style scoped>
#RootComponent {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-size: cover;
  width: 80vw;
  min-height: 70vh;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto auto;

  display: grid;

  grid-template-areas:
    "navbar navbar"
    "sideBar ActiveBar";

  grid-template-rows: 60px 1fr;
  grid-template-columns: 5fr 7fr;

}
</style>