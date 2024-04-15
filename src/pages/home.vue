<template>
  <div class="body">
    <div class="body_wrapper">
      <div class="start_wrapper">
        <div class="body_start">The Rick and Morty API</div>
      </div>
      <br />
      <FilteredForm
        :locationHero="locationHero"
        @update:nameInputValue="nameInputValue = $event"
        @callFiltr="handleClick"
      />
      <router-link
        :to="{ name: 'infoAboutPers', params: { id: idHero } }"
        class="link"
      >
        <Card
          :cardInfo="cardInfo"
          @getPersInCard="getPers"
          v-if="showCard === false"
        />
        <FilteredCard :filteredCardInfo="filteredCardInfo" v-else />
      </router-link>
    </div>
  </div>
  <div ref="observer" class="observer"></div>
</template>
<script>
import Card from "@/components/Card.vue";
import FilteredForm from "@/components/FilteredForm.vue";
import axios from "axios";
import FilteredCard from "@/components/FilteredCard.vue";

export default {
  components: { Card, FilteredForm, FilteredCard },
  data() {
    return {
      cardInfo: {},
      filteredCardInfo: {},
      pageCount: 2,
      locationHero: {},
      idHero: 0,
      nameInputValue: "",
      showCard: false,
    };
  },
  methods: {
    getPers(id) {
      this.idHero = id;
    },
    handleClick() {
      console.log("gggg");
      this.fetchFilteredByNameHero();
      this.showCard = true;
    },
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
    async fetchFilteredByNameHero() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${this.nameInputValue}`
        );
        this.filteredCardInfo = response.data.results;
      } catch (error) {
        alert("Ошибка при получении данных");
      }
    },
    async fetchLocation() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location"
        );
        this.locationHero = response.data.results;
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
    this.fetchLocation();
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
.link {
  color: black;
  text-decoration: none;
}
</style>
