<template>
  <div class="filtered_form">
    <div class="form">
      <div class="nameFilter">
        <div class="form_text">По имени:</div>
        <input
          type="text"
          placeholder="Имя персонажа"
          class="form_input"
          v-model="nameInputValue"
          @input="emitNameInputValue"
        />
      </div>
      <div class="statusFilter">
        <div class="form_text">Статус:</div>
        <div class="checkbox_wrapper">
          <div>
            <input type="checkbox" />
            <label>Живой</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Мертвый</label>
          </div>
        </div>
      </div>
      <div class="genderFilter">
        <div class="form_text">Место:</div>
        <select class="form_input">
          <option v-for="loc in locationHero">{{ loc.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    locationHero: {
      type: Object,
    },
  },
  data() {
    return {
      nameInputValue: "",
    };
  },
  methods: {
    emitNameInputValue() {
      this.$emit("update:nameInputValue", this.nameInputValue);
    },
  },
};
</script>

<style>
.filtered_form {
  display: flex;
  justify-content: center;
  min-height: 40px;
  background-color: lightgray;
}
.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}
.statusFilter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkbox_wrapper {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.form_text {
  padding-bottom: 5px;
}
.form_input {
  margin-bottom: 5px;
  width: 130px;
}
.body_start {
  padding-top: 20px;
  font-size: 30px;
}
</style>
