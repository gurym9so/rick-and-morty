<template>
  <div class="body">
    <div class="body_wrapper">
      <div class="start_wrapper">
        <div class="body_start">The Rick and Morty API</div>
      </div>
      <Card :cardInfo="cardInfo" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";
export default {
  components: { Card },
  data() {
    return {
      cardInfo: [],
    };
  },
  methods: {
    async fetchHero() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character?limit=10"
        );
        this.cardInfo = response.data.results;
      } catch (error) {
        alert("Ошибка при получении данных");
      }
    },
  },
  mounted() {
    this.fetchHero();
  },
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
