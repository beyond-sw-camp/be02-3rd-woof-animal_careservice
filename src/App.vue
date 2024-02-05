<template>
  <HeaderComponent />
  <router-view></router-view>
  <FooterComponent />
  <GoToBtnComponent />
</template>


<script>
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
import GoToBtnComponent from "./components/GoToBtnComponent.vue"

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    GoToBtnComponent
  }
}
</script>

<style>
body {
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-weight: bold;
}
</style>
