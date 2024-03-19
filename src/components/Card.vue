<template>
<div class="body_content">
    <div class="card">
      <div class="card_logo">
        <img src="http://surl.li/rssin" class="card_photo"></img>
      </div>
      <div class="card_info">
        <div>Mr poopybutthole</div>
        <div>Alive - Gumanoid</div>
        <br/>
        <div>Last known location:</div>
        <div>Earth</div>
        <br/>
        <div>First seen in:</div>
        <div>Season 1</div>
      </div>
    </div>
  </div>
  <div class="body_content">
    <div class="card">
      <div class="card_logo">
        <img src="http://surl.li/rsslm" class="card_photo"></img>
      </div>
      <div class="card_info">
        <div>Squanchy</div>
        <div>Alive - Gumanoid</div>
        <br/>
        <div>Last known location:</div>
        <div>Earth</div>
        <br/>
        <div>First seen in:</div>
        <div>Season 2</div>
      </div>
    </div>
  </div>
</template>

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
</style>