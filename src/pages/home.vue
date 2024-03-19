<template>
  <div class="body">
    <div class="body_wrapper">
      <div class="start_wrapper">
        <div class="body_start">The Rick and Morty API</div>
      </div>
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
};
</script>

<style>
.body {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
}
.body_wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
}
.start_wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.body_start {
  padding-top: 20px;
  font-size: 30px;
}
</style>
