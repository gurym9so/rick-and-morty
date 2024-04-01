<template>
  <div class="pers_main">
    <div class="pers_wrapper">
      <img :src="heroInfo.image" class="hero_img" />
      <div class="hero_title padding">{{ heroInfo.name }}</div>
      <div class="padding font_style">
        First created: {{ heroInfo.created }}
      </div>
      <div class="padding font_style">Gender:{{ heroInfo.gender }}</div>
      <div class="padding font_style">
        Location: {{ heroInfo.location?.name }}
      </div>
      <div class="padding font_style">
        Place of Birth: {{ heroInfo.origin?.name }}
      </div>
      <div class="padding font_style">Race: {{ heroInfo.species }}</div>
      <div class="padding font_style">Status: {{ heroInfo.status }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      idHero: this.$route.params.id,
      heroInfo: {},
    };
  },
  methods: {
    async fetchHeroById() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${this.idHero}`
        );
        this.heroInfo = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    get() {
      console.log(this.heroInfo);
    },
  },
  mounted() {
    this.fetchHeroById();
  },
};
</script>

<style>
.pers_main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}
.pers_wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero_img {
  border: 1px solid white;
  border-radius: 50px;
}
.padding {
  padding-top: 7px;
  padding-bottom: 7px;
}
.font_style {
  font-size: 22px;
}
.hero_title {
  font-size: 50px;
  font-weight: bold;
}
</style>
