<script setup>
import {useStore} from "vuex";

const store =useStore();
store.commit("addMenu")
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
#app {
  height: 100%;
}
</style>
