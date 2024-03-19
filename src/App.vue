<template>
  <div class="md-body">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>

<style>
.md-body {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
