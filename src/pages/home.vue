<template>
  <div class="body">
    <div class="body_wrapper">
      <div class="start_wrapper">
        <div class="body_start">The Rick and Morty API</div>
      </div>
      <div class="filtered_form">
        <form class="form"></form>
      </div>
      <div>
        <Card :cardInfo="cardInfo" />
      </div>
    </div>
  </div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";
export default {
  components: { Card },
  data() {
    return {
      cardInfo: [],
      pageCount: 2,
    };
  },
  methods: {
    async fetchHero() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/?page=1"
        );
        this.cardInfo = response.data.results;
      } catch (error) {
        alert("Ошибка при получении данных");
      }
    },
    async loadMoreHero() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${this.pageCount}`
        );
        this.cardInfo = [...this.cardInfo, ...response.data.results];
      } catch (error) {
        alert("Ошибка при получении данных");
      }
    },
  },
  mounted() {
    this.fetchHero();
    var options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    var callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadMoreHero();
        this.pageCount++;
      }
    };
    var observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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
.filtered_form {
  display: flex;
  justify-content: center;
  min-height: 40px;
  background-color: lightgray;
}
.body_start {
  padding-top: 20px;
  font-size: 30px;
}
</style>
