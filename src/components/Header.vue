<template>
  <div class="header">
    <div class="header_wrapper">
      <router-link to="/" class="logo">Rick and Morty</router-link>
      <div class="header_content">
        <router-link to="/about" class="logo">About</router-link>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  min-height: 50px;
}
.header_wrapper {
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  color: black;
  text-decoration: none;
}
.header_content {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
</style>
