<template>
<div class="card_main">
  <div class="body_content" v-for="info in cardInfo" @click="getPers(info.id)">
    <div class="card">
      <div class="card_logo">
        <img :src="info.image" class="card_photo"></img>
      </div>
      <div class="card_info">
        <div>{{info.name}}</div>
        <div>{{ info.status }} - {{ info.species }}</div>
        <br/>
        <div>Last known location:</div>
        <div>{{ info.location.name }}</div>
        <br/>
        <div>First seen in:</div>
        <div>{{ info.origin.name}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  props:{
    cardInfo:{
      type: Object,
    }
  },
  methods:{
    getPers(id){
      this.$emit("getPersInCard", id)
    }
  }
}
</script>

<style>
.body_content {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}
.card{
  display: flex;
  flex-direction: row;
  gap: 20px;
  border: 1px solid black;
  border-radius: 20px;
}
.card_photo{
  height: 100%;
  width: 180px;
  border-top-left-radius:20px;
  border-bottom-left-radius:20px;
}
.card_info{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.id{
  display: none;
}
</style>